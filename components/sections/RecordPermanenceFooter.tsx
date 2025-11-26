"use client";

import { Section } from "@/components/layout/Section";
import { Panel } from "@/components/ui/Panel";
import { Stack } from "@/components/ui/Stack";
import { ContainerNarrow } from "@/components/ui/ContainerNarrow";
import { H3 } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { MetadataLabel } from "@/components/ui/SectionTitle";

export default function RecordPermanenceFooter() {
  return (
    <Section
      variant="soft"
      as="section"
      role="contentinfo"
      aria-label="Record Permanence Declaration"
    >
      <Panel
        variant="document"
        aria-label="Record Permanence Manifest"
        itemScope
        itemType="https://schema.org/CreativeWork"
      >
        {/* Institutional Metadata (Machine-Readable, Non-Visual) */}
        <meta
          itemProp="provider"
          content="ArcSight Structural Records Network"
        />
        <meta itemProp="issuedBy" content="ArcSight" />
        <meta
          itemProp="recordClass"
          content="Permanent Governance Artifact"
        />
        <meta
          itemProp="archivedAt"
          content="Pending — Ledger Anchor Upon Final Issuance"
        />
        <meta
          itemProp="conformsTo"
          content="ISO 15489; ISO 14721; W3C Linked Data; EU AI Act Evidence Compliance"
        />
        <meta
          itemProp="encodingFormat"
          content="application/x-behavioral-evidence"
        />
        <meta
          itemProp="digitalSourceType"
          content="Behavioral Evidence Format (.aev)"
        />
        <meta itemProp="inLanguage" content="en" />
        <meta itemProp="validIn" content="Global" />
        <meta
          itemProp="temporalCoverage"
          content="Architecture lifespan — continuous"
        />
        <meta
          itemProp="usageInfo"
          content="Permanent Retention — Governance-Grade Structural Evidence"
        />
        <meta
          itemProp="persistentIdentifier"
          content="Pending Ledger Registration"
        />

        <H3>Record Permanence & Retention</H3>
        <MetadataLabel>Legal & Institutional Preservation</MetadataLabel>

        <p itemProp="description">
          This artifact is classified as a{" "}
          <strong>Permanent Structural Stability Record</strong>. Once issued,
          it remains valid beyond team turnover, platform shifts, refactors, or
          migration — as long as structural behavioral continuity is preserved.
        </p>

        <Stack gap="sm" direction="row-md">
          <Badge
            label="Retention: Permanent"
            variant="default"
            itemProp="usageInfo"
            data-retention="permanent"
          />
          <Badge
            label="Format: Behavioral Evidence (.aev)"
            variant="subtle"
            itemProp="digitalSourceType"
          />
          <Badge
            label="MIME: application/x-behavioral-evidence"
            variant="subtle"
            itemProp="encodingFormat"
          />
        </Stack>

        <p itemProp="description">
          A Permanent Record may be <strong>re-issued</strong>, but not
          overwritten. New versions are linked through{" "}
          <strong>structural continuity</strong>, not through mutable source
          code.
        </p>

        <Stack gap="sm" direction="row-md">
          <Badge label="Ledger-Anchor Ready" variant="subtle" />
          <Badge label="Re-Issuable" variant="subtle" />
          <Badge label="Referenceable" variant="subtle" />
        </Stack>

        <p aria-label="Permanence Declaration" itemProp="description">
          Structural Stability Records are designed for institutional memory,
          architectural due diligence, and cross-boundary preservation. They
          remain valid independent of platforms, vendors, or system ownership.
        </p>
      </Panel>
    </Section>
  );
}



