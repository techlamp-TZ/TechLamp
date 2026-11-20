import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { InfoCard, CardGrid } from "@/components/cards/InfoCard";
import { CtaSection } from "@/features/home/CtaSection";
import { ServiceJourney } from "@/components/diagrams/ServiceJourney";
import { DATA_SERVICE_FAMILIES, DATA_JOURNEY_STEPS } from "@/data/data-services";

export function DataAnalyticsServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Capabilities", href: "/capabilities" }, { label: "Data & Analytics Services" }]}
        eyebrow="Data, Analytics & Decision Intelligence"
        title="The full data and analytics service catalog."
        lede="Eight service families, from strategy and governance through to managed operations, plus the sequential journey that connects them."
        actions={
          <>
            <Button href="/talk-to-an-expert" icon="arrow">
              Talk to an expert
            </Button>
            <Button href="/capabilities/data-analytics-decision-intelligence" variant="secondary">
              Back to the capability
            </Button>
          </>
        }
      />

      <Section tone="canvas" eyebrow="The journey" title="Fourteen steps from data strategy to business action.">
        <ServiceJourney steps={DATA_JOURNEY_STEPS} />
      </Section>

      {DATA_SERVICE_FAMILIES.map((family, i) => (
        <Section
          key={family.id}
          id={family.id}
          tone={i % 2 === 0 ? "paper" : "canvas"}
          index={family.n}
          eyebrow="Data & Analytics Services"
          title={family.name}
          aside={family.summary}
        >
          {family.bridge ? (
            <div className="rounded-[28px] border border-hair bg-white p-7 lg:p-8">
              <p className="t-body max-w-[640px]">{family.bridge.text}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {family.bridge.links.map((l) => (
                  <Button key={l.href} href={l.href} variant="secondary" icon="arrow-up-right">
                    {l.label}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <CardGrid cols={3}>
              {family.services.map((s) => (
                <InfoCard key={s.name} title={s.name}>
                  {s.description}
                </InfoCard>
              ))}
            </CardGrid>
          )}
        </Section>
      ))}

      <CtaSection title="Talk through your data and analytics roadmap." text="Request a walkthrough of any service family, including where it stands today and what a first engagement could look like." />
    </>
  );
}
