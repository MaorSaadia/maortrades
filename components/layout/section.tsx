import { cn } from "@/lib/utils";

type SectionSurface = "default" | "surface" | "muted" | "dark";

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
  surface?: SectionSurface;
};

const surfaceClass: Record<SectionSurface, string> = {
  default: "bg-background text-foreground",
  surface: "bg-surface text-foreground",
  muted: "bg-muted text-foreground",
  dark: "bg-navy text-ivory",
};

export function Section({
  className,
  surface = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-16 md:py-24", surfaceClass[surface], className)}
      {...props}
    />
  );
}
