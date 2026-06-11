import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { JsonLd } from "@/components/JsonLd";
import { DEFAULT_META_DESCRIPTION, DEFAULT_META_TITLE } from "@/lib/constants";

type Props = { children: React.ReactNode; params: { locale: string } };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return {
    ...buildMetadata({
      title: DEFAULT_META_TITLE,
      description: DEFAULT_META_DESCRIPTION,
      canonicalPath: "/",
      locale: "at",
    }),
    icons: { icon: "/icon.webp" },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;
  if (!routing.locales.includes(locale as "at")) notFound();
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <>
      <JsonLd locale={locale} />
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Header />
        <main className="flex-1 pb-32 md:pb-24">{children}</main>
        <Footer />
        <FloatingCta />
      </NextIntlClientProvider>
    </>
  );
}
