import clsx from "clsx";
import { ElementType, CSSProperties } from "react";

type SectionVariant = "default" | "muted" | "soft";

type SectionProps<T extends ElementType> = {
  as?: T;
  variant?: SectionVariant;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
} & React.ComponentPropsWithoutRef<T>;

const rhythmVariants: Record<SectionVariant, string> = {
  default: "py-[var(--rhythm-standard)]", // Narrative / Discovery
  soft: "py-[var(--rhythm-expanded)]", // Institutional / Registry / Definition
  muted: "py-[var(--rhythm-compact)]", // Analytical / Reasoning
};

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-white",
  muted: "bg-[--color-soft-gray]",
  soft: "bg-[--color-subtle-gray] border-t border-b border-[--color-border]",
};

export function Section<T extends ElementType = "section">({
  as,
  variant = "default",
  children,
  className,
  style,
  ...props
}: SectionProps<T>) {
  const Component = as || "section";

  return (
    <Component
      data-variant={variant}
      // 🔑 Scroll offset so sticky header doesn't cover anchors
      style={{ scrollMarginTop: "6rem", ...(style || {}) }}
      className={clsx(
        rhythmVariants[variant],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {/* 🔑 VALID max-width using CSS var WITH fallback */}
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



