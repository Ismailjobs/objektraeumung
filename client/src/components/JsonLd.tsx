import { buildSiteWideGraph } from "@/lib/schema";

/** Sitewide JSON-LD @graph (Organization, LocalBusiness, OfferCatalog, WebSite, optional FAQPage). */
export function JsonLd({
  locale,
  includeSitewideFaq = true,
}: {
  locale: string;
  includeSitewideFaq?: boolean;
}) {
  const graph = buildSiteWideGraph(locale, { includeSitewideFaq });
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
