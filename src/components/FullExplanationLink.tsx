import { Link } from "react-router-dom";

type FullExplanationLinkProps = {
  to: string;
  available: boolean;
};

export function FullExplanationLink({ to, available }: FullExplanationLinkProps) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 px-4 py-2 text-sm font-bold text-blue-700 dark:text-blue-300 transition hover:border-blue-300 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/60 dark:bg-blue-900/60"
    >
      Full explanation
      {!available ? (
        <span className="rounded-full bg-white dark:bg-slate-900 px-2 py-0.5 text-xs font-semibold text-slate-500 dark:text-slate-400 dark:text-slate-500">
          Coming soon
        </span>
      ) : null}
    </Link>
  );
}
