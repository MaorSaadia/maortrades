import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = {
  title: "Start Here",
  description: "Future MaorTrades reading-path recommendations.",
};

export default function StartHerePage() {
  return (
    <PlaceholderPage
      eyebrow="Start Here"
      title="Reading-path recommendations will start here."
      description="A future guide for choosing the right MaorTrades books, frameworks, and resources by experience level."
      detail="No assessment, personalization, or external service is connected in this phase."
    />
  );
}
