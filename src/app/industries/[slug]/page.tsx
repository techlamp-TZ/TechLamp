import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/features/home/CtaSection";
import { IndustryPage } from "@/features/industries/IndustryPage";
import { INDUSTRIES, getIndustry } from "@/data/industries";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.id }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMetadata({ title: industry.name, description: industry.challenge, path: `/industries/${slug}` });
}

export default async function IndustryRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <PageShell>
      <PageHero
        tone="paper"
        crumbs={[{ label: "Industries", href: "/industries" }, { label: industry.name }]}
        eyebrow="Industry"
        title={industry.name}
        lede={industry.challenge}
        actions={
          <>
            <Button href="/talk-to-an-expert" icon="arrow">
              Talk to an expert
            </Button>
            <Button href="/industries" variant="secondary">
              All industries
            </Button>
          </>
        }
      />
      <IndustryPage industry={industry} />
      <CtaSection title="Let's talk about your industry." text="Every sector has its own regulations, systems and pressures. Tell us what matters most in yours." />
    </PageShell>
  );
}
