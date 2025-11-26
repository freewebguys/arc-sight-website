export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-black text-[--color-soft-gray]"
    >
      <div className="w-full max-w-[var(--max-content,72rem)] mx-auto px-6 md:px-10 py-[--space-section-y] text-sm">
        <div className="text-xs font-semibold tracking-[0.15em] uppercase text-white mb-[--pad-sm]">
          ArcSight<span className="text-[--color-blue]">.ai</span>
        </div>
        <p className="text-[11px]">
          Structural Stability Records — institutional architectural evidence.
        </p>
      </div>
    </footer>
  );
}


