import { Link, type LinkProps } from "react-router-dom";
import { joinClasses } from "./styles";

type ActionLinkVariant = "primary" | "soft" | "text";

type ActionLinkProps = LinkProps & {
  variant?: ActionLinkVariant;
};

const variantClasses: Record<ActionLinkVariant, string> = {
  primary:
    "bg-blue-600 text-white shadow-sm hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus-visible:ring-blue-100 motion-reduce:hover:translate-y-0 dark:focus-visible:ring-blue-950",
  soft:
    "border border-blue-200 bg-blue-50 text-blue-700 shadow-sm hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-100 hover:shadow-md motion-reduce:hover:translate-y-0 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:bg-blue-900/60 dark:hover:text-blue-200 dark:focus-visible:ring-blue-950",
  text:
    "text-blue-700 underline-offset-4 hover:text-blue-900 hover:underline dark:text-blue-300 dark:hover:text-blue-100 dark:focus-visible:ring-blue-950"
};

export function ActionLink({
  children,
  className,
  variant = "soft",
  ...props
}: ActionLinkProps) {
  return (
    <Link
      className={joinClasses(
        "inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 motion-reduce:transition-none",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
