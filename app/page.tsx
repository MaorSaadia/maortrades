import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";

export default function Home() {
  return (
    <>
      <Section className="border-b border-border">
        <Container className="grid min-h-[calc(100svh-5rem)] items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>MAORTRADES &middot; BOOKS &amp; TRADING EDUCATION</Eyebrow>
            <h1 className="display-xl mt-5 max-w-4xl text-navy">
              MASTER THE LANGUAGE OF PRICE.
            </h1>
            <p className="body-lg mt-7 max-w-2xl text-muted-foreground">
              Books and frameworks for traders serious about structure,
              execution, risk, and professional discipline.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/books">Explore the Library</Button>
              <Button href="/start-here" variant="outline">
                Start Here
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mr-0">
            <div
              aria-hidden="true"
              className="absolute inset-x-10 top-8 h-72 border border-gold/35 bg-surface shadow-refined"
            />
            <div
              aria-hidden="true"
              className="relative ml-auto flex min-h-[27rem] w-full flex-col justify-between border border-navy/20 bg-navy p-8 text-ivory shadow-editorial"
            >
              <div>
                <div className="h-px w-20 bg-gold" />
                <p className="label mt-6 text-ivory/75">Institutional Operator</p>
              </div>
              <div>
                <p className="display-lg text-ivory">PRICE</p>
                <p className="display-lg text-ivory">STRUCTURE</p>
                <p className="body-sm mt-6 max-w-48 text-ivory/70">
                  Editorial preview for the MaorTrades publishing system.
                </p>
              </div>
              <p className="label text-gold">MAOR SAADIA</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section surface="muted">
        <Container>
          <SectionHeader
            eyebrow="Foundation Preview"
            title="A publishing platform for disciplined market operators."
            description="This first phase establishes the layout, route structure, tokens, typography, and reusable components that later books, collections, guides, and resources can build upon."
          />
        </Container>
      </Section>
    </>
  );
}
