import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@/components/space/orbit-controls";
import { Time } from "@/components/space/time";

export type SceneProps = ComponentPropsWithoutRef<typeof Canvas> & {
  children?: ReactNode;
};

export const Scene = ({ children, ...props }: SceneProps) => (
  <Canvas {...props}>
    <OrbitControls />
    <ambientLight intensity={1.0} />
    <Time />
    {children}
    <Preload all />
  </Canvas>
);
