"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CheckCircle, ChevronRight, MessageCircle, Phone } from "lucide-react";
import type { ServiceTheme } from "@/lib/serviceThemes";
import { PHONE_DISPLAY, PHONE_LINK, WHATSAPP_URL } from "@/lib/constants";

type Props = {
  theme: ServiceTheme;
};

export function ServiceEntsorgungWienLayout({ theme }: Props) {
  const t = useTranslations("services.entsorgungWien");

  const bullets = [t("bullet1"), t("bullet2"), t("bullet3"), t("bullet4")];
  const searches = [t("search1"), t("search2"), t("search3"), t("search4"), t("search5")];
  const helpful = [t("helpful1"), t("helpful2"), t("helpful3"), t("helpful4"), t("helpful5"), t("helpful6"), t("helpful7"), t("helpful8")];
  const steps = [
    { title: t("process1Title"), desc: t("process1Desc") },
    { title: t("process2Title"), desc: t("process2Desc") },
    { title: t("process3Title"), desc: t("process3Desc") },
    { title: t("process4Title"), desc: t("process4Desc") },
  ];
  const faqs = [
    { q: t("faq1Q"), a: t("faq1A") },
    { q: t("faq2Q"), a: t("faq2A") },
    { q: t("faq3Q"), a: t("faq3A") },
    { q: t("faq4Q"), a: t("faq4A") },
    { q: t("faq5Q"), a: t("faq5A") },
    { q: t("faq6Q"), a: t("faq6A") },
  ];
  const disposalCategories = [
    { title: t("cat1Title"), desc: t("cat1Desc"), href: "/services/raeumung-wien" },
    { title: t("cat2Title"), desc: t("cat2Desc"), href: "/services/entrumpelung-wien" },
    { title: t("cat3Title"), desc: t("cat3Desc"), href: "/services/kellerraeumung" },
    { title: t("cat4Title"), desc: t("cat4Desc"), href: "/services/wohnungsaufloesung" },
    { title: t("cat5Title"), desc: t("cat5Desc"), href: "/services/firmenaufloesung" },
    { title: t("cat6Title"), desc: t("cat6Desc"), href: "/services/haushaltsaufloesung" },
  ];

  return (
    <div className={`max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14 ${theme.zLayoutBg}`}>
      <ul className="space-y-2 mb-6">
        {bullets.map((text, i) => (
          <li key={i} className="flex gap-2 items-start">
            <CheckCircle size={20} className={`text-accent shrink-0 mt-0.5 ${theme.accentClass}`} strokeWidth={2} />
            <span className={theme.textColor}>{text}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-4 mb-10">
        <a href={`tel:${PHONE_LINK}`} className={`inline-flex items-center gap-2 font-medium ${theme.accentClass} hover:underline`}>
          <Phone size={20} /> {PHONE_DISPLAY}
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 font-medium ${theme.accentClass} hover:underline`}>
          <MessageCircle size={20} /> WhatsApp
        </a>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-navy mb-3">{t("introTitle")}</h2>
        <p className={`${theme.textColor} mb-3`}>{t("intro1")}</p>
        <p className={theme.textColor}>{t("intro2")}</p>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-bold text-navy mb-3">{t("idealSearchTitle")}</h3>
        <ul className="space-y-2">
          {searches.map((text, i) => (
            <li key={i} className={`${theme.textColor} text-sm`}>- {text}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-navy mb-2">{t("whatTitle")}</h2>
        <p className={`${theme.textColor} mb-4`}>{t("whatIntro")}</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {disposalCategories.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group rounded-xl border border-navy/10 p-4 bg-white hover:border-accent/30 hover:shadow-sm transition-all"
            >
              <h4 className="font-semibold text-navy mb-1 group-hover:text-accent transition-colors">{item.title}</h4>
              <p className={`text-sm ${theme.textColor}`}>{item.desc}</p>
              <span className={`inline-flex items-center gap-1 mt-3 text-base font-semibold ${theme.accentClass}`}>
                <ChevronRight size={20} strokeWidth={2.5} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-navy mb-4">{t("processTitle")}</h2>
        <ol className="space-y-5">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-accent/15 text-accent font-bold flex items-center justify-center">{i + 1}</span>
              <div>
                <h4 className="font-semibold text-navy">{step.title}</h4>
                <p className={`text-sm mt-1 ${theme.textColor}`}>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10 rounded-xl border border-navy/10 p-4 bg-navy/5">
        <h3 className="text-lg font-bold text-navy mb-2">{t("valueTitle")}</h3>
        <p className={`text-sm mb-2 ${theme.textColor}`}>{t("value1")}</p>
        <p className={`text-sm ${theme.textColor}`}>{t("value2")}</p>
      </section>

      <section className="mb-10 rounded-xl border border-navy/10 p-4 bg-white">
        <h3 className="text-lg font-bold text-navy mb-2">{t("ecoTitle")}</h3>
        <p className={`text-sm ${theme.textColor}`}>{t("ecoText")}</p>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-bold text-navy mb-3">{t("helpfulTitle")}</h3>
        <ul className="space-y-2">
          {helpful.map((text, i) => (
            <li key={i} className="flex gap-2 items-start">
              <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
              <span className={`${theme.textColor} text-sm`}>{text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-bold text-navy mb-3">{t("relatedTitle")}</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/services/raeumung-wien" className={`text-sm font-medium ${theme.accentClass} hover:underline`}>{t("related1")}</Link>
          <Link href="/services/haushaltsaufloesung" className={`text-sm font-medium ${theme.accentClass} hover:underline`}>{t("related2")}</Link>
          <Link href="/services/kellerraeumung" className={`text-sm font-medium ${theme.accentClass} hover:underline`}>{t("related3")}</Link>
          <Link href="/services/zimmer-raeumung" className={`text-sm font-medium ${theme.accentClass} hover:underline`}>{t("related4")}</Link>
        </div>
      </section>

      <section className="mb-10 rounded-xl border border-navy/10 p-4 bg-navy/5">
        <h3 className="text-lg font-bold text-navy mb-2">{t("readyTitle")}</h3>
        <p className={`${theme.textColor} text-sm mb-3`}>{t("readyText")}</p>
        <div className="flex flex-wrap gap-4">
          <a href={`tel:${PHONE_LINK}`} className={`inline-flex items-center gap-2 font-medium ${theme.accentClass} hover:underline`}>
            <Phone size={18} /> {t("readyPhone")}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 font-medium ${theme.accentClass} hover:underline`}>
            <MessageCircle size={18} /> {t("readyWhatsapp")}
          </a>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-bold text-navy mb-4">{t("faqTitle")}</h3>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="rounded-xl border border-navy/10 bg-white p-4">
              <summary className="font-semibold text-navy cursor-pointer">{f.q}</summary>
              <p className={`mt-2 text-sm ${theme.textColor}`}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
