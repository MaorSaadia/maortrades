import type { Book } from "@/types/book";

type PurchasePanelProps = {
  book: Book;
};

export function PurchasePanel({ book }: PurchasePanelProps) {
  const purchase = book.purchase;
  const formatLabel =
    purchase?.formatLabel ??
    book.formats.map((format) => format.toUpperCase()).join(" + ");
  const includedItems = purchase?.includedItems ?? [
    "Digital PDF edition",
    "Read on your preferred compatible device",
    "Direct MaorTrades purchase experience coming soon",
  ];
  const ctaLabel = purchase?.ctaLabel ?? "Direct Purchase Coming Soon";

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
        Immediate digital access will be available when direct purchasing launches.
      </p>

      <div
        role="status"
        aria-live="polite"
        className="label mt-6 flex min-h-12 items-center justify-center border border-navy/20 bg-muted px-4 text-center text-navy"
      >
        {ctaLabel}
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
