import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

export function AuthorSection() {
  return (
    <Section surface="surface">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <Eyebrow>About the Author</Eyebrow>
            <h2 className="heading-lg mt-4 text-navy">MAOR SAADIA</h2>
          </div>
          <div className="max-w-3xl">
            <p className="body-lg text-muted-foreground">
              Maor Saadia is the creator of MaorTrades and author of a growing
              library focused on day trading, Smart Money Concepts, ICT frameworks,
              execution, risk management, and trading psychology.
            </p>
            <p className="body-lg mt-5 text-muted-foreground">
              His work is built around one central idea: trading knowledge becomes
              useful only when concepts are organized into a structured framework
              that can guide preparation, execution, risk, review, and professional
              behavior.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="outline">
                About Maor
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
