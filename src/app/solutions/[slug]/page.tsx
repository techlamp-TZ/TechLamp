import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/features/home/CtaSection";
import { SolutionAreaPage } from "@/features/solutions/SolutionAreaPage";
import { SOLUTION_AREAS, getSolutionArea } from "@/data/solutions";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return SOLUTION_AREAS.map((a) => ({ slug: a.id }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getSolutionArea(slug);
  if (!area) return {};
  return pageMetadata({ title: area.title, description: area.blurb, path: `/solutions/${slug}` });
}

export default async function SolutionAreaRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getSolutionArea(slug);
  if (!area) notFound();

  return (
    <PageShell>
      <PageHero
        tone="paper"
        crumbs={[{ label: "Solutions", href: "/solutions" }, { label: area.title }]}
        eyebrow="Solution area"
        title={area.title}
        lede={area.blurb}
        actions={
          <>
            <Button href="/talk-to-an-expert" icon="arrow">
              Talk to an expert
            </Button>
            <Button href="/solutions" variant="secondary">
              All solution areas
            </Button>
          </>
        }
      />
      <SolutionAreaPage area={area} />
      <CtaSection title="Discuss your business challenge." text="Tell us what you are trying to solve and we will help you find the right connected solution." />
    </PageShell>
  );
}
