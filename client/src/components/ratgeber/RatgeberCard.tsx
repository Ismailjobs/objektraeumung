import { Link } from "@/i18n/navigation";
import { ArrowRight, Clock, Tag } from "lucide-react";
import type { RatgeberArticleMeta } from "@/data/ratgeber/types";
import { formatRatgeberDate, getRatgeberDisplayUpdatedAt } from "@/lib/ratgeber-dates";

type Props = {
  article: RatgeberArticleMeta;
};

export function RatgeberCard({ article }: Props) {
  const updated = getRatgeberDisplayUpdatedAt(
    article.slug,
    article.publishedAt,
    article.updatedAt
  );

  return (
    <article className="group flex flex-col h-full rounded-2xl border border-navy/10 bg-white p-5 md:p-6 shadow-sm hover:border-accent/30 hover:shadow-md transition-all">
      <div className="flex flex-wrap gap-2 mb-3">
        {article.categories.slice(0, 2).map((cat) => (
          <span
            key={cat}
            className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full"
          >
            <Tag size={12} aria-hidden />
            {cat}
          </span>
        ))}
      </div>
      <h2 className="text-lg md:text-xl font-bold text-navy group-hover:text-accent transition-colors">
        <Link href={`/ratgeber/${article.slug}`} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
          {article.title}
        </Link>
      </h2>
      <p className="mt-2 text-navy/70 text-sm md:text-base leading-relaxed line-clamp-3 flex-1">
        {article.excerpt}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-navy/55">
        <span className="inline-flex items-center gap-1">
          <Clock size={14} aria-hidden />
          {article.readingTimeMinutes} Min. Lesezeit
        </span>
        <span aria-hidden>·</span>
        <time dateTime={updated}>{formatRatgeberDate(updated)}</time>
      </div>
      <Link
        href={`/ratgeber/${article.slug}`}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
      >
        Artikel lesen
        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </article>
  );
}
