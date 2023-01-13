import { GoHome } from "react-icons/go";
import { MdAdd } from "react-icons/md";

import Link from "next/link";

import { Button } from "@/components/button";
import { Drawer } from "@/components/drawer";
import { ManageHistoryIcon } from "@/components/icons/manage-history";

export type MenuDrawer = {
  open?: boolean;
  setDateDrawerOpen: (value: boolean) => void;
  setMenuDrawerOpen: (value: boolean) => void;
  setSatellitesDrawerOpen: (value: boolean) => void;
};

export const MenuDrawer = ({
  open,
  setDateDrawerOpen,
  setMenuDrawerOpen,
  setSatellitesDrawerOpen,
}: MenuDrawer) => {
  return (
    <Drawer open={open}>
      <div className="flex flex-col justify-center gap-8 py-4 pb-32 ">
        <Button
          className="mx-auto w-3/5"
          icon={<GoHome className="h-5 w-5 fill-current" />}
        >
          <Link href="/"> Back to Homepage</Link>
        </Button>
        <Button
          className="mx-auto w-3/5"
          icon={<MdAdd />}
          onClick={() => {
            setSatellitesDrawerOpen(true);
            setMenuDrawerOpen(false);
          }}
        >
          Satellites
        </Button>
        <Button
          className="mx-auto w-3/5"
          icon={<ManageHistoryIcon className="h-5 w-5 fill-current" />}
          onClick={() => {
            setDateDrawerOpen(true);
            setMenuDrawerOpen(false);
          }}
        >
          Set Date
        </Button>
      </div>
    </Drawer>
  );
};
