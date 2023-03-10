import { Fragment, useState } from "react";
import { MdDone, MdExpandMore } from "react-icons/md";

import { Combobox as HeadlessUiCombobox, Transition } from "@headlessui/react";
import { clsx } from "clsx";

export type ComboboxProps<
  Value extends ComboboxValue,
  Nullable extends boolean | undefined
> = {
  nullable?: Nullable;
  onChange?: (value: Nullable extends true ? Value | null : Value) => void;
  placeholder?: string;
  values: [Value, ...Value[]];
} & (Nullable extends true
  ? { defaultValue?: Value }
  : { defaultValue: Value });

export type ComboboxValue = {
  id: number | string;
  text: string;
};

export const Combobox = <
  Value extends ComboboxValue,
  Nullable extends boolean
>({
  defaultValue,
  nullable,
  onChange,
  placeholder,
  values,
}: ComboboxProps<Value, Nullable>) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(
    defaultValue ?? (nullable ? null : values[0])
  );

  const filtered =
    query === ""
      ? values.slice(0, 100)
      : values
          .filter(({ text }) =>
            text
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""))
          )
          .slice(0, 100);

  return (
    <HeadlessUiCombobox
      as="div"
      className="relative flex"
      nullable
      onChange={(value: Nullable extends true ? Value | null : Value) => {
        setSelected(value);
        onChange?.(value);
      }}
      value={selected}
    >
      <HeadlessUiCombobox.Input
        className="w-full rounded-md bg-white/10 px-4 py-2 outline-none transition placeholder:text-neutral-500 focus-visible:ring focus-visible:ring-sky-500"
        displayValue={(value: Nullable extends true ? Value | null : Value) =>
          value?.text ?? ""
        }
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
      />
      <HeadlessUiCombobox.Button className="absolute bottom-0 top-0 right-0 flex items-center pr-2">
        {({ open }) => (
          <MdExpandMore
            aria-hidden="true"
            className={clsx(
              "h-5 w-5 text-neutral-500 transition",
              open && "rotate-180"
            )}
          />
        )}
      </HeadlessUiCombobox.Button>
      <Transition
        afterLeave={() => setQuery("")}
        as={Fragment}
        enter="transition duration-150 ease-in-out"
        enterFrom="scale-95 opacity-0"
        enterTo="scale-100 opacity-100"
        leave="transition duration-150 ease-in-out"
        leaveFrom="scale-100 opacity-100"
        leaveTo="scale-95 opacity-0"
      >
        <HeadlessUiCombobox.Options className="absolute top-full z-1 mt-2 max-h-64 w-full select-none overflow-y-auto overflow-x-hidden rounded-md bg-neutral-800 py-1 text-white">
          {filtered.length === 0 && query !== "" ? (
            <div className="cursor-default px-4 py-2">Nothing found.</div>
          ) : (
            filtered.map((value) => (
              <HeadlessUiCombobox.Option
                className={({ active }) =>
                  clsx(
                    "relative cursor-pointer px-4 py-2 transition",
                    active && "bg-sky-600"
                  )
                }
                key={value.id}
                value={value}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {value.text}
                    </span>
                    {selected && (
                      <MdDone
                        aria-hidden="true"
                        className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2"
                      />
                    )}
                  </>
                )}
              </HeadlessUiCombobox.Option>
            ))
          )}
        </HeadlessUiCombobox.Options>
      </Transition>
    </HeadlessUiCombobox>
  );
};
