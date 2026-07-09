import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AuthorSection } from "@/components/books/author-section";
import { BookBreadcrumbs } from "@/components/books/book-breadcrumbs";
import { BookHero } from "@/components/books/book-hero";
import { BookKeyTopics } from "@/components/books/book-key-topics";
import { BookLearnings } from "@/components/books/book-learnings";
import { BookMetadataStrip } from "@/components/books/book-metadata-strip";
import { BookPreview } from "@/components/books/book-preview";
import { BookResourceRecommendation } from "@/components/books/book-resource-recommendation";
import { BookStructure } from "@/components/books/book-structure";
import { FinalBookCTA } from "@/components/books/final-book-cta";
import { ReaderProfile } from "@/components/books/reader-profile";
import { ReadingPath } from "@/components/books/reading-path";
import { RelatedBooks } from "@/components/books/related-books";
import { SeriesNavigation } from "@/components/books/series-navigation";
import { books, getBookBySlug } from "@/data/books";

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
  const book = getBookBySlug(slug);

  if (!book) {
    return {
      title: "Book Not Found",
    };
  }

  return {
    title: book.seo.title,
    description: book.seo.description,
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  return (
    <>
      <BookBreadcrumbs book={book} />
      <BookHero book={book} />
      <BookMetadataStrip book={book} />
      <BookLearnings book={book} />
      <BookKeyTopics book={book} />
      <BookStructure book={book} />
      <ReaderProfile book={book} />
      <BookPreview book={book} />
      <ReadingPath book={book} />
      <BookResourceRecommendation book={book} />
      <SeriesNavigation book={book} />
      <AuthorSection />
      <RelatedBooks book={book} />
      <FinalBookCTA book={book} />
    </>
  );
}
