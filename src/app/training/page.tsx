import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/features/home/CtaSection";
import { pageMetadata } from "@/lib/seo";
import {
  CapabilityDiagram,
  CertificationSection,
  CorporateSection,
  CurriculumSection,
  DeliverySection,
  HeroFeatures,
  LabsSection,
  PathsSection,
} from "@/features/training/TrainingSections";
import { HERO_FEATURES } from "@/data/training";

export const metadata: Metadata = pageMetadata({
  title: "TechLamp Academy | Technology training and capability building",
  description: "Learning paths, skills, labs and corporate training programmes for teams building technology capability. Programme details are being published.",
  path: "/training",
});

export default function TrainingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="TECHLAMP ACADEMY / PRACTICAL SKILLS FOR REAL IMPACT"
        title={
          <>
            Build technology.
            <br />
            Build capability.
          </>
        }
        lede="Practical learning programmes that turn emerging technology into confident teams and lasting capability."
        actions={
          <>
            <Button href="#paths" icon="arrow">Explore learning paths</Button>
            <Button href="/talk-to-an-expert" variant="secondary">Talk to an expert</Button>
          </>
        }
        extra={<HeroFeatures items={HERO_FEATURES} />}
        visual={<CapabilityDiagram />}
        crumbs={[{ label: "Training" }]}
      />
      <CurriculumSection />
      <PathsSection />
      <DeliverySection />
      <LabsSection />
      <CertificationSection />
      <CorporateSection />
      <CtaSection title="Build a training programme for your organisation." text="Start with a capability conversation. We will look at the skills your team needs and propose a format to match." />
    </PageShell>
  );
}
