import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

const links = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/solutions", label: "Solutions" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <PageShell>
      <section aria-labelledby="nf-title" className="bg-paper">
        <Container className="py-20 lg:py-[120px]">
          <p className="t-eyebrow mb-[18px]">404 / Signal not found</p>
          <h1 id="nf-title" className="t-h1 max-w-[860px] text-[40px] leading-[42px] sm:text-[52px] sm:leading-[54px] lg:text-[60px] lg:leading-[62px]">
            This page is not here.
          </h1>
          <p className="t-lede mt-[22px] max-w-[560px]">The link may be old or mistyped. Start from the home page, or try one of these.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/" icon="arrow">
              Back to home
            </Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-1 text-[15px]">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-[44px] items-center font-semibold text-ink underline underline-offset-4 hover:text-brand">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </PageShell>
  );
}
