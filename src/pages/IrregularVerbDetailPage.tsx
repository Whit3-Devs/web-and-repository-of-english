import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { ActionLink, BackLink, Badge, Card, PageHeader, PillLink, SectionCard } from "../components/ui";
import {
  findIrregularVerbBySlug,
  irregularVerbs
} from "../data/irregularVerbs";
import {
  getIrregularVerbPatternFamily,
  irregularVerbPatternDefinitions
} from "../data/irregularVerbPatterns";
import type { IrregularVerb } from "../shared/types/content";
import { highlightVerbForm } from "../shared/utils/highlightVerbForm";
import { formatVerbForm } from "../shared/utils/verbFormVariants";

const MAX_PATTERN_VERBS = 12;

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
        <ActionLink to="/irregular-verbs" variant="primary" className="mt-6">
          Back to Irregular Verbs
        </ActionLink>
      </section>
    );
  }

  const currentIndex = irregularVerbs.findIndex((verb) => verb.id === irregularVerb.id);
  const previousVerb = currentIndex > 0 ? irregularVerbs[currentIndex - 1] : undefined;
  const nextVerb =
    currentIndex >= 0 && currentIndex < irregularVerbs.length - 1
      ? irregularVerbs[currentIndex + 1]
      : undefined;

  const patternFamily = getIrregularVerbPatternFamily(irregularVerb);
  const patternDefinition = irregularVerbPatternDefinitions.find(
    (definition) => definition.key === patternFamily
  );
  const patternSiblings = irregularVerbs
    .filter(
      (verb) => verb.id !== irregularVerb.id && getIrregularVerbPatternFamily(verb) === patternFamily
    )
    .slice(0, MAX_PATTERN_VERBS);

  return (
    <section className="space-y-6">
      <BackLink to="/irregular-verbs" label="Back to Irregular Verbs" />

      <PageHeader
        eyebrow="Irregular Verb"
        title={irregularVerb.infinitive}
        description={irregularVerb.meaning}
        actions={
          <>
            <Badge variant="primary" className="capitalize">
              {irregularVerb.category}
            </Badge>
            <Badge variant="info" className="capitalize">
              {irregularVerb.frequency} frequency
            </Badge>
          </>
        }
      />

      <Card>
        <h3 className="text-xl font-black text-slate-950 dark:text-slate-50">Forms</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <FormBlock label="Base" value={irregularVerb.infinitive} />
          <FormBlock label="Past simple" value={formatVerbForm(irregularVerb.pastSimple)} />
          <FormBlock label="Past participle" value={formatVerbForm(irregularVerb.pastParticiple)} />
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-black text-slate-950 dark:text-slate-50">Examples</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <ExampleBlock
            label="Base form"
            sentence={irregularVerb.examples.base}
            form={irregularVerb.infinitive}
          />
          <ExampleBlock
            label="Past simple"
            sentence={irregularVerb.examples.past}
            form={irregularVerb.pastSimple}
          />
          <ExampleBlock
            label="Past participle"
            sentence={irregularVerb.examples.participle}
            form={irregularVerb.pastParticiple}
          />
        </div>
      </Card>

      {patternDefinition ? (
        <SectionCard
          title={`${patternDefinition.code} — ${patternDefinition.title}`}
          description={patternDefinition.explanation}
          variant="info"
        >
          {patternSiblings.length ? (
            <>
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-800 dark:text-indigo-200">
                Other verbs with this pattern
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {patternSiblings.map((verb) => (
                  <PillLink key={verb.id} to={verb.fullExplanationPath}>
                    {verb.infinitive}
                  </PillLink>
                ))}
              </div>
            </>
          ) : (
            <p>No other verbs share this exact pattern yet.</p>
          )}
        </SectionCard>
      ) : null}

      <Card
        padding="sm"
        className="flex flex-wrap items-center justify-between gap-3"
      >
        <VerbNavLink direction="previous" verb={previousVerb} />
        <VerbNavLink direction="next" verb={nextVerb} />
      </Card>
    </section>
  );
}

function FormBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-5 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-2xl font-black text-slate-950 dark:text-slate-50 sm:text-3xl">{value}</p>
    </div>
  );
}

function ExampleBlock({
  label,
  sentence,
  form
}: {
  label: string;
  sentence: string;
  form: string;
}) {
  const segments = highlightVerbForm(sentence, form);

  return (
    <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
        {label}
      </p>
      <p className="mt-2 text-slate-700 dark:text-slate-200">
        {segments.map((segment, index) => {
          const key = `${index}-${segment.text}`;

          if (!segment.matched) {
            return <Fragment key={key}>{segment.text}</Fragment>;
          }

          return (
            <mark
              key={key}
              className="rounded bg-amber-100 px-1 font-bold text-amber-900 dark:bg-amber-500/20 dark:text-amber-200"
            >
              {segment.text}
            </mark>
          );
        })}
      </p>
    </div>
  );
}

function VerbNavLink({
  direction,
  verb
}: {
  direction: "previous" | "next";
  verb: IrregularVerb | undefined;
}) {
  if (!verb) {
    return <span aria-hidden="true" />;
  }

  const label = direction === "previous" ? `← ${verb.infinitive}` : `${verb.infinitive} →`;

  return (
    <ActionLink to={verb.fullExplanationPath} variant="soft">
      {label}
    </ActionLink>
  );
}
