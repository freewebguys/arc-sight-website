import clsx from "clsx";

export function ContainerNarrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("max-w-[65ch] mx-auto", className)}>{children}</div>
  );
}


