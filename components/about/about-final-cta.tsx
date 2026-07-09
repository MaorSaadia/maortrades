import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

export function AboutFinalCTA() {
  return (
    <Section surface="dark" className="border-t border-ivory/10">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold">Where Do You Go Next?</Eyebrow>
            <h2 className="heading-lg mt-4 text-ivory">
              START WITH THE GAP YOU NEED TO CLOSE.
            </h2>
            <p className="body-lg mt-5 text-ivory/72">
              Whether you are learning market foundations, organizing ICT
              concepts, refining execution, working on discipline, or looking
              for the complete flagship journey, MaorTrades is designed to help
              you find a clear starting point.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button href="/start-here" variant="gold">
              Find Your Starting Point
            </Button>
            <Button
              href="/books"
              variant="outline"
              className="border-ivory/30 text-ivory hover:bg-ivory hover:text-navy"
            >
              Explore the Library
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
