import type SatelliteDataJson from "@/satellite/data.json";

export type SatelliteData = {
  groups: Record<string, string>;
  satellites: Record<string, string[]>;
};

export type SatelliteGroup = keyof SatelliteGroups;
export type SatelliteGroups = SatelliteStrictData["groups"];
export type Satellite = keyof Satellites;
export type Satellites = SatelliteStrictData["satellites"];
export type SatelliteStrictData = typeof SatelliteDataJson;
