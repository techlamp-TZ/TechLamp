import type { ReactNode } from "react";

/** Single checkbox row (consent). The whole row is the touch target. */
export function Checkbox({
  id,
  checked,
  onChange,
  error,
  children,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="flex min-h-[44px] cursor-pointer items-start gap-3 py-1.5 text-[14px] leading-[21px] text-slate">
        <input
          id={id}
          name={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-[#ff5a00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        />
        <span>{children}</span>
      </label>
      {error && (
        <p id={`${id}-error`} className="text-[12.5px] font-medium leading-4 text-[#b3261e]">
          {error}
        </p>
      )}
    </div>
  );
}
