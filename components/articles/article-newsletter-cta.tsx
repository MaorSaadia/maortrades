import { Button } from "@/components/ui/button";

export function ArticleNewsletterCTA() {
  return (
    <section className="border-y border-border py-10">
      <div className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-center">
        <div>
          <p className="label text-gold">The MaorTrades Letter</p>
          <h2 className="heading-md mt-3 text-navy">
            New articles, book updates, and educational frameworks.
          </h2>
          <p className="body-sm mt-3 text-muted-foreground">
            Email delivery will be enabled when the MaorTrades Letter launches.
          </p>
        </div>
        <form
          className="border border-border bg-surface p-5"
          aria-describedby="article-newsletter-status"
        >
          <label htmlFor="article-newsletter-email" className="label text-navy">
            Email address
          </label>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input
              id="article-newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              disabled
              placeholder="you@example.com"
              className="min-h-12 w-full border border-border bg-background px-4 text-sm text-muted-foreground placeholder:text-muted-foreground disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            />
            <Button disabled type="button" className="shrink-0">
              Coming Soon
            </Button>
          </div>
          <p
            id="article-newsletter-status"
            className="body-sm mt-4 text-muted-foreground"
          >
            No email service or submission backend is connected in this phase.
          </p>
        </form>
      </div>
    </section>
  );
}
