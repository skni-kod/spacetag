import { type ComponentProps, Fragment, type HTMLAttributes } from "react";

import { Menu as HeadlessUiMenu, Transition } from "@headlessui/react";
import { clsx } from "clsx";

export type MenuProps = HTMLAttributes<HTMLDivElement> & {
  align?: "left" | "center" | "right";
  button: ComponentProps<typeof HeadlessUiMenu.Button>["children"];
};

export const Menu = ({
  align = "center",
  button,
  children,
  className,
  ...props
}: MenuProps) => (
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
        <HeadlessUiMenu.Items
          className={clsx(
            "absolute z-1 mt-2 min-w-[12rem] max-w-xs rounded-md bg-black/50 p-1 text-sm text-white backdrop-blur-xl focus:outline-none",
            align === "center" && "left-1/2 origin-top -translate-x-1/2",
            align === "left" && "left-0 origin-top-left",
            align === "right" && "right-0 origin-top-right"
          )}
        >
          {children}
        </HeadlessUiMenu.Items>
      </Transition>
    </HeadlessUiMenu>
  </div>
);
