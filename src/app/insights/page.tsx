import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { CtaSection } from "@/features/home/CtaSection";
import { InsightsExplorer } from "@/features/insights/InsightsExplorer";
import { AnatomySection, FeaturedInsight, SuggestSection, TopicsSection } from "@/features/insights/InsightsSections";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Insights | TechLamp field notes",
  description: "Short editorial field notes from TechLamp on approaching technology, data, AI and capability problems.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="TECHLAMP INTELLIGENCE / IDEAS, EVIDENCE, DIRECTION"
        title={
          <>
            Ideas for a smarter
            <br />
            digital future.
          </>
        }
        lede="Practical field notes from TechLamp editorial on how to approach technology-led change."
        crumbs={[{ label: "Insights" }]}
      />
      <Section tone="canvas" index="01" eyebrow="FROM THE DESK" title="Field notes." aside="Placeholder editorial content. Each note is marked PENDING PUBLICATION until it has been reviewed and released.">
        <InsightsExplorer />
      </Section>
      <FeaturedInsight />
      <TopicsSection />
      <AnatomySection />
      <SuggestSection />
      <CtaSection title="Turn insight into direction." text="Bring the problem you are working on and we will talk through how to approach it." />
    </PageShell>
  );
}
