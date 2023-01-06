import { type ReactNode, useEffect, useRef } from "react";

import autoAnimate from "@formkit/auto-animate";
import { clsx } from "clsx";

export type DrawerProps = {
  children?: ReactNode;
  open?: boolean;
};

export const Drawer = ({ children, open }: DrawerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current && autoAnimate(ref.current);
  }, []);

  return (
    <div
      className={clsx(
        "fixed top-10 bottom-0 right-0 z-drawer max-[400px]:w-full max-[800px]:w-1/2 w-1/4",
        !open && "pointer-events-none"
      )}
      ref={ref}
    >
      {open && (
        <div className="flex h-full flex-col bg-black/50 py-6 backdrop-blur-xl">
          {children}
        </div>
      )}
    </div>
  );
};
