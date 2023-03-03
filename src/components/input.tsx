import { forwardRef, type InputHTMLAttributes } from "react";

import { clsx } from "clsx";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  suffix?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, suffix, type, ...props }, ref) => (
    <div
      className={clsx(
        "flex gap-4 rounded bg-white/10 py-2 transition focus-within:ring focus-within:ring-sky-500",
        type === "color" ? "px-2" : "px-4",
        className
      )}
    >
      <input
        className="block w-full cursor-[inherit] bg-transparent outline-none"
        ref={ref}
        type={type}
        {...props}
      />
      {suffix && (
        <span className="flex items-center text-neutral-500">{suffix}</span>
      )}
    </div>
  )
);
