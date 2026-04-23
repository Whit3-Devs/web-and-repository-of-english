import { Link, useParams } from "react-router-dom";
import { findVerbTenseFullExplanationBySlug } from "../data/verbTenseFullExplanations";
import { findVerbTenseBySlug } from "../data/verbTenses";

export function VerbTenseDetailPage() {
  const { slug } = useParams();
  const verbTense = slug ? findVerbTenseBySlug(slug) : undefined;
  const fullExplanation = slug
    ? findVerbTenseFullExplanationBySlug(slug)
    : undefined;

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

  if (!fullExplanation) {
    return (
      <section className="space-y-6">
        <Link
          to="/verb-tenses"
          className="text-sm font-bold text-blue-700 hover:text-blue-900"
        >
          ← Back to Verb Tenses
        </Link>

        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                Full explanation
              </p>
              <h2 className="mt-2 text-4xl font-black text-slate-950">
                {verbTense.name}
              </h2>
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
              This route is ready so each topic can get a deeper explanation later
              without changing the cheatsheet navigation again.
            </p>
          </div>
        </article>
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
            <h2 className="mt-2 text-4xl font-black text-slate-950">
              {fullExplanation.title}
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              {fullExplanation.overview}
            </p>
          </div>

          <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
            Available now
          </span>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <ContentSection
            title="Overview / main use"
            items={fullExplanation.whenToUse}
            intro={fullExplanation.overview}
          />
          {fullExplanation.decisionRules?.length ? (
            <ContentSection
              title="Decision rules"
              items={fullExplanation.decisionRules}
              variant="highlight"
            />
          ) : null}
        </div>

        {fullExplanation.whyThisTense || fullExplanation.whyNotAnother?.length ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {fullExplanation.whyThisTense ? (
              <InfoBlock title="Why this tense" value={fullExplanation.whyThisTense} />
            ) : null}
            {fullExplanation.whyNotAnother?.length ? (
              <ContentSection
                title="Why not another"
                items={fullExplanation.whyNotAnother}
              />
            ) : null}
          </div>
        ) : null}

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <InfoBlock title="Mental model / timeline" value={fullExplanation.mentalModel} />
          <div className="rounded-3xl bg-slate-50 p-6">
            <h3 className="text-xl font-black text-slate-950">Timeline</h3>
            <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-2xl bg-slate-950 p-4 text-sm text-slate-100">
              {fullExplanation.timelineText}
            </pre>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <InfoBlock title="Affirmative" value={fullExplanation.structures.affirmative} />
          <InfoBlock title="Negative" value={fullExplanation.structures.negative} />
          <InfoBlock title="Question" value={fullExplanation.structures.question} />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ContentSection title="Examples" items={fullExplanation.examples} />
          <ContentSection title="Signals" items={fullExplanation.signals} />
        </div>

        {fullExplanation.personalizedExamples?.length ? (
          <div className="mt-8">
            <ContentSection
              title="Personalized examples"
              items={fullExplanation.personalizedExamples}
              variant="indigo"
            />
          </div>
        ) : null}

        {fullExplanation.confusionExamples?.length ? (
          <div className="mt-8 rounded-3xl bg-violet-50 p-6">
            <h3 className="text-xl font-black text-violet-950">
              Common confusion examples
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {fullExplanation.confusionExamples.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-4 shadow-sm">
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <ul className="mt-3 space-y-2 text-slate-700">
                    {item.examples.map((example) => (
                      <li key={example}>• {example}</li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-2xl bg-violet-50 p-3 text-sm text-violet-900">
                    {item.takeaway}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-8 rounded-3xl bg-rose-50 p-6">
          <h3 className="text-xl font-black text-rose-950">
            {fullExplanation.explainedMistakes?.length
              ? "Explained mistakes"
              : "Common mistakes"}
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {getMistakeItems(fullExplanation).map((mistake) => (
              <div key={mistake.wrong} className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="font-semibold text-rose-800">Wrong</p>
                <p className="mt-1 text-slate-700">{mistake.wrong}</p>
                <p className="mt-3 font-semibold text-emerald-700">Correct</p>
                <p className="mt-1 text-slate-700">{mistake.correct}</p>
                {mistake.reason ? (
                  <>
                    <p className="mt-3 font-semibold text-blue-700">Why</p>
                    <p className="mt-1 text-slate-700">{mistake.reason}</p>
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-blue-50 p-6">
          <h3 className="text-xl font-black text-blue-950">Compare with...</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {fullExplanation.comparisons.map((comparison) => (
              <div key={comparison.title} className="rounded-2xl bg-white p-4 shadow-sm">
                <h4 className="font-bold text-slate-900">{comparison.title}</h4>
                <p className="mt-2 text-slate-600">{comparison.explanation}</p>
              </div>
            ))}
          </div>
        </div>

        {fullExplanation.quickPracticePrompts?.length ? (
          <div className="mt-8">
            <ContentSection
              title="Quick practice prompts"
              items={fullExplanation.quickPracticePrompts}
              variant="amber"
            />
          </div>
        ) : null}

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ContentSection title="Practice ideas" items={fullExplanation.practiceIdeas} />
          <ContentSection title="Related topics" items={fullExplanation.relatedTopics} />
        </div>
      </article>
    </section>
  );
}

function InfoBlock({ title, value }: { title: string; value: string }) {
  const styles = getInfoBlockStyles(title);

  return (
    <div className={`rounded-2xl p-4 ${styles.container}`}>
      <h3 className={`font-bold ${styles.title}`}>{title}</h3>
      <p className={`mt-2 ${styles.body}`}>{value}</p>
    </div>
  );
}

function getInfoBlockStyles(title: string) {
  switch (title) {
    case "Affirmative":
      return {
        container: "bg-emerald-50",
        title: "text-emerald-900",
        body: "text-emerald-800"
      };
    case "Negative":
      return {
        container: "bg-rose-50",
        title: "text-rose-900",
        body: "text-rose-800"
      };
    case "Question":
      return {
        container: "bg-blue-50",
        title: "text-blue-900",
        body: "text-blue-800"
      };
    default:
      return {
        container: "bg-slate-50",
        title: "text-slate-900",
        body: "text-slate-600"
      };
  }
}

function ContentSection({
  title,
  items,
  intro,
  variant = "default"
}: {
  title: string;
  items: string[];
  intro?: string;
  variant?: "default" | "highlight" | "indigo" | "amber";
}) {
  const variantStyles = getContentSectionStyles(variant);

  return (
    <div className={`rounded-3xl p-6 ${variantStyles.container}`}>
      <h3 className={`text-xl font-black ${variantStyles.title}`}>{title}</h3>
      {intro ? <p className={`mt-2 ${variantStyles.body}`}>{intro}</p> : null}
      <ul className={`mt-4 space-y-2 ${variantStyles.body}`}>
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function getContentSectionStyles(variant: "default" | "highlight" | "indigo" | "amber") {
  switch (variant) {
    case "highlight":
      return {
        container: "bg-slate-950",
        title: "text-white",
        body: "text-slate-200"
      };
    case "indigo":
      return {
        container: "bg-indigo-50",
        title: "text-indigo-950",
        body: "text-indigo-900"
      };
    case "amber":
      return {
        container: "bg-amber-50",
        title: "text-amber-950",
        body: "text-amber-900"
      };
    default:
      return {
        container: "bg-slate-50",
        title: "text-slate-950",
        body: "text-slate-600"
      };
  }
}

function getMistakeItems(
  fullExplanation: ReturnType<typeof findVerbTenseFullExplanationBySlug> extends infer T
    ? Exclude<T, undefined>
    : never
) {
  if (fullExplanation.explainedMistakes?.length) {
    return fullExplanation.explainedMistakes;
  }

  return fullExplanation.commonMistakes.map((mistake) => ({
    ...mistake,
    reason: undefined
  }));
}
