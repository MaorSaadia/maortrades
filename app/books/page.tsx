import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = {
  title: "Books",
  description: "The future MaorTrades trading book catalogue.",
};

export default function BooksPage() {
  return (
    <PlaceholderPage
      eyebrow="Books"
      title="The MaorTrades book catalogue will live here."
      description="A future home for original PDF trading books, series, formats, levels, and professional reading paths."
      detail="Catalogue cards, filters, product states, and purchase CTAs will be added when the commerce layer is ready."
    />
  );
}
