import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "@/environment.mjs";

import { createContext } from "@/server";
import { router } from "@/server/router";

export const nextApiHandler = createNextApiHandler({
  createContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ error, path }) => {
          console.error(`❌ tRPC failed on ${path ?? "<no-path>"}:`, error);
        }
      : undefined,
  router,
});
