export const dynamic = "force-static";

import { unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight, BookOpen } from "lucide-react";
import { RatgeberHero } from "@/components/ratgeber/RatgeberHero";
import { RatgeberCard } from "@/components/ratgeber/RatgeberCard";
import { RatgeberCollectionJsonLd } from "@/components/ratgeber/RatgeberCollectionJsonLd";
import { buildRatgeberHubMetadata, RATGEBER_HUB_SEO } from "@/lib/ratgeber-seo";
import { getAllRatgeberArticles, getRatgeberMetaList } from "@/data/ratgeber/registry";

type Props = { params: { locale: string } };

export function generateMetadata() {
  return buildRatgeberHubMetadata();
}

export default async function RatgeberHubPage({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const tNav = await getTranslations("nav");
  const articles = getAllRatgeberArticles();
  const metaList = getRatgeberMetaList();

  return (
    <div className="min-h-screen bg-white">
      <RatgeberCollectionJsonLd
        title={RATGEBER_HUB_SEO.title}
        description={RATGEBER_HUB_SEO.description}
        articles={metaList}
        breadcrumbHome={tNav("home")}
        breadcrumbRatgeber="Ratgeber"
      />

      <RatgeberHero
        title="Ratgeber: Entrümpelung & Haushaltsauflösung"
        subtitle={RATGEBER_HUB_SEO.description}
        breadcrumbHome={tNav("home")}
        breadcrumbRatgeber="Ratgeber"
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {articles.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-navy/15 bg-slate-50/80 p-10 md:p-14 text-center">
            <BookOpen className="mx-auto text-accent mb-4" size={40} strokeWidth={1.5} aria-hidden />
            <h2 className="text-xl font-bold text-navy">Artikel folgen in Kürze</h2>
            <p className="mt-3 text-navy/70 max-w-lg mx-auto leading-relaxed">
              Hier veröffentlichen wir praxisnahe Ratgeber zu Kosten, Ablauf, Entsorgung und
              Haushaltsauflösung in Wien und Österreich.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              Kostenlose Beratung anfragen
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((entry) => (
              <RatgeberCard key={entry.meta.slug} article={entry.meta} />
            ))}
          </div>
        )}

        <p className="mt-10 text-center text-sm text-navy/55">
          <a
            href="/ratgeber/feed.xml"
            className="hover:text-accent transition-colors"
            rel="alternate"
            type="application/rss+xml"
          >
            RSS-Feed abonnieren
          </a>
        </p>
      </section>
    </div>
  );
}
