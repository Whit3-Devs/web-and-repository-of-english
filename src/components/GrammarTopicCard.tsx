import type { GrammarTopic } from "../shared/types/content";
import { FullExplanationLink } from "./FullExplanationLink";

type GrammarTopicCardProps = {
  topic: GrammarTopic;
};

export function GrammarTopicCard({ topic }: GrammarTopicCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-50">{topic.title}</h3>
          <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-400 dark:text-slate-500">{topic.summary}</p>
        </div>

        <FullExplanationLink
          to={topic.fullExplanationPath}
          available={topic.hasFullExplanation}
        />
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <ListBlock title="Key ideas" items={topic.keyIdeas} />
        <ListBlock title="Examples" items={topic.examples} />
        <ListBlock title="Common mistakes" items={topic.commonMistakes} />
      </div>
    </article>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-bold text-slate-900 dark:text-slate-100">{title}</h4>
      <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-400 dark:text-slate-500">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
