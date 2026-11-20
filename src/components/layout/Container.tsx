import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

// A closed union rather than the generic `ElementType`: with @react-three/fiber's
// global JSX.IntrinsicElements augmentation loaded elsewhere in the app, TS can no
// longer infer a single `children` type across "every possible intrinsic element",
// which this component never actually needs (nothing passes a custom `as`).
type ContainerTag = "div" | "section" | "header" | "footer" | "nav" | "article" | "main";

/** Page content container: 1440 canvas, 64px gutters (48px in the header). */
export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ContainerTag;
}) {
  return <Tag className={cn("mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-16", className)}>{children}</Tag>;
}
