/**
 * Click Fraud Protection – sadece Google Ads tıklamasından gelen ziyaretler.
 * URL'de gclid yoksa hiçbir kayıt tutulmaz, ban uygulanmaz. Normal kullanıcı etkilenmez.
 */

import { Request, Response, NextFunction } from "express";
import { recordVisit, runProtectionFlow } from "../services/protectionService.js";
import { getRealClientIp } from "../utils/ip.js";

function getGclid(req: Request): string | undefined {
  const gclid = req.query.gclid;
  if (typeof gclid === "string" && gclid.trim()) return gclid.trim();
  return undefined;
}

/**
 * Sadece gclid varsa (Google Ads tıklaması) kayıt alır ve koruma çalıştırır.
 * Normal ziyaret (gclid yok) → hiç log yok, hiç ban yok.
 */
export function clickFraudTracker(
  req: Request,
  _res: Response,
  next: NextFunction
): void {
  const gclid = getGclid(req);
  if (!gclid) {
    next();
    return;
  }

  const ip = getRealClientIp(req);
  const userAgent = typeof req.headers["user-agent"] === "string" ? req.headers["user-agent"] : undefined;

  void (async () => {
    try {
      await recordVisit({ ip, gclid, userAgent });
      await runProtectionFlow({ ip, gclid, userAgent });
    } catch (err) {
      console.error("[tracker] protection flow error:", err);
    }
  })();

  next();
}
