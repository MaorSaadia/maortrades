import type { Metadata } from "next";
import Link from "next/link";
import { CollectionCoverComposition } from "@/components/collections/collection-cover-composition";
import { CollectionStartCTA } from "@/components/collections/collection-start-cta";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  collections,
  getBooksForCollection,
  getCollectionBySlug,
} from "@/data/collections";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore MaorTrades curated learning paths for trading foundations, Smart Money Concepts, ICT execution, the flagship Institutional Operator series, and the complete library.",
};

const overviewSlugs = [
  "trading-foundations",
  "smart-money-and-ict",
  "the-institutional-operator",
  "complete-maortrades-library",
];

const pathConcepts = [
  "Trading Foundations",
  "Smart Money & ICT",
  "Advanced Execution",
  "Institutional Operator",
];

const collectionTone: Record<string, string> = {
  "trading-foundations": "bg-background",
  "smart-money-and-ict": "bg-surface",
  "the-institutional-operator": "border-navy bg-navy text-ivory",
  "complete-maortrades-library": "bg-background lg:col-span-2",
};

export default function CollectionsPage() {
  const overviewCollections = overviewSlugs
    .map((slug) => getCollectionBySlug(slug))
    .filter((collection): collection is (typeof collections)[number] =>
      Boolean(collection),
    );
  const flagshipCollection = getCollectionBySlug("the-institutional-operator");
  const completeCollection = getCollectionBySlug("complete-maortrades-library");
  const flagshipBooks = flagshipCollection
    ? getBooksForCollection(flagshipCollection)
    : [];
  const completeBooks = completeCollection
    ? getBooksForCollection(completeCollection)
    : [];

  return (
    <>
      <Section className="border-b border-border py-0">
        <Container className="grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <Eyebrow>Curated Learning Paths</Eyebrow>
            <h1 className="display-lg mt-5 max-w-4xl break-words text-navy">
              CHOOSE THE PATH THAT MATCHES YOUR DEVELOPMENT.
            </h1>
            <p className="body-lg mt-7 max-w-3xl text-muted-foreground">
              The MaorTrades library is organized around clear learning
              objectives, from market foundations and Smart Money Concepts to
              advanced execution, risk architecture, and professional discipline.
            </p>
          </div>
          <aside className="border-l border-gold pl-6">
            <p className="heading-sm text-navy">
              You do not need every book at once. Start with the path that
              matches where you are now and where you are trying to go next.
            </p>
          </aside>
        </Container>
      </Section>

      <Section surface="surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <SectionHeader
              eyebrow="A Structured Approach"
              title="BOOKS SHOULD CONNECT."
              description="Trading education is often consumed in fragments. One concept leads to another definition, another setup, and another disconnected piece of information."
            />
            <div>
              <p className="body-lg text-muted-foreground">
                MaorTrades Collections organize books around specific learning
                objectives so readers can move through related material with
                context and progression.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Start with context",
                  "Build the framework",
                  "Deepen the reference",
                  "Refine execution",
                  "Develop the operator",
                ].map((principle) => (
                  <li
                    key={principle}
                    className="label border border-border bg-background px-4 py-3 text-navy"
                  >
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Collection Overview"
            title="FOUR WAYS THROUGH THE LIBRARY"
            description="Each collection groups real books around a distinct educational purpose."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {overviewCollections.map((collection) => {
              const books = getBooksForCollection(collection);
              const isDark = collection.slug === "the-institutional-operator";
              return (
                <article
                  key={collection.id}
                  className={cn(
                    "grid gap-6 border border-border p-5 shadow-refined",
                    collectionTone[collection.slug],
                  )}
                >
                  <div className="grid gap-6 sm:grid-cols-[1fr_0.72fr] sm:items-start">
                    <div>
                      <p className="label text-gold">{collection.eyebrow}</p>
                      <h2
                        className={cn(
                          "heading-md mt-4 break-words",
                          isDark ? "text-ivory" : "text-navy",
                        )}
                      >
                        {collection.title}
                      </h2>
                      <p
                        className={cn(
                          "body-sm mt-4",
                          isDark ? "text-ivory/70" : "text-muted-foreground",
                        )}
                      >
                        {collection.shortDescription}
                      </p>
                    </div>
                    <CollectionCoverComposition
                      books={books}
                      variant={
                        collection.slug === "complete-maortrades-library"
                          ? "library"
                          : collection.slug === "the-institutional-operator"
                            ? "flagship"
                            : "default"
                      }
                    />
                  </div>
                  <div
                    className={cn(
                      "grid gap-5 border-t pt-5",
                      isDark ? "border-ivory/15" : "border-border",
                    )}
                  >
                    <div>
                      <p
                        className={cn(
                          "label",
                          isDark ? "text-ivory/55" : "text-muted-foreground",
                        )}
                      >
                        {books.length} {books.length === 1 ? "Book" : "Books"}
                      </p>
                      <ul className="mt-3 grid gap-2">
                        {books.slice(0, 4).map((book) => (
                          <li
                            key={book.id}
                            className={cn(
                              "body-sm",
                              isDark ? "text-ivory/76" : "text-muted-foreground",
                            )}
                          >
                            {book.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <p className="label text-gold">
                        {(collection.learningProgression ?? [])
                          .slice(0, 4)
                          .join(" / ")}
                      </p>
                      <Link
                        href={`/collections/${collection.slug}`}
                        className={cn(
                          "label transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
                          isDark
                            ? "text-gold hover:text-ivory"
                            : "text-navy hover:text-gold",
                        )}
                      >
                        Explore Collection
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section surface="muted">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <SectionHeader
              eyebrow="How the Paths Connect"
              title="FROM FIRST PRINCIPLES TO PROFESSIONAL DEVELOPMENT."
              description="The map below shows educational movement through the catalogue. It does not imply every reader needs every collection."
            />
            <div>
              <ol className="grid gap-3 md:grid-cols-4">
                {pathConcepts.map((stage, index) => (
                  <li key={stage} className="border border-border bg-background p-5">
                    <p className="label text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="label mt-5 text-navy">{stage}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="border-l border-gold bg-background p-5">
                  <p className="label text-gold">Performance Track</p>
                  <p className="body-sm mt-2 text-muted-foreground">
                    The Disciplined Edge supports the psychology and discipline
                    layer wherever behavior becomes the limiting factor.
                  </p>
                </div>
                <div className="border-l border-gold bg-background p-5">
                  <p className="label text-gold">Complete Library</p>
                  <p className="body-sm mt-2 text-muted-foreground">
                    The complete library gives access to the full ecosystem
                    without forcing one fixed reading sequence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {flagshipCollection ? (
        <Section surface="dark">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
              <div>
                <Eyebrow className="text-gold">
                  {flagshipCollection.eyebrow}
                </Eyebrow>
                <h2 className="display-lg mt-5 break-words text-ivory">
                  THE INSTITUTIONAL OPERATOR COLLECTION
                </h2>
                <p className="body-lg mt-6 max-w-2xl text-ivory/72">
                  Volume 1 develops foundations, framework, and advanced models.
                  Volume 2 extends the system into advanced execution, risk,
                  psychology, and identity.
                </p>
                <div className="mt-8">
                  <Button
                    href="/collections/the-institutional-operator"
                    variant="gold"
                  >
                    Explore the Flagship Series
                  </Button>
                </div>
              </div>
              <div className="grid gap-6">
                <CollectionCoverComposition
                  books={flagshipBooks}
                  variant="flagship"
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border border-ivory/15 bg-surface-dark p-5">
                    <p className="label text-gold">Volume 01</p>
                    <p className="body-sm mt-3 text-ivory/70">
                      Foundations / Framework / Advanced Models
                    </p>
                  </div>
                  <div className="border border-ivory/15 bg-surface-dark p-5">
                    <p className="label text-gold">Volume 02</p>
                    <p className="body-sm mt-3 text-ivory/70">
                      Advanced Execution / Risk / Psychology / Identity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {completeCollection ? (
        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <Eyebrow>{completeCollection.eyebrow}</Eyebrow>
                <h2 className="display-lg mt-5 break-words text-navy">
                  THE COMPLETE MAORTRADES LIBRARY
                </h2>
                <p className="body-lg mt-6 max-w-2xl text-muted-foreground">
                  The full catalogue connects beginner market foundations, Smart
                  Money Concepts, ICT frameworks, advanced execution, risk
                  management, trading psychology, and professional identity.
                </p>
                <div className="mt-8">
                  <Button href="/collections/complete-maortrades-library" variant="outline">
                    Explore the Complete Library
                  </Button>
                </div>
              </div>
              <CollectionCoverComposition books={completeBooks} variant="library" />
            </div>
          </Container>
        </Section>
      ) : null}

      <CollectionStartCTA />
    </>
  );
}
