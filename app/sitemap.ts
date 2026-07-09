import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { books } from "@/data/books";
import { collections } from "@/data/collections";
import { resources } from "@/data/resources";
import { absoluteUrl } from "@/lib/site-url";

const staticRoutes = [
  "/",
  "/books",
  "/collections",
  "/start-here",
  "/about",
  "/articles",
  "/resources",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
  }));
  const bookEntries = books.map((book) => ({
    url: absoluteUrl(`/books/${book.slug}`),
  }));
  const collectionEntries = collections.map((collection) => ({
    url: absoluteUrl(`/collections/${collection.slug}`),
  }));
  const articleEntries = articles.map((article) => ({
    url: absoluteUrl(`/articles/${article.slug}`),
  }));
  const resourceEntries = resources.map((resource) => ({
    url: absoluteUrl(`/resources/${resource.slug}`),
  }));

  return [
    ...staticEntries,
    ...bookEntries,
    ...collectionEntries,
    ...articleEntries,
    ...resourceEntries,
  ];
}
