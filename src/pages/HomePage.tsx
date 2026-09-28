import { Link } from "react-router-dom";
import { ActionLink, Badge, Card } from "../components/ui";
import {
  getGrammarTopicsBySection,
  grammarTopicSectionDetails,
  visibleGrammarTopicSections
} from "../data/grammarTopics";
import { irregularVerbs } from "../data/irregularVerbs";
import { verbTenses } from "../data/verbTenses";
import { buildLearningPath, getFirstLearningPathItem } from "../features/home/learningPath";
import { cefrLevelLabels, getCefrLevelBadgeVariant } from "../shared/utils/cefrLevel";
import {
  recentlyVisitedKindLabels,
  useRecentlyVisitedStore
} from "../store/useRecentlyVisitedStore";

const sectionOverviews = [
  {
    title: "Verb Tenses",
    description: "Compare every tense side by side and open the one you need.",
    count: verbTenses.length,
    to: "/verb-tenses"
  },
  ...visibleGrammarTopicSections.map((section) => ({
    title: grammarTopicSectionDetails[section].label,
    description: grammarTopicSectionDetails[section].description,
    count: getGrammarTopicsBySection(section).length,
    to: grammarTopicSectionDetails[section].path
  })),
  {
    title: "Irregular Verbs",
    description: "Every irregular verb with its forms and example sentences.",
    count: irregularVerbs.length,
    to: "/irregular-verbs"
  }
];

const learningPath = buildLearningPath();
const firstLearningPathItem = getFirstLearningPathItem();

export function HomePage() {
  const recentlyVisited = useRecentlyVisitedStore((state) => state.entries);

  return (
    <section className="space-y-10">
      <Card variant="highlight" padding="lg">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          English Cheatsheet
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight">
          Your starting point for studying English grammar.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          Follow the learning path from A1 to C1, or jump straight to the
          section you need.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {firstLearningPathItem ? (
            <ActionLink to={firstLearningPathItem.to} variant="primary">
              Start with the basics →
            </ActionLink>
          ) : null}
          <ActionLink to="/irregular-verbs" variant="soft">
            Browse irregular verbs
          </ActionLink>
        </div>
      </Card>

      {recentlyVisited.length > 0 ? (
        <section aria-labelledby="continue-studying-heading">
          <h2
            id="continue-studying-heading"
            className="text-xl font-black text-slate-950 dark:text-slate-50"
          >
            Continue studying
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {recentlyVisited.map((entry) => (
              <Link
                key={entry.path}
                to={entry.path}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-700 dark:focus-visible:ring-blue-950"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
                  {recentlyVisitedKindLabels[entry.kind]}
                </p>
                <p className="mt-1 truncate font-bold text-slate-950 dark:text-slate-50">
                  {entry.title}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section aria-labelledby="learning-path-heading">
        <h2
          id="learning-path-heading"
          className="text-xl font-black text-slate-950 dark:text-slate-50"
        >
          Learning path
        </h2>
        <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-400">
          Every topic and tense, grouped from beginner (A1) to advanced (C1).
        </p>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {learningPath.map((group) => (
            <Card key={group.level}>
              <div className="flex items-center gap-3">
                <Badge variant={getCefrLevelBadgeVariant(group.level)}>{group.level}</Badge>
                <h3 className="text-lg font-black text-slate-950 dark:text-slate-50">
                  {cefrLevelLabels[group.level]}
                </h3>
              </div>

              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.to}
                      className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-2.5 transition duration-200 ease-out hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none dark:bg-slate-800 dark:hover:bg-blue-950/40 dark:focus-visible:ring-blue-950"
                    >
                      <span className="truncate font-semibold text-slate-800 dark:text-slate-100">
                        {item.label}
                      </span>
                      <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                        {item.sectionLabel}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="sections-heading">
        <h2 id="sections-heading" className="text-xl font-black text-slate-950 dark:text-slate-50">
          Sections
        </h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectionOverviews.map((section) => (
            <Card key={section.title} interactive>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-black text-slate-950 dark:text-slate-50">
                  {section.title}
                </h3>
                <Badge variant="primary">{section.count}</Badge>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {section.description}
              </p>
              <div className="mt-4">
                <ActionLink to={section.to} variant="text">
                  View all →
                </ActionLink>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </section>
  );
}
