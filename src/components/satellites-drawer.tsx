import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  MdAdd,
  MdCancel,
  MdDeleteForever,
  MdEdit,
  MdOutlineRemoveRedEye,
  MdPublic,
  MdPublicOff,
  MdRemoveRedEye,
  MdSensorsOff,
} from "react-icons/md";

import autoAnimate from "@formkit/auto-animate";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/button";
import { Drawer } from "@/components/drawer";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Textarea } from "@/components/textarea";

import { useSatellites } from "@/hooks/satellites";

import { getSatelliteName, isValidTle } from "@/tle/utilities";

import { Error } from "./error";

export type SatellietesDrawerProps = {
  open?: boolean;
};

const satelliteFormSchema = z.object({
  color: z.string(),
  tle: z.string().min(1).refine(isValidTle, {
    message: "Invalid TLE.",
  }),
});

export const SatellitesDrawer = ({ open }: SatellietesDrawerProps) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<z.infer<typeof satelliteFormSchema>>({
    delayError: 1000,
    mode: "onChange",
    resolver: zodResolver(satelliteFormSchema),
  });

  const {
    addSatellite,
    editSatellite,
    removeSatellite,
    satellites,
    triggerPath,
    triggerVisible,
  } = useSatellites();

  const [satelliteId, setSatelliteId] = useState<string | null>(null);
  const [view, setView] = useState<"form" | "list">("list");

  const selectedSatellite = useMemo(
    () =>
      satelliteId ? satellites.find(({ id }) => id === satelliteId) : undefined,
    [satelliteId, satellites]
  );

  const emptyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    emptyRef.current && autoAnimate(emptyRef.current);
  }, []);

  return (
    <Drawer open={open}>
      <h2 className="pb-6 text-center text-2xl">Manage Satellites</h2>
      {view === "list" ? (
        satellites.length === 0 ? (
          <div className="flex flex-1 flex-col items-center gap-8 py-4 pb-32 text-center">
            <MdSensorsOff className="h-32 w-32 fill-white/25 " />
            <span className="text-xl ">
              You haven&apos;t added any satellites yet.
            </span>
            <Button icon={<MdAdd />} onClick={() => setView("form")}>
              New Satellite
            </Button>
          </div>
        ) : (
          <>
            <ul className="divide-y divide-white/10">
              {satellites.map((satellite) => (
                <li
                  className="flex select-none items-center gap-4 p-4 transition-colors hover:bg-white/10"
                  key={satellite.id}
                >
                  <span
                    className="block h-4 w-4 rounded-full"
                    style={{ backgroundColor: satellite.color }}
                  ></span>
                  <button onClick={() => triggerVisible(satellite.id)}>
                    {satellite.visible ? (
                      <MdRemoveRedEye className="h-5 w-5" />
                    ) : (
                      <MdOutlineRemoveRedEye className="h-5 w-5" />
                    )}
                  </button>
                  <button onClick={() => triggerPath(satellite.id)}>
                    {satellite.path ? (
                      <MdPublic className="h-5 w-5" />
                    ) : (
                      <MdPublicOff className="h-5 w-5" />
                    )}
                  </button>
                  <span>{getSatelliteName(satellite.tle)}</span>
                  <button
                    className="ml-auto mr-0 block transition-colors hover:text-sky-400"
                    onClick={() => {
                      setSatelliteId(satellite.id);
                      setView("form");
                    }}
                  >
                    <MdEdit className="h-5 w-5" />
                  </button>
                  <button
                    className="ml-0 mr-0 block transition-colors hover:text-red-500"
                    onClick={() => removeSatellite(satellite.id)}
                  >
                    <MdDeleteForever className="h-5 w-5" />
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="flex items-center justify-center p-4 transition-colors hover:text-sky-400"
              onClick={() => {
                setSatelliteId(null);
                setView("form");
              }}
            >
              <MdAdd className="h-5 w-5" />
              <span>Add New Satellite</span>
            </button>
          </>
        )
      ) : (
        <form
          className="flex flex-1 flex-col px-4"
          onSubmit={(event) => {
            event.preventDefault();

            void handleSubmit(async ({ color, tle }) => {
              if (satelliteId) {
                editSatellite({
                  color,
                  id: satelliteId,
                  tle,
                });
              } else {
                await addSatellite({
                  color,
                  path: true,
                  tle,
                  visible: true,
                });
              }

              setView("list");
              reset();
            })(event);
          }}
        >
          <div className="flex-1">
            <Label htmlFor="tle">TLE</Label>
            <Textarea
              className="font-mono text-xs"
              defaultValue={selectedSatellite?.tle}
              id="tle"
              required
              rows={6}
              {...register("tle")}
            />
            <Error>{errors.tle?.message}</Error>
            <Label htmlFor="color">Color</Label>
            <Input
              defaultValue={selectedSatellite?.color ?? "#ffffff"}
              id="color"
              required
              type="color"
              {...register("color")}
            />
            <Error>{errors.color?.message}</Error>
          </div>
          <div className="flex justify-center gap-4">
            <Button icon={satelliteId ? <MdEdit /> : <MdAdd />}>
              {satelliteId ? "Edit" : "Add"} Satellite
            </Button>
            <Button
              icon={<MdCancel />}
              onClick={() => {
                setView("list");
                reset();
              }}
              type="button"
              variant="danger"
            >
              Cancel
            </Button>
          </div>
        </form>
      )}
    </Drawer>
  );
};
