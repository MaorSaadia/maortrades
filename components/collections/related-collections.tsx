import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import { getCollectionsBySlugs } from "@/data/collections";
import type { Collection } from "@/types/collection";

type RelatedCollectionsProps = {
  collection: Collection;
};

export function RelatedCollections({ collection }: RelatedCollectionsProps) {
  const relatedCollections = getCollectionsBySlugs(
    collection.relatedCollectionSlugs ?? [],
  );

  if (!relatedCollections.length) {
    return null;
  }

  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Related Collections"
          title="CONTINUE THROUGH THE LIBRARY"
          description="These paths connect naturally to the collection you are viewing."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {relatedCollections.map((relatedCollection) => (
            <Link
              key={relatedCollection.id}
              href={`/collections/${relatedCollection.slug}`}
              className="group border border-border bg-surface p-5 shadow-refined transition-colors hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <p className="label text-gold">{relatedCollection.eyebrow}</p>
              <h3 className="heading-sm mt-4 break-words text-navy">
                {relatedCollection.title}
              </h3>
              <p className="body-sm mt-4 text-muted-foreground">
                {relatedCollection.shortDescription}
              </p>
              <p className="label mt-6 text-navy transition-colors group-hover:text-gold">
                Explore Collection
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
