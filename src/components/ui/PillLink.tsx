import { Link, type LinkProps } from "react-router-dom";
import { joinClasses } from "./styles";

type PillLinkProps = LinkProps;

export function PillLink({ children, className, ...props }: PillLinkProps) {
  return (
    <Link
      className={joinClasses(
        "inline-flex w-fit items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:bg-blue-950/60 dark:hover:text-blue-200 dark:focus-visible:ring-blue-950",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
