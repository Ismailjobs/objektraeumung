export const dynamic = "force-static";

import nextDynamic from "next/dynamic";
import { DEFAULT_META_DESCRIPTION, DEFAULT_META_TITLE, SITE_URL } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { buildWebPageNode } from "@/lib/schema";
import { PageStructuredData } from "@/components/PageStructuredData";
import { Hero } from "@/components/Hero";

const HeroGoogleReviews = nextDynamic(
  () => import("@/components/HeroGoogleReviews").then((m) => m.HeroGoogleReviews),
  { loading: () => <section className="min-h-[120px] bg-navy/90" aria-hidden /> }
);

const TrustBar = nextDynamic(
  () => import("@/components/TrustBar").then((m) => m.TrustBar),
  { loading: () => <div className="h-14 bg-white" aria-hidden /> }
);

const BrandPromiseSection = nextDynamic(
  () => import("@/components/BrandPromiseSection").then((m) => m.BrandPromiseSection),
  { loading: () => <section className="min-h-[200px] bg-navy" aria-hidden /> }
);

const HomeAboutSection = nextDynamic(
  () => import("@/components/HomeAboutSection").then((m) => m.HomeAboutSection),
  { loading: () => <section className="min-h-[280px] bg-[#f5f4f1]" aria-hidden /> }
);

const Services = nextDynamic(
  () => import("@/components/Services").then((m) => m.Services),
  { loading: () => <section className="min-h-[320px] bg-white" aria-hidden /> }
);

const HowItWorksSection = nextDynamic(
  () => import("@/components/HowItWorksSection").then((m) => m.HowItWorksSection),
  { loading: () => <section className="min-h-[380px] bg-white" aria-hidden /> }
);

const ReviewsCarousel = nextDynamic(
  () => import("@/components/ReviewsCarousel").then((m) => m.ReviewsCarousel),
  { ssr: false, loading: () => <section className="min-h-[280px] bg-navy" aria-hidden /> }
);

const DistrictsSeo = nextDynamic(
  () => import("@/components/DistrictsSeo").then((m) => m.DistrictsSeo),
  { ssr: false, loading: () => <section className="min-h-[120px]" aria-hidden /> }
);

const HomeFaqSection = nextDynamic(
  () => import("@/components/HomeFaqSection").then((m) => m.HomeFaqSection),
  { ssr: false, loading: () => <section className="min-h-[200px] bg-white" aria-hidden /> }
);

const ContactSection = nextDynamic(
  () => import("@/components/ContactSection").then((m) => m.ContactSection),
  { ssr: false, loading: () => <section id="contact" className="min-h-[400px] bg-navy" aria-hidden /> }
);

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  return buildMetadata({
    title: DEFAULT_META_TITLE,
    description: DEFAULT_META_DESCRIPTION,
    canonicalPath: "/",
    locale: "at",
  });
}

export default async function HomePage() {
  return (
    <>
      <PageStructuredData
        graph={[
          buildWebPageNode({
            url: SITE_URL,
            name: DEFAULT_META_TITLE,
            description: DEFAULT_META_DESCRIPTION,
            idSuffix: "#homepage",
          }),
        ]}
      />
      <Hero />
      <HeroGoogleReviews />
      <TrustBar />
      <BrandPromiseSection />
      <HomeAboutSection />
      <Services />
      <HowItWorksSection />
      <ReviewsCarousel />
      <DistrictsSeo />
      <HomeFaqSection />
      <ContactSection />
    </>
  );
}
