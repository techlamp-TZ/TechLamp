import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/features/home/CtaSection";
import { BusinessAppsHub } from "@/features/business-apps/BusinessAppsHub";
import { SmeWorkflowSection } from "@/features/industries/SmeWorkflowSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Business Apps",
  description: "Platform implementation across the business systems you run: Odoo ERP services and industry builds, with more platforms added here over time.",
  path: "/business-apps",
});

export default function BusinessAppsPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Business Apps" }]}
        eyebrow="Business Apps"
        title="Business applications we implement."
        lede="Platform implementation across the business systems you already run or are choosing between. Each platform has its own services and industry pages."
        actions={
          <>
            <Button href="#practices" icon="arrow">
              Explore platforms
            </Button>
            <Button href="/talk-to-an-expert" variant="secondary">
              Talk to an expert
            </Button>
          </>
        }
      />
      <BusinessAppsHub />
      <SmeWorkflowSection
        id="connected-workflow"
        eyebrow="02 / The everyday workflow"
        title="The workflow these platforms connect."
        lede="Odoo, Zoho and the other systems we implement connect one everyday chain: a customer enquiry becomes a quote, an approved order and an invoice — without re-keying the same detail between tools."
        cta={{ href: "/talk-to-an-expert", label: "Talk to an implementation expert" }}
      />
      <CtaSection title="Talk through your business applications." text="Request a walkthrough of any platform, including where it stands today and what a first engagement could look like." />
    </PageShell>
  );
}
