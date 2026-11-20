"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import { Scene3DCanvas } from "@/components/three/Scene3DCanvas";

function OrbitDot({ reduced }: { reduced: boolean }) {
  const dot = useRef<Group>(null);
  useFrame((state) => {
    if (!dot.current || reduced) return;
    dot.current.rotation.z = state.clock.elapsedTime * 0.35;
  });
  return (
    <group ref={dot}>
      <mesh position={[0, 1.83, 0]}>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshStandardMaterial color="#ff5a00" emissive="#ff5a00" emissiveIntensity={0.6} />
      </mesh>
    </group>
  );
}

/** Small decorative motif: two concentric rings with one point slowly orbiting. */
export default function RingMotifScene3D({ reduced }: { reduced: boolean }) {
  return (
    <Scene3DCanvas camera={[0, 0, 6]}>
      <ambientLight intensity={0.9} />
      <pointLight position={[2, 2, 3]} intensity={8} color="#ffb27a" />
      <mesh>
        <torusGeometry args={[1.83, 0.005, 8, 72]} />
        <meshBasicMaterial color="#e9e1d6" transparent opacity={0.7} />
      </mesh>
      <mesh>
        <torusGeometry args={[1.31, 0.005, 8, 64]} />
        <meshBasicMaterial color="#e9e1d6" transparent opacity={0.7} />
      </mesh>
      <OrbitDot reduced={reduced} />
    </Scene3DCanvas>
  );
}
