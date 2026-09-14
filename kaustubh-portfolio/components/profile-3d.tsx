"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type {
  BufferAttribute,
  Group,
  Mesh,
  Points,
} from "three";

const PARTICLE_COUNT = 5200;

const INNER_RADIUS = 0.48;
const OUTER_RADIUS = 2.7;

const tmpColor = new THREE.Color();

const DARK = new THREE.Color("#050712");
const BLUE = new THREE.Color("#536dff");
const WHITE = new THREE.Color("#f4f7ff");

function CodeSingularity() {
  const diskRef = useRef<Group>(null);
  const coreRef = useRef<Group>(null);

  const particlesRef = useRef<Points>(null);

  const photonRingRef = useRef<Mesh>(null);
  const photonGlowRef = useRef<Mesh>(null);

  const lightRef = useRef<THREE.PointLight>(null);

  const time = useRef(0);

  const { positions, colors, sizes, data } =
    useMemo(() => {
      const positions = new Float32Array(
        PARTICLE_COUNT * 3
      );

      const colors = new Float32Array(
        PARTICLE_COUNT * 3
      );

      const sizes = new Float32Array(
        PARTICLE_COUNT
      );

      const data = Array.from(
        { length: PARTICLE_COUNT },
        () => {
        
          const r =
            Math.pow(Math.random(), 1.8);

          return {
            radius:
              INNER_RADIUS +
              r *
                (OUTER_RADIUS -
                  INNER_RADIUS),

            angle:
              Math.random() *
              Math.PI *
              2,

            speed:
              0.2 +
              Math.random() *
                0.45,

            wobble:
              Math.random() *
              Math.PI *
              2,

            wobbleSpeed:
              0.4 +
              Math.random() *
                1.6,

            turbulence:
              0.015 +
              Math.random() *
                0.11,

            thickness:
              (Math.random() -
                0.5) *
              0.12,

            size:
              0.35 +
              Math.random() *
                1.2,
          };
        }
      );

      return {
        positions,
        colors,
        sizes,
        data,
      };
    }, []);

  useFrame((_, delta) => {
    time.current += delta;

    const positionAttribute =
      particlesRef.current?.geometry
        .attributes.position as
        | BufferAttribute
        | undefined;

    const colorAttribute =
      particlesRef.current?.geometry
        .attributes.color as
        | BufferAttribute
        | undefined;

    if (
      !positionAttribute ||
      !colorAttribute
    ) {
      return;
    }

 

    for (
      let i = 0;
      i < PARTICLE_COUNT;
      i++
    ) {
      const p = data[i];

      const normalized =
        (p.radius - INNER_RADIUS) /
        (OUTER_RADIUS -
          INNER_RADIUS);

      const closeness =
        1 - normalized;

   
      const orbitalSpeed =
        0.25 +
        1.25 /
          Math.sqrt(
            Math.max(
              p.radius,
              0.45
            )
          );

      p.angle +=
        delta * orbitalSpeed;

      p.wobble +=
        delta *
        p.wobbleSpeed;

    
      const turbulence =
        Math.sin(
          p.wobble +
            time.current *
              0.7
        ) *
        p.turbulence *
        (0.3 + closeness);

     
      const vertical =
        p.thickness *
        (0.3 + closeness * 2) +
        Math.sin(
          p.wobble * 1.8
        ) *
          0.025;

      const radius =
        p.radius +
        turbulence;

      const x =
        Math.cos(p.angle) *
        radius;

      const z =
        Math.sin(p.angle) *
        radius;

      const y = vertical;

      positionAttribute.setXYZ(
        i,
        x,
        y,
        z
      );

    
      if (closeness > 0.72) {
        tmpColor
          .copy(WHITE)
          .lerp(
            BLUE,
            (1 -
              closeness) /
              0.28
          );
      } else {
        tmpColor
          .copy(DARK)
          .lerp(
            BLUE,
            Math.pow(
              closeness,
              1.35
            )
          );
      }

    
      const variation =
        0.72 +
        Math.sin(i * 17.37) *
          0.28;

      colorAttribute.setXYZ(
        i,
        tmpColor.r *
          variation,
        tmpColor.g *
          variation,
        tmpColor.b *
          variation
      );

      sizes[i] =
        p.size *
        (0.65 +
          closeness *
            1.1);
    }

    positionAttribute.needsUpdate =
      true;

    colorAttribute.needsUpdate =
      true;

   

    if (diskRef.current) {
      diskRef.current.rotation.y +=
        delta * 0.075;

     
      diskRef.current.rotation.x =
        0.5 +
        Math.sin(
          time.current * 0.2
        ) *
          0.018;
    }

 

    if (coreRef.current) {
      coreRef.current.rotation.y +=
        delta * 0.7;

      coreRef.current.rotation.z +=
        delta * 0.04;
    }

    

    if (photonRingRef.current) {
      photonRingRef.current.rotation.z +=
        delta * 0.55;

      photonRingRef.current.rotation.y +=
        delta * 0.15;

      const pulse =
        1 +
        Math.sin(
          time.current * 2.5
        ) *
          0.018;

      photonRingRef.current.scale.setScalar(
        pulse
      );
    }


    if (photonGlowRef.current) {
      const pulse =
        1 +
        Math.sin(
          time.current * 1.7
        ) *
          0.025;

      photonGlowRef.current.scale.setScalar(
        pulse
      );
    }

    if (lightRef.current) {
      lightRef.current.intensity =
        1.2 +
        Math.sin(
          time.current * 2
        ) *
          0.15;
    }
  });

  return (
    <group
      ref={diskRef}
      rotation={[
        0.5,
        0,
        0.08,
      ]}
    >
   

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              positions,
              3,
            ]}
          />

          <bufferAttribute
            attach="attributes-color"
            args={[
              colors,
              3,
            ]}
          />
        </bufferGeometry>

        <pointsMaterial
          size={0.042}
          vertexColors
          transparent
          opacity={0.92}
          blending={
            THREE.AdditiveBlending
          }
          depthWrite={false}
          sizeAttenuation
        />
      </points>

 

      <group ref={coreRef}>
     
        <mesh>
          <sphereGeometry
            args={[
              0.38,
              96,
              96,
            ]}
          />

          <meshBasicMaterial
            color="#000000"
            toneMapped={false}
          />
        </mesh>


        <mesh scale={[1.05, 1.05, 1.05]}>
          <sphereGeometry
            args={[
              0.44,
              64,
              64,
            ]}
          />

          <meshBasicMaterial
            color="#000000"
            transparent
            opacity={0.95}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>

     

        <mesh
          ref={photonRingRef}
          rotation={[
            Math.PI / 2,
            0,
            0,
          ]}
        >
          <torusGeometry
            args={[
              0.52,
              0.035,
              24,
              160,
            ]}
          />

          <meshBasicMaterial
            color="#e8efff"
            transparent
            opacity={0.9}
            blending={
              THREE.AdditiveBlending
            }
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>



        <mesh
          rotation={[
            Math.PI / 2,
            0,
            0,
          ]}
        >
          <torusGeometry
            args={[
              0.59,
              0.012,
              16,
              160,
            ]}
          />

          <meshBasicMaterial
            color="#8ca6ff"
            transparent
            opacity={0.65}
            blending={
              THREE.AdditiveBlending
            }
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>

    

        <mesh
          ref={photonGlowRef}
          scale={[
            1,
            0.55,
            1,
          ]}
        >
          <sphereGeometry
            args={[
              0.68,
              64,
              64,
            ]}
          />

          <meshBasicMaterial
            color="#506eff"
            transparent
            opacity={0.035}
            blending={
              THREE.AdditiveBlending
            }
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>

   

        <mesh
          scale={[
            1.25,
            0.4,
            1.25,
          ]}
        >
          <sphereGeometry
            args={[
              0.72,
              48,
              48,
            ]}
          />

          <meshBasicMaterial
            color="#3049b8"
            transparent
            opacity={0.018}
            blending={
              THREE.AdditiveBlending
            }
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>

    

        <pointLight
          ref={lightRef}
          color="#9eb4ff"
          distance={3.5}
          intensity={1.2}
          decay={2}
        />
      </group>
    </group>
  );
}

export default function Profile3D() {
  return (
    <Canvas
      camera={{
        position: [
          0,
          0,
          4.6,
        ],
        fov: 45,
      }}
      gl={{
        alpha: true,
        antialias: true,
      }}
      dpr={[1, 2]}
      style={{
        background:
          "transparent",
      }}
    >
      <ambientLight intensity={0.025} />

      <Suspense fallback={null}>
        <CodeSingularity />
      </Suspense>
    </Canvas>
  );
}