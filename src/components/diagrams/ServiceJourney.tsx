import { ArrowRight } from "lucide-react";

/** A one-way, wrapping sequence of labelled steps. Not a loop — the last step has no arrow. */
export function ServiceJourney({ steps }: { steps: string[] }) {
  return (
    <div>
      <p className="sr-only">Sequential journey: {steps.join(" → ")}</p>
      <ol aria-label="Data and analytics service journey" className="flex flex-wrap items-center gap-y-3">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center">
            <span className="flex items-center gap-2 rounded-[10px] border border-hair bg-white px-4 py-2.5">
              <span className="t-mono text-[10px] font-bold uppercase tracking-[0.06em] text-brand-ink">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[13px] font-semibold leading-4 text-ink">{step}</span>
            </span>
            {i < steps.length - 1 && <ArrowRight aria-hidden className="mx-2 h-[15px] w-[15px] shrink-0 text-slate-2" strokeWidth={1.5} />}
          </li>
        ))}
      </ol>
    </div>
  );
}
