import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { PageStructuredData } from "@/components/PageStructuredData";
import { buildLocationDetailPageGraph } from "@/lib/schema";
import { getLocationBySlug } from "@/lib/locationsData";

type Props = { children: ReactNode; params: { locale: string; slug: string } };

export default async function LocationSlugLayout({ children, params }: Props) {
  const { locale, slug } = params;
  const loc = getLocationBySlug(slug);

  if (!loc) {
    return <>{children}</>;
  }

  const tLoc = await getTranslations({ locale, namespace: "locations" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const stateNames = tLoc.raw("stateNames") as Record<string, string>;

  const graph = buildLocationDetailPageGraph({
    slug,
    locale: locale === "en" ? "en" : "at",
    loc,
    stateNames,
    breadcrumbLocationsLabel: tLoc("breadcrumb"),
    homeLabel: tNav("home"),
  });

  return (
    <>
      <PageStructuredData graph={graph} />
      {children}
    </>
  );
}
