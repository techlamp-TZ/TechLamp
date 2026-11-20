"use client";

import { useState } from "react";
import { InfoCard, CardGrid } from "@/components/cards/InfoCard";
import { ODOO_SERVICES, ODOO_SERVICE_CATEGORIES, type OdooServiceCategory } from "@/data/odoo-services";
import { cn } from "@/lib/cn";

const FILTERS = ["All", ...ODOO_SERVICE_CATEGORIES] as const;

/** Filterable grid of all Odoo services. */
export function OdooServicesDirectory() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const shown = ODOO_SERVICES.filter((s) => filter === "All" || s.category === (filter as OdooServiceCategory));

  return (
    <div>
      <div role="group" aria-label="Filter services by category" className="mb-8 flex flex-wrap items-center gap-2">
        <span className="t-mono mr-2 text-[12px] uppercase tracking-[0.08em] text-slate-2">Filter by</span>
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "min-h-[44px] rounded-full px-5 text-[13px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
              filter === f ? "bg-brand-fill text-white" : "bg-cream text-ink hover:bg-peach",
            )}
          >
            {f}
          </button>
        ))}
        <span role="status" className="t-mono ml-auto text-[12px] text-slate-2">
          {shown.length} of {ODOO_SERVICES.length} services
        </span>
      </div>
      <CardGrid cols={3}>
        {shown.map((s) => {
          const Icon = s.icon;
          return (
            <InfoCard
              key={s.slug}
              id={s.slug}
              tone="white"
              eyebrow={s.category}
              title={
                <span className="flex items-center gap-2.5">
                  <Icon aria-hidden className="h-5 w-5 text-brand-ink" strokeWidth={1.8} />
                  {s.name}
                </span>
              }
              href={`/odoo-services/${s.slug}`}
              linkLabel="Explore this service"
            >
              {s.summary}
            </InfoCard>
          );
        })}
      </CardGrid>
    </div>
  );
}
