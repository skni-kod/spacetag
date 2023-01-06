import type { HTMLAttributes } from "react";

import { clsx } from "clsx";

export type NavbarProps = HTMLAttributes<HTMLElement>;

export const Navbar = ({ className, ...props }: NavbarProps) => (
  <nav
    className={clsx(
      "fixed top-0 left-0 py-0 right-0 z-navbar flex justify-between gap-8 bg-black/50 px-2 backdrop-blur-xl",
      className
    )}
    {...props}
  />
);
