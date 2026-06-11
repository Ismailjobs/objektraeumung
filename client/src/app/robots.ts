import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/"],
        disallow: ["/api/", "/private/"],
      },
    ],
    sitemap: "https://objektraeumung.at/sitemap.xml",
  };
}
