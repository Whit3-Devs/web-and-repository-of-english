import { NavLink } from "react-router-dom";
import { joinClasses } from "../ui/styles";

type NavItemLinkProps = {
  to: string;
  children: string;
  onNavigate?: () => void;
  end?: boolean;
};

export function NavItemLink({ to, children, onNavigate, end }: NavItemLinkProps) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) =>
        joinClasses(
          "block truncate rounded-[10px] py-2 pl-[34px] pr-3 text-sm transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none dark:focus-visible:ring-blue-950",
          isActive
            ? "bg-blue-50 font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-100"
            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        )
      }
    >
      {children}
    </NavLink>
  );
}
