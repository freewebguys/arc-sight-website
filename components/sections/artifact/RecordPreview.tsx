"use client";

import { Section } from "@/components/layout/Section";
import { SectionTitle, MetadataLabel } from "@/components/ui/SectionTitle";
import { Panel } from "@/components/ui/Panel";
import { Stack } from "@/components/ui/Stack";
import { ContainerNarrow } from "@/components/ui/ContainerNarrow";
import { H3, H4 } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";

export default function RecordPreview() {
  return (
    <Section
      variant="soft"
      as="article"
      role="figure"
      aria-label="Record Preview"
    >
      <SectionTitle>Visualizing a Structural Stability Record</SectionTitle>

      <Panel
        variant="document"
        aria-label="Behavioral Record Manifest"
        itemScope
        itemType="https://schema.org/CreativeWork"
      >
        <Stack gap="md" direction="col">
          <H3>Structural Stability Record</H3>
          <MetadataLabel>Issued Behavioral Evidence Artifact</MetadataLabel>

          <p>
            Rather than describing architecture, this record preserves how it
            behaved across time, change, and stress. It is captured, issued,
            and made referenceable — without revealing source code or IP.
          </p>

          {/* Metadata Block */}
          <Stack gap="sm" direction="col">
            <H4>Record Metadata</H4>
            <Stack gap="sm" direction="row-md">
              <Badge label="Record ID: SSR-2025-00127" variant="subtle" />
              <Badge label="Version: v1.0" variant="subtle" />
              <Badge label="Issued: 2025-01-17" variant="subtle" />
            </Stack>
            <Stack gap="sm" direction="row-md">
              <Badge label="Behavior-Based" variant="subtle" />
              <Badge label="Verifiable Format" variant="subtle" />
              <Badge label="Preservable" variant="subtle" />
            </Stack>
          </Stack>

          {/* Artifact Schema Definition */}
          <Stack gap="sm" direction="col">
            <H4>Artifact Schema</H4>
            <Stack gap="sm" direction="row-md">
              <Badge label="Type: Structural Stability Record" variant="subtle" />
              <Badge label="Category: Behavioral Evidence" variant="subtle" />
              <Badge label="Issuance Class: Formal Record" variant="subtle" />
              <Badge label="Retention: Permanent" variant="subtle" />
            </Stack>
          </Stack>

          {/* Evidence Contents */}
          <Stack gap="sm" direction="col">
            <H4>Evidence Contents</H4>
            <Stack gap="sm" direction="row-md">
              <Badge label="Change Sequence Analysis" variant="subtle" />
              <Badge label="Propagation Mapping" variant="subtle" />
              <Badge label="Recovery Verification" variant="subtle" />
            </Stack>
          </Stack>

          {/* Classification — Additional Digital Integrity */}
          <Stack gap="sm" direction="col">
            <H4>Integrity & Compliance</H4>
            <Stack gap="sm" direction="row-md">
              <Badge label="Source-Code Free" variant="subtle" />
              <Badge label="IP-Neutral" variant="subtle" />
              <Badge label="Audit-Ready" variant="subtle" />
            </Stack>
          </Stack>
        </Stack>
      </Panel>
    </Section>
  );
}


