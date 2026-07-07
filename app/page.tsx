import type { Metadata } from "next";
import { ArticlesPreview } from "@/components/home/articles-preview";
import { BrandPillars } from "@/components/home/brand-pillars";
import { CollectionsPreview } from "@/components/home/collections-preview";
import { FeaturedBooksSection } from "@/components/home/featured-books-section";
import { FlagshipSeriesSection } from "@/components/home/flagship-series-section";
import { HeroSection } from "@/components/home/hero-section";
import { LearningPathSection } from "@/components/home/learning-path-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { PhilosophySection } from "@/components/home/philosophy-section";
import { StartHereSection } from "@/components/home/start-here-section";

export const metadata: Metadata = {
  title: "MaorTrades | Trading Books & Education by Maor Saadia",
  description:
    "Trading books and educational frameworks covering day trading, Smart Money Concepts, ICT models, market structure, risk management, and trading psychology.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandPillars />
      <LearningPathSection />
      <FlagshipSeriesSection />
      <FeaturedBooksSection />
      <PhilosophySection />
      <CollectionsPreview />
      <StartHereSection />
      <ArticlesPreview />
      <NewsletterSection />
    </>
  );
}
