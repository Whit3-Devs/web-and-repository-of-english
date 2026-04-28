import type { HTMLAttributes, ReactNode } from "react";
import { joinClasses } from "./styles";

type CardPadding = "sm" | "md" | "lg";
type CardVariant = "default" | "muted" | "highlight";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
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

export function Card({
  children,
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
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
