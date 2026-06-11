/** Shared Next/Image quality and responsive `sizes` for Lighthouse budgets. */

export const IMAGE_QUALITY_HERO = 80;
export const IMAGE_QUALITY_DEFAULT = 70;

export const IMAGE_SIZES = {
  /** Homepage + service page full-bleed heroes */
  viewport: "100vw",
  /** Nav logo (display h-14 / md:h-[3.8rem], ~200px wide) */
  logoNav: "(max-width: 767px) 180px, 220px",
  /** 50/50 content columns inside max-w-6xl (~576px per column on desktop) */
  contentColumn: "(max-width: 767px) 100vw, (max-width: 1152px) 50vw, 576px",
  /** How-it-works step image (half grid on md+) */
  howItWorks: "(max-width: 767px) 100vw, (max-width: 1152px) 50vw, 576px",
  /** 3-column service gallery */
  galleryThree: "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 384px",
  /** Services overview grid cards */
  servicesGrid: "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 384px",
  /** Referenzen mosaic */
  referenzen: "(max-width: 1279px) 20vw, (max-width: 1023px) 25vw, (max-width: 639px) 33vw, 280px",
  /** Services page gallery tiles */
  servicesPageGallery: "(max-width: 1023px) 33vw, (max-width: 639px) 50vw, 320px",
} as const;
