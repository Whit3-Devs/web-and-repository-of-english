import type { HTMLAttributes, ReactNode } from "react";
import { joinClasses } from "./styles";

type BadgeVariant =
  | "neutral"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

type BadgeSize = "sm" | "md";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
};

const variantClasses: Record<BadgeVariant, string> = {
  neutral:
    "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
  primary:
    "bg-blue-50 text-blue-700 ring-1 ring-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:ring-blue-800",
  success:
    "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:ring-emerald-800",
  warning:
    "bg-amber-50 text-amber-700 ring-1 ring-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:ring-amber-800",
  danger:
    "bg-rose-50 text-rose-700 ring-1 ring-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:ring-rose-800",
  info:
    "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:ring-indigo-800"
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-3 py-1 text-xs",
  md: "px-4 py-2 text-sm"
};

export function Badge({
  children,
  variant = "neutral",
  size = "sm",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={joinClasses(
        "inline-flex w-fit items-center rounded-full font-bold",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
