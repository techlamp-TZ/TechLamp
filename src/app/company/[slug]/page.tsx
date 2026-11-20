import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/features/home/CtaSection";
import { COMPANY_SECTIONS, getCompanySection } from "@/data/company";
import { CapabilityModelBody, CareersBody, DeliveryBody, ExpertiseBody, MissionBody, StoryBody, ValuesBody } from "@/features/company/CompanySections";
import { pageMetadata } from "@/lib/seo";

const BODIES = {
  story: StoryBody,
  mission: MissionBody,
  "capability-model": CapabilityModelBody,
  delivery: DeliveryBody,
  expertise: ExpertiseBody,
  values: ValuesBody,
  careers: CareersBody,
} as const;

export function generateStaticParams() {
  return COMPANY_SECTIONS.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const section = getCompanySection(slug);
  if (!section) return {};
  return pageMetadata({ title: `${section.title} | Company`, description: section.blurb, path: `/company/${slug}` });
}

export default async function CompanySectionRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const section = getCompanySection(slug);
  if (!section) notFound();
  const Body = BODIES[slug as keyof typeof BODIES];

  return (
    <PageShell>
      <PageHero
        tone="paper"
        crumbs={[{ label: "Company", href: "/company" }, { label: section.title }]}
        eyebrow={`${section.index} / Company`}
        title={section.title}
        lede={section.blurb}
        actions={
          <>
            <Button href="/talk-to-an-expert" icon="arrow">
              Talk to an expert
            </Button>
            <Button href="/company" variant="secondary">
              All about TechLamp
            </Button>
          </>
        }
      />
      <Body />
      <CtaSection title="Build the future with us." text="Start a conversation about a project, a training programme or working together." />
    </PageShell>
  );
}
