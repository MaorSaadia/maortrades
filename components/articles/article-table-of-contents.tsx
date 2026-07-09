import type { Article } from "@/types/article";

export function ArticleTableOfContents({ article }: { article: Article }) {
  return (
    <nav
      aria-labelledby="article-toc"
      className="border border-border bg-surface p-5 lg:sticky lg:top-28"
    >
      <h2 id="article-toc" className="label text-gold">
        In This Article
      </h2>
      <ol className="mt-4 grid gap-3">
        {article.sections.map((section, index) => (
          <li key={section.id} className="grid grid-cols-[2rem_1fr] gap-3">
            <span className="label text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${section.id}`}
              className="body-sm text-navy transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {section.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
