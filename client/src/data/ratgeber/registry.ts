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
import { PraxisaufloesungWienChecklisteDsgvoAerzteArticle } from "@/components/ratgeber/articles/praxisaufloesung-wien-checkliste-dsgvo-aerzte";
import { WohnungsaufloesungTodesfallWienAblaufArticle } from "@/components/ratgeber/articles/wohnungsaufloesung-todesfall-wien-ablauf";
import { DachbodenraeumungWienMa48ChecklisteArticle } from "@/components/ratgeber/articles/dachbodenraeumung-wien-ma-48-checkliste";
import { EntruempelungWien5FataleFehlerArticle } from "@/components/ratgeber/articles/entruempelung-wien-5-fatale-fehler";
import { ElektrogeraeteEntsorgenWienUmgebungArticle } from "@/components/ratgeber/articles/elektrogeraete-entsorgen-wien-umgebung";
import { EntruempelungOesterreichweitSteiermarkKaerntenOberoesterreichSalzburgArticle } from "@/components/ratgeber/articles/entruempelung-oesterreichweit-steiermark-kaernten-oberoesterreich-salzburg";
import { BibliothekSammlungAufloesenWienWertanrechnungArticle } from "@/components/ratgeber/articles/bibliothek-sammlung-aufloesen-wien-wertanrechnung";
import { AirbnbFerienwohnungExpressEntruempelungWienArticle } from "@/components/ratgeber/articles/airbnb-ferienwohnung-express-entruempelung-wien";
import { EntruempelungAltbauOhneLiftWienFixpreisArticle } from "@/components/ratgeber/articles/entruempelung-altbau-ohne-lift-wien-fixpreis";
import { KellerentruempelungGemeindebauWienArticle } from "@/components/ratgeber/articles/kellerentruempelung-gemeindebau-wien";
import { HaushaltsaufloesungVorImmobilienverkaufWienArticle } from "@/components/ratgeber/articles/haushaltsaufloesung-vor-immobilienverkauf-wien";
import { SeniorenEntruempelungDownsizingWienPflegeheimArticle } from "@/components/ratgeber/articles/senioren-entruempelung-downsizing-wien-pflegeheim";
import { GaragenraeumungWienParkgarageTiefgarageFixpreisArticle } from "@/components/ratgeber/articles/garagenraeumung-wien-parkgarage-tiefgarage-fixpreis";
import { EntruempelungScheidungTrennungWienHaushaltTeilenArticle } from "@/components/ratgeber/articles/entruempelung-scheidung-trennung-wien-haushalt-teilen";
import { NachlassverwalterEntruempelungWienErbengemeinschaftArticle } from "@/components/ratgeber/articles/nachlassverwalter-entruempelung-wien-erbengemeinschaft";
import { ContainerMietenVsProfiEntruempelungWienArticle } from "@/components/ratgeber/articles/container-mieten-vs-profi-entruempelung-wien";
import { DemontageEinbaukuecheBadezimmerWienEntruempelungArticle } from "@/components/ratgeber/articles/demontage-einbaukueche-badezimmer-wien-entruempelung";

/**
 * Zentrale Artikel-Registry.
 * Neuen Artikel hinzufügen:
 * 1. `components/ratgeber/articles/{slug}.tsx` anlegen (Vorlage: `_vorlage-artikel.tsx`)
 * 2. Import + Eintrag unten ergänzen
 *
 * publishedAt: höchstens 23. Juni 2026 (2026-06-23T23:59:59.000Z).
 */
export const RATGEBER_REGISTRY: RatgeberArticleRecord[] = [
  {
    meta: {
      slug: "garagenraeumung-wien-parkgarage-tiefgarage-fixpreis",
      title:
        "Garagenräumung Wien: Tiefgarage, Parkgarage & Stellplatz – Fixpreis & MA-48-Entsorgung",
      description:
        "Garagenräumung Wien: Tiefgarage, Einzelgarage & Parkgarage besenrein. Reifen, Altöl, Werkzeug – Fixpreis, Wertanrechnung & MA 48. Jetzt anfragen.",
      excerpt:
        "Garagenräumung in Wien: Tiefgarage, Parkgarage und Einzelstellplatz – Reifen, Werkzeug, Altöl, enge Zufahrten, MA 48 und Fixpreis aus einer Hand.",
      publishedAt: "2026-06-23T23:04:00.000Z",
      readingTimeMinutes: 11,
      wordCount: 1544,
      categories: ["Garage", "Entrümpelung", "Wien"],
      tags: [
        "Garagenräumung Wien",
        "Tiefgarage räumen",
        "Parkgarage Entrümpelung",
        "Stellplatz",
        "MA 48",
        "Fixpreis",
        "Wertanrechnung",
      ],
      relatedSlugs: [
        "kellerentruempelung-gemeindebau-wien",
        "ma-48-mistplatz-wien-entsorgungs-guide-2026",
        "bauschutt-sperrmuell-wien-entsorgung",
        "haushaltsaufloesung-preise-wien-2026",
      ],
      serviceSlugs: [
        "garagenraeumung",
        "kellerraeumung",
        "haushaltsaufloesung",
        "entsorgung-wien",
        "entrumpelung-wien",
        "raeumung-wien",
        "moebel-wertanrechnung",
      ],
      faqPairs: [
        {
          question: "Muss ich den Garagenstellplatz bei Auszug wirklich leerräumen?",
          answer:
            "In den meisten Mietverträgen ist der Garagenstellplatz vertraglich zugeordnet und muss bei Auszug leer und besenrein übergeben werden. Objekträumung liefert auf Wunsch ein Übergabeprotokoll.",
        },
        {
          question: "Kann ich Autoreifen über die MA 48 entsorgen?",
          answer:
            "Autoreifen gehören nicht in den normalen Sperrmüll. Die MA 48 nimmt Reifen nur über spezielle Kanäle und in begrenzten Mengen an – wir übernehmen die fachgerechte Entsorgung im Fixpreis.",
        },
        {
          question: "Wohin mit Altöl und Autobatterien aus der Garage?",
          answer:
            "Altöl, Bremsflüssigkeit und Autobatterien sind Problemstoffe. Die MA 48 und zertifizierte Annahmestellen in Wien sind die richtigen Wege – wir trennen und entsorgen fachgerecht.",
        },
        {
          question: "Wie funktioniert Wertanrechnung bei Werkzeug in der Garage?",
          answer:
            "Bei der Besichtigung bewerten wir brauchbare Werkzeuge, Maschinen und Gartengeräte. Der geschätzte Marktwert wird direkt vom Fixpreis abgezogen.",
        },
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: GaragenraeumungWienParkgarageTiefgarageFixpreisArticle,
  },
  {
    meta: {
      slug: "entruempelung-scheidung-trennung-wien-haushalt-teilen",
      title:
        "Entrümpelung bei Scheidung & Trennung Wien: Haushalt teilen, Inventar & besenreine Übergabe",
      description:
        "Entrümpelung Scheidung Wien: Haushalt fair teilen, Inventarliste, diskrete Räumung & Fixpreis. Besenreine Vermieter-Übergabe – jetzt Beratung anfragen.",
      excerpt:
        "Entrümpelung bei Scheidung und Trennung in Wien: Haushalt teilen, Inventarliste, diskrete Abwicklung, Wertanrechnung und schnelle besenreine Übergabe.",
      publishedAt: "2026-06-23T23:03:00.000Z",
      readingTimeMinutes: 10,
      wordCount: 1395,
      categories: ["Scheidung", "Trennung", "Wien"],
      tags: [
        "Entrümpelung Scheidung Wien",
        "Haushalt teilen",
        "Trennung Wohnung",
        "Inventarliste",
        "Fixpreis",
        "diskret",
        "Wertanrechnung",
      ],
      relatedSlugs: [
        "haushaltsaufloesung-vor-immobilienverkauf-wien",
        "zimmer-raeumung-wien-wg-uebergabe",
        "gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung",
        "haushaltsaufloesung-preise-wien-2026",
      ],
      serviceSlugs: [
        "wohnungsaufloesung",
        "haushaltsaufloesung",
        "moebel-wertanrechnung",
        "verlassenschaft",
        "entrumpelung-wien",
        "raeumung-wien",
        "zimmer-raeumung",
      ],
      faqPairs: [
        {
          question: "Können Sie die Räumung durchführen, wenn nur einer Partner anwesend sein kann?",
          answer:
            "Ja. Mit schriftlicher Freigabe beider Parteien oder nach Vereinbarung mit Anwalt/Mediator arbeiten wir diskret – auch ohne gemeinsame Anwesenheit vor Ort.",
        },
        {
          question: "Wer trägt die Kosten der Entrümpelung bei Scheidung?",
          answer:
            "Das regeln Sie vertraglich untereinander oder über Anwalt. Wir stellen eine transparente Fixpreis-Rechnung aus, die als Aufteilungsgrundlage dient.",
        },
        {
          question: "Was passiert mit Möbeln, die beide behalten wollen?",
          answer:
            "Die Inventarliste mit Markierung (Partner A / B / gemeinsam verkaufen) klärt das vor der Räumung. Verwertbares rechnen wir fair an oder trennen wir physisch.",
        },
        {
          question: "Wie schnell kann die Wohnung für den Vermieter übergeben werden?",
          answer:
            "Nach Besichtigung oft innerhalb von 3–7 Werktagen besenrein – inklusive MA-48-Entsorgung und Übergabeprotokoll.",
        },
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: EntruempelungScheidungTrennungWienHaushaltTeilenArticle,
  },
  {
    meta: {
      slug: "nachlassverwalter-entruempelung-wien-erbengemeinschaft",
      title:
        "Nachlassverwalter & Erbengemeinschaft Wien: Verlassenschaft entrümpeln – Protokoll & Fixpreis",
      description:
        "Entrümpelung für Nachlassverwalter Wien: Erbengemeinschaft, Gerichtskommissär, internationale Erben. Fixpreis, Wertanrechnung & Notar-Protokoll – jetzt anfragen.",
      excerpt:
        "Nachlassverwalter und Erbengemeinschaften in Wien: Verlassenschaft entrümpeln mit Gerichtskommissär-Freigabe, Protokoll für Notar und Fixpreis.",
      publishedAt: "2026-06-23T23:02:00.000Z",
      readingTimeMinutes: 11,
      wordCount: 1500,
      categories: ["Nachlass", "Verlassenschaft", "Wien"],
      tags: [
        "Nachlassverwalter Wien",
        "Erbengemeinschaft",
        "Verlassenschaft entrümpeln",
        "Gerichtskommissär",
        "Fixpreis",
        "Wertanrechnung",
        "internationale Erben",
      ],
      relatedSlugs: [
        "wohnungsaufloesung-todesfall-wien-ablauf",
        "haushaltsaufloesung-vor-immobilienverkauf-wien",
        "bibliothek-sammlung-aufloesen-wien-wertanrechnung",
        "entruempelung-auswanderung-wien-ausland",
      ],
      serviceSlugs: [
        "verlassenschaft",
        "haushaltsaufloesung",
        "wohnungsaufloesung",
        "moebel-wertanrechnung",
        "antiquitaeten-wertanrechnung",
        "entrumpelung-wien",
        "raeumung-wien",
        "entsorgung-wien",
      ],
      faqPairs: [
        {
          question: "Darf der Nachlassverwalter die Entrümpelung allein beauftragen?",
          answer:
            "Nachlassverwalter mit entsprechender Bestellung dürfen Verfügungen treffen. Bei Erbengemeinschaften ohne Verwalter ist die schriftliche Freigabe aller Erben oder des Gerichtskommissärs erforderlich.",
        },
        {
          question: "Welche Unterlagen erhalten wir für Notar und Gericht?",
          answer:
            "Fixpreis-Rechnung, Übergabeprotokoll mit Fotos, Wertaufstellung bei Wertanrechnung und MA-48-Entsorgungsnachweise – lückenlos dokumentiert.",
        },
        {
          question: "Können Erben im Ausland per Video teilnehmen?",
          answer:
            "Ja. Videobesichtigung, digitale Sortierlisten und Freigaben per E-Mail sind Standard – mit einer festen Ansprechperson in Wien.",
        },
        {
          question: "Wie diskret läuft die Räumung in Villenvierteln ab?",
          answer:
            "Neutrale Fahrzeuge, leise Arbeitsweise, Terminfenster nach Absprache – besonders in 1130, 1180 und 1190.",
        },
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: NachlassverwalterEntruempelungWienErbengemeinschaftArticle,
  },
  {
    meta: {
      slug: "container-mieten-vs-profi-entruempelung-wien",
      title:
        "Container mieten vs. Profi-Entrümpelung Wien: Kostenvergleich, MA 48 & Fixpreis 2026",
      description:
        "Container vs. Profi-Entrümpelung Wien: ehrlicher Kostenvergleich, MA-48-Selbstanlieferung, Halteverbot MA 46. Wann Fixpreis günstiger ist – jetzt beraten lassen.",
      excerpt:
        "Container mieten oder Profi-Entrümpelung in Wien? Kostenvergleich, MA 48, Genehmigung, Halteverbot und wann der Fixpreis die bessere Wahl ist.",
      publishedAt: "2026-06-23T23:01:00.000Z",
      readingTimeMinutes: 11,
      wordCount: 1687,
      categories: ["Container", "Kostenvergleich", "Wien"],
      tags: [
        "Container mieten Wien",
        "Entrümpelung Kosten",
        "MA 48 Selbstanlieferung",
        "Fixpreis",
        "Halteverbot",
        "Profi Entrümpelung",
      ],
      relatedSlugs: [
        "ma-48-mistplatz-wien-entsorgungs-guide-2026",
        "haushaltsaufloesung-preise-wien-2026",
        "halteverbot-entruempelung-wien-ma-46",
        "entruempelung-wien-5-fatale-fehler",
      ],
      serviceSlugs: [
        "entsorgung-wien",
        "haushaltsaufloesung",
        "entrumpelung-wien",
        "raeumung-wien",
        "kellerraeumung",
        "wohnungsaufloesung",
      ],
      faqPairs: [
        {
          question: "Wie viel kostet ein Abfallcontainer in Wien wirklich?",
          answer:
            "Die Container-Miete allein liegt oft bei 150–400 Euro; dazu kommen Stellgenehmigung, Transport, eigene Arbeitszeit und MA-48-Gebühren. Der Gesamtpreis nähert sich schnell einem Profi-Fixpreis.",
        },
        {
          question: "Darf ich einen Container ohne Genehmigung auf der Straße abstellen?",
          answer:
            "Nein. Auf öffentlichem Grund in Wien brauchen Sie eine Bewilligung – oft über MA 46 Halteverbotszone. Wir übernehmen das im Full-Service.",
        },
        {
          question: "Kann ich Container und MA-48-Selbstanlieferung kombinieren?",
          answer:
            "Ja. Leichten Hausrat fahren Sie selbst zum Mistplatz; schwere Stücke und Demontage übernehmen wir – Hybrid spart oft sinnvoll.",
        },
        {
          question: "Ab wann lohnt sich ein Fixpreis mehr als der Container?",
          answer:
            "Ab mehr als einem Raum plus Nebenflächen, ohne Lift, oder wenn Zeitdruck herrscht – dann ist Full-Service meist günstiger und planbarer.",
        },
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: ContainerMietenVsProfiEntruempelungWienArticle,
  },
  {
    meta: {
      slug: "demontage-einbaukueche-badezimmer-wien-entruempelung",
      title:
        "Demontage Einbauküche & Badezimmer Wien: Abbau bei Entrümpelung & Sanierung zum Fixpreis",
      description:
        "Einbauküche & Badezimmer demontieren Wien: Wasser abdrehen, Bauschutt trennen, MA 48. Fixpreis inkl. Abbau bei Haushaltsauflösung – jetzt anfragen.",
      excerpt:
        "Demontage von Einbauküche und Badezimmer in Wien: fachgerechter Abbau, Bauschutt-Trennung, MA 48 und Fixpreis bei Haushaltsauflösung oder Sanierung.",
      publishedAt: "2026-06-23T23:00:00.000Z",
      readingTimeMinutes: 11,
      wordCount: 1800,
      categories: ["Demontage", "Sanierung", "Wien"],
      tags: [
        "Einbauküche demontieren Wien",
        "Badezimmer abbauen",
        "Haushaltsauflösung Küche",
        "Bauschutt",
        "MA 48",
        "Fixpreis",
        "Sanierung",
      ],
      relatedSlugs: [
        "raeumung-vor-sanierung-altbau-wien-2026",
        "bauschutt-sperrmuell-wien-entsorgung",
        "ma-48-mistplatz-wien-entsorgungs-guide-2026",
        "entruempelung-altbau-ohne-lift-wien-fixpreis",
      ],
      serviceSlugs: [
        "haushaltsaufloesung",
        "wohnungsaufloesung",
        "entsorgung-wien",
        "entrumpelung-wien",
        "raeumung-wien",
        "kellerraeumung",
      ],
      faqPairs: [
        {
          question: "Ist die Küchen-Demontage im Fixpreis enthalten?",
          answer:
            "Ja, wenn sie bei der Besichtigung vereinbart wurde. Einbauküche, Arbeitsplatte und Geräte-Anschluss-Trennung sind im Leistungsumfang enthalten.",
        },
        {
          question: "Was passiert mit Fliesen und Bauschutt aus dem Bad?",
          answer:
            "Fliesen und Keramik werden als Bauschutt getrennt und über MA 48 bzw. zertifizierte Deponien entsorgt – nicht als Sperrmüll gemischt.",
        },
        {
          question: "Muss ich Wasser und Strom selbst abdrehen?",
          answer:
            "Idealerweise ja vor unserem Termin. Wir können auf Wunsch einen Installateur koordinieren, wenn Absperrventile defekt oder unzugänglich sind.",
        },
        {
          question: "Kann die Demontage vor der Sanierung ohne Vollräumung erfolgen?",
          answer:
            "Ja. Küche-only oder Bad-only Demontage ist möglich – oft als Vorbereitung für Handwerker gemäß unserem Sanierungs-Leitfaden.",
        },
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: DemontageEinbaukuecheBadezimmerWienEntruempelungArticle,
  },
  {
    meta: {
      slug: "airbnb-ferienwohnung-express-entruempelung-wien",
      title:
        "Airbnb & Ferienwohnung Wien: Express-Entrümpelung zwischen Check-out und Check-in",
      description:
        "Airbnb Entrümpelung Wien: Express-Turnaround in 6 Stunden, Fixpreis, Geruchsneutralisation & MA-48-Entsorgung. Für Vermieter & Kurzzeitvermieter — jetzt anfragen.",
      excerpt:
        "Airbnb & Ferienwohnung in Wien: So schaffen Sie die Express-Entrümpelung zwischen Check-out und Check-in — Timeline, Fixpreis, Lastenlift & Geruchsneutralisation.",
      publishedAt: "2026-06-23T22:00:00.000Z",
      readingTimeMinutes: 11,
      wordCount: 2100,
      categories: ["Airbnb", "Vermieter", "Wien"],
      tags: [
        "Airbnb Entrümpelung Wien",
        "Ferienwohnung Räumung",
        "Express Entrümpelung",
        "Kurzzeitvermietung",
        "Fixpreis",
        "Geruchsneutralisation",
        "MA 48",
      ],
      relatedSlugs: [
        "zimmer-raeumung-wien-wg-uebergabe",
        "halteverbot-entruempelung-wien-ma-46",
        "haushaltsaufloesung-preise-wien-2026",
        "entruempelung-wien-steuerlich-absetzen",
      ],
      serviceSlugs: [
        "wohnungsaufloesung",
        "haushaltsaufloesung",
        "entrumpelung-wien",
        "raeumung-wien",
        "entsorgung-wien",
        "zimmer-raeumung",
      ],
      faqPairs: [
        {
          question:
            "Schaffen Sie wirklich eine komplette Entrümpelung in 6 Stunden zwischen Check-out und Check-in?",
          answer:
            "Ja — für typische Ferienwohnungen bis ca. 80 m² mit normaler Möblierung. Voraussetzung: mindestens 48 Stunden Vorlauf, gesicherter Zugang und rechtzeitig beantragtes Halteverbot. Bei Hochhaus-Einsätzen mit Lastenlift koordinieren wir das Zeitfenster mit der Hausverwaltung.",
        },
        {
          question: "Was kostet eine Express-Entrümpelung für meine Airbnb-Wohnung in Wien?",
          answer:
            "Eine typische 2-Zimmer-Ferienwohnung (50–70 m²) liegt zwischen 800 und 1.800 Euro zum Fixpreis — inklusive Transport, MA-48-Entsorgung und besenreiner Übergabe. Verwertbare Möbel rechnen wir per Wertanrechnung an.",
        },
        {
          question:
            "Können Sie auch bei starkem Rauch- oder Haustiergeruch helfen, damit der nächste Gast zufrieden ist?",
          answer:
            "Ja. Neben der Entrümpelung bieten wir Ozonbehandlung und Spezialreinigung an. Geruchsbelastete Textilien entsorgen wir fachgerecht; die Geruchsneutralisation lässt sich in den Fixpreis integrieren.",
        },
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: AirbnbFerienwohnungExpressEntruempelungWienArticle,
  },
  {
    meta: {
      slug: "entruempelung-altbau-ohne-lift-wien-fixpreis",
      title:
        "Entrümpelung Altbau ohne Lift Wien: Tragekonzept, Kosten & Fixpreis im 4.–5. Stock",
      description:
        "Entrümpelung ohne Lift Wien: Gründerzeit 4.–5. Stock, Tragekonzept & Parkett-Schutz. Fixpreis ohne Nachzahlung, Wertanrechnung & MA 48 — jetzt Besichtigung anfragen.",
      excerpt:
        "Entrümpelung im Wiener Altbau ohne Lift: Tragekonzept für den 4.–5. Stock, transparente Fixpreis-Kalkulation, Parkett-Schutz und MA-48-Entsorgung.",
      publishedAt: "2026-06-23T21:00:00.000Z",
      readingTimeMinutes: 10,
      wordCount: 1570,
      categories: ["Altbau", "Entrümpelung", "Wien"],
      tags: [
        "Entrümpelung ohne Lift Wien",
        "Altbau Entrümpelung",
        "Gründerzeitwohnung",
        "Treppenhaus Räumung",
        "Fixpreis",
        "Wertanrechnung",
        "MA 48",
      ],
      relatedSlugs: [
        "haushaltsaufloesung-preise-wien-2026",
        "halteverbot-entruempelung-wien-ma-46",
        "dachbodenraeumung-wien-ma-48-checkliste",
        "entruempelung-wien-5-fatale-fehler",
      ],
      serviceSlugs: [
        "haushaltsaufloesung",
        "wohnungsaufloesung",
        "entrumpelung-wien",
        "raeumung-wien",
        "entsorgung-wien",
        "moebel-wertanrechnung",
        "kellerraeumung",
        "dachbodenraeumung",
      ],
      faqPairs: [
        {
          question: "Wird der fehlende Lift automatisch im Fixpreis berücksichtigt?",
          answer:
            "Ja. Stockwerk, Treppenbreite und Trageweg fließen in unsere Besichtigung ein und werden transparent im Fixpreis kalkuliert — ohne versteckte Aufschläge am Einsatztag.",
        },
        {
          question: "Können schwere Möbel aus dem 5. Stock ohne Aufzug sicher transportiert werden?",
          answer:
            "Ja. Wir planen Träger-Teams, Schutzmaterial für Parkett und Stuck sowie bei Bedarf kleinere Transporter statt Sperr-Lkw. Schwerlaststücke sichern wir mit Tragegurten und Kantenschutz.",
        },
        {
          question: "Was passiert mit antiken Möbeln im Gründerzeit-Altbau?",
          answer:
            "Wir bewerten verwertbare Stücke im Rahmen der Räumung und rechnen den Wert fair auf den Fixpreis an. Ein separater Ankauf findet nicht statt — Sie profitieren direkt von der Wertanrechnung.",
        },
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: EntruempelungAltbauOhneLiftWienFixpreisArticle,
  },
  {
    meta: {
      slug: "kellerentruempelung-gemeindebau-wien",
      title:
        "Kellerentrümpelung Gemeindebau Wien: Wiener Wohnen, nummerierte Abteile & besenreine Übergabe",
      description:
        "Keller räumen Wien Gemeindebau: nummerierte Abteile, Wiener-Wohnen-Fristen, MA 48 & 48er-Tandler. Fixpreis, Hausverwaltungs-Protokoll — jetzt anfragen.",
      excerpt:
        "Kellerentrümpelung im Wiener Gemeindebau: nummerierte Kellerabteile, Abstimmung mit Wiener Wohnen, MA-48-Entsorgung und besenreine Übergabe vor der Frist.",
      publishedAt: "2026-06-23T20:00:00.000Z",
      readingTimeMinutes: 10,
      wordCount: 1900,
      categories: ["Keller", "Gemeindebau", "Wien"],
      tags: [
        "Kellerentrümpelung Wien",
        "Keller räumen Wien",
        "Gemeindebau Entrümpelung",
        "Wiener Wohnen",
        "MA 48",
        "48er-Tandler",
        "Fixpreis",
      ],
      relatedSlugs: [
        "dachbodenraeumung-wien-ma-48-checkliste",
        "ma-48-mistplatz-wien-entsorgungs-guide-2026",
        "haushaltsaufloesung-preise-wien-2026",
        "entruempelung-wien-5-fatale-fehler",
      ],
      serviceSlugs: [
        "kellerraeumung",
        "haushaltsaufloesung",
        "wohnungsaufloesung",
        "entrumpelung-wien",
        "entsorgung-wien",
        "raeumung-wien",
      ],
      faqPairs: [
        {
          question: "Muss ich als Mieter das Kellerabteil vor Auszug leerräumen?",
          answer:
            "In der Regel ja — die Hausverwaltung verlangt eine besenreine Übergabe des Kellerabteils. Fristen stehen im Übergabeprotokoll; wir koordinieren die Räumung rechtzeitig mit der Verwaltung.",
        },
        {
          question: "Was passiert, wenn das Kellerabteil feucht oder verschimmelt ist?",
          answer:
            "Unsere Teams sind für kontaminierte Keller ausgerüstet (Atemschutz, Schutzkleidung). Feuchter Müll wird getrennt und fachgerecht über MA 48 entsorgt; auf Wunsch dokumentieren wir den Zustand fotografisch.",
        },
        {
          question: "Räumen Sie auch mehrere Kellerabteile in einem Gemeindebau auf einmal?",
          answer:
            "Ja. Bei Erbengemeinschaften oder Hausverwaltungsaufträgen inventarisieren wir nummerierte Abteile, räumen parallel und liefern ein Gesamtprotokoll für die Übergabe.",
        },
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: KellerentruempelungGemeindebauWienArticle,
  },
  {
    meta: {
      slug: "haushaltsaufloesung-vor-immobilienverkauf-wien",
      title:
        "Haushaltsauflösung vor Immobilienverkauf Wien: Timeline für Makler, Fotos & besenreine Besichtigung",
      description:
        "Haushaltsauflösung vor Verkauf Wien: 7–14-Tage-Timeline für Makler & Erbengemeinschaft. Fixpreis, Wertanrechnung, Foto-Protokoll — jetzt Besichtigung anfragen.",
      excerpt:
        "Haushaltsauflösung vor dem Immobilienverkauf in Wien: Makler-Timeline, besenreine Besichtigung, Erbengemeinschaft, Wertanrechnung und Fixpreis aus einer Hand.",
      publishedAt: "2026-06-23T19:00:00.000Z",
      readingTimeMinutes: 11,
      wordCount: 1900,
      categories: ["Immobilienverkauf", "Verlassenschaft", "Wien"],
      tags: [
        "Haushaltsauflösung vor Verkauf",
        "Wohnung verkaufen entrümpeln Wien",
        "besenrein Makler",
        "Erbengemeinschaft",
        "Fixpreis",
        "Wertanrechnung",
        "Verlassenschaft",
      ],
      relatedSlugs: [
        "wohnungsaufloesung-todesfall-wien-ablauf",
        "gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung",
        "haushaltsaufloesung-preise-wien-2026",
        "entruempelung-wien-steuerlich-absetzen",
      ],
      serviceSlugs: [
        "haushaltsaufloesung",
        "wohnungsaufloesung",
        "verlassenschaft",
        "entrumpelung-wien",
        "raeumung-wien",
        "moebel-wertanrechnung",
        "antiquitaeten-wertanrechnung",
        "kellerraeumung",
        "dachbodenraeumung",
        "entsorgung-wien",
      ],
      faqPairs: [
        {
          question: "Wie viele Tage vor der Makler-Besichtigung sollte die Räumung abgeschlossen sein?",
          answer:
            "Ideal sind 3–5 Werktage Puffer vor dem Fototermin. So können Handwerker kleine Mängel beheben und die Wohnung wirkt auf Fotos und bei Besichtigungen optimal.",
        },
        {
          question: "Müssen Keller und Dachboden vor dem Verkauf auch geräumt werden?",
          answer:
            "Ja, in den meisten Fällen. Käufer und Makler prüfen Nebenflächen — vollgestellte Keller oder Dachböden senken den Verkaufspreis und verzögern den Notartermin.",
        },
        {
          question: "Erhalte ich Unterlagen für Notar und Erbengemeinschaft?",
          answer:
            "Ja. Sie erhalten ein Übergabeprotokoll mit Fotos, eine transparente Fixpreis-Rechnung und auf Wunsch eine Wertaufstellung für das Nachlass- bzw. Verkaufsverfahren.",
        },
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: HaushaltsaufloesungVorImmobilienverkaufWienArticle,
  },
  {
    meta: {
      slug: "senioren-entruempelung-downsizing-wien-pflegeheim",
      title:
        "Senioren-Entrümpelung & Downsizing Wien: Umzug ins Pflegeheim ohne Stress für die Familie",
      description:
        "Senioren Entrümpelung Wien: Downsizing fürs Pflegeheim — behalten, spenden, entsorgen. Videobesichtigung, diskret, Fixpreis & Wertanrechnung. Jetzt anfragen.",
      excerpt:
        "Senioren-Entrümpelung in Wien: Downsizing beim Umzug ins Pflegeheim — Sortierliste, Videobesichtigung für Angehörige im Ausland, Spende & besenreine Übergabe.",
      publishedAt: "2026-06-23T18:00:00.000Z",
      readingTimeMinutes: 10,
      wordCount: 1130,
      categories: ["Senioren", "Downsizing", "Wien"],
      tags: [
        "Senioren Entrümpelung Wien",
        "Downsizing Wien",
        "Pflegeheim Umzug",
        "Haushaltsauflösung Eltern",
        "diskret",
        "Fixpreis",
        "Wertanrechnung",
      ],
      relatedSlugs: [
        "wohnungsaufloesung-todesfall-wien-ablauf",
        "gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung",
        "haushaltsaufloesung-preise-wien-2026",
        "entruempelung-auswanderung-wien-ausland",
      ],
      serviceSlugs: [
        "haushaltsaufloesung",
        "wohnungsaufloesung",
        "verlassenschaft",
        "entrumpelung-wien",
        "raeumung-wien",
        "moebel-wertanrechnung",
        "kellerraeumung",
        "dachbodenraeumung",
        "entsorgung-wien",
      ],
      faqPairs: [
        {
          question: "Kann die Entrümpelung erfolgen, wenn ich als Angehöriger im Ausland lebe?",
          answer:
            "Ja. Wir bieten Videobesichtigungen, digitale Sortierlisten (behalten / spenden / entsorgen) und Freigaben per E-Mail — mit einer festen Ansprechperson in Wien.",
        },
        {
          question: "Wie gehen Sie respektvoll mit Erinnerungsstücken um?",
          answer:
            "Fotos, Briefe und persönliche Gegenstände werden separat verpackt und nur nach Ihrer Freigabe weitergegeben oder entsorgt. Tempo und Ton orientieren sich am Wohlbefinden der Familie.",
        },
        {
          question: "Was passiert mit gut erhaltenen Möbeln nach dem Downsizing?",
          answer:
            "Auf Wunsch spenden wir an soziale Einrichtungen in Wien. Verwertbare Möbel rechnen wir im Rahmen der Räumung auf den Fixpreis an — kein separater Ankauf.",
        },
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: SeniorenEntruempelungDownsizingWienPflegeheimArticle,
  },
  {
    meta: {
      slug: "bibliothek-sammlung-aufloesen-wien-wertanrechnung",
      title: "Bibliothek & Sammlung auflösen in Wien: Spenden, verkaufen oder anrechnen lassen?",
      description:
        "Bibliothek & Sammlung auflösen Wien: Bücher, Vinyl & Antiquitäten mit Wertanrechnung. Fixpreis, MA-48-Recycling & besenreine Übergabe — jetzt anfragen.",
      excerpt:
        "Bibliothek & Sammlung auflösen in Wien: Herausforderungen, Prozess, Wertanrechnung für Bücher, Schallplatten & Sammlerstücke sowie FAQ für Verlassenschaften.",
      publishedAt: "2026-06-23T17:00:00.000Z",
      readingTimeMinutes: 10,
      categories: ["Bibliothek", "Sammlung", "Wertanrechnung"],
      tags: [
        "Bibliothek auflösen Wien",
        "Sammlung auflösen",
        "Wertanrechnung",
        "Antiquitäten",
        "Schallplatten",
        "Verlassenschaft",
        "Fixpreis",
        "MA 48",
      ],
      relatedSlugs: [
        "moebel-bewerten-objektrueumung-wien",
        "gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung",
        "wohnungsaufloesung-todesfall-wien-ablauf",
        "ma-48-mistplatz-wien-entsorgungs-guide-2026",
      ],
      serviceSlugs: [
        "haushaltsaufloesung",
        "verlassenschaft",
        "wohnungsaufloesung",
        "moebel-wertanrechnung",
        "antiquitaeten-wertanrechnung",
        "entrumpelung-wien",
        "raeumung-wien",
        "entsorgung-wien",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: BibliothekSammlungAufloesenWienWertanrechnungArticle,
  },
  {
    meta: {
      slug: "entruempelung-oesterreichweit-steiermark-kaernten-oberoesterreich-salzburg",
      title:
        "Entrümpelung österreichweit: Professionelle Räumung in Steiermark, Kärnten, Oberösterreich & Salzburg",
      description:
        "Entrümpelung österreichweit: Fixpreis, Wertanrechnung & Express-Termine in Steiermark, Kärnten, Oberösterreich & Salzburg. Jetzt anfragen.",
      excerpt:
        "Entrümpelung österreichweit aus Wien: Steiermark, Kärnten, Oberösterreich & Salzburg mit Fixpreis, Wertanrechnung, Express-Notdienst und besenreiner Übergabe.",
      publishedAt: "2026-06-23T16:00:00.000Z",
      readingTimeMinutes: 8,
      categories: ["Entrümpelung", "Österreich", "Regionen"],
      tags: [
        "Entrümpelung österreichweit",
        "Steiermark",
        "Kärnten",
        "Oberösterreich",
        "Salzburg",
        "Fixpreis",
        "Wertanrechnung",
        "Express",
      ],
      relatedSlugs: [
        "entruempelung-burgenland-mattersburg-rust-oberpullendorf",
        "entruempelung-wien-umgebung-korneuburg-tulln-schwechat",
        "haushaltsaufloesung-preise-wien-2026",
        "halteverbot-entruempelung-wien-ma-46",
      ],
      serviceSlugs: [
        "entrumpelung-wien",
        "raeumung-wien",
        "haushaltsaufloesung",
        "firmenaufloesung",
        "moebel-wertanrechnung",
        "entsorgung-wien",
        "kellerraeumung",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: EntruempelungOesterreichweitSteiermarkKaerntenOberoesterreichSalzburgArticle,
  },
  {
    meta: {
      slug: "elektrogeraete-entsorgen-wien-umgebung",
      title: "Elektrogeräte entsorgen in Wien & Umgebung: Richtige Wege, DSGVO & Profi-Tipps",
      description:
        "Elektrogeräte entsorgen Wien: MA 48, DSGVO-Vernichtung & Wertanrechnung. Fachgerechte Demontage zum Fixpreis — jetzt anfragen.",
      excerpt:
        "Elektrogeräte entsorgen in Wien & Umgebung: Kategorien, MA 48, NÖ & Burgenland, Wertanrechnung, Transport und FAQ für Haushalt & Gewerbe.",
      publishedAt: "2026-06-23T15:00:00.000Z",
      readingTimeMinutes: 9,
      categories: ["Elektrogeräte", "Entsorgung", "Wien"],
      tags: [
        "Elektrogeräte entsorgen Wien",
        "EAG",
        "MA 48",
        "DSGVO",
        "Wertanrechnung",
        "Fixpreis",
        "Schwerlast",
      ],
      relatedSlugs: [
        "bauschutt-sperrmuell-wien-entsorgung",
        "ma-48-mistplatz-wien-entsorgungs-guide-2026",
        "bueroaufloesung-wien-dsgvo-aktenvernichtung",
        "schwerlastentsorgung-wien-grosslasten",
      ],
      serviceSlugs: [
        "entsorgung-wien",
        "haushaltsaufloesung",
        "firmenaufloesung",
        "gastro-retail",
        "kellerraeumung",
        "schwerlastentsorgung",
        "moebel-wertanrechnung",
        "entrumpelung-wien",
        "raeumung-wien",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: ElektrogeraeteEntsorgenWienUmgebungArticle,
  },
  {
    meta: {
      slug: "entruempelung-wien-5-fatale-fehler",
      title: "Entrümpelung in Wien: 5 fatale Fehler bei der Wohnungsräumung (und wie Sie diese vermeiden)",
      description:
        "Entrümpelung Wien: 5 fatale Fehler bei der Wohnungsräumung vermeiden. Fixpreis, Wertanrechnung & MA-48-konforme Entsorgung — jetzt anfragen.",
      excerpt:
        "Entrümpelung in Wien: Die 5 fatalsten Fehler bei der Wohnungsräumung — von Verlassenschaft bis Halteverbot, Mülltrennung und Wertanrechnung.",
      publishedAt: "2026-06-23T14:00:00.000Z",
      readingTimeMinutes: 9,
      categories: ["Entrümpelung", "Fehler vermeiden", "Wien"],
      tags: [
        "Entrümpelung Wien",
        "Wohnungsräumung",
        "Fixpreis",
        "Wertanrechnung",
        "Verlassenschaft",
        "Halteverbot",
        "MA 48",
      ],
      relatedSlugs: [
        "wohnungsaufloesung-todesfall-wien-ablauf",
        "haushaltsaufloesung-preise-wien-2026",
        "halteverbot-entruempelung-wien-ma-46",
        "gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung",
      ],
      serviceSlugs: [
        "entrumpelung-wien",
        "haushaltsaufloesung",
        "wohnungsaufloesung",
        "verlassenschaft",
        "firmenaufloesung",
        "entsorgung-wien",
        "moebel-wertanrechnung",
        "antiquitaeten-wertanrechnung",
        "raeumung-wien",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: EntruempelungWien5FataleFehlerArticle,
  },
  {
    meta: {
      slug: "dachbodenraeumung-wien-ma-48-checkliste",
      title: "Dachbodenräumung in Wien: Profi-Leitfaden, MA 48 Richtlinien & Checkliste",
      description:
        "Dachbodenräumung Wien: MA-48-Richtlinien, Altbau-Logistik & 6-Schritte-Checkliste. Fixpreis, Wertanrechnung & besenreine Übergabe — jetzt anfragen.",
      excerpt:
        "Dachbodenräumung in Wien: Altbau-Herausforderungen, MA 48 vs. Profi, Checkliste, Richtwerte, Wertanrechnung und FAQ für Gemeindebauten und Villen.",
      publishedAt: "2026-06-23T13:00:00.000Z",
      readingTimeMinutes: 10,
      categories: ["Dachboden", "MA 48", "Wien"],
      tags: [
        "Dachbodenräumung Wien",
        "MA 48",
        "Altbau",
        "Sperrmüll",
        "Wertanrechnung",
        "Fixpreis",
        "Halteverbot",
      ],
      relatedSlugs: [
        "ma-48-mistplatz-wien-entsorgungs-guide-2026",
        "halteverbot-entruempelung-wien-ma-46",
        "bauschutt-sperrmuell-wien-entsorgung",
        "gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung",
      ],
      serviceSlugs: [
        "dachbodenraeumung",
        "entrumpelung-wien",
        "haushaltsaufloesung",
        "kellerraeumung",
        "entsorgung-wien",
        "moebel-wertanrechnung",
        "antiquitaeten-wertanrechnung",
        "raeumung-wien",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: DachbodenraeumungWienMa48ChecklisteArticle,
  },
  {
    meta: {
      slug: "wohnungsaufloesung-todesfall-wien-ablauf",
      title: "Wohnungsauflösung nach einem Todesfall in Wien: Ablauf, Rechtliches & Checkliste",
      description:
        "Wohnungsauflösung nach Todesfall Wien: Rechtlicher Ablauf, Checkliste & Verlassenschaft. Fixpreis, Wertanrechnung & besenreine Übergabe — jetzt anfragen.",
      excerpt:
        "Wohnungsauflösung nach einem Todesfall in Wien: Wer entscheidet? 3-Phasen-Ablauf, Erbengemeinschaft, Fixpreis, Wertanrechnung und FAQ für Angehörige.",
      publishedAt: "2026-06-23T12:00:00.000Z",
      readingTimeMinutes: 10,
      categories: ["Verlassenschaft", "Todesfall", "Wien"],
      tags: [
        "Wohnungsauflösung Todesfall Wien",
        "Verlassenschaft",
        "Erbengemeinschaft",
        "Gerichtskommissär",
        "Fixpreis",
        "Wertanrechnung",
        "Haushaltsauflösung",
      ],
      relatedSlugs: [
        "entruempelung-wien-steuerlich-absetzen",
        "gebrauchte-moebel-verkaufen-wien-willhaben-wertanrechnung",
        "haushaltsaufloesung-preise-wien-2026",
        "halteverbot-entruempelung-wien-ma-46",
      ],
      serviceSlugs: [
        "verlassenschaft",
        "haushaltsaufloesung",
        "wohnungsaufloesung",
        "moebel-wertanrechnung",
        "antiquitaeten-wertanrechnung",
        "entrumpelung-wien",
        "raeumung-wien",
        "kellerraeumung",
        "dachbodenraeumung",
        "entsorgung-wien",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: WohnungsaufloesungTodesfallWienAblaufArticle,
  },
  {
    meta: {
      slug: "praxisaufloesung-wien-checkliste-dsgvo-aerzte",
      title: "Praxisauflösung in Wien: Checkliste, DSGVO & Ablauf für Ärzte",
      description:
        "Praxisauflösung Wien: Checkliste, DSGVO-Aktenvernichtung & 4-Schritte-Ablauf für Ärzte. Fixpreis, Wertanrechnung & besenreine Übergabe — jetzt anfragen.",
      excerpt:
        "Praxisauflösung in Wien: 4-Schritte-Checkliste, DSGVO & Aktenvernichtung, Medizingeräte-Demontage, Fixpreis-Garantie und FAQ für Ärzte und Praxisinhaber.",
      publishedAt: "2026-06-23T11:00:00.000Z",
      readingTimeMinutes: 9,
      categories: ["Praxis", "DSGVO", "Wien"],
      tags: [
        "Praxisauflösung Wien",
        "Arztpraxis Räumung",
        "DSGVO Aktenvernichtung",
        "Medizingeräte",
        "MA 48",
        "Fixpreis",
        "Wertanrechnung",
      ],
      relatedSlugs: [
        "bueroaufloesung-wien-dsgvo-aktenvernichtung",
        "geschaeftslokal-raeumung-rueckbau-wien",
        "halteverbot-entruempelung-wien-ma-46",
        "ma-48-mistplatz-wien-entsorgungs-guide-2026",
      ],
      serviceSlugs: [
        "firmenaufloesung",
        "gastro-retail",
        "entsorgung-wien",
        "schwerlastentsorgung",
        "moebel-wertanrechnung",
        "raeumung-wien",
        "entrumpelung-wien",
      ],
      author: "Objekträumung",
      featured: true,
    },
    Component: PraxisaufloesungWienChecklisteDsgvoAerzteArticle,
  },
  {
    meta: {
      slug: "entruempelung-auswanderung-wien-ausland",
      title:
        "Entrümpelung bei Auswanderung aus Wien: Komplette Wohnungsauflösung für Ihren Neustart im Ausland",
      description:
        "Auswanderung Wien: Wohnungsauflösung für Relocation ins Ausland. Fixpreis, Wertanrechnung & besenreine Übergabe — auch wenn Sie schon im Ausland sind. Jetzt anfragen.",
      excerpt:
        "Entrümpelung bei Auswanderung aus Wien: Zeitplan, Wertanrechnung, Altbau & Genossenschaft, Express-Service und FAQ für internationale Relocations.",
      publishedAt: "2026-06-23T10:00:00.000Z",
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
      publishedAt: "2026-06-23T09:00:00.000Z",
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
      publishedAt: "2026-06-23T08:00:00.000Z",
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
      publishedAt: "2026-06-23T03:00:00.000Z",
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
      publishedAt: "2026-06-23T04:00:00.000Z",
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
      publishedAt: "2026-06-23T05:00:00.000Z",
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
      publishedAt: "2026-06-23T06:00:00.000Z",
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
      publishedAt: "2026-06-23T07:00:00.000Z",
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
      publishedAt: "2026-06-23T08:00:00.000Z",
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
      publishedAt: "2026-06-23T02:00:00.000Z",
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
      publishedAt: "2026-06-23T03:00:00.000Z",
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
      publishedAt: "2026-06-23T04:00:00.000Z",
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
      publishedAt: "2026-06-23T05:00:00.000Z",
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
      publishedAt: "2026-06-23T06:00:00.000Z",
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
      publishedAt: "2026-06-23T08:00:00.000Z",
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
      publishedAt: "2026-06-23T08:00:00.000Z",
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
      publishedAt: "2026-06-23T08:00:00.000Z",
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
      publishedAt: "2026-06-23T08:00:00.000Z",
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
