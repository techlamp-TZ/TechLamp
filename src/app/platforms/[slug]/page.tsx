import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/features/home/CtaSection";
import { LayerDetail } from "@/features/platforms/LayerDetail";
import { PLATFORM_LAYERS, getPlatformLayer } from "@/data/platforms";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return PLATFORM_LAYERS.map((l) => ({ slug: l.id }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const layer = getPlatformLayer(slug);
  if (!layer) return {};
  return pageMetadata({ title: layer.title, description: layer.summary, path: `/platforms/${slug}` });
}

export default async function PlatformLayerRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const layer = getPlatformLayer(slug);
  if (!layer) notFound();

  return (
    <PageShell>
      <PageHero
        tone="paper"
        crumbs={[{ label: "Platforms", href: "/platforms" }, { label: layer.title }]}
        eyebrow={`${layer.index} / ${layer.label}`}
        title={layer.title}
        lede={layer.summary}
        actions={
          <>
            <Button href="/talk-to-an-expert" icon="arrow">
              Talk to an expert
            </Button>
            <Button href="/platforms" variant="secondary">
              All platform layers
            </Button>
          </>
        }
      />
      <LayerDetail layer={layer} />
      <CtaSection title="Map your platforms into one system." text="Tell us which tools your teams rely on. We will show where they connect today and where the gaps are." />
    </PageShell>
  );
}
