"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

export function FloatingShapes() {
  return (
    <group>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron args={[1, 0]} position={[-3, 2, -5]}>
          <meshStandardMaterial
            color="#00ffff"
            wireframe
            transparent
            opacity={0.3}
          />
        </Icosahedron>
      </Float>
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <Icosahedron args={[0.8, 0]} position={[4, -1, -4]}>
          <meshStandardMaterial
            color="#a855f7"
            wireframe
            transparent
            opacity={0.3}
          />
        </Icosahedron>
      </Float>

      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <Icosahedron args={[1.5, 0]} position={[0, 0, -8]}>
           <meshStandardMaterial
            color="#ffffff"
            wireframe
            transparent
            opacity={0.1}
          />
        </Icosahedron>
      </Float>
    </group>
  );
}
