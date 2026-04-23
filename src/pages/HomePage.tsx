import { Link } from "react-router-dom";
import { getGrammarTopicsBySection } from "../data/grammarTopics";
import { irregularVerbs } from "../data/irregularVerbs";
import { verbTenses } from "../data/verbTenses";

const irregularVerbPreview = irregularVerbs.slice(0, 24);

const sections = [
  {
    title: "Verb Tenses",
    description: "Open any tense directly and jump into its full explanation route.",
    count: verbTenses.length,
    topics: verbTenses.map((verbTense) => ({
      label: verbTense.name,
      to: verbTense.fullExplanationPath
    })),
    viewAllPath: "/verb-tenses",
    viewAllLabel: "View all verb tenses"
  },
  {
    title: "Modal Verbs",
    description: "Study modal verbs by communicative intention instead of memorizing random lists.",
    count: getGrammarTopicsBySection("modal-verbs").length,
    topics: getGrammarTopicsBySection("modal-verbs").map((topic) => ({
      label: topic.title,
      to: topic.fullExplanationPath
    })),
    viewAllPath: "/modal-verbs",
    viewAllLabel: "View all modal verb topics"
  },
  {
    title: "Core Grammar",
    description: "Quick access to the grammar structures that come up all the time.",
    count: getGrammarTopicsBySection("core-grammar").length,
    topics: getGrammarTopicsBySection("core-grammar").map((topic) => ({
      label: topic.title,
      to: topic.fullExplanationPath
    })),
    viewAllPath: "/core-grammar",
    viewAllLabel: "View all core grammar topics"
  },
  {
    title: "Irregular Verbs",
    description:
      "Start with a strong preview set here, then open the full irregular verb list when needed.",
    count: irregularVerbs.length,
    topics: irregularVerbPreview.map((verb) => ({
      label: verb.infinitive,
      to: verb.fullExplanationPath
    })),
    viewAllPath: "/irregular-verbs",
    viewAllLabel: "View all irregular verbs"
  }
];

export function HomePage() {
  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Study Directory
        </p>
        <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight">
          Jump straight into the topic you want to study.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          Use Home as your fast study map: topics are grouped by section, and each
          item opens its current full explanation route directly.
        </p>
      </div>

      <div className="grid gap-6">
        {sections.map((section) => (
          <section
            key={section.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black text-slate-950">{section.title}</h3>
                <p className="mt-2 max-w-3xl text-slate-600">{section.description}</p>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">
                {section.count}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {section.topics.map((topic) => (
                <Link
                  key={`${section.title}-${topic.label}`}
                  to={topic.to}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  {topic.label}
                </Link>
              ))}
            </div>

            <div className="mt-5">
              <Link
                to={section.viewAllPath}
                className="text-sm font-bold text-blue-700 hover:text-blue-900"
              >
                {section.viewAllLabel} →
              </Link>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
