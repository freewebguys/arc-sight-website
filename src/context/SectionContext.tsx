"use client";

import { createContext, useContext } from "react";
import { useSectionObserver } from "@/hooks/useSectionObserver";

const SectionContext = createContext<string>("top");

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const active = useSectionObserver();
  return (
    <SectionContext.Provider value={active}>
      {children}
    </SectionContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(SectionContext);
}


