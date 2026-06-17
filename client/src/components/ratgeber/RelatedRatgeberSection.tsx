import { RatgeberCard } from "@/components/ratgeber/RatgeberCard";
import type { RatgeberArticleRecord } from "@/data/ratgeber/types";

type Props = {
  articles: RatgeberArticleRecord[];
  title?: string;
};

export function RelatedRatgeberSection({
  articles,
  title = "Weitere Ratgeber-Artikel",
}: Props) {
  if (articles.length === 0) return null;

  return (
    <section className="border-t border-navy/10 bg-slate-50/80 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl md:text-2xl font-bold text-navy mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((entry) => (
            <RatgeberCard key={entry.meta.slug} article={entry.meta} />
          ))}
        </div>
      </div>
    </section>
  );
}
