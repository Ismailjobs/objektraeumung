export const dynamic = "force-static";

import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { buildSimpleContentPageGraph, canonicalToAbsolute } from "@/lib/schema";
import { PageStructuredData } from "@/components/PageStructuredData";
import { SITE_URL } from "@/lib/constants";
import { Services } from "@/components/Services";
import { LeistungenExtras } from "@/components/LeistungenExtras";
import { ServicesPageGallery } from "@/components/ServicesPageGallery";

type Props = { params: { locale: string } };

export function generateMetadata() {
  return buildMetadata({
    title: "Leistungen | Objekträumung",
    description: "Haushaltsauflösung, Wohnungsräumung, Keller- und Dachbodenräumung, Sperrmüllabholung, Büroauflösung. Fixpreis mit Wertausgleich, kostenlose Besichtigung.",
    canonicalPath: "/services",
    locale: "at",
  });
}

export default async function ServicesPage({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const tNav = await getTranslations("nav");
  const servicesUrl = canonicalToAbsolute("/services");
  const servicesGraph = buildSimpleContentPageGraph({
    path: "/services",
    name: "Leistungen | Objekträumung",
    description:
      "Haushaltsauflösung, Wohnungsräumung, Keller- und Dachbodenräumung, Sperrmüllabholung, Büroauflösung. Fixpreis mit Wertausgleich, kostenlose Besichtigung.",
    breadcrumbs: [
      { name: tNav("home"), item: SITE_URL },
      { name: tNav("services"), item: servicesUrl },
    ],
  });

  return (
    <div className="py-8">
      <PageStructuredData graph={servicesGraph} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="font-medium hover:text-gray-700 hover:underline">
            {tNav("home")}
          </Link>
          <ChevronRight size={16} className="shrink-0" />
          <span className="font-medium" aria-current="page">
            {tNav("services")}
          </span>
        </nav>
      </div>
      <Services variant="page" />
      <LeistungenExtras />
    </div>
  );
}
