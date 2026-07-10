import { CheckoutButton } from "@/components/commerce/CheckoutButton";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { getCommerceAvailability } from "@/lib/commerce/service";
import type { Book } from "@/types/book";

type FinalBookCTAProps = {
  book: Book;
};

export function FinalBookCTA({ book }: FinalBookCTAProps) {
  const availability = getCommerceAvailability({
    type: "book",
    slug: book.slug,
  });
  const isAvailable = availability.status === "available";

  return (
    <Section surface="dark">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold">Ready to Go Deeper?</Eyebrow>
            <h2 className="heading-lg mt-4 text-ivory">{book.title}</h2>
            {book.subtitle ? (
              <p className="body-lg mt-3 text-ivory/74">{book.subtitle}</p>
            ) : null}
            <p className="body mt-5 text-ivory/68">
              {isAvailable
                ? "Purchase is completed securely through Lemon Squeezy."
                : "Direct PDF purchasing is prepared, but checkout is not available right now."}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <CheckoutButton
              targetType="book"
              targetSlug={book.slug}
              source="book-final-cta"
              label="Get the PDF Edition"
              unavailable={!isAvailable}
              unavailableLabel={
                availability.status === "launch-pending"
                  ? "PDF Edition Not Yet Available"
                  : "Direct Purchase Temporarily Unavailable"
              }
              variant="gold"
              className="w-full"
            />
            <Button href="/books" variant="outline" className="border-ivory/30 text-ivory hover:bg-ivory hover:text-navy">
              Back to All Books
            </Button>
            <Button href="/start-here" variant="text" className="text-gold hover:text-ivory">
              Start Here
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
