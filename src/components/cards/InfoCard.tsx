import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { StatusBadge, type Status } from "@/components/ui/StatusBadge";
import { TextLink } from "@/components/ui/Button";

const tones = { peach: "bg-peach", lilac: "bg-lilac", sky: "bg-sky", mint: "bg-mint", white: "bg-white border border-hair", cream: "bg-cream" };
export type CardTone = keyof typeof tones;

/** General content card with optional eyebrow, status badge and link. */
export function InfoCard({
  tone = "white",
  eyebrow,
  title,
  children,
  href,
  linkLabel = "Learn more",
  status,
  id,
  className,
}: {
  tone?: CardTone;
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  href?: string;
  linkLabel?: string;
  status?: Status;
  id?: string;
  className?: string;
}) {
  return (
    <article id={id} className={cn("relative flex scroll-mt-28 flex-col rounded-[28px] p-7 transition-shadow hover:shadow-[0_18px_40px_-28px_rgba(58,28,13,0.35)] lg:p-8", tones[tone], className)}>
      {(eyebrow || status) && (
        <div className="mb-4 flex items-start justify-between gap-3">
          {eyebrow && <p className="t-mono text-[11px] font-bold uppercase leading-4 tracking-[0.06em] text-brown">{eyebrow}</p>}
          {status && <StatusBadge status={status} className="!h-[22px] !px-[11px] !text-[8.5px]" />}
        </div>
      )}
      <h3 className="text-[22px] font-medium leading-[28px] tracking-[-0.01em] text-ink">{title}</h3>
      {children && <div className="mt-3 text-[15px] leading-[23px] text-slate">{children}</div>}
      {href && (
        <div className="mt-auto pt-6">
          <TextLink href={href}>{linkLabel}</TextLink>
        </div>
      )}
    </article>
  );
}

export function CardGrid({ children, cols = 3, className }: { children: ReactNode; cols?: 2 | 3 | 4; className?: string }) {
  const c = { 2: "md:grid-cols-2", 3: "md:grid-cols-2 lg:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" }[cols];
  return <div className={cn("grid gap-5", c, className)}>{children}</div>;
}
