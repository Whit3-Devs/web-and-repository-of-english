import { useEffect } from "react";
import { NavLink, Outlet, matchPath, useLocation } from "react-router-dom";
import { findGrammarTopic } from "../data/grammarTopics";
import { findIrregularVerbBySlug } from "../data/irregularVerbs";
import { findVerbTenseBySlug } from "../data/verbTenses";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/verb-tenses", label: "Verb Tenses" },
  { to: "/modal-verbs", label: "Modal Verbs" },
  { to: "/core-grammar", label: "Core Grammar" },
  { to: "/irregular-verbs", label: "Irregular Verbs" }
];

export function AppLayout() {
  useDocumentTitle();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              English Cheatsheet
            </p>
            <h1 className="text-2xl font-bold text-slate-950">
              Your English, organized and ready
            </h1>
          </div>

          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "rounded-full px-4 py-2 text-sm font-medium transition",
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}

function useDocumentTitle() {
  const location = useLocation();

  useEffect(() => {
    document.title = `${getPageTitle(location.pathname)} | English Cheatsheet`;
  }, [location.pathname]);
}

function getPageTitle(pathname: string) {
  if (pathname === "/") {
    return "Home";
  }

  const verbTenseMatch = matchPath("/verb-tenses/:slug", pathname);
  if (verbTenseMatch?.params.slug) {
    return findVerbTenseBySlug(verbTenseMatch.params.slug)?.name ?? "Verb Tenses";
  }

  const modalVerbMatch = matchPath("/modal-verbs/:slug", pathname);
  if (modalVerbMatch?.params.slug) {
    return (
      findGrammarTopic("modal-verbs", modalVerbMatch.params.slug)?.title ?? "Modal Verbs"
    );
  }

  const coreGrammarMatch = matchPath("/core-grammar/:slug", pathname);
  if (coreGrammarMatch?.params.slug) {
    return (
      findGrammarTopic("core-grammar", coreGrammarMatch.params.slug)?.title ??
      "Core Grammar"
    );
  }

  const irregularVerbMatch = matchPath("/irregular-verbs/:slug", pathname);
  if (irregularVerbMatch?.params.slug) {
    return (
      findIrregularVerbBySlug(irregularVerbMatch.params.slug)?.infinitive ??
      "Irregular Verbs"
    );
  }

  switch (pathname) {
    case "/verb-tenses":
      return "Verb Tenses";
    case "/modal-verbs":
      return "Modal Verbs";
    case "/core-grammar":
      return "Core Grammar";
    case "/irregular-verbs":
      return "Irregular Verbs";
    default:
      return "English Cheatsheet";
  }
}
