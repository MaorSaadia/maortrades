import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "gold" | "outline" | "text";
type ButtonSize = "sm" | "md";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

type ButtonAsButton = BaseProps & {
  href?: never;
} & Omit<React.ComponentPropsWithoutRef<"button">, "className">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-navy bg-navy text-ivory hover:bg-surface-dark hover:text-ivory",
  gold: "border border-gold bg-gold text-navy hover:bg-navy hover:text-ivory",
  outline:
    "border border-navy/25 bg-transparent text-navy hover:border-navy hover:bg-surface",
  text: "border border-transparent bg-transparent px-0 text-navy hover:text-gold",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-12 px-5 py-3 text-sm",
};

export function Button(props: ButtonProps) {
  if (isLinkButton(props)) {
    const {
      href,
      variant = "primary",
      size = "md",
      className,
      children,
      ...linkProps
    } = props;
    const classes = getButtonClasses({ variant, size, className });

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const {
    variant = "primary",
    size = "md",
    className,
    children,
    type = "button",
    ...buttonProps
  } = props;
  const classes = getButtonClasses({ variant, size, className });

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  );
}

function isLinkButton(props: ButtonProps): props is ButtonAsLink {
  return typeof (props as ButtonAsLink).href === "string";
}

function getButtonClasses({
  variant,
  size,
  className,
}: {
  variant: ButtonVariant;
  size: ButtonSize;
  className?: string;
}) {
  return cn(
    "inline-flex items-center justify-center rounded-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    variant === "text" ? "min-h-0 py-0" : sizeClasses[size],
    className,
  );
}
