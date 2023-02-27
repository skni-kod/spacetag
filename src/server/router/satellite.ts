import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  getSatelliteData,
  getSatelliteFromUrl,
  isGroup,
  isSatellite,
} from "@/satellite/utilities";

import { procedure, router } from "@/server";

export const satellite = router({
  find: router({
    all: procedure.query(async () =>
      Object.keys((await getSatelliteData()).satellites)
    ),
    byName: procedure
      .input(z.object({ name: z.string().max(24).min(1) }))
      .query(async ({ input: { name } }) => {
        const { groups, satellites } = await getSatelliteData();

        if (!isSatellite(satellites, name)) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: `\`${name}\` element could not be found`,
          });
        }

        for (const group of satellites[name]) {
          if (!isGroup(groups, group)) continue;

          const element = await getSatelliteFromUrl(groups[group]);

          if (element?.[name]) return element[name];
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `TLE data for \`${name}\` element could not be found`,
        });
      }),
  }),
});
