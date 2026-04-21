import { Link, useParams } from "react-router-dom";
import { findGrammarTopic } from "../data/grammarTopics";
import type { GrammarTopicSection } from "../shared/types/content";

type GrammarTopicDetailPageProps = {
  section: GrammarTopicSection;
  backPath: string;
  backLabel: string;
};

export function GrammarTopicDetailPage({
  section,
  backPath,
  backLabel
}: GrammarTopicDetailPageProps) {
  const { slug } = useParams();
  const topic = slug ? findGrammarTopic(section, slug) : undefined;

  if (!topic) {
    return (
      <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          {backLabel}
        </p>
        <h2 className="mt-2 text-3xl font-black text-slate-950">Topic not found</h2>
        <p className="mt-3 text-slate-600">
          The requested topic does not exist in the current cheatsheet data.
        </p>
        <Link
          to={backPath}
          className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
        >
          Back to {backLabel}
        </Link>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <Link to={backPath} className="text-sm font-bold text-blue-700 hover:text-blue-900">
        ← Back to {backLabel}
      </Link>

      <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Full explanation
            </p>
            <h2 className="mt-2 text-4xl font-black text-slate-950">{topic.title}</h2>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">{topic.summary}</p>
          </div>

          <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700">
            Coming soon
          </span>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <ListBlock title="Key ideas" items={topic.keyIdeas} />
          <ListBlock title="Examples" items={topic.examples} />
          <ListBlock title="Common mistakes" items={topic.commonMistakes} />
        </div>

        <div className="mt-8 rounded-3xl bg-slate-50 p-6">
          <h3 className="text-xl font-black text-slate-950">
            Full explanation coming soon
          </h3>
          <p className="mt-2 text-slate-600">
            This detail route is ready so the deep explanation can be migrated later
            without changing the quick cheatsheet flow.
          </p>
        </div>
      </article>
    </section>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <h3 className="font-bold text-slate-900">{title}</h3>
      <ul className="mt-2 space-y-2 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
