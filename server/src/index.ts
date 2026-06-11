import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(__dirname, "..", ".env") });

import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { contactRouter } from "./routes/contact.js";
import { accessRouter } from "./routes/access.js";
import { webhookRouter } from "./routes/webhook.js";
import { connectDb } from "./db.js";
import { clickFraudTracker } from "./middleware/tracker.js";
import {
  getClickCountLastHour,
  recordVisit,
  runProtectionFlow,
  sendTelegramAlert,
} from "./services/protectionService.js";
import { getRealClientIp } from "./utils/ip.js";

const app = express();
const PORT = process.env.PORT ?? 4000;

// Behind Nginx / reverse proxy: trust X-Forwarded-* headers (req.ip etc.)
app.set("trust proxy", 1);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: { error: "Too many requests. Please try again later." },
});

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN ?? "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());
app.use("/api", accessRouter);
app.use("/api/webhook", webhookRouter);
app.use(limiter);
app.use("/api", contactRouter);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

/**
 * Google Ads click tracker endpoint.
 * Next.js middleware calls this ONLY when `gclid` exists on the page URL.
 *
 * Example:
 *   GET /api/track-click?ip=1.2.3.4&gclid=xxxx
 */
app.get("/api/track-click", async (req, res) => {
  try {
    const ipFromQuery = typeof req.query.ip === "string" ? req.query.ip.trim() : "";
    // If middleware couldn't determine IP, fall back to Express req.ip (trust proxy enabled)
    const ipFromReq = getRealClientIp(req);
    const ip =
      (ipFromQuery && ipFromQuery !== "unknown" ? ipFromQuery : "") ||
      (ipFromReq && ipFromReq !== "::1" ? ipFromReq : ipFromReq) ||
      "";
    const gclid = typeof req.query.gclid === "string" ? req.query.gclid.trim() : "";
    const userAgent =
      typeof req.headers["user-agent"] === "string" ? req.headers["user-agent"] : undefined;

    if (!gclid) {
      return res.status(400).json({ ok: false, error: "gclid is required" });
    }

    await recordVisit({ ip, gclid, userAgent });
    const clicksLastHour = await getClickCountLastHour(ip);
    await runProtectionFlow({ ip, gclid, userAgent });

    if (process.env.CLICK_FRAUD_DEBUG === "true") {
      console.log("[track-click]", {
        ip,
        clicksLastHour,
        // avoid logging the full gclid
        gclidPrefix: gclid.slice(0, 6),
      });
    }

    res.json({ ok: true, ip, clicksLastHour, threshold: 3, willBlock: clicksLastHour > 3 });
  } catch (err) {
    console.error("[track-click]", err);
    res.status(500).json({ ok: false });
  }
});

/** Sadece development: Telegram test mesajı gönderir (TELEGRAM_CHAT_ID dolu olmalı). */
if (process.env.NODE_ENV !== "production") {
  app.get("/api/test-telegram", async (_req, res) => {
    try {
      await sendTelegramAlert("🧪 Test: Click fraud protection Telegram bildirimi çalışıyor.");
      res.json({ ok: true, message: "Telegram test mesajı gönderildi." });
    } catch (e) {
      res.status(500).json({ ok: false, error: String(e) });
    }
  });
}

/** Landing page: tracker runs here (IP + gclid logged, fraud protection in background). */
app.get("/", clickFraudTracker, (_req, res) => {
  res.type("html").send(`
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Landing</title></head>
<body>
  <h1>Landing Page</h1>
  <p>Click fraud protection is active. Visits are logged by IP; excess clicks are blocked in Google Ads.</p>
</body>
</html>
  `);
});

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
