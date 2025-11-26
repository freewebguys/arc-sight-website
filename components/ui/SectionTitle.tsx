import { ReactNode } from "react";
import clsx from "clsx";

export function SectionTitle({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) {
  const anchorId = id ? `${id}-title` : undefined;
  return (
    <h2
      id={anchorId}
      className="text-3xl font-semibold tracking-tight text-[--color-charcoal] mb-[--pad-lg] scroll-mt-[6rem]"
    >
      <a
        href={id ? `#${id}` : undefined}
        className="no-underline hover:underline decoration-[--color-blue] decoration-2 underline-offset-4"
      >
        {children}
      </a>
    </h2>
  );
}

export function SubHeading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h3 className={clsx("mb-[--pad-sm]", className)}>{children}</h3>;
}

export function MetadataLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={clsx(
        "mb-[--pad-xs] text-[--color-muted] uppercase tracking-[0.15em] text-xs",
        "px-[--pad-sm] py-[--pad-xs] border border-[--color-border] rounded-[--radius-sm]",
        className,
      )}
    >
      {children}
    </h4>
  );
}


