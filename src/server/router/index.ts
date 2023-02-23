import { router as createRouter } from "@/server";

import { tle } from "./tle";

export type Router = typeof router;

export const router = createRouter({
  tle,
});
