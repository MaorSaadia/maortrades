export function KeyTakeaways({ items }: { items?: string[] }) {
  if (!items?.length) {
    return null;
  }

  return (
    <section aria-labelledby="key-takeaways" className="border-y border-border py-8">
      <h2 id="key-takeaways" className="label text-gold">
        Key Takeaways
      </h2>
      <ol className="mt-5 grid gap-4">
        {items.map((item, index) => (
          <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-4">
            <span className="label text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="body-sm border-b border-border pb-4 text-foreground">
              {item}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
