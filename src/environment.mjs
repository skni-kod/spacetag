import { z } from "zod";

/** @typedef {z.input<typeof merged>} MergedInput */
/** @typedef {z.infer<typeof merged>} MergedOutput */
/** @typedef {z.SafeParseReturnType<MergedInput, MergedOutput>} MergedSafeParseReturn */

/**
 * Specify your server-side environment variables schema here. This way you can
 * ensure the application isn't built with invalid environment variables.
 */
const server = z.object({
  ANALYZE_BUNDLE: z
    .unknown()
    .transform((value) => (value === "true" ? true : false)),
  NODE_ENV: z.enum(["development", "production", "test"]),
  SKIP_ENVIRONMENT_VALIDATION: z
    .unknown()
    .transform((value) => (value === "true" ? true : false)),
});

/**
 * Specify your client-side environment variables schema here. This way you can
 * ensure the application isn't built with invalid environment variables. To
 * expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
const client = z.object({
  // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
});

/**
 * You can't destruct `process.env` as a regular object in the Next.js edge
 * runtimes (e.g. middlewares) or client-side so we need to destruct manually.
 * @type {Record<keyof z.infer<typeof server> | keyof z.infer<typeof client>, string | undefined>}
 */
const processEnv = {
  ANALYZE_BUNDLE: process.env.ANALYZE_BUNDLE,
  NODE_ENV: process.env.NODE_ENV,
  SKIP_ENVIRONMENT_VALIDATION: process.env.SKIP_ENVIRONMENT_VALIDATION,
};

const merged = server.merge(client);

let env = /** @type {MergedOutput} */ (/** @type {unknown} */ (process.env));

if (Boolean(process.env.SKIP_ENV_VALIDATION) === false) {
  const isServer = typeof window === "undefined";

  /**
   * On the server validate all environment variables. On the client validate
   * only exposed ones.
   */
  const parsed = /** @type {MergedSafeParseReturn} */ (
    isServer ? merged.safeParse(processEnv) : client.safeParse(processEnv)
  );

  if (parsed.success === false) {
    console.error(
      "❌ Invalid environment variables:",
      parsed.error.flatten().fieldErrors
    );
    throw new Error("Invalid environment variables");
  }

  env = new Proxy(parsed.data, {
    get(target, prop) {
      if (typeof prop !== "string") return undefined;

      /**
       * Throw a descriptive error if a server-side environment variable is
       * accessed on the client.
       */
      if (!isServer && !prop.startsWith("NEXT_PUBLIC_"))
        throw new Error(
          process.env.NODE_ENV === "production"
            ? "❌ Attempted to access a server-side environment variable on the client"
            : `❌ Attempted to access server-side environment variable '${prop}' on the client`
        );

      return target[/** @type {keyof typeof target} */ (prop)];
    },
  });
}

export { env };
