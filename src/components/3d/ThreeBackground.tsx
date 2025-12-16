"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Sparkles, Float } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";

function ParallaxGroup({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const { camera } = useThree();
  
  // Refs for velocity calculation
  const lastMouse = useRef({ x: 0, y: 0 });
  const currentShake = useRef(0);
  
  useFrame((state, delta) => {
    if (!group.current) return;
    
    // 1. Mouse Parallax
    const mouseX = (state.pointer.x * window.innerWidth) / 2;
    const mouseY = (state.pointer.y * window.innerHeight) / 2;
    
    // 2. Velocity Calculation for Shake
    // Use raw pointer values (-1 to 1) for consistent velocity regardless of screen size
    const velX = state.pointer.x - lastMouse.current.x;
    const velY = state.pointer.y - lastMouse.current.y;
    const speed = Math.sqrt(velX * velX + velY * velY);
    
    // Update last mouse position
    lastMouse.current = { x: state.pointer.x, y: state.pointer.y };
    
    // Smooth the target shake intensity
    // speed * factor controls sensitivity. Cap at max intensity.
    const targetShake = Math.min(speed * 2.0, 0.1); // Sensitivity 2.0, Max 0.1
    currentShake.current = THREE.MathUtils.lerp(currentShake.current, targetShake, 0.1);
    
    // 3. Scroll Parallax
    const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    const maxScroll = typeof document !== 'undefined' ? document.body.scrollHeight - window.innerHeight : 1000;
    const scrollProgress = scrollY / (maxScroll || 1);
    const scrollRot = scrollProgress * Math.PI * 0.5;
    
    // 4. Apply Rotations (Parallax)
    const targetRotX = -mouseY * 0.0003;
    const targetRotY = mouseX * 0.0003;
    
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotX + scrollRot * 0.2, 0.1);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotY + scrollRot * 0.5, 0.1);

    // 5. Apply Position (Floating + Shake)
    const time = state.clock.getElapsedTime();
    const floatY = Math.sin(time * 0.5) * 0.2;
    
    // Generate random shake offsets based on smoothed intensity
    const shakeX = (Math.random() - 0.5) * currentShake.current;
    const shakeY = (Math.random() - 0.5) * currentShake.current;
    const shakeZ = (Math.random() - 0.5) * currentShake.current;

    group.current.position.x = shakeX;
    group.current.position.y = floatY + shakeY;
    group.current.position.z = shakeZ;
  });

  return <group ref={group}>{children}</group>;
}

function Particles() {
  const ref = useRef<any>();
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15; // Slow idle rotation
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
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
        <ambientLight intensity={0.5} />
        <ParallaxGroup>
            <Particles />
            <FloatingShape />
        </ParallaxGroup>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background/0 to-background/0" />
    </div>
  );
}
