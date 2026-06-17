export const dynamic = "force-static";

import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { RatgeberHero } from "@/components/ratgeber/RatgeberHero";
import { RatgeberArticleJsonLd } from "@/components/ratgeber/RatgeberArticleJsonLd";
import { RelatedRatgeberSection } from "@/components/ratgeber/RelatedRatgeberSection";
import { ContactSection } from "@/components/ContactSection";
import {
  getAllRatgeberSlugs,
  getRatgeberArticleBySlug,
  getRelatedRatgeberArticles,
} from "@/data/ratgeber/registry";
import { buildRatgeberArticleMetadata } from "@/lib/ratgeber-seo";
import { routing } from "@/i18n/routing";

type Props = { params: { locale: string; slug: string } };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllRatgeberSlugs().map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props) {
  const entry = getRatgeberArticleBySlug(params.slug);
  if (!entry) return { title: "Ratgeber | Objekträumung" };
  return buildRatgeberArticleMetadata(entry.meta);
}

export default async function RatgeberArticlePage({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const entry = getRatgeberArticleBySlug(params.slug);
  if (!entry) notFound();

  const tNav = await getTranslations("nav");
  const { meta, Component } = entry;
  const related = getRelatedRatgeberArticles(meta.slug, 3);

  return (
    <div className="min-h-screen bg-white">
      <RatgeberArticleJsonLd
        article={meta}
        breadcrumbHome={tNav("home")}
        breadcrumbRatgeber="Ratgeber"
      />

      <RatgeberHero
        title={meta.title}
        subtitle={meta.excerpt}
        breadcrumbHome={tNav("home")}
        breadcrumbRatgeber="Ratgeber"
        article={meta}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <Component />
      </article>

      <RelatedRatgeberSection articles={related} />
      <ContactSection />
    </div>
  );
}
