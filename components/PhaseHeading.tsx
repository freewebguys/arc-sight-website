export function PhaseHeading({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="phase-heading border-t border-[--color-border] pt-[--space-section-y] mb-[--pad-md] text-[--color-muted] text-sm tracking-[0.15em] uppercase"
      role="separator"
      aria-hidden="true"
    >
      {children}
    </div>
  );
}


