import { type AnchorHTMLAttributes, forwardRef } from "react";

import NextLink, { type LinkProps as NextLinkProps } from "next/link";

import type { Merge } from "@/types";

export type LinkProps = Merge<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  NextLinkProps
>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, rel, target, ...props }, ref) => {
    const newRel =
      target === "_blank"
        ? rel
          ? rel.includes("noreferrer")
            ? rel
            : `noreferrer ${rel}`
          : "noreferrer"
        : rel;

    const samePage =
      typeof href === "string" &&
      (href.startsWith("#") || href.startsWith("/"));

    return samePage ? (
      <a href={href} ref={ref} rel={newRel} target={target} {...props} />
    ) : (
      <NextLink href={href} ref={ref} rel={newRel} target={target} {...props} />
    );
  }
);
