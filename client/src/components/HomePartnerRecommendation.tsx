import { Link } from "@/i18n/navigation";

const SOFORT_URL = "https://sofortentrumpelung.at";
const SWIFT_URL = "https://swiftumzug.at";

const externalLinkClass =
  "text-navy font-medium underline decoration-navy/20 underline-offset-[3px] hover:decoration-accent hover:text-accent transition-colors";

const internalLinkClass =
  "text-navy font-medium underline decoration-navy/20 underline-offset-[3px] hover:decoration-accent hover:text-accent transition-colors";

export function HomePartnerRecommendation() {
  return (
    <section
      aria-label="Partner-Empfehlungen"
      className="bg-[#f5f4f1] border-t border-navy/8"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-12">
        <p className="text-navy/85 text-[0.9375rem] md:text-base leading-[1.75]">
          <span className="block text-navy font-medium mb-3 md:mb-3.5">
            Suchen Sie Entrümpelung in anderen Regionen Österreichs oder planen Sie einen Umzug?
          </span>
          Falls Sie außerhalb unseres Kerngebiets eine schnelle Räumung suchen, empfehlen wir unseren
          verlässlichen Partner{" "}
          <a
            href={SOFORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={externalLinkClass}
          >
            Sofort Entrümpelung
          </a>{" "}
          mit seiner bewährten Fixpreis-Garantie. Für professionelle Umzüge, Transporte und logistische
          Unterstützung in ganz Österreich ist{" "}
          <a
            href={SWIFT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={externalLinkClass}
          >
            SWIFT Umzug
          </a>{" "}
          unsere erste Empfehlung. Weitere regionale Spezialisten finden Sie auf unserer{" "}
          <Link href="/partner" className={internalLinkClass}>
            Partnerseite
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
