import Script from "next/script";
import { GA_MEASUREMENT_ID, GOOGLE_ADS_ID } from "@/lib/constants";

/**
 * Google Analytics 4 via gtag.js (lazyOnload, deferred with other tags).
 * Set NEXT_PUBLIC_GA_MEASUREMENT_ID (e.g. G-XXXXXXXXXX).
 * Reuses the gtag.js loader from Google Ads when both IDs are configured.
 */
export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  const adsAlreadyLoadsGtag = Boolean(GOOGLE_ADS_ID);

  return (
    <>
      {!adsAlreadyLoadsGtag ? (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
      ) : null}
      <Script id="google-analytics-ga4" strategy="lazyOnload">
        {adsAlreadyLoadsGtag
          ? `gtag('config', '${GA_MEASUREMENT_ID}');`
          : `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
      </Script>
    </>
  );
}
