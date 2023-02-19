import { useRef } from "react";

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

import { IMAGES } from "@/constants/images";

export const Earth = () => {
  const meshRef = useRef<Mesh>(null);

  const [earthMap, topographyMap] = useTexture([
    IMAGES.earth.blueMarble[11],
    IMAGES.earth.topography,
  ]);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
  });

  return (
    <>
      <mesh ref={meshRef} scale={[6.378, 6.357, 6.378]}>
        <sphereGeometry args={[1, 100, 100]} />
        <meshStandardMaterial
          bumpMap={topographyMap}
          bumpScale={0.5}
          color={0xffffff}
          displacementMap={topographyMap}
          displacementScale={0.005}
          map={earthMap}
        />
      </mesh>
    </>
  );
};
