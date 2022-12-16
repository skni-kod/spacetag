import create from "zustand";
import { persist } from "zustand/middleware";

import { generateId } from "@/utilities/generate-id";

export type Satellite = {
  visibility: boolean;
  path: boolean;
  color: string;
  id: string;
  tle: string;
};

export type SatellitesStore = {
  addSatellite: (satellite: Omit<Satellite, "id">) => Promise<void>;
  removeSatellite: (id: string) => void;
  hideSatellite: (id: string) => void;
  showSatellite: (id: string) => void;
  hideSatellitePath: (id: string) => void;
  showSatellitePath: (id: string) => void;
  satellites: Satellite[];
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
      removeSatellite: (id) =>
        set((state) => ({
          ...state,
          satellites: state.satellites.filter(
            (satellite) => satellite.id !== id
          ),
        })),
      hideSatellite: (id) =>
        set((state) => ({
          ...state,
          satellites: state.satellites.map((satellite) =>
            satellite.id === id
              ? {
                  ...satellite,
                  visibility: false,
                }
              : satellite
          ),
        })),
      showSatellite: (id) =>
        set((state) => ({
          ...state,
          satellites: state.satellites.map((satellite) =>
            satellite.id === id
              ? {
                  ...satellite,
                  visibility: true,
                }
              : satellite
          ),
        })),
      hideSatellitePath: (id) =>
        set((state) => ({
          ...state,
          satellites: state.satellites.map((satellite) =>
            satellite.id === id
              ? {
                  ...satellite,
                  path: false,
                }
              : satellite
          ),
      })),
      showSatellitePath: (id) =>
        set((state) => ({
          ...state,
          satellites: state.satellites.map((satellite) =>
            satellite.id === id
              ? {
                  ...satellite,
                  path: true,
                }
              : satellite
          ),
      })),

      satellites: [],
    }),
  )
);
