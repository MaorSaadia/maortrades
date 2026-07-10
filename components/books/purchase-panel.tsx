import { CheckoutButton } from "@/components/commerce/CheckoutButton";
import { getCommerceAvailability } from "@/lib/commerce/service";
import type { Book } from "@/types/book";

type PurchasePanelProps = {
  book: Book;
};

export function PurchasePanel({ book }: PurchasePanelProps) {
  const purchase = book.purchase;
  const availability = getCommerceAvailability({
    type: "book",
    slug: book.slug,
  });
  const formatLabel =
    purchase?.formatLabel ??
    book.formats.map((format) => format.toUpperCase()).join(" + ");
  const includedItems = purchase?.includedItems ?? [
    "Digital PDF edition",
    "Read on your preferred compatible device",
    "Purchase is completed securely through Lemon Squeezy.",
  ];
  const isAvailable = availability.status === "available";
  const unavailableLabel =
    availability.status === "launch-pending"
      ? (purchase?.ctaLabel ?? "PDF Edition Not Yet Available")
      : "Direct Purchase Temporarily Unavailable";

  return (
    <aside
      className="border border-border bg-surface p-6 shadow-refined"
      aria-labelledby="purchase-panel-heading"
    >
      <p className="label text-gold">Digital Edition</p>
      <h2 id="purchase-panel-heading" className="heading-sm mt-3 text-navy">
        {formatLabel}
      </h2>
      <p className="body-sm mt-4 text-muted-foreground">
        {isAvailable
          ? "Purchase is completed securely through Lemon Squeezy. Download access is provided after successful purchase."
          : "This PDF edition is prepared for checkout, but direct purchase is not available right now."}
      </p>

      <div className="mt-6">
        <CheckoutButton
          targetType="book"
          targetSlug={book.slug}
          source="book-hero"
          label="Get the PDF Edition"
          unavailable={!isAvailable}
          unavailableLabel={unavailableLabel}
          className="w-full"
        />
      </div>

      <ul className="mt-6 grid gap-3 border-t border-border pt-5">
        {includedItems.map((item) => (
          <li key={item} className="body-sm flex gap-3 text-muted-foreground">
            <span className="mt-2 h-px w-5 shrink-0 bg-gold" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
