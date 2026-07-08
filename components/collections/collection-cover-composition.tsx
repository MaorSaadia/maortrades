import Image from "next/image";
import type { Book } from "@/types/book";
import { cn } from "@/lib/utils";

type CollectionCoverCompositionProps = {
  books: Book[];
  priority?: boolean;
  variant?: "default" | "flagship" | "library";
};

export function CollectionCoverComposition({
  books,
  priority = false,
  variant = "default",
}: CollectionCoverCompositionProps) {
  const visibleBooks = books.filter(
    (book) => book.coverImage && book.coverImageWidth && book.coverImageHeight,
  );

  if (!visibleBooks.length) {
    return null;
  }

  const isLibrary = variant === "library" || visibleBooks.length > 3;

  return (
    <div
      className={cn(
        "grid w-full gap-4",
        isLibrary
          ? "grid-cols-2 sm:grid-cols-4"
          : "grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(9rem,1fr))]",
        variant === "flagship" && "md:gap-6",
      )}
    >
      {visibleBooks.map((book, index) => (
        <figure
          key={book.id}
          className={cn(
            "flex min-w-0 items-center justify-center border border-border bg-surface p-2 shadow-refined",
            variant === "flagship" && "border-ivory/15 bg-surface-dark p-3",
            isLibrary && "p-1.5 sm:p-2",
          )}
        >
          <Image
            src={book.coverImage!}
            alt={`${book.title}${book.subtitle ? `: ${book.subtitle}` : ""} book cover`}
            width={book.coverImageWidth}
            height={book.coverImageHeight}
            priority={priority && index < 2}
            sizes={
              isLibrary
                ? "(min-width: 1024px) 150px, (min-width: 640px) 20vw, 42vw"
                : "(min-width: 1024px) 230px, (min-width: 640px) 30vw, 42vw"
            }
            className={cn(
              "h-auto w-full object-contain",
              isLibrary ? "max-h-56 sm:max-h-64" : "max-h-[25rem]",
            )}
          />
        </figure>
      ))}
    </div>
  );
}
