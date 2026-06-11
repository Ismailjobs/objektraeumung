import type { LocationItem } from "@/lib/locationsData";
import {
  ADDRESS,
  DEFAULT_META_DESCRIPTION,
  EMAIL,
  PHONE_CANONICAL,
  PHONE_CANONICAL_LINK,
  SAME_AS_PROFILES,
  SITE_URL,
} from "@/lib/constants";

const SAME_AS = [...SAME_AS_PROFILES];

export const SCHEMA_ORG_ID = `${SITE_URL}/#organization`;
export const SCHEMA_WEBSITE_ID = `${SITE_URL}/#website`;
export const SCHEMA_LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const SCHEMA_LOGO_ID = `${SITE_URL}/#logo`;
export const SCHEMA_OFFER_CATALOG_ID = `${SITE_URL}/#offer-catalog`;
export const SCHEMA_FAQ_ID = `${SITE_URL}/#faq`;

/** 16 Leistungen im OfferCatalog – slug muss in serviceList.ts existieren. */
const OFFER_CATALOG_ENTRIES: { name: string; slug: string }[] = [
  { name: "Hausentrümpelung", slug: "haushaltsaufloesung" },
  { name: "Wohnungsentrümpelung", slug: "entrumpelung-wien" },
  { name: "Kellerentrümpelung", slug: "kellerraeumung" },
  { name: "Lagerentrümpelung", slug: "lager-gewerbeparks" },
  { name: "Büroentrümpelung", slug: "firmenaufloesung" },
  { name: "Garagenentrümpelung", slug: "garagenraeumung" },
  { name: "Dachbodenentrümpelung", slug: "dachbodenraeumung" },
  { name: "Messie-Entrümpelung", slug: "messie-entruempelung" },
  { name: "Gartenentrümpelung", slug: "raeumung-wien" },
  { name: "Verlassenschaft", slug: "verlassenschaft" },
  { name: "Nachlass", slug: "verlassenschaft" },
  { name: "Haushaltsauflösung", slug: "haushaltsaufloesung" },
  { name: "Wohnungsauflösung", slug: "wohnungsaufloesung" },
  { name: "Ankauf", slug: "einkauf" },
  { name: "Sperrmüllabholung", slug: "entsorgung-wien" },
  { name: "Zimmer-Räumung", slug: "zimmer-raeumung" },
];

/** Wien districts 1010–1230 (postal codes). */
const WIEN_POSTAL_CODES = [
  "1010", "1020", "1030", "1040", "1050", "1060", "1070", "1080", "1090",
  "1100", "1110", "1120", "1130", "1140", "1150", "1160", "1170", "1180",
  "1190", "1200", "1210", "1220", "1230",
] as const;

/** Sitewide FAQ for JSON-LD (homepage / business overview). */
export const SITE_WIDE_FAQ: { question: string; answer: string }[] = [
  {
    question: "Was kostet eine Objekträumung in Wien?",
    answer:
      "Nach kostenloser Besichtigung erhalten Sie einen verbindlichen Fixpreis. Der Betrag hängt von Größe, Zugang und Entsorgungsmenge ab; verwertbare Gegenstände können angerechnet werden.",
  },
  {
    question: "Wie schnell ist eine Räumung möglich?",
    answer:
      "In Wien und Umgebung sind Termine oft innerhalb von 2–5 Werktagen möglich, Express nach Verfügbarkeit. Nach der kostenlosen Besichtigung planen wir den Start verbindlich.",
  },
  {
    question: "Bieten Sie Wohnungsräumung in Niederösterreich an?",
    answer:
      "Ja – Wohnungs- und Haushaltsräumungen in Niederösterreich (z. B. Mödling, Baden, Wiener Neustadt, Schwechat) mit Fixpreis nach kostenloser Vor-Ort-Besichtigung.",
  },
  {
    question: "Machen Sie auch Messie-Entrümpelungen?",
    answer:
      "Ja, diskret und strukturiert: kostenlose Besichtigung, Fixpreis-Angebot und besenreine Übergabe. Auf Wunsch koordinieren wir mit Betreuung oder Verwaltung.",
  },
  {
    question: "Übernehmen Sie Sperrmüllabholung?",
    answer:
      "Ja, Einzelstücke oder komplette Abholung nach Räumung. Transparente Fixpreise nach kostenloser Besichtigung oder Foto-Check per WhatsApp.",
  },
  {
    question: "Ist eine kostenlose Besichtigung möglich?",
    answer:
      "Ja, die Besichtigung vor Ort ist kostenlos und unverbindlich. Danach erhalten Sie ein klares Fixpreis-Angebot ohne versteckte Kosten.",
  },
];

function buildAreaServed(): JsonLdObject[] {
  return [
    {
      "@type": "City",
      name: "Wien",
      postalCode: [...WIEN_POSTAL_CODES],
    },
    { "@type": "AdministrativeArea", name: "Niederösterreich" },
    { "@type": "AdministrativeArea", name: "Burgenland" },
    { "@type": "City", name: "Mödling" },
    { "@type": "City", name: "Baden" },
    { "@type": "City", name: "Wiener Neustadt" },
    { "@type": "City", name: "Schwechat" },
    { "@type": "City", name: "Perchtoldsdorf" },
    { "@type": "City", name: "Brunn am Gebirge" },
    { "@type": "City", name: "Eisenstadt" },
    { "@type": "City", name: "Neusiedl am See" },
  ];
}

function logoImageNode(): JsonLdObject {
  const logoUrl = `${SITE_URL}/icon.webp`;
  return {
    "@type": "ImageObject",
    "@id": SCHEMA_LOGO_ID,
    url: logoUrl,
    contentUrl: logoUrl,
  };
}

function offerCatalogNode(): JsonLdObject {
  return {
    "@type": "OfferCatalog",
    "@id": SCHEMA_OFFER_CATALOG_ID,
    name: "Räumungsleistungen",
    description: "Festpreis-Entrümpelung und Haushaltsauflösung in Wien, NÖ und Burgenland.",
    itemListElement: OFFER_CATALOG_ENTRIES.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: entry.name,
        url: canonicalToAbsolute(`/services/${entry.slug}`),
      },
    })),
  };
}

/** Absolute URL when routing uses no locale prefix in the path. */
export function canonicalToAbsolute(canonicalPath: string): string {
  const normalized =
    canonicalPath === "/" ? "" : canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
  return `${SITE_URL}${normalized}`;
}

export function serviceHeroAbsoluteUrl(slug: string): string {
  return slug === "entsorgung-wien"
    ? `${SITE_URL}/services/entsorgung/hero.webp`
    : `${SITE_URL}/services/${slug}/hero.webp`;
}

type JsonLdObject = Record<string, unknown>;

function organizationNode(): JsonLdObject {
  return {
    "@type": "Organization",
    "@id": SCHEMA_ORG_ID,
    name: "Objekträumung",
    alternateName: "Objektraeumung",
    url: SITE_URL,
    logo: { "@id": SCHEMA_LOGO_ID },
    sameAs: SAME_AS,
    email: EMAIL,
    telephone: PHONE_CANONICAL_LINK,
  };
}

function websiteNode(): JsonLdObject {
  return {
    "@type": "WebSite",
    "@id": SCHEMA_WEBSITE_ID,
    url: SITE_URL,
    name: "Objekträumung",
    inLanguage: "de-AT",
    publisher: { "@id": SCHEMA_ORG_ID },
  };
}

function localBusinessNode(locale: string): JsonLdObject {
  const isDe = locale === "at";
  const streetAddress = ADDRESS.split(",")[0]?.trim() ?? ADDRESS;
  const postalCode = ADDRESS.match(/\d{4}/)?.[0] ?? "1120";

  return {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": SCHEMA_LOCAL_BUSINESS_ID,
    name: "Objekträumung",
    alternateName: "Objektraeumung",
    url: `${SITE_URL}/`,
    image: [`${SITE_URL}/hero-1.webp`],
    logo: { "@id": SCHEMA_LOGO_ID },
    description: isDe
      ? DEFAULT_META_DESCRIPTION
      : "Professional clearance, household clearance, decluttering and estate clearance in Vienna, Lower Austria and Burgenland. Fast, discreet and fixed-price.",
    telephone: PHONE_CANONICAL_LINK,
    email: EMAIL,
    parentOrganization: { "@id": SCHEMA_ORG_ID },
    address: {
      "@type": "PostalAddress",
      streetAddress,
      postalCode,
      addressLocality: "Wien",
      addressRegion: "Wien",
      addressCountry: "AT",
    },
    areaServed: buildAreaServed(),
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Barzahlung, Banküberweisung",
    knowsLanguage: "de-AT",
    openingHours: "Mo - Sa: 08:00 - 18:00",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: SAME_AS,
    hasOfferCatalog: { "@id": SCHEMA_OFFER_CATALOG_ID },
    potentialAction: {
      "@type": "CommunicateAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `tel:${PHONE_CANONICAL_LINK}`,
        actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
      },
    },
  };
}

function siteWideFaqNode(): JsonLdObject {
  return {
    ...buildFaqPage(SITE_WIDE_FAQ),
    "@id": SCHEMA_FAQ_ID,
  };
}

/** Sitewide @graph: Organization, Logo, LocalBusiness, OfferCatalog, WebSite, FAQPage. */
export function buildSiteWideGraph(locale: string): JsonLdObject[] {
  return [
    organizationNode(),
    logoImageNode(),
    localBusinessNode(locale),
    offerCatalogNode(),
    websiteNode(),
    siteWideFaqNode(),
  ];
}

export function buildBreadcrumbList(
  items: { name: string; item: string }[],
  opts?: { id?: string },
): JsonLdObject {
  return {
    "@type": "BreadcrumbList",
    ...(opts?.id ? { "@id": opts.id } : {}),
    itemListElement: items.map((row, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: row.name,
      item: row.item,
    })),
  };
}

export function buildWebPageNode(input: {
  url: string;
  name: string;
  description: string;
  /** Stable fragment id per page URL */
  idSuffix?: string;
}): JsonLdObject {
  const id = `${input.url}${input.idSuffix ?? "#webpage"}`;
  return {
    "@type": "WebPage",
    "@id": id,
    url: input.url,
    name: input.name,
    description: input.description,
    isPartOf: { "@id": SCHEMA_WEBSITE_ID },
    about: { "@id": SCHEMA_LOCAL_BUSINESS_ID },
  };
}

export function buildServiceOfferNode(input: {
  url: string;
  name: string;
  description: string;
  imageUrl?: string;
}): JsonLdObject {
  return {
    "@type": "Service",
    "@id": `${input.url}#service`,
    serviceType: input.name,
    name: input.name,
    description: input.description,
    url: input.url,
    ...(input.imageUrl ? { image: input.imageUrl } : {}),
    provider: { "@id": SCHEMA_LOCAL_BUSINESS_ID },
    areaServed: { "@type": "Country", name: "Österreich", alternateName: "Austria" },
  };
}

export function buildFaqPage(mainEntity: { question: string; answer: string }[]): JsonLdObject {
  return {
    "@type": "FAQPage",
    mainEntity: mainEntity.map((row) => ({
      "@type": "Question",
      name: row.question,
      acceptedAnswer: { "@type": "Answer", text: row.answer },
    })),
  };
}

/** Service detail: Service + WebPage (about Service) + BreadcrumbList (+ optional FAQ). */
export function buildServiceSlugPageGraph(input: {
  serviceUrl: string;
  headline: string;
  description: string;
  breadcrumbs: { name: string; item: string }[];
  imageUrl?: string;
  faqPairs?: { question: string; answer: string }[];
}): JsonLdObject[] {
  const serviceEntity = buildServiceOfferNode({
    url: input.serviceUrl,
    name: input.headline,
    description: input.description,
    imageUrl: input.imageUrl,
  });

  const pageName = `${input.headline} | Objekträumung`;
  const webpage: JsonLdObject = {
    "@type": "WebPage",
    "@id": `${input.serviceUrl}#webpage`,
    url: input.serviceUrl,
    name: pageName,
    description: input.description,
    isPartOf: { "@id": SCHEMA_WEBSITE_ID },
    breadcrumb: { "@id": `${input.serviceUrl}#breadcrumb` },
    about: { "@id": `${input.serviceUrl}#service` },
    mainEntity: { "@id": `${input.serviceUrl}#service` },
  };

  const crumbs = buildBreadcrumbList(input.breadcrumbs, { id: `${input.serviceUrl}#breadcrumb` });

  const graph: JsonLdObject[] = [serviceEntity, webpage, crumbs];

  if (input.faqPairs?.length) {
    graph.push(buildFaqPage(input.faqPairs));
  }

  return graph;
}

export function buildSimpleContentPageGraph(input: {
  path: string;
  name: string;
  description: string;
  breadcrumbs: { name: string; item: string }[];
}): JsonLdObject[] {
  const url = canonicalToAbsolute(input.path);
  return [
    buildWebPageNode({ url, name: input.name, description: input.description }),
    buildBreadcrumbList(input.breadcrumbs),
  ];
}

export function buildLocationsHubGraph(input: {
  homeLabel: string;
  listLabel: string;
  pageTitle: string;
  description: string;
}): JsonLdObject[] {
  const url = canonicalToAbsolute("/locations");
  return [
    buildWebPageNode({
      url,
      name: input.pageTitle,
      description: input.description,
      idSuffix: "#webpage",
    }),
    buildBreadcrumbList([
      { name: input.homeLabel, item: SITE_URL },
      { name: input.listLabel, item: url },
    ]),
  ];
}

/** Location slug detail (used from layout): WebPage + Breadcrumb matching visible trail. */
export function buildLocationDetailPageGraph(input: {
  slug: string;
  locale: "at" | "en";
  loc: LocationItem;
  /** From messages `locations.stateNames` */
  stateNames: Record<string, string>;
  breadcrumbLocationsLabel: string;
  homeLabel: string;
}): JsonLdObject[] {
  const url = canonicalToAbsolute(`/locations/${input.slug}`);
  const name = input.locale === "at" ? input.loc.nameDe : input.loc.nameEn;
  const stateName =
    input.stateNames[input.loc.stateKey] ?? input.loc.stateKey;
  const pageTitle = `${name} | Objekträumung`;
  const description = `Entrümpelung und Haushaltsauflösung in ${name}. Festpreis, Wertausgleich, kostenlose Besichtigung.`;

  const breadcrumbs: { name: string; item: string }[] = [
    { name: input.homeLabel, item: SITE_URL },
    { name: input.breadcrumbLocationsLabel, item: canonicalToAbsolute("/locations") },
  ];

  if (input.slug === input.loc.stateKey) {
    breadcrumbs.push({ name: stateName, item: url });
  } else {
    const stateUrl = canonicalToAbsolute(`/locations/${input.loc.stateKey}`);
    breadcrumbs.push({ name: stateName, item: stateUrl }, { name, item: url });
  }

  return [
    buildWebPageNode({ url, name: pageTitle, description, idSuffix: "#webpage" }),
    buildBreadcrumbList(breadcrumbs),
    buildServiceOfferNode({
      url,
      name: pageTitle,
      description,
    }),
  ];
}
