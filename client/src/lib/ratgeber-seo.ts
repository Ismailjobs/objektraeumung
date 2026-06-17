import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import type { RatgeberArticleMeta, RatgeberHubSeo } from "@/data/ratgeber/types";
import { getRatgeberDisplayUpdatedAt } from "@/lib/ratgeber-dates";

const RATGEBER_BASE = "/ratgeber";

export const RATGEBER_HUB_SEO: RatgeberHubSeo = {
  title: "Ratgeber Entrümpelung & Haushaltsauflösung | Objekträumung",
  description:
    "Praxiswissen zu Entrümpelung, Haushaltsauflösung, Kosten, Ablauf und Tipps für Wien und Österreich – von den Experten von Objekträumung.",
  canonicalPath: RATGEBER_BASE,
};

export const RATGEBER_FEED_URL = `${SITE_URL}${RATGEBER_BASE}/feed.xml`;

function articleCanonicalPath(slug: string): string {
  return `${RATGEBER_BASE}/${slug}`;
}

function resolveOgImage(ogImage?: string): string | undefined {
  if (!ogImage) return undefined;
  return ogImage.startsWith("http") ? ogImage : ogImage.startsWith("/") ? ogImage : `/${ogImage}`;
}

export function buildRatgeberHubMetadata(): Metadata {
  const base = buildMetadata({
    title: RATGEBER_HUB_SEO.title,
    description: RATGEBER_HUB_SEO.description,
    canonicalPath: RATGEBER_HUB_SEO.canonicalPath,
    locale: "at",
  });

  return {
    ...base,
    alternates: {
      ...base.alternates,
      types: {
        "application/rss+xml": RATGEBER_FEED_URL,
      },
    },
  };
}

export function buildRatgeberArticleMetadata(article: RatgeberArticleMeta): Metadata {
  const canonicalPath = articleCanonicalPath(article.slug);
  const image = resolveOgImage(article.ogImage);
  const modified = getRatgeberDisplayUpdatedAt(
    article.slug,
    article.publishedAt,
    article.updatedAt
  );

  const base = buildMetadata({
    title: `${article.title} | Ratgeber Objekträumung`,
    description: article.description,
    canonicalPath,
    locale: "at",
    image,
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: modified,
      authors: article.author ? [article.author] : ["Objekträumung"],
      tags: article.tags ?? article.categories,
    },
    alternates: {
      ...base.alternates,
      types: {
        "application/rss+xml": RATGEBER_FEED_URL,
      },
    },
  };
}

export function ratgeberArticleAbsoluteUrl(slug: string): string {
  return `${SITE_URL}${articleCanonicalPath(slug)}`;
}

export function ratgeberHubAbsoluteUrl(): string {
  return `${SITE_URL}${RATGEBER_BASE}`;
}
