import { Fragment, Suspense } from "react";

import { Earth } from "@/components/space/earth";

import { useSatellites } from "@/hooks/satellites";
import { useTime } from "@/hooks/time";

import { Galaxy } from "./galaxy";
import { Satellite } from "./satellite";
import { Sun } from "./sun";
import { Trajectory } from "./trajectory";

export const Space = () => {
  const satellites = useSatellites((state) => state.satellites);

  const { getTime } = useTime(({ getTime, timestamp }) => ({
    getTime,
    timestamp,
  }));

  return (
    <>
      <Suspense fallback={null}>
        <Galaxy />
        <Sun />
        <Earth />
      </Suspense>
      {satellites.map((satellite) => (
        <Fragment key={satellite.id}>
          <Satellite
            color={satellite.color}
            tle={satellite.tle}
            visible={satellite.visible}
          />
          <Trajectory
            beginningDate={getTime() - 4000000}
            color={satellite.color}
            endDate={getTime() + 4000000}
            tle={satellite.tle}
            visible={satellite.path}
          />
        </Fragment>
      ))}
    </>
  );
};
