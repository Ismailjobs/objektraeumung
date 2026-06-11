import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localePrefix: routing.localePrefix,
  // Always default to German ("at") for first-time visitors.
  // This disables auto-redirect based on browser Accept-Language.
  localeDetection: false,
});

const ACCESS_CHECK_ENABLED = process.env.ACCESS_CHECK_ENABLED !== "false";

export default async function middleware(request: NextRequest, event: NextFetchEvent) {
  if (ACCESS_CHECK_ENABLED) {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const host = request.headers.get("host") || request.headers.get("x-forwarded-host") || "";
    const base =
      process.env.INTERNAL_API_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      "http://localhost:4000";
    const url = `${base.replace(/\/$/, "")}/api/access-check?ip=${encodeURIComponent(ip)}&host=${encodeURIComponent(host)}`;
    try {
      const res = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(3000) });
      const data = (await res.json()) as { allowed?: boolean };
      if (data.allowed === false) {
        return new NextResponse("Forbidden", { status: 403 });
      }
    } catch {
      // Backend unreachable: allow request so the site stays usable
    }
  }

  // Click fraud protection: ONLY if Google Ads click id is present.
  // Normal visitors (no gclid) are never logged or blocked.
  const gclid = request.nextUrl.searchParams.get("gclid");
  if (gclid) {
    const trackUrl = new URL("/api/track-click", request.url);
    trackUrl.searchParams.set("gclid", gclid);

    // Forward headers required for real-IP detection in backend.
    const headers = new Headers();
    const headerNames = [
      "cf-connecting-ip",
      "true-client-ip",
      "x-forwarded-for",
      "x-real-ip",
      "user-agent",
    ];
    for (const name of headerNames) {
      const v = request.headers.get(name);
      if (v) headers.set(name, v);
    }

    event.waitUntil(
      fetch(trackUrl, {
        method: "GET",
        headers,
        cache: "no-store",
        signal: AbortSignal.timeout(3000),
      }).catch(() => {})
    );
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
