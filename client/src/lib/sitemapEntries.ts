import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { routing } from "@/i18n/routing";
import { SERVICE_LIST } from "@/lib/serviceList";
import { getAllSlugs as getAllLocationSlugs } from "@/lib/locationsData";

type ChangeFrequency = "weekly" | "monthly" | "yearly";

type SitemapPathConfig = {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
};

/** Statische Seiten (ohne dynamische Slugs). */
const STATIC_PATHS: SitemapPathConfig[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/locations", priority: 0.85, changeFrequency: "weekly" },
  { path: "/prices", priority: 0.9, changeFrequency: "weekly" },
  { path: "/referenzen", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ueberblick", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/partner", priority: 0.5, changeFrequency: "monthly" },
  { path: "/impressum", priority: 0.3, changeFrequency: "yearly" },
];

function buildUrl(path: string): string {
  const base = SITE_URL;
  const noLocalePrefix = routing.localePrefix === "never";
  const pathPart = path ? path.replace(/^\//, "") : "";

  if (noLocalePrefix) {
    return pathPart ? `${base}/${pathPart}` : base;
  }
  return pathPart
    ? `${base}/${routing.defaultLocale}/${pathPart}`
    : `${base}/${routing.defaultLocale}`;
}

function toEntry(
  path: string,
  priority: number,
  changeFrequency: ChangeFrequency,
  lastModified: Date
): MetadataRoute.Sitemap[number] {
  return {
    url: buildUrl(path),
    lastModified,
    changeFrequency,
    priority,
  };
}

/**
 * Baut die komplette Sitemap aus zentralen Datenquellen:
 * - STATIC_PATHS (manuell gepflegt)
 * - SERVICE_LIST → /services/[slug]
 * - LOCATIONS (getAllSlugs) → /locations/[slug]
 */
export function getSitemapEntries(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority, changeFrequency } of STATIC_PATHS) {
    entries.push(toEntry(path, priority, changeFrequency, now));
  }

  for (const { slug } of SERVICE_LIST) {
    entries.push(toEntry(`/services/${slug}`, 0.8, "monthly", now));
  }

  for (const slug of getAllLocationSlugs()) {
    entries.push(toEntry(`/locations/${slug}`, 0.75, "monthly", now));
  }

  return entries;
}
