import { getArticleBySlug } from "@/data/articles";
import { getBookBySlug, getBooksBySlugs } from "@/data/books";
import { getCollectionBySlug } from "@/data/collections";
import { getResourceBySlug } from "@/data/resources";
import type { PurchaseContext } from "@/lib/commerce/purchase-context";
import type { Article } from "@/types/article";
import type { Book } from "@/types/book";
import type { Collection } from "@/types/collection";
import type { FreeResource } from "@/types/resource";

const articleMap: Record<string, string[]> = {
  "smart-money-simplified": ["understanding-liquidity-beyond-stop-hunts"],
  "the-ict-playbook": ["why-execution-without-risk-architecture-fails"],
  "the-disciplined-edge": ["knowing-a-trading-model-and-trusting-your-process"],
  "the-institutional-operator-book-2": ["why-execution-without-risk-architecture-fails", "knowing-a-trading-model-and-trusting-your-process"],
  "smart-money-and-ict": ["understanding-liquidity-beyond-stop-hunts"],
  "the-institutional-operator": ["why-execution-without-risk-architecture-fails", "knowing-a-trading-model-and-trusting-your-process"],
};

const resourceMap: Record<string, string> = {
  "day-trading-for-absolute-beginners": "daily-trading-preparation-sheet",
  "smart-money-simplified": "smart-money-quick-reference",
  "the-institutional-ict-codex": "smart-money-quick-reference",
  "the-ict-playbook": "ict-trading-checklist",
  "the-disciplined-edge": "trading-discipline-reset-checklist",
  "the-institutional-operator-book-1": "daily-trading-preparation-sheet",
  "the-institutional-operator-book-2": "trading-discipline-reset-checklist",
  "smart-money-and-ict": "ict-trading-checklist",
  "the-institutional-operator": "daily-trading-preparation-sheet",
};

type Shared = { books: Book[]; firstTopics: string[]; articles: Article[]; resource?: FreeResource };
export type PurchaseExperience =
  | (Shared & { type: "book"; item: Book })
  | (Shared & { type: "collection"; item: Collection });

export function resolvePurchaseExperience(context: PurchaseContext): PurchaseExperience | null {
  const articles = (articleMap[context.slug] ?? []).map(getArticleBySlug).filter((article): article is Article => Boolean(article));
  const resource = resourceMap[context.slug] ? getResourceBySlug(resourceMap[context.slug]) : undefined;
  if (context.type === "book") {
    const item = getBookBySlug(context.slug);
    if (!item) return null;
    return { type: "book", item, books: [item], firstTopics: [...(item.bookStructure?.map((section) => section.title) ?? []), ...(item.keyTopics ?? [])].slice(0, 5), articles, resource };
  }
  const item = getCollectionBySlug(context.slug);
  if (!item) return null;
  return { type: "collection", item, books: getBooksBySlugs(item.bookSlugs), firstTopics: (item.learningProgression ?? item.featuredTopics ?? []).slice(0, 5), articles, resource };
}
