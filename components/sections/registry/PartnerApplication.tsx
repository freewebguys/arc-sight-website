"use client";

import { Section } from "@/components/layout/Section";
import { SectionTitle, MetadataLabel } from "@/components/ui/SectionTitle";
import { Panel } from "@/components/ui/Panel";
import { Stack } from "@/components/ui/Stack";
import { ContainerNarrow } from "@/components/ui/ContainerNarrow";
import { H3 } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function PartnerApplication() {
  return (
    <Section
      id="partner-application"
      variant="default"
      as="section"
      role="form"
      aria-labelledby="partner-application-title"
    >
      <SectionTitle id="partner-application">
        Partner Application — Expression of Institutional Interest
      </SectionTitle>

      <ContainerNarrow>
        <p itemProp="description">
          Organizations may formally express interest in participating in the
          Structural Record Issuance Network. This is not a marketing request —
          it is an institutional submission to determine eligibility, issuance
          readiness, and governance alignment.
        </p>
      </ContainerNarrow>

      <Panel
        variant="document"
        aria-label="Partner Application Submission Panel"
        itemScope
        itemType="https://schema.org/JoinAction"
      >
        {/* Institutional metadata */}
        <meta itemProp="identifier" content="EOI-Submission" />
        <meta
          itemProp="agent"
          content="ArcSight Structural Records Network"
        />
        <meta itemProp="consent" content="InstitutionalIntentDeclaration" />
        <meta itemProp="actionStatus" content="PotentialActionStatus" />
        <meta itemProp="target" content="#partner-application" />

        <H3>Expression of Interest — Submission Form</H3>
        <MetadataLabel>Institutional Participation Request</MetadataLabel>

        <Stack gap="sm" direction="col">
          <p itemProp="description">
            This submission establishes intent to participate as an Issuing
            Organization. It does not create contractual obligations, but it
            begins the institutional review and eligibility process.
          </p>
        </Stack>

        <Stack gap="sm" direction="col">
          <MetadataLabel>Required Institutional Information</MetadataLabel>
          <Stack gap="sm" direction="row-md">
            <Badge
              label="Organization Name"
              variant="subtle"
              itemProp="applicant"
            />
            <Badge
              label="Primary Contact Role"
              variant="subtle"
              itemProp="contactPoint"
            />
            <Badge
              label="Jurisdiction / Region"
              variant="subtle"
              itemProp="eligibleRegion"
            />
            <Badge label="Record Issuance Capability" variant="subtle" />
          </Stack>
        </Stack>

        <Stack gap="sm" direction="col">
          <MetadataLabel>Submission Notes</MetadataLabel>
          <p itemProp="description">
            Submissions should reflect organizational intent to issue behavioral
            evidence-based records — not technical or tool-based reporting.
          </p>
        </Stack>

        <Stack gap="md" direction="col">
          <Button
            as="a"
            href="#partner-application-form"
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


