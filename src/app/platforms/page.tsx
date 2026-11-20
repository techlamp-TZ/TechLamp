import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { PlatformStack } from "@/components/diagrams/PlatformStack";
import { CtaSection } from "@/features/home/CtaSection";
import { LayerGrid } from "@/features/platforms/LayerGrid";
import { LayerFlow, PlatformPrinciples } from "@/features/platforms/PlatformPrinciples";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Platforms",
  description: "How TechLamp connects workplace, customer, operations, automation, data, AI and cloud platforms into one system, keeping the tools your teams already trust.",
  path: "/platforms",
});

export default function PlatformsPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Platforms" }]}
        eyebrow="Platform ecosystem"
        title={
          <>
            Your platforms.
            <br />
            One connected system.
          </>
        }
        lede="We connect workplace, customer, operations, data, AI and cloud, preserving the tools your teams already trust. Each layer below has its own page."
        actions={
          <>
            <Button href="#layers" icon="arrow">
              Explore the layers
            </Button>
            <Button href="/talk-to-an-expert" variant="secondary">
              Talk to an expert
            </Button>
          </>
        }
        visual={
          <div>
            <PlatformStack />
            <p className="t-mono mt-3 text-[11px] uppercase leading-4 tracking-[0.08em] text-slate-2">Platforms shown are examples we work with; no partnership implied.</p>
          </div>
        }
      />
      <PlatformPrinciples />
      <LayerGrid />
      <LayerFlow />
      <CtaSection title="Map your platforms into one system." text="Tell us which tools your teams rely on. We will show where they connect today and where the gaps are." />
    </PageShell>
  );
}
