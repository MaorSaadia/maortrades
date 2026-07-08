import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";

export function CollectionStartCTA() {
  return (
    <Section surface="dark">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <SectionHeader
            eyebrow="Still Deciding?"
            title="FIND YOUR STARTING POINT."
            description="The Start Here guide helps readers choose a book or collection based on experience, current knowledge, and development goals."
            className="[&_h2]:text-ivory [&_p]:text-ivory/70"
          />
          <Button
            href="/start-here"
            variant="gold"
            className="self-start lg:self-center"
          >
            Start Here
          </Button>
        </div>
      </Container>
    </Section>
  );
}
