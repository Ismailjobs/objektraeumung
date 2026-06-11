import { NextResponse } from "next/server";

/**
 * Cloudflare Worker webhook endpoint (public, same-origin).
 *
 * Nginx currently routes :80 -> Next.js (3000). So requests to:
 *   POST /api/webhook/ban
 * will land here first, then we proxy them to the Express backend over the internal network.
 */
export async function POST(request: Request) {
  const internalBase = process.env.INTERNAL_API_URL || "http://server:4000";
  const target = `${internalBase.replace(/\/$/, "")}/api/webhook/ban`;

  const banSecret = request.headers.get("x-ban-secret") || "";
  const contentType = request.headers.get("content-type") || "application/json";

  // Read body once and forward as-is.
  const rawBody = await request.text();

  try {
    const res = await fetch(target, {
      method: "POST",
      headers: {
        "content-type": contentType,
        "x-ban-secret": banSecret,
      },
      body: rawBody,
      cache: "no-store",
    });

    const text = await res.text();
    // Try to return JSON if possible, otherwise return text.
    try {
      const json = JSON.parse(text) as unknown;
      return NextResponse.json(json, { status: res.status });
    } catch {
      return new NextResponse(text, { status: res.status });
    }
  } catch (err) {
    console.error("[webhook/ban proxy] backend unreachable:", err);
    return NextResponse.json({ success: false, error: "backend unreachable" }, { status: 502 });
  }
}

// Helpful for browser/manual checks (Cloudflare will POST).
export async function GET() {
  return NextResponse.json(
    { ok: true, message: "Use POST with JSON body { ip, reason } and header x-ban-secret." },
    { status: 200 }
  );
}

