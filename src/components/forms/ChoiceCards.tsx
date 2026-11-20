"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

export interface Choice {
  value: string;
  label: string;
  hint?: string;
}

/**
 * Radio (single) or checkbox (multiple) card group. Native inputs stay in the DOM,
 * so arrow keys, space and screen reader semantics come for free.
 */
export function ChoiceCards({
  name,
  legend,
  hideLegend,
  choices,
  value,
  onChange,
  multiple,
  error,
  columns = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
}: {
  name: string;
  legend: string;
  hideLegend?: boolean;
  choices: readonly Choice[];
  value: string | string[];
  onChange: (next: string | string[]) => void;
  multiple?: boolean;
  error?: string;
  columns?: string;
}) {
  const selected = Array.isArray(value) ? value : value ? [value] : [];
  const toggle = (v: string) => {
    if (!multiple) return onChange(v);
    onChange(selected.includes(v) ? selected.filter((x) => x !== v) : [...selected, v]);
  };
  const errId = `${name}-error`;
  return (
    <fieldset aria-describedby={error ? errId : undefined} className="min-w-0 border-0 p-0">
      <legend className={hideLegend ? "sr-only" : "mb-3 text-[13px] font-semibold text-ink"}>{legend}</legend>
      <div className={cn("grid gap-3", columns)}>
        {choices.map((c) => {
          const on = selected.includes(c.value);
          const id = `${name}-${c.value}`;
          return (
            <div key={c.value} className="relative">
              <input
                id={id}
                type={multiple ? "checkbox" : "radio"}
                name={name}
                value={c.value}
                checked={on}
                onChange={() => toggle(c.value)}
                className="peer absolute inset-0 z-10 m-0 h-full w-full cursor-pointer opacity-0"
              />
              <label
                htmlFor={id}
                className={cn(
                  "flex h-full min-h-[76px] flex-col justify-between gap-3 rounded-[12px] border p-3.5 text-[14px] font-semibold leading-[19px] transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand",
                  on ? "border-brand bg-brand-fill text-white" : "border-hair bg-cream text-ink hover:border-[#cdc4ba] hover:bg-white",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "flex h-[18px] w-[18px] items-center justify-center border-2",
                    multiple ? "rounded-[5px]" : "rounded-full",
                    on ? "border-white bg-white/20" : "border-brand",
                  )}
                >
                  {on && <Check className="h-3 w-3" strokeWidth={3.2} />}
                </span>
                <span>
                  {c.label}
                  {c.hint && <span className={cn("mt-1 block text-[12px] font-normal leading-4", on ? "text-white/90" : "text-slate")}>{c.hint}</span>}
                </span>
              </label>
            </div>
          );
        })}
      </div>
      {error && (
        <p id={errId} className="mt-2 text-[12.5px] font-medium text-[#b3261e]">
          {error}
        </p>
      )}
    </fieldset>
  );
}
