import { getLatLngObj, isValidTLE } from "tle.js";

import type { TleGroup, TleGroups, TleSatellite, TleSatellites } from "./types";

export { getSatelliteName } from "tle.js";

export const getSatelliteData = () =>
  import("./data.json").then((module) => module.default);

export const getSatelliteNamesFromUrl = async (url: string) => {
  const satellites = await getSatelliteFromUrl(url);
  return satellites ? Object.keys(satellites) : null;
};

export const getSatelliteFromUrl = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) return null;

  const text = await response.text();
  const satellites: Record<string, string> = {};
  let lines: string[] = [];

  for (const line of text.split(/\r?\n/)) {
    lines.push(line);

    if (lines.length !== 3 || !lines[0]) continue;

    const tle = lines.join("\n");
    if (isValidTle(tle)) satellites[lines[0].trim()] = lines.join("\n");
    lines = [];
  }

  return Object.keys(satellites).length ? satellites : null;
};

export const getGeographicCoordinates = (
  ...parameters: Parameters<typeof getLatLngObj>
) => {
  const { lat: latitude, lng: longitude } = getLatLngObj(...parameters);
  return { latitude, longitude };
};

export const isElement = (
  satellites: TleSatellites,
  name: string
): name is TleSatellite => name in satellites;

export const isGroup = (groups: TleGroups, name: string): name is TleGroup =>
  name in groups;

export const isValidTle = isValidTLE;
