import type { ReactNode } from "react";

export type SemanticCalloutVariant =
  | "success"
  | "danger"
  | "info"
  | "warning"
  | "neutral"
  | "accent";

type SemanticCalloutProps = {
  variant: SemanticCalloutVariant;
  title?: string;
  children: ReactNode;
  className?: string;
};

const semanticCalloutStyles: Record<
  SemanticCalloutVariant,
  {
    container: string;
    title: string;
    body: string;
  }
> = {
  success: {
    container:
      "border border-emerald-200 bg-emerald-50 dark:border-emerald-500/30 dark:bg-emerald-950/20",
    title: "text-emerald-700 dark:text-emerald-200",
    body: "text-emerald-950 dark:text-emerald-50"
  },
  danger: {
    container:
      "border border-rose-200 bg-rose-50 dark:border-rose-500/30 dark:bg-rose-950/20",
    title: "text-rose-700 dark:text-rose-200",
    body: "text-rose-950 dark:text-rose-50"
  },
  info: {
    container:
      "border border-blue-200 bg-blue-50 dark:border-blue-500/30 dark:bg-blue-950/25",
    title: "text-blue-700 dark:text-sky-200",
    body: "text-blue-950 dark:text-sky-50"
  },
  warning: {
    container:
      "border border-amber-200 bg-amber-50 dark:border-amber-500/30 dark:bg-amber-950/25",
    title: "text-amber-700 dark:text-amber-200",
    body: "text-amber-950 dark:text-amber-50"
  },
  neutral: {
    container:
      "border border-slate-200 bg-slate-50 dark:border-slate-700/80 dark:bg-slate-800/80",
    title: "text-slate-500 dark:text-slate-300",
    body: "text-slate-700 dark:text-slate-100"
  },
  accent: {
    container:
      "border border-violet-200 bg-violet-50 dark:border-violet-500/30 dark:bg-violet-950/25",
    title: "text-violet-700 dark:text-violet-200",
    body: "text-violet-950 dark:text-violet-50"
  }
};

export function SemanticCallout({
  variant,
  title,
  children,
  className = ""
}: SemanticCalloutProps) {
  const styles = semanticCalloutStyles[variant];

  return (
    <div className={`rounded-2xl p-4 ${styles.container} ${className}`.trim()}>
      {title ? (
        <p className={`text-sm font-semibold uppercase tracking-wide ${styles.title}`}>
          {title}
        </p>
      ) : null}
      <div className={`${title ? "mt-2" : ""} ${styles.body}`.trim()}>
        {children}
      </div>
    </div>
  );
}
