import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { CtaSection } from "@/features/home/CtaSection";
import { ProductFamilyPage } from "@/features/products/ProductFamilyPage";
import { PRODUCT_FAMILIES, getProductFamily } from "@/data/products";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return PRODUCT_FAMILIES.map((f) => ({ slug: f.id }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const f = getProductFamily(slug);
  if (!f) return {};
  return pageMetadata({ title: `${f.name} | Products`, description: f.problem, path: `/products/${slug}` });
}

export default async function ProductFamilyRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = getProductFamily(slug);
  if (!f) notFound();
  const Icon = f.icon;

  return (
    <PageShell>
      <PageHero
        tone="paper"
        crumbs={[{ label: "Products", href: "/products" }, { label: f.name }]}
        eyebrow="Product family"
        title={`TechLamp ${f.name}`}
        lede={f.problem}
        actions={
          <>
            <Button href="/talk-to-an-expert" icon="arrow">
              Request a walkthrough
            </Button>
            <Button href="/products" variant="secondary">
              All products
            </Button>
          </>
        }
        extra={
          <div className="mt-6 flex items-center gap-3">
            <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white" style={{ background: f.accent }}>
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
            </span>
            <StatusBadge status="pending" />
          </div>
        }
      />
      <ProductFamilyPage f={f} />
      <CtaSection title="See TechLamp products in action." text="Request a walkthrough of any TechLamp product family, including where it stands today and what is planned next." />
    </PageShell>
  );
}
