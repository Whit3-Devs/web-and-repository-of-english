import { type ReactNode, useEffect, useId, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ThemeToggle } from "../ThemeToggle";
import { joinClasses } from "../ui/styles";
import { NavItemLink } from "./NavItemLink";
import { SidebarGroup } from "./SidebarGroup";
import {
  buildNavigationModel,
  filterNavigation,
  findActiveGroupId
} from "../../features/navigation/navigationModel";

const githubRepositoryUrl = "https://github.com/Whit3-Devs/web-and-repository-of-english";

function HouseIcon() {
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
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

function SearchIcon() {
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
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function ClearIcon() {
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
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

const navigationModel = buildNavigationModel();

type SidebarProps = {
  onNavigate?: () => void;
  headerAction?: ReactNode;
};

export function Sidebar({ onNavigate, headerAction }: SidebarProps) {
  const location = useLocation();
  const filterInputId = useId();
  const filterInputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const activeGroupId = useMemo(
    () => findActiveGroupId(navigationModel, location.pathname),
    [location.pathname]
  );

  const [openGroups, setOpenGroups] = useState<Set<string>>(
    () => new Set(activeGroupId ? [activeGroupId] : [])
  );

  useEffect(() => {
    if (!activeGroupId) {
      return;
    }

    setOpenGroups((previous) => {
      if (previous.has(activeGroupId)) {
        return previous;
      }

      const next = new Set(previous);
      next.add(activeGroupId);
      return next;
    });
  }, [activeGroupId]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isFilterShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";

      if (isFilterShortcut) {
        event.preventDefault();
        filterInputRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filtered = useMemo(
    () => filterNavigation(navigationModel.groups, searchTerm),
    [searchTerm]
  );

  function toggleGroup(id: string) {
    setOpenGroups((previous) => {
      const next = new Set(previous);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function clearFilter() {
    setSearchTerm("");
    filterInputRef.current?.focus();
  }

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-slate-200 p-5 dark:border-slate-800">
        <div className="flex items-start justify-between gap-3">
          <Link
            to="/"
            onClick={onNavigate}
            className="group block w-fit rounded-2xl outline-none transition duration-200 ease-out focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none dark:focus-visible:ring-blue-950"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-300">
              English Cheatsheet
            </p>
            <p className="mt-1 text-[17px] font-extrabold text-slate-950 dark:text-slate-50">
              Your English, organized
            </p>
          </Link>
          {headerAction}
        </div>

        <div className="mt-4">
          <label htmlFor={filterInputId} className="sr-only">
            Filter topics
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
              <SearchIcon />
            </span>
            <input
              id={filterInputId}
              ref={filterInputRef}
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              onKeyDown={(event) => {
                // Only consume Escape when there is text to clear; otherwise let it close the drawer.
                if (event.key === "Escape" && searchTerm) {
                  event.stopPropagation();
                  setSearchTerm("");
                }
              }}
              placeholder="Filter topics"
              className="h-[42px] w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-16 text-sm text-slate-900 outline-none transition duration-200 ease-out placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 motion-reduce:transition-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-blue-950"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2">
              {searchTerm ? (
                <button
                  type="button"
                  aria-label="Clear filter"
                  onClick={clearFilter}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition duration-200 ease-out hover:bg-slate-200 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none dark:hover:bg-slate-700 dark:hover:text-slate-100 dark:focus-visible:ring-blue-950"
                >
                  <ClearIcon />
                </button>
              ) : (
                <kbd className="hidden select-none rounded-md border border-slate-300 bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 sm:inline-block dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  Ctrl K
                </kbd>
              )}
            </span>
          </div>

          {searchTerm ? (
            <p
              aria-live="polite"
              className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400"
            >
              {filtered.totalMatchCount} {filtered.totalMatchCount === 1 ? "topic" : "topics"} found
            </p>
          ) : null}
        </div>
      </div>

      <nav
        aria-label="Study sections"
        className="flex-1 overflow-y-auto px-3 py-4 [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-track]:bg-transparent dark:[&::-webkit-scrollbar-thumb]:bg-slate-700"
      >
        {!filtered.isFiltering ? (
          <>
            <NavLink
              to="/"
              end
              onClick={onNavigate}
              className={({ isActive }) =>
                joinClasses(
                  "mb-3 flex items-center gap-2 rounded-[10px] px-3 py-2 text-sm font-bold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none dark:focus-visible:ring-blue-950",
                  isActive
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-100"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                )
              }
            >
              <HouseIcon />
              Home
            </NavLink>
            <p className="mb-2 px-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Study sections
            </p>
          </>
        ) : null}

        <div className="space-y-1">
          {filtered.groups.map((group) => (
            <SidebarGroup
              key={group.id}
              id={group.id}
              label={group.label}
              badgeCount={group.matchCount}
              isOpen={filtered.isFiltering || openGroups.has(group.id)}
              onToggle={() => toggleGroup(group.id)}
            >
              <NavItemLink to={group.viewAll.to} onNavigate={onNavigate} end>
                {group.viewAll.label}
              </NavItemLink>

              {group.subgroups.length > 0
                ? group.subgroups.map((subgroup) => (
                    <div key={subgroup.id}>
                      <p className="mt-2 px-3 pl-[34px] text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                        {subgroup.label}
                      </p>
                      {subgroup.items.map((item) => (
                        <NavItemLink key={item.id} to={item.to} onNavigate={onNavigate}>
                          {item.label}
                        </NavItemLink>
                      ))}
                    </div>
                  ))
                : group.items.map((item) => (
                    <NavItemLink key={item.id} to={item.to} onNavigate={onNavigate}>
                      {item.label}
                    </NavItemLink>
                  ))}
            </SidebarGroup>
          ))}

          {!filtered.isFiltering ? (
            <SidebarGroup
              id={navigationModel.irregularVerbs.id}
              label={navigationModel.irregularVerbs.label}
              badgeCount={navigationModel.irregularVerbs.total}
              isOpen={openGroups.has(navigationModel.irregularVerbs.id)}
              onToggle={() => toggleGroup(navigationModel.irregularVerbs.id)}
            >
              <NavItemLink to={navigationModel.irregularVerbs.viewAll.to} onNavigate={onNavigate} end>
                {navigationModel.irregularVerbs.viewAll.label}
              </NavItemLink>

              <div className="grid grid-cols-7 gap-1.5 px-3 pl-[34px] pt-1">
                {navigationModel.irregularVerbs.letters.map((entry) => (
                  <Link
                    key={entry.letter}
                    to={entry.to}
                    onClick={onNavigate}
                    title={`Verbs starting with ${entry.letter}`}
                    className="flex h-8 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-700 transition duration-200 ease-out hover:bg-blue-100 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-blue-950 dark:hover:text-blue-200 dark:focus-visible:ring-blue-950"
                  >
                    {entry.letter}
                  </Link>
                ))}
              </div>
            </SidebarGroup>
          ) : null}
        </div>

        {filtered.isFiltering && filtered.groups.length === 0 ? (
          <div className="mt-2 rounded-2xl border border-dashed border-slate-300 p-4 text-center dark:border-slate-600">
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">No topics match</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Try a shorter word, like &ldquo;modal&rdquo; or &ldquo;past&rdquo;.
            </p>
          </div>
        ) : null}
      </nav>

      <div className="space-y-3 border-t border-slate-200 p-4 dark:border-slate-800">
        <ThemeToggle />
        <a
          href={githubRepositoryUrl}
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition duration-200 ease-out hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:bg-slate-800 dark:hover:text-blue-200 dark:focus-visible:ring-blue-950"
        >
          ⭐ Star on GitHub
        </a>
      </div>
    </div>
  );
}
