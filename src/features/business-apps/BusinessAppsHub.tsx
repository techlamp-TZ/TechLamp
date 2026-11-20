import { Blocks } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { InfoCard, CardGrid } from "@/components/cards/InfoCard";

const PRACTICES = [
  {
    id: "odoo",
    name: "Odoo ERP",
    summary: "Implementation, customization and industry-specific builds on Odoo, across 22 services and 11 sectors.",
    href: "/odoo-services",
  },
  {
    id: "zoho",
    name: "Zoho",
    summary: "Implementation and configuration across Zoho CRM, Books, People and Desk.",
    href: "/zoho-services",
  },
];

/** One card per platform practice. Only Odoo exists today; more are added here as they ship. */
export function BusinessAppsHub() {
  return (
    <Section id="practices" tone="paper" index="01" eyebrow="Platform practices" title="Explore each platform.">
      <CardGrid cols={3}>
        {PRACTICES.map((p) => (
          <InfoCard
            key={p.id}
            tone="white"
            title={
              <span className="flex items-center gap-2.5">
                <Blocks aria-hidden className="h-5 w-5 text-brand-ink" strokeWidth={1.8} />
                {p.name}
              </span>
            }
            href={p.href}
            linkLabel={`Explore ${p.name}`}
          >
            {p.summary}
          </InfoCard>
        ))}
      </CardGrid>
    </Section>
  );
}
