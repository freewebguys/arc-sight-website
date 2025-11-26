import clsx from "clsx";
import { ReactNode } from "react";

type PanelVariant = "document" | "registry" | "artifact" | "callout";

const baseVariants: Record<PanelVariant, string> = {
  // Narrative / document panels: calm background, border, subtle elevation
  document:
    "rounded-[--radius-md] bg-[--color-soft-gray] border border-[--color-border] shadow-[--shadow-panel] p-[--pad-lg]",
  // Registry entries: stronger institutional framing
  registry:
    "rounded-[--radius-md] bg-[--color-subtle-gray] border border-[--color-border] shadow-[--shadow-panel] p-[--pad-lg]",
  // Artifact: neutral, undecorated container
  artifact: "rounded-[--radius-md] bg-white p-[--pad-lg]",
  // Callout: left accent, soft background, narrative width via widthVariants
  callout:
    "border-l-4 border-[--color-blue] bg-[--color-soft-gray] p-[--pad-md]",
};

const widthVariants: Record<PanelVariant, string> = {
  document: "max-w-[72rem] mx-auto",
  registry: "max-w-[72rem] mx-auto",
  artifact: "w-full",
  callout: "max-w-[65ch] mx-auto shadow-[--shadow-panel]",
};

export function Panel({
  children,
  variant = "document",
  className,
  ...props
}: {
  children: ReactNode;
  variant?: PanelVariant;
  className?: string;
} & React.HTMLAttributes<HTMLElement>) {
  const Wrapper: "article" | "div" =
    variant === "document" || variant === "registry" ? "article" : "div";

  return (
    <Wrapper
      className={clsx(
        "panel-content",
        baseVariants[variant],
        widthVariants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Wrapper>
  );
}

