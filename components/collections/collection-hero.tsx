import { CollectionCoverComposition } from "@/components/collections/collection-cover-composition";
import { CollectionPurchasePanel } from "@/components/collections/collection-purchase-panel";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import type { Book } from "@/types/book";
import type { Collection } from "@/types/collection";

type CollectionHeroProps = {
  collection: Collection;
  books: Book[];
};

export function CollectionHero({ collection, books }: CollectionHeroProps) {
  const isFlagship = collection.slug === "the-institutional-operator";
  const isLibrary = collection.slug === "complete-maortrades-library";

  return (
    <Section
      surface={isFlagship ? "dark" : "default"}
      className="border-b border-border"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <article>
            <Eyebrow className={isFlagship ? "text-gold" : undefined}>
              {collection.eyebrow}
            </Eyebrow>
            {collection.badge ? (
              <p className="label mt-4 inline-flex border border-gold/35 px-3 py-1 text-gold">
                {collection.badge}
              </p>
            ) : null}
            <h1
              className={
                isFlagship
                  ? "display-lg mt-5 break-words text-ivory"
                  : "display-lg mt-5 break-words text-navy"
              }
            >
              {collection.title}
            </h1>
            {collection.subtitle ? (
              <p className={isFlagship ? "heading-sm mt-5 text-ivory/82" : "heading-sm mt-5 text-foreground"}>
                {collection.subtitle}
              </p>
            ) : null}
            <p className={isFlagship ? "body-lg mt-7 max-w-3xl text-ivory/72" : "body-lg mt-7 max-w-3xl text-muted-foreground"}>
              {collection.shortDescription}
            </p>
            <p className={isFlagship ? "body mt-5 max-w-3xl text-ivory/66" : "body mt-5 max-w-3xl text-muted-foreground"}>
              {collection.fullDescription}
            </p>

            <dl className={isFlagship ? "mt-8 grid gap-5 border-y border-ivory/15 py-6 sm:grid-cols-3" : "mt-8 grid gap-5 border-y border-border py-6 sm:grid-cols-3"}>
              <div>
                <dt className={isFlagship ? "label text-ivory/55" : "label text-muted-foreground"}>Books</dt>
                <dd className={isFlagship ? "body-sm mt-1 text-ivory" : "body-sm mt-1 text-navy"}>{books.length}</dd>
              </div>
              <div>
                <dt className={isFlagship ? "label text-ivory/55" : "label text-muted-foreground"}>Path</dt>
                <dd className={isFlagship ? "body-sm mt-1 text-ivory" : "body-sm mt-1 text-navy"}>Curated Collection</dd>
              </div>
              <div>
                <dt className={isFlagship ? "label text-ivory/55" : "label text-muted-foreground"}>Commerce</dt>
                <dd className={isFlagship ? "body-sm mt-1 text-ivory" : "body-sm mt-1 text-navy"}>Lemon Squeezy checkout</dd>
              </div>
            </dl>
          </article>

          <div className="grid gap-6">
            <CollectionCoverComposition
              books={books}
              priority
              variant={isLibrary ? "library" : isFlagship ? "flagship" : "default"}
            />
            <CollectionPurchasePanel
              collection={collection}
              includedBookCount={books.length}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
