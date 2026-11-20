import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { CapabilityDetailPage } from "@/features/capabilities/CapabilityDetailPage";
import { CAPABILITIES, getCapability } from "@/data/capabilities";
import { CAPABILITY_DETAILS } from "@/data/capability-details";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return CAPABILITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCapability(slug);
  if (!c) return {};
  return pageMetadata({
    title: c.name,
    description: CAPABILITY_DETAILS[c.slug].hero.lede,
    path: `/capabilities/${c.slug}`,
  });
}

export default async function CapabilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCapability(slug);
  if (!c) notFound();
  return (
    <PageShell>
      <CapabilityDetailPage capability={c} />
    </PageShell>
  );
}
