import { Container } from "@/components/layout/Container";
import { ToolName } from "@/components/ui/ToolName";
import { TRUSTED_PLATFORMS } from "@/data/home";

/** Honest "platforms we work with" strip — real product logos, no partnership implied. */
export function PlatformStripSection() {
  return (
    <section aria-label="Platforms we work with" className="border-t border-hair bg-cream">
      <Container className="flex flex-col gap-5 py-8 lg:flex-row lg:items-center lg:gap-10">
        <p className="t-eyebrow shrink-0">Platforms we work with</p>
        <ul className="flex flex-1 flex-wrap items-center gap-x-10 gap-y-4">
          {TRUSTED_PLATFORMS.map((name) => (
            <li key={name}>
              <ToolName name={name} size={18} />
            </li>
          ))}
        </ul>
        <p className="t-mono shrink-0 text-[10.5px] uppercase leading-4 tracking-[0.08em] text-slate-2">
          Platforms shown are examples we work with; no partnership implied.
        </p>
      </Container>
    </section>
  );
}
