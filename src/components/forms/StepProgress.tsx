import { cn } from "@/lib/cn";

/** Step list for the wizard rail. Small screens get a compact bar; wide screens list each step. */
export function StepProgress({
  steps,
  current,
  onJump,
}: {
  steps: readonly { id: string; label: string }[];
  current: number;
  /** Only completed steps are jumpable. */
  onJump?: (index: number) => void;
}) {
  const total = steps.length;
  return (
    <nav aria-label="Discovery progress">
      <p className="t-mono mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-brown">Discovery path</p>
      <div
        role="progressbar"
        aria-label="Discovery progress"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={current + 1}
        aria-valuetext={`Step ${current + 1} of ${total}`}
        className="mb-2 h-1.5 overflow-hidden rounded-full bg-hair lg:hidden"
      >
        <div className="h-full rounded-full bg-brand transition-[width] duration-300" style={{ width: `${((current + 1) / total) * 100}%` }} />
      </div>
      <p className="t-mono text-[11px] uppercase tracking-[0.08em] text-slate lg:hidden">
        Step {current + 1} of {total}: {steps[current]?.label}
      </p>
      <ol className="hidden flex-col gap-2 lg:flex">
        {steps.map((s, i) => {
          const state = i === current ? "current" : i < current ? "done" : "todo";
          const body = (
            <>
              <span className="mr-2">{String(i + 1).padStart(2, "0")}</span>
              {s.label}
            </>
          );
          const cls = cn(
            "t-mono flex min-h-[44px] w-full items-center rounded-[8px] px-3.5 text-left text-[11px] font-bold uppercase leading-4 tracking-[0.05em]",
            state === "current" && "bg-brand-fill text-white",
            state === "done" && "bg-graphite text-white",
            state === "todo" && "bg-graphite text-[#b9b3ad]",
          );
          return (
            <li key={s.id} aria-current={state === "current" ? "step" : undefined}>
              {state === "done" && onJump ? (
                <button type="button" onClick={() => onJump(i)} className={cn(cls, "hover:bg-black")}>
                  {body}
                  <span className="sr-only"> (completed, go back to this step)</span>
                </button>
              ) : (
                <div className={cls}>
                  {body}
                  {state === "todo" && <span className="sr-only"> (not started)</span>}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
