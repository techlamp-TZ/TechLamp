import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/features/home/CtaSection";
import { ZohoServicePage } from "@/features/zoho/ZohoServicePage";
import { ZOHO_APPS, getZohoApp } from "@/data/zoho-services";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return ZOHO_APPS.map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getZohoApp(slug);
  if (!a) return {};
  return pageMetadata({ title: `${a.name} | Zoho Services`, description: a.summary, path: `/zoho-services/${slug}` });
}

export default async function ZohoServiceRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getZohoApp(slug);
  if (!app) notFound();
  const Icon = app.icon;

  return (
    <PageShell>
      <PageHero
        tone="paper"
        crumbs={[
          { label: "Business Apps", href: "/business-apps" },
          { label: "Zoho Services", href: "/zoho-services" },
          { label: app.name },
        ]}
        eyebrow="Zoho"
        title={app.name}
        lede={app.summary}
        actions={
          <>
            <Button href="/talk-to-an-expert" icon="arrow">
              Talk to an expert
            </Button>
            <Button href="/zoho-services" variant="secondary">
              All Zoho apps
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
      <ZohoServicePage app={app} />
      <CtaSection title="Talk through your Zoho setup." text="Request a walkthrough of this app, including where it stands today and what a first engagement could look like." />
    </PageShell>
  );
}
