import clsx from "clsx";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function H1({ children, className }: HeadingProps) {
  return <h1 className={clsx(className)}>{children}</h1>;
}

export function H2({ children, className }: HeadingProps) {
  return <h2 className={clsx(className)}>{children}</h2>;
}

export function H3({ children, className }: HeadingProps) {
  return <h3 className={clsx(className)}>{children}</h3>;
}

export function H4({ children, className }: HeadingProps) {
  return <h4 className={clsx(className)}>{children}</h4>;
}


