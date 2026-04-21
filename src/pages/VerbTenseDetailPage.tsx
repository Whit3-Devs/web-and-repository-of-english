import { Link, useParams } from "react-router-dom";
import { findVerbTenseBySlug } from "../data/verbTenses";

export function VerbTenseDetailPage() {
  const { slug } = useParams();
  const verbTense = slug ? findVerbTenseBySlug(slug) : undefined;

  if (!verbTense) {
    return (
      <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Verb Tenses
        </p>
        <h2 className="mt-2 text-3xl font-black text-slate-950">Topic not found</h2>
        <p className="mt-3 text-slate-600">
          The requested verb tense does not exist in the current cheatsheet data.
        </p>
        <Link
          to="/verb-tenses"
          className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
        >
          Back to Verb Tenses
        </Link>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <Link to="/verb-tenses" className="text-sm font-bold text-blue-700 hover:text-blue-900">
        ← Back to Verb Tenses
      </Link>

      <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Full explanation
            </p>
            <h2 className="mt-2 text-4xl font-black text-slate-950">{verbTense.name}</h2>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">{verbTense.summary}</p>
          </div>

          <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700">
            Coming soon
          </span>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <InfoBlock title="Affirmative" value={verbTense.structures.affirmative} />
          <InfoBlock title="Negative" value={verbTense.structures.negative} />
          <InfoBlock title="Question" value={verbTense.structures.interrogative} />
        </div>

        <div className="mt-8 rounded-3xl bg-slate-50 p-6">
          <h3 className="text-xl font-black text-slate-950">
            Full explanation coming soon
          </h3>
          <p className="mt-2 text-slate-600">
            This route is ready so each topic can get a deeper explanation later without
            changing the cheatsheet navigation again.
          </p>
        </div>
      </article>
    </section>
  );
}

function InfoBlock({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <h3 className="font-bold text-slate-900">{title}</h3>
      <p className="mt-1 text-slate-600">{value}</p>
    </div>
  );
}
