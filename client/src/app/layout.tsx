import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { LocaleLangSync } from "@/components/LocaleLangSync";
import { DeferredAnalytics } from "@/components/DeferredAnalytics";
import { SITE_URL, GOOGLE_SITE_VERIFICATION, BING_MSVALIDATE } from "@/lib/constants";
import "./globals.css";

/** Non-blocking font: swap keeps text visible; adjustFontFallback limits CLS. */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
});

const verification: Metadata["verification"] = {};
if (GOOGLE_SITE_VERIFICATION) verification.google = GOOGLE_SITE_VERIFICATION;
if (BING_MSVALIDATE) verification.other = { "msvalidate.01": BING_MSVALIDATE };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  robots: { index: true, follow: true },
  icons: { icon: "/icon.webp" },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "de-AT": SITE_URL,
      "de-DE": SITE_URL,
    },
  },
  ...(Object.keys(verification).length > 0 && { verification }),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de-AT" className={montserrat.variable} suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/hero-1.webp" fetchPriority="high" />
      </head>
      <body className="font-sans min-h-screen flex flex-col antialiased">
        <LocaleLangSync />
        {children}
        <DeferredAnalytics />
      </body>
    </html>
  );
}
