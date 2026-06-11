"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  NAME_MIN,
  NAME_MAX,
  EMAIL_MAX,
  PHONE_MIN,
  PHONE_MAX,
  MESSAGE_MIN,
  MESSAGE_MAX,
  ADDRESS_MIN,
  ADDRESS_MAX,
  PLZ_ORT_MIN,
  PLZ_ORT_MAX,
  validateName,
  validateEmail,
  validatePhone,
  validateMessage,
  validateAddress,
  validatePlzOrt,
} from "@/lib/contact-validation";
import { GOOGLE_ADS_FORM_CONVERSION_SEND_TO, RECAPTCHA_V3_SITE_KEY } from "@/lib/constants";
import { executeRecaptchaV3, loadRecaptchaV3Script } from "@/lib/recaptcha-v3";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const submitInFlight = useRef(false);
  const useRecaptcha = Boolean(RECAPTCHA_V3_SITE_KEY);

  useEffect(() => {
    if (!useRecaptcha || typeof window === "undefined") return;

    const warm = () => {
      loadRecaptchaV3Script().catch(() => {});
    };
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(warm);
      return;
    }
    const t = window.setTimeout(warm, 300);
    return () => window.clearTimeout(t);
  }, [useRecaptcha]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (submitInFlight.current) return;
      submitInFlight.current = true;
      const form = e.currentTarget;
      try {
        const fd = new FormData(form);
        const name = (fd.get("name") as string)?.trim().slice(0, NAME_MAX) ?? "";
        const email = (fd.get("email") as string)?.trim().slice(0, EMAIL_MAX) ?? "";
        const phone = (fd.get("phone") as string)?.trim().replace(/\s+/g, " ").slice(0, PHONE_MAX) ?? "";
        const address = (fd.get("address") as string)?.trim().slice(0, ADDRESS_MAX) ?? "";
        const plzOrt = (fd.get("plzOrt") as string)?.trim().slice(0, PLZ_ORT_MAX) ?? "";
        const message = (fd.get("message") as string)?.trim().slice(0, MESSAGE_MAX) ?? "";

        const n = validateName(name);
        if (!n.ok) {
          setErrorMessage(n.error ?? "");
          setStatus("error");
          return;
        }
        const em = validateEmail(email);
        if (!em.ok) {
          setErrorMessage(em.error ?? "");
          setStatus("error");
          return;
        }
        const ph = validatePhone(phone);
        if (!ph.ok) {
          setErrorMessage(ph.error ?? "");
          setStatus("error");
          return;
        }
        const msg = validateMessage(message);
        if (!msg.ok) {
          setErrorMessage(msg.error ?? "");
          setStatus("error");
          return;
        }

        setStatus("loading");
        setErrorMessage("");

        let token = "";
        if (useRecaptcha) {
          try {
            token = await executeRecaptchaV3();
          } catch {
            setErrorMessage("Sicherheitsprüfung (reCAPTCHA) fehlgeschlagen. Bitte Seite neu laden und erneut versuchen.");
            setStatus("error");
            return;
          }
        }

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, address, plzOrt, message, token }),
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
            setErrorMessage((json.error as string) || "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
          }
        } catch {
          setStatus("error");
          setErrorMessage("Netzwerkfehler. Bitte versuchen Sie es später erneut.");
        }
      } finally {
        submitInFlight.current = false;
      }
    },
    [useRecaptcha]
  );

  if (status === "success") {
    return (
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 text-center text-gray-800">
        <p className="font-semibold text-blue-700">Ihre Nachricht wurde erfolgreich gesendet.</p>
        <p className="mt-2 text-sm text-gray-600">
          Wir haben Ihre Nachricht erhalten und melden uns in Kürze bei Ihnen.
        </p>
        <p className="mt-3 text-xs text-gray-500">
          Eine Bestätigungs-E-Mail wurde an Ihre Adresse gesendet. Bitte prüfen Sie ggf. den Spam-Ordner.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-gray-700">
            Name *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={NAME_MIN}
            maxLength={NAME_MAX}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            placeholder="Ihr Name"
          />
          <p className="mt-0.5 text-xs text-gray-500">Max. {NAME_MAX}</p>
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-gray-700">
            E-Mail *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={EMAIL_MAX}
            pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}"
            title="Bitte gültige E-Mail-Adresse eingeben."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            placeholder="ihre@email.at"
          />
          <p className="mt-0.5 text-xs text-gray-500">Gültige E-Mail (max. {EMAIL_MAX} Zeichen)</p>
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium text-gray-700">
            Telefon *
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            minLength={PHONE_MIN}
            maxLength={PHONE_MAX}
            pattern="\+?[\d\s\-()]{7,24}"
            title="z. B. +43 660 678 3703"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            placeholder="+43 660 678 3703"
          />
          <p className="mt-0.5 text-xs text-gray-500">Max. {PHONE_MAX}</p>
        </div>
        <div>
          <label htmlFor="contact-address" className="mb-1 block text-sm font-medium text-gray-700">
            Adresse (Straße und Hausnummer)
          </label>
          <input
            id="contact-address"
            name="address"
            type="text"
            autoComplete="street-address"
            maxLength={ADDRESS_MAX}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            placeholder="z. B. Lore-Kutschera-Weg 14/3/13, 1120 Wien"
          />
          <p className="mt-0.5 text-xs text-gray-500">Optional, max. {ADDRESS_MAX} Zeichen</p>
        </div>
        <div>
          <label htmlFor="contact-plz-ort" className="mb-1 block text-sm font-medium text-gray-700">
            PLZ / Ort
          </label>
          <input
            id="contact-plz-ort"
            name="plzOrt"
            type="text"
            autoComplete="postal-code"
            maxLength={PLZ_ORT_MAX}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            placeholder="z. B. 1230 Wien"
          />
          <p className="mt-0.5 text-xs text-gray-500">Optional, max. {PLZ_ORT_MAX}</p>
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-gray-700">
            Nachricht *
          </label>
          <textarea
            id="contact-message"
            name="message"
            autoComplete="off"
            required
            minLength={MESSAGE_MIN}
            maxLength={MESSAGE_MAX}
            rows={4}
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            placeholder="Ihre Nachricht..."
          />
          <p className="mt-0.5 text-xs text-gray-500">Min. {MESSAGE_MIN}, max. {MESSAGE_MAX.toLocaleString("de-AT")}</p>
        </div>
        {status === "error" && errorMessage && (
          <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">{errorMessage}</p>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60"
        >
          {status === "loading" ? "Wird gesendet …" : "Nachricht senden"}
        </button>
      </form>
    </div>
  );
}
