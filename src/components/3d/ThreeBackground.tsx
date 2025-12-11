"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles, Float } from "@react-three/drei";
import { useTheme } from "next-themes";

function Particles() {
  const ref = useRef<any>();
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={500} scale={12} size={2} speed={0.4} opacity={0.5} color="#00F0FF" />
      <Sparkles count={300} scale={10} size={3} speed={0.3} opacity={0.3} color="#9D4EDD" />
    </group>
  );
}

function FloatingShape() {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
           <mesh position={[10, 5, -10]} scale={2}>
               <icosahedronGeometry args={[1, 0]} />
               <meshStandardMaterial color="#00F0FF" wireframe transparent opacity={0.1} />
           </mesh>
           <mesh position={[-10, -5, -15]} scale={3}>
               <dodecahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color="#9D4EDD" wireframe transparent opacity={0.05} />
           </mesh>
        </Float>
    )
}

export default function ThreeBackground() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 bg-background transition-colors duration-300">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Particles />
        <FloatingShape />
        <ambientLight intensity={0.5} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background/0 to-background/0" />
    </div>
  );
}
