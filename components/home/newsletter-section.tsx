import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { NewsletterSignupForm } from "@/components/newsletter/NewsletterSignupForm";
import { Eyebrow } from "@/components/ui/eyebrow";

export function NewsletterSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 border-y border-border py-14 md:grid-cols-[1fr_0.85fr] md:items-center md:py-20">
          <div className="max-w-2xl">
            <Eyebrow>The MaorTrades Letter</Eyebrow>
            <h2 className="heading-lg mt-4 text-navy">
              BETTER FRAMEWORKS. CLEARER EXECUTION.
            </h2>
            <p className="body-lg mt-5 text-muted-foreground">
              Receive new articles, book updates, trading frameworks, and selected
              educational resources from MaorTrades.
            </p>
            <p className="body-sm mt-5 text-muted-foreground">
              No noise. Just thoughtful trading education and updates.
            </p>
          </div>

          <NewsletterSignupForm source="homepage" heading="" />
        </div>
      </Container>
    </Section>
  );
}
