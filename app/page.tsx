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
import { PhaseHeading } from "@/components/PhaseHeading";

export default function Home() {
  return (
    <>
      {/* 📖 Discovery Phase — narrative, no issuance */}
      <section aria-label="Discovery Phase">
        <Hero />
        <ProblemStatement />
        <ParadigmCards />
      </section>

      <PhaseHeading>
        Behavioral Evidence Artifact — Conceptual Definition Phase
      </PhaseHeading>

      {/* 📘 Artifact Definition Phase — soft tone, structured evidence */}
      <section aria-label="Artifact Definition Phase">
        <ArtifactDefinition />
        <EvidenceFlow />
        <RecordPreview />
      </section>

      <PhaseHeading>Analytical Reasoning Phase</PhaseHeading>

      {/* 🧠 Reasoning & Decision Phase — muted tone, analytical */}
      <section aria-label="Analytical Reasoning Phase">
        <UseCases />
        <IsVsIsNot />
      </section>

      <PhaseHeading>Institutional Registry & Issuance Phase</PhaseHeading>

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
