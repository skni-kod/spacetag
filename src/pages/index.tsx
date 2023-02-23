import Head from "next/head";
import Link from "next/link";

import { Button } from "@/components/button";

function Homepage() {
  return (
    <div className="fixed  h-screen w-screen overflow-hidden bg-stars ">
      <Head>
        <meta content="Track orbital elements in 3D." name="description" />
        <title>SpaceTag</title>
      </Head>

      <div className="grid place-items-center space-y-8 py-24 px-2">
        <h1 className="flex select-none items-center text-2xl font-semibold">
          <svg
            className="h-16 fill-current"
            viewBox="0 0 138.94 26.458"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.229 0A13.229 13.229 0 0 0 0 13.229a13.229 13.229 0 0 0 13.229 13.229 13.229 13.229 0 0 0 1.323-.075A13.229 13.229 0 0 1 2.646 13.23 13.229 13.229 0 0 1 14.59.07 13.229 13.229 0 0 0 13.229 0zM17.237 6.615a2.646 2.646 0 0 0-2.646 2.645v2.646a2.646 2.646 0 0 0 2.646 2.646h7.938v2.646h-7.938a2.646 2.646 0 0 0-2.646 2.646h10.583a2.646 2.646 0 0 0 2.646-2.646v-2.646a2.646 2.646 0 0 0-2.646-2.646h-7.937V9.26h7.937a2.646 2.646 0 0 0 2.646-2.645zM30.466 6.615a2.646 2.646 0 0 0 2.646 2.645h7.937v2.646h-7.937a2.646 2.646 0 0 0-2.646 2.646v5.292h2.646v-5.292h7.937a2.646 2.646 0 0 0 2.646-2.646V9.26a2.646 2.646 0 0 0-2.646-2.645zM52.356 6.615l-7.638 13.229h3.055l4.583-7.938 4.583 7.938h3.055zM64.862 6.615a2.646 2.646 0 0 0-2.646 2.645v7.938a2.646 2.646 0 0 0 2.646 2.646h10.583a2.646 2.646 0 0 0-2.646-2.646h-7.937V9.26h7.937a2.646 2.646 0 0 0 2.646-2.645zM78.091 6.615v13.229H91.32a2.646 2.646 0 0 0-2.646-2.646h-7.937v-2.646h7.937v-2.646h-7.937V9.26h7.937a2.646 2.646 0 0 0 2.646-2.645zM93.966 6.615V9.26h5.292v10.583h2.646V9.26h5.291V6.615zM115.86 6.615l-7.638 13.229h3.055l4.583-7.938 4.583 7.938h3.055zM128.36 6.615a2.646 2.646 0 0 0-2.646 2.645v7.938a2.646 2.646 0 0 0 2.646 2.646h7.938a2.646 2.646 0 0 0 2.645-2.646v-5.292h-7.937v2.646h5.292v2.646h-7.938V9.26h7.938a2.646 2.646 0 0 0 2.645-2.645h-2.645z" />
          </svg>
        </h1>
        <Button className="">
          <Link href="/space"> Launch SpaceTag</Link>
        </Button>
        <Link href="/space">
          <h1 className=" text-xl text-slate-400 underline underline-offset-4">
            {" "}
            Learn More{" "}
          </h1>
        </Link>
      </div>
      <div className="absolute left-1/2 top-2/3 h-[1000vh] w-[1000vh] -translate-x-1/2 bg-[radial-gradient(#000000_70%,#ffffff_70.1%,#0ea5e9_70.3%,#0ea5e900_70.7%)]" />
    </div>
  );
}

export default Homepage;
