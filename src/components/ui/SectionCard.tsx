import type { HTMLAttributes, ReactNode } from "react";
import { joinClasses } from "./styles";

type SectionCardVariant = "default" | "primary" | "warning" | "success" | "danger" | "info";

type SectionCardProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  description?: string;
  children?: ReactNode;
  variant?: SectionCardVariant;
};

const variantClasses: Record<
  SectionCardVariant,
  { container: string; title: string; body: string }
> = {
  default: {
    container: "bg-slate-50 dark:bg-slate-800",
    title: "text-slate-950 dark:text-slate-50",
    body: "text-slate-600 dark:text-slate-400"
  },
  primary: {
    container: "bg-blue-50 dark:bg-blue-950/40",
    title: "text-blue-950 dark:text-blue-100",
    body: "text-blue-900 dark:text-blue-200"
  },
  warning: {
    container: "bg-amber-50 dark:bg-amber-950/40",
    title: "text-amber-950 dark:text-amber-100",
    body: "text-amber-900 dark:text-amber-100"
  },
  success: {
    container: "bg-emerald-50 dark:bg-emerald-950/40",
    title: "text-emerald-950 dark:text-emerald-100",
    body: "text-emerald-900 dark:text-emerald-100"
  },
  danger: {
    container: "bg-rose-50 dark:bg-rose-950/40",
    title: "text-rose-950 dark:text-rose-100",
    body: "text-rose-900 dark:text-rose-100"
  },
  info: {
    container: "bg-indigo-50 dark:bg-indigo-950/40",
    title: "text-indigo-950 dark:text-indigo-100",
    body: "text-indigo-900 dark:text-indigo-100"
  }
};

export function SectionCard({
  title,
  description,
  children,
  variant = "default",
  className,
  ...props
}: SectionCardProps) {
  const styles = variantClasses[variant];

  return (
    <section
      className={joinClasses("rounded-3xl p-6", styles.container, className)}
      {...props}
    >
      <h3 className={joinClasses("text-xl font-black", styles.title)}>{title}</h3>
      {description ? (
        <p className={joinClasses("mt-3", styles.body)}>{description}</p>
      ) : null}
      {children ? (
        <div className={joinClasses("mt-4", styles.body)}>{children}</div>
      ) : null}
    </section>
  );
}
