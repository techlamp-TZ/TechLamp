import { cn } from "@/lib/cn";

export type Status = "verified" | "illustrative" | "pending";

const map: Record<Status, { label: string; dot: string; text: string }> = {
  verified: { label: "VERIFIED", dot: "bg-signal-green", text: "text-signal-green" },
  illustrative: { label: "ILLUSTRATIVE", dot: "bg-[#c77700]", text: "text-[#9a5b00]" },
  pending: { label: "PENDING PUBLICATION", dot: "bg-[#8c8c8c]", text: "text-[#666]" },
};

/** Content-integrity marker: every case study and metric declares whether it is verified. */
export function StatusBadge({ status, className }: { status: Status; className?: string }) {
  const s = map[status];
  return (
    <span
      className={cn(
        "t-mono inline-flex h-[27px] items-center gap-[7px] rounded-full bg-white/90 px-[15px] text-[9px] font-bold uppercase shadow-[0_1px_2px_rgba(58,28,13,0.08)]",
        s.text,
        className,
      )}
    >
      <i aria-hidden className={cn("h-[7px] w-[7px] rounded-full", s.dot)} />
      {s.label}
    </span>
  );
}
