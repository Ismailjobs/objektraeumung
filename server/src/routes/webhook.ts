import { Router, Request, Response } from "express";
import crypto from "crypto";
import { telegramService } from "../services/telegramService.js";
import { googleAdsService } from "../services/googleAdsService.js";
import { ClickFraudBan } from "../models/ClickFraudBan.js";

const router = Router();

const IPV4_CIDR = /^(?:\d{1,3}\.){3}\d{1,3}(?:\/\d{1,2})?$/;
const IPV6_CIDR = /^[0-9a-fA-F:]+(?:\/\d{1,3})?$/;

function getHeader(req: Request, name: string): string {
  const v = req.headers[name.toLowerCase()];
  if (typeof v === "string") return v;
  if (Array.isArray(v)) return v[0] ?? "";
  return "";
}

function timingSafeEqualString(a: string, b: string): boolean {
  // Prevent timing leaks and length-based exceptions.
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) return false;
  return crypto.timingSafeEqual(aBuf, bBuf);
}

/**
 * POST /api/webhook/ban
 * Cloudflare Worker calls this when it detects malicious traffic.
 */
router.post("/ban", async (req: Request, res: Response) => {
  const expectedSecret = process.env.BAN_SECRET ?? "";
  const providedSecret = getHeader(req, "x-ban-secret");
  const debug = process.env.WEBHOOK_DEBUG === "true";

  if (!expectedSecret) {
    return res.status(500).json({ success: false, error: "BAN_SECRET is not configured" });
  }

  if (!providedSecret || !timingSafeEqualString(providedSecret, expectedSecret)) {
    return res.status(401).json({ success: false, error: "Unauthorized" });
  }

  const ip = typeof req.body?.ip === "string" ? req.body.ip.trim() : "";
  const reason = typeof req.body?.reason === "string" ? req.body.reason.trim() : "";

  if (!ip) {
    return res.status(400).json({ success: false, error: "ip is required" });
  }

  const ipOk = IPV4_CIDR.test(ip) || IPV6_CIDR.test(ip);
  if (!ipOk) {
    return res.status(400).json({ success: false, error: "invalid ip format" });
  }

  if (debug) {
    console.log("[webhook/ban] received", { ip, reason });
  }

  // Idempotency: if already blocked in Google Ads, don't spam the API repeatedly.
  const existing = await ClickFraudBan.findOne({ ip }).lean().catch(() => null);
  const alreadyBlocked = !!existing?.blockedInGoogleAds;

  const message = `🛡️ Cloudflare Blocked IP: ${ip} | Reason: ${reason || "n/a"}`;

  // Action 1: Telegram (non-critical)
  const telegramPromise = telegramService.sendAlert(message).catch((err) => {
    console.error("[webhook/ban] Telegram error:", err);
  });

  // Action 2: Google Ads (critical – if this fails, return 502 so CF can retry)
  let googleAdsOk = true;
  if (!alreadyBlocked) {
    try {
      await googleAdsService.blockIpOnGoogleAds(ip);
    } catch (err) {
      googleAdsOk = false;
      console.error("[webhook/ban] Google Ads block error:", err);
    }
  }

  // Action 3: Database (optional)
  try {
    const now = new Date();
    await ClickFraudBan.findOneAndUpdate(
      { ip },
      {
        $setOnInsert: { firstDetectedAt: now },
        $set: {
          lastDetectedAt: now,
          source: "cloudflare_worker",
          lastReason: reason || undefined,
          clicksLastHour: 0, // computed in Worker; server stores event only
          blockedInGoogleAds: alreadyBlocked ? true : googleAdsOk,
          blockedInGoogleAdsAt: alreadyBlocked ? existing?.blockedInGoogleAdsAt : googleAdsOk ? now : undefined,
        },
      },
      { upsert: true, new: true }
    );
  } catch (err) {
    console.error("[webhook/ban] DB save error:", err);
  }

  // Don't keep request open for Telegram
  void telegramPromise;

  if (!googleAdsOk) {
    return res.status(502).json({ success: false, error: "Google Ads block failed" });
  }

  return res.status(200).json({ success: true });
});

export const webhookRouter = router;

