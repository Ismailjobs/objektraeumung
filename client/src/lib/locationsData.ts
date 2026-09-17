/**
 * Bundesländer und Regionen für Standorte-Seite und Suche.
 * slug = URL-Pfad (/locations/[slug])
 */
export const STATE_KEYS = [
  "wien",
  "niederoesterreich",
  "burgenland",
  "steiermark",
  "kaernten",
  "oberoesterreich",
  "salzburg",
] as const;

export type StateKey = (typeof STATE_KEYS)[number];

export type LocationItem = {
  slug: string;
  nameDe: string;
  nameEn: string;
  stateKey: StateKey;
  shortDescDe?: string;
  shortDescEn?: string;
};

/** Alle 23 Wiener Bezirke in Reihenfolge für die Wien-Übersichtsseite */
export const WIEN_DISTRICT_SLUGS: string[] = [
  "wien-1010", "wien-1020", "wien-1030", "wien-1040", "wien-1050", "wien-1060", "wien-1070", "wien-1080", "wien-1090",
  "wien-1100", "wien-1110", "wien-1120", "wien-1130", "wien-1140", "wien-1150", "wien-1160", "wien-1170", "wien-1180", "wien-1190",
  "wien-1200", "wien-1210", "wien-1220", "wien-1230",
];

export const LOCATIONS: LocationItem[] = [
  // Wien – alle 23 Bezirke
  { slug: "wien-1010", nameDe: "Entrümpelung 1010 Wien", nameEn: "Clearance 1010 Vienna", stateKey: "wien", shortDescDe: "City-Entrümpelung Innere Stadt: MA-46-Haltezonen, Stuckschutz, diskrete Verlassenschaften – Fixpreis & Wertausgleich.", shortDescEn: "Inner City clearance: MA 46 no-parking zones, stucco protection, discreet estate clearances – fixed price & value allowance." },
  { slug: "wien-1020", nameDe: "Entrümpelung 1020 Wien", nameEn: "Clearance 1020 Vienna", stateKey: "wien", shortDescDe: "Leopoldstadt: Donaukanal-Lofts, Nordbahnviertel mit Lastenrad, Entsorgung MA 48 Percostraße – Fixpreis.", shortDescEn: "Leopoldstadt: Danube Canal lofts, cargo bikes in Nordbahnviertel, MA 48 Percostraße disposal – fixed price." },
  { slug: "wien-1030", nameDe: "Entrümpelung 1030 Wien", nameEn: "Clearance 1030 Vienna", stateKey: "wien", shortDescDe: "Landstraße: Botschaftsviertel, Neu Marx, Rochusmarkt – diskret, NDA, MA 48 Simmering, Fixpreis.", shortDescEn: "Landstraße: embassy quarter, Neu Marx, Rochusmarkt – discreet, NDA, MA 48 Simmering, fixed price." },
  { slug: "wien-1040", nameDe: "Entrümpelung 1040 Wien", nameEn: "Clearance 1040 Vienna", stateKey: "wien", shortDescDe: "Wieden: Naschmarkt, Schleifmühlgasse, Ordinationen – DSGVO-Akten, Studenten-WG, Fixpreis.", shortDescEn: "Wieden: Naschmarkt, Schleifmühlgasse, practices – GDPR files, student flats, fixed price." },
  { slug: "wien-1050", nameDe: "Entrümpelung 1050 Wien", nameEn: "Clearance 1050 Vienna", stateKey: "wien", shortDescDe: "Margareten: 48er-Tandler im Bezirk, Hinterhof-Gemeindebau, Messie diskret – Fixpreis inklusive.", shortDescEn: "Margareten: on-district 48er-Tandler, courtyard blocks, discreet hoarding clearance – fixed price." },
  { slug: "wien-1060", nameDe: "Entrümpelung 1060 Wien", nameEn: "Clearance 1060 Vienna", stateKey: "wien", shortDescDe: "Mariahilf: Fußgängerzone Mahü, Pop-up-Räumungen, Naschmarkt-Lofts – Nacht-Ladezonen & 48er-Tandler.", shortDescEn: "Mariahilf: pedestrian zone, pop-up clearances, Naschmarkt lofts – night loading zones & 48er-Tandler." },
  { slug: "wien-1070", nameDe: "Entrümpelung 1070 Wien", nameEn: "Clearance 1070 Vienna", stateKey: "wien", shortDescDe: "Neubau & Spittelberg: enge Biedermeier-Stiegen, Vinyl-Sammlungen, MQ-Lofts – Fixpreis inkl. Haltezone.", shortDescEn: "Neubau & Spittelberg: narrow Biedermeier stairs, vinyl collections, MQ lofts – fixed price incl. no-parking zone." },
  { slug: "wien-1080", nameDe: "Entrümpelung 1080 Wien", nameEn: "Clearance 1080 Vienna", stateKey: "wien", shortDescDe: "Josefstadt: Theaterdepots, Palais-Stuck, Einbahn-Labyrinth – Hernals MA 48, Fixpreis.", shortDescEn: "Josefstadt: theatre depots, palais stucco, one-way maze – Hernals MA 48, fixed price." },
  { slug: "wien-1090", nameDe: "Entrümpelung 1090 Wien", nameEn: "Clearance 1090 Vienna", stateKey: "wien", shortDescDe: "Alsergrund: AKH-Praxen, Uni-WGs, Servitenviertel – Medizin-Entsorgung, Semester-Express.", shortDescEn: "Alsergrund: hospital practices, uni flats, Servitenviertel – medical disposal, semester express." },
  { slug: "wien-1100", nameDe: "Entrümpelung 1100 Wien", nameEn: "Clearance 1100 Vienna", stateKey: "wien", shortDescDe: "Favoriten: Gemeindebau Reumannplatz, Wiener Wohnen-Abstimmung, MA 48 Eva-Zilcher-Gasse vor Ort – Express-Teams.", shortDescEn: "Favoriten: municipal housing Reumannplatz, Wiener Wohnen coordination, on-site MA 48 Eva-Zilcher-Gasse – express teams." },
  { slug: "wien-1110", nameDe: "Entrümpelung 1110 Wien", nameEn: "Clearance 1110 Vienna", stateKey: "wien", shortDescDe: "Simmering: Gasometer-Lofts, Kleingärten Leberberg, MA 48 Johann-Petrak-Gasse – Container, Fixpreis & diskrete Verlassenschaften.", shortDescEn: "Simmering: Gasometer lofts, Leberberg allotments, MA 48 Johann-Petrak-Gasse – containers, fixed price & discreet estate clearances." },
  { slug: "wien-1120", nameDe: "Entrümpelung 1120 Wien", nameEn: "Clearance 1120 Vienna", stateKey: "wien", shortDescDe: "Meidling: Bahnhof, Hetzendorf MA 48, Euro Plaza – Gemeindebau & Gründerzeit, Express ab 48 h, Fixpreis.", shortDescEn: "Meidling: station, Hetzendorf MA 48, Euro Plaza – municipal & period flats, express from 48 h, fixed price." },
  { slug: "wien-1130", nameDe: "Entrümpelung 1130 Wien", nameEn: "Clearance 1130 Vienna", stateKey: "wien", shortDescDe: "Hietzing: Villen Ober St. Veit, Verlassenschaften, Parkett-Schutz – diskret, Wertgutachten, MA 48 Auhof.", shortDescEn: "Hietzing: Ober St. Veit villas, estate clearances, parquet protection – discreet, valuations, MA 48 Auhof." },
  { slug: "wien-1140", nameDe: "Entrümpelung 1140 Wien", nameEn: "Clearance 1140 Vienna", stateKey: "wien", shortDescDe: "Penzing: Otto-Wagner-Villen, Wolfersberg Hanglage, MA 48 Auhof – Seiltechnik, Garten-Schutz, Fixpreis.", shortDescEn: "Penzing: Otto Wagner villas, Wolfersberg slopes, MA 48 Auhof – rope access, garden care, fixed price." },
  { slug: "wien-1150", nameDe: "Entrümpelung 1150 Wien", nameEn: "Clearance 1150 Vienna", stateKey: "wien", shortDescDe: "1150 Westbahnhof: Airbnb-Turnaround in Stunden, liftlose Gründerzeit, Haltezonen Gürtel – Fixpreis.", shortDescEn: "1150 Westbahnhof: Airbnb turnaround in hours, walk-up period buildings, Gürtel no-parking zones – fixed price." },
  { slug: "wien-1160", nameDe: "Entrümpelung 1160 Wien", nameEn: "Clearance 1160 Vienna", stateKey: "wien", shortDescDe: "Ottakring: Brunnenmarkt, Yppenplatz-Lofts, Wilhelminenberg – Messie diskret, MA 48 Hernals/Auhof, Fixpreis.", shortDescEn: "Ottakring: Brunnenmarkt, Yppenplatz lofts, Wilhelminenberg – discreet hoarding, MA 48 Hernals/Auhof, fixed price." },
  { slug: "wien-1170", nameDe: "Entrümpelung 1170 Wien", nameEn: "Clearance 1170 Vienna", stateKey: "wien", shortDescDe: "Hernals Dornbach: Hanglagen, Schrägaufzüge, MA 48 Richthausenstraße im Bezirk – Fixpreis & Wertausgleich.", shortDescEn: "Hernals Dornbach: hillside access, inclined lifts, on-district MA 48 Richthausenstraße – fixed price & value allowance." },
  { slug: "wien-1180", nameDe: "Entrümpelung 1180 Wien", nameEn: "Clearance 1180 Vienna", stateKey: "wien", shortDescDe: "Währing: Cottageviertel, BOKU-WGs, Diplomatenresidenzen – Flügel-Schutz, NDA, MA 48 Hernals/Heiligenstadt.", shortDescEn: "Währing: Cottage district, BOKU flats, diplomatic residences – piano protection, NDA, MA 48 Hernals/Heiligenstadt." },
  { slug: "wien-1190", nameDe: "Entrümpelung 1190 Wien", nameEn: "Clearance 1190 Vienna", stateKey: "wien", shortDescDe: "Döbling Grinzing: steile Weinberge, Weinkeller-Dokumentation, MA 48 Heiligenstadt – diskret & fixpreislich.", shortDescEn: "Döbling Grinzing: steep vineyard paths, cellar documentation, MA 48 Heiligenstadt – discreet fixed-price service." },
  { slug: "wien-1200", nameDe: "Entrümpelung 1200 Wien", nameEn: "Clearance 1200 Vienna", stateKey: "wien", shortDescDe: "Brigittenau: Millennium City, Handelskai-Hochhäuser, Wallensteinplatz – Express-Turnaround, MA 48 Heiligenstadt/Donaufeld.", shortDescEn: "Brigittenau: Millennium City, Handelskai towers, Wallensteinplatz – express turnaround, MA 48 Heiligenstadt/Donaufeld." },
  { slug: "wien-1210", nameDe: "Entrümpelung 1210 Wien", nameEn: "Clearance 1210 Vienna", stateKey: "wien", shortDescDe: "Floridsdorf: Stammersdorf, Großfeldsiedlung, Brünner Straße – zwei MA-48-Standorte, Container, Fixpreis.", shortDescEn: "Floridsdorf: Stammersdorf, Großfeldsiedlung, Brünner Straße – two MA 48 sites, containers, fixed price." },
  { slug: "wien-1220", nameDe: "Entrümpelung 1220 Wien", nameEn: "Clearance 1220 Vienna", stateKey: "wien", shortDescDe: "Donaustadt: Seestadt, Donau City, EFH Essling mit Container – MA 48 Stadlau & Percostraße, Fixpreis.", shortDescEn: "Donaustadt: Seestadt, Donau City, Essling homes with containers – MA 48 Stadlau & Percostraße, fixed price." },
  { slug: "wien-1230", nameDe: "Entrümpelung 1230 Wien", nameEn: "Clearance 1230 Vienna", stateKey: "wien", shortDescDe: "Liesing: Alterlaa, Mauer-Weinberge, Triester Straße – MA 48 Inzersdorf & Seybelgasse, Hallen & Fixpreis.", shortDescEn: "Liesing: Alterlaa, Mauer vineyards, Triester Straße – MA 48 Inzersdorf & Seybelgasse, halls & fixed price." },
  { slug: "klosterneuburg-kahlenberg", nameDe: "Klosterneuburg & Ölberg", nameEn: "Klosterneuburg & Kahlenberg", stateKey: "wien", shortDescDe: "Umgebung Nord", shortDescEn: "North area" },
  { slug: "wien", nameDe: "Objekträumung – Wien", nameEn: "Objekträumung – Vienna", stateKey: "wien", shortDescDe: "23 Bezirke, kurze Anfahrten", shortDescEn: "23 districts, short travel" },
  // Niederösterreich
  { slug: "niederoesterreich-baden", nameDe: "Haushaltsauflösung Baden", nameEn: "Household clearance Baden", stateKey: "niederoesterreich", shortDescDe: "Thermenregion", shortDescEn: "Spa region" },
  { slug: "niederoesterreich-klosterneuburg", nameDe: "Haushaltsauflösung Klosterneuburg", nameEn: "Household clearance Klosterneuburg", stateKey: "niederoesterreich", shortDescDe: "Stadt vor den Toren Wiens", shortDescEn: "Town at the gates of Vienna" },
  { slug: "niederoesterreich-korneuburg", nameDe: "Haushaltsauflösung Korneuburg", nameEn: "Household clearance Korneuburg", stateKey: "niederoesterreich" },
  { slug: "niederoesterreich-moedling", nameDe: "Entrümpelung Mödling", nameEn: "Clearance Mödling", stateKey: "niederoesterreich" },
  { slug: "niederoesterreich-st-poelten", nameDe: "Entrümpelung St. Pölten", nameEn: "Clearance St. Pölten", stateKey: "niederoesterreich" },
  { slug: "niederoesterreich", nameDe: "Entrümpelung Niederösterreich", nameEn: "Clearance Lower Austria", stateKey: "niederoesterreich", shortDescDe: "Umland, Wienerwald, Bezirksstädte", shortDescEn: "Suburbs, Vienna Woods, district towns" },
  // Burgenland
  { slug: "burgenland-eisenstadt", nameDe: "Haushaltsauflösung Eisenstadt", nameEn: "Household clearance Eisenstadt", stateKey: "burgenland" },
  { slug: "burgenland-mattersburg", nameDe: "Haushaltsauflösung Mattersburg", nameEn: "Household clearance Mattersburg", stateKey: "burgenland" },
  { slug: "burgenland-neusiedl", nameDe: "Haushaltsauflösung Neusiedl am See", nameEn: "Household clearance Neusiedl am See", stateKey: "burgenland" },
  { slug: "burgenland", nameDe: "Entrümpelung Burgenland", nameEn: "Clearance Burgenland", stateKey: "burgenland", shortDescDe: "Eisenstadt, Neusiedler See, Südburgenland", shortDescEn: "Eisenstadt, Lake Neusiedl, South Burgenland" },
  // Steiermark
  { slug: "steiermark", nameDe: "Entrümpelung Steiermark", nameEn: "Clearance Styria", stateKey: "steiermark", shortDescDe: "Graz, Leoben, Südsteiermark", shortDescEn: "Graz, Leoben, Southern Styria" },
  // Kärnten
  { slug: "kaernten", nameDe: "Entrümpelung Kärnten", nameEn: "Clearance Carinthia", stateKey: "kaernten", shortDescDe: "Klagenfurt, Villach, Wörthersee", shortDescEn: "Klagenfurt, Villach, Wörthersee" },
  // Oberösterreich
  { slug: "oberoesterreich", nameDe: "Entrümpelung Oberösterreich", nameEn: "Clearance Upper Austria", stateKey: "oberoesterreich", shortDescDe: "Linz, Wels, Steyr, Salzkammergut", shortDescEn: "Linz, Wels, Steyr, Salzkammergut" },
  // Salzburg
  { slug: "salzburg", nameDe: "Entrümpelung Salzburg", nameEn: "Clearance Salzburg", stateKey: "salzburg", shortDescDe: "Stadt, Flachgau, Alpenregionen", shortDescEn: "City, Flachgau, Alpine regions" },
];

/** Feste Reihenfolge für „Am häufigsten gesucht“ auf der Standorte-Seite */
export const MOST_SEARCHED_SLUGS: string[] = [
  "wien-1170",
  "wien-1180",
  "wien-1190",
  "wien-1210",
  "wien-1220",
  "klosterneuburg-kahlenberg",
];

export function getLocationBySlug(slug: string): LocationItem | undefined {
  return LOCATIONS.find((loc) => loc.slug === slug);
}

export function getLocationsByState(stateKey: StateKey): LocationItem[] {
  return LOCATIONS.filter((loc) => loc.stateKey === stateKey);
}

export function getAllSlugs(): string[] {
  return LOCATIONS.map((loc) => loc.slug);
}

/** Suchindex: alle durchsuchbaren Texte pro Locale */
export function getSearchIndex(locale: "at" | "en") {
  const nameKey = locale === "at" ? "nameDe" : "nameEn";
  const descKey = locale === "at" ? "shortDescDe" : "shortDescEn";
  return LOCATIONS.map((loc) => ({
    slug: loc.slug,
    title: loc[nameKey],
    desc: loc[descKey] ?? "",
    stateKey: loc.stateKey,
  }));
}
