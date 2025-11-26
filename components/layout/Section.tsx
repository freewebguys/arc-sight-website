import clsx from "clsx";
import { ElementType } from "react";

type SectionVariant = "default" | "muted" | "soft";

type SectionProps<T extends ElementType> = {
  as?: T;
  id?: string;
  variant?: SectionVariant;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

const rhythmVariants: Record<SectionVariant, string> = {
  default: "py-[--rhythm-standard]",
  soft: "py-[--rhythm-expanded]",
  muted: "py-[--rhythm-compact]",
};

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-white",
  muted: "bg-[--color-soft-gray]",
  soft: "bg-[--color-subtle-gray] border-t border-b border-[--color-border]",
};

export function Section<T extends ElementType = "section">({
  as,
  id,
  variant = "default",
  children,
  className,
  ...props
}: SectionProps<T>) {
  const Component = as || "section";

  return (
    <Component
      id={id}
      data-variant={variant}
      role="region"
      aria-labelledby={id ? `${id}-title` : undefined}
      style={{ scrollMarginTop: "6rem" }}
      className={clsx(
        rhythmVariants[variant],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      <div className="w-full max-w-[var(--max-content,72rem)] mx-auto px-6 md:px-10">
        {children}
      </div>
    </Component>
  );
}

/*
  RULES:
  🚫 No center-aligned body text (except quotes or callouts)
  🚫 No arbitrary spacing classes like mt-16, pb-20 — use tokens only
  🚫 No gradients, oversized shadows, or vibrant marketing colors
  🚫 No full-width Panels unless variant="artifact"
  ✔ Typography must follow H1/H2/H3/SectionTitle roles exactly
  ✔ Only Hero may use min-h-screen or min-h-[--min-height-screen]
*/



