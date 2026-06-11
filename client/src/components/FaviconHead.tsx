"use client";

import { useEffect } from "react";

/** Injects favicon (public/icon.webp) into document.head so it appears on every page. */
export function FaviconHead() {
  useEffect(() => {
    const href = `${typeof window !== "undefined" ? window.location.origin : ""}/icon.webp`;
    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      link.setAttribute("href", href);
      link.setAttribute("type", "image/png");
      document.head.appendChild(link);
    } else {
      link.href = href;
      link.setAttribute("type", "image/png");
    }
  }, []);
  return null;
}
