import type { MouseEventHandler, ReactNode } from "react";
import type { IconType } from "react-icons";

import { Menu } from "@headlessui/react";
import { clsx } from "clsx";

import { Link } from "@/components/link";

export type MenuItemProps = {
  children?: ReactNode;
  disabled?: boolean;
  icon?: IconType;
} & (
  | {
      href: string;
    }
  | {
      onClick: MouseEventHandler<HTMLButtonElement>;
    }
);

export const MenuItem = ({
  children,
  disabled,
  icon: Icon,
  ...props
}: MenuItemProps) => (
  <Menu.Item disabled={disabled}>
    {({ active }) =>
      "href" in props ? (
        <Link
          className={clsx(
            "flex w-full items-center gap-2 rounded-md p-2 transition",
            active && "bg-sky-600"
          )}
          href={props.href}
        >
          {Icon && (
            <Icon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
          )}
          <span className="truncate">{children}</span>
        </Link>
      ) : (
        <button
          className={clsx(
            "flex w-full items-center gap-2 rounded-md p-2 transition",
            active && "bg-sky-600"
          )}
          onClick={props.onClick}
        >
          {Icon && (
            <Icon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
          )}
          <span className="truncate">{children}</span>
        </button>
      )
    }
  </Menu.Item>
);
