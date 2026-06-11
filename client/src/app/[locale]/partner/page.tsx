export const dynamic = "force-static";

import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ChevronRight, ExternalLink } from "lucide-react";
import { PageStructuredData } from "@/components/PageStructuredData";
import { buildSimpleContentPageGraph, canonicalToAbsolute } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

const PARTNER_URL = "https://sofortentrumpelung.at";

type Props = { params: { locale: string } };

export async function generateMetadata() {
  const t = await getTranslations("partner");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function PartnerPage({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations("partner");
  const tNav = await getTranslations("nav");

  return (
    <div className="min-h-screen bg-white">
      <PageStructuredData
        graph={buildSimpleContentPageGraph({
          path: "/partner",
          name: t("metaTitle"),
          description: t("metaDescription"),
          breadcrumbs: [
            { name: tNav("home"), item: SITE_URL },
            { name: t("breadcrumb"), item: canonicalToAbsolute("/partner") },
          ],
        })}
      />

      <header className="relative bg-navy text-white pt-10 pb-14 md:pt-14 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,107,0,0.06)_100%)]" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-400 transition-colors">
              {tNav("home")}
            </Link>
            <ChevronRight size={14} className="shrink-0" />
            <span>{t("breadcrumb")}</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            {t("eyebrow")}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-[1.15] max-w-2xl">
            {t("title")}
          </h1>
          <p className="mt-6 text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">
            {t("intro")}
          </p>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-20 space-y-12">
        <section className="rounded-2xl border border-navy/10 bg-slate-50/80 p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-bold text-navy mb-4">{t("sofortTitle")}</h2>
          <p className="text-navy/85 text-base md:text-lg leading-relaxed">{t("sofortText1")}</p>
          <p className="mt-4 text-navy/85 text-base md:text-lg leading-relaxed">{t("sofortText2")}</p>
          <a
            href={PARTNER_URL}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold text-base transition-colors"
          >
            {t("sofortLinkLabel")}
            <ExternalLink size={18} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-3">{t("whyTitle")}</h2>
          <p className="text-navy/80 text-base leading-relaxed">{t("whyText")}</p>
        </section>
      </article>
    </div>
  );
}
