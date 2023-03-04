import { useEffect, useRef, useState } from "react";
import { MdRestartAlt } from "react-icons/md";

import autoAnimate from "@formkit/auto-animate";

import { Button } from "@/components/button";
import { Drawer } from "@/components/drawer";
import { Input } from "@/components/input";

import { useTime } from "@/hooks/time";

export type DateDrawerProps = {
  open?: boolean;
};

const toDateTimeLocalValue = (timestamp: number) =>
  new Date(timestamp).toISOString().slice(0, 16);

export const DateDrawer = ({ open }: DateDrawerProps) => {
  const { getTime, setOffset, setOffsetFromDate } = useTime(
    ({ getTime, setOffset, setOffsetFromDate }) => ({
      getTime,
      setOffset,
      setOffsetFromDate,
    })
  );

  const [date, setDate] = useState(toDateTimeLocalValue(getTime()));

  const emptyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (emptyRef.current) {
      autoAnimate(emptyRef.current);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    setDate(toDateTimeLocalValue(getTime()));
  }, [getTime, open]);

  return (
    <Drawer open={open}>
      <h2 className="pb-6 text-center text-2xl">Set a date</h2>
      <form
        className="flex flex-col items-center gap-8"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Input
          onChange={(event) => {
            const value =
              event.target.value || toDateTimeLocalValue(Date.now());
            setDate(value);
            setOffsetFromDate(new Date(`${value}Z`));
          }}
          suffix="UTC"
          type="datetime-local"
          value={date}
        />
        <Button
          icon={<MdRestartAlt className="h-5 w-5" />}
          onClick={() => {
            console.log(toDateTimeLocalValue(Date.now()));
            setDate(toDateTimeLocalValue(Date.now()));
            setOffset(0);
          }}
          type="button"
        >
          Reset
        </Button>
      </form>
    </Drawer>
  );
};
