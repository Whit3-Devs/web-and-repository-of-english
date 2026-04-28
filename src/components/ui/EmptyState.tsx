import type { ReactNode } from "react";

type EmptyStateProps = {
  eyebrow?: string;
  title: string;
  description: string;
  action?: ReactNode;
};

export function EmptyState({
  eyebrow,
  title,
  description,
  action
}: EmptyStateProps) {
  return (
    <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center dark:border-slate-600 dark:bg-slate-900">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl font-black text-slate-950 dark:text-slate-50">
        {title}
      </h2>
      <p className="mt-3 text-slate-600 dark:text-slate-400">{description}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </section>
  );
}
