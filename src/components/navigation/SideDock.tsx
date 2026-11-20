"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDE_NAV_ITEMS } from "@/data/navigation";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Floating icon dock for the lower-traffic "about / learn" pages, desktop only (xl+). */
export function SideDock() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="More"
      className="fixed left-2 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1 rounded-full border border-hair-2 bg-[rgba(252,246,241,0.92)] p-1.5 shadow-[0_20px_50px_-24px_rgba(58,28,13,0.35)] backdrop-blur-md xl:flex 2xl:left-5"
    >
      {SIDE_NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "group relative grid h-9 w-9 place-items-center rounded-full transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
              active ? "bg-brand-fill text-white" : "text-[#645f5b] hover:bg-cream hover:text-ink",
            )}
          >
            <Icon aria-hidden className="h-4 w-4" strokeWidth={1.8} />
            <span
              className={cn(
                "pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-lg bg-graphite px-3 py-1.5 text-[12px] font-medium text-white opacity-0 shadow-[0_8px_20px_-10px_rgba(0,0,0,0.5)] transition-opacity duration-150",
                "group-hover:opacity-100 group-focus-visible:opacity-100",
              )}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
