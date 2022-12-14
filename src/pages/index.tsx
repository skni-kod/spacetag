import { useState } from "react";
import { MdClose, MdFormatListBulleted } from "react-icons/md";

import dynamic from "next/dynamic";
import Head from "next/head";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { clsx } from "clsx";

import { Button } from "@/components/button";
import { ManageHistoryIcon } from "@/components/icons/manage-history";
import { Navbar } from "@/components/navbar";

const DateDrawer = dynamic(
  () => import("@/components/date-drawer").then(({ DateDrawer }) => DateDrawer),
  {
    ssr: false,
  }
);

const Progress = dynamic(
  () => import("@/components/progress").then(({ Progress }) => Progress),
  {
    ssr: false,
  }
);

const SatellitesDrawer = dynamic(
  () =>
    import("@/components/satellites-drawer").then(
      ({ SatellitesDrawer }) => SatellitesDrawer
    ),
  {
    ssr: false,
  }
);

const Scene = dynamic(
  () => import("@/components/scene").then(({ Scene }) => Scene),
  {
    ssr: true,
  }
);

const Space = dynamic(
  () => import("@/components/space").then(({ Space }) => Space),
  {
    ssr: false,
  }
);

const Home = () => {
  const [mainRef] = useAutoAnimate<HTMLElement>();

  const [dateDrawerOpen, setDateDrawerOpen] = useState(false);
  const [satellitesDrawerOpen, setSatellitesDrawerOpen] = useState(false);

  return (
    <>
      <Head>
        <meta content="Track orbital elements in 3D." name="description" />
        <title>SpaceTag</title>
      </Head>
      <Navbar>
        <h1 className="flex select-none items-center text-2xl font-semibold">
          <svg
            className="h-6 fill-current"
            viewBox="0 0 138.94 26.458"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.229 0A13.229 13.229 0 0 0 0 13.229a13.229 13.229 0 0 0 13.229 13.229 13.229 13.229 0 0 0 1.323-.075A13.229 13.229 0 0 1 2.646 13.23 13.229 13.229 0 0 1 14.59.07 13.229 13.229 0 0 0 13.229 0zM17.237 6.615a2.646 2.646 0 0 0-2.646 2.645v2.646a2.646 2.646 0 0 0 2.646 2.646h7.938v2.646h-7.938a2.646 2.646 0 0 0-2.646 2.646h10.583a2.646 2.646 0 0 0 2.646-2.646v-2.646a2.646 2.646 0 0 0-2.646-2.646h-7.937V9.26h7.937a2.646 2.646 0 0 0 2.646-2.645zM30.466 6.615a2.646 2.646 0 0 0 2.646 2.645h7.937v2.646h-7.937a2.646 2.646 0 0 0-2.646 2.646v5.292h2.646v-5.292h7.937a2.646 2.646 0 0 0 2.646-2.646V9.26a2.646 2.646 0 0 0-2.646-2.645zM52.356 6.615l-7.638 13.229h3.055l4.583-7.938 4.583 7.938h3.055zM64.862 6.615a2.646 2.646 0 0 0-2.646 2.645v7.938a2.646 2.646 0 0 0 2.646 2.646h10.583a2.646 2.646 0 0 0-2.646-2.646h-7.937V9.26h7.937a2.646 2.646 0 0 0 2.646-2.645zM78.091 6.615v13.229H91.32a2.646 2.646 0 0 0-2.646-2.646h-7.937v-2.646h7.937v-2.646h-7.937V9.26h7.937a2.646 2.646 0 0 0 2.646-2.645zM93.966 6.615V9.26h5.292v10.583h2.646V9.26h5.291V6.615zM115.86 6.615l-7.638 13.229h3.055l4.583-7.938 4.583 7.938h3.055zM128.36 6.615a2.646 2.646 0 0 0-2.646 2.645v7.938a2.646 2.646 0 0 0 2.646 2.646h7.938a2.646 2.646 0 0 0 2.645-2.646v-5.292h-7.937v2.646h5.292v2.646h-7.938V9.26h7.938a2.646 2.646 0 0 0 2.645-2.645h-2.645z" />
          </svg>
        </h1>
        {!dateDrawerOpen && !satellitesDrawerOpen && (
          <Button
            className="ml-auto"
            icon={<ManageHistoryIcon className="h-5 w-5 fill-current" />}
            onClick={() => setDateDrawerOpen(true)}
            variant="secondary"
          >
            Set a date
          </Button>
        )}
        {!dateDrawerOpen && !satellitesDrawerOpen && (
          <Button
            icon={<MdFormatListBulleted className="h-5 w-5" />}
            onClick={() => {
              setSatellitesDrawerOpen(true);
            }}
            variant="secondary"
          >
            Manage satellites
          </Button>
        )}
        {(dateDrawerOpen || satellitesDrawerOpen) && (
          <Button
            className={clsx(
              (dateDrawerOpen || satellitesDrawerOpen) && "ml-auto"
            )}
            icon={<MdClose className="h-5 w-5" />}
            onClick={() => {
              setDateDrawerOpen(false);
              setSatellitesDrawerOpen(false);
            }}
            variant="secondary"
          >
            Close
          </Button>
        )}
      </Navbar>
      <main className="relative h-screen overflow-y-hidden" ref={mainRef}>
        <Scene
          camera={{
            far: 10000,
            near: 0.0001,
            position: [0, 0, 10],
          }}
        >
          <Space />
        </Scene>
        <Progress />
      </main>
      <DateDrawer open={dateDrawerOpen} />
      <SatellitesDrawer open={satellitesDrawerOpen} />
    </>
  );
};

export default Home;
