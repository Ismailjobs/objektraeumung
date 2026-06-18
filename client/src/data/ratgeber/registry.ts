import type { RatgeberArticleMeta, RatgeberArticleRecord } from "./types";
import { MoebelBewertenObjektrueumungWienArticle } from "@/components/ratgeber/articles/moebel-bewerten-objektrueumung-wien";
import { BueroaufloesungWienDsgvoAktenvernichtungArticle } from "@/components/ratgeber/articles/bueroaufloesung-wien-dsgvo-aktenvernichtung";
import { ZwangsraeumungDelogierungWienHausverwaltungArticle } from "@/components/ratgeber/articles/zwangsraeumung-delogierung-wien-hausverwaltung";
import { SchwerlastentsorgungWienGrosslastenArticle } from "@/components/ratgeber/articles/schwerlastentsorgung-wien-grosslasten";
import { HaushaltsaufloesungPreiseWien2026Article } from "@/components/ratgeber/articles/haushaltsaufloesung-preise-wien-2026";
import { Ma48MistplatzWienEntsorgungsGuide2026Article } from "@/components/ratgeber/articles/ma-48-mistplatz-wien-entsorgungs-guide-2026";
import { EntruempelungWienUmgebungKorneuburgTullnSchwechatArticle } from "@/components/ratgeber/articles/entruempelung-wien-umgebung-korneuburg-tulln-schwechat";
import { RaeumungVorSanierungAltbauWien2026Article } from "@/components/ratgeber/articles/raeumung-vor-sanierung-altbau-wien-2026";
import { MessieWohnungRaeumungWienSpezialArticle } from "@/components/ratgeber/articles/messie-wohnung-raeumung-wien-spezial";
import { GeschaeftslokalRaeumungRueckbauWienArticle } from "@/components/ratgeber/articles/geschaeftslokal-raeumung-rueckbau-wien";

/**
 * Zentrale Artikel-Registry.
 * Neuen Artikel hinzufügen:
 * 1. `components/ratgeber/articles/{slug}.tsx` anlegen (Vorlage: `_vorlage-artikel.tsx`)
 * 2. Import + Eintrag unten ergänzen
 *
 * publishedAt: höchstens 18. Juni 2026 (2026-06-18T23:59:59.000Z).
 */
export const RATGEBER_REGISTRY: RatgeberArticleRecord[] = [
  {
    meta: {
      slug: "geschaeftslokal-raeumung-rueckbau-wien",
      title: "Geschäftslokal Räumung & Rückbau in Wien: Ihr B2B-Leitfaden für die besenreine Übergabe",
      description:
        "Geschäftslokal Räumung Wien: B2B-Rückbau, Gastro & Retail, Entsorgungsnachweise & Fixpreis. Besenreine Übergabe zum Stichtag — jetzt Angebot anfragen.",
      excerpt:
        "Geschäftslokal Räumung in Wien: Terminplan rückwärts, professioneller Rückbau, Gastro-Spezialfälle, Entsorgungsnachweise und B2B-Wertausgleich zum Fixpreis.",
      publishedAt: "2026-06-18T08:00:00.000Z",
      readingTimeMinutes: 9,
      categories: ["Gewerbe", "B2B", "Wien"],
      tags: [
        "Geschäftslokal Räumung Wien",
        "Gewerberäumung",
        "Rückbau",
        "Gastro",
        "Fixpreis",
        "besenrein",
      ],
      relatedSlugs: [
        "bueroaufloesung-wien-dsgvo-aktenvernichtung",
        "schwerlastentsorgung-wien-grosslasten",
        "ma-48-mistplatz-wien-entsorgungs-guide-2026",
      ],
      serviceSlugs: [
        "firmenaufloesung",
        "gastro-retail",
        "lager-gewerbeparks",
        "entrumpelung-wien",
        "raeumung-wien",
        "entsorgung-wien",
        "moebel-wertanrechnung",
        "einkauf",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: GeschaeftslokalRaeumungRueckbauWienArticle,
  },
  {
    meta: {
      slug: "messie-wohnung-raeumung-wien-spezial",
      title: "Spezialräumung für Messie-Wohnungen in Wien: Diskret, Sicher & Besenrein",
      description:
        "Messie-Wohnung Wien: diskrete Spezialräumung mit PSA, MA-48-Entsorgung & Fixpreis. Vertrauliches Erstgespräch — Objekt Räumung Wien übernimmt die schwere Arbeit.",
      excerpt:
        "Messie-Wohnung in Wien: Diskretion, Arbeitsschutz, systematischer Ablauf, Wiederherstellung und transparente Fixpreis-Kalkulation für Extremfälle.",
      publishedAt: "2026-06-17T02:00:00.000Z",
      readingTimeMinutes: 9,
      categories: ["Messie", "Spezialräumung", "Wien"],
      tags: [
        "Messie-Wohnung Wien",
        "Messie Entrümpelung",
        "Spezialräumung",
        "Diskret",
        "MA 48",
        "Fixpreis",
      ],
      relatedSlugs: [
        "zwangsraeumung-delogierung-wien-hausverwaltung",
        "ma-48-mistplatz-wien-entsorgungs-guide-2026",
        "haushaltsaufloesung-preise-wien-2026",
      ],
      serviceSlugs: [
        "messie-entruempelung",
        "haushaltsaufloesung",
        "wohnungsaufloesung",
        "verlassenschaft",
        "entrumpelung-wien",
        "entsorgung-wien",
        "raeumung-wien",
        "kellerraeumung",
        "moebel-wertanrechnung",
        "antiquitaeten-wertanrechnung",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: MessieWohnungRaeumungWienSpezialArticle,
  },
  {
    meta: {
      slug: "raeumung-vor-sanierung-altbau-wien-2026",
      title: "Räumung vor der Sanierung in Wien: Der Profi-Guide für Altbauwohnungen 2026",
      description:
        "Räumung vor Sanierung Wien: Altbau besenrein vorbereiten, Demontage & MA-48-Entsorgung. Fixpreis, Altbauschutz & Wertausgleich. Jetzt Besichtigung anfragen.",
      excerpt:
        "Räumung vor der Sanierung in Wien: Entkernung light für Altbauwohnungen — Handwerker vorbereiten, Demontage, MA-48-Entsorgung, Altbauschätze schützen und Wertausgleich nutzen.",
      publishedAt: "2026-06-17T03:00:00.000Z",
      readingTimeMinutes: 9,
      categories: ["Sanierung", "Altbau", "Wien"],
      tags: [
        "Räumung vor Sanierung Wien",
        "Altbau Sanierung",
        "Entkernung",
        "MA 48",
        "Wertausgleich",
        "Fixpreis",
      ],
      relatedSlugs: [
        "ma-48-mistplatz-wien-entsorgungs-guide-2026",
        "moebel-bewerten-objektrueumung-wien",
        "haushaltsaufloesung-preise-wien-2026",
      ],
      serviceSlugs: [
        "wohnungsaufloesung",
        "haushaltsaufloesung",
        "entrumpelung-wien",
        "raeumung-wien",
        "entsorgung-wien",
        "kellerraeumung",
        "dachbodenraeumung",
        "moebel-wertanrechnung",
        "antiquitaeten-wertanrechnung",
        "einkauf",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: RaeumungVorSanierungAltbauWien2026Article,
  },
  {
    meta: {
      slug: "entruempelung-wien-umgebung-korneuburg-tulln-schwechat",
      title: "Entrümpelung in Wien-Umgebung: Profi-Räumung für Korneuburg, Tulln & Schwechat",
      description:
        "Entrümpelung Wien-Umgebung: Korneuburg, Tulln & Schwechat. Regionale Logistik, Fixpreis & Wertanrechnung. Kostenlose Besichtigung — jetzt Angebot anfragen.",
      excerpt:
        "Entrümpelung in der Wien-Umgebung: Logistik-Konzepte für Korneuburg, Tulln und Schwechat. Hanglagen, Donauufer, Airport-Zone — Fixpreis inkl. Wertausgleich.",
      publishedAt: "2026-06-17T04:00:00.000Z",
      readingTimeMinutes: 8,
      categories: ["Region", "Niederösterreich", "Entrümpelung"],
      tags: [
        "Entrümpelung Wien Umgebung",
        "Korneuburg",
        "Tulln",
        "Schwechat",
        "Niederösterreich",
        "Fixpreis",
      ],
      relatedSlugs: [
        "haushaltsaufloesung-preise-wien-2026",
        "moebel-bewerten-objektrueumung-wien",
      ],
      serviceSlugs: [
        "entrumpelung-wien",
        "raeumung-wien",
        "haushaltsaufloesung",
        "firmenaufloesung",
        "lager-gewerbeparks",
        "gastro-retail",
        "kellerraeumung",
        "dachbodenraeumung",
        "entsorgung-wien",
        "moebel-wertanrechnung",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: EntruempelungWienUmgebungKorneuburgTullnSchwechatArticle,
  },
  {
    meta: {
      slug: "ma-48-mistplatz-wien-entsorgungs-guide-2026",
      title: "MA 48 Mistplatz in Wien: Der ultimative Entsorgungs-Guide & Profi-Checkliste 2026",
      description:
        "MA 48 Mistplatz Wien: Trenn-Guide, 4-Schritte-Ablauf & Checkliste 2026. Wann Eigenanlieferung sinnvoll ist — und wann Profis günstiger sind. Jetzt beraten lassen.",
      excerpt:
        "MA 48 Mistplatz in Wien: So nutzen Sie das städtische Entsorgungssystem effizient. Trenn-Guide, Gefahrgut-Tipps, Selbst vs. Profi und Checkliste für Ihren Einsatztag.",
      publishedAt: "2026-06-17T05:00:00.000Z",
      readingTimeMinutes: 8,
      categories: ["Entsorgung", "MA 48", "Wien"],
      tags: [
        "MA 48 Wien",
        "Mistplatz Wien",
        "Abfallentsorgung",
        "Mülltrennung",
        "Sperrmüll",
        "Entsorgung Wien",
      ],
      relatedSlugs: [
        "haushaltsaufloesung-preise-wien-2026",
        "moebel-bewerten-objektrueumung-wien",
      ],
      serviceSlugs: [
        "entsorgung-wien",
        "entrumpelung-wien",
        "haushaltsaufloesung",
        "wohnungsaufloesung",
        "kellerraeumung",
        "dachbodenraeumung",
        "garagenraeumung",
        "zimmer-raeumung",
        "raeumung-wien",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: Ma48MistplatzWienEntsorgungsGuide2026Article,
  },
  {
    meta: {
      slug: "haushaltsaufloesung-preise-wien-2026",
      title: "Haushaltsauflösung Preise Wien 2026: Was kostet eine Räumung wirklich?",
      description:
        "Haushaltsauflösung Preise Wien 2026: Richtwerte, 4 Kostenfaktoren & Wertanrechnung. Fixpreis ohne Nachzahlungen. Kostenlose Besichtigung — jetzt anfragen.",
      excerpt:
        "Haushaltsauflösung Preise in Wien 2026: Was bestimmt die Kosten? Richtwerte nach Objektgröße, Wertanrechnung und transparentes Fixpreis-Versprechen.",
      publishedAt: "2026-06-17T06:00:00.000Z",
      readingTimeMinutes: 7,
      categories: ["Preise", "Haushaltsauflösung", "Wien"],
      tags: [
        "Haushaltsauflösung Preise Wien",
        "Räumungskosten",
        "Fixpreis",
        "Wertanrechnung",
        "Wertausgleich",
        "2026",
      ],
      relatedSlugs: [
        "ma-48-mistplatz-wien-entsorgungs-guide-2026",
        "moebel-bewerten-objektrueumung-wien",
      ],
      serviceSlugs: [
        "haushaltsaufloesung",
        "wohnungsaufloesung",
        "kellerraeumung",
        "dachbodenraeumung",
        "zimmer-raeumung",
        "garagenraeumung",
        "verlassenschaft",
        "moebel-wertanrechnung",
        "antiquitaeten-wertanrechnung",
        "einkauf",
        "entrumpelung-wien",
        "haushaltsaufloesung-ueberblick",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: HaushaltsaufloesungPreiseWien2026Article,
  },
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
        "haushaltsaufloesung-preise-wien-2026",
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
        "haushaltsaufloesung-preise-wien-2026",
        "bueroaufloesung-wien-dsgvo-aktenvernichtung",
        "zwangsraeumung-delogierung-wien-hausverwaltung",
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
