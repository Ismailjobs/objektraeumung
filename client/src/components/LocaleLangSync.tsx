"use client";

import { useEffect } from "react";

/** Tek dil (Almanca): html lang her zaman de. */
export function LocaleLangSync() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = "de";
    }
  }, []);
  return null;
}
