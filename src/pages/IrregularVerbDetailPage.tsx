import { useParams } from "react-router-dom";
import { ActionLink, BackLink } from "../components/ui";
import { findIrregularVerbBySlug } from "../data/irregularVerbs";

export function IrregularVerbDetailPage() {
  const { slug } = useParams();
  const irregularVerb = slug ? findIrregularVerbBySlug(slug) : undefined;

  if (!irregularVerb) {
    return (
      <section className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
          Irregular Verbs
        </p>
        <h2 className="mt-2 text-3xl font-black text-slate-950 dark:text-slate-50">Topic not found</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          The requested irregular verb does not exist in the current cheatsheet data.
        </p>
        <ActionLink
          to="/irregular-verbs"
          variant="primary"
          className="mt-6"
        >
          Back to Irregular Verbs
        </ActionLink>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <BackLink to="/irregular-verbs" label="Back to Irregular Verbs" />

      <article className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
              Full explanation
            </p>
            <h2 className="mt-2 text-4xl font-black text-slate-950 dark:text-slate-50">
              {irregularVerb.infinitive}
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-400">
              Quick reference for the base form, simple past, and past participle.
            </p>
          </div>

          <span className="rounded-full bg-amber-50 dark:bg-amber-950/40 px-4 py-2 text-sm font-bold text-amber-700 dark:text-amber-300">
            Coming soon
          </span>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <InfoBlock title="Infinitive" value={irregularVerb.infinitive} />
          <InfoBlock title="Past Simple" value={irregularVerb.pastSimple} />
          <InfoBlock title="Past Participle" value={irregularVerb.pastParticiple} />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <InfoBlock title="Category" value={irregularVerb.category} />
          <InfoBlock title="Frequency" value={irregularVerb.frequency} />
          <InfoBlock title="Example" value={irregularVerb.example} />
        </div>

        <div className="mt-8 rounded-3xl bg-slate-50 dark:bg-slate-800 p-6">
          <h3 className="text-xl font-black text-slate-950 dark:text-slate-50">
            Full explanation coming soon
          </h3>
          <p className="mt-2 text-slate-600 dark:text-slate-200">
            This route is ready so each irregular verb can get deeper usage notes later
            without changing the study navigation again.
          </p>
        </div>
      </article>
    </section>
  );
}

function InfoBlock({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4">
      <h3 className="font-bold capitalize text-slate-900 dark:text-slate-100">{title}</h3>
      <p className="mt-1 capitalize text-slate-600 dark:text-slate-200">{value}</p>
    </div>
  );
}
