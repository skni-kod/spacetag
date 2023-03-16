import { FaGithub } from "react-icons/fa";
import {
  MdCalendarToday,
  MdDeleteForever,
  MdEdit,
  MdExpandMore,
  MdManageSearch,
  MdMoreVert,
  MdMultipleStop,
  MdRestartAlt,
  MdSatelliteAlt,
  MdSettingsInputAntenna,
  MdTune,
} from "react-icons/md";
import { Provider } from "react-wrap-balancer";

import Head from "next/head";

import { Balancer } from "@/components/balancer";
import { ButtonLink } from "@/components/button-link";
import { Image } from "@/components/image";
import { Link } from "@/components/link";

import { IMAGES } from "@/constants/images";

const Homepage = () => (
  <>
    <Head>
      <title>SpaceTag</title>
    </Head>
    <div className="absolute inset-0 overflow-hidden" role="presentation">
      <Image alt="" className="object-cover" fill priority src={IMAGES.stars} />
      <div className="absolute inset-0 animate-twinkle bg-transparent bg-twinkle bg-repeat motion-reduce:hidden" />
      <div className="absolute left-1/2 top-2/3 h-[1000vh] w-[1000vh] -translate-x-1/2 bg-horizon" />
    </div>
    <main>
      <section className="relative h-screen">
        <div className="flex h-2/3 flex-col justify-center gap-8 h-sm:gap-16">
          <h1 className="mx-auto">
            <span className="sr-only">SpaceTag</span>
            <svg
              className="h-12 bg-black fill-current md:h-sm:h-24"
              viewBox="0 0 138.94 26.458"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.229 0A13.229 13.229 0 0 0 0 13.229a13.229 13.229 0 0 0 13.229 13.229 13.229 13.229 0 0 0 1.323-.075A13.229 13.229 0 0 1 2.646 13.23 13.229 13.229 0 0 1 14.59.07 13.229 13.229 0 0 0 13.229 0zM17.237 6.615a2.646 2.646 0 0 0-2.646 2.645v2.646a2.646 2.646 0 0 0 2.646 2.646h7.938v2.646h-7.938a2.646 2.646 0 0 0-2.646 2.646h10.583a2.646 2.646 0 0 0 2.646-2.646v-2.646a2.646 2.646 0 0 0-2.646-2.646h-7.937V9.26h7.937a2.646 2.646 0 0 0 2.646-2.645zM30.466 6.615a2.646 2.646 0 0 0 2.646 2.645h7.937v2.646h-7.937a2.646 2.646 0 0 0-2.646 2.646v5.292h2.646v-5.292h7.937a2.646 2.646 0 0 0 2.646-2.646V9.26a2.646 2.646 0 0 0-2.646-2.645zM52.356 6.615l-7.638 13.229h3.055l4.583-7.938 4.583 7.938h3.055zM64.862 6.615a2.646 2.646 0 0 0-2.646 2.645v7.938a2.646 2.646 0 0 0 2.646 2.646h10.583a2.646 2.646 0 0 0-2.646-2.646h-7.937V9.26h7.937a2.646 2.646 0 0 0 2.646-2.645zM78.091 6.615v13.229H91.32a2.646 2.646 0 0 0-2.646-2.646h-7.937v-2.646h7.937v-2.646h-7.937V9.26h7.937a2.646 2.646 0 0 0 2.646-2.645zM93.966 6.615V9.26h5.292v10.583h2.646V9.26h5.291V6.615zM115.86 6.615l-7.638 13.229h3.055l4.583-7.938 4.583 7.938h3.055zM128.36 6.615a2.646 2.646 0 0 0-2.646 2.645v7.938a2.646 2.646 0 0 0 2.646 2.646h7.938a2.646 2.646 0 0 0 2.645-2.646v-5.292h-7.937v2.646h5.292v2.646h-7.938V9.26h7.938a2.646 2.646 0 0 0 2.645-2.645h-2.645z" />
            </svg>
          </h1>
          <div className="mx-auto flex items-center gap-6 h-sm:flex-col">
            <ButtonLink href="/app">Launch SpaceTag</ButtonLink>
            <ButtonLink
              className="underline"
              href="#features"
              variant="secondary"
            >
              Learn more
            </ButtonLink>
          </div>
        </div>
        <div className="absolute bottom-8 flex w-full justify-center h-sm:bottom-16">
          <MdExpandMore className="h-16 w-16 animate-scroll text-2xl" />
        </div>
      </section>
      <section className="my-16" id="features">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col px-4 sm:px-8">
          <Provider>
            <div aria-hidden className="flex flex-col items-center gap-1">
              <MdSatelliteAlt className="h-6 w-6 rotate-45 text-sky-500" />
              <div className="h-24 w-px bg-gradient-to-b from-sky-500 to-transparent" />
            </div>
            <h2 className="text-center text-6xl font-bold">
              Satellite tracker you&apos;ll enjoy using
            </h2>
            <p className="mx-auto mt-6 max-w-prose text-center text-xl text-neutral-400">
              <Balancer>
                SpaceTag provides just the features that satellite tracker
                needs. Free yourself from time-consuming, unnecessary processes
                that slow you down.
              </Balancer>
            </p>
            <div className="grid grid-cols-1 justify-items-center lg:grid-cols-timeline">
              <div
                aria-hidden
                className="flex w-full max-w-md select-none flex-col py-16 lg:ml-auto"
              >
                <div className="pb-2">Satellite</div>
                <div className="relative flex rounded-md bg-white/10 px-4 py-2 ring ring-sky-500">
                  <div>ISS</div>
                  <div className="top-0 bottom-0 w-px animate-caret self-stretch bg-white" />
                  <MdExpandMore className="absolute right-2 h-5 w-5 rotate-180 text-neutral-500 transition" />
                </div>
                <ul className="mt-2 overflow-x-hidden rounded-md bg-white/10 py-1">
                  <li className="px-4 py-2 transition hover:bg-sky-600">
                    AISSAT 1
                  </li>
                  <li className="px-4 py-2 transition hover:bg-sky-600">
                    AISSAT 2
                  </li>
                  <li className="px-4 py-2 transition hover:bg-sky-600">
                    ICS-EF (ISS DEB)
                  </li>
                  <li className="px-4 py-2 transition hover:bg-sky-600">
                    ISS (NAUKA)
                  </li>
                  <li className="px-4 py-2 transition hover:bg-sky-600">
                    ISS (ZARYA)
                  </li>
                  <li className="px-4 py-2 transition hover:bg-sky-600">
                    ISS DEB (SPX-26 IPA FSE)
                  </li>
                  <li className="px-4 py-2 transition hover:bg-sky-600">
                    SWISSCUBE
                  </li>
                </ul>
              </div>
              <div className="hidden h-full flex-col items-center lg:flex">
                <div className="w-px flex-grow bg-gradient-to-b from-transparent to-neutral-700" />
                <div className="my-1 h-[11px] w-[11px] rounded-full border-2 border-neutral-700" />
                <div className="w-px flex-grow bg-neutral-700" />
              </div>
              <div className="flex flex-col items-center gap-4 lg:items-start">
                <div className="hidden h-[calc(50%-2.25rem)] lg:block" />
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-neutral-700 text-neutral-400">
                  <MdManageSearch className="ml-1 h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">
                  Extensive list of satellites
                </h3>
                <p className="max-w-prose text-center text-lg text-neutral-400 lg:text-left">
                  <Balancer>
                    Search and select from over 8,000 entries, through the
                    courtesy of{" "}
                    <Link
                      className="text-sky-500 outline-none transition hover:text-white focus-visible:text-white"
                      href="https://celestrak.org/"
                      target="_blank"
                    >
                      CelesTrak
                    </Link>
                    , or provide your own{" "}
                    <Link
                      className="text-sky-500 outline-none transition hover:text-white focus-visible:text-white"
                      href="https://en.wikipedia.org/wiki/Two-line_element_set"
                      target="_blank"
                    >
                      TLE
                    </Link>{" "}
                    data.
                  </Balancer>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 justify-items-center lg:grid-cols-timeline">
              <div
                aria-hidden
                className="flex w-full max-w-md select-none flex-col py-16 lg:ml-auto"
              >
                <ul className="divide-y divide-white/10">
                  <li className="flex items-center gap-4 p-4">
                    <div className="h-4 w-4 rounded-full bg-red-500" />
                    <div>ISS (ZARYA)</div>
                    <div className="relative ml-auto">
                      <MdMoreVert className="h-5 w-5" />
                      <ul className="absolute right-0 mt-2 min-w-[12rem] max-w-xs rounded-md bg-neutral-900/50 p-1 text-sm text-white backdrop-blur-xl">
                        <li className="flex w-full items-center gap-2 rounded-md p-2 transition hover:bg-sky-600">
                          <MdSatelliteAlt className="h-5 w-5 flex-shrink-0" />
                          <span className="truncate">Hide satellite model</span>
                        </li>
                        <li className="flex w-full items-center gap-2 rounded-md p-2 transition hover:bg-sky-600">
                          <MdMultipleStop className="h-5 w-5 flex-shrink-0" />
                          <span className="truncate">Hide satellite path</span>
                        </li>
                        <li className="flex w-full items-center gap-2 rounded-md p-2 transition hover:bg-sky-600">
                          <MdEdit className="h-5 w-5 flex-shrink-0" />
                          <span className="truncate">Edit</span>
                        </li>
                        <li className="flex w-full items-center gap-2 rounded-md p-2 transition hover:bg-sky-600">
                          <MdDeleteForever className="h-5 w-5 flex-shrink-0" />
                          <span className="truncate">Remove</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 p-4">
                    <div className="h-4 w-4 rounded-full bg-white" />
                    <div>STARLINK-3301</div>
                    <MdMoreVert className="ml-auto h-5 w-5" />
                  </li>
                  <li className="flex items-center gap-4 p-4">
                    <div className="h-4 w-4 rounded-full bg-sky-500" />
                    <div>SES-1</div>
                    <MdMoreVert className="ml-auto h-5 w-5" />
                  </li>
                </ul>
                <div className="mx-auto mt-4 flex items-center gap-2 rounded-md bg-sky-600 px-4 text-base font-semibold leading-10 transition hover:bg-sky-700">
                  <MdExpandMore className="h-5 w-5" />
                  Add satellite
                </div>
                <div className="mx-auto my-16 w-4 border-b border-dashed border-neutral-700" />
                <div className="mx-auto flex items-center gap-4 rounded-md bg-white/10 py-2 px-4 transition">
                  <div>07/21/2023 11:47 AM</div>
                  <MdCalendarToday className="ml-4 h-4 w-4" />
                  <div className="text-neutral-500">UTC</div>
                </div>
                <div className="mx-auto mt-8 flex items-center gap-2 rounded-md bg-sky-600 px-4 text-base font-semibold leading-10 transition hover:bg-sky-700 ">
                  <MdRestartAlt className="h-5 w-5" />
                  Reset
                </div>
              </div>
              <div className="hidden h-full flex-col items-center lg:flex">
                <div className="w-px flex-grow bg-neutral-700" />
                <div className="my-1 h-[11px] w-[11px] rounded-full border-2 border-neutral-700" />
                <div className="w-px flex-grow bg-gradient-to-b from-neutral-700 to-transparent" />
              </div>
              <div className="flex flex-col items-center gap-4 lg:items-start">
                <div className="hidden h-[calc(50%-2.25rem)] lg:block" />
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-neutral-700 text-neutral-400">
                  <MdTune className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">
                  User-friendly control center
                </h3>
                <p className="max-w-prose text-center text-lg text-neutral-400 lg:text-left">
                  <Balancer>
                    Manage your tracked satellites with ease through the variety
                    of options. Take control of time to explore both past and
                    future positions of satellites.
                  </Balancer>
                </p>
              </div>
            </div>
          </Provider>
        </div>
      </section>
      <section className="my-16">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col px-4 sm:px-8">
          <svg
            className="mx-auto mt-8 h-32 w-32 fill-current"
            viewBox="0 0 27.82 26.457"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.229 0A13.229 13.229 0 0 0 0 13.229a13.229 13.229 0 0 0 13.229 13.229 13.229 13.229 0 0 0 1.324-.074A13.229 13.229 0 0 1 2.647 13.232 13.229 13.229 0 0 1 14.59.072a13.229 13.229 0 0 0-1.361-.07zm4.008 6.615a2.646 2.646 0 0 0-2.645 2.645v2.646a2.646 2.646 0 0 0 2.645 2.647h7.94v2.644h-7.94a2.646 2.646 0 0 0-2.645 2.647h10.582a2.646 2.646 0 0 0 2.647-2.647v-2.644a2.646 2.646 0 0 0-2.647-2.647h-7.937V9.26h7.937a2.646 2.646 0 0 0 2.647-2.645z" />
          </svg>
          <h2 className="mt-8 text-center text-6xl font-bold">
            Begin your journey
          </h2>
          <ButtonLink className="mx-auto mt-16" href="/app">
            Launch SpaceTag
          </ButtonLink>
        </div>
      </section>
    </main>
    <div aria-hidden className="flex flex-col items-center gap-1">
      <div className="to h-24 w-px bg-gradient-to-b from-transparent to-sky-500" />
      <MdSettingsInputAntenna className="h-6 w-6 text-sky-500" />
    </div>
    <footer className="border-t border-neutral-700">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-4 py-6 sm:px-8">
        <div className="flex">
          <Link className="transition hover:text-sky-400" href="/">
            <span className="sr-only">SpaceTag</span>
            <svg
              className="h-6 fill-current"
              viewBox="0 0 138.94 26.458"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.229 0A13.229 13.229 0 0 0 0 13.229a13.229 13.229 0 0 0 13.229 13.229 13.229 13.229 0 0 0 1.323-.075A13.229 13.229 0 0 1 2.646 13.23 13.229 13.229 0 0 1 14.59.07 13.229 13.229 0 0 0 13.229 0zM17.237 6.615a2.646 2.646 0 0 0-2.646 2.645v2.646a2.646 2.646 0 0 0 2.646 2.646h7.938v2.646h-7.938a2.646 2.646 0 0 0-2.646 2.646h10.583a2.646 2.646 0 0 0 2.646-2.646v-2.646a2.646 2.646 0 0 0-2.646-2.646h-7.937V9.26h7.937a2.646 2.646 0 0 0 2.646-2.645zM30.466 6.615a2.646 2.646 0 0 0 2.646 2.645h7.937v2.646h-7.937a2.646 2.646 0 0 0-2.646 2.646v5.292h2.646v-5.292h7.937a2.646 2.646 0 0 0 2.646-2.646V9.26a2.646 2.646 0 0 0-2.646-2.645zM52.356 6.615l-7.638 13.229h3.055l4.583-7.938 4.583 7.938h3.055zM64.862 6.615a2.646 2.646 0 0 0-2.646 2.645v7.938a2.646 2.646 0 0 0 2.646 2.646h10.583a2.646 2.646 0 0 0-2.646-2.646h-7.937V9.26h7.937a2.646 2.646 0 0 0 2.646-2.645zM78.091 6.615v13.229H91.32a2.646 2.646 0 0 0-2.646-2.646h-7.937v-2.646h7.937v-2.646h-7.937V9.26h7.937a2.646 2.646 0 0 0 2.646-2.645zM93.966 6.615V9.26h5.292v10.583h2.646V9.26h5.291V6.615zM115.86 6.615l-7.638 13.229h3.055l4.583-7.938 4.583 7.938h3.055zM128.36 6.615a2.646 2.646 0 0 0-2.646 2.645v7.938a2.646 2.646 0 0 0 2.646 2.646h7.938a2.646 2.646 0 0 0 2.645-2.646v-5.292h-7.937v2.646h5.292v2.646h-7.938V9.26h7.938a2.646 2.646 0 0 0 2.645-2.645h-2.645z" />
            </svg>
          </Link>
        </div>
        <div className="flex justify-between text-neutral-400">
          <span>
            &copy; 2023{" "}
            <Link
              className="underline transition hover:text-white"
              href="https://kod.prz.edu.pl/"
              target="_blank"
            >
              SKNI KOD
            </Link>
          </span>
          <Link
            className="transition hover:text-white"
            href="https://github.com/skni-kod/spacetag"
            target="_blank"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  </>
);

export default Homepage;
