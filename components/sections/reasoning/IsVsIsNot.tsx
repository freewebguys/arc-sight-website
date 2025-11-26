"use client";

import { Section } from "@/components/layout/Section";
import { SectionTitle, MetadataLabel } from "@/components/ui/SectionTitle";
import { Panel } from "@/components/ui/Panel";
import { Stack } from "@/components/ui/Stack";
import { ContainerNarrow } from "@/components/ui/ContainerNarrow";
import { H3 } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";

export default function IsVsIsNot() {
  return (
    <Section id="is-vs-is-not" variant="muted" as="section" role="definition">
      <SectionTitle>What ArcSight is — and what it is not</SectionTitle>

      <ContainerNarrow>
        <p>
          A Structural Stability Record is not documentation or static
          analysis. It is an issued, timestamped behavioral artifact — designed
          to preserve structural evidence across change, teams, and time. It is
          neither a source-code scanner nor a governance dashboard.
        </p>
      </ContainerNarrow>

      <Stack gap="lg" direction="row-md">
        {/* Formal Issuable Concept — Correct: document */}
        <Panel variant="document">
          <Badge label="What It Is" variant="default" />
          <H3>Structural Evidence Artifact</H3>
          <MetadataLabel>Behavior-Based Institutional Record</MetadataLabel>
          <p>
            A formally issued digital record that captures how an architecture
            behaves — not how it looks. Designed to be preservable, comparable,
            and re-issued over time.
          </p>
          <Stack gap="sm" direction="row-md">
            <Badge label="Issued Record" variant="subtle" />
            <Badge label="Behavioral Evidence" variant="subtle" />
            <Badge label="Re-Issuable" variant="subtle" />
          </Stack>
        </Panel>

        {/* Conceptual Clarifier — Correct: callout */}
        <Panel variant="callout">
          <Badge label="What It Is Not" variant="default" />
          <H3>Not Documentation or Scanning</H3>
          <MetadataLabel>What It Explicitly Replaces</MetadataLabel>
          <p>
            Not a code scanner, not an architecture diagram, not an ADR, and
            not a developer report. It complements — rather than replaces —
            these tools by preserving structural behavior across change.
          </p>
          <Stack gap="sm" direction="row-md">
            <Badge label="Not a Static Diagram" variant="subtle" />
            <Badge label="Not Code Scanning" variant="subtle" />
            <Badge label="Not an ADR" variant="subtle" />
          </Stack>
        </Panel>
      </Stack>
    </Section>
  );
}


