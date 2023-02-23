import { writeFile } from "fs/promises";

import { TLE_BASE_URL, TLE_DATA_PATH } from "@/tle/constants";
import type { TleData } from "@/tle/types";
import { getSatelliteNamesFromUrl } from "@/tle/utilities";

const generateTleData = async () => {
  const response = await fetch(TLE_BASE_URL);

  if (!response.ok) {
    console.error(`Service \`${TLE_BASE_URL}\` is unavailable.`);
  }

  const text = await response.text();
  const anchors = text.matchAll(/href="(gp\.php?.+?FORMAT=tle)">(.+?)</g);

  const groups = new Map<string, string>();

  for (const [_, url, group] of anchors) {
    if (!group || !url) continue;
    groups.set(group, `${TLE_BASE_URL}${url}`);
  }

  const results = await Promise.allSettled(
    [...groups].map(([group, url]) =>
      getSatelliteNamesFromUrl(url).then(
        (satellites) => [group, satellites] as const
      )
    )
  );

  const satelliteGroups = new Map<string, string[]>();

  for (const result of results) {
    if (result.status === "rejected") continue;

    const [group, satellites] = result.value;

    if (!satellites) continue;

    for (const name of satellites) {
      const satelliteGroup = satelliteGroups.get(name);

      if (satelliteGroup && !satelliteGroup.includes(group)) {
        satelliteGroups.set(name, [...satelliteGroup, group].sort());
        continue;
      }

      satelliteGroups.set(name, [group]);
    }
  }

  const data: TleData = {
    groups: Object.fromEntries(
      [...groups].sort(([group1], [group2]) => (group1 < group2 ? -1 : 1))
    ),
    satellites: Object.fromEntries(
      [...satelliteGroups]
        .sort(([name1], [name2]) => (name1 < name2 ? -1 : 1))
        .map(([name, groups]) => [name, groups] as [string, string[]])
    ),
  };

  await writeFile(TLE_DATA_PATH, JSON.stringify(data), "utf-8");
};

void generateTleData();
