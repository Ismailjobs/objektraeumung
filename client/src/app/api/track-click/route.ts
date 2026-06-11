import { NextResponse } from "next/server";

/**
 * Proxy endpoint for click-fraud tracking.
 *
 * Why: Next.js middleware env/base URL can be tricky behind Cloudflare/Nginx.
 * This endpoint lives on the same origin as the website and forwards the request
 * to the Express backend over the internal Docker network (or configured INTERNAL_API_URL).
 *
 * Usage:
 *   GET /api/track-click?gclid=...
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const gclid = (searchParams.get("gclid") || "").trim();

  if (!gclid) {
    return NextResponse.json({ ok: false, error: "gclid is required" }, { status: 400 });
  }

  // Prefer internal service URL (Docker). Fallback to service name.
  const internalBase =
    process.env.INTERNAL_API_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "http://server:4000";

  const target = `${internalBase.replace(/\/$/, "")}/api/track-click?gclid=${encodeURIComponent(gclid)}`;

  // Forward only the headers needed for real-IP detection.
  const forwardHeaders = new Headers();
  const headerNames = [
    "cf-connecting-ip",
    "true-client-ip",
    "x-forwarded-for",
    "x-real-ip",
    "user-agent",
  ];
  for (const name of headerNames) {
    const v = request.headers.get(name);
    if (v) forwardHeaders.set(name, v);
  }

  try {
    const res = await fetch(target, {
      method: "GET",
      headers: forwardHeaders,
      cache: "no-store",
    });
    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error("[track-click proxy] backend unreachable:", err);
    return NextResponse.json({ ok: false, error: "backend unreachable" }, { status: 502 });
  }
}

