import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

export function StartHereSection() {
  return (
    <Section className="py-0">
      <Container className="py-16 md:py-24">
        <div className="grid gap-10 border border-navy/15 bg-navy p-7 text-ivory shadow-editorial md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold">Not Sure Where to Begin?</Eyebrow>
            <h2 className="heading-lg mt-4 text-ivory">FIND THE RIGHT STARTING POINT.</h2>
            <p className="body-lg mt-5 text-ivory/74">
              Whether you are learning the foundations, studying Smart Money
              Concepts, refining advanced execution, or working on discipline and
              performance, the MaorTrades library has a structured path forward.
            </p>
          </div>
          <Button href="/start-here" variant="gold">
            Find Your Path
          </Button>
        </div>
      </Container>
    </Section>
  );
}
