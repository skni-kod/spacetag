import { useRef, useState } from "react";

import { Color, useFrame, useThree } from "@react-three/fiber";
import { type Mesh, Vector3 } from "three";
import { getSatelliteName } from "tle.js";

import { Text } from "@/components/space/text";

import { useObj } from "@/hooks/obj";
import { useTime } from "@/hooks/time";

import { getCoordinatesFromTle } from "@/utilities/get-coordinates-from-tle";

export type SatelliteProps = {
  color: Color;
  tle: string;
  visible: boolean;
};

export const Satellite = ({ color, tle, visible }: SatelliteProps) => {
  const [initialized, setInitialized] = useState(false);

  const satellite = useObj<"Satellite:Satellite_mat", "Satellite_mesh">(
    "/assets/models/satellite.obj"
  );

  const getTime = useTime((state) => state.getTime);

  useFrame(() => {
    if (!planeteRef.current || !textRef.current) {
      return;
    }

    if (!initialized) {
      setInitialized(true);
    }

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
        <Text color={color} outlineColor={0x000000} outlineWidth={0.01}>
          {getSatelliteName(tle)}
        </Text>
      </mesh>
    </>
  );
};
