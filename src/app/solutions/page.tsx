import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/features/home/CtaSection";
import { JourneyStrip } from "@/features/solutions/JourneyStrip";
import { SolutionAreaGrid } from "@/features/solutions/SolutionAreaGrid";
import { SolutionFinder } from "@/features/solutions/SolutionFinder";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Solutions",
  description: "TechLamp organises its work around the business problem you are solving, from customer experience and cost to automation, decisions and workforce capability.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Solutions" }]}
        eyebrow="Solutions"
        title={
          <>
            Business problems.
            <br />
            Connected solutions.
          </>
        }
        lede="TechLamp is organised around the problems you are solving, not the technologies underneath. Every solution follows one connected path from challenge to outcome. Each area below has its own page."
        actions={
          <>
            <Button href="#finder" icon="arrow">
              Find your solution
            </Button>
            <Button href="/talk-to-an-expert" variant="secondary">
              Talk to an expert
            </Button>
          </>
        }
      />
      <JourneyStrip />
      <SolutionAreaGrid />
      <SolutionFinder />
      <CtaSection title="Discuss your business challenge." text="Tell us what you are trying to solve and we will help you find the right connected solution." />
    </PageShell>
  );
}
