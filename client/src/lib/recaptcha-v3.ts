import { RECAPTCHA_V3_SITE_KEY } from "@/lib/constants";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

/** Must match `RECAPTCHA_V3_ACTION` in server and Next contact routes (not necessarily "submit"). */
export const RECAPTCHA_CONTACT_ACTION = "contact";

function renderParamFromScriptSrc(src: string): string | null {
  try {
    return new URL(src, typeof window !== "undefined" ? window.location.href : "https://www.google.com")
      .searchParams.get("render");
  } catch {
    return null;
  }
}

function waitForGrecaptcha(maxMs = 10000): Promise<void> {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = () => {
      if (typeof window !== "undefined" && window.grecaptcha?.execute) {
        resolve();
        return;
      }
      if (Date.now() - start > maxMs) {
        reject(new Error("reCAPTCHA not available"));
        return;
      }
      window.requestAnimationFrame(tick);
    };
    tick();
  });
}

/**
 * Loads api.js?render=SITE_KEY. If another key was loaded earlier (SPA / HMR / deploy),
 * Google rejects execute(newKey) with "Invalid site key or not loaded in api.js" — we remove
 * stale script tags and `window.grecaptcha`, then inject the correct script.
 */
export function loadRecaptchaV3Script(siteKey: string = RECAPTCHA_V3_SITE_KEY): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();

  const w = window;
  const scripts = Array.from(
    document.querySelectorAll<HTMLScriptElement>('script[src*="google.com/recaptcha/api.js"]')
  );

  let hasMatchingScript = false;
  for (const s of scripts) {
    const render = renderParamFromScriptSrc(s.src);
    if (render === siteKey) {
      hasMatchingScript = true;
      break;
    }
  }

  if (hasMatchingScript && w.grecaptcha?.execute) {
    return Promise.resolve();
  }

  if (hasMatchingScript && !w.grecaptcha?.execute) {
    return waitForGrecaptcha();
  }

  for (const s of scripts) {
    s.remove();
  }
  try {
    delete (w as unknown as { grecaptcha?: unknown }).grecaptcha;
  } catch {
    /* ignore */
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("reCAPTCHA script failed"));
    document.head.appendChild(script);
  });
}

export async function executeRecaptchaV3(
  action: string = RECAPTCHA_CONTACT_ACTION,
  siteKey: string = RECAPTCHA_V3_SITE_KEY
): Promise<string> {
  await loadRecaptchaV3Script(siteKey);
  const g = window.grecaptcha;
  if (!g?.execute) throw new Error("reCAPTCHA not loaded");
  await new Promise<void>((resolve) => g.ready(resolve));
  return g.execute(siteKey, { action });
}
