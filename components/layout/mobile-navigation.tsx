"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { NavigationItem } from "@/data/navigation";
import { cn } from "@/lib/utils";

type MobileNavigationProps = {
  items: NavigationItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    firstLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex h-11 w-11 items-center justify-center border border-border bg-surface text-navy transition-colors hover:border-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        onClick={() => setOpen((current) => !current)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
          <span
            className={cn(
              "h-px bg-current transition-transform",
              open && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn("h-px bg-current transition-opacity", open && "opacity-0")}
          />
          <span
            className={cn(
              "h-px bg-current transition-transform",
              open && "-translate-y-[7px] -rotate-45",
            )}
          />
        </span>
      </button>

      <div
        id="mobile-navigation"
        className={cn(
          "absolute inset-x-0 top-full z-40 border-b border-border bg-background px-5 py-5 shadow-refined",
          open ? "block" : "hidden",
        )}
      >
        <nav aria-label="Mobile navigation">
          <ul className="grid gap-1">
            {items.map((item, index) => (
              <li key={item.href}>
                <Link
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  className="block border-b border-border/70 py-4 font-semibold text-navy transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
