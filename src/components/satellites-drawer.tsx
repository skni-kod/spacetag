import { useEffect, useRef, useState } from "react";
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
import { getLatLngObj, getSatelliteName } from "tle.js";
import { z } from "zod";

import { Button } from "@/components/button";
import { Drawer } from "@/components/drawer";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Textarea } from "@/components/textarea";

import { useSatellites } from "@/hooks/satellites";

import { Error } from "./error";

export type SatellietesDrawerProps = {
  open?: boolean;
};

const addSatelliteSchema = z.object({
  color: z.string(),
  tle: z
    .string()
    .min(1)
    .refine(
      (tle) => {
        try {
          getLatLngObj(tle, Date.now());
        } catch (error) {
          return false;
        }
        return true;
      },
      {
        message: "TLE is not valid.",
      }
    ),
});

export const SatellitesDrawer = ({ open }: SatellietesDrawerProps) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<z.infer<typeof addSatelliteSchema>>({
    delayError: 1000,
    mode: "onChange",
    resolver: zodResolver(addSatelliteSchema),
  });

  const {
    addSatellite,
    editSatellite,
    removeSatellite,
    satellites,
    triggerPath,
    triggerVisible,
  } = useSatellites();

  const [form, setForm] = useState(false);
  const [edit, setEdit] = useState("-1");

  const emptyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    emptyRef.current && autoAnimate(emptyRef.current);
  }, []);

  return (
    <Drawer open={open}>
      <h2 className="pb-6 text-center text-2xl">Manage Satellites</h2>
      {satellites.length === 0 && !form ? (
        <div className="flex flex-1 flex-col items-center gap-8 py-4 pb-32 text-center">
          <MdSensorsOff className="h-32 w-32 fill-white/25 " />
          <span className="text-xl ">
            You haven&apos;t added any satellites yet.
          </span>
          <Button icon={<MdAdd />} onClick={() => setForm(true)}>
            New Satellite
          </Button>
        </div>
      ) : !form && edit === "-1" ? (
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
                  onClick={() => setEdit(satellite.id)}
                >
                  <MdEdit className="h-5 w-5" />
                </button>
                <button
                  className="ml-auto mr-0 block transition-colors hover:text-red-500"
                  onClick={() => removeSatellite(satellite.id)}
                >
                  <MdDeleteForever className="h-5 w-5" />
                </button>
              </li>
            ))}
          </ul>
          <button
            className="flex items-center justify-center p-4 transition-colors hover:text-sky-400"
            onClick={() => setForm(true)}
          >
            <MdAdd className="h-5 w-5" />
            <span>Add New Satellite</span>
          </button>
        </>
      ) : edit === "-1" && form ? (
        <form
          className="flex flex-1 flex-col px-4"
          onSubmit={(event) => {
            event.preventDefault();

            void handleSubmit(async ({ color, tle }) => {
              await addSatellite({
                color,
                path: true,
                tle,
                visible: true,
              });

              setForm(false);
              reset();
            })(event);
          }}
        >
          <div className="flex-1">
            <Label htmlFor="tle">TLE</Label>
            <Textarea
              className="font-mono text-xs"
              id="tle"
              required
              rows={6}
              {...register("tle")}
            />
            <Error>{errors.tle?.message}</Error>
            <Label htmlFor="color">Color</Label>
            <Input
              defaultValue="#ffffff"
              id="color"
              required
              type="color"
              {...register("color")}
            />
            <Error>{errors.color?.message}</Error>
          </div>
          <div className="flex justify-center gap-4">
            <Button icon={<MdAdd />}>Add Satellite</Button>
            <Button
              icon={<MdCancel />}
              onClick={() => {setForm(false); reset();}}
              type="button"
              variant="danger"
            >
              Cancel
            </Button>
          </div>
        </form>
      ) : !form && edit !== "-1" ? (
        <form
          className="flex flex-1 flex-col px-4"
          onSubmit={(event) => {
            event.preventDefault();
            void handleSubmit(({ color, tle }) => {
              editSatellite(edit, {
                color,
                id: edit,
                path: true,
                tle,
                visible: true,
              });

              setEdit("-1");
              reset();
            })(event);
          }}
        >
          <div className="flex-1">
            <Label htmlFor="tle">TLE</Label>
            <Textarea
              className="font-mono text-xs"
              defaultValue={
                satellites.find((satellite) => satellite.id === edit)!.tle
              }
              id="tle"
              required
              rows={6}
              {...register("tle")}
            />
            <Error>{errors.tle?.message}</Error>
            <Label htmlFor="color">Color</Label>
            <Input
              defaultValue={
                satellites.find((satellite) => satellite.id === edit)!.color
              }
              id="color"
              required
              type="color"
              {...register("color")}
            />
            <Error>{errors.color?.message}</Error>
          </div>
          <div className="flex justify-center gap-4">
            <Button icon={<MdEdit />}>Edit Satellite</Button>
            <Button
              icon={<MdCancel />}
              onClick={() => {setEdit("-1"); reset();}}
              type="button"
              variant="danger"
            >
              Cancel
            </Button>
          </div>
        </form>
      ) : null}
    </Drawer>
  );
};
