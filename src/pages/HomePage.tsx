import { ActionLink, Badge, Card, PillLink } from "../components/ui";
import {
  getGrammarTopicsBySection,
  grammarTopicSectionDetails,
  visibleGrammarTopicSections
} from "../data/grammarTopics";
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
  ...visibleGrammarTopicSections.map((section) => ({
    title: grammarTopicSectionDetails[section].label,
    description: grammarTopicSectionDetails[section].description,
    count: getGrammarTopicsBySection(section).length,
    topics: getGrammarTopicsBySection(section).map((topic) => ({
      label: topic.title,
      to: topic.fullExplanationPath
    })),
    viewAllPath: grammarTopicSectionDetails[section].path,
    viewAllLabel: grammarTopicSectionDetails[section].viewAllLabel
  })),
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
      <Card variant="highlight" padding="lg">
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
      </Card>

      <div className="grid gap-6">
        {sections.map((section) => (
          <section key={section.title}>
            <Card interactive>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-950 dark:text-slate-50">{section.title}</h3>
                  <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-400">{section.description}</p>
                </div>
                <Badge variant="primary">{section.count}</Badge>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {section.topics.map((topic) => (
                  <PillLink
                    key={`${section.title}-${topic.label}`}
                    to={topic.to}
                  >
                    {topic.label}
                  </PillLink>
                ))}
              </div>

              <div className="mt-5">
                <ActionLink
                  to={section.viewAllPath}
                  variant="text"
                >
                  {section.viewAllLabel} →
                </ActionLink>
              </div>
            </Card>
          </section>
        ))}
      </div>
    </section>
  );
}
