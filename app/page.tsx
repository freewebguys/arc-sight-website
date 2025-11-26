import Hero from "@/components/sections/intro/Hero";
import ProblemStatement from "@/components/sections/intro/ProblemStatement";
import ParadigmCards from "@/components/sections/intro/ParadigmCards";

import ArtifactDefinition from "@/components/sections/artifact/ArtifactDefinition";
import EvidenceFlow from "@/components/sections/artifact/EvidenceFlow";
import RecordPreview from "@/components/sections/artifact/RecordPreview";

import UseCases from "@/components/sections/reasoning/UseCases";
import IsVsIsNot from "@/components/sections/reasoning/IsVsIsNot";

import EvidenceRegistry from "@/components/sections/registry/EvidenceRegistry";
import FoundingPartnerInvitation from "@/components/sections/registry/FoundingPartnerInvitation";
import PartnerApplication from "@/components/sections/registry/PartnerApplication";
import RecordPermanenceFooter from "@/components/sections/RecordPermanenceFooter";

export default function Home() {
  return (
    <>
      {/* 📖 Discovery Phase — narrative, no issuance */}
      <section aria-label="Discovery Phase">
        <Hero />
        <ProblemStatement />
        <ParadigmCards />
      </section>

      <div
        role="separator"
        aria-label="Behavioral Evidence Artifact — Conceptual Definition Phase"
        className="
          w-full max-w-[var(--max-content,72rem)] mx-auto
          border-t border-[--color-border]
          text-[--color-muted] uppercase tracking-[0.15em]
          text-xs py-[--pad-sm] mt-[--pad-lg] mb-[--pad-md]
        "
      >
        Behavioral Evidence Artifact — Conceptual Definition Phase
      </div>

      {/* 📘 Artifact Definition Phase — soft tone, structured evidence */}
      <section aria-label="Artifact Definition Phase">
        <ArtifactDefinition />
        <EvidenceFlow />
        <RecordPreview />
      </section>

      <div
        role="separator"
        aria-label="Analytical Reasoning Phase"
        className="
          w-full max-w-[var(--max-content,72rem)] mx-auto
          border-t border-[--color-border]
          text-[--color-muted] uppercase tracking-[0.15em]
          text-xs py-[--pad-sm] mt-[--pad-lg] mb-[--pad-md]
        "
      >
        Analytical Reasoning Phase
      </div>

      {/* 🧠 Reasoning & Decision Phase — muted tone, analytical */}
      <section aria-label="Analytical Reasoning Phase">
        <UseCases />
        <IsVsIsNot />
      </section>

      <div
        role="separator"
        aria-label="Institutional Registry & Issuance Phase"
        className="
          w-full max-w-[var(--max-content,72rem)] mx-auto
          border-t border-[--color-border]
          text-[--color-muted] uppercase tracking-[0.15em]
          text-xs py-[--pad-sm] mt-[--pad-lg] mb-[--pad-md]
        "
      >
        INSTITUTIONAL REGISTRY & ISSUANCE PHASE
      </div>

      {/* 🏛 Issuance & Registry Phase — formal institutional tone */}
      <section aria-label="Issuance & Registry Phase">
        <EvidenceRegistry />
        <FoundingPartnerInvitation />
        <PartnerApplication />
      </section>

      <RecordPermanenceFooter />
    </>
  );
}
