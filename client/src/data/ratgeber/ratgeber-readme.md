# Ratgeber – Architektur & Workflow

SEO-orientierter Ratgeber-Bereich unter **`/ratgeber`**.

## URLs

| Pfad | Datei | Beschreibung |
|------|--------|--------------|
| `/ratgeber` | `app/[locale]/ratgeber/page.tsx` | Übersicht (Hub) |
| `/ratgeber/{slug}` | `app/[locale]/ratgeber/[slug]/page.tsx` | Einzelartikel |
| `/ratgeber/feed.xml` | `app/ratgeber/feed.xml/route.ts` | RSS 2.0 Feed |

> Hinweis: Seiten liegen unter `[locale]/` (Projekt-Konvention), URLs haben **kein** `/at/`-Präfix (`localePrefix: "never"`).

## Neuen Artikel anlegen

1. **Vorlage kopieren**  
   `components/ratgeber/articles/_vorlage-artikel.tsx` → `components/ratgeber/articles/{slug}.tsx`

2. **Inhalt schreiben** mit `RatgeberArticleBody`-Bausteinen (`RatgeberH2`, `RatgeberP`, `RatgeberCta`, …).

3. **Registry** (`data/ratgeber/registry.ts`):
   ```ts
   import { MeinArtikelContent } from "@/components/ratgeber/articles/mein-artikel";

   export const RATGEBER_REGISTRY: RatgeberArticleRecord[] = [
     {
       meta: {
         slug: "mein-artikel",
         title: "...",
         description: "...",      // Meta (~160 Zeichen)
         excerpt: "...",          // Teaser auf Hub
         publishedAt: "2026-03-15T08:00:00.000Z",
         readingTimeMinutes: 7,
         categories: ["Kosten"],
         tags: ["Wien", "Fixpreis"],
         relatedSlugs: ["anderer-artikel"],
       },
       Component: MeinArtikelContent,
     },
   ];
   ```

4. **Build** – `generateStaticParams` erzeugt statische Seiten automatisch.

## SEO

- **Meta:** `lib/ratgeber-seo.ts` → `buildMetadata` + canonical `/ratgeber/{slug}`
- **JSON-LD:** `RatgeberCollectionJsonLd` (Hub), `RatgeberArticleJsonLd` (Article + Breadcrumb)
- **Sitemap:** `lib/sitemapEntries.ts` (Hub + alle Registry-Artikel)
- **RSS:** Layout + Hub verlinken `alternates.types["application/rss+xml"]`
- **Aktualisierungsdatum:** `lib/ratgeber-dates.ts` – optional `updatedAt` in Registry, sonst rollierendes Monatsdatum pro Slug

## Dateistruktur

```
src/
├── app/[locale]/ratgeber/
│   ├── layout.tsx          # RSS alternate (metadata)
│   ├── page.tsx            # Hub
│   └── [slug]/page.tsx     # Artikel
├── app/ratgeber/feed.xml/route.ts
├── components/ratgeber/
│   ├── articles/           # 1 Datei pro Artikel
│   ├── RatgeberArticleBody.tsx
│   ├── RatgeberCard.tsx
│   ├── RatgeberHero.tsx
│   ├── RatgeberArticleJsonLd.tsx
│   ├── RatgeberCollectionJsonLd.tsx
│   └── RelatedRatgeberSection.tsx
├── data/ratgeber/
│   ├── types.ts
│   ├── registry.ts
│   └── ratgeber-readme.md
└── lib/
    ├── ratgeber-seo.ts
    └── ratgeber-dates.ts
```

## Optional (später)

- Nav-Link in `Header.tsx` / `Footer.tsx`
- `nav.ratgeber` in `messages/de.json`
- Header-Menü nur wenn `RATGEBER_REGISTRY.length > 0`
