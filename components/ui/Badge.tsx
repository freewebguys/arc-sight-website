import clsx from "clsx";

type BadgeVariant = "default" | "subtle" | "blue";

export function Badge({
  label,
  variant = "default",
  className,
}: {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}) {
  const variantClasses: Record<BadgeVariant, string> = {
    default: "bg-gray-100 text-[--color-charcoal]",
    subtle: "bg-gray-50 text-[--color-muted] border border-gray-200",
    blue: "bg-[--color-blue-light] text-[--color-blue]",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variantClasses[variant],
        className,
      )}
    >
      {label}
    </span>
  );
}


