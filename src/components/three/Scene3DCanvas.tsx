"use client";

import type { ReactNode } from "react";
import { Canvas } from "@react-three/fiber";

/**
 * Shared R3F canvas defaults for every decorative scene on the site:
 * transparent (composites over the existing card background), capped pixel
 * ratio (perf on retina/mobile), and no user interaction (these are ambient
 * backdrops behind real HTML content, not something to drag or zoom).
 * Only ever imported from a file already loaded via next/dynamic(ssr:false)
 * from a component gated by useInView, so a canvas never mounts off-screen.
 */
export function Scene3DCanvas({ children, camera }: { children: ReactNode; camera?: [number, number, number] }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      camera={{ position: camera ?? [0, 0, 8], fov: 40 }}
      className="!absolute !inset-0"
      style={{ pointerEvents: "none" }}
    >
      {children}
    </Canvas>
  );
}
