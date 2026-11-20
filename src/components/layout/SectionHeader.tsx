import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { TextLink } from "@/components/ui/Button";

/**
 * Numbered section header used across the site:
 *   01 / EYEBROW
 *   TITLE TITLE            [ aside paragraph ]
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  aside,
  link,
  id,
  titleClassName,
  asideWidth = 430,
  className,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
  /** Optional "see all →" link shown under the aside, right-aligned on desktop. */
  link?: { href: string; label: string };
  id?: string;
  titleClassName?: string;
  asideWidth?: number;
  className?: string;
}) {
  return (
    <header className={cn("flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between", className)}>
      <div>
        <p className="t-eyebrow mb-[12px]">
          {index ? `${index} / ` : ""}
          {eyebrow}
        </p>
        <h2 id={id} className={cn("t-h2 max-w-[720px]", titleClassName)}>
          {title}
        </h2>
      </div>
      {(aside || link) && (
        <div className="flex flex-col items-start gap-3 lg:items-end lg:text-right">
          {aside && (
            <p className="t-body" style={{ maxWidth: asideWidth }}>
              {aside}
            </p>
          )}
          {link && (
            <TextLink href={link.href} className="text-[13px]">
              {link.label}
            </TextLink>
          )}
        </div>
      )}
    </header>
  );
}
