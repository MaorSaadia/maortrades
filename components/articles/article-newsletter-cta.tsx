import { NewsletterSignupForm } from "@/components/newsletter/NewsletterSignupForm";
import type { NewsletterSource } from "@/lib/email/types";

export function ArticleNewsletterCTA({
  source = "articles",
}: {
  source?: Extract<NewsletterSource, "articles" | "article">;
}) {
  return (
    <section className="border-y border-border py-10">
      <div className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-center">
        <div>
          <p className="label text-gold">The MaorTrades Letter</p>
          <h2 className="heading-md mt-3 text-navy">
            New articles, book updates, and educational frameworks.
          </h2>
          <p className="body-sm mt-3 text-muted-foreground">
            Receive selected MaorTrades Journal updates and connected educational
            resources by email.
          </p>
        </div>
        <NewsletterSignupForm source={source} heading="" className="shadow-none" />
      </div>
    </section>
  );
}
