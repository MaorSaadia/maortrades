import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/sections/placeholder-page";
import { books } from "@/data/books";

type BookPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return books.map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = books.find((item) => item.slug === slug);

  return {
    title: book ? book.title : "Book",
    description: book?.shortDescription ?? "Future MaorTrades book detail page.",
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = books.find((item) => item.slug === slug);

  return (
    <PlaceholderPage
      eyebrow="Book Detail"
      title={book?.title ?? "Book page architecture"}
      description={
        book?.shortDescription ??
        "This dynamic route is prepared for future book detail pages."
      }
      detail={`Route slug: ${slug}. Full product content, previews, commerce state, and fulfilment details will be added later.`}
    />
  );
}
