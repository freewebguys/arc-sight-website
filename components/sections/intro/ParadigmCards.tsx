"use client";

import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Panel } from "@/components/ui/Panel";
import { Stack } from "@/components/ui/Stack";
import { ContainerNarrow } from "@/components/ui/ContainerNarrow";
import { H3 } from "@/components/ui/Heading";

export default function ParadigmCards() {
  return (
    <Section id="paradigm-cards" variant="muted" as="section">
      <SectionTitle>
        Stability is a temporal property — not a static condition.
      </SectionTitle>

      <ContainerNarrow>
        <p>
          A structural record does not simply describe an architecture — it
          captures how structure behaves across time, change, and stress. This
          behavioral view introduces three core stability paradigms.
        </p>
      </ContainerNarrow>

      <Stack gap="lg" direction="row-md">
        <Panel variant="document" className="flex-1">
          <H3>Recurrence</H3>
          <p>
            Structural behavior reappears in consistent patterns — not just in
            surface defects, but in how code resists or adapts to change.
            Recurrence is the first signal of architectural drift.
          </p>
        </Panel>

        <Panel variant="document" className="flex-1">
          <H3>Deepening Structural Spread</H3>
          <p>
            Instability moves from isolated modules into shared dependencies,
            creating hidden coupling and risk concentration. This “spread” is
            rarely visible in static documentation or diagrams.
          </p>
        </Panel>

        <Panel variant="document" className="flex-1">
          <H3>Verified Recovery</H3>
          <p>
            The most important signal: a structure that has previously resisted
            stress can adapt and recover. Behavioral recovery is the strongest
            indicator of architecture readiness.
          </p>
        </Panel>
      </Stack>
    </Section>
  );
}


