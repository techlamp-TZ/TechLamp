import { InfoCard, CardGrid } from "@/components/cards/InfoCard";
import { ODOO_INDUSTRIES } from "@/data/odoo-industries";

/** Grid of all eleven Odoo industry pages. No filter needed at this size. */
export function OdooIndustriesGrid() {
  return (
    <CardGrid cols={3}>
      {ODOO_INDUSTRIES.map((i) => {
        const Icon = i.icon;
        return (
          <InfoCard
            key={i.slug}
            id={i.slug}
            tone="white"
            eyebrow="Challenge"
            title={
              <span className="flex items-center gap-2.5">
                <Icon aria-hidden className="h-5 w-5 text-brand-ink" strokeWidth={1.8} />
                {i.name}
              </span>
            }
            href={`/odoo-industries/${i.slug}`}
            linkLabel="Explore this industry"
          >
            {i.challenge}
          </InfoCard>
        );
      })}
    </CardGrid>
  );
}
