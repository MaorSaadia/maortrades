import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = {
  title: "Collections",
  description: "MaorTrades book collections and reading paths.",
};

export default function CollectionsPage() {
  return (
    <PlaceholderPage
      eyebrow="Collections"
      title="Grouped reading paths will be organized here."
      description="This page is reserved for bundles, series collections, and complete-library paths."
      detail="Collection data is already organized for the catalogue, without commerce or checkout logic."
    />
  );
}
