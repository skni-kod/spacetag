import { useProgress } from "@react-three/drei";

import { Meter } from "@/components/meter";

export const Progress = () => {
  const { active, progress } = useProgress();

  return active || progress === 0 ? (
    <div className="absolute inset-0 z-loader flex items-center justify-center bg-black">
      <Meter label="LOADING" unit="%" value={progress} />
    </div>
  ) : null;
};
