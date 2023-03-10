import type { MouseEventHandler } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  MdCancel,
  MdDeleteForever,
  MdEdit,
  MdExpandMore,
  MdHourglassTop,
  MdMoreVert,
  MdMultipleStop,
  MdPlaylistAdd,
  MdSatelliteAlt,
  MdSave,
  MdSensorsOff,
  MdTextSnippet,
} from "react-icons/md";

import autoAnimate from "@formkit/auto-animate";
import { zodResolver } from "@hookform/resolvers/zod";
import { clsx } from "clsx";
import { z } from "zod";

import { api } from "@/api";

import { Button } from "@/components/button";
import { Combobox } from "@/components/combobox";
import { Drawer } from "@/components/drawer";
import { Error } from "@/components/error";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { Menu } from "@/components/menu";
import { MenuItem } from "@/components/menu/item";
import { Textarea } from "@/components/textarea";

import { useSatellites } from "@/hooks/satellites";

import { getSatelliteName, isValidTle } from "@/satellite/utilities";

type AddSatelliteMenuProps = {
  onCustomClick: MouseEventHandler<HTMLButtonElement>;
  onListClick: MouseEventHandler<HTMLButtonElement>;
};

export type SatellietesDrawerProps = {
  open?: boolean;
};

const satelliteFormSchema = z.object({
  color: z.string(),
  tle: z.string().min(1, "TLE is required.").refine(isValidTle, {
    message: "Invalid TLE.",
  }),
});

const AddSatelliteMenu = ({
  onCustomClick,
  onListClick,
}: AddSatelliteMenuProps) => (
  <Menu
    button={({ open }) => (
      <Button
        icon={
          <MdExpandMore
            aria-hidden="true"
            className={clsx("h-5 w-5 transition", open && "rotate-180")}
          />
        }
      >
        Add satellite
      </Button>
    )}
    className="mx-auto"
  >
    <MenuItem icon={MdPlaylistAdd} onClick={onListClick}>
      Add satellite from a list
    </MenuItem>
    <MenuItem icon={MdTextSnippet} onClick={onCustomClick}>
      Add satellite with a custom TLE
    </MenuItem>
  </Menu>
);

export const SatellitesDrawer = ({ open }: SatellietesDrawerProps) => {
  const {
    clearErrors,
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setValue,
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
  const [selectedSatellite, setSelectedSatellite] = useState<string | null>(
    null
  );
  const [view, setView] = useState<"form-custom" | "form-list" | "list">(
    "list"
  );

  const apiContext = api.useContext();
  const satelliteListQuery = api.satellite.find.all.useQuery();
  const selectedSatelliteQuery = api.satellite.find.byName.useQuery(
    {
      name: selectedSatellite as string,
    },
    {
      enabled: Boolean(selectedSatellite),
      onSettled: (tle) => {
        setValue("tle", tle ?? "", { shouldValidate: true });
      },
    }
  );

  const isTleLoading =
    Boolean(selectedSatellite) && selectedSatelliteQuery.isLoading;

  const satelliteList = useMemo(() => {
    if (!satelliteListQuery.data) return;

    const values = satelliteListQuery.data.map((satellite) => ({
      id: satellite,
      text: satellite,
    }));

    return values as [(typeof values)[number], ...typeof values];
  }, [satelliteListQuery.data]);

  const editedSatellite = useMemo(() => {
    return satelliteId
      ? satellites.find(({ id }) => id === satelliteId)
      : undefined;
  }, [satelliteId, satellites]);

  const emptyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    emptyRef.current && autoAnimate(emptyRef.current);
  }, []);

  return (
    <Drawer open={open}>
      <h2 className="pb-6 text-center text-2xl">Manage Satellites</h2>
      {view === "list" ? (
        satellites.length === 0 ? (
          <div className="flex flex-grow flex-col items-center gap-8 py-4 pb-32 text-center">
            <MdSensorsOff className="h-32 w-32 fill-white/25" />
            <span className="text-xl ">
              You haven&apos;t added any satellites yet.
            </span>
            <AddSatelliteMenu
              onCustomClick={() => {
                setSatelliteId(null);
                setView("form-custom");
              }}
              onListClick={() => {
                setSatelliteId(null);
                setView("form-list");
              }}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <ul className="divide-y divide-white/10">
              {satellites.map((satellite) => {
                const name = getSatelliteName(satellite.tle);

                return (
                  <li
                    className="flex select-none items-center gap-4 p-4"
                    key={satellite.id}
                  >
                    <span
                      className="block h-4 w-4 rounded-full"
                      style={{ backgroundColor: satellite.color }}
                    ></span>
                    <span>{name}</span>
                    <Menu
                      align="right"
                      button={() => (
                        <button className="h-full transition hover:text-neutral-400">
                          <MdMoreVert aria-hidden="true" className="h-5 w-5" />
                          <span className="sr-only">{name} Settings</span>
                        </button>
                      )}
                      className="ml-auto"
                    >
                      <MenuItem
                        icon={MdSatelliteAlt}
                        onClick={() => triggerVisible(satellite.id)}
                      >
                        {satellite.visible ? "Hide" : "Show"} satellite model
                      </MenuItem>
                      <MenuItem
                        icon={MdMultipleStop}
                        onClick={() => triggerPath(satellite.id)}
                      >
                        {satellite.path ? "Hide" : "Show"} satellite path
                      </MenuItem>
                      <MenuItem
                        icon={MdEdit}
                        onClick={() => {
                          setSatelliteId(satellite.id);
                          setView("form-custom");
                        }}
                      >
                        Edit
                      </MenuItem>
                      <MenuItem
                        icon={MdDeleteForever}
                        onClick={() => removeSatellite(satellite.id)}
                      >
                        Remove
                      </MenuItem>
                    </Menu>
                  </li>
                );
              })}
            </ul>
            <AddSatelliteMenu
              onCustomClick={() => {
                setSatelliteId(null);
                setView("form-custom");
              }}
              onListClick={() => {
                setSatelliteId(null);
                setView("form-list");
              }}
            />
          </div>
        )
      ) : (
        <form
          className="flex flex-grow flex-col px-4"
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
          <div className="flex-grow">
            {view === "form-custom" && (
              <>
                <Label htmlFor="tle">TLE</Label>
                <Textarea
                  className="font-mono text-xs"
                  defaultValue={editedSatellite?.tle}
                  id="tle"
                  required
                  rows={6}
                  {...register("tle")}
                />
                <Error>{errors.tle?.message}</Error>
              </>
            )}
            {view === "form-list" && (
              <>
                <Label htmlFor="tle">Satellite</Label>
                {satelliteList && (
                  <Combobox
                    nullable
                    onChange={(satellite) => {
                      clearErrors("tle");
                      setSelectedSatellite(satellite?.id ?? null);
                      setValue(
                        "tle",
                        satellite
                          ? apiContext.satellite.find.byName.getData({
                              name: satellite.id,
                            }) ?? ""
                          : ""
                      );
                    }}
                    placeholder="Select a satellite"
                    values={satelliteList}
                  />
                )}
                <Error>
                  {errors.tle && "Satellite has not been selected."}
                </Error>
              </>
            )}
            <Label htmlFor="color">Color</Label>
            <Input
              className="cursor-pointer hover:opacity-75"
              defaultValue={editedSatellite?.color ?? "#ffffff"}
              id="color"
              required
              type="color"
              {...register("color")}
            />
            <Error>{errors.color?.message}</Error>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              disabled={isTleLoading}
              icon={isTleLoading ? <MdHourglassTop /> : <MdSave />}
            >
              {isTleLoading ? "Loading..." : "Save"}
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
