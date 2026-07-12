import { TrackedLink } from "@/components/analytics/TrackedLink";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";
import { getCollectionBySlug } from "@/data/collections";

const previewSlugs = [
  "trading-foundations",
  "smart-money-and-ict",
  "complete-maortrades-library",
];

export function CollectionsPreview() {
  const previewCollections = previewSlugs
    .map((slug) => getCollectionBySlug(slug))
    .filter((collection): collection is NonNullable<typeof collection> =>
      Boolean(collection),
    );

  return (
    <Section surface="muted">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Reading Collections"
            title="CURATED COLLECTIONS"
            description="Explore books grouped by experience, trading focus, and professional development."
          />
          <Button href="/collections" variant="outline" className="md:mb-1">
            View Collections
          </Button>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {previewCollections.map((collection, index) => (
            <article
              key={collection.id}
              className="group flex min-h-80 flex-col justify-between border border-border bg-background p-6 transition-colors hover:border-gold"
            >
              <div>
                <div className="flex items-center justify-between gap-6">
                  <p className="label text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="h-px flex-1 bg-gold/35" aria-hidden="true" />
                </div>
                <h3 className="heading-md mt-8 text-navy">{collection.title}</h3>
                {collection.subtitle ? (
                  <p className="body-sm mt-4 text-muted-foreground">
                    {collection.subtitle}
                  </p>
                ) : null}
              </div>
              <div className="mt-10">
                <p className="body-sm text-muted-foreground">
                  {collection.shortDescription}
                </p>
                <TrackedLink
                  href={`/collections/${collection.slug}`}
                  event={{ name: "select_catalogue_item", item_list_id: "homepage_collections", item_list_name: "Homepage collections", source: "homepage", items: [{ itemId: `collection:${collection.slug}`, itemName: collection.title, itemType: "collection", category: collection.badge ?? "collection", quantity: 1 }] }}
                  className="label mt-6 inline-flex text-navy transition-colors group-hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  Explore Collection
                </TrackedLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
