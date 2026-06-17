import type { RatgeberArticleMeta, RatgeberArticleRecord } from "./types";
import { MoebelBewertenObjektrueumungWienArticle } from "@/components/ratgeber/articles/moebel-bewerten-objektrueumung-wien";
import { BueroaufloesungWienDsgvoAktenvernichtungArticle } from "@/components/ratgeber/articles/bueroaufloesung-wien-dsgvo-aktenvernichtung";
import { ZwangsraeumungDelogierungWienHausverwaltungArticle } from "@/components/ratgeber/articles/zwangsraeumung-delogierung-wien-hausverwaltung";
import { SchwerlastentsorgungWienGrosslastenArticle } from "@/components/ratgeber/articles/schwerlastentsorgung-wien-grosslasten";

/**
 * Zentrale Artikel-Registry.
 * Neuen Artikel hinzufügen:
 * 1. `components/ratgeber/articles/{slug}.tsx` anlegen (Vorlage: `_vorlage-artikel.tsx`)
 * 2. Import + Eintrag unten ergänzen
 */
export const RATGEBER_REGISTRY: RatgeberArticleRecord[] = [
  {
    meta: {
      slug: "schwerlastentsorgung-wien-grosslasten",
      title: "Schwerlastentsorgung Wien: Transport von Tresoren, Industrie-Maschinen & Großlasten",
      description:
        "Schwerlastentsorgung Wien: Tresore, Maschinen & Großlasten sicher abtransportieren. Spezial-Equipment, vollversichert, MA-48-konform. Fixpreis — jetzt anfragen.",
      excerpt:
        "Schwerlastentsorgung in Wien: Tresore, Industriemaschinen und Gussheizkessel sicher demontieren und entsorgen. Logistikmatrix, 4 Sicherheitsprüfungen und FAQ.",
      publishedAt: "2026-06-17T08:00:00.000Z",
      readingTimeMinutes: 11,
      categories: ["Schwerlast", "Gewerbe", "Wien"],
      tags: [
        "Schwerlastentsorgung Wien",
        "Tresor Transport",
        "Industriemaschinen",
        "Großlasten",
        "MA 48",
        "Gewerbepark",
      ],
      relatedSlugs: [
        "bueroaufloesung-wien-dsgvo-aktenvernichtung",
        "zwangsraeumung-delogierung-wien-hausverwaltung",
      ],
      serviceSlugs: [
        "lager-gewerbeparks",
        "firmenaufloesung",
        "gastro-retail",
        "entrumpelung-wien",
        "entsorgung-wien",
        "raeumung-wien",
        "kellerraeumung",
        "garagenraeumung",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: SchwerlastentsorgungWienGrosslastenArticle,
  },
  {
    meta: {
      slug: "zwangsraeumung-delogierung-wien-hausverwaltung",
      title: "Zwangsräumung & Delogierung Wien: Rechtssichere Räumung für Hausverwaltungen",
      description:
        "Zwangsräumung Wien nach Delogierung: diskret, rechtssicher, in 24–48 Std. besenrein. B2B-Partner für Hausverwaltungen. Fixpreis — jetzt kostenlos anfragen.",
      excerpt:
        "Zwangsräumung und Delogierung in Wien: Leerstand minimieren, diskrete Abwicklung im Zinshaus, Handlungsmatrix, 4-Phasen-SOP und FAQ für Hausverwaltungen.",
      publishedAt: "2026-06-16T08:00:00.000Z",
      readingTimeMinutes: 10,
      categories: ["Zwangsräumung", "Hausverwaltung", "Wien"],
      tags: [
        "Zwangsräumung Wien",
        "Delogierung Wien",
        "Hausverwaltung",
        "Verlassenschaft",
        "Messie",
        "Fixpreis",
      ],
      relatedSlugs: [
        "moebel-bewerten-objektrueumung-wien",
        "bueroaufloesung-wien-dsgvo-aktenvernichtung",
        "schwerlastentsorgung-wien-grosslasten",
      ],
      serviceSlugs: [
        "verlassenschaft",
        "messie-entruempelung",
        "wohnungsaufloesung",
        "haushaltsaufloesung",
        "entrumpelung-wien",
        "raeumung-wien",
        "entsorgung-wien",
        "kellerraeumung",
        "zimmer-raeumung",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: ZwangsraeumungDelogierungWienHausverwaltungArticle,
  },
  {
    meta: {
      slug: "bueroaufloesung-wien-dsgvo-aktenvernichtung",
      title: "Büroauflösung Wien: DSGVO-konforme Aktenvernichtung & IT-Rückbau",
      description:
        "Büroauflösung Wien mit DSGVO-Aktenvernichtung, IT-Rückbau & Vernichtungszertifikat. Fixpreis, Wochenendeinsatz, besenrein zur Übergabe. Jetzt kostenlos anfragen.",
      excerpt:
        "Büroauflösung in Wien: 3-Phasen-Ablauf, DSGVO-konforme Aktenvernichtung, IT-Rückbau, Entsorgungsmatrix und 4-Wochen-Checkliste für die vertragskonforme Schlüsselübergabe.",
      publishedAt: "2026-06-15T08:00:00.000Z",
      readingTimeMinutes: 11,
      categories: ["Büroauflösung", "Gewerbe", "Wien"],
      tags: [
        "Büroauflösung Wien",
        "DSGVO",
        "Aktenvernichtung",
        "IT-Rückbau",
        "Firmenauflösung",
        "Vernichtungszertifikat",
      ],
      relatedSlugs: [
        "moebel-bewerten-objektrueumung-wien",
        "zwangsraeumung-delogierung-wien-hausverwaltung",
        "schwerlastentsorgung-wien-grosslasten",
      ],
      serviceSlugs: [
        "firmenaufloesung",
        "gastro-retail",
        "lager-gewerbeparks",
        "raeumung-wien",
        "entsorgung-wien",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: BueroaufloesungWienDsgvoAktenvernichtungArticle,
  },
  {
    meta: {
      slug: "moebel-bewerten-objektrueumung-wien",
      title: "Inventar und Möbel bewerten bei der Objekträumung Wien | Leitfaden 2026",
      description:
        "Möbel bewerten Objekträumung Wien: 5 Säulen der Inventarbewertung, 4-Schritte-Ablauf, Bewertungsmatrix & Praxis-Fallbeispiele. Leitfaden Juni 2026.",
      excerpt:
        "Möbel bewerten bei der Objekträumung in Wien: Verwertbares Inventar oder Entsorgungsfall? Systematische Wertermittlung, Drei-Zonen-Logik und regionale Logistik-Tipps.",
      publishedAt: "2026-06-14T08:00:00.000Z",
      readingTimeMinutes: 9,
      categories: ["Wertanrechnung", "Objekträumung", "Wien"],
      tags: [
        "Möbel bewerten Objekträumung Wien",
        "Inventarbewertung",
        "Wertanrechnung",
        "Fixpreis",
        "MA 48",
        "Antiquitäten",
      ],
      relatedSlugs: [
        "bueroaufloesung-wien-dsgvo-aktenvernichtung",
        "zwangsraeumung-delogierung-wien-hausverwaltung",
        "schwerlastentsorgung-wien-grosslasten",
      ],
      serviceSlugs: [
        "moebel-wertanrechnung",
        "antiquitaeten-wertanrechnung",
        "einkauf",
        "haushaltsaufloesung",
        "wohnungsaufloesung",
        "firmenaufloesung",
        "entrumpelung-wien",
        "kellerraeumung",
        "dachbodenraeumung",
        "verlassenschaft",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: MoebelBewertenObjektrueumungWienArticle,
  },
];

export function getAllRatgeberArticles(): RatgeberArticleRecord[] {
  return [...RATGEBER_REGISTRY].sort(
    (a, b) => new Date(b.meta.publishedAt).getTime() - new Date(a.meta.publishedAt).getTime()
  );
}

export function getRatgeberArticleBySlug(slug: string): RatgeberArticleRecord | undefined {
  return RATGEBER_REGISTRY.find((entry) => entry.meta.slug === slug);
}

export function getAllRatgeberSlugs(): string[] {
  return RATGEBER_REGISTRY.map((entry) => entry.meta.slug);
}

export function getFeaturedRatgeberArticles(limit = 3): RatgeberArticleRecord[] {
  const featured = getAllRatgeberArticles().filter((a) => a.meta.featured);
  if (featured.length >= limit) return featured.slice(0, limit);
  const rest = getAllRatgeberArticles().filter((a) => !a.meta.featured);
  return [...featured, ...rest].slice(0, limit);
}

export function getRelatedRatgeberArticles(
  slug: string,
  limit = 3
): RatgeberArticleRecord[] {
  const current = getRatgeberArticleBySlug(slug);
  if (!current) return getAllRatgeberArticles().slice(0, limit);

  const relatedFromMeta = (current.meta.relatedSlugs ?? [])
    .map((s) => getRatgeberArticleBySlug(s))
    .filter((r): r is RatgeberArticleRecord => r != null && r.meta.slug !== slug);

  if (relatedFromMeta.length >= limit) return relatedFromMeta.slice(0, limit);

  const sameCategory = getAllRatgeberArticles().filter(
    (a) =>
      a.meta.slug !== slug &&
      !relatedFromMeta.some((r) => r.meta.slug === a.meta.slug) &&
      a.meta.categories.some((c) => current.meta.categories.includes(c))
  );

  return [...relatedFromMeta, ...sameCategory].slice(0, limit);
}

export function getRatgeberMetaList(): RatgeberArticleMeta[] {
  return getAllRatgeberArticles().map((a) => a.meta);
}

/** Ratgeber-Artikel, die auf einer Leistungsseite verlinkt werden sollen. */
export function getRatgeberArticlesForService(serviceSlug: string): RatgeberArticleRecord[] {
  return getAllRatgeberArticles().filter((entry) =>
    entry.meta.serviceSlugs?.includes(serviceSlug)
  );
}
