import Link from "next/link";
import { primaryNavigation } from "@/data/navigation";
import { Container } from "./container";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";
import { Wordmark } from "@/components/ui/wordmark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <Container className="relative flex min-h-20 items-center justify-between gap-6">
        <div className="flex items-center">
          <Wordmark />
        </div>
        <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
          <DesktopNavigation items={primaryNavigation} />
          <Link
            href="/books"
            className="navigation inline-flex min-h-11 items-center justify-center border border-gold px-4 text-navy transition-colors hover:bg-gold hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Explore the Library
          </Link>
        </div>
        <MobileNavigation items={primaryNavigation} />
      </Container>
    </header>
  );
}
