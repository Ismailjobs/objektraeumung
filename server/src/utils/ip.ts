import type { Request } from "express";

/**
 * Extract real client IP behind Cloudflare -> Nginx -> Node.
 *
 * Priority:
 * 1) Cloudflare: CF-Connecting-IP / True-Client-IP
 * 2) Proxy chain: X-Forwarded-For (left-most = original client)
 * 3) Nginx: X-Real-IP
 * 4) Express: req.ip (requires app.set('trust proxy', ...))
 * 5) Socket remoteAddress
 */
export function getRealClientIp(req: Request): string {
  const header = (name: string): string => {
    const v = req.headers[name.toLowerCase()];
    if (typeof v === "string") return v.trim();
    if (Array.isArray(v)) return (v[0] ?? "").trim();
    return "";
  };

  const cfConnectingIp = header("cf-connecting-ip");
  if (cfConnectingIp) return cfConnectingIp;

  const trueClientIp = header("true-client-ip");
  if (trueClientIp) return trueClientIp;

  const xff = header("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first;
  }

  const xRealIp = header("x-real-ip");
  if (xRealIp) return xRealIp;

  const reqIp = (req.ip ?? "").trim();
  if (reqIp) return reqIp;

  return (req.socket?.remoteAddress ?? "").trim();
}

