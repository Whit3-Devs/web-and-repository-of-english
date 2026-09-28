import { joinClasses } from "./ui/styles";
import { useThemeStore } from "../store/useThemeStore";

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

const segmentBaseClasses =
  "inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none dark:focus-visible:ring-blue-950";

const segmentActiveClasses = "bg-white text-slate-950 shadow-sm dark:bg-slate-700 dark:text-slate-50";

const segmentInactiveClasses =
  "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200";

export function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <div
      role="group"
      aria-label="Theme"
      className="inline-flex w-full items-center gap-1 rounded-full border border-slate-200 bg-slate-100 p-1 dark:border-slate-700 dark:bg-slate-900"
    >
      <button
        type="button"
        aria-pressed={theme === "light"}
        onClick={() => setTheme("light")}
        className={joinClasses(
          segmentBaseClasses,
          theme === "light" ? segmentActiveClasses : segmentInactiveClasses
        )}
      >
        <SunIcon />
        Light
      </button>
      <button
        type="button"
        aria-pressed={theme === "dark"}
        onClick={() => setTheme("dark")}
        className={joinClasses(
          segmentBaseClasses,
          theme === "dark" ? segmentActiveClasses : segmentInactiveClasses
        )}
      >
        <MoonIcon />
        Dark
      </button>
    </div>
  );
}
