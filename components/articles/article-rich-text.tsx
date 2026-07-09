import Link from "next/link";
import type { ArticleParagraph } from "@/types/article";

export function ArticleRichParagraph({ paragraph }: { paragraph: ArticleParagraph }) {
  if (typeof paragraph === "string") {
    return <p>{paragraph}</p>;
  }

  return (
    <p>
      {paragraph.text}
      {paragraph.links?.length ? (
        <>
          {" "}
          {paragraph.links.map((link, index) => (
            <span key={link.href}>
              <Link
                href={link.href}
                className="font-semibold text-navy underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {link.label}
              </Link>
              {index < (paragraph.links?.length ?? 0) - 1 ? ", " : "."}
            </span>
          ))}
        </>
      ) : null}
    </p>
  );
}
