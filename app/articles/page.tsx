import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = {
  title: "Articles",
  description: "Future MaorTrades educational articles and SEO content.",
};

export default function ArticlesPage() {
  return (
    <PlaceholderPage
      eyebrow="Articles"
      title="Educational articles will be published here."
      description="A future editorial area for market structure, liquidity, risk, execution, and trading psychology content."
      detail="No CMS, database, or external content API has been added."
    />
  );
}
