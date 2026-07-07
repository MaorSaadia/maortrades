import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export default function BookNotFound() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl border-y border-border py-16">
          <p className="label text-gold">Book Not Found</p>
          <h1 className="heading-lg mt-4 text-navy">
            This MaorTrades book page is not available.
          </h1>
          <p className="body-lg mt-5 text-muted-foreground">
            The catalogue has been updated, or the requested book slug does not
            exist in the current library.
          </p>
          <div className="mt-8">
            <Button href="/books" variant="outline">
              Back to All Books
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
