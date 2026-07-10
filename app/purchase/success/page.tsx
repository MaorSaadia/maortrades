import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Purchase Complete | MaorTrades",
  description: "Purchase completion page for MaorTrades digital products.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PurchaseSuccessPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl border-y border-border py-16 text-center md:py-24">
          <Eyebrow>PURCHASE COMPLETE</Eyebrow>
          <h1 className="heading-lg mt-4 text-navy">
            THANK YOU FOR YOUR PURCHASE.
          </h1>
          <p className="body-lg mx-auto mt-6 max-w-2xl text-muted-foreground">
            Your Lemon Squeezy receipt contains access to your purchased digital
            content. Keep the receipt email for future order access.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="/articles">Explore the Journal</Button>
            <Button href="/start-here" variant="outline">
              Start Here
            </Button>
            <Button href="/books" variant="text">
              Browse More Books
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
