"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { ServiceTheme } from "@/lib/serviceThemes";
import { getHeroImageFilename, getImageFolder } from "@/lib/serviceList";
import { IMAGE_QUALITY_HERO, IMAGE_SIZES } from "@/lib/imageConfig";

// Nur deine Bilder: public/services/{imageFolder}/hero.webp – kein Fallback
type Props = {
  title: string;
  slug: string;
  theme: ServiceTheme;
  subtitle?: string;
};

export function ServicePageHero({ title, slug, theme, subtitle }: Props) {
  const imageFolder = getImageFolder(slug);
  const heroFilename = getHeroImageFilename(slug);
  const heroPath = `/services/${imageFolder}/${heroFilename}`;
  const [showImage, setShowImage] = useState(true);

  return (
    <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden bg-navy">
      {showImage && (
        <Image
          src={heroPath}
          alt=""
          fill
          sizes={IMAGE_SIZES.viewport}
          quality={IMAGE_QUALITY_HERO}
          priority
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover saturate-[.8] grayscale-[18%]"
          onError={() => setShowImage(false)}
        />
      )}
      <div className={`absolute inset-0 ${theme.heroOverlay}`} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
      <div className={`absolute bottom-0 left-0 right-0 h-1 ${theme.heroLine} opacity-90`} />
    </section>
  );
}
