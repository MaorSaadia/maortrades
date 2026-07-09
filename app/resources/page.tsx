import type { Metadata } from "next";
import { ResourcesLanding } from "@/components/resources/resources-landing";
import { absoluteUrl } from "@/lib/site-url";

const title = "Free Trading Resources | Checklists & Guides | MaorTrades";
const description =
  "Explore free MaorTrades trading resources including ICT checklists, Smart Money reference sheets, trading discipline tools, and daily preparation worksheets.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: absoluteUrl("/resources"),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/resources"),
    type: "website",
  },
};

export default function ResourcesPage() {
  return <ResourcesLanding />;
}
