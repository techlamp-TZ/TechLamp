import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "dark" | "onBrand" | "ghostOnBrand";
export type ButtonSize = "nav" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] font-semibold transition-[background-color,box-shadow,transform,border-color,color] duration-200 active:translate-y-px";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-fill text-white shadow-[0_4px_10px_-5px_rgba(210,71,0,0.5)] hover:bg-[#e2500a] hover:shadow-[0_8px_18px_-8px_rgba(255,90,0,0.6)]",
  secondary:
    "border border-hair bg-[#fffefa] text-ink hover:border-[#cdc4ba] hover:bg-white",
  dark: "bg-graphite text-white hover:bg-black",
  onBrand: "bg-white text-ink shadow-[0_8px_24px_-10px_rgba(0,0,0,0.5)] hover:bg-[#fff4ec]",
  ghostOnBrand: "border border-white/45 text-white hover:border-white hover:bg-white/10",
};

const sizes: Record<ButtonSize, string> = {
  nav: "h-[42px] px-[15px] text-[12px]",
  lg: "h-[48px] px-[20px] text-[14px]",
};

type Props = Omit<ComponentProps<typeof Link>, "href" | "children"> & {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: "arrow" | "arrow-up-right" | null;
  children: ReactNode;
};

export function Button({ href, variant = "primary", size = "lg", icon = null, className, children, ...rest }: Props) {
  const Icon = icon === "arrow" ? ArrowRight : icon === "arrow-up-right" ? ArrowUpRight : null;
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      <span>{children}</span>
      {Icon && <Icon aria-hidden className="h-[13px] w-[13px] transition-transform duration-200 group-hover/btn:translate-x-0.5" strokeWidth={2.2} />}
    </Link>
  );
}

/** Inline text link with trailing arrow, used for "Explore the practice →" style actions. */
export function TextLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn("group/tl inline-flex items-center gap-2 text-[13px] font-semibold text-ink", className)}
    >
      {children}
      <ArrowRight aria-hidden className="h-[13px] w-[13px] transition-transform duration-200 group-hover/tl:translate-x-1" strokeWidth={2.2} />
    </Link>
  );
}
