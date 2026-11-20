import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/features/home/CtaSection";
import { OdooServicePage } from "@/features/odoo/OdooServicePage";
import { ODOO_SERVICES, getOdooService } from "@/data/odoo-services";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return ODOO_SERVICES.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getOdooService(slug);
  if (!s) return {};
  return pageMetadata({ title: `${s.name} | Odoo Services`, description: s.summary, path: `/odoo-services/${slug}` });
}

export default async function OdooServiceRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getOdooService(slug);
  if (!service) notFound();
  const Icon = service.icon;

  return (
    <PageShell>
      <PageHero
        tone="paper"
        crumbs={[
          { label: "Business Apps", href: "/business-apps" },
          { label: "Odoo Services", href: "/odoo-services" },
          { label: service.name },
        ]}
        eyebrow="Odoo Service"
        title={service.name}
        lede={service.summary}
        actions={
          <>
            <Button href="/talk-to-an-expert" icon="arrow">
              Talk to an expert
            </Button>
            <Button href="/odoo-services" variant="secondary">
              All Odoo services
            </Button>
          </>
        }
        extra={
          <div className="mt-6 flex items-center gap-3">
            <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-fill text-white">
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
            </span>
            <span className="t-mono text-[11px] uppercase tracking-[0.08em] text-slate-2">{service.category}</span>
          </div>
        }
      />
      <OdooServicePage service={service} />
      <CtaSection title="Talk through your Odoo project." text="Request a walkthrough of this service, including where it stands today and what a first engagement could look like." />
    </PageShell>
  );
}
