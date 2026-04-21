import { Link } from "react-router-dom";

type FullExplanationLinkProps = {
  to: string;
  available: boolean;
};

export function FullExplanationLink({ to, available }: FullExplanationLinkProps) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
    >
      Full explanation
      {!available ? (
        <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-slate-500">
          Coming soon
        </span>
      ) : null}
    </Link>
  );
}
