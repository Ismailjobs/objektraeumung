import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

type BodyProps = { children: ReactNode; className?: string };

export function RatgeberLead({ children, className = "" }: BodyProps) {
  return (
    <p className={`text-lg md:text-xl text-navy/90 leading-relaxed font-medium ${className}`}>
      {children}
    </p>
  );
}

export function RatgeberH2({ children, className = "", id }: BodyProps & { id?: string }) {
  return (
    <h2
      id={id}
      className={`text-xl md:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-24 ${className}`}
    >
      {children}
    </h2>
  );
}

export function RatgeberH3({ children, className = "", id }: BodyProps & { id?: string }) {
  return (
    <h3
      id={id}
      className={`text-lg md:text-xl font-semibold text-navy mt-8 mb-3 scroll-mt-24 ${className}`}
    >
      {children}
    </h3>
  );
}

export function RatgeberP({ children, className = "" }: BodyProps) {
  return <p className={`text-navy/85 text-base md:text-lg leading-relaxed mb-4 ${className}`}>{children}</p>;
}

export function RatgeberUl({ children, className = "" }: BodyProps) {
  return (
    <ul className={`list-disc pl-6 space-y-2 text-navy/85 text-base md:text-lg leading-relaxed mb-6 ${className}`}>
      {children}
    </ul>
  );
}

export function RatgeberOl({ children, className = "" }: BodyProps) {
  return (
    <ol className={`list-decimal pl-6 space-y-2 text-navy/85 text-base md:text-lg leading-relaxed mb-6 ${className}`}>
      {children}
    </ol>
  );
}

export function RatgeberLi({ children }: { children: ReactNode }) {
  return <li>{children}</li>;
}

export function RatgeberCallout({ children, className = "" }: BodyProps) {
  return (
    <aside
      className={`my-8 rounded-xl border border-accent/25 bg-accent/5 px-5 py-4 text-navy/90 text-base leading-relaxed ${className}`}
    >
      {children}
    </aside>
  );
}

type CtaProps = {
  title?: string;
  text?: string;
  href?: string;
  label?: string;
};

export function RatgeberCta({
  title = "Kostenloses Festpreis-Angebot",
  text = "Wir besichtigen vor Ort kostenlos und erstellen ein verbindliches Fixpreis-Angebot – inklusive Wertausgleich.",
  href = "/#contact",
  label = "Jetzt anfragen",
}: CtaProps) {
  return (
    <section className="my-10 rounded-2xl bg-navy text-white p-6 md:p-8">
      <h2 className="text-lg md:text-xl font-bold">{title}</h2>
      <p className="mt-2 text-white/85 text-sm md:text-base leading-relaxed max-w-2xl">{text}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors uppercase tracking-wider"
      >
        {label}
        <ArrowRight size={16} strokeWidth={2.5} />
      </Link>
    </section>
  );
}

export function RatgeberArticleBody({ children }: { children: ReactNode }) {
  return <div className="ratgeber-article-body max-w-none">{children}</div>;
}
