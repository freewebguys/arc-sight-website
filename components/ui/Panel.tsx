import clsx from "clsx";
import { ReactNode } from "react";

type PanelVariant = "document" | "registry" | "artifact" | "callout";

const panelVariants: Record<PanelVariant, string> = {
  document: "rounded-[--radius-md] bg-white shadow-sm p-[--pad-lg]",
  registry: "rounded-[--radius-md] bg-[--color-subtle-gray] p-[--pad-lg]",
  artifact: "p-[--pad-lg]",
  callout: "border-l-4 border-[--color-blue] bg-[--color-blue-light] p-[--pad-md]",
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
      className={clsx("panel-content", panelVariants[variant], className)}
      {...props}
    >
      {children}
    </Wrapper>
  );
}

