import { getRatgeberMetaList } from "@/data/ratgeber/registry";
import { getRatgeberLastModified } from "@/lib/ratgeber-dates";
import { ratgeberArticleAbsoluteUrl, ratgeberHubAbsoluteUrl, RATGEBER_HUB_SEO } from "@/lib/ratgeber-seo";
import { SITE_URL } from "@/lib/constants";
import { EMAIL } from "@/lib/constants";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const articles = getRatgeberMetaList();
  const buildDate = new Date().toUTCString();

  const items = articles
    .map((article) => {
      const link = ratgeberArticleAbsoluteUrl(article.slug);
      const pubDate = new Date(article.publishedAt).toUTCString();
      const modified = getRatgeberLastModified(article).toUTCString();

      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <description>${escapeXml(article.excerpt)}</description>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(article.categories.join(", "))}</category>
      <content:encoded><![CDATA[${article.description}]]></content:encoded>
      <!-- lastModified: ${modified} -->
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(RATGEBER_HUB_SEO.title)}</title>
    <link>${escapeXml(ratgeberHubAbsoluteUrl())}</link>
    <description>${escapeXml(RATGEBER_HUB_SEO.description)}</description>
    <language>de-at</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${escapeXml(`${SITE_URL}/ratgeber/feed.xml`)}" rel="self" type="application/rss+xml"/>
    <managingEditor>${escapeXml(EMAIL)} (Objekträumung)</managingEditor>
    <webMaster>${escapeXml(EMAIL)} (Objekträumung)</webMaster>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
