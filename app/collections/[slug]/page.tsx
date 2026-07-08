import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionAudience } from "@/components/collections/collection-audience";
import { CollectionBreadcrumbs } from "@/components/collections/collection-breadcrumbs";
import { CollectionDevelopment } from "@/components/collections/collection-development";
import { CollectionHero } from "@/components/collections/collection-hero";
import { CollectionPositioning } from "@/components/collections/collection-positioning";
import { CollectionProgression } from "@/components/collections/collection-progression";
import { CollectionStartCTA } from "@/components/collections/collection-start-cta";
import { CompleteLibraryGroups } from "@/components/collections/complete-library-groups";
import { IncludedBooks } from "@/components/collections/included-books";
import { ReadingOrder } from "@/components/collections/reading-order";
import { RelatedCollections } from "@/components/collections/related-collections";
import {
  collections,
  getBooksForCollection,
  getCollectionBySlug,
  getRecommendedBooksForCollection,
} from "@/data/collections";

type CollectionPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return {
      title: "Collection Not Found",
    };
  }

  return {
    title: collection.seo.title,
    description: collection.seo.description,
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const books = getBooksForCollection(collection);
  const recommendedBooks = getRecommendedBooksForCollection(collection);

  return (
    <>
      <CollectionBreadcrumbs collection={collection} />
      <CollectionHero collection={collection} books={books} />
      <CollectionPositioning collection={collection} />
      <IncludedBooks collection={collection} books={books} />
      <ReadingOrder
        collection={collection}
        recommendedBooks={recommendedBooks}
      />
      <CollectionDevelopment collection={collection} />
      <CollectionAudience collection={collection} />
      <CollectionProgression collection={collection} />
      <CompleteLibraryGroups collection={collection} />
      <RelatedCollections collection={collection} />
      <CollectionStartCTA />
    </>
  );
}
