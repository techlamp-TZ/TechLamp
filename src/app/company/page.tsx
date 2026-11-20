import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { CtaSection } from "@/features/home/CtaSection";
import { CompanyGrid } from "@/features/company/CompanyGrid";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Company | About TechLamp",
  description: "How TechLamp works: connected disciplines, a clear delivery model, working principles and how to get in touch about careers.",
  path: "/company",
});

export default function CompanyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="WHO TECHLAMP IS / TECHNOLOGY + TRANSFORMATION"
        title={
          <>
            Technology.
            <br />
            People.
            <br />
            Progress.
          </>
        }
        lede="We help organisations turn technology into progress that people can see, use and sustain. Each topic below has its own page."
        crumbs={[{ label: "Company" }]}
      />
      <CompanyGrid />
      <CtaSection title="Build the future with us." text="Start a conversation about a project, a training programme or working together." />
    </PageShell>
  );
}
