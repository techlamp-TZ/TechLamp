import Link from "next/link";
import { FOOTER_COLUMNS, VALUE_LOOP } from "@/data/navigation";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/layout/Container";

export function SiteFooter() {
  return (
    <footer className="bg-paper" aria-label="Site footer">
      <Container className="pb-16 pt-12 lg:min-h-[372px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-[420px]">
            <Link href="/" aria-label="TechLamp home" className="inline-block">
              <Logo variant="header" width={150} />
            </Link>
            <p className="mt-[26px] max-w-[300px] text-[14px] leading-[21px] text-slate">
              Engineering intelligent progress through evidence, optimization and controlled action.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-[58px] gap-y-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h2 className="t-mono text-[11px] font-bold uppercase leading-[16px] tracking-[0.04em] text-brown">{col.title}</h2>
                <ul className="mt-[4px]">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="inline-block py-[3.5px] text-[12px] leading-[19px] text-[#676158] transition-colors hover:text-brand"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-[25px] flex flex-col gap-4 border-t border-hair pt-[27px] lg:flex-row lg:items-center lg:justify-between">
          <p className="t-mono flex flex-wrap items-center gap-x-[11.3px] gap-y-2 text-[11px] font-bold uppercase leading-4 text-brown" aria-label="Measure, understand, predict, optimize, decide, act, improve">
            {VALUE_LOOP.map((w, i) => (
              <span key={w} className="inline-flex items-center gap-[11.3px]">
                {w}
                {i < VALUE_LOOP.length - 1 && <span aria-hidden className="text-[8px]">→</span>}
              </span>
            ))}
          </p>
          <p className="text-[11px] leading-4 text-[#6b645c]">© 2026 TechLamp. Intelligent systems, responsibly engineered.</p>
        </div>
      </Container>
    </footer>
  );
}
