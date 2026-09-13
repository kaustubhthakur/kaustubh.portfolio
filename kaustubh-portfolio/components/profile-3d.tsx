"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Group, Points, BufferAttribute } from "three";

const PARTICLE_COUNT = 2400;
const MAX_RADIUS = 2.6;
const MIN_RADIUS = 0.32;

const CORE_COLOR = new THREE.Color("#bcd0ff");
const EDGE_COLOR = new THREE.Color("#1c2b6b");
const tmpColor = new THREE.Color();

function CodeSingularity() {
  const pointsRef = useRef<Points>(null);
  const groupRef = useRef<Group>(null);

  const { positions, colors, data } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const data = Array.from({ length: PARTICLE_COUNT }, () => ({
      radius: MIN_RADIUS + Math.random() * (MAX_RADIUS - MIN_RADIUS),
      angle: Math.random() * Math.PI * 2,
      speed: 0.15 + Math.random() * 0.35,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.5 + Math.random() * 1.5,
      wobbleAmp: 0.04 + Math.random() * 0.1,
    }));
    return { positions, colors, data };
  }, []);

  useFrame((_, delta) => {
    const posAttr = pointsRef.current?.geometry.attributes.position as
      | BufferAttribute
      | undefined;
    const colorAttr = pointsRef.current?.geometry.attributes.color as
      | BufferAttribute
      | undefined;
    if (!posAttr || !colorAttr) return;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = data[i];

      // pull accelerates as the particle nears the core
      const pull = 1 + (1 - (p.radius - MIN_RADIUS) / (MAX_RADIUS - MIN_RADIUS)) * 3;
      p.radius -= delta * p.speed * pull;
      p.angle += delta * (0.4 + pull * 0.6);
      p.wobble += delta * p.wobbleSpeed;

      if (p.radius < MIN_RADIUS) {
        p.radius = MAX_RADIUS;
        p.angle = Math.random() * Math.PI * 2;
      }

      const y = Math.sin(p.wobble) * p.wobbleAmp;
      const x = Math.cos(p.angle) * p.radius;
      const z = Math.sin(p.angle) * p.radius;

      posAttr.setXYZ(i, x, y, z);

      const t = 1 - (p.radius - MIN_RADIUS) / (MAX_RADIUS - MIN_RADIUS);
      tmpColor.copy(EDGE_COLOR).lerp(CORE_COLOR, t);
      colorAttr.setXYZ(i, tmpColor.r, tmpColor.g, tmpColor.b);
    }

    posAttr.needsUpdate = true;
    colorAttr.needsUpdate = true;

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.5, 0, 0.15]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          vertexColors
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>

      {/* glowing singularity core */}
      <mesh>
        <sphereGeometry args={[0.16, 32, 32]} />
        <meshBasicMaterial color="#eaf0ff" />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshBasicMaterial
          color="#7c9bff"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial
          color="#3457d5"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

export default function Profile3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 42 }} gl={{ alpha: true }}>
      <Suspense fallback={null}>
        <CodeSingularity />
      </Suspense>
    </Canvas>
  );
}