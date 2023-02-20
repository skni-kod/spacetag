import { initTRPC } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import superjson from "superjson";

export type CreateContextOptions = {
  request?: CreateNextContextOptions["req"];
  response?: CreateNextContextOptions["res"];
};

/**
 * Context to use for:
 * - testing, to avoid mocking Next.js' request and response,
 * - tRPC's `createSSGHelpers`.
 *
 * @see {@link https://trpc.io/docs/context#inner-and-outer-context Inner and outer context}
 */
export const createInnerContext = (options: CreateContextOptions = {}) =>
  options;

/**
 * Context to use in a router.
 *
 * @see {@link https://trpc.io/docs/context Context}
 */
export const createContext = ({
  req: request,
  res: response,
}: CreateNextContextOptions) =>
  createInnerContext({
    request,
    response,
  });

export const { middleware, procedure, router } = initTRPC
  .context<typeof createInnerContext>()
  .create({
    errorFormatter: ({ shape }) => shape,
    transformer: superjson,
  });
