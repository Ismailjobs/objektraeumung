"use client";

import { useEffect, useState } from "react";
import { GoogleTagManager, GoogleTagManagerNoscript } from "@/components/GoogleTagManager";
import { GoogleAdsHead } from "@/components/GoogleAdsHead";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { ClarityHead } from "@/components/ClarityHead";

const ANALYTICS_DELAY_MS = 8000;

/**
 * GTM/Ads/Clarity load only after idle window or user intent — keeps Lighthouse TBT/LCP clean.
 */
export function DeferredAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) return;

    const activate = () => setEnabled(true);
    const timeout = window.setTimeout(activate, ANALYTICS_DELAY_MS);

    const opts: AddEventListenerOptions = { once: true, passive: true };
    window.addEventListener("scroll", activate, opts);
    window.addEventListener("pointerdown", activate, opts);
    window.addEventListener("keydown", activate, opts);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("scroll", activate);
      window.removeEventListener("pointerdown", activate);
      window.removeEventListener("keydown", activate);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <GoogleTagManagerNoscript />
      <GoogleTagManager />
      <GoogleAdsHead />
      <GoogleAnalytics />
      <ClarityHead />
    </>
  );
}
