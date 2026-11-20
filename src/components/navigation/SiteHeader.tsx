"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { HEADER_CTA, NAV_ITEMS, SIDE_NAV_ITEMS, type NavItem } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

function isActive(pathname: string, item: NavItem | { href: string }) {
  if (item.href === "/") return pathname === "/";
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

const linkBase =
  "relative inline-flex h-[42px] items-center gap-1 text-[12px] font-medium text-[#645f5b] transition-colors duration-150 hover:text-ink";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const panelId = useId();

  // Touch has no hover to close a panel with, so a tap outside the header closes it.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setDrawer(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [drawer]);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };
  // Click always shows the panel (never toggles it shut): on a mouse this can follow a hover
  // that already opened it, and a toggle there would immediately close what hover just opened.
  // Touch/keyboard users close it via the outside-click/Escape handlers below instead.
  const clickOpenMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(label);
  };

  const current = NAV_ITEMS.find((i) => i.label === open && i.groups);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-hair-2 bg-[rgba(252,246,241,0.9)] backdrop-blur-md"
      onMouseLeave={scheduleClose}
    >
      <div className="mx-auto flex h-[87px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 xl:px-12">
        <Link href="/" aria-label="TechLamp home" className="shrink-0">
          <Logo variant="header" width={150} priority />
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-[18.5px]">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item);
              const hasMenu = !!item.groups;
              return (
                <li key={item.label} onMouseEnter={() => (hasMenu ? openMenu(item.label) : setOpen(null))}>
                  {hasMenu ? (
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={open === item.label}
                      aria-controls={`${panelId}-${item.label}`}
                      onClick={() => clickOpenMenu(item.label)}
                      onFocus={() => openMenu(item.label)}
                      className={cn(linkBase, active && "text-brand-ink hover:text-brand")}
                    >
                      {item.label}
                      <ChevronDown aria-hidden className={cn("h-3.5 w-3.5 transition-transform", open === item.label && "rotate-180")} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onFocus={() => setOpen(null)}
                      className={cn(linkBase, active && "text-brand-ink hover:text-brand")}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-[10px]">
          <Button href={HEADER_CTA.href} size="nav" icon="arrow-up-right" className="max-sm:!hidden">
            {HEADER_CTA.label}
          </Button>
          <button
            type="button"
            className="grid h-[42px] w-[42px] place-items-center rounded-[10px] border border-hair bg-white text-ink xl:hidden"
            aria-label={drawer ? "Close menu" : "Open menu"}
            aria-expanded={drawer}
            aria-controls="mobile-nav"
            onClick={() => setDrawer((v) => !v)}
          >
            {drawer ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Desktop mega menu */}
      {current?.groups && (
        <div
          id={`${panelId}-${current.label}`}
          className="absolute inset-x-0 top-full hidden border-b border-hair-2 bg-[rgba(255,253,252,0.98)] shadow-[0_30px_60px_-30px_rgba(58,28,13,0.25)] xl:block"
          onMouseEnter={() => openMenu(current.label)}
        >
          <div className="mx-auto grid max-w-[1440px] grid-cols-[280px_1fr] gap-12 px-12 py-9">
            <div>
              <p className="t-eyebrow mb-3">{current.label}</p>
              <p className="max-w-[240px] text-[20px] font-medium leading-[26px] tracking-[-0.02em] text-ink">{current.summary}</p>
              <Link href={current.href} onClick={() => setOpen(null)} className="mt-5 inline-block text-[14px] font-semibold text-brand-ink">
                View all {current.label.toLowerCase()} →
              </Link>
            </div>
            <div className={cn("grid gap-8", current.groups.length > 2 ? "grid-cols-3" : "grid-cols-2")}>
              {current.groups.map((g) => (
                <div key={g.title}>
                  <p className="t-mono mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-brown">{g.title}</p>
                  <ul className="space-y-0.5">
                    {g.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          onClick={() => setOpen(null)}
                          className="block rounded-lg px-3 py-2 text-[14.5px] tracking-[-0.01em] text-slate transition-colors hover:bg-cream hover:text-ink"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile / tablet drawer — portaled to <body>: the header's own backdrop-blur
          (backdrop-filter) establishes a containing block for `position: fixed`
          descendants per spec, which would otherwise clip this to the header's own
          88px box instead of the viewport. */}
      {drawer && createPortal(
        <div id="mobile-nav" className="fixed inset-x-0 top-[88px] bottom-0 z-40 overflow-y-auto bg-cream px-5 pb-10 pt-4 sm:px-8 xl:hidden">
          <ul className="divide-y divide-hair">
            {NAV_ITEMS.map((item) => {
              const isOpen = expanded === item.label;
              return (
                <li key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setDrawer(false)}
                      aria-current={isActive(pathname, item) ? "page" : undefined}
                      className={cn("block flex-1 py-4 text-[18px] font-medium tracking-[-0.02em]", isActive(pathname, item) ? "text-brand-ink" : "text-ink")}
                    >
                      {item.label}
                    </Link>
                    {item.groups && (
                      <button
                        type="button"
                        aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.label}`}
                        aria-expanded={isOpen}
                        onClick={() => setExpanded(isOpen ? null : item.label)}
                        className="grid h-11 w-11 place-items-center rounded-lg text-slate"
                      >
                        <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")} />
                      </button>
                    )}
                  </div>
                  {item.groups && isOpen && (
                    <div className="pb-4 pl-1">
                      {item.groups.flatMap((g) => g.links).map((l) => (
                        <Link key={l.href} href={l.href} onClick={() => setDrawer(false)} className="block py-2.5 text-[15px] text-slate">
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <p className="t-mono mb-1 mt-2 pt-4 text-[11px] font-bold uppercase tracking-[0.08em] text-brown">More</p>
          <ul className="divide-y divide-hair">
            {SIDE_NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setDrawer(false)}
                    aria-current={isActive(pathname, item) ? "page" : undefined}
                    className={cn("flex items-center gap-3 py-4 text-[16px] font-medium tracking-[-0.02em]", isActive(pathname, item) ? "text-brand-ink" : "text-ink")}
                  >
                    <Icon aria-hidden className="h-[18px] w-[18px]" strokeWidth={1.8} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-6">
            <Button href={HEADER_CTA.href} icon="arrow-up-right" onClick={() => setDrawer(false)} className="w-full">
              {HEADER_CTA.label}
            </Button>
          </div>
        </div>,
        document.body,
      )}
    </header>
  );
}
