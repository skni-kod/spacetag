import { forwardRef, type TextareaHTMLAttributes } from "react";

import { clsx } from "clsx";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={clsx(
        "w-full resize-none rounded-md border-0 bg-white/10 p-2 text-white/50 outline-none transition focus-within:text-white focus-within:ring focus-within:ring-sky-500",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
