import { NavLink } from "react-router-dom";
import type { CefrLevel } from "../../shared/types/content";
import { getCefrLevelChipClasses } from "../../shared/utils/cefrLevel";
import { joinClasses } from "../ui/styles";

type NavItemLinkProps = {
  to: string;
  children: string;
  level?: CefrLevel;
  onNavigate?: () => void;
  end?: boolean;
};

export function NavItemLink({ to, children, level, onNavigate, end }: NavItemLinkProps) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) =>
        joinClasses(
          "flex items-center justify-between gap-2 rounded-[10px] py-2 pl-[34px] pr-3 text-sm transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none dark:focus-visible:ring-blue-950",
          isActive
            ? "bg-blue-50 font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-100"
            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        )
      }
    >
      <span className="truncate">{children}</span>
      {level ? (
        <span
          aria-hidden="true"
          className={joinClasses(
            "shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-bold",
            getCefrLevelChipClasses(level)
          )}
        >
          {level}
        </span>
      ) : null}
    </NavLink>
  );
}
