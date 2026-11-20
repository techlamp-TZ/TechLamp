import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { PageMotion } from "@/components/animation/PageMotion";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SideDock } from "@/components/navigation/SideDock";
import { SiteFooter } from "@/components/footer/SiteFooter";

/** One header, one footer, one skip link for every route. Home runs its own section animations. */
export function PageShell({ children, motion = true }: { children: ReactNode; motion?: boolean }) {
  return (
    <SmoothScroll>
      <a
        href="#main"
        className="sr-only z-[70] rounded-lg bg-brand-fill px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <SiteHeader />
      <SideDock />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <SiteFooter />
      {motion && <PageMotion />}
    </SmoothScroll>
  );
}
