import Link from "next/link";
import { Container } from "@/components/layout/container";
import { NewsletterSignupForm } from "@/components/newsletter/NewsletterSignupForm";
import { footerNavigation } from "@/data/navigation";
import { SITE_CREATOR, SITE_DESCRIPTION } from "@/lib/constants";
import { Wordmark } from "@/components/ui/wordmark";

const columnLabels = {
  books: "BOOKS",
  resources: "RESOURCES",
  about: "ABOUT",
  legal: "LEGAL",
} as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr]">
          <div className="max-w-md">
            <Wordmark className="text-3xl" />
            <p className="body mt-5 text-muted-foreground">{SITE_DESCRIPTION}</p>
            <p className="body-sm mt-6 text-foreground">Created by {SITE_CREATOR}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(footerNavigation).map(([key, items]) => (
              <nav key={key} aria-label={`${columnLabels[key as keyof typeof columnLabels]} links`}>
                <p className="label text-navy">{columnLabels[key as keyof typeof columnLabels]}</p>
                <ul className="mt-4 grid gap-3">
                  {items.map((item) => (
                    <li key={item.href + item.label}>
                      <Link
                        href={item.href}
                        className="body-sm text-muted-foreground transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div
          id="newsletter"
          className="mt-12 grid gap-5 border-y border-border py-8 md:grid-cols-[1fr_auto]"
        >
          <div>
            <p className="heading-sm text-navy">MaorTrades Letter</p>
            <p className="body-sm mt-2 max-w-2xl text-muted-foreground">
              Receive structured notes, launch updates, educational frameworks,
              and selected free trading resources.
            </p>
          </div>
          <NewsletterSignupForm
            source="footer"
            heading=""
            compact
            className="md:min-w-[30rem]"
          />
        </div>

        <div
          id="legal"
          className="flex flex-col gap-3 pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between"
        >
          <p>&copy; {year} MaorTrades. All rights reserved.</p>
          <p>Educational content only. Trading involves risk.</p>
        </div>
      </Container>
    </footer>
  );
}
