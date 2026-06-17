import type { Metadata } from "next";
import { buildRatgeberHubMetadata } from "@/lib/ratgeber-seo";

export const metadata: Metadata = buildRatgeberHubMetadata();

export default function RatgeberLayout({ children }: { children: React.ReactNode }) {
  return children;
}
