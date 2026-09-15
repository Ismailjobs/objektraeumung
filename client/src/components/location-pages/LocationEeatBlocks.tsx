import { getTranslations } from "next-intl/server";

type Props = { translationKey: string };

/**
 * Bezirksspezifischer Praxisbericht + E-E-A-T-Block (Erfahrung vor Ort).
 * Keys: caseStudyLabel, caseStudyTitle, caseStudyBody, expertLabel, expertTitle, expertBody
 */
export async function LocationEeatBlocks({ translationKey }: Props) {
  const t = await getTranslations(translationKey);

  return (
    <>
      <section className="p-6 md:p-8 rounded-2xl border-l-4 border-accent bg-[#fffaf5] border border-navy/10">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-2">
          {t("caseStudyLabel")}
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-navy mb-4">{t("caseStudyTitle")}</h2>
        <p className="text-navy/85 leading-relaxed text-base md:text-[1.0625rem]">
          {t("caseStudyBody")}
        </p>
      </section>

      <section className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-navy/10">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-navy/55 mb-2">
          {t("expertLabel")}
        </p>
        <h2 className="text-lg md:text-xl font-bold text-navy mb-3">{t("expertTitle")}</h2>
        <p className="text-navy/85 leading-relaxed">{t("expertBody")}</p>
      </section>
    </>
  );
}
