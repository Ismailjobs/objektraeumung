"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import { GOOGLE_ADS_FORM_CONVERSION_SEND_TO, WHATSAPP_URL, RECAPTCHA_V3_SITE_KEY } from "@/lib/constants";
import { executeRecaptchaV3, loadRecaptchaV3Script } from "@/lib/recaptcha-v3";
import {
  NAME_MAX,
  EMAIL_MAX,
  PHONE_MIN,
  PHONE_MAX,
  MESSAGE_MIN,
  MESSAGE_MAX,
  ADDRESS_MAX,
  PLZ_ORT_MAX,
} from "@/lib/contact-validation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const SERVICE_OPTIONS = [
  { value: "raeumung", label: "Räumung" },
  { value: "aufloesung", label: "Auflösung" },
  { value: "entruempelung", label: "Entrümpelung" },
  { value: "entsorgung", label: "Entsorgung" },
  { value: "reinigung", label: "Reinigung" },
  { value: "besichtigung-angebot", label: "Besichtigung / Angebot" },
] as const;

type Props = {
  defaultService?: string;
};

export function ContactSection(props: Props) {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const submitInFlight = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);
  const useRecaptcha = Boolean(RECAPTCHA_V3_SITE_KEY);

  useEffect(() => {
    if (!useRecaptcha || typeof window === "undefined") return;
    const el = sectionRef.current;
    if (!el) return;

    const warm = () => loadRecaptchaV3Script().catch(() => {});
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          warm();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [useRecaptcha]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (submitInFlight.current) return;
      submitInFlight.current = true;
      const form = e.currentTarget;
      try {
        setStatus("loading");
        setErrorMessage("");
        const data = new FormData(form);
        let recaptchaToken: string | undefined;
        if (useRecaptcha) {
          try {
            recaptchaToken = await executeRecaptchaV3();
          } catch {
            setStatus("error");
            setErrorMessage(t("error"));
            return;
          }
        }

        const payload = {
          name: (data.get("name") as string)?.trim().slice(0, NAME_MAX) ?? "",
          email: (data.get("email") as string)?.trim().slice(0, EMAIL_MAX) ?? "",
          phone: (data.get("phone") as string)?.trim().replace(/\s+/g, " ").slice(0, PHONE_MAX) ?? "",
          address: (data.get("address") as string)?.trim().slice(0, ADDRESS_MAX) || undefined,
          plzOrt: (data.get("plzOrt") as string)?.trim().slice(0, PLZ_ORT_MAX) || undefined,
          message: (data.get("message") as string)?.trim().slice(0, MESSAGE_MAX) ?? "",
          service: (data.get("service") as string) || undefined,
          recaptchaToken,
        };

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          const json = await res.json().catch(() => ({}));
          if (res.ok && json.success) {
            if (typeof window !== "undefined" && typeof window.gtag === "function") {
              window.gtag("event", "conversion", { send_to: GOOGLE_ADS_FORM_CONVERSION_SEND_TO });
            }
            setStatus("success");
            form.reset();
          } else {
            setStatus("error");
            setErrorMessage((json.error as string) || t("error"));
          }
        } catch {
          setStatus("error");
          setErrorMessage(t("error"));
        }
      } finally {
        submitInFlight.current = false;
      }
    },
    [useRecaptcha, t]
  );

  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-28 bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            {t("sectionLabel")}
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            {t("title")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-2xl bg-white/5 border border-white/10 p-6 md:p-10 backdrop-blur-sm"
        >
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-white/10 border border-white/20 p-8 text-center space-y-5"
          >
            <p className="text-green-400 font-medium">{t("success")}</p>
            <p className="text-sm text-white/80">{t("successWhatsApp")}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                {t("name")} *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                minLength={2}
                maxLength={NAME_MAX}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder={t("name")}
              />
              <p className="mt-0.5 text-xs text-white/50">Max. {NAME_MAX}</p>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                {t("email")} *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={EMAIL_MAX}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder={t("email")}
              />
              <p className="mt-0.5 text-xs text-white/50">Max. {EMAIL_MAX}</p>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                {t("phone")} *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                minLength={PHONE_MIN}
                maxLength={PHONE_MAX}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder={t("phone")}
              />
              <p className="mt-0.5 text-xs text-white/50">Max. {PHONE_MAX}</p>
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium mb-1">
                {t("address")}
              </label>
              <input
                id="address"
                name="address"
                type="text"
                autoComplete="street-address"
                maxLength={ADDRESS_MAX}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder={t("address")}
              />
              <p className="mt-0.5 text-xs text-white/50">Optional, max. {ADDRESS_MAX}</p>
            </div>
            <div>
              <label htmlFor="plzOrt" className="block text-sm font-medium mb-1">
                {t("plzOrt")}
              </label>
              <input
                id="plzOrt"
                name="plzOrt"
                type="text"
                autoComplete="postal-code"
                maxLength={PLZ_ORT_MAX}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder={t("plzOrt")}
              />
              <p className="mt-0.5 text-xs text-white/50">Optional, max. {PLZ_ORT_MAX}</p>
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-1">
                {t("service")} *
              </label>
              <select
                id="service"
                name="service"
                autoComplete="off"
                defaultValue={props.defaultService ?? ""}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-accent [&_option]:bg-navy [&_option]:text-white"
              >
                <option value="">—</option>
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                {t("message")} *
              </label>
              <textarea
                id="message"
                name="message"
                autoComplete="off"
                required
                minLength={MESSAGE_MIN}
                maxLength={MESSAGE_MAX}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                placeholder={t("message")}
              />
              <p className="mt-0.5 text-xs text-white/50">Min. {MESSAGE_MIN}, max. {MESSAGE_MAX.toLocaleString("de-AT")}</p>
            </div>
            {status === "error" && errorMessage && (
              <p className="text-red-400 text-sm">{errorMessage}</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-accent hover:bg-accent-hover disabled:opacity-60 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-accent/20"
            >
              {status === "loading" ? "..." : t("submit")}
            </button>
          </motion.form>
        )}
        </motion.div>
      </div>
    </section>
  );
}
