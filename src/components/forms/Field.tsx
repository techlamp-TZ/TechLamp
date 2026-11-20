import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Shared control styling: 48px touch target, visible focus ring, clear invalid state. */
export const controlClass =
  "w-full min-h-[48px] rounded-[10px] border border-hair bg-cream px-4 text-[15px] leading-6 text-ink placeholder:text-slate-2 transition-colors hover:border-[#cdc4ba] focus:border-brand focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 aria-[invalid=true]:border-[#b3261e] aria-[invalid=true]:bg-[#fff8f7]";

export function describedBy(id: string, hasHint: boolean, hasError: boolean) {
  const ids = [hasHint && `${id}-hint`, hasError && `${id}-error`].filter(Boolean).join(" ");
  return ids || undefined;
}

/** Label, optional hint and linked error message around any single control. */
export function Field({
  id,
  label,
  hint,
  error,
  optional,
  required,
  children,
  className,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-[13px] font-semibold leading-5 text-ink">
        {label}
        {required && (
          <span aria-hidden className="ml-0.5 text-brand-ink">
            *
          </span>
        )}
        {optional && <span className="ml-1.5 font-normal text-slate-2">(optional)</span>}
      </label>
      {children}
      {hint && (
        <p id={`${id}-hint`} className="text-[12px] leading-4 text-slate-2">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-[12.5px] font-medium leading-4 text-[#b3261e]">
          {error}
        </p>
      )}
    </div>
  );
}
