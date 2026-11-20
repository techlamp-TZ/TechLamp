import Link from "next/link";
import { INDUSTRIES } from "@/data/industries";
import { cn } from "@/lib/cn";

const tones = { peach: "bg-peach", lilac: "bg-lilac", sky: "bg-sky", mint: "bg-mint", white: "bg-white", cream: "bg-cream" };

/** Hero map: twelve sectors as jump links to their cards. */
export function IndustryHeroVisual() {
  return (
    <nav aria-label="Jump to an industry" className="rounded-[28px] border border-hair bg-white/70 p-5 lg:p-6">
      <p className="t-mono mb-4 text-[11px] font-bold uppercase tracking-[0.08em] text-brown">Twelve sectors / one method</p>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {INDUSTRIES.map((i) => (
          <li key={i.id}>
            <Link
              href={`/industries/${i.id}`}
              className={cn(
                "flex min-h-[64px] items-center rounded-2xl px-4 py-3 text-[14px] font-medium leading-5 text-ink transition-shadow hover:shadow-[0_10px_24px_-16px_rgba(58,28,13,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                tones[i.tone],
              )}
            >
              {i.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
