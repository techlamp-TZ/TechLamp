import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/features/home/CtaSection";
import { ProductHub } from "@/features/products/ProductHub";
import { ProductGrid } from "@/features/products/ProductGrid";
import { ProductEcosystem, ProductIntegrations } from "@/features/products/ProductEcosystem";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Products",
  description: "Eleven TechLamp product families across data platforms, intelligence and decisions, and enterprise applications, each shown with its real status.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Products" }]}
        eyebrow="Products"
        title="Technology built to scale."
        lede="TechLamp-owned product concepts, grouped into eleven families and shown with their real status, not as finished products before they are. Each family has its own page."
        actions={
          <>
            <Button href="#products" icon="arrow">
              Explore products
            </Button>
            <Button href="/talk-to-an-expert" variant="secondary">
              Talk to an expert
            </Button>
          </>
        }
        visual={<ProductHub />}
      />
      <ProductGrid />
      <ProductEcosystem />
      <ProductIntegrations />
      <CtaSection title="See TechLamp products in action." text="Request a walkthrough of any TechLamp product, including where it stands today and what is planned next." />
    </PageShell>
  );
}
