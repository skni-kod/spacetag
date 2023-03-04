import { type ComponentProps, Fragment, type HTMLAttributes } from "react";

import { Menu as HeadlessUiMenu, Transition } from "@headlessui/react";
import { clsx } from "clsx";

export type MenuProps = HTMLAttributes<HTMLDivElement> & {
  button: ComponentProps<typeof HeadlessUiMenu.Button>["children"];
};

export const Menu = ({ button, children, className, ...props }: MenuProps) => (
  <div className={clsx("flex", className)} {...props}>
    <HeadlessUiMenu as="div" className="relative">
      <HeadlessUiMenu.Button as={Fragment}>{button}</HeadlessUiMenu.Button>
      <Transition
        as={Fragment}
        enter="transition duration-150 ease-in-out"
        enterFrom="scale-95 opacity-0"
        enterTo="scale-100 opacity-100"
        leave="transition duration-150 ease-in-out"
        leaveFrom="scale-100 opacity-100"
        leaveTo="scale-95 opacity-0"
      >
        <HeadlessUiMenu.Items className="absolute left-1/2 mt-2 min-w-[12rem] max-w-xs origin-top -translate-x-1/2 rounded-md bg-white/10 p-1 text-sm text-white backdrop-blur-xl focus:outline-none">
          {children}
        </HeadlessUiMenu.Items>
      </Transition>
    </HeadlessUiMenu>
  </div>
);
