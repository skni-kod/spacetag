import { useRef } from "react";

import { useTexture } from "@react-three/drei";
import { type Mesh, BackSide } from "three";

import { IMAGES } from "@/constants/images";

export const Galaxy = () => {
  const meshRef = useRef<Mesh>(null);

  const galaxyMap = useTexture(IMAGES.galaxy);

  return (
    <>
      <mesh ref={meshRef} scale={[6.378, 6.357, 6.378]}>
        <sphereGeometry args={[1000, 32, 32]} />
        <meshBasicMaterial map={galaxyMap} side={BackSide} />
      </mesh>
    </>
  );
};
