/**
 * This is the client-side entrypoint for the tRPC API used to create the `api`
 * object which contains the Next.js application wrapper, type-safe React Query
 * hooks and a few inference helpers for input and output types.
 */
import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import superjson from "superjson";

import type { Router } from "@/server/router";

/**
 * Input inference helper.
 *
 * @example type HelloInput = RouterInput["example"]["hello"]
 * @see {@link https://trpc.io/docs/infer-types Inferring Types}
 */
export type RouterInput = inferRouterInputs<Router>;

/**
 * Output inference helper.
 *
 * @example type HelloOutput = RouterOutput["example"]["hello"]
 * @see {@link https://trpc.io/docs/infer-types Inferring Types}
 */
export type RouterOutput = inferRouterOutputs<Router>;

const getBaseUrl = () => {
  /**
   * Browser should use relative URL.
   */
  if (typeof window !== "undefined") return "";

  /**
   * Vercel should use `VERCEL_URL`.
   */
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  /**
   * Development environment should use `localhost`.
   */
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

/**
 * A set of type-safe React Query hooks for your tRPC API.
 */
export const api = createTRPCNext<Router>({
  config: () => ({
    /**
     * Links used to determine request flow from client to server.
     *
     * @see {@link https://trpc.io/docs/links Links Overview}
     */
    links: [
      loggerLink({
        enabled: (options) =>
          process.env.NODE_ENV === "development" ||
          (options.direction === "down" && options.result instanceof Error),
      }),
      httpBatchLink({
        url: `${getBaseUrl()}/api/trpc`,
      }),
    ],
    queryClientConfig: {
      defaultOptions: {
        queries: {
          refetchOnMount: false,
          refetchOnReconnect: false,
          refetchOnWindowFocus: false,
          retry: false,
          staleTime: Infinity,
        },
      },
    },
    /**
     * Transformer used for data de-serialization from the server.
     *
     * @see {@link https://trpc.io/docs/data-transformers Data Transformers}
     */
    transformer: superjson,
  }),
  /**
   * Whether tRPC should await queries when server rendering pages.
   *
   * @see {@link https://trpc.io/docs/nextjs#ssr-boolean-default-false Usage with Next.js}
   */
  ssr: false,
});
