import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react";

import { clsx } from "clsx";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  variant?: "danger" | "primary" | "secondary";
};

export const buttonStyles = ({
  className,
  variant,
}: {
  className?: string;
  variant?: ButtonProps["variant"];
}) =>
  clsx(
    "pointer flex items-center gap-2 rounded-md text-base leading-10 transition disabled:cursor-not-allowed disabled:bg-neutral-600",
    variant === "danger" && "bg-red-600 px-4 font-semibold hover:bg-red-700",
    variant === "primary" && "bg-sky-600 px-4 font-semibold hover:bg-sky-700",
    variant === "secondary" && "hover:text-neutral-400",
    className
  );

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, icon, variant = "primary", ...props }, ref) => (
    <button
      className={buttonStyles({ className, variant })}
      ref={ref}
      {...props}
    >
      {icon}
      {children}
    </button>
  )
);
