import type { Metadata } from "next";
import { AboutFinalCTA } from "@/components/about/about-final-cta";
import { AboutHero } from "@/components/about/about-hero";
import { AuthorProfile } from "@/components/about/author-profile";
import { BrandPrinciples } from "@/components/about/brand-principles";
import { BrandStory } from "@/components/about/brand-story";
import { ConnectedLibrary } from "@/components/about/connected-library";
import { FlagshipWork } from "@/components/about/flagship-work";
import { FragmentationSection } from "@/components/about/fragmentation-section";
import { FutureDirection } from "@/components/about/future-direction";
import { MaorTradesApproach } from "@/components/about/maor-trades-approach";

export const metadata: Metadata = {
  title: "About Maor Saadia & MaorTrades | Trading Books and Education",
  description:
    "Learn about Maor Saadia, the creator of MaorTrades, and the philosophy behind a structured library of trading books covering day trading, Smart Money Concepts, ICT frameworks, execution, risk, and trading psychology.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BrandStory />
      <FragmentationSection />
      <MaorTradesApproach />
      <BrandPrinciples />
      <ConnectedLibrary />
      <AuthorProfile />
      <FlagshipWork />
      <FutureDirection />
      <AboutFinalCTA />
    </>
  );
}
