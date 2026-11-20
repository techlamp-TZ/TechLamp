import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/features/home/CtaSection";
import { OdooServicesDirectory } from "@/features/odoo/OdooServicesDirectory";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Odoo Services",
  description: "TechLamp's Odoo services: implementation, customization, migration, integration, training and support, across 22 services.",
  path: "/odoo-services",
});

export default function OdooServicesPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Business Apps", href: "/business-apps" }, { label: "Odoo Services" }]}
        eyebrow="Odoo ERP"
        title="Odoo services."
        lede="Implementation, customization, migration and ongoing support for Odoo, filterable by the kind of work you need."
        actions={
          <>
            <Button href="/talk-to-an-expert" icon="arrow">
              Talk to an expert
            </Button>
            <Button href="/odoo-industries" variant="secondary">
              Odoo industries
            </Button>
          </>
        }
      />
      <Section id="services" tone="paper" index="01" eyebrow="Directory" title="All Odoo services" aside="Filter by the kind of work involved. Each card links through to its own page.">
        <OdooServicesDirectory />
      </Section>
      <CtaSection title="Talk through your Odoo project." text="Request a walkthrough of any service, including where it stands today and what a first engagement could look like." />
    </PageShell>
  );
}
