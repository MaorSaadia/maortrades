import type { Metadata } from "next";
import { BookCategorySection } from "@/components/books/book-category-section";
import { FlagshipCatalogueSection } from "@/components/books/flagship-catalogue-section";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { bookCategories } from "@/data/book-categories";
import { books } from "@/data/books";

export const metadata: Metadata = {
  title: "Trading Books | MaorTrades by Maor Saadia",
  description:
    "Explore trading books by Maor Saadia covering day trading, Smart Money Concepts, ICT trading models, market structure, execution, risk management, funded trading, and trading psychology.",
};

const standardCategories = bookCategories.filter(
  (category) => category.id !== "flagship-series",
);

const flagshipCategory = bookCategories.find(
  (category) => category.id === "flagship-series",
);

export default function BooksPage() {
  return (
    <>
      <Section className="border-b border-border py-0">
        <Container className="grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <Eyebrow>The MaorTrades Library</Eyebrow>
            <h1 className="display-lg mt-5 max-w-4xl text-navy">
              BOOKS FOR EVERY STAGE OF THE TRADING JOURNEY.
            </h1>
            <p className="body-lg mt-7 max-w-3xl text-muted-foreground">
              Explore a structured collection of trading books covering market
              foundations, Smart Money Concepts, advanced ICT models, execution,
              risk management, trading psychology, and professional development.
            </p>
          </div>
          <aside className="border-l border-gold pl-6">
            <p className="heading-sm text-navy">
              Start with the fundamentals. Build the framework. Refine execution.
              Develop the discipline to operate professionally.
            </p>
          </aside>
        </Container>
      </Section>

      <Section surface="surface" className="border-b border-border py-10 md:py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="label text-gold">Library Introduction</p>
              <p className="body mt-4 max-w-xl text-muted-foreground">
                The MaorTrades catalogue is organized as a publishing library, not
                a noisy storefront. Each book has a role in the reader&apos;s
                progression from foundations to professional execution.
              </p>
            </div>
            <nav aria-label="Book categories">
              <ul className="flex flex-wrap gap-3">
                {bookCategories.map((category) => (
                  <li key={category.id}>
                    <a
                      href={`#${category.id}`}
                      className="label inline-flex min-h-10 items-center border border-border bg-background px-3 text-navy transition-colors hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    >
                      {category.navLabel}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </Section>

      <div>
        {standardCategories.map((category, index) => (
          <BookCategorySection
            key={category.id}
            category={category}
            books={books.filter((book) => category.bookSlugs.includes(book.slug))}
            surface={index % 2 === 0 ? "default" : "surface"}
          />
        ))}
      </div>

      {flagshipCategory ? (
        <FlagshipCatalogueSection
          category={flagshipCategory}
          books={books.filter((book) => flagshipCategory.bookSlugs.includes(book.slug))}
        />
      ) : null}

      <Section>
        <Container>
          <div className="grid gap-8 border-y border-border py-14 md:grid-cols-[1fr_auto] md:items-center md:py-16">
            <SectionHeader
              eyebrow="Not Sure Which Book to Read First?"
              title="FIND YOUR STARTING POINT."
              description="Choose your path based on your current experience, trading knowledge, and development goals."
            />
            <Button href="/start-here" variant="outline">
              Start Here
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
