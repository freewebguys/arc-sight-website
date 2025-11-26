"use client";

import { Section } from "@/components/layout/Section";
import { SectionTitle, MetadataLabel } from "@/components/ui/SectionTitle";
import { Panel } from "@/components/ui/Panel";
import { Stack } from "@/components/ui/Stack";
import { H3 } from "@/components/ui/Heading";
import { ContainerNarrow } from "@/components/ui/ContainerNarrow";
import { Badge } from "@/components/ui/Badge";

export default function EvidenceFlow() {
  return (
    <Section id="evidence-flow" variant="soft" as="section">
      <SectionTitle>
        How structural evidence is captured over time
      </SectionTitle>

      <ContainerNarrow>
        <p>
          Stability is not observed in a single moment — it must be derived from
          how structure behaves across multiple change events. Each event
          reveals how architecture either adapts, resists, or recovers.
        </p>
      </ContainerNarrow>

      <Stack gap="lg" direction="col-md">
        {/* Step 1 */}
        <Panel variant="document">
          <Badge label="1" variant="default" />
          <H3>Behavioral Observation</H3>
          <MetadataLabel>Recurrence Signal</MetadataLabel>
          <p>
            Collect evidence of recurring structural behavior under change —
            such as repeated defects, resistance to modification, or delayed
            adaptability.
          </p>
          <Stack gap="sm" direction="row-md">
            <Badge label="Change Event Logs" variant="subtle" />
            <Badge label="Failed Refactor Attempts" variant="subtle" />
            <Badge label="Stability Indicators" variant="subtle" />
          </Stack>
        </Panel>

        {/* Step 2 */}
        <Panel variant="document">
          <Badge label="2" variant="default" />
          <H3>Structural Spread Mapping</H3>
          <MetadataLabel>Propagated Risk Evidence</MetadataLabel>
          <p>
            Analyze how instability spreads into shared dependencies —
            increasing the structural risk footprint over time.
          </p>
          <Stack gap="sm" direction="row-md">
            <Badge label="Risk Propagation" variant="subtle" />
            <Badge label="Shared Dependencies" variant="subtle" />
            <Badge label="Hidden Coupling Patterns" variant="subtle" />
          </Stack>
        </Panel>

        {/* Step 3 */}
        <Panel variant="document">
          <Badge label="3" variant="default" />
          <H3>Verified Recovery</H3>
          <MetadataLabel>Restored Stability Proof</MetadataLabel>
          <p>
            Confirm that architecture has recovered — demonstrating adaptive
            resilience, reduced friction, and improved change readiness.
          </p>
          <Stack gap="sm" direction="row-md">
            <Badge label="Recovery Evidence" variant="subtle" />
            <Badge label="Behavioral Verification" variant="subtle" />
            <Badge label="Re-Issuable Record" variant="subtle" />
          </Stack>
        </Panel>
      </Stack>
    </Section>
  );
}


