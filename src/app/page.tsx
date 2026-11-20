import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { HeroSection } from "@/features/home/HeroSection";
import { BusinessStageSection } from "@/features/home/BusinessStageSection";
import { PlatformStripSection } from "@/features/home/PlatformStripSection";
import { LoopSection } from "@/features/home/LoopSection";
import { EnginesSection } from "@/features/home/EnginesSection";
import { OperationsSection } from "@/features/home/OperationsSection";
import { PlatformsSection } from "@/features/home/PlatformsSection";
import { ProgressSection } from "@/features/home/ProgressSection";
import { CtaSection } from "@/features/home/CtaSection";

export const metadata: Metadata = {
  title: { absolute: "TechLamp — Engineering intelligent progress" },
  alternates: { canonical: "/" },
};

// Re-generate at most every 5 minutes so the host CDN never pins stale HTML for a year.
export const revalidate = 300;

export default function HomePage() {
  return (
    <PageShell motion={false}>
      <HeroSection />
      <BusinessStageSection />
      <PlatformStripSection />
      <LoopSection />
      <EnginesSection />
      <OperationsSection />
      <PlatformsSection />
      <ProgressSection />
      <CtaSection />
    </PageShell>
  );
}
