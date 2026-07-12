import { TrackedButton } from "@/components/analytics/TrackedButton";
import { LEMON_SQUEEZY_MY_ORDERS_URL } from "@/lib/commerce/constants";

const steps = [
  ["CHECK YOUR RECEIPT EMAIL", "Lemon Squeezy sends an order receipt to the email address entered during checkout. The receipt contains access to the purchased content."],
  ["OPEN YOUR PURCHASE", "Use the content-access button in the Lemon Squeezy receipt."],
  ["RETURN THROUGH MY ORDERS", "Past purchases can be accessed through Lemon Squeezy My Orders using the checkout email address and a secure email login link."],
  ["KEEP YOUR ORDER EMAIL", "The receipt is useful for returning to order information and content access later."],
];

export function DigitalAccessSteps() {
  return <div id="access" className="scroll-mt-24">
    <div className="grid border-t border-border md:grid-cols-2">
      {steps.map(([title, text], index) => <div key={title} className="border-b border-border p-6 md:p-8 md:odd:border-r">
        <p className="label text-gold">{String(index + 1).padStart(2, "0")}</p>
        <h3 className="heading-sm mt-4 text-navy">{title}</h3>
        <p className="body-sm mt-3 text-muted-foreground">{text}</p>
      </div>)}
    </div>
    <TrackedButton event={{ name: "my_orders_clicked" }} className="mt-8" href={LEMON_SQUEEZY_MY_ORDERS_URL} target="_blank" rel="noreferrer">Open Lemon Squeezy My Orders <span className="sr-only">(opens in a new tab)</span></TrackedButton>
  </div>;
}
