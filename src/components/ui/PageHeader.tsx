import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  actions?: ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  actions
}: PageHeaderProps) {
  return (
    <header className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950 dark:text-slate-50 md:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            {description}
          </p>
        ) : null}
      </div>

      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </header>
  );
}
