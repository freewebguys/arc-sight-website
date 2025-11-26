"use client";

import { Section } from "@/components/layout/Section";
import { SectionTitle, MetadataLabel } from "@/components/ui/SectionTitle";
import { Panel } from "@/components/ui/Panel";
import { Stack } from "@/components/ui/Stack";
import { ContainerNarrow } from "@/components/ui/ContainerNarrow";
import { H3, H4 } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";

export default function EvidenceRegistry() {
  return (
    <Section
      id="registry"
      variant="soft"
      as="section"
      role="region"
      aria-labelledby="registry-title"
    >
      <SectionTitle id="registry">
        Evidence Registry — Active Structural Records
      </SectionTitle>

      <ContainerNarrow>
        <p>
          Once issued, Structural Stability Records become institutionally
          traceable, referenceable, and preservable. Each record can be
          compared, re-issued, cited in architectural decisions, and maintained
          permanently across organizational transitions.
        </p>
      </ContainerNarrow>

      <Stack gap="lg" direction="col" role="list">
        {/* Record Entry 1 */}
        <Panel
          variant="registry"
          aria-label="Registry Record Entry"
          itemScope
          itemType="https://schema.org/CreativeWork"
        >
          <H3 itemProp="identifier">SSR-2025-00127</H3>
          <MetadataLabel itemProp="name">
            Active Structural Evidence Record
          </MetadataLabel>

          <Stack gap="sm" direction="row-md">
            <Badge
              label="Status: Active"
              variant="default"
              itemProp="creativeWorkStatus"
            />
            <Badge
              label="Version: v1.0"
              variant="subtle"
              itemProp="version"
            />
            <Badge
              label="Issued: 2025-01-17"
              variant="subtle"
              itemProp="datePublished"
            />
            <Badge
              label="Retention: Permanent"
              variant="subtle"
              itemProp="usageInfo"
            />
          </Stack>

          <Stack gap="sm" direction="row-md">
            <Badge label="Behavioral Evidence" variant="subtle" />
            <Badge label="Propagation Mapping" variant="subtle" />
            <Badge label="Verified Recovery" variant="subtle" />
          </Stack>

          <Stack gap="sm" direction="col">
            <H4>Issuance Context</H4>
            <p itemProp="description">
              Issued following a multi-team refactor assessment in preparation
              for scale and platform migration. Recovery behavior verified and
              preserved.
            </p>
          </Stack>
        </Panel>

        {/* Record Entry 2 */}
        <Panel
          variant="registry"
          aria-label="Registry Record Entry"
          itemScope
          itemType="https://schema.org/CreativeWork"
        >
          <H3 itemProp="identifier">SSR-2024-00488</H3>
          <MetadataLabel itemProp="name">
            Archived Stability Record
          </MetadataLabel>

          <Stack gap="sm" direction="row-md">
            <Badge
              label="Status: Archived"
              variant="default"
              itemProp="creativeWorkStatus"
            />
            <Badge
              label="Version: v2.3"
              variant="subtle"
              itemProp="version"
            />
            <Badge
              label="Issued: 2024-11-03"
              variant="subtle"
              itemProp="datePublished"
            />
            <Badge
              label="Retention: Permanent"
              variant="subtle"
              itemProp="usageInfo"
            />
          </Stack>

          <Stack gap="sm" direction="row-md">
            <Badge label="Recurrence Tracking" variant="subtle" />
            <Badge label="Institutional Audit" variant="subtle" />
            <Badge label="Risk Containment" variant="subtle" />
          </Stack>

          <Stack gap="sm" direction="col">
            <H4>Issuance Context</H4>
            <p itemProp="description">
              Recorded after stabilization of a legacy risk zone during
              organizational restructure. Formal archive: record is no longer
              re-issuable but remains institutionally preserved.
            </p>
          </Stack>
        </Panel>
      </Stack>

      {/* Governance Retention Notice */}
      <ContainerNarrow>
        <p aria-label="Registry Retention Notice">
          Records marked <strong>Permanent</strong> are institutionally
          preserved and remain referenceable — even after platform migrations,
          team transitions, or architectural evolution — ensuring continuity of
          structural knowledge.
        </p>
      </ContainerNarrow>
    </Section>
  );
}


