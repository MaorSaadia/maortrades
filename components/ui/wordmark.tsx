import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
};

export function Wordmark({ className }: WordmarkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "font-display text-2xl font-semibold text-navy transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
        className,
      )}
      aria-label="MaorTrades home"
    >
      {SITE_NAME}
    </Link>
  );
}
