import { useMemo } from "react";

import { useGraph, useLoader } from "@react-three/fiber";
import type { Material, Mesh } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

/**
 * @see {@link https://github.com/pmndrs/react-three-fiber/issues/245#issuecomment-1214450109 useLoader to load one object, use it multiple times}
 */
export const useObj = <
  Materials extends string = string,
  Nodes extends string = string
>(
  url: string
) => {
  const scene = useLoader(OBJLoader, url);
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  const { materials, nodes } = useGraph(clonedScene);

  return {
    materials: materials as Record<Materials, Material>,
    nodes: nodes as Record<Nodes, Mesh>,
    scene: clonedScene,
  };
};
