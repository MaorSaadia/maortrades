import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = {
  title: "Collections",
  description: "Future MaorTrades book collections and reading paths.",
};

export default function CollectionsPage() {
  return (
    <PlaceholderPage
      eyebrow="Collections"
      title="Grouped reading paths will be organized here."
      description="This page is reserved for future bundles, series collections, and complete-library paths."
      detail="Collection data already exists as a typed placeholder, without commerce or checkout logic."
    />
  );
}
