import { OrbitControls as DreiOrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export const OrbitControls = () => {
  const { camera } = useThree();

  return (
    <DreiOrbitControls
      camera={camera}
      makeDefault
      maxDistance={30}
      minDistance={7.5}
      target={[0, 0, 0]}
    />
  );
};
