import { cn } from "@/lib/utils";

type EyebrowProps = React.ComponentPropsWithoutRef<"p">;

export function Eyebrow({ className, ...props }: EyebrowProps) {
  return <p className={cn("eyebrow text-gold", className)} {...props} />;
}
