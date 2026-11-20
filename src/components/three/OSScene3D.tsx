"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import type { Group, Mesh } from "three";
import { Scene3DCanvas } from "@/components/three/Scene3DCanvas";
import { OS_NODES } from "@/data/home";

const TONE_HEX: Record<string, string> = { peach: "#f0b98d", lilac: "#c9b3e0", sky: "#a9c6de", mint: "#a9d3bf" };
// Matches the HTML chip ring's proportion of the card (R / (CARD/2) = 230/310) at this
// canvas's camera framing, so the 3D nodes line up with the chips positioned in CSS.
const R3D = 1.94;
const CORE_R3D = 0.74;

function nodePos(angle: number) {
  const rad = (angle * Math.PI) / 180;
  return [Math.cos(rad) * R3D, -Math.sin(rad) * R3D, 0] as const;
}

function Core({ reduced }: { reduced: boolean }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    if (reduced) return;
    const t = state.clock.elapsedTime;
    ref.current.scale.setScalar(1 + Math.sin(t * 1.1) * 0.035);
    ref.current.rotation.y = t * 0.15;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[CORE_R3D, 3]} />
      <meshStandardMaterial color="#241a14" emissive="#ff5a00" emissiveIntensity={0.16} roughness={0.6} metalness={0.1} />
    </mesh>
  );
}

function OrbitRing({ reduced, activeAngle }: { reduced: boolean; activeAngle: number | null }) {
  const group = useRef<Group>(null);
  useFrame((_, delta) => {
    if (!group.current || reduced) return;
    group.current.rotation.z += delta * 0.045;
  });

  return (
    <group ref={group}>
      <mesh>
        <torusGeometry args={[R3D, 0.006, 8, 96]} />
        <meshBasicMaterial color="#e8c1a0" transparent opacity={0.5} />
      </mesh>
      {OS_NODES.map((n) => {
        const pos = nodePos(n.angle);
        const on = n.angle === activeAngle;
        return (
          <group key={n.id} position={pos}>
            <mesh>
              <sphereGeometry args={[on ? 0.16 : 0.12, 16, 16]} />
              <meshStandardMaterial color={TONE_HEX[n.tone]} emissive={on ? "#ff5a00" : "#000000"} emissiveIntensity={on ? 0.5 : 0} roughness={0.5} />
            </mesh>
            {on && <Line points={[[0, 0, 0], [-pos[0], -pos[1], -pos[2]]]} color="#ff5a00" lineWidth={1.4} dashed dashSize={0.12} gapSize={0.08} transparent opacity={0.8} />}
          </group>
        );
      })}
    </group>
  );
}

/** Ambient 3D backdrop behind the OS diagram's HTML chips: a slowly turning ring of nodes around a glowing core. */
export default function OSScene3D({ reduced, activeAngle }: { reduced: boolean; activeAngle: number | null }) {
  const lights = useMemo(
    () => (
      <>
        <ambientLight intensity={0.7} />
        <pointLight position={[3, 3, 4]} intensity={22} color="#ffb27a" />
        <pointLight position={[-3, -2, 3]} intensity={10} color="#d9c7ee" />
      </>
    ),
    [],
  );
  return (
    <Scene3DCanvas camera={[0, 0, 7.2]}>
      {lights}
      <Core reduced={reduced} />
      <OrbitRing reduced={reduced} activeAngle={activeAngle} />
    </Scene3DCanvas>
  );
}
