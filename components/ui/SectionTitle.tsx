import { ReactNode } from "react";

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
      className="text-3xl font-semibold tracking-tight mb-[--pad-lg] scroll-mt-[6rem]"
    >
      <a
        href={id ? `#${id}` : undefined}
        className="no-underline hover:underline"
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
  return <h3 className={`mb-2 ${className ?? ""}`}>{children}</h3>;
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
      className={`mb-1 font-mono uppercase tracking-wide ${className ?? ""}`}
    >
      {children}
    </h4>
  );
}


