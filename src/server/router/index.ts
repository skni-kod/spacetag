import { router as createRouter } from "@/server";

import { satellite } from "./satellite";

export type Router = typeof router;

export const router = createRouter({
  satellite,
});
