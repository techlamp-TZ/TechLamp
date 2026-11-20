import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Official TechLamp logo. The SVGs in /public/brand are extracted directly from
 * `logos/Logo TechLamp V3.pdf` (vector paths, nothing redrawn).
 *   full      wordmark + symbol + tagline (footer, print, documents)
 *   header    wordmark + symbol            (site header, footer, mobile)
 *   wordmark  wordmark only                (compact contexts)
 *   symbol    head-and-bulb symbol         (favicon, diagrams, badges)
 */
const VARIANTS = {
  full: { src: "/brand/techlamp-logo.svg", ratio: 4.964 },
  header: { src: "/brand/techlamp-logo-header.svg", ratio: 5.378 },
  wordmark: { src: "/brand/techlamp-wordmark.svg", ratio: 4.819 },
  symbol: { src: "/brand/techlamp-symbol.svg", ratio: 0.688 },
} as const;

export type LogoVariant = keyof typeof VARIANTS;

export function Logo({
  variant = "header",
  width = 150,
  className,
  priority = false,
}: {
  variant?: LogoVariant;
  width?: number;
  className?: string;
  priority?: boolean;
}) {
  const v = VARIANTS[variant];
  return (
    <Image
      src={v.src}
      alt="TechLamp"
      width={width}
      height={Math.round(width / v.ratio)}
      priority={priority}
      unoptimized
      className={cn("block h-auto select-none", className)}
      style={{ width, height: "auto" }}
    />
  );
}
