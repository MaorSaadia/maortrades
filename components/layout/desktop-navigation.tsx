import Link from "next/link";
import type { NavigationItem } from "@/data/navigation";

type DesktopNavigationProps = {
  items: NavigationItem[];
};

export function DesktopNavigation({ items }: DesktopNavigationProps) {
  return (
    <nav aria-label="Primary navigation" className="hidden md:block">
      <ul className="flex items-center gap-7">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="navigation text-foreground/75 transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
