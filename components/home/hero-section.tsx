import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

export function HeroSection() {
  return (
    <Section className="border-b border-border py-0">
      <Container className="grid min-h-[calc(100svh-5rem)] items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
        <div className="max-w-3xl">
          <Eyebrow>MAORTRADES &middot; BOOKS &amp; TRADING EDUCATION</Eyebrow>
          <h1 className="display-xl mt-5 max-w-4xl text-navy">
            <span className="block">MASTER THE</span>
            <span className="block">LANGUAGE</span>
            <span className="block">OF PRICE.</span>
          </h1>
          <p className="body-lg mt-7 max-w-2xl text-muted-foreground">
            Books and frameworks for traders serious about structure, execution,
            risk, and professional discipline.
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
            className="absolute -right-4 top-10 hidden h-80 w-52 border border-gold/25 md:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-10 top-8 h-72 border border-gold/35 bg-surface shadow-refined"
          />
          <div
            aria-hidden="true"
            className="relative ml-auto flex min-h-[27rem] w-full flex-col justify-between overflow-hidden border border-navy/20 bg-navy p-8 text-ivory shadow-editorial"
          >
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(var(--ivory)_1px,transparent_1px),linear-gradient(90deg,var(--ivory)_1px,transparent_1px)] [background-size:40px_40px]" />
            <div className="relative">
              <div className="h-px w-20 bg-gold" />
              <p className="label mt-6 text-ivory/75">Institutional Operator</p>
            </div>
            <div className="relative">
              <p className="display-lg text-ivory">PRICE</p>
              <p className="display-lg text-ivory">STRUCTURE</p>
              <p className="body-sm mt-6 max-w-52 text-ivory/70">
                Editorial preview for the MaorTrades publishing system.
              </p>
            </div>
            <div className="relative flex items-end justify-between gap-6">
              <p className="label text-gold">MAOR SAADIA</p>
              <p className="label text-ivory/45">VOL. 01</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
