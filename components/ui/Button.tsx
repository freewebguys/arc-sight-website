import { ElementType, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost" | "quiet";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

export function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps<T>) {
  const Component = as || "button";

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-[--color-blue] text-white border border-[--color-blue] hover:bg-[#1f57d1]",
    secondary:
      "bg-white text-[--color-charcoal] border border-[--color-border] hover:bg-[#F9FAFB]",
    ghost:
      "bg-transparent text-[--color-charcoal] hover:bg-[--color-soft-gray]",
    quiet:
      "bg-transparent text-[--color-muted] hover:text-[--color-charcoal]",
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  return (
    <Component
      className={clsx(
        "inline-flex items-center justify-center rounded-full font-medium transition-colors shadow-sm focus-visible:outline-none",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}


