import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/articles/article-card";
import { BookCover } from "@/components/books/book-cover";
import { CollectionCoverComposition } from "@/components/collections/collection-cover-composition";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { DigitalAccessSteps } from "@/components/purchase/DigitalAccessSteps";
import { PurchaseAccessHelp } from "@/components/purchase/PurchaseAccessHelp";
import { PurchaseReadingPath } from "@/components/purchase/PurchaseReadingPath";
import { ResourceCard } from "@/components/resources/resource-card";
import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LEMON_SQUEEZY_MY_ORDERS_URL } from "@/lib/commerce/constants";
import { verifyPurchaseContext } from "@/lib/commerce/purchase-context";
import { resolvePurchaseExperience } from "@/lib/commerce/purchase-recommendations";

export const metadata: Metadata = {
  title: "Thank You for Your Purchase",
  description: "Access guidance and a post-purchase reading path for MaorTrades customers.",
  robots: { index: false, follow: false },
};

export default async function PurchaseSuccessPage({ searchParams }: PageProps<"/purchase/success">) {
  const params = await searchParams;
  const verification = verifyPurchaseContext(params.context);
  const experience = verification.status === "valid" ? resolvePurchaseExperience(verification.context) : null;
  const book = experience && experience.type === "book" ? experience.item : undefined;
  const collection = experience && experience.type === "collection" ? experience.item : undefined;

  return <>
    <Section className="overflow-hidden pb-20 pt-14 md:pb-28 md:pt-20">
      <Container><div className={experience ? "grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]" : "mx-auto max-w-4xl text-center"}>
        <div><div className={experience ? "" : "mx-auto flex justify-center"}><span className="flex size-12 items-center justify-center rounded-full border border-gold text-gold" aria-label="Checkout return acknowledged">✓</span></div>
          <Eyebrow className="mt-6">THANK YOU</Eyebrow>
          <h1 className="display-lg mt-4 text-navy">{experience ? "YOUR NEXT CHAPTER STARTS HERE." : "THANK YOU FOR YOUR PURCHASE."}</h1>
          <p className={`body-lg mt-6 text-muted-foreground ${experience ? "max-w-2xl" : "mx-auto max-w-2xl"}`}>{experience ? "Your checkout has returned to MaorTrades. Your Lemon Squeezy receipt contains access to the digital content associated with your completed order. Keep the receipt email so you can return to your purchase later." : "Use the Lemon Squeezy receipt sent to the email address entered at checkout to access your purchased content. You can also retrieve your purchases through Lemon Squeezy My Orders."}</p>
          {verification.status === "expired" ? <p className="body-sm mt-4 text-muted-foreground">Your purchase access remains available through the Lemon Squeezy receipt and My Orders.</p> : null}
          <div className={`mt-8 flex flex-wrap gap-3 ${experience ? "" : "justify-center"}`}><Button href={LEMON_SQUEEZY_MY_ORDERS_URL} target="_blank" rel="noreferrer">Access Your Orders <span className="sr-only">at Lemon Squeezy (opens in a new tab)</span></Button><Button href="#access" variant="outline">View Access Instructions</Button></div>
        </div>
        {book ? <BookCover book={book} priority className="mx-auto max-w-64" /> : collection ? <CollectionCoverComposition books={experience!.books} priority variant={collection.slug === "complete-maortrades-library" ? "library" : "default"} /> : null}
      </div></Container>
    </Section>

    <Section surface="surface"><Container><SectionHeader eyebrow="DIGITAL DELIVERY" title="HOW TO ACCESS YOUR BOOKS" description="Lemon Squeezy—not MaorTrades—provides the receipt, order retrieval, and purchased-file access." /><div className="mt-10"><DigitalAccessSteps /></div></Container></Section>

    {experience ? <>
      <Section><Container><div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div><Eyebrow>YOUR SELECTED {experience.type.toUpperCase()}</Eyebrow><h2 className="heading-lg mt-4 text-navy">{experience.item.title}</h2>{"subtitle" in experience.item && experience.item.subtitle ? <p className="heading-sm mt-3 text-muted-foreground">{experience.item.subtitle}</p> : null}<p className="body mt-5 text-muted-foreground">{experience.item.shortDescription}</p><Link className="label mt-6 inline-block text-navy hover:text-gold" href={`/${experience.type === "book" ? "books" : "collections"}/${experience.item.slug}`}>View {experience.type} page</Link></div>
        <div>{book ? <dl className="grid grid-cols-2 gap-5 border-y border-border py-6"><div><dt className="label text-gold">LEVEL</dt><dd className="body-sm mt-2">{book.level}</dd></div><div><dt className="label text-gold">CATEGORY</dt><dd className="body-sm mt-2">{book.categories.join(", ")}</dd></div></dl> : <p className="heading-md text-navy">{experience.books.length} Books · {collection?.learningProgression?.join(" → ")}</p>}</div>
      </div></Container></Section>
      <Section surface="muted"><Container><SectionHeader eyebrow="YOUR RECOMMENDED READING PATH" title={collection?.grouping ? "CHOOSE THE PATH THAT MATCHES YOUR DEVELOPMENT." : "READ WITH INTENTION, NOT URGENCY."} description={collection?.grouping ? "The Complete Library supports several learning paths. It does not require every Book to be read in one fixed linear sequence." : "Use this editorial guide to establish context before moving deeper."} /><div className="mt-10"><PurchaseReadingPath book={book} collection={collection} /></div></Container></Section>
      <Section><Container><SectionHeader eyebrow="BEGIN WITH THIS" title="ESTABLISH THE FIRST FRAMEWORK." description="Do not try to absorb everything at once. Begin with the first framework, take notes, and connect each concept to the wider process before moving forward." /><ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{experience.firstTopics.map((topic, i) => <li key={topic} className="border-t border-border py-4"><span className="label text-gold">{String(i + 1).padStart(2, "0")}</span><p className="heading-sm mt-2 text-navy">{topic}</p></li>)}</ul></Container></Section>
      {experience.articles.length ? <Section surface="surface"><Container><SectionHeader eyebrow="CONTINUE WITH THE JOURNAL" title="CONNECT THE BOOK TO THE WIDER PROCESS." /><div className="mt-9 grid gap-5 md:grid-cols-2">{experience.articles.map((article) => article ? <ArticleCard key={article.slug} article={article} /> : null)}</div></Container></Section> : null}
      {experience.resource ? <Section><Container><SectionHeader eyebrow="A PRACTICAL TOOL FOR THE JOURNEY" title="BRING THE FRAMEWORK INTO YOUR ROUTINE." /><div className="mt-9 max-w-4xl"><ResourceCard resource={experience.resource} featured /></div></Container></Section> : null}
    </> : null}

    <Section surface="muted"><Container><PurchaseAccessHelp /></Container></Section>
    <Section surface="dark"><Container><div className="mx-auto max-w-4xl text-center"><Eyebrow>CONTINUE YOUR DEVELOPMENT</Eyebrow><h2 className="heading-lg mt-4 text-ivory">THE PURCHASE IS THE BEGINNING OF THE STUDY.</h2><p className="body-lg mx-auto mt-5 max-w-2xl text-ivory/70">Use the Book deliberately, connect each concept to your trading process, and return to the MaorTrades Journal, Resources, and Start Here guide as your development continues.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Button href="/start-here" variant="gold">Start Here</Button><Button href="/articles" className="border-ivory/30 text-ivory hover:bg-ivory hover:text-navy" variant="outline">Read the Journal</Button><Button href="/books" className="text-ivory" variant="text">Browse All Books</Button></div></div></Container></Section>
  </>;
}
