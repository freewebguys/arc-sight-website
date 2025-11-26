"use client";

import { SECTIONS } from "@/config/sections";
import { useActiveSection } from "@/context/SectionContext";

const NAV_LINKS = SECTIONS.filter((s) => s.anchor).map((s) => ({
  id: s.id,
  label: s.label,
  href: `#${s.id}`,
}));

export default function Header() {
  const activeSection = useActiveSection();

  return (
    <header
      className="sticky top-0 z-50 border-b border-[--color-border] bg-white 
                 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm"
      role="banner"
    >
      <div className="w-full max-w-[var(--max-content,72rem)] mx-auto px-6 md:px-10 py-[--pad-md] flex items-center justify-between">
        {/* Brand — now semantically an Organization */}
        <a
          href="#top"
          className="text-xs font-semibold tracking-[0.15em] uppercase text-[--color-charcoal]"
          itemScope
          itemType="https://schema.org/Organization"
        >
          <span itemProp="name">ArcSight</span>
          <span className="text-[--color-blue]">.ai</span>
        </a>

        {/* Primary Institutional Navigation */}
        <nav
          className="hidden md:flex items-center gap-[--pad-md] text-sm"
          role="navigation"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={
                  isActive
                    ? "font-semibold text-[--color-charcoal]"
                    : "text-[--color-muted] hover:text-[--color-charcoal]"
                }
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}


