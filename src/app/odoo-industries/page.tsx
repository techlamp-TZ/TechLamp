import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/features/home/CtaSection";
import { OdooIndustriesGrid } from "@/features/odoo/OdooIndustriesGrid";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Odoo Industries",
  description: "Odoo builds for eleven sectors: construction, logistics, retail, healthcare, manufacturing, restaurants, field service, education, real estate, wholesale distribution and solar.",
  path: "/odoo-industries",
});

export default function OdooIndustriesPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Business Apps", href: "/business-apps" }, { label: "Odoo Industries" }]}
        eyebrow="Odoo ERP"
        title="Odoo by industry."
        lede="Eleven sectors where TechLamp builds Odoo around sector-specific workflows, not a one-size-fits-all setup."
        actions={
          <>
            <Button href="/talk-to-an-expert" icon="arrow">
              Talk to an expert
            </Button>
            <Button href="/odoo-services" variant="secondary">
              Odoo services
            </Button>
          </>
        }
      />
      <Section id="industries" tone="paper" index="01" eyebrow="Directory" title="All Odoo industries" aside="Each page shows the typical modules involved and the challenge they address.">
        <OdooIndustriesGrid />
      </Section>
      <CtaSection title="Let's talk about your sector." text="Every sector runs Odoo differently. Tell us what matters most in yours." />
    </PageShell>
  );
}
