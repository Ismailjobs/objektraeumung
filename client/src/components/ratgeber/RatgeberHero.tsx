import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";
import type { RatgeberArticleMeta } from "@/data/ratgeber/types";
import { formatRatgeberDate, getRatgeberDisplayUpdatedAt } from "@/lib/ratgeber-dates";

type Props = {
  title: string;
  subtitle?: string;
  breadcrumbHome: string;
  breadcrumbRatgeber: string;
  article?: RatgeberArticleMeta;
};

export function RatgeberHero({
  title,
  subtitle,
  breadcrumbHome,
  breadcrumbRatgeber,
  article,
}: Props) {
  const updated =
    article &&
    getRatgeberDisplayUpdatedAt(article.slug, article.publishedAt, article.updatedAt);

  return (
    <header className="relative bg-navy text-white pt-10 pb-14 md:pt-14 md:pb-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(60,110,113,0.12)_100%)]"
        aria-hidden
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" aria-hidden />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 mb-8 flex-wrap"
        >
          <Link href="/" className="hover:text-gray-400 transition-colors">
            {breadcrumbHome}
          </Link>
          <ChevronRight size={14} className="shrink-0" aria-hidden />
          {article ? (
            <>
              <Link href="/ratgeber" className="hover:text-gray-400 transition-colors">
                {breadcrumbRatgeber}
              </Link>
              <ChevronRight size={14} className="shrink-0" aria-hidden />
              <span className="text-gray-400 truncate max-w-[200px]">{article.title}</span>
            </>
          ) : (
            <span>{breadcrumbRatgeber}</span>
          )}
        </nav>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Ratgeber</p>
        <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-[1.15] max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-white/85 text-base md:text-lg leading-relaxed max-w-2xl">{subtitle}</p>
        )}
        {article && updated && (
          <p className="mt-4 text-sm text-white/60">
            {article.readingTimeMinutes} Min. Lesezeit · Aktualisiert{" "}
            <time dateTime={updated}>{formatRatgeberDate(updated)}</time>
          </p>
        )}
      </div>
    </header>
  );
}
