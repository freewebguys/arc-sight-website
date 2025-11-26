"use client";

import { Section } from "@/components/layout/Section";
import { H1, H4 } from "@/components/ui/Heading";
import { Panel } from "@/components/ui/Panel";
import { Stack } from "@/components/ui/Stack";
import { Button } from "@/components/ui/Button";
import { MetadataLabel } from "@/components/ui/SectionTitle";

export default function Hero() {
  return (
    <Section
      id="top"
      as="header"
      variant="default"
      className="min-h-[--min-height-screen] flex items-center pt-[--pad-lg] md:pt-0"
    >
      {/* Layout container (Section provides max-width & padding) */}
      <div className="grid md:grid-cols-2 gap-[--pad-lg] w-full">
        {/* Left – Narrative Block */}
        <Stack gap="md" direction="col" className="self-center">
          <MetadataLabel>Structural Evidence Preservation</MetadataLabel>

          <H1>
            Structural Stability Records
            for Software Architecture.
          </H1>

          <p>
            Not analysis. Not advice. Not opinion.  
            A Structural Stability Record is a timestamped 
            architectural evidence file — preserved for scale, 
            stabilization, and due diligence decisions.
          </p>

          <Button
            as="a"
            href="#partner-application"
            variant="primary"
            size="lg"
            itemProp="potentialAction"
          >
            Become a Founding Evidence Partner
          </Button>
        </Stack>

        {/* Right – Conceptual Preview Artifact */}
        <Panel
          variant="document"
          aria-label="Conceptual Artifact Preview"
          className="self-center"
        >
          <Stack gap="sm" direction="col">
            <MetadataLabel>Conceptual Artifact Preview</MetadataLabel>
            <H4>Structural Stability Record</H4>
            <p>Timestamped • Comparable • Permanently Referenceable</p>
          </Stack>
        </Panel>
      </div>
    </Section>
  );
}

