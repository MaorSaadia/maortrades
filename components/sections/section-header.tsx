import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/eyebrow";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="heading-lg mt-4 text-navy">{title}</h2>
      {description ? (
        <p className="body-lg mt-5 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
