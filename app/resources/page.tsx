import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = {
  title: "Resources",
  description: "Future MaorTrades free resources and downloadable frameworks.",
};

export default function ResourcesPage() {
  return (
    <PlaceholderPage
      eyebrow="Resources"
      title="Free trading resources will be collected here."
      description="A future home for checklists, guides, downloadable frameworks, and educational tools."
      detail="Resource downloads, email capture, and analytics are intentionally not implemented."
    />
  );
}
