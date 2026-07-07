import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
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

          <form
            className="border border-border bg-surface p-5 shadow-refined"
            aria-describedby="newsletter-placeholder-note"
          >
            <label htmlFor="newsletter-email" className="label text-navy">
              Email address
            </label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="min-h-12 w-full border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              />
              <Button type="button" variant="primary" className="shrink-0">
                Join the Letter
              </Button>
            </div>
            <p id="newsletter-placeholder-note" className="body-sm mt-4 text-muted-foreground">
              Newsletter UI only. No email service or submission backend is connected yet.
            </p>
          </form>
        </div>
      </Container>
    </Section>
  );
}
