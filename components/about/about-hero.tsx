import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

const systemSteps = [
  "Knowledge",
  "Framework",
  "Execution",
  "Review",
  "Development",
];

export function AboutHero() {
  return (
    <Section className="border-b border-border py-0">
      <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_0.82fr] lg:items-center">
        <div>
          <Eyebrow>About MaorTrades</Eyebrow>
          <h1 className="display-xl mt-5 max-w-5xl break-words text-navy">
            TRADING INFORMATION IS EVERYWHERE.
            <span className="mt-3 block text-gold">STRUCTURE IS RARE.</span>
          </h1>
          <p className="body-lg mt-7 max-w-3xl text-muted-foreground">
            MaorTrades is an independent trading education and publishing
            platform created by author Maor Saadia.
          </p>
          <p className="body mt-5 max-w-3xl text-muted-foreground">
            The library is built around one central idea: trading concepts become
            more useful when they are organized into a structured framework
            connecting understanding, execution, risk, review, and behavior.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/books">Explore the Library</Button>
            <Button href="/start-here" variant="outline">
              Find Your Starting Point
            </Button>
          </div>
        </div>

        <aside
          aria-label="MaorTrades learning framework"
          className="border border-border bg-surface p-5 shadow-refined sm:p-7"
        >
          <p className="label text-gold">Educational Framework</p>
          <ol className="mt-7 grid gap-0">
            {systemSteps.map((step, index) => (
              <li key={step} className="grid grid-cols-[3.5rem_1fr] gap-4">
                <div className="flex flex-col items-center">
                  <span className="label flex h-10 w-10 items-center justify-center border border-gold text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {index < systemSteps.length - 1 ? (
                    <span className="h-9 w-px bg-border" aria-hidden="true" />
                  ) : null}
                </div>
                <p className="heading-sm min-w-0 border-b border-border pb-5 pt-1 text-navy">
                  {step}
                </p>
              </li>
            ))}
          </ol>
          <p className="body-sm mt-6 border-l border-gold pl-4 text-muted-foreground">
            The point is not to remove uncertainty from trading. The point is to
            make study more deliberate, connected, and reviewable.
          </p>
        </aside>
      </Container>
    </Section>
  );
}
