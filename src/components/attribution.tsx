import { type HTMLAttributes, useEffect, useState } from "react";

import { useSatellites } from "@/hooks/satellites";

export type AttributionProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "className"
>;

export const Attribution = (props: AttributionProps) => {
  const [show, setShow] = useState(false);
  const satellites = useSatellites((state) => state.satellites);

  useEffect(() => {
    setShow(Boolean(satellites.length));
  }, [satellites.length]);

  return show ? (
    <div
      className="fixed bottom-0 left-0 flex items-center bg-black/50 px-2 py-1 text-xs backdrop-blur-xl"
      {...props}
    >
      <span>
        <a
          className="underline"
          href="https://poly.pizza/m/1C3zb8Q9USk"
          rel="noreferrer"
          target="_blank"
        >
          Satellite
        </a>{" "}
        by{" "}
        <a
          className="underline"
          href="https://poly.pizza/u/Poly%20by%20Google"
          rel="noreferrer"
          target="_blank"
        >
          Poly by Google
        </a>{" "}
        [
        <a
          className="underline"
          href="https://creativecommons.org/licenses/by/3.0/"
          rel="noreferrer"
          target="_blank"
        >
          CC-BY
        </a>
        ] via Poly Pizza
      </span>
    </div>
  ) : null;
};
