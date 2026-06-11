import Script from "next/script";
import { GOOGLE_ADS_ID, GOOGLE_ADS_CONVERSION_SEND_TO } from "@/lib/constants";

/**
 * Google Ads gtag.js – loads after interactive for reliable remarketing + conversion API.
 * ID: AW-18109401279 (override with NEXT_PUBLIC_GOOGLE_ADS_ID).
 * Optional contact conversion: NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO (AW-…/label).
 */
export function GoogleAdsHead() {
  const sendTo = GOOGLE_ADS_CONVERSION_SEND_TO.replace(/\\/g, "\\\\").replace(/'/g, "\\'");

  return (
    <>
      {GOOGLE_ADS_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
            strategy="lazyOnload"
          />
          <Script id="google-ads-tag" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ADS_ID}');
            `}
          </Script>
          <Script id="google-ads-contact-conversion" strategy="lazyOnload">
            {sendTo
              ? `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof url !== 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': '${sendTo}',
                  'value': 5.0,
                  'currency': 'EUR',
                  'event_callback': callback
                });
                return false;
              }
              window.gtag_report_conversion = gtag_report_conversion;
            `
              : `
              window.gtag_report_conversion = function () { return false; };
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}
