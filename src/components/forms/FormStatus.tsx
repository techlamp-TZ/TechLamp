import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

export type SubmitState = "idle" | "submitting" | "success" | "error";

/** Live region. Always rendered so screen readers register later updates. */
export function FormStatus({ state, message, className }: { state: SubmitState; message?: string; className?: string }) {
  const Icon = state === "success" ? CheckCircle2 : state === "error" ? AlertCircle : Loader2;
  return (
    <div role={state === "error" ? "alert" : "status"} aria-live={state === "error" ? "assertive" : "polite"} className={className}>
      {state !== "idle" && (
        <p
          className={cn(
            "flex items-start gap-2.5 rounded-[12px] px-4 py-3 text-[14px] leading-[21px]",
            state === "success" && "bg-mint text-[#1f5a3e]",
            state === "error" && "bg-[#fdecea] text-[#8a1c14]",
            state === "submitting" && "bg-sky text-ink",
          )}
        >
          <Icon aria-hidden className={cn("mt-0.5 h-[18px] w-[18px] shrink-0", state === "submitting" && "animate-spin")} />
          <span>{state === "submitting" ? "Sending your details…" : message}</span>
        </p>
      )}
    </div>
  );
}
