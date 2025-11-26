"use client";

import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Panel } from "@/components/ui/Panel";
import { Stack } from "@/components/ui/Stack";
import { ContainerNarrow } from "@/components/ui/ContainerNarrow";
import { H3 } from "@/components/ui/Heading";

export default function ProblemStatement() {
  return (
    <Section id="problem" variant="muted" as="article">
      <SectionTitle>
        Architecture risk is not a snapshot — it is a behavior.
      </SectionTitle>

      <ContainerNarrow>
        <Stack gap="md" direction="col">
          <p>
            Architecture doesn&apos;t degrade overnight — it shifts, bends, and
            subtly resists change in ways that are rarely captured by diagrams,
            code reviews, or system documentation. The indicators of structural
            instability don&apos;t live in the code — they live in how the code
            responds to change over time.
          </p>

          <p>
            Today, teams rely on assumptions, tribal knowledge, or retroactive
            incident analysis to assess whether their architecture is actually
            ready to scale, refactor, or merge. But these methods provide no
            timestamped, verifiable record of structural stability — and
            therefore cannot support institutional judgment, cross-team trust,
            or governance.
          </p>

          <Panel variant="callout">
            <H3>Key Insight</H3>
            <p>
              Stability is not a property of code — it is a property of
              behavior. And behavior can be preserved, compared, measured, and
              issued as evidence.
            </p>
          </Panel>
        </Stack>
      </ContainerNarrow>
    </Section>
  );
}


