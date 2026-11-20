import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { InfoCard, CardGrid } from "@/components/cards/InfoCard";
import { CtaSection } from "@/features/home/CtaSection";
import { ToolName } from "@/components/ui/ToolName";
import { CLOUD_SERVICE_GROUPS, CLOUD_PLATFORMS } from "@/data/cloud-services";

export function CloudManagedServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Capabilities", href: "/capabilities" }, { label: "Cloud & Managed Services" }]}
        eyebrow="Cloud, DevOps & Platform Engineering"
        title="The full cloud and managed services catalog."
        lede="Cloud and infrastructure, managed IT, and workplace services — the ongoing operations work that keeps everything else running."
        actions={
          <>
            <Button href="/talk-to-an-expert" icon="arrow">
              Talk to an expert
            </Button>
            <Button href="/capabilities/cloud-devops-platform-engineering" variant="secondary">
              Back to the capability
            </Button>
          </>
        }
      />

      {CLOUD_SERVICE_GROUPS.map((group, i) => (
        <Section
          key={group.id}
          id={group.id}
          tone={i % 2 === 0 ? "paper" : "canvas"}
          index={group.n}
          eyebrow="Cloud & Managed Services"
          title={group.name}
          aside={group.summary}
        >
          <CardGrid cols={3}>
            {group.services.map((s) => (
              <InfoCard key={s.name} title={s.name}>
                {s.description}
              </InfoCard>
            ))}
          </CardGrid>
        </Section>
      ))}

      <Section tone="paper" eyebrow="Cloud platforms" title="Cloud platforms we work across.">
        <div className="rounded-[28px] border border-hair bg-white p-7 lg:p-8">
          <ul className="flex flex-wrap gap-3">
            {CLOUD_PLATFORMS.map((p) => (
              <li key={p} className="flex min-h-11 items-center rounded-full border border-hair bg-cream px-4">
                <ToolName name={p} size={16} className="text-[13px] font-medium text-ink" />
              </li>
            ))}
          </ul>
          <p className="t-mono mt-5 text-[10.5px] uppercase leading-4 tracking-[0.08em] text-slate-2">Platforms shown are examples we work with; no partnership implied.</p>
        </div>
      </Section>

      <CtaSection title="Talk through your cloud and managed services needs." text="Request a walkthrough of any service, including where it stands today and what a first engagement could look like." />
    </>
  );
}
