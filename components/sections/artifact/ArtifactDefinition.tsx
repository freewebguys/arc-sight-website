"use client";

import { Section } from "@/components/layout/Section";
import { SectionTitle, MetadataLabel } from "@/components/ui/SectionTitle";
import { Panel } from "@/components/ui/Panel";
import { Stack } from "@/components/ui/Stack";
import { ContainerNarrow } from "@/components/ui/ContainerNarrow";
import { H3 } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";

export default function ArtifactDefinition() {
  return (
    <Section
      id="artifact-definition"
      variant="soft"
      as="article"
      role="definition"
    >
      <SectionTitle>What is a Structural Stability Record?</SectionTitle>

      <ContainerNarrow>
        <p>
          A Structural Stability Record is an issued digital artifact that
          captures how an architecture behaves across time, change, and stress.
          It does not inspect source code — instead, it preserves the traces of
          structural behavior that emerge and recur under modification.
        </p>
      </ContainerNarrow>

      <Panel variant="document">
        <H3>Formal Definition</H3>
        <MetadataLabel>Institutional Record Artifact</MetadataLabel>

        <p>A timestamped architectural evidence file designed to be:</p>

        <Stack gap="sm" direction="row-md">
          <Badge label="Stored" variant="subtle" />
          <Badge label="Compared" variant="subtle" />
          <Badge label="Referenced" variant="subtle" />
          <Badge label="Re-issued Over Time" variant="subtle" />
        </Stack>

        <Stack gap="sm" direction="row-md">
          <Badge label="Source-Code Free" variant="subtle" />
          <Badge label="IP-Neutral" variant="subtle" />
          <Badge label="Non-Scanning" variant="subtle" />
        </Stack>

        <p>
          It captures <strong>behavioral evidence</strong> — not just structural
          description.
        </p>
      </Panel>
    </Section>
  );
}


