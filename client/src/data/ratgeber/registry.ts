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
import { EntruempelungMietnomadenWienVermieterArticle } from "@/components/ratgeber/articles/entruempelung-mietnomaden-wien-vermieter";
import { HalteverbotEntruempelungWienMa46Article } from "@/components/ratgeber/articles/halteverbot-entruempelung-wien-ma-46";
import { GebrauchteMoebelVerkaufenWienWillhabenWertanrechnungArticle } from "@/components/ratgeber/articles/gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung";
import { EntruempelungWienSteuerlichAbsetzenArticle } from "@/components/ratgeber/articles/entruempelung-wien-steuerlich-absetzen";
import { BauschuttSperrmuellWienEntsorgungArticle } from "@/components/ratgeber/articles/bauschutt-sperrmuell-wien-entsorgung";
import { EntruempelungBurgenlandMattersburgRustOberpullendorfArticle } from "@/components/ratgeber/articles/entruempelung-burgenland-mattersburg-rust-oberpullendorf";
import { ZimmerRaeumungWienWgUebergabeArticle } from "@/components/ratgeber/articles/zimmer-raeumung-wien-wg-uebergabe";
import { EntruempelungAuswanderungWienAuslandArticle } from "@/components/ratgeber/articles/entruempelung-auswanderung-wien-ausland";

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
      slug: "entruempelung-auswanderung-wien-ausland",
      title:
        "Entrümpelung bei Auswanderung aus Wien: Komplette Wohnungsauflösung für Ihren Neustart im Ausland",
      description:
        "Auswanderung Wien: Wohnungsauflösung für Relocation ins Ausland. Fixpreis, Wertanrechnung & besenreine Übergabe — auch wenn Sie schon im Ausland sind. Jetzt anfragen.",
      excerpt:
        "Entrümpelung bei Auswanderung aus Wien: Zeitplan, Wertanrechnung, Altbau & Genossenschaft, Express-Service und FAQ für internationale Relocations.",
      publishedAt: "2026-06-18T10:00:00.000Z",
      readingTimeMinutes: 9,
      categories: ["Auswanderung", "Haushaltsauflösung", "Wien"],
      tags: [
        "Auswanderung Wien",
        "Wohnungsauflösung Ausland",
        "Relocation Wien",
        "Fixpreis",
        "Wertanrechnung",
        "Wiener Wohnen",
        "Express Räumung",
      ],
      relatedSlugs: [
        "gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung",
        "haushaltsaufloesung-preise-wien-2026",
        "zimmer-raeumung-wien-wg-uebergabe",
        "bauschutt-sperrmuell-wien-entsorgung",
      ],
      serviceSlugs: [
        "haushaltsaufloesung",
        "wohnungsaufloesung",
        "entrumpelung-wien",
        "raeumung-wien",
        "verlassenschaft",
        "kellerraeumung",
        "dachbodenraeumung",
        "moebel-wertanrechnung",
        "entsorgung-wien",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: EntruempelungAuswanderungWienAuslandArticle,
  },
  {
    meta: {
      slug: "zimmer-raeumung-wien-wg-uebergabe",
      title: "Zimmer Räumung in Wien: Der stressfreie Leitfaden für WG-Zimmer, Studentenheime und Teilräumungen",
      description:
        "Zimmer Räumung Wien: WG-Zimmer, Studentenheime & Teilräumungen. Express-Termine, Fixpreis & Wertanrechnung für Studenten — besenreine Übergabe. Jetzt anfragen.",
      excerpt:
        "Zimmer Räumung in Wien: Leitfaden für WG-Zimmer, Studentenheime und Teilräumungen. Zeitplan, Kostenfaktoren, Checkliste und FAQ für stressfreie Übergabe.",
      publishedAt: "2026-06-18T09:00:00.000Z",
      readingTimeMinutes: 8,
      categories: ["WG", "Studenten", "Wien"],
      tags: [
        "Zimmer Räumung Wien",
        "WG Räumung",
        "Studenten Entrümpelung",
        "Teilräumung",
        "Fixpreis",
        "Wertanrechnung",
        "Express Termin",
      ],
      relatedSlugs: [
        "haushaltsaufloesung-preise-wien-2026",
        "bauschutt-sperrmuell-wien-entsorgung",
        "gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung",
        "ma-48-mistplatz-wien-entsorgungs-guide-2026",
      ],
      serviceSlugs: [
        "wohnungsaufloesung",
        "haushaltsaufloesung",
        "entrumpelung-wien",
        "raeumung-wien",
        "kellerraeumung",
        "moebel-wertanrechnung",
        "entsorgung-wien",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: ZimmerRaeumungWienWgUebergabeArticle,
  },
  {
    meta: {
      slug: "entruempelung-burgenland-mattersburg-rust-oberpullendorf",
      title:
        "Entrümpelung in Burgenland Nord & Mitte: Mattersburg, Rust & Oberpullendorf rechtssicher und fachgerecht",
      description:
        "Entrümpelung Burgenland: Mattersburg, Rust & Oberpullendorf. Regionale Logistik, Fixpreis & Wertanrechnung für Höfe, Seehäuser & Gewerbe — jetzt anfragen.",
      excerpt:
        "Entrümpelung im nördlichen und mittleren Burgenland: Mattersburg, Rust und Oberpullendorf. Regionale Logistik, Mülltrennung, Fixpreis-Garantie und FAQ.",
      publishedAt: "2026-06-18T08:00:00.000Z",
      readingTimeMinutes: 9,
      categories: ["Region", "Burgenland", "Entrümpelung"],
      tags: [
        "Entrümpelung Burgenland",
        "Mattersburg",
        "Rust",
        "Oberpullendorf",
        "Haushaltsauflösung",
        "Fixpreis",
        "Wertanrechnung",
      ],
      relatedSlugs: [
        "entruempelung-wien-umgebung-korneuburg-tulln-schwechat",
        "bauschutt-sperrmuell-wien-entsorgung",
        "gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung",
      ],
      serviceSlugs: [
        "entrumpelung-wien",
        "haushaltsaufloesung",
        "wohnungsaufloesung",
        "verlassenschaft",
        "kellerraeumung",
        "dachbodenraeumung",
        "moebel-wertanrechnung",
        "antiquitaeten-wertanrechnung",
        "entsorgung-wien",
        "raeumung-wien",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: EntruempelungBurgenlandMattersburgRustOberpullendorfArticle,
  },
  {
    meta: {
      slug: "bauschutt-sperrmuell-wien-entsorgung",
      title: "Bauschutt vs. Sperrmüll in Wien: Was gilt als was und wie entsorgt man es richtig?",
      description:
        "Bauschutt vs. Sperrmüll Wien: Unterschiede, Trennregeln & MA-48-Entsorgung. Rigips, Einbauküche & Fixpreis — fachgerecht entsorgen lassen. Jetzt anfragen.",
      excerpt:
        "Bauschutt vs. Sperrmüll in Wien: Was gilt als was? Vergleichstabelle, Entsorgungsregeln, häufige Fehler und FAQ für Renovierung und Räumung.",
      publishedAt: "2026-06-18T03:00:00.000Z",
      readingTimeMinutes: 10,
      categories: ["Entsorgung", "Bauschutt", "Wien"],
      tags: [
        "Bauschutt Sperrmüll Wien",
        "MA 48",
        "Sperrmüll",
        "Bauschutt",
        "Mülltrennung",
        "Entsorgung Wien",
      ],
      relatedSlugs: [
        "ma-48-mistplatz-wien-entsorgungs-guide-2026",
        "halteverbot-entruempelung-wien-ma-46",
        "raeumung-vor-sanierung-altbau-wien-2026",
      ],
      serviceSlugs: [
        "entsorgung-wien",
        "entrumpelung-wien",
        "haushaltsaufloesung",
        "kellerraeumung",
        "wohnungsaufloesung",
        "raeumung-wien",
        "moebel-wertanrechnung",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: BauschuttSperrmuellWienEntsorgungArticle,
  },
  {
    meta: {
      slug: "entruempelung-wien-steuerlich-absetzen",
      title: "Entrümpelung in Wien steuerlich absetzen: Der ultimative Leitfaden für Vermieter, Privatpersonen & Erben",
      description:
        "Entrümpelung steuerlich absetzen Wien: Handwerkerbonus, Werbungskosten & Nachlassverbindlichkeiten. Transparente Rechnung — Fixpreis von Objekträumung. Jetzt anfragen.",
      excerpt:
        "Entrümpelung in Wien steuerlich absetzen: Privatpersonen, Vermieter & Erben. Rechnungsstruktur, Checkliste, häufige Fehler und FAQ für das Finanzamt.",
      publishedAt: "2026-06-18T04:00:00.000Z",
      readingTimeMinutes: 11,
      categories: ["Steuer", "Entrümpelung", "Wien"],
      tags: [
        "Entrümpelung steuerlich absetzen Wien",
        "Handwerkerbonus",
        "Werbungskosten",
        "Haushaltsnahe Dienstleistungen",
        "Verlassenschaft",
        "Fixpreis",
      ],
      relatedSlugs: [
        "haushaltsaufloesung-preise-wien-2026",
        "gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung",
        "entruempelung-mietnomaden-wien-vermieter",
      ],
      serviceSlugs: [
        "haushaltsaufloesung",
        "wohnungsaufloesung",
        "verlassenschaft",
        "kellerraeumung",
        "entrumpelung-wien",
        "moebel-wertanrechnung",
        "antiquitaeten-wertanrechnung",
        "firmenaufloesung",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: EntruempelungWienSteuerlichAbsetzenArticle,
  },
  {
    meta: {
      slug: "gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung",
      title: "Gebrauchte Möbel verkaufen in Wien: Willhaben vs. direkte Wertanrechnung bei der Räumung",
      description:
        "Möbel verkaufen Wien: Willhaben vs. Wertanrechnung im Vergleich. Zeit, Kosten & Fixpreis — wann sich Sofort-Wertanrechnung bei der Entrümpelung lohnt. Jetzt anfragen.",
      excerpt:
        "Gebrauchte Möbel in Wien verkaufen: Willhaben vs. Sofort-Wertanrechnung. Vergleichstabelle, Kombi-Strategie und FAQ für Haushaltsauflösungen.",
      publishedAt: "2026-06-18T05:00:00.000Z",
      readingTimeMinutes: 10,
      categories: ["Wertanrechnung", "Möbel", "Wien"],
      tags: [
        "Möbel verkaufen Wien",
        "Willhaben",
        "Wertanrechnung",
        "Wertausgleich",
        "Haushaltsauflösung",
        "Fixpreis",
      ],
      relatedSlugs: [
        "moebel-bewerten-objektrueumung-wien",
        "haushaltsaufloesung-preise-wien-2026",
        "ma-48-mistplatz-wien-entsorgungs-guide-2026",
      ],
      serviceSlugs: [
        "moebel-wertanrechnung",
        "antiquitaeten-wertanrechnung",
        "einkauf",
        "haushaltsaufloesung",
        "wohnungsaufloesung",
        "verlassenschaft",
        "entrumpelung-wien",
        "firmenaufloesung",
        "entsorgung-wien",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: GebrauchteMoebelVerkaufenWienWillhabenWertanrechnungArticle,
  },
  {
    meta: {
      slug: "halteverbot-entruempelung-wien-ma-46",
      title: "Halteverbot für die Entrümpelung in Wien organisieren: Richtlinien, MA 46 Antrag & Kosten",
      description:
        "Halteverbot Entrümpelung Wien: MA-46-Antrag, 48-Stunden-Regel & Kosten ab 80 €. HVZ rechtssicher organisieren — oder Full-Service von Objekträumung. Jetzt anfragen.",
      excerpt:
        "Halteverbot für die Entrümpelung in Wien: Warum HVZ unverzichtbar ist, MA-46-Antrag Schritt für Schritt, Kosten & Fristen und FAQ für Vermieter und Räumungskunden.",
      publishedAt: "2026-06-18T06:00:00.000Z",
      readingTimeMinutes: 10,
      categories: ["Logistik", "Halteverbot", "Wien"],
      tags: [
        "Halteverbot Entrümpelung Wien",
        "MA 46",
        "Halteverbotszone",
        "HVZ Wien",
        "Parkverbot",
        "Entrümpelung",
      ],
      relatedSlugs: [
        "haushaltsaufloesung-preise-wien-2026",
        "ma-48-mistplatz-wien-entsorgungs-guide-2026",
        "entruempelung-wien-umgebung-korneuburg-tulln-schwechat",
      ],
      serviceSlugs: [
        "entrumpelung-wien",
        "haushaltsaufloesung",
        "wohnungsaufloesung",
        "raeumung-wien",
        "firmenaufloesung",
        "messie-entruempelung",
        "verlassenschaft",
        "kellerraeumung",
        "dachbodenraeumung",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: HalteverbotEntruempelungWienMa46Article,
  },
  {
    meta: {
      slug: "entruempelung-mietnomaden-wien-vermieter",
      title: "Entrümpelung nach Mietnomaden in Wien: Kosten, Rechte & Notfall-Leitfaden für Vermieter",
      description:
        "Mietnomaden Entrümpelung Wien: Delogierung, Beweissicherung, MA-48-Entsorgung & Fixpreis. Rechte, Kosten & FAQ für Vermieter — jetzt diskret anfragen.",
      excerpt:
        "Entrümpelung nach Mietnomaden in Wien: Rechtliche Voraussetzungen, Beweissicherung, 4-Phasen-Ablauf, Aufbewahrungspflichten, Kosten & FAQ für Vermieter.",
      publishedAt: "2026-06-18T07:00:00.000Z",
      readingTimeMinutes: 11,
      categories: ["Mietnomaden", "Vermieter", "Wien"],
      tags: [
        "Mietnomaden Entrümpelung Wien",
        "Delogierung",
        "Vermieter",
        "Zwangsräumung",
        "Fixpreis",
        "MA 48",
      ],
      relatedSlugs: [
        "zwangsraeumung-delogierung-wien-hausverwaltung",
        "messie-wohnung-raeumung-wien-spezial",
        "haushaltsaufloesung-preise-wien-2026",
      ],
      serviceSlugs: [
        "wohnungsaufloesung",
        "haushaltsaufloesung",
        "verlassenschaft",
        "messie-entruempelung",
        "entrumpelung-wien",
        "entsorgung-wien",
        "raeumung-wien",
        "moebel-wertanrechnung",
        "kellerraeumung",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: EntruempelungMietnomadenWienVermieterArticle,
  },
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
        "entruempelung-mietnomaden-wien-vermieter",
        "messie-wohnung-raeumung-wien-spezial",
        "haushaltsaufloesung-preise-wien-2026",
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
        "gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung",
        "haushaltsaufloesung-preise-wien-2026",
        "bueroaufloesung-wien-dsgvo-aktenvernichtung",
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
