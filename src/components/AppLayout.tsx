import { useEffect } from "react";
import { Link, Outlet, matchPath, useLocation } from "react-router-dom";
import {
  findGrammarTopic,
  grammarTopicSectionDetails,
  visibleGrammarTopicSections
} from "../data/grammarTopics";
import { findIrregularVerbBySlug } from "../data/irregularVerbs";
import { findVerbTenseBySlug } from "../data/verbTenses";
import { MobileNavBar } from "./navigation/MobileNavBar";
import { Sidebar } from "./navigation/Sidebar";
import { useMediaQuery } from "../shared/hooks/useMediaQuery";

// Matches Tailwind's `lg` breakpoint, where the sidebar replaces the mobile drawer.
const desktopQuery = "(min-width: 1024px)";

const githubRepositoryUrl =
  "https://github.com/Whit3-Devs/web-and-repository-of-english";
const githubOrganizationUrl = "https://github.com/Whit3-Devs/";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/verb-tenses", label: "Verb Tenses" },
  ...visibleGrammarTopicSections.map((section) => ({
    to: grammarTopicSectionDetails[section].path,
    label: grammarTopicSectionDetails[section].label
  })),
  { to: "/irregular-verbs", label: "Irregular Verbs" }
];

export function AppLayout() {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);
  useDocumentTitle(pageTitle);
  const isDesktop = useMediaQuery(desktopQuery);

  return (
    <div className="min-h-screen bg-slate-50 transition-colors dark:bg-slate-950 lg:flex">
      {isDesktop ? (
        <aside
          aria-label="Site navigation"
          className="hidden shrink-0 border-r border-slate-200 bg-white transition-colors dark:border-slate-800 dark:bg-slate-950 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-72"
        >
          <Sidebar />
        </aside>
      ) : null}

      <div className="flex min-h-screen flex-1 flex-col">
        <MobileNavBar pageTitle={pageTitle} />

        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">
          <Outlet />
        </main>

        <footer className="border-t border-slate-200 bg-white transition-colors dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-8 text-sm text-slate-600 md:grid-cols-[1.4fr_1fr_1fr] dark:text-slate-400">
            <section>
              <p className="text-base font-bold text-slate-950 dark:text-slate-50">
                English Cheatsheet
              </p>
              <p className="mt-2 max-w-md leading-6">
                If this page helped you, you can support it by starring the project on
                GitHub.
              </p>
              <a
                href={githubRepositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-fit items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 font-semibold text-slate-800 shadow-sm transition duration-200 ease-out hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:bg-slate-800 dark:hover:text-blue-200 dark:focus-visible:ring-blue-950"
              >
                ⭐ Star this project on GitHub
              </a>
            </section>

            <section>
              <p className="font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                Browse
              </p>
              <ul className="mt-3 space-y-2">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="font-medium text-slate-700 underline-offset-4 transition duration-200 ease-out hover:text-blue-700 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none dark:text-slate-300 dark:hover:text-blue-200 dark:focus-visible:ring-blue-950"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <p className="font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                Open source
              </p>
              <div className="mt-3 flex flex-col items-start gap-2">
                <a
                  href={githubOrganizationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-slate-700 underline-offset-4 transition duration-200 ease-out hover:text-blue-700 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none dark:text-slate-300 dark:hover:text-blue-200 dark:focus-visible:ring-blue-950"
                >
                  Explore more Whit3-Devs projects
                </a>
                <a
                  href={githubRepositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-slate-700 underline-offset-4 transition duration-200 ease-out hover:text-blue-700 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none dark:text-slate-300 dark:hover:text-blue-200 dark:focus-visible:ring-blue-950"
                >
                  View repository
                </a>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </div>
  );
}

function useDocumentTitle(pageTitle: string) {
  useEffect(() => {
    document.title = `${pageTitle} | English Cheatsheet`;
  }, [pageTitle]);
}

function getPageTitle(pathname: string) {
  if (pathname === "/") {
    return "Home";
  }

  const verbTenseMatch = matchPath("/verb-tenses/:slug", pathname);
  if (verbTenseMatch?.params.slug) {
    return findVerbTenseBySlug(verbTenseMatch.params.slug)?.name ?? "Verb Tenses";
  }

  for (const section of visibleGrammarTopicSections) {
    const details = grammarTopicSectionDetails[section];
    const grammarTopicMatch = matchPath(`${details.path}/:slug`, pathname);
    if (grammarTopicMatch?.params.slug) {
      return findGrammarTopic(section, grammarTopicMatch.params.slug)?.title ?? details.label;
    }
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
    case "/irregular-verbs":
      return "Irregular Verbs";
    default:
      for (const section of visibleGrammarTopicSections) {
        const details = grammarTopicSectionDetails[section];
        if (pathname === details.path) {
          return details.label;
        }
      }
      return "English Cheatsheet";
  }
}
