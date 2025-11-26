"use client";

import { Section } from "@/components/layout/Section";
import { SectionTitle, MetadataLabel } from "@/components/ui/SectionTitle";
import { Panel } from "@/components/ui/Panel";
import { Stack } from "@/components/ui/Stack";
import { ContainerNarrow } from "@/components/ui/ContainerNarrow";
import { H3 } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function FoundingPartnerInvitation() {
  return (
    <Section
      id="founding-partner"
      variant="muted"
      as="section"
      role="region"
      aria-labelledby="founding-partner-title"
    >
      <SectionTitle id="founding-partner">
        Founding Evidence Partner Invitation
      </SectionTitle>

      <ContainerNarrow>
        <p itemProp="description">
          Selected organizations are invited to participate in the establishment
          of the Structural Stability Record Issuance Network — a governance-grade,
          cross-institutional framework for issuing behavioral architectural evidence.
        </p>
      </ContainerNarrow>

      <Panel
        variant="callout"
        aria-label="Founding Issuer Invitation Panel"
        itemScope
        itemType="https://schema.org/InviteAction"
      >
        {/* Institutional metadata */}
        <meta
          itemProp="sender"
          content="ArcSight Structural Records Network"
        />
        <meta
          itemProp="recipient"
          content="Eligible Architecture-Steward Organizations"
        />
        <meta itemProp="eligibleRegion" content="Global" />
        <meta itemProp="inLanguage" content="en" />
        <meta
          itemProp="audience"
          content="Institutional Architecture-Steward Organizations"
        />
        <meta
          itemProp="offerType"
          content="Founding Issuer Network Invitation"
        />
        <meta itemProp="isAcceptingApplications" content="true" />
        <meta itemProp="actionStatus" content="PotentialActionStatus" />
        <meta itemProp="validThrough" content="2025-12-31" />
        <meta
          itemProp="description"
          content="Institutional invitation to join the Founding Evidence Issuance Network for Structural Stability Records."
        />

        <H3>Founding Issuer Participation</H3>
        <MetadataLabel>Formal Institutional Invitation</MetadataLabel>

        <p itemProp="description">
          Founding Issuer organizations will help shape certification protocols,
          registry standards, and institutional record formats used to evaluate
          and preserve architectural behavior over time.
        </p>

        <Stack gap="sm" direction="row-md">
          <Badge label="Founding Issuer Status" variant="subtle" />
          <Badge label="Governance Participation" variant="subtle" />
          <Badge label="Evidence Certification Role" variant="subtle" />
        </Stack>

        <Stack gap="sm" direction="row-md">
          <Badge
            label="Eligible Region: Global"
            variant="subtle"
            itemProp="eligibleRegion"
          />
          <Badge
            label="Invitation Valid Through: 2025-12-31"
            variant="subtle"
            itemProp="validThrough"
          />
          <Badge
            label="Accepting Applications"
            variant="subtle"
            itemProp="isAcceptingApplications"
          />
        </Stack>

        <Stack gap="md" direction="col">
          <Button
            as="a"
            href="#partner-application"
            variant="primary"
            size="lg"
            itemProp="potentialAction"
          >
            Submit Expression of Interest
          </Button>
        </Stack>
      </Panel>
    </Section>
  );
}



