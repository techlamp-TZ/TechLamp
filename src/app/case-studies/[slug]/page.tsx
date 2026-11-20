import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { CtaSection } from "@/features/home/CtaSection";
import { CaseStudyDetail } from "@/features/case-studies/CaseStudyDetail";
import { CASE_STUDIES, getCaseStudy } from "@/data/case-studies";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return pageMetadata({
    title: `${cs.title} (illustrative case study)`,
    description: cs.lede,
    path: `/case-studies/${cs.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <PageShell>
      <PageHero
        eyebrow={cs.sector}
        title={cs.title}
        lede={cs.lede}
        crumbs={[{ label: "Case Studies", href: "/case-studies" }, { label: cs.cardTitle }]}
        actions={<StatusBadge status={cs.status} className="!h-[32px] !px-[16px] !text-[10px]" />}
      />
      <CaseStudyDetail cs={cs} />
      <CtaSection title="Facing a similar challenge?" text="Let's talk about how this kind of approach could work for your organisation, and what it would need to be proven." />
    </PageShell>
  );
}
