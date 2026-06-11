import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locale && routing.locales.includes(locale as "at") ? locale : routing.defaultLocale;
  const messagesLocale = resolvedLocale === "at" ? "de" : resolvedLocale;
  const messages = (await import(`../messages/${messagesLocale}.json`)).default;
  return { locale: resolvedLocale, messages };
});
