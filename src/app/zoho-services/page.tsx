import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/features/home/CtaSection";
import { ZohoServicesGrid } from "@/features/zoho/ZohoServicesGrid";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Zoho Services",
  description: "TechLamp's Zoho services: implementation and configuration of Zoho CRM, Books, People and Desk.",
  path: "/zoho-services",
});

export default function ZohoServicesPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Business Apps", href: "/business-apps" }, { label: "Zoho Services" }]}
        eyebrow="Zoho"
        title="Zoho services."
        lede="Implementation and configuration across the Zoho apps you run: CRM, accounting, HR and support."
        actions={
          <>
            <Button href="/talk-to-an-expert" icon="arrow">
              Talk to an expert
            </Button>
            <Button href="/business-apps" variant="secondary">
              All platforms
            </Button>
          </>
        }
      />
      <Section id="apps" tone="paper" index="01" eyebrow="Directory" title="Zoho apps we implement" aside="Each app links through to its own page with what's covered and how we deliver it.">
        <ZohoServicesGrid />
      </Section>
      <CtaSection title="Talk through your Zoho setup." text="Request a walkthrough of any app, including where it stands today and what a first engagement could look like." />
    </PageShell>
  );
}
