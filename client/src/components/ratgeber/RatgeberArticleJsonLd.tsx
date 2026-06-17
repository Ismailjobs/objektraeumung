import type { RatgeberArticleMeta } from "@/data/ratgeber/types";
import { SCHEMA_ORG_ID, SCHEMA_WEBSITE_ID } from "@/lib/schema";
import { getRatgeberDisplayUpdatedAt } from "@/lib/ratgeber-dates";
import { ratgeberArticleAbsoluteUrl, ratgeberHubAbsoluteUrl } from "@/lib/ratgeber-seo";
import { SITE_URL } from "@/lib/constants";

type Props = {
  article: RatgeberArticleMeta;
  breadcrumbHome: string;
  breadcrumbRatgeber: string;
};

export function RatgeberArticleJsonLd({ article, breadcrumbHome, breadcrumbRatgeber }: Props) {
  const url = ratgeberArticleAbsoluteUrl(article.slug);
  const modified = getRatgeberDisplayUpdatedAt(
    article.slug,
    article.publishedAt,
    article.updatedAt
  );
  const image = article.ogImage
    ? article.ogImage.startsWith("http")
      ? article.ogImage
      : `${SITE_URL}${article.ogImage.startsWith("/") ? article.ogImage : `/${article.ogImage}`}`
    : `${SITE_URL}/hero-1.webp`;

  const graph = [
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: article.title,
      description: article.description,
      url,
      image: [image],
      datePublished: article.publishedAt,
      dateModified: modified,
      author: {
        "@type": "Organization",
        "@id": SCHEMA_ORG_ID,
        name: article.author ?? "Objekträumung",
      },
      publisher: {
        "@type": "Organization",
        "@id": SCHEMA_ORG_ID,
        name: "Objekträumung",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/icon.webp`,
        },
      },
      mainEntityOfPage: { "@id": `${url}#webpage` },
      articleSection: article.categories[0],
      keywords: (article.tags ?? article.categories).join(", "),
      inLanguage: "de-AT",
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: `${article.title} | Ratgeber Objekträumung`,
      description: article.description,
      isPartOf: { "@id": SCHEMA_WEBSITE_ID },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: breadcrumbHome, item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: breadcrumbRatgeber,
          item: ratgeberHubAbsoluteUrl(),
        },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
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
