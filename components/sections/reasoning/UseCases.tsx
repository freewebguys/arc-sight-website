"use client";

import { Section } from "@/components/layout/Section";
import { SectionTitle, MetadataLabel } from "@/components/ui/SectionTitle";
import { Panel } from "@/components/ui/Panel";
import { Stack } from "@/components/ui/Stack";
import { ContainerNarrow } from "@/components/ui/ContainerNarrow";
import { H3 } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";

export default function UseCases() {
  return (
    <Section variant="soft" as="section" id="use-cases">
      <SectionTitle>When structural records become necessary</SectionTitle>

      <ContainerNarrow>
        <p>
          Structural Stability Records are not required for every change. They
          become essential when architectural decisions carry institutional,
          financial, or operational risk — where stability must be verified, not
          assumed.
        </p>
      </ContainerNarrow>

      <Stack gap="lg" direction="row-md">
        <Panel variant="document">
          <Badge label="Scenario 1" variant="default" />
          <H3>Before scaling a product or team</H3>
          <MetadataLabel>Readiness Validation</MetadataLabel>
          <p>
            Determine whether the architecture can support new markets, higher
            change frequency, new domains, or parallel development teams.
          </p>
          <Stack gap="sm" direction="row-md">
            <Badge label="Scale Friction" variant="subtle" />
            <Badge label="Team Parallelization" variant="subtle" />
            <Badge label="Architecture Bottlenecks" variant="subtle" />
          </Stack>
        </Panel>

        <Panel variant="document">
          <Badge label="Scenario 2" variant="default" />
          <H3>After major refactors or platform shifts</H3>
          <MetadataLabel>Recovery Verification</MetadataLabel>
          <p>
            A recordable proof that the architecture did not just change, but
            has successfully adapted and stabilized after structural
            modification.
          </p>
          <Stack gap="sm" direction="row-md">
            <Badge label="Refactor Integrity" variant="subtle" />
            <Badge label="Behavior Preservation" variant="subtle" />
            <Badge label="Adaptive Recovery" variant="subtle" />
          </Stack>
        </Panel>

        <Panel variant="document">
          <Badge label="Scenario 3" variant="default" />
          <H3>During due diligence or compliance review</H3>
          <MetadataLabel>Institutional Evidence</MetadataLabel>
          <p>
            When architecture needs to be proven rather than described —
            especially for audits, M&amp;A, risk, or compliance requirements.
          </p>
          <Stack gap="sm" direction="row-md">
            <Badge label="Governance Asset" variant="subtle" />
            <Badge label="Timestamped Proof" variant="subtle" />
            <Badge label="Verifiable Record" variant="subtle" />
          </Stack>
        </Panel>

        <Panel variant="document">
          <Badge label="Scenario 4" variant="default" />
          <H3>When architecture becomes a strategic asset</H3>
          <MetadataLabel>Preservation of Architecture Memory</MetadataLabel>
          <p>
            Convert transient architectural understanding into persistent,
            transferable, and institutional knowledge.
          </p>
          <Stack gap="sm" direction="row-md">
            <Badge label="Knowledge Preservation" variant="subtle" />
            <Badge label="Institutional Memory" variant="subtle" />
            <Badge label="Architectural Audit Trail" variant="subtle" />
          </Stack>
        </Panel>
      </Stack>
    </Section>
  );
}


