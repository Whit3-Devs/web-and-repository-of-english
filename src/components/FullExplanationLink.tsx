import { ActionLink } from "./ui";

type FullExplanationLinkProps = {
  to: string;
  available: boolean;
};

export function FullExplanationLink({ to, available }: FullExplanationLinkProps) {
  return (
    <ActionLink
      to={to}
      variant="soft"
    >
      Full explanation
      {!available ? (
        <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-slate-500 dark:bg-slate-900 dark:text-slate-400">
          Coming soon
        </span>
      ) : null}
    </ActionLink>
  );
}
