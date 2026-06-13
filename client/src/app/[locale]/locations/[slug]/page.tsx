export const dynamic = "force-static";

import { notFound } from "next/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Link, redirect } from "@/i18n/navigation";
import { ChevronRight, ArrowRight, MapPin } from "lucide-react";
import { getLocationBySlug, getAllSlugs, getLocationsByState } from "@/lib/locationsData";

// Locations geçici kapalı – ileride tekrar açılacak
const LOCATIONS_ENABLED = true;

import { ContactSection } from "@/components/ContactSection";
import { LocationWien1010Content } from "@/components/location-pages/LocationWien1010Content";
import { LocationWien1020Content } from "@/components/location-pages/LocationWien1020Content";
import { LocationWien1030Content } from "@/components/location-pages/LocationWien1030Content";
import { LocationWien1040Content } from "@/components/location-pages/LocationWien1040Content";
import { LocationWien1050Content } from "@/components/location-pages/LocationWien1050Content";
import { LocationWien1060Content } from "@/components/location-pages/LocationWien1060Content";
import { LocationWien1070Content } from "@/components/location-pages/LocationWien1070Content";
import { LocationWien1080Content } from "@/components/location-pages/LocationWien1080Content";
import { LocationWien1090Content } from "@/components/location-pages/LocationWien1090Content";
import { LocationWien1100Content } from "@/components/location-pages/LocationWien1100Content";
import { LocationWien1110Content } from "@/components/location-pages/LocationWien1110Content";
import { LocationWien1120Content } from "@/components/location-pages/LocationWien1120Content";
import { LocationWien1130Content } from "@/components/location-pages/LocationWien1130Content";
import { LocationWien1140Content } from "@/components/location-pages/LocationWien1140Content";
import { LocationWien1150Content } from "@/components/location-pages/LocationWien1150Content";
import { LocationWien1160Content } from "@/components/location-pages/LocationWien1160Content";
import { LocationWien1170Content } from "@/components/location-pages/LocationWien1170Content";
import { LocationWien1180Content } from "@/components/location-pages/LocationWien1180Content";
import { LocationWien1190Content } from "@/components/location-pages/LocationWien1190Content";
import { LocationWien1200Content } from "@/components/location-pages/LocationWien1200Content";
import { LocationWien1210Content } from "@/components/location-pages/LocationWien1210Content";
import { LocationWien1220Content } from "@/components/location-pages/LocationWien1220Content";
import { LocationWien1230Content } from "@/components/location-pages/LocationWien1230Content";
import { LocationKlosterneuburgContent } from "@/components/location-pages/LocationKlosterneuburgContent";
import { LocationWienStateContent } from "@/components/location-pages/LocationWienStateContent";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";

type Props = { params: { locale: string; slug: string } };

/** Bezirksspezifische Meta Descriptions (23 Wiener Bezirke). Fallback: generisches Template in generateMetadata. */
const UNIQUE_LOCATION_DESCRIPTIONS: Record<string, string> = {
  "wien-1010":
    "Diskrete Entrümpelung in der Inneren Stadt (1010 Wien). Profi-Räumung für Altbauwohnungen & Kanzleien. Festpreis, Wertausgleich & besenrein.",
  "wien-1020":
    "Haushaltsauflösung in der Leopoldstadt (1020 Wien). Vom Karmeliterviertel bis zum Prater: Schnelle Räumung mit Wertanrechnung & Fixpreis-Garantie.",
  "wien-1030":
    "Wohnungsräumung im 3. Bezirk (Landstraße). Stressfreie Entrümpelung von Altbauten & Diplomatenwohnungen. Kostenlose Erstbesichtigung vor Ort!",
  "wien-1040":
    "Zuverlässige Entrümpelung in Wieden (1040 Wien). Wir räumen Wohnungen & Lofts besenrein. Transparente Kosten dank Fixpreis & Wertausgleich.",
  "wien-1050":
    "Haushaltsauflösung in Margareten (1050). Ihr Wiener Team für schnelle Wohnungsräumungen, Kellerentrümpelung und fairen Ankauf von Altwaren.",
  "wien-1060":
    "Räumungsfirma in Mariahilf (1060 Wien). Ob Dachboden oder Naschmarkt-Wohnung: Wir entrümpeln diskret, umweltgerecht und zum garantierten Festpreis.",
  "wien-1070":
    "Entrümpelung im 7. Bezirk (Neubau). Nachhaltige Haushaltsauflösung für Altbauten, inklusive Wertausgleich für Vintage-Möbel und Antiquitäten.",
  "wien-1080":
    "Premium-Räumung in der Josefstadt (1080 Wien). Diskrete Verlassenschaftsräumung und Wohnungsauflösung mit Komplett-Service und Fixpreis.",
  "wien-1090":
    "Haushaltsauflösung am Alsergrund (1090). Kompetente Entrümpelung von Studenten-WGs bis zur Arztpraxis. Besenreine Übergabe ohne versteckte Kosten.",
  "wien-1100":
    "Schnelle Entrümpelung in Favoriten (1100 Wien). Wohnungsräumung, Kellerräumung & Sperrmüll-Abholung. Günstig durch faire Wertanrechnung!",
  "wien-1110":
    "Räumung in Simmering (1110). Wir lösen Häuser und Wohnungen auf. Professionell, besenrein und mit direkter MA 48 Entsorgungs-Logistik.",
  "wien-1120":
    "Wohnungsauflösung in Meidling (1120 Wien). Zuverlässige Räumungsfirma für Gemeindebauten und Privathäuser. Jetzt Gratis-Besichtigung sichern!",
  "wien-1130":
    "Verlassenschaftsräumung in Hietzing (1130). Respektvolle & diskrete Haushaltsauflösung von Villen und Wohnungen. Inklusive Wertausgleich.",
  "wien-1140":
    "Entrümpelung in Penzing (1140 Wien). Professionelle Räumung für Haus, Keller & Dachboden. Festpreis-Garantie und umweltgerechte Entsorgung.",
  "wien-1150":
    "Haushaltsauflösung im 15. Bezirk. Rasche Wohnungsräumung in Rudolfsheim-Fünfhaus. Ihr verlässlicher Partner für besenreine Übergaben.",
  "wien-1160":
    "Räumungen in Ottakring (1160 Wien). Von der Brunnenmarkt-Wohnung bis zur Wilhelminenberg-Villa: Stressfreie Entrümpelung zum Fixpreis.",
  "wien-1170":
    "Zuverlässige Entrümpelung in Hernals (1170). Wir entrümpeln Häuser, Wohnungen & Keller besenrein. Profitieren Sie vom fairen Wertausgleich.",
  "wien-1180":
    "Haushaltsauflösung in Währing (1180 Wien). Diskrete Räumung von Altbauwohnungen und Verlassenschaften im Cottageviertel. Kostenloses Angebot.",
  "wien-1190":
    "Exklusive Räumung in Döbling (1190). Professionelle Wohnungs- und Hausauflösung mit Antiquitäten-Ankauf und besenreiner Übergabe.",
  "wien-1200":
    "Entrümpelung in der Brigittenau (1200 Wien). Schnelle Hilfe bei Wohnungsräumungen und Sperrmüll. Transparente Fixpreise, keine versteckten Kosten.",
  "wien-1210":
    "Räumungsfirma in Floridsdorf (1210). Wir entrümpeln Häuser, Wohnungen und Kleingärten links der Donau. Besenrein, legal und zuverlässig.",
  "wien-1220":
    "Haushaltsauflösung in der Donaustadt (1220 Wien). Vom Kagraner Einfamilienhaus bis zur Seestadt-Wohnung: Entrümpelung mit Fixpreis-Garantie.",
  "wien-1230":
    "Entrümpelung in Liesing (1230). Haus- und Wohnungsräumungen im 23. Bezirk. Inklusive Sperrmüllentsorgung und Wertanrechnung. Jetzt anfragen!",
};

/** Bundesländer & Regionen außerhalb Wiens – einzigartige Meta Descriptions. */
const EXTRA_LOCATION_META_DESCRIPTIONS: Record<string, string> = {
  niederoesterreich:
    "Entrümpelung in Niederösterreich. Profi-Räumung für Häuser, Höfe und Gewerbe im gesamten Bundesland. Fixpreis, Wertausgleich und besenreine Übergabe.",
  "niederoesterreich-baden":
    "Haushaltsauflösung in Baden bei Wien. Spezialisiert auf Kurvillen, historische Altbauten und Weingüter in der Thermenregion. Diskrete Räumung mit Wertanrechnung.",
  "niederoesterreich-korneuburg":
    "Räumung in Korneuburg. Zuverlässige Entrümpelung von Einfamilienhäusern und Firmen. Direkte Entsorgung und Wertausgleich für eine stressfreie Übergabe.",
  "niederoesterreich-moedling":
    "Entrümpelung in Mödling. Wir räumen Stadtvillen, Wohnungen und Keller im Wienerwald-Gebiet. Inklusive Wertausgleich für Antiquitäten und Möbel.",
  "niederoesterreich-st-poelten":
    "Haushaltsauflösung in St. Pölten. Professionelle Wohnungs- und Firmenräumung in der Landeshauptstadt. Transparente Kosten dank Fixpreis-Garantie.",
  burgenland:
    "Entrümpelung im Burgenland. Haushaltsauflösungen zwischen Neusiedler See und Südburgenland. Fixpreis, Wertausgleich für Winzerbetriebe und Häuser.",
  "burgenland-eisenstadt":
    "Räumung in Eisenstadt. Diskrete Wohnungs- und Hausräumung in der Landeshauptstadt. Profitieren Sie von unserer Erfahrung und fairen Wertanrechnung.",
  "burgenland-mattersburg":
    "Entrümpelung in Mattersburg. Wir räumen Häuser, Höfe und Keller schnell und besenrein. Inklusive fachgerechter Entsorgung und Fixpreis.",
  "burgenland-neusiedl":
    "Haushaltsauflösung in Neusiedl am See. Spezialisiert auf Wochenendhäuser, Seegrundstücke und Wohnungen. Schnelle Abwicklung mit Wertausgleich.",
  steiermark:
    "Entrümpelung in der Steiermark. Wohnungsräumungen und Firmenauflösungen von Graz bis in die Südsteiermark. Fixpreis und Wertanrechnung.",
  kaernten:
    "Räumung in Kärnten. Diskrete Haushaltsauflösung für Seeliegenschaften und Stadtwohnungen. Besenreine Übergabe mit transparenter Kostenkontrolle.",
  oberoesterreich:
    "Entrümpelung in Oberösterreich. Professionelle Haus- und Wohnungsräumung von Linz bis ins Salzkammergut. Inklusive Container-Logistik.",
  salzburg:
    "Haushaltsauflösung in Salzburg. Wir räumen Stadtwohnungen und Alpen-Chalets diskret und effizient. Wertausgleich für Antiquitäten und Kunst.",
};

/** Zwei Absätze Rich Content für Bundesländer/Regionen (ersetzt detailBody-Template). */
const RICH_BODY_CONTENT: Record<string, { p1: string; p2: string }> = {
  niederoesterreich: {
    p1: "Niederösterreich bietet eine enorme landschaftliche und architektonische Vielfalt – vom Speckgürtel rund um Wien bis ins tiefe Waldviertel. Unsere Entrümpelungsteams sind auf die Räumung großer Einfamilienhäuser, alter Bauernhöfe und weitläufiger Gewerbeobjekte im gesamten Bundesland spezialisiert.",
    p2: "Wir bringen die nötige Logistik mit: von großen Lkws über Container bis zur direkten Entsorgung bei regionalen Recyclinghöfen. Wertvolle Gegenstände, historische Bauernmöbel oder landwirtschaftliche Geräte rechnen wir im Zuge der Räumung fair auf den Fixpreis an.",
  },
  "niederoesterreich-baden": {
    p1: "Baden bei Wien ist berühmt für seine prächtigen Kurvillen, Biedermeierhäuser und die historische Architektur. Eine Haushaltsauflösung in der Thermenregion erfordert daher besonderen Respekt vor der Bausubstanz und Diskretion im Umgang mit oft wertvollen Nachlässen.",
    p2: "Ob es sich um eine Wohnung im Zentrum, ein Haus am Römerberg oder ein altes Weingut in der Umgebung handelt: Wir schützen Stiegenhäuser, bewerten Antiquitäten und Kunstgegenstände fachgerecht und übergeben Ihre Immobilie besenrein und übergabefertig.",
  },
  "niederoesterreich-korneuburg": {
    p1: "Korneuburg verbindet städtisches Leben mit ländlicher Ruhe. Unsere Teams übernehmen hier die schnelle und zuverlässige Räumung von Wohnungen, Einfamilienhäusern und Geschäftsflächen. Wir organisieren die komplette Logistik, auch bei schwierigen Zufahrten oder großen Sperrmüllmengen.",
    p2: "Ein besonderer Fokus liegt auf unserem Wertausgleich: Noch brauchbare Möbel, intakte Haushaltsgeräte oder Werkzeuge werden von uns fair geschätzt und reduzieren direkt Ihre Räumungskosten. So garantieren wir eine wirtschaftliche und umweltschonende Abwicklung.",
  },
  "niederoesterreich-moedling": {
    p1: "Die historische Stadt Mödling mit ihren engen Gassen und den exklusiven Lagen am Rand des Wienerwaldes stellt besondere Ansprüche an jede Räumung. Wir sind darauf vorbereitet, auch in schmalen Straßen oder bei Hanglagen im Grünen effizient zu arbeiten.",
    p2: "Von der kompletten Villenräumung über die Entrümpelung vollgeladener Keller bis zur Verlassenschaftsauflösung – wir trennen Wertvolles von Sperrmüll. Verwertbare Antiquitäten und Designstücke werden angekauft und der Rest fachgerecht bei den lokalen Sammelzentren entsorgt.",
  },
  "niederoesterreich-st-poelten": {
    p1: "Als Landeshauptstadt verbindet St. Pölten moderne Neubauviertel mit historischen Stadtkernen und weitläufigen Industriegebieten. Wir bieten maßgeschneiderte Haushalts- und Firmenauflösungen für alle Objektarten in der Region.",
    p2: "Mit unserem Fixpreis-Modell und dem integrierten Wertausgleich behalten Sie die volle Kostenkontrolle. Egal ob Studentenwohnung, Einfamilienhaus oder Büroetage – wir kümmern uns um Demontage, Abtransport und die umweltgerechte Entsorgung.",
  },
  burgenland: {
    p1: "Das Burgenland ist geprägt von weitläufigen Grundstücken, historischen Streckhöfen und traditionellen Winzerbetrieben. Eine Entrümpelung hier bedeutet oft, dass neben Wohnräumen auch große Scheunen, alte Weinkeller und Nebengebäude geräumt werden müssen.",
    p2: "Unsere Teams bringen die Kapazität für Großprojekte mit. Wir kümmern uns um die Demontage, trennen Altmetall, Holz und Sperrmüll und rechnen den Wert von landwirtschaftlichen Geräten oder Vintage-Möbeln direkt an, um Ihre Kosten zu minimieren.",
  },
  "burgenland-eisenstadt": {
    p1: "In der Landeshauptstadt Eisenstadt treffen historische Bausubstanz und moderne Wohnanlagen aufeinander. Eine professionelle Wohnungs- oder Hausräumung erfordert hier eine genaue Planung, insbesondere in den zentrumsnahen, oft eng bebauten Gassen.",
    p2: "Wir begleiten Ihre Haushaltsauflösung diskret und zuverlässig. Mit unserem Fixpreis-System inklusive Wertanrechnung für verwertbare Objekte garantieren wir Ihnen einen stressfreien Ablauf und eine besenreine Übergabe an Hausverwaltungen oder neue Eigentümer.",
  },
  "burgenland-mattersburg": {
    p1: "In Mattersburg und Umgebung übernehmen wir die komplette Abwicklung von Entrümpelungen und Haushaltsauflösungen. Vom Keller über den Dachboden bis hin zu Garagen und Gartenhäusern schaffen wir schnell und gründlich Platz.",
    p2: "Verlassen Sie sich auf unsere transparente Preisgestaltung. Wir sichten das Inventar, kaufen verwertbare Stücke direkt an und entsorgen Sperr- und Sondermüll fachgerecht. So sparen Sie Zeit und schonen Ihr Budget.",
  },
  "burgenland-neusiedl": {
    p1: "Die Region um Neusiedl am See ist bekannt für ihre Ferienhäuser, Seegrundstücke und traditionellen Weingüter. Die Räumung solcher oft saisonal genutzter Immobilien erfordert eine schnelle und flexible Logistik, besonders vor einem geplanten Verkauf.",
    p2: "Wir entrümpeln Wochenendhäuser, Bootshäuser und private Wohnungen effizient. Brauchbares Inventar oder funktionsfähige Boote und Werkzeuge rechnen wir gerne wertmindernd an, während wir den Rest umweltgerecht über lokale Entsorgungswege beseitigen.",
  },
  steiermark: {
    p1: "Von den alpinen Regionen im Norden bis ins südsteirische Weinland – wir koordinieren Räumungen in der gesamten Steiermark. Ob städtische Wohnung in Graz oder ländliches Anwesen, unsere Teams sind für alle Objektgrößen gerüstet.",
    p2: "Unser Service umfasst die komplette Demontage, den Abtransport und eine besenreine Übergabe. Durch die gezielte Wertanrechnung von Antiquitäten, Maschinen oder gut erhaltenem Mobiliar wird Ihre Entrümpelung wirtschaftlich und planbar.",
  },
  kaernten: {
    p1: "Kärnten mit seinen zahlreichen Seeliegenschaften, Chalets und Stadtzentren wie Klagenfurt oder Villach erfordert bei Haushaltsauflösungen oft besondere Diskretion und logistische Erfahrung, insbesondere bei schwer zugänglichen Grundstücken.",
    p2: "Wir organisieren die Entrümpelung von Ferienhäusern, Verlassenschaften und Firmenobjekten aus einer Hand. Mit unserem garantierten Fixpreis und der direkten Anrechnung von Wertgegenständen bieten wir Ihnen eine sorgenfreie Gesamtlösung.",
  },
  oberoesterreich: {
    p1: "In Oberösterreich, einem Bundesland mit starker Industrie und wunderschönen Naturlandschaften, bieten wir flächendeckende Räumungsdienste an. Von der Wohnung in Linz über den Bauernhof im Mühlviertel bis zur Villa im Salzkammergut.",
    p2: "Unsere effiziente Container-Logistik und die Zusammenarbeit mit lokalen Recyclingzentren garantieren eine fachgerechte Abfalltrennung. Verwertbares wird im Rahmen unserer Wertanrechnung sofort vom Gesamtpreis abgezogen.",
  },
  salzburg: {
    p1: "Salzburg verbindet historische Prachtbauwerke in der Stadt mit alpinen Residenzen im Umland. Entrümpelungen in Mozartstadt und Land erfordern höchsten Respekt vor der Immobilie und absolute Diskretion bei Nachlassräumungen.",
    p2: "Egal ob eine Stadtwohnung in engen Gassen oder ein Landhaus im Pongau geräumt werden muss: Wir schützen die Bausubstanz, bewerten Antiquitäten sowie Kunst fachgerecht und übergeben das Objekt pünktlich und besenrein.",
  },
};

function getLocationMetaDescription(slug: string, nameDe: string): string {
  return (
    UNIQUE_LOCATION_DESCRIPTIONS[slug] ??
    EXTRA_LOCATION_META_DESCRIPTIONS[slug] ??
    `Entrümpelung und Haushaltsauflösung in ${nameDe}. Festpreis, Wertausgleich, kostenlose Besichtigung.`
  );
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllSlugs().map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const loc = getLocationBySlug(slug);
  if (!loc) return { title: "Standorte | Objekträumung" };
  const description = getLocationMetaDescription(slug, loc.nameDe);
  return {
    title: `${loc.nameDe} | Objekträumung`,
    description,
    alternates: {
      canonical: `${SITE_URL}/locations/${slug}`,
    },
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { locale, slug } = params;
  unstable_setRequestLocale(locale);
  if (!LOCATIONS_ENABLED) redirect("/");
  if (slug === "klosterneuburg") {
    redirect("/locations/niederoesterreich-klosterneuburg");
  }
  if (slug === "klosterneuburg-kahlenberg") {
    redirect("/locations/niederoesterreich-klosterneuburg");
  }
  const loc = getLocationBySlug(slug);
  if (!loc) notFound();

  if (slug === "wien-1010") {
    return <LocationWien1010Content locale={locale} />;
  }
  if (slug === "wien-1020") {
    return <LocationWien1020Content locale={locale} />;
  }
  if (slug === "wien-1030") {
    return <LocationWien1030Content locale={locale} />;
  }
  if (slug === "wien-1040") {
    return <LocationWien1040Content locale={locale} />;
  }
  if (slug === "wien-1050") {
    return <LocationWien1050Content locale={locale} />;
  }
  if (slug === "wien-1060") {
    return <LocationWien1060Content locale={locale} />;
  }
  if (slug === "wien-1070") {
    return <LocationWien1070Content locale={locale} />;
  }
  if (slug === "wien-1080") {
    return <LocationWien1080Content locale={locale} />;
  }
  if (slug === "wien-1090") {
    return <LocationWien1090Content locale={locale} />;
  }
  if (slug === "wien-1100") {
    return <LocationWien1100Content locale={locale} />;
  }
  if (slug === "wien-1110") {
    return <LocationWien1110Content locale={locale} />;
  }
  if (slug === "wien-1120") {
    return <LocationWien1120Content locale={locale} />;
  }
  if (slug === "wien-1130") {
    return <LocationWien1130Content locale={locale} />;
  }
  if (slug === "wien-1140") {
    return <LocationWien1140Content locale={locale} />;
  }
  if (slug === "wien-1150") {
    return <LocationWien1150Content locale={locale} />;
  }
  if (slug === "wien-1160") {
    return <LocationWien1160Content locale={locale} />;
  }
  if (slug === "wien-1170") {
    return <LocationWien1170Content locale={locale} />;
  }
  if (slug === "wien-1180") {
    return <LocationWien1180Content locale={locale} />;
  }
  if (slug === "wien-1190") {
    return <LocationWien1190Content locale={locale} />;
  }
  if (slug === "wien-1200") {
    return <LocationWien1200Content locale={locale} />;
  }
  if (slug === "wien-1210") {
    return <LocationWien1210Content locale={locale} />;
  }
  if (slug === "wien-1220") {
    return <LocationWien1220Content locale={locale} />;
  }
  if (slug === "wien-1230") {
    return <LocationWien1230Content locale={locale} />;
  }
  if (slug === "niederoesterreich-klosterneuburg") {
    return <LocationKlosterneuburgContent locale={locale} />;
  }
  if (slug === "wien") {
    return <LocationWienStateContent locale={locale} />;
  }

  const t = await getTranslations("locations");
  const tNav = await getTranslations("nav");
  const stateNames = t.raw("stateNames") as Record<string, string>;
  const stateName = stateNames[loc.stateKey] ?? loc.stateKey;
  const name = locale === "at" ? loc.nameDe : loc.nameEn;
  const body = t("detailBody", { region: name });
  const richContent = RICH_BODY_CONTENT[slug];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-navy text-white py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 mb-6 flex-wrap">
            <Link href="/" className="hover:text-gray-400 transition-colors">
              {tNav("home")}
            </Link>
            <ChevronRight size={14} className="shrink-0" />
            <Link href="/locations" className="hover:text-gray-400 transition-colors">
              {t("breadcrumb")}
            </Link>
            <ChevronRight size={14} className="shrink-0" />
            {slug === loc.stateKey ? (
              <span className="font-medium">{stateName}</span>
            ) : (
              <>
                <Link href={`/locations/${loc.stateKey}`} className="hover:text-gray-400 transition-colors">
                  {stateName}
                </Link>
                <ChevronRight size={14} className="shrink-0" />
                <span className="font-medium truncate max-w-[200px]">{name}</span>
              </>
            )}
          </nav>
          <div className="flex items-start gap-3">
            <MapPin size={24} className="text-accent shrink-0 mt-1" strokeWidth={2} />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {name}
              </h1>
              <p className="mt-1 text-white/80 text-sm">
                {stateName}
              </p>
            </div>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 mt-6 bg-accent hover:bg-accent-hover text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors uppercase tracking-wider"
          >
            {t("ctaFreeQuote")}
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {richContent ? (
          <div className="space-y-6">
            <p className="text-navy/85 text-lg leading-relaxed">{richContent.p1}</p>
            <p className="text-navy/85 text-lg leading-relaxed">{richContent.p2}</p>
          </div>
        ) : (
          <p className="text-navy/85 text-lg leading-relaxed">{body}</p>
        )}
        {slug === loc.stateKey && (() => {
          const subLocations = getLocationsByState(loc.stateKey).filter((l) => l.slug !== slug);
          const nameKey = locale === "at" ? "nameDe" : "nameEn";
          const descKey = locale === "at" ? "shortDescDe" : "shortDescEn";
          if (subLocations.length === 0) return null;
          return (
            <section className="mt-10">
              <h2 className="text-lg md:text-xl font-bold text-navy mb-4">
                {t("subRegionsTitle")}
              </h2>
              <ul className="flex flex-wrap gap-2">
                {subLocations.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/locations/${l.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-accent/15 text-navy hover:text-accent font-medium text-sm transition-colors"
                    >
                      <MapPin size={14} className="shrink-0" strokeWidth={2} />
                      {l[descKey] ?? l[nameKey]}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })()}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:underline"
          >
            ← {t("selectLocation")}
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            {t("ctaFreeQuote")}
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </article>

      <ContactSection />
    </div>
  );
}
