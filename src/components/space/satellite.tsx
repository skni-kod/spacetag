import { useRef } from "react";

import { useGLTF } from "@react-three/drei";
import { type Color, useFrame, useThree } from "@react-three/fiber";
import type { Material } from "three";
import { type Mesh, Vector3 } from "three";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import { Text } from "@/components/space/text";

import { useTime } from "@/hooks/time";

import { getSatelliteName } from "@/tle/utilities";

import { getCoordinatesFromTle } from "@/utilities/get-coordinates-from-tle";

export type SatelliteProps = {
  color: Color;
  tle: string;
  visible: boolean;
};

export const Satellite = ({ color, tle, visible }: SatelliteProps) => {
  const satellite = useGLTF("/assets/models/satellite.glb") as GLTF & {
    materials: Record<"Satellite:Satellite_mat", Material>;
    nodes: Record<"Satellite_mesh", Mesh>;
  };

  const getTime = useTime((state) => state.getTime);

  useFrame(() => {
    if (!planeteRef.current || !textRef.current) return;

    const { x, y, z } = getCoordinatesFromTle(tle, getTime());

    planeteRef.current.position.set(x, y, z);
    textRef.current.position.set(x, y - 0.2, z);
    textRef.current.rotation.set(
      camera.rotation.x,
      camera.rotation.y,
      camera.rotation.z
    );
  });

  const planeteRef = useRef<Mesh>(null);
  const textRef = useRef<Mesh>(null);

  const { camera } = useThree();
  const vector = new Vector3();

  camera.getWorldDirection(vector);

  return (
    <>
      <mesh
        geometry={satellite.nodes.Satellite_mesh.geometry}
        ref={planeteRef}
        scale={[0.01, 0.01, 0.01]}
        visible={visible}
      >
        <meshPhysicalMaterial color={color} />
      </mesh>
      <mesh ref={textRef} visible={visible}>
        <Text
          color={color}
          fontSize={0.1}
          outlineColor={0x000000}
          outlineWidth={0.01}
        >
          {getSatelliteName(tle)}
        </Text>
      </mesh>
    </>
  );
};
