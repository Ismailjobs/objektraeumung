export const dynamic = "force-static";

import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";
import { PageStructuredData } from "@/components/PageStructuredData";
import { buildSimpleContentPageGraph, canonicalToAbsolute } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { ContactSection } from "@/components/ContactSection";
import { UeberblickContent } from "@/components/UeberblickContent";

type Props = { params: { locale: string } };

export function generateMetadata() {
  return {
    title: "Haushaltsauflösung Wien: Überblick | Objekträumung",
    description: "Umfassender Überblick Haushaltsauflösung Wien: Kosten, Ablauf, Wertausgleich, MA48, alle 23 Bezirke. Kostenlose Beratung.",
  };
}

export default async function UeberblickPage({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations("ueberblick");
  const tNav = await getTranslations("nav");

  const ueberblickMetaDescription =
    "Umfassender Überblick Haushaltsauflösung Wien: Kosten, Ablauf, Wertausgleich, MA48, alle 23 Bezirke. Kostenlose Beratung.";

  return (
    <div className="min-h-screen bg-white">
      <PageStructuredData
        graph={buildSimpleContentPageGraph({
          path: "/ueberblick",
          name: "Haushaltsauflösung Wien: Überblick | Objekträumung",
          description: ueberblickMetaDescription,
          breadcrumbs: [
            { name: tNav("home"), item: SITE_URL },
            { name: t("breadcrumb"), item: canonicalToAbsolute("/ueberblick") },
          ],
        })}
      />
      <header className="bg-navy text-white py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-400 transition-colors">{tNav("home")}</Link>
            <ChevronRight size={16} className="shrink-0" />
            <span className="font-medium">{t("breadcrumb")}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {t("heroTitle")}
          </h1>
          <p className="mt-4 text-lg text-white/90 leading-relaxed">
            {t("heroSubtitle")}
          </p>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <UeberblickContent />
      </article>

      <ContactSection />
    </div>
  );
}
