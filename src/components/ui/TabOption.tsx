import { joinClasses } from "./styles";

type TabOptionProps = {
  active: boolean;
  label: string;
  description: string;
  id: string;
  panelId: string;
  onClick: () => void;
};

export function TabOption({
  active,
  label,
  description,
  id,
  panelId,
  onClick
}: TabOptionProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      aria-controls={panelId}
      id={id}
      onClick={onClick}
      className={joinClasses(
        "rounded-2xl border px-4 py-4 text-left shadow-sm transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none dark:focus-visible:ring-blue-950",
        active
          ? "border-blue-500 bg-blue-50 text-blue-950 shadow-md dark:bg-blue-950/40 dark:text-blue-100"
          : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-slate-50 hover:text-slate-950 hover:shadow-md dark:border-slate-600 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-800 dark:hover:bg-slate-800 dark:hover:text-slate-100"
      )}
    >
      <span className="block text-sm font-black uppercase tracking-[0.2em]">
        {label}
      </span>
      <span className="mt-2 block text-sm">{description}</span>
    </button>
  );
}
