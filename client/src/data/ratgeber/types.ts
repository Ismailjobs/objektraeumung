import type { ComponentType } from "react";

/** Frontmatter-Metadaten pro Ratgeber-Artikel (Registry + SEO). */
export type RatgeberArticleMeta = {
  slug: string;
  title: string;
  /** Meta description (max. ~160 Zeichen empfohlen). */
  description: string;
  /** Teaser auf der Hub-Seite. */
  excerpt: string;
  /** ISO 8601 – Erstveröffentlichung. */
  publishedAt: string;
  /** ISO 8601 – inhaltliche Änderung (optional; sonst rollierendes Datum). */
  updatedAt?: string;
  readingTimeMinutes: number;
  categories: string[];
  tags?: string[];
  /** Slugs verwandter Artikel (max. 3 empfohlen). */
  relatedSlugs?: string[];
  /** Service-Slugs, auf deren Leistungsseiten dieser Artikel verlinkt wird. */
  serviceSlugs?: string[];
  /** Relativer Pfad ab /public oder absolute URL. */
  ogImage?: string;
  author?: string;
  featured?: boolean;
};

export type RatgeberArticleRecord = {
  meta: RatgeberArticleMeta;
  Component: ComponentType;
};

export type RatgeberHubSeo = {
  title: string;
  description: string;
  canonicalPath: string;
};
