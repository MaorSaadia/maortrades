import type { Article, ArticleSubSection } from "@/types/article";
import { ArticleCallout } from "@/components/articles/article-callout";
import { ArticleRichParagraph } from "@/components/articles/article-rich-text";

export function ArticleBody({ article }: { article: Article }) {
  return (
    <div className="article-body">
      {article.sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-28">
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((paragraph, index) => (
            <ArticleRichParagraph
              key={`${section.id}-paragraph-${index}`}
              paragraph={paragraph}
            />
          ))}
          {section.bullets?.length ? <BulletList items={section.bullets} /> : null}
          {section.numberedItems?.length ? (
            <NumberedList items={section.numberedItems} />
          ) : null}
          {section.quote ? <blockquote>{section.quote}</blockquote> : null}
          {section.callout ? <ArticleCallout callout={section.callout} /> : null}
          {section.subSections?.map((subSection) => (
            <SubSection key={subSection.heading} subSection={subSection} />
          ))}
        </section>
      ))}
    </div>
  );
}

function SubSection({ subSection }: { subSection: ArticleSubSection }) {
  return (
    <section className="mt-8">
      <h3>{subSection.heading}</h3>
      {subSection.paragraphs?.map((paragraph, index) => (
        <ArticleRichParagraph
          key={`${subSection.heading}-paragraph-${index}`}
          paragraph={paragraph}
        />
      ))}
      {subSection.bullets?.length ? <BulletList items={subSection.bullets} /> : null}
      {subSection.numberedItems?.length ? (
        <NumberedList items={subSection.numberedItems} />
      ) : null}
      {subSection.callout ? <ArticleCallout callout={subSection.callout} /> : null}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
}
