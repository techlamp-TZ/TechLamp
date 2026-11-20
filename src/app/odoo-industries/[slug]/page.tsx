import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/features/home/CtaSection";
import { OdooIndustryPage } from "@/features/odoo/OdooIndustryPage";
import { ODOO_INDUSTRIES, getOdooIndustry } from "@/data/odoo-industries";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return ODOO_INDUSTRIES.map((i) => ({ slug: i.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const i = getOdooIndustry(slug);
  if (!i) return {};
  return pageMetadata({ title: `${i.name} | Odoo Industries`, description: i.challenge, path: `/odoo-industries/${slug}` });
}

export default async function OdooIndustryRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getOdooIndustry(slug);
  if (!industry) notFound();
  const Icon = industry.icon;

  return (
    <PageShell>
      <PageHero
        tone="paper"
        crumbs={[
          { label: "Business Apps", href: "/business-apps" },
          { label: "Odoo Industries", href: "/odoo-industries" },
          { label: industry.name },
        ]}
        eyebrow="Odoo ERP"
        title={industry.name}
        lede={industry.challenge}
        actions={
          <>
            <Button href="/talk-to-an-expert" icon="arrow">
              Talk to an expert
            </Button>
            <Button href="/odoo-industries" variant="secondary">
              All Odoo industries
            </Button>
          </>
        }
        extra={
          <div className="mt-6 flex items-center gap-3">
            <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-fill text-white">
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
            </span>
          </div>
        }
      />
      <OdooIndustryPage industry={industry} />
      <CtaSection title="Let's talk about your sector." text="Every sector runs Odoo differently. Tell us what matters most in yours." />
    </PageShell>
  );
}
