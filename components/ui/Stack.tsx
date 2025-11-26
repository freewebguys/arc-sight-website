import { ReactNode } from "react";
import clsx from "clsx";

export function Stack({
  children,
  gap = "md",
  direction = "col",
  className,
}: {
  children: ReactNode;
  gap?: "sm" | "md" | "lg";
  direction?: "row" | "col" | "row-md" | "col-md";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex",
        direction === "col"
          ? "flex-col"
          : direction === "row"
          ? "flex-row"
          : direction === "row-md"
          ? "flex-col md:flex-row"
          : "flex-row md:flex-col",
        {
          sm: "gap-2",
          md: "gap-6",
          lg: "gap-12",
        }[gap],
        className,
      )}
    >
      {children}
    </div>
  );
}


