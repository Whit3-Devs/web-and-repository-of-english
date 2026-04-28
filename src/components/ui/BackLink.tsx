import { Link, type LinkProps } from "react-router-dom";
import { joinClasses } from "./styles";

type BackLinkProps = LinkProps & {
  label: string;
};

export function BackLink({ label, className, ...props }: BackLinkProps) {
  return (
    <Link
      className={joinClasses(
        "inline-flex text-sm font-bold text-blue-700 underline-offset-4 transition duration-200 ease-out hover:-translate-x-0.5 hover:text-blue-900 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none motion-reduce:hover:translate-x-0 dark:text-blue-300 dark:hover:text-blue-100 dark:focus-visible:ring-blue-950",
        className
      )}
      {...props}
    >
      ← {label}
    </Link>
  );
}
