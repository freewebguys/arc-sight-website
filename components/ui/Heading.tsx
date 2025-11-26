import clsx from "clsx";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function H1({ children, className }: HeadingProps) {
  return (
    <h1
      className={clsx(
        "font-semibold leading-tight tracking-tight text-[--color-charcoal]",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: HeadingProps) {
  return (
    <h2
      className={clsx(
        "font-semibold leading-snug tracking-tight text-[--color-charcoal]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className }: HeadingProps) {
  return (
    <h3
      className={clsx(
        "font-medium tracking-[0.08em] text-[--color-muted] uppercase text-xs",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className }: HeadingProps) {
  return (
    <h4
      className={clsx(
        "font-medium leading-relaxed text-[--color-charcoal]",
        className,
      )}
    >
      {children}
    </h4>
  );
}


