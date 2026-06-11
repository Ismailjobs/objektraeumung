/**
 * Tek dil: sadece Almanca (at). Metinler i18n (messages/de.json) üzerinden.
 * Geri dönmek: locales = ["at", "en"], localePrefix = "always", Header’daki
 * "routing.locales.length > 1" koşullarını kaldırın, sayfa metadata’da isDe/en tekrar kullanın.
 */
export const locales = ["at"] as const;
export const defaultLocale = "at" as const;
/** "never" = URL'de /at veya /en yok, sadece /, /prices vb. */
export const localePrefix = "never" as const;

export const routing = {
  locales,
  defaultLocale,
  localePrefix,
} as const;
