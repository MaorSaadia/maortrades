import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { BookCover } from "@/components/books/book-cover";
import { CollectionCoverComposition } from "@/components/collections/collection-cover-composition";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { getBooksBySlugs } from "@/data/books";
import { getBooksForCollection, getCollectionBySlug } from "@/data/collections";
import {
  comparisonEntries,
  detailedPaths,
  quickRecommendations,
  readerSituations,
  resolveRecommendationTarget,
  type RecommendationTarget,
} from "@/data/start-here";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Start Here | Find the Right Trading Book | MaorTrades",
  description:
    "Find the right MaorTrades book or collection based on your experience with day trading, Smart Money Concepts, ICT models, execution, risk, and trading psychology.",
};

const heroStages = [
  "Foundations",
  "Smart Money",
  "Advanced Execution",
  "Professional Operator",
];

const technicalExecutionBullets = [
  "Model selection",
  "Sequencing",
  "Confirmation",
  "Invalidation",
  "Targeting",
  "Execution structure",
];

const disciplineBullets = [
  "Fear",
  "Impatience",
  "FOMO",
  "Overtrading",
  "Rule breaking",
  "Self-trust",
];

function TargetLink({
  target,
  children,
  className,
}: {
  target: RecommendationTarget;
  children?: React.ReactNode;
  className?: string;
}) {
  const resolved = resolveRecommendationTarget(target);

  return (
    <TrackedLink
      href={resolved.href}
      event={{ name: "start_here_recommendation_selected", recommendation_type: "editorial_link", target_type: resolved.type, target_slug: resolved.slug }}
      className={cn(
        "transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
        className,
      )}
    >
      {children ?? resolved.label}
    </TrackedLink>
  );
}

function RecommendationSummary({ target }: { target: RecommendationTarget }) {
  const resolved = resolveRecommendationTarget(target);

  return (
    <div className="border-l border-gold pl-4">
      <p className="label text-muted-foreground">
        {resolved.type === "book" ? "Book" : "Collection"}
      </p>
      <TargetLink target={target} className="heading-sm mt-2 block text-navy hover:text-gold">
        {resolved.label}
      </TargetLink>
      <p className="body-sm mt-2 text-muted-foreground">{resolved.description}</p>
    </div>
  );
}

export default function StartHerePage() {
  const flagshipCollection = getCollectionBySlug("the-institutional-operator");
  const completeCollection = getCollectionBySlug("complete-maortrades-library");
  const operatorBooks = flagshipCollection
    ? getBooksForCollection(flagshipCollection)
    : [];
  const executionBook = resolveRecommendationTarget({
    type: "book",
    slug: "the-ict-playbook",
  });
  const disciplineBook = resolveRecommendationTarget({
    type: "book",
    slug: "the-disciplined-edge",
  });
  const foundationPathBooks = getBooksBySlugs([
    "day-trading-for-absolute-beginners",
    "smart-money-simplified",
    "the-ict-playbook",
  ]);

  return (
    <>
      <Section className="border-b border-border py-0">
        <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div>
            <Eyebrow>Start Here</Eyebrow>
            <h1 className="display-lg mt-5 max-w-4xl break-words text-navy">
              FIND THE RIGHT PLACE TO BEGIN.
            </h1>
            <p className="body-lg mt-7 max-w-3xl text-muted-foreground">
              The MaorTrades library covers market foundations, Smart Money
              Concepts, advanced ICT models, execution, risk, psychology, and
              professional development.
            </p>
            <p className="body mt-5 max-w-3xl text-muted-foreground">
              You do not need to start with every book. Choose the path that
              matches what you understand now and what you need to develop next.
            </p>
            <p className="heading-sm mt-8 max-w-3xl text-navy">
              The best next book is not always the most advanced one. It is the
              one that solves the gap currently limiting your development.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#recommendations">Find Your Path</Button>
              <Button href="/books" variant="outline">
                Browse All Books
              </Button>
            </div>
          </div>
          <aside className="border border-border bg-surface p-5 shadow-refined">
            <p className="label text-gold">Library Map</p>
            <ol className="mt-5 grid gap-3">
              {heroStages.map((stage, index) => (
                <li key={stage} className="grid grid-cols-[2.5rem_1fr] gap-4">
                  <p className="label text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="label border-b border-border pb-3 text-navy">
                    {stage}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-6 border-l border-gold bg-background p-4">
              <p className="label text-gold">Discipline & Performance</p>
              <p className="body-sm mt-2 text-muted-foreground">
                A specialized track for the behavior layer that shapes execution
                quality.
              </p>
            </div>
          </aside>
        </Container>
      </Section>

      <Section id="recommendations">
        <Container>
          <SectionHeader
            eyebrow="Your Current Position"
            title="WHICH OF THESE SOUNDS MOST LIKE YOU?"
            description="Use the situation that best describes your current gap. This is editorial guidance, not a financial assessment or personalized advice."
          />
          <div className="mt-10 grid gap-5">
            {readerSituations.map((situation, index) => (
              <article
                key={situation.id}
                className="grid gap-6 border border-border bg-surface p-5 shadow-refined lg:grid-cols-[0.55fr_1fr]"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="label text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="label border border-border px-2 py-1 text-muted-foreground">
                      {situation.stage}
                    </p>
                  </div>
                  <h2 className="heading-sm mt-5 break-words text-navy">
                    {situation.statement}
                  </h2>
                  <p className="body-sm mt-4 text-muted-foreground">
                    {situation.description}
                  </p>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="border-l border-gold pl-4">
                    <p className="label text-gold">Primary Recommendation</p>
                    <RecommendationSummary target={situation.primary} />
                  </div>
                  {situation.secondary ? (
                    <div className="border-l border-border pl-4">
                      <p className="label text-muted-foreground">
                        {situation.id === "execution-needs-structure"
                          ? "Broader Advanced Path"
                          : "Secondary Path"}
                      </p>
                      <RecommendationSummary target={situation.secondary} />
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section surface="muted">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr]">
            <SectionHeader
              eyebrow="The Simple Version"
              title="START WITH THE GAP YOU NEED TO CLOSE."
              description="A compact map of the most common starting points."
            />
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {quickRecommendations.map((item) => {
                const resolved = resolveRecommendationTarget(item.target);
                return (
                  <Link
                    key={item.label}
                    href={resolved.href}
                    className="group border border-border bg-background p-5 transition-colors hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    <p className="label text-gold">{item.label}</p>
                    <p className="heading-sm mt-4 text-navy transition-colors group-hover:text-gold">
                      {resolved.label}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {detailedPaths.map((path) => {
        const isDark = path.surface === "dark";
        return (
          <Section key={path.eyebrow} surface={isDark ? "dark" : "default"}>
            <Container>
              <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
                <div>
                  <Eyebrow className={isDark ? "text-gold" : undefined}>
                    {path.eyebrow}
                  </Eyebrow>
                  <h2
                    className={cn(
                      "heading-lg mt-4 break-words",
                      isDark ? "text-ivory" : "text-navy",
                    )}
                  >
                    {path.title.toUpperCase()}
                  </h2>
                  <p
                    className={cn(
                      "body-lg mt-5",
                      isDark ? "text-ivory/72" : "text-muted-foreground",
                    )}
                  >
                    {path.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button
                      href={resolveRecommendationTarget(path.primaryCta.target).href}
                      variant={isDark ? "gold" : "primary"}
                    >
                      {path.primaryCta.label}
                    </Button>
                    {path.secondaryCta ? (
                      <Button
                        href={resolveRecommendationTarget(path.secondaryCta.target).href}
                        variant="outline"
                        className={
                          isDark
                            ? "border-ivory/30 text-ivory hover:bg-ivory hover:text-navy"
                            : undefined
                        }
                      >
                        {path.secondaryCta.label}
                      </Button>
                    ) : null}
                  </div>
                </div>
                <ol className="grid gap-4">
                  {path.steps.map((step, index) => {
                    const resolved = resolveRecommendationTarget(step.target);
                    return (
                      <li
                        key={resolved.slug}
                        className={cn(
                          "grid gap-5 border p-5 md:grid-cols-[5rem_1fr]",
                          isDark
                            ? "border-ivory/15 bg-surface-dark"
                            : "border-border bg-surface",
                        )}
                      >
                        <p className="label text-gold">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <div>
                          <TargetLink
                            target={step.target}
                            className={cn(
                              "heading-sm block",
                              isDark
                                ? "text-ivory hover:text-gold"
                                : "text-navy hover:text-gold",
                            )}
                          >
                            {resolved.label}
                          </TargetLink>
                          <p
                            className={cn(
                              "body-sm mt-3",
                              isDark ? "text-ivory/68" : "text-muted-foreground",
                            )}
                          >
                            {step.role}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </Container>
          </Section>
        );
      })}

      <Section surface="surface">
        <Container>
          <SectionHeader
            eyebrow="Specialized Development"
            title="NOT EVERY GAP IS TECHNICAL."
            description="Some readers need execution structure. Others need discipline and performance work. This page does not diagnose either problem; it helps you locate the next useful study area."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="border border-border bg-background p-6 shadow-refined">
              <p className="label text-gold">Technical Execution</p>
              <h2 className="heading-md mt-4 text-navy">
                {executionBook.label}
              </h2>
              <p className="body mt-5 text-muted-foreground">
                For traders who understand the language but need better model
                selection, sequencing, confirmation, invalidation, targeting, and
                execution structure.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {technicalExecutionBullets.map((item) => (
                  <li key={item} className="label text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
              <TargetLink
                target={{ type: "book", slug: "the-ict-playbook" }}
                className="label mt-8 inline-flex text-navy hover:text-gold"
              >
                View Execution Book
              </TargetLink>
            </article>
            <article className="border border-border bg-background p-6 shadow-refined">
              <p className="label text-gold">Behavior & Discipline</p>
              <h2 className="heading-md mt-4 text-navy">
                {disciplineBook.label}
              </h2>
              <p className="body mt-5 text-muted-foreground">
                For traders whose main difficulty involves fear, impatience,
                FOMO, overtrading, rule breaking, self-trust, and professional
                behavior.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {disciplineBullets.map((item) => (
                  <li key={item} className="label text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
              <TargetLink
                target={{ type: "book", slug: "the-disciplined-edge" }}
                className="label mt-8 inline-flex text-navy hover:text-gold"
              >
                View Discipline Book
              </TargetLink>
            </article>
          </div>
        </Container>
      </Section>

      {flagshipCollection ? (
        <Section surface="dark">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
              <div>
                <Eyebrow className="text-gold">The Flagship Journey</Eyebrow>
                <h2 className="display-lg mt-5 break-words text-ivory">
                  FROM FOUNDATIONS TO PROFESSIONAL IDENTITY.
                </h2>
                <p className="body-lg mt-6 max-w-3xl text-ivory/72">
                  The Institutional Operator series is designed for readers who
                  want the broadest structured progression inside the flagship
                  MaorTrades framework.
                </p>
                <p className="body mt-5 max-w-3xl text-ivory/66">
                  It is not simply a beginner book followed by an advanced setup
                  book. The series expands from market understanding into
                  execution architecture, risk, behavior, and professional
                  identity.
                </p>
                <div className="mt-8">
                  <Button
                    href="/collections/the-institutional-operator"
                    variant="gold"
                  >
                    Explore the Institutional Operator Collection
                  </Button>
                </div>
              </div>
              <div className="grid gap-6">
                <CollectionCoverComposition books={operatorBooks} variant="flagship" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border border-ivory/15 bg-surface-dark p-5">
                    <p className="label text-gold">Volume 01</p>
                    <h3 className="heading-sm mt-3 text-ivory">
                      {operatorBooks[0]?.title}
                    </h3>
                    {operatorBooks[0]?.subtitle ? (
                      <p className="body-sm mt-2 text-ivory/70">
                        {operatorBooks[0].subtitle}
                      </p>
                    ) : null}
                    <p className="label mt-5 text-ivory/55">
                      The Retail Awakening / Smart Money Framework / Advanced ICT
                      Models
                    </p>
                  </div>
                  <div className="border border-ivory/15 bg-surface-dark p-5">
                    <p className="label text-gold">Volume 02</p>
                    <h3 className="heading-sm mt-3 text-ivory">
                      {operatorBooks[1]?.title}
                    </h3>
                    {operatorBooks[1]?.subtitle ? (
                      <p className="body-sm mt-2 text-ivory/70">
                        {operatorBooks[1].subtitle}
                      </p>
                    ) : null}
                    <p className="label mt-5 text-ivory/55">
                      Advanced Execution / Risk Architecture / Performance
                      Psychology / Professional Identity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Compare the Paths"
            title="DIFFERENT BOOKS. DIFFERENT PURPOSES."
            description="A practical comparison of the main starting points without forcing a desktop-only table."
          />
          <div className="mt-10 grid gap-4">
            {comparisonEntries.map((entry) => {
              const resolved = resolveRecommendationTarget(entry.target);
              const next = entry.nextStep
                ? resolveRecommendationTarget(entry.nextStep).label
                : entry.nextStepNote;
              return (
                <article
                  key={resolved.slug}
                  className="grid gap-5 border border-border bg-surface p-5 md:grid-cols-[1fr_1fr_1fr_1fr]"
                >
                  <div>
                    <p className="label text-gold">
                      {resolved.type === "book" ? "Book" : "Collection"}
                    </p>
                    <TargetLink
                      target={entry.target}
                      className="heading-sm mt-2 block break-words text-navy hover:text-gold"
                    >
                      {resolved.label}
                    </TargetLink>
                  </div>
                  <div>
                    <p className="label text-muted-foreground">Best For</p>
                    <p className="body-sm mt-2 text-foreground">{entry.bestFor}</p>
                  </div>
                  <div>
                    <p className="label text-muted-foreground">Main Purpose</p>
                    <p className="body-sm mt-2 text-foreground">
                      {entry.mainPurpose}
                    </p>
                  </div>
                  <div>
                    <p className="label text-muted-foreground">Next Step</p>
                    <p className="body-sm mt-2 text-foreground">{next}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section surface="surface">
        <Container>
          <div className="grid gap-8 border-y border-border py-14 lg:grid-cols-[0.64fr_1.36fr]">
            <SectionHeader
              eyebrow="Still Unsure?"
              title="START WITH THE EARLIEST GAP."
            />
            <div>
              <p className="body-lg text-muted-foreground">
                When two books seem relevant, start with the one that addresses
                the earlier gap in your development.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  "If basic market mechanics are unclear, begin with foundations.",
                  "If ICT concepts feel disconnected, begin with Smart Money, Simplified.",
                  "If concepts are clear but execution is inconsistent, move toward advanced execution study.",
                  "If your technical plan is stronger than your behavior, focus on discipline and performance.",
                ].map((item) => (
                  <p
                    key={item}
                    className="body-sm border-l border-gold bg-background p-4 text-muted-foreground"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <p className="body-sm mt-6 text-muted-foreground">
                Not ready for a book yet? The free resources offer lighter
                checklists, reference sheets, and preparation tools.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/books" variant="outline">
                  Browse All Books
                </Button>
                <Button href="/collections" variant="text">
                  Explore Collections
                </Button>
                <Button href="/resources" variant="text">
                  Explore Free Resources
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {completeCollection ? (
        <Section surface="muted">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
              <div>
                <Eyebrow>The Full Ecosystem</Eyebrow>
                <h2 className="heading-lg mt-4 break-words text-navy">
                  ONE LIBRARY. MULTIPLE PATHS.
                </h2>
                <p className="body-lg mt-5 text-muted-foreground">
                  The complete library is not one mandatory eight-book reading
                  sequence. It combines foundational learning, Smart Money
                  education, reference material, advanced execution, complete
                  curriculum study, psychology and discipline, and the flagship
                  professional-development series.
                </p>
                <div className="mt-8">
                  <Button
                    href="/collections/complete-maortrades-library"
                    variant="outline"
                  >
                    Explore the Complete Library
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {foundationPathBooks.map((book) => (
                  <BookCover
                    key={book.id}
                    book={book}
                    imageClassName="max-h-[20rem]"
                  />
                ))}
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      <Section surface="dark">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <Eyebrow className="text-gold">Your Next Step</Eyebrow>
              <h2 className="heading-lg mt-4 text-ivory">
                CHOOSE THE BOOK THAT SOLVES THE NEXT PROBLEM.
              </h2>
              <p className="body-lg mt-5 text-ivory/72">
                Progress does not come from collecting more concepts. It comes
                from understanding what is missing, studying it deliberately, and
                applying it within a structured process.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button href="/books" variant="gold">
                Explore All Books
              </Button>
              <Button
                href="/collections"
                variant="outline"
                className="border-ivory/30 text-ivory hover:bg-ivory hover:text-navy"
              >
                Browse Collections
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
