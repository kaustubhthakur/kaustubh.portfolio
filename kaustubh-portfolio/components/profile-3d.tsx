"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

function PhotoCoin() {
  const texture = useTexture("/kaustubh.jpg");

  // clone + flip the texture for the bottom face so it isn't mirrored
  const bottomTexture = useMemo(() => {
    const t = texture.clone();
    t.wrapS = THREE.RepeatWrapping;
    t.repeat.x = -1;
    t.needsUpdate = true;
    return t;
  }, [texture]);

  return (
    <mesh rotation={[0.15, 0, 0]}>
      <cylinderGeometry args={[1.6, 1.6, 0.25, 64]} />
      <meshStandardMaterial attach="material-0" color="#7c9bff" metalness={0.4} roughness={0.35} />
      <meshStandardMaterial attach="material-1" map={texture} />
      <meshStandardMaterial attach="material-2" map={bottomTexture} />
    </mesh>
  );
}

export default function Profile3D() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />
      <directionalLight position={[-3, -2, -3]} intensity={0.4} />
      <Suspense fallback={null}>
        <PhotoCoin />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={2.2}
      />
    </Canvas>
  );
}