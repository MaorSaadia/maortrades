import { TrackedButton } from "@/components/analytics/TrackedButton";
import { getPurchaseSupportEmail, LEMON_SQUEEZY_MY_ORDERS_URL } from "@/lib/commerce/constants";

export function PurchaseAccessHelp() {
  const supportEmail = getPurchaseSupportEmail();
  const items = ["Check the inbox of the email address used at checkout.", "Check spam, promotions, and filtered email folders.", "Use Lemon Squeezy My Orders with the same checkout email address.", "Wait a few minutes if the receipt has not appeared immediately.", "Contact MaorTrades support if the purchase still cannot be located."];
  return <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
    <div><p className="eyebrow text-gold">ACCESS HELP</p><h2 className="heading-lg mt-4 text-navy">CAN&apos;T FIND YOUR PURCHASE?</h2><p className="body mt-5 text-muted-foreground">Lemon Squeezy manages receipt delivery, secure order retrieval, and purchased-file access.</p></div>
    <div><ol className="grid gap-3">{items.map((item, i) => <li key={item} className="body-sm flex gap-4 border-b border-border pb-3"><span className="label text-gold">{i + 1}</span><span>{item}</span></li>)}</ol>
      <div className="mt-6 flex flex-wrap gap-3"><TrackedButton event={{ name: "my_orders_clicked" }} href={LEMON_SQUEEZY_MY_ORDERS_URL} target="_blank" rel="noreferrer">Access My Orders <span className="sr-only">(opens in a new tab)</span></TrackedButton>{supportEmail ? <TrackedButton event={{ name: "purchase_access_help_opened" }} href={`mailto:${supportEmail}`} variant="outline">Email MaorTrades Support</TrackedButton> : null}</div>
      <p className="body-sm mt-6 border-l border-gold pl-4 text-muted-foreground">MaorTrades support will never ask for your complete payment-card information, security code, banking password, or account password.</p>
    </div>
  </div>;
}
