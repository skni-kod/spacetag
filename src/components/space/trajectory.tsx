import { useMemo, useRef, useState } from "react";

import { type Color, useFrame, useThree } from "@react-three/fiber";
import type { Mesh } from "three";

import { Text } from "@/components/space/text";

import { useTime } from "@/hooks/time";

import { getSatelliteName } from "@/satellite/utilities";

import { getCoordinatesFromTle } from "@/utilities/get-coordinates-from-tle";

export type TrajectoryProps = {
  beginningDate: number;
  color: Color;
  endDate: number;
  tle: string;
  visible?: boolean;
};

export type TrajectoryPointProps = {
  color: Color;
  latitude: number;
  longitude: number;
  name: string;
  timestamp: number;
  x: number;
  y: number;
  z: number;
};

export const Trajectory = ({
  beginningDate,
  color,
  endDate,
  tle,
  visible,
}: TrajectoryProps) => {
  const getTime = useTime((state) => state.getTime);

  const points = useMemo(() => {
    const points: {
      latitude: number;
      longitude: number;
      name: string;
      timestamp: number;
      x: number;
      y: number;
      z: number;
    }[] = [];

    for (
      let timestamp = beginningDate;
      timestamp <= endDate;
      timestamp += 50000
    ) {
      if (Math.abs(getTime() - timestamp) <= 75000) {
        continue;
      }

      const { latitude, longitude, x, y, z } = getCoordinatesFromTle(
        tle,
        timestamp
      );

      const name = getSatelliteName(tle);

      points.push({ latitude, longitude, name, timestamp, x, y, z });
    }

    return points;
  }, [beginningDate, getTime, endDate, tle]);

  return (
    <group visible={visible}>
      {points.map(
        ({ latitude, longitude, name, timestamp, x, y, z }, index) => (
          <TrajectoryPoint
            color={color}
            key={index}
            latitude={Math.round(latitude)}
            longitude={Math.round(longitude)}
            name={name}
            timestamp={timestamp}
            x={x}
            y={y}
            z={z}
          />
        )
      )}
    </group>
  );
};

export const TrajectoryPoint = ({
  color,
  name,
  timestamp,
  x,
  y,
  z,
}: TrajectoryPointProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const textRef = useRef<Mesh>(null);

  const { camera } = useThree();

  useFrame(() => {
    if (!textRef.current) {
      return;
    }

    textRef.current.position.set(x, y - 0.1, z);
    textRef.current.rotation.set(
      camera.rotation.x,
      camera.rotation.y,
      camera.rotation.z
    );
  });

  return (
    <>
      <mesh
        onPointerEnter={() => {
          setShowTooltip(true);
        }}
        onPointerLeave={() => {
          setShowTooltip(false);
        }}
        position={[x, y, z]}
      >
        <sphereGeometry args={[0.02, 50, 50]} />
        <meshBasicMaterial color={color} />
      </mesh>
      {showTooltip && (
        <mesh ref={textRef}>
          <Text
            color={color}
            fontSize={0.05}
            outlineColor={0x000000}
            outlineWidth={0.01}
          >
            {`${name}\n${new Date(timestamp).toLocaleDateString("pl-PL", {
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}`}
          </Text>
        </mesh>
      )}
    </>
  );
};
