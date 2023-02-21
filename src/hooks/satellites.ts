import { create } from "zustand";
import { persist } from "zustand/middleware";

import { generateId } from "@/utilities/generate-id";

export type Satellite = {
  color: string;
  id: string;
  path: boolean;
  tle: string;
  visible: boolean;
};

export type SatellitesStore = {
  addSatellite: (satellite: Omit<Satellite, "id">) => Promise<void>;
  editSatellite: (id: string, satellite: Satellite) => void;
  removeSatellite: (id: string) => void;
  satellites: Satellite[];
  triggerPath: (id: string) => void;
  triggerVisible: (id: string) => void;
};

export const useSatellites = create(
  persist<SatellitesStore>(
    (set) => ({
      addSatellite: async (satellite) => {
        const id = await generateId();

        set((state) => ({
          ...state,
          satellites: [
            ...state.satellites,
            {
              ...satellite,
              id,
            },
          ],
        }));
      },
      editSatellite: (id, sat) =>
        set((state) => ({
          ...state,
          satellites: state.satellites.map((satellite) =>
            satellite.id === id
              ? {
                  ...satellite,
                  color: sat.color,
                  tle: sat.tle,
                }
              : satellite
          ),
        })),
      removeSatellite: (id) =>
        set((state) => ({
          ...state,
          satellites: state.satellites.filter(
            (satellite) => satellite.id !== id
          ),
        })),
      satellites: [],
      triggerPath: (id) =>
        set((state) => ({
          ...state,
          satellites: state.satellites.map((satellite) =>
            satellite.id === id
              ? {
                  ...satellite,
                  path: !satellite.path,
                }
              : satellite
          ),
        })),
      triggerVisible: (id) =>
        set((state) => ({
          ...state,
          satellites: state.satellites.map((satellite) =>
            satellite.id === id
              ? {
                  ...satellite,
                  visible: !satellite.visible,
                }
              : satellite
          ),
        })),
    }),
    {
      name: "satellites",
    }
  )
);
