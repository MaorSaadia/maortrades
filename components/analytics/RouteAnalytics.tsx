"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useAnalytics } from "@/components/analytics/AnalyticsProvider";

export function RouteAnalytics() {
  const pathname = usePathname(); const search = useSearchParams(); const { consent, decided, track } = useAnalytics(); const last = useRef("");
  useEffect(() => {
    if (!decided || (!consent.analytics && !consent.marketing)) return;
    const query = search.toString(); const route = `${pathname}${query ? `?${query}` : ""}`; const key = `${route}:${consent.analytics}:${consent.marketing}`; if (last.current === key) return; last.current = key;
    track({ name: "page_view", page_path: route, page_location: location.href, page_title: document.title });
    const parts = pathname.split("/").filter(Boolean);
    if ((pathname === "/books" || pathname === "/collections") && consent.analytics) track({ name: "view_catalogue", item_list_id: parts[0], item_list_name: parts[0] === "books" ? "Books Catalogue" : "Collections", items: [] });
    if (parts.length === 2 && parts[0] === "books" && consent.analytics) track({ name: "view_commerce_item", items: [{ itemId: `book:${parts[1]}`, itemName: parts[1], itemType: "book", category: "book", quantity: 1 }] });
    if (parts.length === 2 && parts[0] === "collections" && consent.analytics) track({ name: "view_commerce_item", items: [{ itemId: `collection:${parts[1]}`, itemName: parts[1], itemType: "collection", category: "collection", quantity: 1 }] });
    if (parts.length === 2 && parts[0] === "articles" && consent.analytics) track({ name: "article_view", article_slug: parts[1] });
    if (parts.length === 2 && parts[0] === "resources" && consent.analytics) track({ name: "resource_view", resource_slug: parts[1] });
  }, [pathname, search, consent, decided, track]);
  return null;
}
