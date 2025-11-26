"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/config/sections";

const SECTION_IDS = SECTIONS.map((s) => s.id);

export function useSectionObserver() {
  const [activeId, setActiveId] = useState<string>("top");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-20% 0px -50% 0px",
      },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return activeId;
}


