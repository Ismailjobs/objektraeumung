/**
 * Rollierende „Zuletzt aktualisiert“-Daten für Ratgeber-Artikel.
 * Stabil pro Slug (gleicher Tag = gleiches Datum), wechselt monatlich – ohne tägliches Crawl-Rauschen.
 */

const MS_PER_DAY = 86_400_000;

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

/** Monatsfenster 0–11 ab Referenzdatum. */
function currentRollWindow(reference = new Date()): { year: number; month: number } {
  return { year: reference.getFullYear(), month: reference.getMonth() };
}

/**
 * Liefert ein Anzeige-/Schema-Datum für `dateModified`.
 * - `explicitUpdatedAt` aus Registry hat Vorrang.
 * - Sonst: publishedAt + rollierender Offset (1–28 Tage) innerhalb des aktuellen Monats.
 */
export function getRatgeberDisplayUpdatedAt(
  slug: string,
  publishedAt: string,
  explicitUpdatedAt?: string
): string {
  if (explicitUpdatedAt) return explicitUpdatedAt;

  const published = new Date(publishedAt);
  if (Number.isNaN(published.getTime())) {
    return new Date().toISOString();
  }

  const { year, month } = currentRollWindow();
  const dayOffset = (hashSlug(slug) % 28) + 1;
  const rolled = new Date(year, month, Math.min(dayOffset, 28), 12, 0, 0);

  if (rolled.getTime() < published.getTime()) {
    return published.toISOString();
  }

  return rolled.toISOString();
}

/** Lesefreundliches de-AT-Datum. */
export function formatRatgeberDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("de-AT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

/** Für RSS / Sitemap lastModified. */
export function getRatgeberLastModified(meta: {
  slug: string;
  publishedAt: string;
  updatedAt?: string;
}): Date {
  const iso = getRatgeberDisplayUpdatedAt(meta.slug, meta.publishedAt, meta.updatedAt);
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? new Date() : d;
}

/** Geschätzte Lesezeit aus Wortanzahl (≈200 Wörter/Min). */
export function estimateReadingTimeMinutes(wordCount: number): number {
  return Math.max(1, Math.ceil(wordCount / 200));
}

/** Tage seit Veröffentlichung (für „Neu“-Badge optional). */
export function daysSincePublication(publishedAt: string): number {
  const published = new Date(publishedAt).getTime();
  if (Number.isNaN(published)) return 0;
  return Math.floor((Date.now() - published) / MS_PER_DAY);
}
