import { type ReactNode, useId } from "react";
import { joinClasses } from "../ui/styles";

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={joinClasses(
        "shrink-0 transition-transform duration-200 ease-out motion-reduce:transition-none",
        isOpen ? "rotate-90" : "rotate-0"
      )}
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

type SidebarGroupProps = {
  id: string;
  label: string;
  badgeCount: number;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
};

export function SidebarGroup({ id, label, badgeCount, isOpen, onToggle, children }: SidebarGroupProps) {
  const instanceId = useId();
  const panelId = `sidebar-group-panel--`;
  const buttonId = `sidebar-group-button--`;

  return (
    <div>
      <button
        type="button"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={isOpen ? panelId : undefined}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-2 rounded-[10px] px-3 py-2 text-left text-sm font-bold text-slate-700 transition duration-200 ease-out hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none dark:text-slate-200 dark:hover:bg-slate-800 dark:focus-visible:ring-blue-950"
      >
        <span className="flex min-w-0 items-center gap-2">
          <ChevronIcon isOpen={isOpen} />
          <span className="truncate">{label}</span>
        </span>
        <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {badgeCount}
        </span>
      </button>

      {isOpen ? (
        <div id={panelId} role="group" aria-labelledby={buttonId} className="mt-1 space-y-1 pb-2">
          {children}
        </div>
      ) : null}
    </div>
  );
}
