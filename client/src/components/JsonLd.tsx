import { buildSiteWideGraph } from "@/lib/schema";

/** Sitewide JSON-LD @graph (Organization, LocalBusiness, OfferCatalog, WebSite, FAQPage). */
export function JsonLd({ locale }: { locale: string }) {
  const graph = buildSiteWideGraph(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
