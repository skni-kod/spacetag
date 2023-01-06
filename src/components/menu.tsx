import { Button } from "@/components/button";
import { Drawer } from "@/components/drawer";

import { ManageHistoryIcon } from "@/components/icons/manage-history";
  

import { MdAdd } from "react-icons/md";

  
  export type MenuDrawer = {
    open?: boolean;
    setSatellitesDrawerOpen: Function;
    setMenuDrawerOpen: Function;
    setDateDrawerOpen: Function;
  };
  
  
  export const MenuDrawer = ({ open, setSatellitesDrawerOpen, setMenuDrawerOpen,setDateDrawerOpen }: MenuDrawer) => {
    return (
      <Drawer open={open}>
        <div className="flex flex-col justify-center gap-8 py-4 pb-32 ">
      <Button className="mx-auto w-3/5" icon={<MdAdd />} onClick={() => {
            setSatellitesDrawerOpen(true) 
            setMenuDrawerOpen(false)
        }
        }>
            Satelites
          </Button>
          <Button className="mx-auto w-3/5" icon={<ManageHistoryIcon className="h-5 w-5 fill-current" />} onClick={() => {
            setDateDrawerOpen(true) 
            setMenuDrawerOpen(false)
        }
        }>
            Set Date
          </Button>
          </div>
      </Drawer>
    );
  };
  