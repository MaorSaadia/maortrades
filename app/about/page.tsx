import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = {
  title: "About",
  description: "About Maor Saadia and the MaorTrades education platform.",
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      eyebrow="About"
      title="Maor Saadia is the author and creator behind MaorTrades."
      description="This route will later tell the story of the platform, the publishing approach, and the professional trading education philosophy."
      detail="Author biography, contact details, and external author links are planned for a later phase."
    />
  );
}
