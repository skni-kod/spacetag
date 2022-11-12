import { Fragment, Suspense } from "react";

import { Canvas } from "@react-three/fiber";

import { Earth } from "@/components/space/earth";

import { useSatellites } from "@/hooks/satellites";
import { useTime } from "@/hooks/time";

import { Galaxy } from "./galaxy";
import { OrbitControls } from "./orbit-controls";
import { Satellite } from "./satellite";
import { Sun } from "./sun";
import { Time } from "./time";
import { Trajectory } from "./trajectory";

export const Space = () => {
  const satellites = useSatellites((state) => state.satellites);

  const { getTime } = useTime(({ getTime, timestamp }) => ({
    getTime,
    timestamp,
  }));

  return (
    <>
      <Canvas
        camera={{
          far: 10000,
          near: 0.0001,
          position: [0, 0, 10],
        }}
      >
        <OrbitControls />
        <ambientLight intensity={1.0} />
        <Time />
        <Suspense fallback={null}>
          <Galaxy />
          <Sun />
          <Earth />
        </Suspense>
        {satellites.map((satellite) => (
          <Fragment key={satellite.id}>
            <Satellite color={satellite.color} tle={satellite.tle} />
            <Trajectory
              beginningDate={getTime() - 4000000}
              color={satellite.color}
              endDate={getTime() + 4000000}
              tle={satellite.tle}
            />
          </Fragment>
        ))}
      </Canvas>
    </>
  );
};
