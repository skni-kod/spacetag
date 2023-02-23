export type TleData = {
  groups: Record<string, string>;
  satellites: Record<string, string[]>;
};

export type TleGroup = keyof TleGroups;
export type TleGroups = TleStrictData["groups"];
export type TleSatellite = keyof TleSatellites;
export type TleSatellites = TleStrictData["satellites"];
export type TleStrictData = typeof import("@/tle/data.json");
