import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { ExpertWizard } from "@/features/expert/ExpertWizard";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Talk to an Expert",
  description: "A short guided conversation starter. Choose what matters most and TechLamp routes your request to the right specialist.",
  path: "/talk-to-an-expert",
});

export default function TalkToAnExpertPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Guided discovery / Up to 9 steps"
        title="Start with the outcome."
        lede="A short, structured conversation starter. Choose what matters most and we will route your request to the right specialist. The number of steps depends on your answers."
        crumbs={[{ label: "Talk to an Expert" }]}
        className="[&_h1]:normal-case"
      />
      <ExpertWizard />
    </PageShell>
  );
}
