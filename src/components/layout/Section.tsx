import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { cn } from "@/lib/cn";

const bgs = { paper: "bg-paper", cream: "bg-cream", canvas: "bg-canvas", peach: "bg-peach", sky: "bg-sky", mint: "bg-mint", lilac: "bg-lilac", dark: "bg-graphite text-white" };

/** Standard content band: optional numbered header, then free-form children. */
export function Section({
  id,
  tone = "canvas",
  index,
  eyebrow,
  title,
  aside,
  children,
  className,
}: {
  id?: string;
  tone?: keyof typeof bgs;
  index?: string;
  eyebrow?: string;
  title?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  const titleId = id ? `${id}-title` : undefined;
  return (
    <section id={id} aria-labelledby={title && titleId ? titleId : undefined} className={cn(bgs[tone], "scroll-mt-24")}>
      <Container className={cn("py-14 lg:py-[72px]", className)}>
        {title && eyebrow && <SectionHeader id={titleId} index={index} eyebrow={eyebrow} title={title} aside={aside} className="mb-8 lg:mb-[44px]" />}
        {children}
      </Container>
    </section>
  );
}
