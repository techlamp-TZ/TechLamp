import { InfoCard, CardGrid } from "@/components/cards/InfoCard";
import { ZOHO_APPS } from "@/data/zoho-services";

/** Grid of all four Zoho apps. No filter needed at this size. */
export function ZohoServicesGrid() {
  return (
    <CardGrid cols={2}>
      {ZOHO_APPS.map((a) => {
        const Icon = a.icon;
        return (
          <InfoCard
            key={a.slug}
            id={a.slug}
            tone="white"
            title={
              <span className="flex items-center gap-2.5">
                <Icon aria-hidden className="h-5 w-5 text-brand-ink" strokeWidth={1.8} />
                {a.name}
              </span>
            }
            href={`/zoho-services/${a.slug}`}
            linkLabel="Explore this app"
          >
            {a.summary}
          </InfoCard>
        );
      })}
    </CardGrid>
  );
}
