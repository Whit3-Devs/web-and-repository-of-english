import type { HTMLAttributes, ReactNode } from "react";
import { joinClasses } from "./styles";

type CardPadding = "sm" | "md" | "lg";
type CardVariant = "default" | "muted" | "highlight";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  interactive?: boolean;
  padding?: CardPadding;
  variant?: CardVariant;
};

const paddingClasses: Record<CardPadding, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8"
};

const variantClasses: Record<CardVariant, string> = {
  default:
    "border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900",
  muted:
    "border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800",
  highlight: "border border-slate-950 bg-slate-950 text-white shadow-xl"
};

const interactiveClasses =
  "transition duration-200 ease-out hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md focus-within:ring-2 focus-within:ring-blue-500/30 dark:hover:border-blue-700 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export function Card({
  children,
  interactive = false,
  padding = "md",
  variant = "default",
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={joinClasses(
        "rounded-3xl",
        paddingClasses[padding],
        variantClasses[variant],
        interactive ? interactiveClasses : undefined,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
