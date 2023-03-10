import { type AnchorHTMLAttributes, forwardRef } from "react";

import type { LinkProps as NextLinkProps } from "next/link";

import { Link } from "@/components/link";

import type { Merge } from "@/types";

import { buttonStyles } from "./button";

export type LinkProps = Merge<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  NextLinkProps
> & {
  variant?: "danger" | "primary" | "secondary";
};

export const ButtonLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, href, variant = "primary", ...props }, ref) => (
    <Link
      className={buttonStyles({ className, variant })}
      href={href}
      ref={ref}
      {...props}
    >
      {children}
    </Link>
  )
);
