"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  CalendarCheck,
  ChevronRight,
  HelpCircle,
  Eye,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { WHATSAPP_URL } from "@/lib/constants";
import { IMAGE_QUALITY_HERO, IMAGE_SIZES } from "@/lib/imageConfig";

const HERO_IMAGES = [
  "/hero-1.webp",
  "/hero-2.webp",
  "/hero-3.webp",
  "/hero-4.webp",
  "/hero-5.webp",
  "/hero-6.webp",
] as const;
const N = HERO_IMAGES.length;
const SLIDE_MS = 5000;
/** Defer second layer until after LCP measurement window. */
const SLIDESHOW_DELAY_MS = 4500;

type IdleCapableWindow = Window & {
  requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export function Hero() {
  const t = useTranslations("hero");
  const [slideshow, setSlideshow] = useState(false);
  const [slide, setSlide] = useState({ visible: 0, i0: 0, i1: 1 });

  useEffect(() => {
    const delay = setTimeout(() => setSlideshow(true), SLIDESHOW_DELAY_MS);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!slideshow) return;
    const id = setInterval(() => {
      setSlide((prev) =>
        prev.visible === 0
          ? { ...prev, visible: 1, i1: (prev.i0 + 1) % N }
          : { ...prev, visible: 0, i0: (prev.i1 + 1) % N }
      );
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [slideshow]);

  useEffect(() => {
    if (!slideshow) return;
    const preloadNext = () => {
      const next = HERO_IMAGES[(slide.i0 + 1) % N];
      const img = new window.Image();
      img.src = next;
    };
    const w = window as IdleCapableWindow;
    if (typeof w.requestIdleCallback === "function") {
      const rid = w.requestIdleCallback(preloadNext, { timeout: 3000 });
      return () => {
        if (typeof w.cancelIdleCallback === "function") w.cancelIdleCallback(rid);
      };
    }
    const tid = setTimeout(preloadNext, 500);
    return () => clearTimeout(tid);
  }, [slideshow, slide.i0]);

  const layerClass = (visible: boolean) =>
    `hero-slide-layer${slideshow ? " hero-slide-layer--animate" : ""} ${
      visible ? "hero-slide-layer--visible" : "hero-slide-layer--hidden"
    }`;

  const primaryIndex = slideshow ? slide.i0 : 0;

  return (
    <section className="relative min-h-[70vh] sm:min-h-[75vh] flex items-end md:items-center overflow-hidden bg-navy">
      <div className="absolute inset-0 z-0" aria-hidden>
        <div className="relative h-full w-full">
          <Image
            src={HERO_IMAGES[primaryIndex]}
            alt=""
            fill
            sizes={IMAGE_SIZES.viewport}
            quality={IMAGE_QUALITY_HERO}
            priority
            fetchPriority="high"
            className={layerClass(!slideshow || slide.visible === 0)}
          />
          {slideshow && (
            <Image
              key={`hero-b-${slide.i1}`}
              src={HERO_IMAGES[slide.i1]}
              alt=""
              fill
              sizes={IMAGE_SIZES.viewport}
              quality={IMAGE_QUALITY_HERO}
              loading="lazy"
              fetchPriority="low"
              className={layerClass(slide.visible === 1)}
            />
          )}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/50 to-navy/40 md:from-navy/58 md:via-navy/48 md:to-navy/36" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent md:from-navy/40 md:via-transparent md:to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-20 md:pb-24 pt-12 md:pt-14">
        <div className="max-w-2xl">
          <span className="hero-fade-in inline-block px-3 py-1.5 rounded-full bg-accent text-white text-xs sm:text-sm font-semibold tracking-wide mb-5 sm:mb-6 shadow-md">
            {t("badge")}
          </span>
          <h1 className="hero-fade-in-delay font-extrabold leading-[1.08] tracking-[0.02em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            <span className="block text-[28px] sm:text-4xl md:text-[44px] lg:text-6xl">
              {t("titleLine1")}
            </span>
            <span className="block text-lg sm:text-2xl md:text-[28px] lg:text-4xl mt-1 text-white/85">
              {t("titleLine2")}
            </span>
          </h1>

          <div className="hero-fade-in-delay-2 mt-6 flex flex-wrap gap-1.5 sm:gap-2">
            {(
              [
                { key: "badge1" as const, Icon: ShieldCheck, href: "/prices" as const },
                { key: "badge2" as const, Icon: Eye, href: "whatsapp" as const },
                { key: "badge3" as const, Icon: Truck, href: "whatsapp" as const },
                { key: "badge4" as const, Icon: CalendarCheck, href: "whatsapp" as const },
                { key: "navAbout" as const, Icon: Users, href: "#ueber-objektraeumung" as const },
                { key: "navFaq" as const, Icon: HelpCircle, href: "#faq" as const },
              ] as const
            ).map(({ key, Icon, href }) => {
              const className =
                "inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] sm:text-xs md:text-sm font-medium hover:bg-white/15 transition-colors";
              const isSectionNav = href.startsWith("#");
              const iconEl = <Icon className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 flex-shrink-0 opacity-90" />;
              if (href === "/prices") {
                return (
                  <Link key={key} href="/prices" className={className}>
                    {iconEl}
                    {t(key)}
                  </Link>
                );
              }
              if (isSectionNav) {
                return (
                  <a key={key} href={href} className={className}>
                    {iconEl}
                    {t(key)}
                  </a>
                );
              }
              return (
                <a
                  key={key}
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {iconEl}
                  {t(key)}
                </a>
              );
            })}
          </div>

          <p className="hero-fade-in-delay-3 mt-7 sm:mt-9 text-sm sm:text-base text-white/85 max-w-xl leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="hero-fade-in-delay-4 mt-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-accent font-semibold text-sm sm:text-base transition-colors group"
            >
              {t("servicesLink")}
              <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60 z-10" />
    </section>
  );
}
