const _SITE_URL_RAW = process.env.NEXT_PUBLIC_SITE_URL ?? "https://objektraeumung.at";
/** Canonical base URL: always https:// (never https:/), no trailing slash. Use for sitemap, robots, canonical. */
export const SITE_URL = _SITE_URL_RAW.replace(/^https:\/+/, "https://").replace(/\/+$/, "");

/** WhatsApp & Kontakt: +43 660 678 3703 (wa.me format: 436606783703) */
export const WHATSAPP_NUMBER = "436606783703";
export const WHATSAPP_TEXT = "Anfrage: Räumungs- und Entrümpelungsservice";
export const PHONE_DISPLAY = "+43 660 678 3703";
export const PHONE_LINK = PHONE_DISPLAY.replace(/\s/g, "");
/** Canonical phone for SEO / JSON-LD */
export const PHONE_CANONICAL = process.env.NEXT_PUBLIC_PHONE_CANONICAL ?? "+43 660 678 3703";
export const PHONE_CANONICAL_LINK = PHONE_CANONICAL.replace(/\s/g, "");

export const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? "office@objektraeumung.at";
export const ADDRESS = "Lore-Kutschera-Weg 14/3/13, 1120 Wien";
export const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

/** Google Analytics 4 measurement ID (e.g. G-XXXXXXXXXX) — set NEXT_PUBLIC_GA_MEASUREMENT_ID */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

/** Default sitewide meta title & description (homepage + locale layout) */
export const DEFAULT_META_TITLE =
  "Räumung Wien & Haushaltsauflösung vom Profi | Objekträumung";
export const DEFAULT_META_DESCRIPTION =
  "Professionelle Räumung und Haushaltsauflösung in Wien. Objekträumung für Wohnungen, Häuser, Keller und Nachlässe – schnell, diskret und zum Fixpreis.";

/** Google Tag Manager container ID (e.g. GTM-KGB62WZ8) */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim() ?? "GTM-KGB62WZ8";

/** Google Search Console verification (meta tag content) */
export const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";
/** Google Ads conversion / remarketing tag ID (e.g. AW-18109401279) */
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-18109401279";
/**
 * Contact form conversion: full `send_to` from Google Ads (Tools → Conversions → Tag setup),
 * e.g. AW-18109401279/AbCdEfGhIjKlMnOp. Leave empty until the action is created; form still works.
 */
export const GOOGLE_ADS_CONVERSION_SEND_TO =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO?.trim() ?? "";

/** Fired from ContactForm / ContactSection on successful submit (`gtag('event', 'conversion', …)`). */
export const GOOGLE_ADS_FORM_CONVERSION_SEND_TO =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_CONVERSION_SEND_TO?.trim() ??
  "AW-10859720005/z1l2CJnPi6scEMXaqLoo";
/** Bing Webmaster Tools verification (meta tag content) */
export const BING_MSVALIDATE = process.env.NEXT_PUBLIC_BING_MSVALIDATE ?? "";
/** Microsoft Clarity project ID (e.g. vmu85q7s1r) */
export const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? "vmu85q7s1r";

/**
 * Google reCAPTCHA v3 site key (browser). Override with NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY (trimmed).
 * Must match the same admin entry as server secret. Domains in Admin must include the **exact host**
 * you open in the address bar (e.g. localhost for dev, www + apex for prod).
 */
const RECAPTCHA_V3_SITE_KEY_FROM_ENV = process.env.NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY?.trim();
export const RECAPTCHA_V3_SITE_KEY =
  RECAPTCHA_V3_SITE_KEY_FROM_ENV && RECAPTCHA_V3_SITE_KEY_FROM_ENV.length > 0
    ? RECAPTCHA_V3_SITE_KEY_FROM_ENV
    : "6LdwpNcsAAAAAC7dDjrmsOfWxnH7GPT_mOXAciY-";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

/** External profiles & citations (schema.org sameAs on Organization / LocalBusiness) */
export const SAME_AS_PROFILES = [
  "https://share.google/1K87AZctPLClSLpIh",
  "https://maps.apple/p/C~xbmiZCRyrfc5",
  "https://www.bing.com/maps/search?mkt=de-AT&ss=id.ypid%3AYNE9FDC95A534D0018&cp=48.157444~16.296629&lvl=16&style=r",
  "https://www.facebook.com/profile.php?id=61590363688799",
  "https://www.instagram.com/objektraeumung",
  "https://www.linkedin.com/in/objektr%C3%A4umung-wien-7781b1410",
  "https://x.com/Objektraeumung",
  "https://www.xing.com/pages/objektraeumung",
  "https://www.pinterest.com/objektraeumung/",
  "https://yelp.com/biz/objektr%C3%A4umung-wien",
  "https://www.herold.at/gelbe-seiten/wien/LmJN6/objektraeumung",
  "https://www.cylex.at/wien/objektr%C3%A4umung-8615965.html",
  "https://www.firmenabc.at/faruk-i-ten-objektraeumung_HAMbT",
  "https://www.dasschnelle.at/suche/objektr%C3%A4umung/0",
  "https://www.tupalo.at/wien/objektraeumung",
  "https://www.hotfrog.at/company/78420ab834add0ea902399fe50ca4194",
  `https://wa.me/${WHATSAPP_NUMBER}`,
] as const;

/** Social profiles (navbar & footer) */
export const SOCIAL_LINKS = [
  { key: "xing", href: "https://www.xing.com/pages/objektraeumung" },
  { key: "linkedin", href: "https://www.linkedin.com/company/objektraeumung" },
  { key: "x", href: "https://x.com/Objektraeumung" },
  { key: "facebook", href: "https://www.facebook.com/profile.php?id=61590363688799" },
  { key: "instagram", href: "https://www.instagram.com/objektraeumung" },
  { key: "yelp", href: "https://yelp.com/biz/objektr%C3%A4umung-wien" },
] as const;
