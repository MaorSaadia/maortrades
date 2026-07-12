import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { DigitalAccessSteps } from "@/components/purchase/DigitalAccessSteps";
import { PurchaseAccessHelp } from "@/components/purchase/PurchaseAccessHelp";
import { SectionHeader } from "@/components/sections/section-header";

export const metadata: Metadata = { title: "Access Your MaorTrades Purchases", description: "Learn how to access MaorTrades digital Books and Collections through your Lemon Squeezy receipt and My Orders." };

export default function PurchaseAccessPage() {
  return <><Section><Container><div className="mx-auto max-w-4xl text-center"><p className="eyebrow text-gold">PURCHASE ACCESS</p><h1 className="display-lg mt-4 text-navy">YOUR BOOKS REMAIN WITH LEMON SQUEEZY.</h1><p className="body-lg mx-auto mt-6 max-w-2xl text-muted-foreground">Your receipt email and Lemon Squeezy My Orders are the secure ways to return to purchased MaorTrades content. MaorTrades does not maintain a separate customer account or download portal.</p></div></Container></Section><Section id="access" surface="surface"><Container><SectionHeader eyebrow="DIGITAL DELIVERY" title="HOW TO ACCESS YOUR BOOKS" /><div className="mt-10"><DigitalAccessSteps /></div></Container></Section><Section surface="muted"><Container><PurchaseAccessHelp /></Container></Section></>;
}
