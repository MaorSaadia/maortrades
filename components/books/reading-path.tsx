import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import type { Book, ReadingPathStage } from "@/types/book";
import { cn } from "@/lib/utils";

const mainStages: ReadingPathStage[] = [
  "Foundations",
  "Smart Money",
  "Advanced Execution",
  "Professional Operator",
];

type ReadingPathProps = {
  book: Book;
};

export function ReadingPath({ book }: ReadingPathProps) {
  const activeStages = book.readingPathStages ?? [];
  const hasDisciplineTrack = activeStages.includes("Professional Discipline");
  const hasCompleteTrack = activeStages.includes("Complete Learning Path");

  return (
    <Section surface="muted">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionHeader
            eyebrow="Your Reading Path"
            title="WHERE THIS BOOK FITS."
            description="MaorTrades is organized as a progression, so each book has a clear role in the wider library."
          />
          <div>
            <ol className="grid gap-3 md:grid-cols-4">
              {mainStages.map((stage, index) => {
                const active = activeStages.includes(stage);
                return (
                  <li
                    key={stage}
                    className={cn(
                      "relative border p-4",
                      active
                        ? "border-gold bg-surface text-navy"
                        : "border-border bg-background text-muted-foreground",
                    )}
                  >
                    <p className="label">{String(index + 1).padStart(2, "0")}</p>
                    <p className="label mt-4">{stage}</p>
                  </li>
                );
              })}
            </ol>
            {hasDisciplineTrack || hasCompleteTrack ? (
              <div className="mt-5 border-l border-gold bg-background p-5">
                <p className="label text-gold">
                  {hasCompleteTrack ? "Complete Learning Path" : "Specialized Track"}
                </p>
                <p className="body-sm mt-2 text-muted-foreground">
                  {hasCompleteTrack
                    ? "This book spans multiple stages of the MaorTrades library."
                    : "This book supports the professional discipline and performance layer of the library."}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}
