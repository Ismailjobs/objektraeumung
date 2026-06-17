import type { RatgeberArticleMeta } from "@/data/ratgeber/types";
import { SCHEMA_WEBSITE_ID } from "@/lib/schema";
import { ratgeberArticleAbsoluteUrl, ratgeberHubAbsoluteUrl } from "@/lib/ratgeber-seo";
import { SITE_URL } from "@/lib/constants";

type Props = {
  title: string;
  description: string;
  articles: RatgeberArticleMeta[];
  breadcrumbHome: string;
  breadcrumbRatgeber: string;
};

export function RatgeberCollectionJsonLd({
  title,
  description,
  articles,
  breadcrumbHome,
  breadcrumbRatgeber,
}: Props) {
  const hubUrl = ratgeberHubAbsoluteUrl();

  const graph = [
    {
      "@type": "CollectionPage",
      "@id": `${hubUrl}#webpage`,
      url: hubUrl,
      name: title,
      description,
      isPartOf: { "@id": SCHEMA_WEBSITE_ID },
      breadcrumb: { "@id": `${hubUrl}#breadcrumb` },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: articles.length,
        itemListElement: articles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: ratgeberArticleAbsoluteUrl(article.slug),
          name: article.title,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${hubUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: breadcrumbHome, item: SITE_URL },
        { "@type": "ListItem", position: 2, name: breadcrumbRatgeber, item: hubUrl },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
