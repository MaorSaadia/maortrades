import Image from "next/image";
import type { Book } from "@/types/book";
import { cn } from "@/lib/utils";

type BookCoverProps = {
  book: Pick<
    Book,
    | "title"
    | "subtitle"
    | "series"
    | "author"
    | "level"
    | "coverImage"
    | "coverImageWidth"
    | "coverImageHeight"
  >;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

export function BookCover({
  book,
  priority = false,
  className,
  imageClassName,
}: BookCoverProps) {
  if (book.coverImage && book.coverImageWidth && book.coverImageHeight) {
    return (
      <div
        className={cn(
          "flex w-full items-center justify-center border border-border bg-surface p-3 shadow-refined",
          className,
        )}
      >
        <Image
          src={book.coverImage}
          alt={`${book.title}${book.subtitle ? `: ${book.subtitle}` : ""} book cover`}
          width={book.coverImageWidth}
          height={book.coverImageHeight}
          priority={priority}
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 220px, 70vw"
          className={cn("h-auto w-full object-contain", imageClassName)}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex aspect-[3/4.25] min-h-72 w-full flex-col justify-between overflow-hidden border border-gold/30 bg-navy p-6 text-ivory shadow-refined",
        className,
      )}
      aria-label={`${book.title} cover placeholder`}
      role="img"
    >
      <div aria-hidden="true" className="absolute inset-y-0 left-7 w-px bg-gold/35" />
      <div aria-hidden="true" className="absolute inset-x-6 top-14 h-px bg-ivory/12" />
      <div className="relative">
        <p className="label text-gold">{book.series ?? "MaorTrades"}</p>
      </div>
      <div className="relative">
        <p className="heading-md">{book.title}</p>
        {book.subtitle ? (
          <p className="body-sm mt-4 text-ivory/70">{book.subtitle}</p>
        ) : null}
      </div>
      <div className="relative flex items-center justify-between gap-4">
        <p className="label text-ivory/70">{book.author}</p>
        <p className="label text-gold">{book.level}</p>
      </div>
    </div>
  );
}
