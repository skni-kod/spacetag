import { Button } from "@/components/button";
import { Drawer } from "@/components/drawer";
import { ManageHistoryIcon } from "@/components/icons/manage-history";
import { SatelliteIcon } from "@/components/icons/satellite";

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
          icon={<SatelliteIcon className="h-5 w-5" />}
          onClick={() => {
            setSatellitesDrawerOpen(true);
            setMenuDrawerOpen(false);
          }}
        >
          Manage Satellites
        </Button>
        <Button
          className="mx-auto w-3/5"
          icon={<ManageHistoryIcon className="h-5 w-5" />}
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
