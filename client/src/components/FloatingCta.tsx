"use client";

import { Camera, MessageCircle, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { PHONE_DISPLAY, PHONE_LINK, WHATSAPP_URL } from "@/lib/constants";

export function FloatingCta() {
  const t = useTranslations("bottomCta");

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-6xl px-3 sm:px-6 pb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Call box – tüm ekranlarda accent rengi */}
          <a
            href={`tel:${PHONE_LINK}`}
            className="rounded-xl sm:rounded-2xl border border-accent/80 bg-accent backdrop-blur text-white shadow-lg px-3 py-2.5 sm:px-4 sm:py-3 hover:bg-accent-hover transition ring-2 ring-accent/30"
            aria-label={t("callLabel")}
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white">
              <span className="animate-phone-ring" aria-hidden>
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </span>
              <span className="truncate">{PHONE_DISPLAY}</span>
              <span className="text-white/60">·</span>
              <span className="whitespace-nowrap">{t("callLabel")}</span>
            </div>
            <div className="mt-0.5 sm:mt-1 text-sm sm:text-lg font-extrabold leading-snug">
              {t("callTitle")}
            </div>
          </a>

          {/* WhatsApp box */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl sm:rounded-2xl border border-white/15 bg-green-600/95 backdrop-blur text-white shadow-lg px-3 py-2.5 sm:px-4 sm:py-3 hover:bg-green-600 transition"
            aria-label={t("whatsAppLabel")}
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/95">
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>{t("whatsAppLabel")}</span>
              <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[11px] sm:text-xs font-semibold">
                <Camera className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                {t("whatsAppBadge")}
              </span>
            </div>
            <div className="mt-0.5 sm:mt-1 text-sm sm:text-lg font-extrabold leading-snug">
              {t("whatsAppTitle")}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
