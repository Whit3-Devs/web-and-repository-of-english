import { Link, useParams } from "react-router-dom";
import { SemanticCallout } from "../components/SemanticCallout";
import { findGrammarTopicFullExplanationBySlug } from "../data/grammarTopicFullExplanations";
import { findGrammarTopic } from "../data/grammarTopics";
import type {
  GrammarTopicAdjectivesAdverbsFullExplanation,
  GrammarTopicArticlesDeterminersFullExplanation,
  GrammarTopicAuxiliaryContractionTable,
  GrammarTopicComparativesSuperlativesFullExplanation,
  GrammarTopicConditionalsOverviewFullExplanation,
  GrammarTopicConnectorsDiscourseMarkersFullExplanation,
  GrammarTopicEnglishAuxiliariesFullExplanation,
  GrammarTopicEmbeddedWhClausesFullExplanation,
  GrammarTopicFullExplanation,
  GrammarTopicFullExplanationPracticeItem,
  GrammarTopicGerundsInfinitivesFullExplanation,
  GrammarTopicPassiveVoiceFullExplanation,
  GrammarTopicPhrasalVerbsFullExplanation,
  GrammarTopicPracticalWritingPatternsFullExplanation,
  GrammarTopicQuestionBuilderFullExplanation,
  GrammarTopicModalTopicFullExplanation,
  GrammarTopicPrepositionsFullExplanation,
  GrammarTopicPronounsPossessivesFullExplanation,
  GrammarTopicQuestionSideBySideExample,
  GrammarTopicQuestionStructureTable,
  GrammarTopicReportedSpeechFullExplanation,
  GrammarTopicSection,
  GrammarTopicStructureDifferencesFullExplanation,
  GrammarTopicWhQuestionsFullExplanation
} from "../shared/types/content";

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
  const fullExplanation = slug
    ? findGrammarTopicFullExplanationBySlug(section, slug)
    : undefined;

  if (!topic) {
    return (
      <section className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
          {backLabel}
        </p>
        <h2 className="mt-2 text-3xl font-black text-slate-950 dark:text-slate-50">Topic not found</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
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

  if (!fullExplanation) {
    return (
      <section className="space-y-6">
        <Link to={backPath} className="text-sm font-bold text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 dark:text-blue-100">
          ← Back to {backLabel}
        </Link>

        <article className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
                Full explanation
              </p>
              <h2 className="mt-2 text-4xl font-black text-slate-950 dark:text-slate-50">{topic.title}</h2>
              <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-400">{topic.summary}</p>
            </div>

            <span className="rounded-full bg-amber-50 dark:bg-amber-950/40 px-4 py-2 text-sm font-bold text-amber-700 dark:text-amber-300">
              Coming soon
            </span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <ListBlock title="Key ideas" items={topic.keyIdeas} />
            <ListBlock title="Examples" items={topic.examples} />
            <ListBlock title="Common mistakes" items={topic.commonMistakes} />
          </div>

          <div className="mt-8 rounded-3xl bg-slate-50 dark:bg-slate-800 p-6">
            <h3 className="text-xl font-black text-slate-950 dark:text-slate-50">
              Full explanation coming soon
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              This detail route is ready so the deep explanation can be migrated later
              without changing the quick cheatsheet flow.
            </p>
          </div>
        </article>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <Link to={backPath} className="text-sm font-bold text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 dark:text-blue-100">
        ← Back to {backLabel}
      </Link>

      <article className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-sm">
        <Header title={fullExplanation.title} overview={fullExplanation.overview} />

        {fullExplanation.contentType === "prepositions" ? (
          <PrepositionsContent explanation={fullExplanation} />
        ) : fullExplanation.contentType === "conditionals-overview" ? (
          <ConditionalsOverviewContent explanation={fullExplanation} />
        ) : fullExplanation.contentType === "question-builder" ? (
          <QuestionBuilderContent explanation={fullExplanation} />
        ) : fullExplanation.contentType === "modal-topic" ? (
          <ModalTopicContent explanation={fullExplanation} />
        ) : fullExplanation.contentType === "wh-questions" ? (
          <WhQuestionsContent explanation={fullExplanation} />
        ) : fullExplanation.contentType === "embedded-wh-clauses" ? (
          <EmbeddedWhClausesContent explanation={fullExplanation} />
        ) : fullExplanation.contentType === "english-auxiliaries" ? (
          <EnglishAuxiliariesContent explanation={fullExplanation} />
        ) : fullExplanation.contentType === "structure-differences" ? (
          <StructureDifferencesContent explanation={fullExplanation} />
        ) : fullExplanation.contentType === "articles-determiners" ? (
          <ArticlesDeterminersContent explanation={fullExplanation} />
        ) : fullExplanation.contentType === "gerunds-infinitives" ? (
          <GerundsInfinitivesContent explanation={fullExplanation} />
        ) : fullExplanation.contentType === "passive-voice" ? (
          <PassiveVoiceContent explanation={fullExplanation} />
        ) : fullExplanation.contentType === "reported-speech" ? (
          <ReportedSpeechContent explanation={fullExplanation} />
        ) : fullExplanation.contentType === "comparatives-superlatives" ? (
          <ComparativesSuperlativesContent explanation={fullExplanation} />
        ) : fullExplanation.contentType === "adjectives-adverbs" ? (
          <AdjectivesAdverbsContent explanation={fullExplanation} />
        ) : fullExplanation.contentType === "connectors-discourse-markers" ? (
          <ConnectorsDiscourseMarkersContent explanation={fullExplanation} />
        ) : fullExplanation.contentType === "practical-writing-patterns" ? (
          <PracticalWritingPatternsContent explanation={fullExplanation} />
        ) : fullExplanation.contentType === "phrasal-verbs" ? (
          <PhrasalVerbsContent explanation={fullExplanation} />
        ) : (
          <PronounsPossessivesContent explanation={fullExplanation} />
        )}
      </article>
    </section>
  );
}

function Header({ title, overview }: { title: string; overview: string }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
          Full explanation
        </p>
        <h2 className="mt-2 text-4xl font-black text-slate-950 dark:text-slate-50">{title}</h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-400">{overview}</p>
      </div>

      <span className="rounded-full bg-emerald-50 dark:bg-emerald-950/40 px-4 py-2 text-sm font-bold text-emerald-700 dark:text-emerald-300">
        Available now
      </span>
    </div>
  );
}

function PrepositionsContent({
  explanation
}: {
  explanation: GrammarTopicPrepositionsFullExplanation;
}) {
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="What prepositions do" items={explanation.whatItDoes} />
        <ContentSection
          title="Basic structure"
          items={explanation.basicStructure}
          variant="highlight"
        />
      </div>

      <div className="mt-8 space-y-6">
        {explanation.referenceTables.map((table) => (
          <ReferenceTable key={table.title} explanation={explanation} title={table.title} />
        ))}
      </div>

      <div className="mt-8 rounded-3xl bg-blue-50 dark:bg-blue-950/40 p-6">
        <h3 className="text-xl font-black text-blue-950 dark:text-blue-100">Important differences</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {explanation.comparisonBlocks.map((comparison) => (
            <div key={comparison.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">{comparison.title}</h4>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{comparison.explanation}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {comparison.examples.map((example) => (
                  <li key={example}>• {example}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {explanation.contrastTables?.length ? (
        <div className="mt-8 space-y-6">
          {explanation.contrastTables.map((table) => (
            <ContrastTable key={table.title} title={table.title} rows={table.rows} />
          ))}
        </div>
      ) : null}

      {explanation.fixedExpressions?.length ? (
        <div className="mt-8 rounded-3xl bg-emerald-50 dark:bg-emerald-950/40 p-6">
          <h3 className="text-xl font-black text-emerald-950 dark:text-emerald-100">
            Fixed expressions and collocations
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {explanation.fixedExpressions.map((group) => (
              <div key={group.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
                <h4 className="font-bold text-slate-900 dark:text-slate-100">{group.title}</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {explanation.ruleNotes.map((rule) => (
          <div key={rule.title} className="rounded-3xl bg-violet-50 p-6">
            <h3 className="text-xl font-black text-violet-950">{rule.title}</h3>
            <p className="mt-3 rounded-2xl bg-white dark:bg-slate-900 p-4 font-semibold text-violet-900">
              {rule.structure}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-violet-950">
              {rule.examples.map((example) => (
                <li key={example}>• {example}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-violet-900">{rule.takeaway}</p>
          </div>
        ))}

        <ContentSection title="Final examples" items={explanation.examples} />
      </div>

      <MistakesSection mistakes={explanation.commonMistakes} />

      {explanation.practiceItems?.length ? (
        <PracticeSection items={explanation.practiceItems} />
      ) : null}

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection
          title="Quick memory / cheat block"
          items={explanation.quickMemory}
          variant="amber"
        />
        <ContentSection title="Related topics" items={explanation.relatedTopics} />
      </div>
    </>
  );
}

function ModalTopicContent({
  explanation
}: {
  explanation: GrammarTopicModalTopicFullExplanation;
}) {
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection
          title="What this topic helps you express"
          items={explanation.whatItDoes}
        />
        <ContentSection
          title="Decision rules"
          items={explanation.decisionRules}
          variant="highlight"
        />
      </div>

      <div className="mt-8">
        <ContentSection title="Core rule" items={explanation.coreRule} variant="amber" />
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {explanation.modalCards.map((card) => (
          <div key={card.title} className="rounded-3xl bg-slate-50 dark:bg-slate-800 p-6">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-black text-slate-950 dark:text-slate-50">{card.title}</h3>
              <span className="rounded-full bg-blue-100 dark:bg-blue-900/60 px-3 py-1 text-xs font-bold text-blue-800 dark:text-blue-200">
                {card.modal}
              </span>
            </div>

            <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Main use
            </p>
            <p className="mt-1 text-slate-900 dark:text-slate-100">{card.mainUse}</p>

            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              When to use
            </p>
            <p className="mt-1 text-slate-700 dark:text-slate-300">{card.whenToUse}</p>

            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Tone
            </p>
            <p className="mt-1 text-slate-700 dark:text-slate-300">{card.tone}</p>

            <div className="mt-5 grid gap-4">
              <StructureSnippet
                title="Affirmative"
                structure={card.structures.affirmative}
                variant="positive"
              />
              <StructureSnippet
                title="Negative"
                structure={card.structures.negative}
                variant="negative"
              />
              <StructureSnippet
                title="Question"
                structure={card.structures.question}
                variant="question"
              />
            </div>

            {card.contractions?.length ? (
              <div className="mt-5 rounded-2xl bg-white dark:bg-slate-900 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Contractions
                </p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {card.contractions.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-5 rounded-2xl bg-white dark:bg-slate-900 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Examples
              </p>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {card.examples.map((example) => (
                  <li key={example}>• {example}</li>
                ))}
              </ul>
            </div>

            {card.notes?.length ? (
              <div className="mt-4 rounded-2xl bg-violet-50 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-violet-700">
                  Notes
                </p>
                <ul className="mt-2 space-y-2 text-sm text-violet-950">
                  {card.notes.map((note) => (
                    <li key={note}>• {note}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl bg-blue-50 dark:bg-blue-950/40 p-6">
        <h3 className="text-xl font-black text-blue-950 dark:text-blue-100">Comparison blocks</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {explanation.comparisonBlocks.map((block) => (
            <div key={block.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">{block.title}</h4>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{block.explanation}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {block.examples.map((example) => (
                  <li key={example}>• {example}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-semibold text-blue-800 dark:text-blue-200">{block.takeaway}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <ContentSection title="Personalized examples" items={explanation.personalizedExamples} />
      </div>

      <MistakesSection mistakes={explanation.explainedMistakes} />

      <PracticeSection items={explanation.practiceItems} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="Quick memory" items={explanation.quickMemory} variant="amber" />
        <ContentSection title="Related topics" items={explanation.relatedTopics} />
      </div>
    </>
  );
}

function QuestionBuilderContent({
  explanation
}: {
  explanation: GrammarTopicQuestionBuilderFullExplanation;
}) {
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection
          title="What this cheat sheet helps you build"
          items={explanation.whatItDoes}
        />
        <ContentSection
          title="Universal question formula"
          items={explanation.universalFormula}
          variant="highlight"
        />
      </div>

      <div className="mt-8">
        <ContentSection
          title="Fast build steps"
          items={explanation.decisionSteps}
          variant="amber"
        />
      </div>

      <div className="mt-8 rounded-3xl bg-blue-50 dark:bg-blue-950/40 p-6">
        <h3 className="text-xl font-black text-blue-950 dark:text-blue-100">Builder by system</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {explanation.builderCards.map((card) => (
            <div key={card.title} className="rounded-2xl bg-white dark:bg-slate-900 p-5 shadow-sm">
              <h4 className="text-xl font-black text-slate-950 dark:text-slate-50">{card.title}</h4>
              <div className="mt-4 grid gap-3">
                <StructureSnippet
                  title="Yes/No pattern"
                  structure={card.yesNoPattern}
                  variant="question"
                />
                <StructureSnippet
                  title="WH pattern"
                  structure={card.whPattern}
                  variant="question"
                />
              </div>
              <p className="mt-4 text-slate-700 dark:text-slate-300">{card.use}</p>
              <SemanticCallout variant="neutral" title="Examples" className="mt-4">
                <ul className="space-y-2 text-sm">
                  {card.examples.map((example) => (
                    <li key={example}>• {example}</li>
                  ))}
                </ul>
              </SemanticCallout>
              {card.shortAnswers?.length ? (
                <SemanticCallout variant="success" title="Short answers" className="mt-4">
                  <ul className="space-y-2 text-sm">
                    {card.shortAnswers.map((answer) => (
                      <li key={answer}>• {answer}</li>
                    ))}
                  </ul>
                </SemanticCallout>
              ) : null}
              {card.notes?.length ? (
                <SemanticCallout variant="accent" title="Notes" className="mt-4">
                  <ul className="space-y-2 text-sm">
                    {card.notes.map((note) => (
                      <li key={note}>• {note}</li>
                    ))}
                  </ul>
                </SemanticCallout>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <ContentSection
          title="Short answers"
          items={explanation.shortAnswerRules}
          variant="amber"
        />
      </div>

      <MistakesSection mistakes={explanation.commonMistakes} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="Quick memory" items={explanation.quickMemory} variant="amber" />
        <RelatedTopicLinksSection links={explanation.relatedTopicLinks} />
      </div>
    </>
  );
}

function ConditionalsOverviewContent({
  explanation
}: {
  explanation: GrammarTopicConditionalsOverviewFullExplanation;
}) {
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection
          title="What this cheat sheet helps you choose"
          items={explanation.whatItDoes}
        />
        <ContentSection
          title="Fast decision rules"
          items={explanation.decisionRules}
          variant="highlight"
        />
      </div>

      <div className="mt-8 rounded-3xl bg-blue-50 dark:bg-blue-950/40 p-6">
        <h3 className="text-xl font-black text-blue-950 dark:text-blue-100">Conditionals map</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {explanation.conditionalCards.map((card) => (
            <div key={card.title} className="rounded-2xl bg-white dark:bg-slate-900 p-5 shadow-sm">
              <div className="flex flex-wrap items-center gap-3">
                <h4 className="text-xl font-black text-slate-950 dark:text-slate-50">{card.title}</h4>
                <span className="rounded-full bg-blue-100 dark:bg-blue-900/60 px-3 py-1 text-xs font-bold text-blue-800 dark:text-blue-200">
                  {card.conditionalType}
                </span>
              </div>

              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Main use
              </p>
              <p className="mt-1 text-slate-900 dark:text-slate-100">{card.mainUse}</p>

              <div className="mt-4">
                <StructureSnippet
                  title="Core pattern"
                  structure={card.pattern}
                  variant="question"
                />
              </div>

              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Meaning
              </p>
              <p className="mt-1 text-slate-700 dark:text-slate-300">{card.meaning}</p>

              <div className="mt-4 rounded-2xl bg-slate-50 dark:bg-slate-800 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Examples
                </p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {card.examples.map((example) => (
                    <li key={example}>• {example}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
                  Quick contrast
                </p>
                <p className="mt-2 text-sm text-amber-950 dark:text-amber-100">{card.contrast}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MistakesSection mistakes={explanation.commonMistakes} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="Quick memory" items={explanation.quickMemory} variant="amber" />
        <RelatedTopicLinksSection links={explanation.relatedTopicLinks} />
      </div>
    </>
  );
}

function WhQuestionsContent({
  explanation
}: {
  explanation: GrammarTopicWhQuestionsFullExplanation;
}) {
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="What WH questions do" items={explanation.whatItDoes} />
        <InfoPanel
          title="Core rule"
          body={explanation.coreRule}
          containerClassName="bg-slate-950"
          titleClassName="text-white"
          bodyClassName="text-slate-100"
        />
      </div>

      <WhWordTable rows={explanation.whWordTable} />

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {explanation.structureTables.map((table) => (
          <StructureCard key={table.title} table={table} />
        ))}
      </div>

      <div className="mt-8 rounded-3xl bg-violet-50 p-6">
        <h3 className="text-xl font-black text-violet-950">Special cases</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {explanation.specialCases.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">{item.title}</h4>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{item.explanation}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {item.examples.map((example) => (
                  <li key={example}>• {example}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-3xl bg-blue-50 dark:bg-blue-950/40 p-6">
        <h3 className="text-xl font-black text-blue-950 dark:text-blue-100">Short compare with other question types</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {explanation.questionTypeComparisons.map((comparison) => (
            <div key={comparison.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">{comparison.title}</h4>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{comparison.explanation}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {comparison.examples.map((example) => (
                  <li key={example}>• {example}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <SideBySideExamples rows={explanation.sideBySideExamples} />

      <MistakesSection mistakes={explanation.commonMistakes} />

      <PracticeSection items={explanation.practiceItems} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="Quick memory" items={explanation.quickMemory} variant="amber" />
        <ContentSection title="Related topics" items={explanation.relatedTopics} />
      </div>
    </>
  );
}

function EmbeddedWhClausesContent({
  explanation
}: {
  explanation: GrammarTopicEmbeddedWhClausesFullExplanation;
}) {
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection
          title="What embedded WH clauses do"
          items={explanation.whatItDoes}
        />
        <InfoPanel
          title="Core rule"
          body={explanation.coreRule}
          containerClassName="bg-slate-950"
          titleClassName="text-white"
          bodyClassName="text-slate-100"
        />
      </div>

      <DirectVsEmbeddedTable rows={explanation.directVsEmbeddedTable} />

      <div className="mt-8 rounded-3xl bg-blue-50 dark:bg-blue-950/40 p-6">
        <h3 className="text-xl font-black text-blue-950 dark:text-blue-100">Common intro patterns</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {explanation.commonIntroPatterns.map((pattern) => (
            <div key={pattern.pattern} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">{pattern.pattern}</h4>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{pattern.use}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {pattern.examples.map((example) => (
                  <li key={example}>• {example}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-3xl bg-violet-50 p-6">
        <h3 className="text-xl font-black text-violet-950">Short usage block</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {explanation.usageBlocks.map((block) => (
            <div key={block.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">{block.title}</h4>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{block.explanation}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {block.examples.map((example) => (
                  <li key={example}>• {example}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <EmbeddedWhWordTable rows={explanation.whWordUsage} />

      <MistakesSection mistakes={explanation.commonMistakes} />

      <TransformationTable rows={explanation.transformations} />

      <PracticeSection items={explanation.practiceItems} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="Quick memory" items={explanation.quickMemory} variant="amber" />
        <ContentSection title="Related topics" items={explanation.relatedTopics} />
      </div>
    </>
  );
}

function EnglishAuxiliariesContent({
  explanation
}: {
  explanation: GrammarTopicEnglishAuxiliariesFullExplanation;
}) {
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="What auxiliaries do" items={explanation.whatItDoes} />
        <ContentSection title="Quick memory" items={explanation.quickMemory} variant="highlight" />
      </div>

      <AuxiliaryReferenceTable rows={explanation.auxiliaryReferenceTable} />

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {explanation.auxiliaryGroups.map((group) => (
          <div key={group.title} className="rounded-3xl bg-slate-50 dark:bg-slate-800 p-6">
            <h3 className="text-xl font-black text-slate-950 dark:text-slate-50">{group.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{group.use}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {group.structures.map((structure) => (
                <li key={structure}>• {structure}</li>
              ))}
            </ul>
            <div className="mt-4 rounded-2xl bg-white dark:bg-slate-900 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Examples
              </p>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {group.examples.map((example) => (
                  <li key={example}>• {example}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl bg-blue-50 dark:bg-blue-950/40 p-6">
        <h3 className="text-xl font-black text-blue-950 dark:text-blue-100">Pattern rules</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {explanation.patternRules.map((rule) => (
            <div key={rule.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">{rule.title}</h4>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{rule.rule}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {rule.examples.map((example) => (
                  <li key={example}>• {example}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {explanation.contractionTables.map((table) => (
          <ContractionTable key={table.title} table={table} />
        ))}
      </div>

      <div className="mt-8 rounded-3xl bg-violet-50 p-6">
        <h3 className="text-xl font-black text-violet-950">Quick comparisons</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {explanation.quickComparisons.map((comparison) => (
            <div key={comparison.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">{comparison.title}</h4>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{comparison.explanation}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {comparison.examples.map((example) => (
                  <li key={example}>• {example}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <MistakesSection mistakes={explanation.commonMistakes} />

      <div className="mt-8 rounded-3xl bg-emerald-50 dark:bg-emerald-950/40 p-6">
        <h3 className="text-xl font-black text-emerald-950 dark:text-emerald-100">
          {explanation.modalLinkBlock.title}
        </h3>
        <p className="mt-2 text-emerald-900 dark:text-emerald-100">{explanation.modalLinkBlock.explanation}</p>
        <ul className="mt-4 space-y-2 text-sm text-emerald-950 dark:text-emerald-50">
          {explanation.modalLinkBlock.examples.map((example) => (
            <li key={example}>• {example}</li>
          ))}
        </ul>
      </div>

      <PracticeSection items={explanation.practiceItems} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="Quick memory" items={explanation.quickMemory} variant="amber" />
        <ContentSection title="Related topics" items={explanation.relatedTopics} />
      </div>
    </>
  );
}

function PronounsPossessivesContent({
  explanation
}: {
  explanation: GrammarTopicPronounsPossessivesFullExplanation;
}) {
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="What this group does" items={explanation.whatItDoes} />
        <ContentSection title="Quick rules" items={explanation.quickRules} variant="highlight" />
      </div>

      <PronounReferenceTable rows={explanation.mainReferenceTable} />

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {explanation.functionBlocks.map((block) => (
          <div key={block.title} className="rounded-3xl bg-slate-50 dark:bg-slate-800 p-6">
            <h3 className="text-xl font-black text-slate-950 dark:text-slate-50">{block.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{block.use}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {block.examples.map((example) => (
                <li key={example}>• {example}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl bg-violet-50 p-6">
        <h3 className="text-xl font-black text-violet-950">Focus words</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {explanation.focusWords.map((word) => (
            <div key={word.word} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">{word.word}</h4>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {word.type}
              </p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{word.meaningHint}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {word.examples.map((example) => (
                  <li key={example}>• {example}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-3xl bg-blue-50 dark:bg-blue-950/40 p-6">
        <h3 className="text-xl font-black text-blue-950 dark:text-blue-100">Contrast blocks</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {explanation.contrastBlocks.map((block) => (
            <div key={block.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">{block.title}</h4>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{block.explanation}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {block.examples.map((example) => (
                  <li key={example}>• {example}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <MistakesSection mistakes={explanation.commonMistakes} />

      <PracticeSection items={explanation.practiceItems} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="Quick memory" items={explanation.quickMemory} variant="amber" />
        <ContentSection title="Related topics" items={explanation.relatedTopics} />
      </div>
    </>
  );
}

function StructureDifferencesContent({
  explanation
}: {
  explanation: GrammarTopicStructureDifferencesFullExplanation;
}) {
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection
          title="What this page helps you decide"
          items={explanation.whatItDoes}
        />
        <ContentSection
          title="Decision rules"
          items={explanation.decisionRules}
          variant="highlight"
        />
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {explanation.comparisonCards.map((card) => (
          <div key={card.title} className="rounded-3xl bg-slate-50 dark:bg-slate-800 p-6">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-black text-slate-950 dark:text-slate-50">{card.title}</h3>
              <span className="rounded-full bg-blue-100 dark:bg-blue-900/60 px-3 py-1 text-xs font-bold text-blue-800 dark:text-blue-200">
                {card.structureA}
              </span>
              <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-800">
                {card.structureB}
              </span>
            </div>

            <p className="mt-4 text-slate-700 dark:text-slate-300">{card.mainDifference}</p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
                  Choose {card.structureA} when...
                </p>
                <p className="mt-2 text-blue-950 dark:text-blue-100">{card.whenToUseA}</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
                  Example
                </p>
                <p className="mt-1 text-slate-700 dark:text-slate-300">{card.exampleA}</p>
              </div>

              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-violet-700">
                  Choose {card.structureB} when...
                </p>
                <p className="mt-2 text-violet-950">{card.whenToUseB}</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-violet-700">
                  Example
                </p>
                <p className="mt-1 text-slate-700 dark:text-slate-300">{card.exampleB}</p>
              </div>
            </div>

            {card.signals?.length ? (
              <div className="mt-5 rounded-2xl bg-white dark:bg-slate-900 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Signals
                </p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {card.signals.map((signal) => (
                    <li key={signal}>• {signal}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {card.quickMemory?.length ? (
              <div className="mt-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
                  Quick memory
                </p>
                <ul className="mt-2 space-y-2 text-sm text-amber-950 dark:text-amber-100">
                  {card.quickMemory.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-6">
        {explanation.comparisonTables.map((table) => (
          <ContrastTable key={table.title} title={table.title} rows={table.rows} />
        ))}
      </div>

      <MistakesSection mistakes={explanation.commonMistakes} />

      <PracticeSection items={explanation.practiceItems} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="Quick memory" items={explanation.quickMemory} variant="amber" />
        <ContentSection title="Related topics" items={explanation.relatedTopics} />
      </div>
    </>
  );
}

function ArticlesDeterminersContent({
  explanation
}: {
  explanation: GrammarTopicArticlesDeterminersFullExplanation;
}) {
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection
          title="What this page helps you decide"
          items={explanation.whatItDoes}
        />
        <ContentSection
          title="Article decision rules"
          items={explanation.articleDecisionRules}
          variant="highlight"
        />
      </div>

      <ArticlesReferenceTable rows={explanation.articleReferenceTable} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection
          title="Countable vs uncountable nouns"
          items={explanation.countableUncountableGuidance}
          variant="amber"
        />
        <ContentSection title="Quick memory" items={explanation.quickMemory} />
      </div>

      <div className="mt-8 rounded-3xl bg-blue-50 dark:bg-blue-950/40 p-6">
        <h3 className="text-xl font-black text-blue-950 dark:text-blue-100">Determiner guide</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {explanation.determinerCards.map((card) => (
            <div key={card.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">{card.title}</h4>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Main use
              </p>
              <p className="mt-1 text-slate-700 dark:text-slate-300">{card.mainUse}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Rule
              </p>
              <p className="mt-1 text-slate-700 dark:text-slate-300">{card.rule}</p>
              <div className="mt-4 rounded-2xl bg-slate-50 dark:bg-slate-800 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Examples
                </p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {card.examples.map((example) => (
                    <li key={example}>• {example}</li>
                  ))}
                </ul>
              </div>
              <SemanticCallout variant="danger" title="Common trap" className="mt-4">
                <p>{card.commonTrap}</p>
              </SemanticCallout>
            </div>
          ))}
        </div>
      </div>

      <MistakesSection mistakes={explanation.commonMistakes} />

      <PracticeSection items={explanation.practiceItems} />

      <div className="mt-8">
        <ContentSection title="Related topics" items={explanation.relatedTopics} />
      </div>
    </>
  );
}

function GerundsInfinitivesContent({
  explanation
}: {
  explanation: GrammarTopicGerundsInfinitivesFullExplanation;
}) {
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection
          title="What this page helps you decide"
          items={explanation.whatItDoes}
        />
        <ContentSection
          title="Core decision rules"
          items={explanation.decisionRules}
          variant="highlight"
        />
      </div>

      <div className="mt-8 rounded-3xl bg-blue-50 dark:bg-blue-950/40 p-6">
        <h3 className="text-xl font-black text-blue-950 dark:text-blue-100">Practical patterns</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {explanation.patternCards.map((card) => (
            <div key={card.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">{card.title}</h4>
              <p className="mt-3 rounded-2xl bg-slate-50 dark:bg-slate-800 p-3 font-semibold text-slate-900 dark:text-slate-100">
                {card.pattern}
              </p>
              <p className="mt-4 text-slate-700 dark:text-slate-300">{card.use}</p>
              <SemanticCallout variant="success" title="Common verbs" className="mt-4">
                <p>{card.commonVerbs.join(", ")}</p>
              </SemanticCallout>
              <SemanticCallout variant="neutral" title="Examples" className="mt-4">
                <ul className="space-y-2 text-sm">
                  {card.examples.map((example) => (
                    <li key={example}>• {example}</li>
                  ))}
                </ul>
              </SemanticCallout>
              <SemanticCallout variant="danger" title="Common trap" className="mt-4">
                <p>{card.commonTrap}</p>
              </SemanticCallout>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-3xl bg-violet-50 p-6">
        <h3 className="text-xl font-black text-violet-950">
          Meaning-change patterns
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {explanation.meaningChangeCards.map((card) => (
            <div key={card.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">{card.title}</h4>
              <div className="mt-4 grid gap-4">
                <div className="rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 p-4">
                  <p className="font-semibold text-blue-900 dark:text-blue-100">{card.firstPattern}</p>
                  <p className="mt-2 text-blue-950 dark:text-blue-100">{card.firstMeaning}</p>
                  <p className="mt-3 text-slate-700 dark:text-slate-300">{card.firstExample}</p>
                </div>
                <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4">
                  <p className="font-semibold text-violet-900">{card.secondPattern}</p>
                  <p className="mt-2 text-violet-950">{card.secondMeaning}</p>
                  <p className="mt-3 text-slate-700 dark:text-slate-300">{card.secondExample}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MistakesSection mistakes={explanation.commonMistakes} />

      <PracticeSection items={explanation.practiceItems} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="Quick memory" items={explanation.quickMemory} variant="amber" />
        <ContentSection title="Related topics" items={explanation.relatedTopics} />
      </div>
    </>
  );
}

function PassiveVoiceContent({
  explanation
}: {
  explanation: GrammarTopicPassiveVoiceFullExplanation;
}) {
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection
          title="What passive voice helps you express"
          items={explanation.whatItDoes}
        />
        <ContentSection
          title="Active vs passive decision rules"
          items={explanation.decisionRules}
          variant="highlight"
        />
      </div>

      <div className="mt-8">
        <ContentSection
          title="Core passive structure"
          items={explanation.coreStructure}
          variant="amber"
        />
      </div>

      <div className="mt-8 rounded-3xl bg-blue-50 dark:bg-blue-950/40 p-6">
        <h3 className="text-xl font-black text-blue-950 dark:text-blue-100">Active vs passive</h3>
        <div className="mt-4 grid gap-4">
          {explanation.activeVsPassive.map((comparison) => (
            <div key={comparison.passive} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
              <div className="grid gap-4 md:grid-cols-2">
                <SemanticCallout variant="success" title="Active">
                  <p>{comparison.active}</p>
                </SemanticCallout>
                <SemanticCallout variant="info" title="Passive">
                  <p>{comparison.passive}</p>
                </SemanticCallout>
              </div>
              <p className="mt-4 text-slate-700 dark:text-slate-300">{comparison.whyPassiveWorks}</p>
            </div>
          ))}
        </div>
      </div>

      <PassivePatternSection
        title="Practical passive patterns"
        cards={explanation.passivePatterns}
      />

      <PassivePatternSection
        title="Modal passive"
        cards={explanation.modalPassivePatterns}
      />

      <div className="mt-8">
        <ContentSection title="Agent with by" items={explanation.byAgentRules} />
      </div>

      <MistakesSection mistakes={explanation.commonMistakes} />

      <PracticeSection items={explanation.practiceItems} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="Quick memory" items={explanation.quickMemory} variant="amber" />
        <ContentSection title="Related topics" items={explanation.relatedTopics} />
      </div>
    </>
  );
}

function ReportedSpeechContent({
  explanation
}: {
  explanation: GrammarTopicReportedSpeechFullExplanation;
}) {
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection
          title="What reported speech helps you communicate"
          items={explanation.whatItDoes}
        />
        <ContentSection
          title="Core decision rules"
          items={explanation.decisionRules}
          variant="highlight"
        />
      </div>

      <ReportedSpeechPairSection
        title="Direct vs reported speech"
        pairs={explanation.directVsReported}
      />

      <div className="mt-8 rounded-3xl bg-blue-50 dark:bg-blue-950/40 p-6">
        <h3 className="text-xl font-black text-blue-950 dark:text-blue-100">Reporting verbs</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {explanation.reportingVerbCards.map((card) => (
            <div key={card.verb} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">{card.verb}</h4>
              <p className="mt-3 rounded-2xl bg-slate-50 dark:bg-slate-800 p-3 font-semibold text-slate-900 dark:text-slate-100">
                {card.pattern}
              </p>
              <p className="mt-4 text-slate-700 dark:text-slate-300">{card.use}</p>
              <SemanticCallout variant="info" title="Examples" className="mt-4">
                <ul className="space-y-2 text-sm">
                  {card.examples.map((example) => (
                    <li key={example}>• {example}</li>
                  ))}
                </ul>
              </SemanticCallout>
              {card.commonTrap ? (
                <SemanticCallout variant="danger" title="Common trap" className="mt-4">
                  <p>{card.commonTrap}</p>
                </SemanticCallout>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <ReportedSpeechPairSection
        title="Statement patterns"
        pairs={explanation.statementPatterns}
      />

      <ReportedSpeechPairSection
        title="Reported questions"
        pairs={explanation.questionPatterns}
      />

      <ReportedSpeechPairSection
        title="Requests and instructions"
        pairs={explanation.requestInstructionPatterns}
      />

      <ReportedSpeechTenseShiftTable rows={explanation.tenseShiftGuide} />

      <MistakesSection mistakes={explanation.commonMistakes} />

      <PracticeSection items={explanation.practiceItems} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="Quick memory" items={explanation.quickMemory} variant="amber" />
        <ContentSection title="Related topics" items={explanation.relatedTopics} />
      </div>
    </>
  );
}

function ComparativesSuperlativesContent({
  explanation
}: {
  explanation: GrammarTopicComparativesSuperlativesFullExplanation;
}) {
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection
          title="What this page helps you compare"
          items={explanation.whatItDoes}
        />
        <ContentSection
          title="Decision rules"
          items={explanation.decisionRules}
          variant="highlight"
        />
      </div>

      <ComparisonPatternSection
        title="Comparative patterns"
        cards={explanation.comparativePatterns}
      />

      <ComparisonPatternSection
        title="Superlative patterns"
        cards={explanation.superlativePatterns}
      />

      <IrregularComparisonTable rows={explanation.irregularForms} />

      <ComparisonPatternSection
        title="Equality and less"
        cards={explanation.equalityLessPatterns}
      />

      <MistakesSection mistakes={explanation.commonMistakes} />

      <PracticeSection items={explanation.practiceItems} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="Quick memory" items={explanation.quickMemory} variant="amber" />
        <ContentSection title="Related topics" items={explanation.relatedTopics} />
      </div>
    </>
  );
}

function AdjectivesAdverbsContent({
  explanation
}: {
  explanation: GrammarTopicAdjectivesAdverbsFullExplanation;
}) {
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection
          title="What this page helps you decide"
          items={explanation.whatItDoes}
        />
        <ContentSection
          title="Adjective / adverb decision rules"
          items={explanation.decisionRules}
          variant="highlight"
        />
      </div>

      <AdjectivesAdverbsReferenceTable rows={explanation.referenceTable} />

      <AdjectiveAdverbPatternSection
        title="Adjective patterns"
        cards={explanation.adjectivePatterns}
      />

      <AdjectiveAdverbPatternSection
        title="Adverb patterns"
        cards={explanation.adverbPatterns}
      />

      <AdjectiveAdverbPatternSection
        title="Linking verbs"
        cards={explanation.linkingVerbCards}
      />

      <MistakesSection mistakes={explanation.commonMistakes} />

      <PracticeSection items={explanation.practiceItems} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="Quick memory" items={explanation.quickMemory} variant="amber" />
        <ContentSection title="Related topics" items={explanation.relatedTopics} />
      </div>
    </>
  );
}

function ConnectorsDiscourseMarkersContent({
  explanation
}: {
  explanation: GrammarTopicConnectorsDiscourseMarkersFullExplanation;
}) {
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection
          title="What this page helps you communicate"
          items={explanation.whatItDoes}
        />
        <ContentSection
          title="Connector decision rules"
          items={explanation.decisionRules}
          variant="highlight"
        />
      </div>

      <ConnectorsReferenceTable rows={explanation.referenceTable} />

      <ConnectorGroupSection cards={explanation.connectorGroups} />

      <ConnectorPunctuationNotes notes={explanation.punctuationNotes} />

      <MistakesSection mistakes={explanation.commonMistakes} />

      <PracticeSection items={explanation.practiceItems} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="Quick memory" items={explanation.quickMemory} variant="amber" />
        <ContentSection title="Related topics" items={explanation.relatedTopics} />
      </div>
    </>
  );
}

function PracticalWritingPatternsContent({
  explanation
}: {
  explanation: GrammarTopicPracticalWritingPatternsFullExplanation;
}) {
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection
          title="What this page helps you write"
          items={explanation.whatItDoes}
        />
        <ContentSection
          title="Writing pattern decision rules"
          items={explanation.decisionRules}
          variant="highlight"
        />
      </div>

      <WritingPatternsReferenceTable rows={explanation.referenceTable} />

      <WritingPatternGroupSection cards={explanation.patternGroups} />

      <MistakesSection mistakes={explanation.commonMistakes} />

      <PracticeSection items={explanation.practiceItems} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="Quick memory" items={explanation.quickMemory} variant="amber" />
        <ContentSection title="Related topics" items={explanation.relatedTopics} />
      </div>
    </>
  );
}

function PhrasalVerbsContent({
  explanation
}: {
  explanation: GrammarTopicPhrasalVerbsFullExplanation;
}) {
  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection
          title="What this page helps you understand and say"
          items={explanation.whatItDoes}
        />
        <ContentSection
          title="Phrasal verb decision rules"
          items={explanation.decisionRules}
          variant="highlight"
        />
      </div>

      <PhrasalVerbsReferenceTable rows={explanation.referenceTable} />

      <PhrasalVerbGroupSection cards={explanation.phrasalVerbGroups} />

      <PhrasalVerbUsageNotes notes={explanation.usageNotes} />

      <MistakesSection mistakes={explanation.commonMistakes} />

      <PracticeSection items={explanation.practiceItems} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContentSection title="Quick memory" items={explanation.quickMemory} variant="amber" />
        <ContentSection title="Related topics" items={explanation.relatedTopics} />
      </div>
    </>
  );
}

function SideBySideExamples({
  rows
}: {
  rows: GrammarTopicQuestionSideBySideExample[];
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
      <div className="bg-slate-950 px-6 py-4">
        <h3 className="text-xl font-black text-white">Side-by-side examples</h3>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-slate-900">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              {["Tense", "Yes/No question", "WH question"].map((heading) => (
                <th
                  key={heading}
                  className="px-4 py-3 text-left font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row) => (
              <tr key={row.tense}>
                <td className="px-4 py-4 font-bold text-slate-950 dark:text-slate-50">{row.tense}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.yesNo}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.wh}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ArticlesReferenceTable({
  rows
}: {
  rows: GrammarTopicArticlesDeterminersFullExplanation["articleReferenceTable"];
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
      <div className="bg-slate-950 px-6 py-4">
        <h3 className="text-xl font-black text-white">Article reference table</h3>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-slate-900">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              {["Determiner", "Use", "Pattern", "Example"].map((heading) => (
                <th
                  key={heading}
                  className="px-4 py-3 text-left font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row) => (
              <tr key={`${row.determiner}-${row.example}`}>
                <td className="px-4 py-4 font-bold text-slate-950 dark:text-slate-50">
                  {row.determiner}
                </td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.use}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.pattern}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PassivePatternSection({
  title,
  cards
}: {
  title: string;
  cards: GrammarTopicPassiveVoiceFullExplanation["passivePatterns"];
}) {
  return (
    <div className="mt-8 rounded-3xl bg-slate-50 dark:bg-slate-800 p-6">
      <h3 className="text-xl font-black text-slate-950 dark:text-slate-50">{title}</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <div key={card.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-slate-100">{card.title}</h4>
            <p className="mt-3 rounded-2xl bg-slate-100 dark:bg-slate-800 p-3 font-semibold text-slate-900 dark:text-slate-100">
              {card.structure}
            </p>
            <p className="mt-4 text-slate-700 dark:text-slate-300">{card.use}</p>
            <div className="mt-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
                Examples
              </p>
              <ul className="mt-2 space-y-2 text-sm text-blue-950 dark:text-blue-100">
                {card.examples.map((example) => (
                  <li key={example}>• {example}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportedSpeechPairSection({
  title,
  pairs
}: {
  title: string;
  pairs: GrammarTopicReportedSpeechFullExplanation["directVsReported"];
}) {
  return (
    <div className="mt-8 rounded-3xl bg-slate-50 dark:bg-slate-800 p-6">
      <h3 className="text-xl font-black text-slate-950 dark:text-slate-50">{title}</h3>
      <div className="mt-4 grid gap-4">
        {pairs.map((pair) => (
          <div key={`${title}-${pair.direct}`} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <SemanticCallout variant="success" title="Direct">
                <p>{pair.direct}</p>
              </SemanticCallout>
              <SemanticCallout variant="info" title="Reported">
                <p>{pair.reported}</p>
              </SemanticCallout>
            </div>
            <p className="mt-4 text-slate-700 dark:text-slate-300">{pair.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportedSpeechTenseShiftTable({
  rows
}: {
  rows: GrammarTopicReportedSpeechFullExplanation["tenseShiftGuide"];
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
      <div className="bg-slate-950 px-6 py-4">
        <h3 className="text-xl font-black text-white">Practical tense shift guide</h3>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-slate-900">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              {["Direct form", "Reported form", "Example"].map((heading) => (
                <th
                  key={heading}
                  className="px-4 py-3 text-left font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row) => (
              <tr key={`${row.directForm}-${row.reportedForm}`}>
                <td className="px-4 py-4 font-bold text-slate-950 dark:text-slate-50">
                  {row.directForm}
                </td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.reportedForm}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ComparisonPatternSection({
  title,
  cards
}: {
  title: string;
  cards: GrammarTopicComparativesSuperlativesFullExplanation["comparativePatterns"];
}) {
  return (
    <div className="mt-8 rounded-3xl bg-slate-50 dark:bg-slate-800 p-6">
      <h3 className="text-xl font-black text-slate-950 dark:text-slate-50">{title}</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <div key={card.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-slate-100">{card.title}</h4>
            <p className="mt-3 rounded-2xl bg-slate-100 dark:bg-slate-800 p-3 font-semibold text-slate-900 dark:text-slate-100">
              {card.pattern}
            </p>
            <p className="mt-4 text-slate-700 dark:text-slate-300">{card.use}</p>
            <SemanticCallout variant="info" title="Examples" className="mt-4">
              <ul className="space-y-2 text-sm">
                {card.examples.map((example) => (
                  <li key={example}>• {example}</li>
                ))}
              </ul>
            </SemanticCallout>
            <SemanticCallout variant="danger" title="Common trap" className="mt-4">
              <p>{card.commonTrap}</p>
            </SemanticCallout>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdjectivesAdverbsReferenceTable({
  rows
}: {
  rows: GrammarTopicAdjectivesAdverbsFullExplanation["referenceTable"];
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
      <div className="bg-slate-950 px-6 py-4">
        <h3 className="text-xl font-black text-white">Adjective vs adverb reference</h3>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-slate-900">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              {["Form", "Job", "Pattern", "Example"].map((heading) => (
                <th
                  key={heading}
                  className="px-4 py-3 text-left font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row) => (
              <tr key={row.form}>
                <td className="px-4 py-4 font-bold text-slate-950 dark:text-slate-50">{row.form}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.job}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.pattern}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AdjectiveAdverbPatternSection({
  title,
  cards
}: {
  title: string;
  cards: GrammarTopicAdjectivesAdverbsFullExplanation["adjectivePatterns"];
}) {
  return (
    <div className="mt-8 rounded-3xl bg-slate-50 dark:bg-slate-800 p-6">
      <h3 className="text-xl font-black text-slate-950 dark:text-slate-50">{title}</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <div key={card.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-slate-100">{card.title}</h4>
            <p className="mt-3 rounded-2xl bg-slate-100 dark:bg-slate-800 p-3 font-semibold text-slate-900 dark:text-slate-100">
              {card.pattern}
            </p>
            <p className="mt-4 text-slate-700 dark:text-slate-300">{card.use}</p>
            <SemanticCallout variant="info" title="Examples" className="mt-4">
              <ul className="space-y-2 text-sm">
                {card.examples.map((example) => (
                  <li key={example}>• {example}</li>
                ))}
              </ul>
            </SemanticCallout>
            <SemanticCallout variant="danger" title="Common trap" className="mt-4">
              <p>{card.commonTrap}</p>
            </SemanticCallout>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConnectorsReferenceTable({
  rows
}: {
  rows: GrammarTopicConnectorsDiscourseMarkersFullExplanation["referenceTable"];
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
      <div className="bg-slate-950 px-6 py-4">
        <h3 className="text-xl font-black text-white">Connector reference table</h3>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-slate-900">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              {["Group", "Connectors", "Use", "Example"].map((heading) => (
                <th
                  key={heading}
                  className="px-4 py-3 text-left font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row) => (
              <tr key={row.group}>
                <td className="px-4 py-4 font-bold text-slate-950 dark:text-slate-50">{row.group}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.connectors}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.use}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ConnectorGroupSection({
  cards
}: {
  cards: GrammarTopicConnectorsDiscourseMarkersFullExplanation["connectorGroups"];
}) {
  return (
    <div className="mt-8 rounded-3xl bg-slate-50 dark:bg-slate-800 p-6">
      <h3 className="text-xl font-black text-slate-950 dark:text-slate-50">Connector groups</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <div key={card.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-slate-100">{card.title}</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {card.connectors.map((connector) => (
                <span
                  key={connector}
                  className="rounded-full bg-blue-50 dark:bg-blue-950/40 px-3 py-1 text-sm font-semibold text-blue-700 dark:text-blue-300"
                >
                  {connector}
                </span>
              ))}
            </div>
            <p className="mt-4 text-slate-700 dark:text-slate-300">{card.use}</p>
            <div className="mt-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
                Examples
              </p>
              <ul className="mt-2 space-y-2 text-sm text-blue-950 dark:text-blue-100">
                {card.examples.map((example) => (
                  <li key={example}>• {example}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
                Punctuation / position
              </p>
              <p className="mt-1 text-amber-950 dark:text-amber-100">{card.punctuationNote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConnectorPunctuationNotes({
  notes
}: {
  notes: GrammarTopicConnectorsDiscourseMarkersFullExplanation["punctuationNotes"];
}) {
  return (
    <div className="mt-8 rounded-3xl bg-amber-50 dark:bg-amber-950/40 p-6">
      <h3 className="text-xl font-black text-amber-950 dark:text-amber-100">Punctuation notes</h3>
      <div className="mt-4 grid gap-4">
        {notes.map((note) => (
          <div key={note.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-slate-100">{note.title}</h4>
            <p className="mt-2 text-slate-700 dark:text-slate-300">{note.rule}</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {note.examples.map((example) => (
                <li key={example}>• {example}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function WritingPatternsReferenceTable({
  rows
}: {
  rows: GrammarTopicPracticalWritingPatternsFullExplanation["referenceTable"];
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
      <div className="bg-slate-950 px-6 py-4">
        <h3 className="text-xl font-black text-white">Writing patterns reference table</h3>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-slate-900">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              {["Goal", "Pattern", "Example", "Use when"].map((heading) => (
                <th
                  key={heading}
                  className="px-4 py-3 text-left font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row) => (
              <tr key={row.goal}>
                <td className="px-4 py-4 font-bold text-slate-950 dark:text-slate-50">{row.goal}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.pattern}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.example}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.useWhen}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function WritingPatternGroupSection({
  cards
}: {
  cards: GrammarTopicPracticalWritingPatternsFullExplanation["patternGroups"];
}) {
  return (
    <div className="mt-8 rounded-3xl bg-slate-50 dark:bg-slate-800 p-6">
      <h3 className="text-xl font-black text-slate-950 dark:text-slate-50">Writing pattern groups</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <div key={card.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-slate-100">{card.title}</h4>
            <p className="mt-2 text-slate-700 dark:text-slate-300">{card.situation}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {card.patterns.map((pattern) => (
                <span
                  key={pattern}
                  className="rounded-full bg-blue-50 dark:bg-blue-950/40 px-3 py-1 text-sm font-semibold text-blue-700 dark:text-blue-300"
                >
                  {pattern}
                </span>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
                Examples
              </p>
              <ul className="mt-2 space-y-2 text-sm text-blue-950 dark:text-blue-100">
                {card.examples.map((example) => (
                  <li key={example}>• {example}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
                Tone note
              </p>
              <p className="mt-1 text-amber-950 dark:text-amber-100">{card.toneNote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhrasalVerbsReferenceTable({
  rows
}: {
  rows: GrammarTopicPhrasalVerbsFullExplanation["referenceTable"];
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
      <div className="bg-slate-950 px-6 py-4">
        <h3 className="text-xl font-black text-white">Phrasal verbs reference table</h3>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-slate-900">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              {["Phrasal verb", "Meaning", "Pattern", "Example"].map((heading) => (
                <th
                  key={heading}
                  className="px-4 py-3 text-left font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row) => (
              <tr key={row.phrasalVerb}>
                <td className="px-4 py-4 font-bold text-slate-950 dark:text-slate-50">{row.phrasalVerb}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.meaning}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.pattern}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PhrasalVerbGroupSection({
  cards
}: {
  cards: GrammarTopicPhrasalVerbsFullExplanation["phrasalVerbGroups"];
}) {
  return (
    <div className="mt-8 rounded-3xl bg-slate-50 dark:bg-slate-800 p-6">
      <h3 className="text-xl font-black text-slate-950 dark:text-slate-50">Phrasal verb groups</h3>
      <div className="mt-4 grid gap-4">
        {cards.map((card) => (
          <div key={card.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-slate-100">{card.title}</h4>
            <p className="mt-2 text-slate-700 dark:text-slate-300">{card.situation}</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {card.phrasalVerbs.map((item) => (
                <div key={item.phrasalVerb} className="rounded-2xl border border-slate-200 dark:border-slate-700 p-4">
                  <p className="font-bold text-blue-700 dark:text-blue-300">{item.phrasalVerb}</p>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{item.meaning}</p>
                  <p className="mt-3 rounded-2xl bg-slate-100 dark:bg-slate-800 p-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {item.pattern}
                  </p>
                  <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{item.example}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
                Usage note
              </p>
              <p className="mt-1 text-amber-950 dark:text-amber-100">{card.usageNote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhrasalVerbUsageNotes({
  notes
}: {
  notes: GrammarTopicPhrasalVerbsFullExplanation["usageNotes"];
}) {
  return (
    <div className="mt-8 rounded-3xl bg-amber-50 dark:bg-amber-950/40 p-6">
      <h3 className="text-xl font-black text-amber-950 dark:text-amber-100">
        Separable / inseparable and meaning notes
      </h3>
      <div className="mt-4 grid gap-4">
        {notes.map((note) => (
          <div key={note.title} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
            <h4 className="font-bold text-slate-900 dark:text-slate-100">{note.title}</h4>
            <p className="mt-2 text-slate-700 dark:text-slate-300">{note.rule}</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {note.examples.map((example) => (
                <li key={example}>• {example}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function IrregularComparisonTable({
  rows
}: {
  rows: GrammarTopicComparativesSuperlativesFullExplanation["irregularForms"];
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
      <div className="bg-slate-950 px-6 py-4">
        <h3 className="text-xl font-black text-white">Irregular forms</h3>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-slate-900">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              {["Adjective", "Comparative", "Superlative", "Example"].map((heading) => (
                <th
                  key={heading}
                  className="px-4 py-3 text-left font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row) => (
              <tr key={row.adjective}>
                <td className="px-4 py-4 font-bold text-slate-950 dark:text-slate-50">{row.adjective}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.comparative}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.superlative}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function WhWordTable({
  rows
}: {
  rows: GrammarTopicWhQuestionsFullExplanation["whWordTable"];
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
      <div className="bg-slate-950 px-6 py-4">
        <h3 className="text-xl font-black text-white">WH words reference table</h3>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-slate-900">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              {["WH word", "Main use", "Question it answers", "Example", "Note"].map(
                (heading) => (
                  <th
                    key={heading}
                    className="px-4 py-3 text-left font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                  >
                    {heading}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row) => (
              <tr key={row.whWord}>
                <td className="px-4 py-4 font-bold text-slate-950 dark:text-slate-50">{row.whWord}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.mainUse}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.questionItAnswers}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.example}</td>
                <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{row.note ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EmbeddedWhWordTable({
  rows
}: {
  rows: GrammarTopicEmbeddedWhClausesFullExplanation["whWordUsage"];
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
      <div className="bg-slate-950 px-6 py-4">
        <h3 className="text-xl font-black text-white">WH words in embedded use</h3>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-slate-900">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              {["WH word", "Use", "Example"].map((heading) => (
                <th
                  key={heading}
                  className="px-4 py-3 text-left font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row) => (
              <tr key={row.whWord}>
                <td className="px-4 py-4 font-bold text-slate-950 dark:text-slate-50">{row.whWord}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.use}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DirectVsEmbeddedTable({
  rows
}: {
  rows: GrammarTopicEmbeddedWhClausesFullExplanation["directVsEmbeddedTable"];
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
      <div className="bg-slate-950 px-6 py-4">
        <h3 className="text-xl font-black text-white">
          Direct question vs embedded WH clause
        </h3>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-slate-900">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              {["Direct question", "Embedded WH clause"].map((heading) => (
                <th
                  key={heading}
                  className="px-4 py-3 text-left font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row) => (
              <tr key={`${row.direct}-${row.embedded}`}>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.direct}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.embedded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TransformationTable({
  rows
}: {
  rows: GrammarTopicEmbeddedWhClausesFullExplanation["transformations"];
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
      <div className="border-b border-emerald-200 bg-emerald-50 px-6 py-4 dark:border-emerald-500/30 dark:bg-emerald-950/20">
        <h3 className="text-xl font-black text-emerald-950 dark:text-emerald-100">Transformations</h3>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-slate-900">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              {["Direct question", "Embedded clause"].map((heading) => (
                <th
                  key={heading}
                  className="px-4 py-3 text-left font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row) => (
              <tr key={`${row.direct}-${row.embedded}`}>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.direct}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.embedded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AuxiliaryReferenceTable({
  rows
}: {
  rows: GrammarTopicEnglishAuxiliariesFullExplanation["auxiliaryReferenceTable"];
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
      <div className="bg-slate-950 px-6 py-4">
        <h3 className="text-xl font-black text-white">General reference table</h3>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-slate-900">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              {["Auxiliary", "Main use", "Used in", "Example"].map((heading) => (
                <th
                  key={heading}
                  className="px-4 py-3 text-left font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row) => (
              <tr key={`${row.auxiliary}-${row.usedIn}`}>
                <td className="px-4 py-4 font-bold text-slate-950 dark:text-slate-50">{row.auxiliary}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.mainUse}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.usedIn}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PronounReferenceTable({
  rows
}: {
  rows: GrammarTopicPronounsPossessivesFullExplanation["mainReferenceTable"];
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
      <div className="bg-slate-950 px-6 py-4">
        <h3 className="text-xl font-black text-white">Main reference table</h3>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-slate-900">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              {[
                "Subject pronoun",
                "Object pronoun",
                "Possessive adjective",
                "Possessive pronoun",
                "Reflexive",
                "Example"
              ].map((heading) => (
                <th
                  key={heading}
                  className="px-4 py-3 text-left font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row) => (
              <tr key={row.subjectPronoun}>
                <td className="px-4 py-4 font-bold text-slate-950 dark:text-slate-50">{row.subjectPronoun}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.objectPronoun}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.possessiveAdjective}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.possessivePronoun}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.reflexive}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ContractionTable({ table }: { table: GrammarTopicAuxiliaryContractionTable }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
      <div className="bg-amber-50 dark:bg-amber-950/40 px-6 py-4">
        <h3 className="text-xl font-black text-amber-950 dark:text-amber-100">{table.title}</h3>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-slate-900">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              {["Long form", "Short form"].map((heading) => (
                <th
                  key={heading}
                  className="px-4 py-3 text-left font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {table.rows.map((row) => (
              <tr key={`${table.title}-${row.longForm}`}>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.longForm}</td>
                <td className="px-4 py-4 font-bold text-slate-950 dark:text-slate-50">{row.shortForm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StructureSnippet({
  title,
  structure,
  variant
}: {
  title: string;
  structure: string;
  variant: "positive" | "negative" | "question";
}) {
  const calloutVariant =
    variant === "positive" ? "success" : variant === "negative" ? "danger" : "info";

  return (
    <SemanticCallout variant={calloutVariant} title={title}>
      <p className="font-semibold">{structure}</p>
    </SemanticCallout>
  );
}

function StructureCard({ table }: { table: GrammarTopicQuestionStructureTable }) {
  return (
    <div className="rounded-3xl bg-slate-50 dark:bg-slate-800 p-6">
      <h3 className="text-xl font-black text-slate-950 dark:text-slate-50">{table.title}</h3>
      <p className="mt-3 rounded-2xl bg-white dark:bg-slate-900 p-4 font-semibold text-slate-900 dark:text-slate-100">
        {table.pattern}
      </p>
      <p className="mt-4 text-slate-600 dark:text-slate-400">{table.use}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        {table.examples.map((example) => (
          <li key={example}>• {example}</li>
        ))}
      </ul>
    </div>
  );
}

function PracticeSection({
  items
}: {
  items: GrammarTopicFullExplanationPracticeItem[] | undefined;
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className="mt-8 rounded-3xl bg-indigo-50 p-6">
      <h3 className="text-xl font-black text-indigo-950">Micro practice</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.prompt} className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm">
            <p className="font-semibold text-indigo-900">{item.prompt}</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Focus
            </p>
            <p className="mt-1 text-slate-700 dark:text-slate-300">{item.focus}</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
              Answer
            </p>
            <p className="mt-1 text-slate-700 dark:text-slate-300">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MistakesSection({
  mistakes
}: {
  mistakes: Array<{
    wrong: string;
    correct: string;
    reason: string;
  }>;
}) {
  return (
    <div className="mt-8 rounded-3xl border border-rose-200 bg-rose-50 p-6 shadow-sm dark:border-rose-500/30 dark:bg-rose-950/20">
      <h3 className="text-xl font-black text-rose-950 dark:text-rose-100">Common mistakes</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {mistakes.map((mistake) => (
          <div
            key={mistake.wrong}
            className="rounded-2xl border border-rose-100 bg-white p-4 shadow-sm dark:border-slate-700/80 dark:bg-slate-950/70"
          >
            <p className="font-semibold text-rose-800 dark:text-rose-300">Wrong</p>
            <p className="mt-1 text-slate-700 dark:text-slate-100">{mistake.wrong}</p>
            <p className="mt-3 font-semibold text-emerald-700 dark:text-emerald-300">Correct</p>
            <p className="mt-1 text-slate-700 dark:text-slate-100">{mistake.correct}</p>
            <p className="mt-3 font-semibold text-blue-700 dark:text-sky-300">Why</p>
            <p className="mt-1 text-slate-700 dark:text-slate-100">{mistake.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoPanel({
  title,
  body,
  containerClassName,
  titleClassName,
  bodyClassName
}: {
  title: string;
  body: string;
  containerClassName: string;
  titleClassName: string;
  bodyClassName: string;
}) {
  return (
    <div className={`rounded-3xl p-6 ${containerClassName}`}>
      <h3 className={`text-xl font-black ${titleClassName}`}>{title}</h3>
      <p className={`mt-4 text-lg ${bodyClassName}`}>{body}</p>
    </div>
  );
}

function ContrastTable({
  title,
  rows
}: {
  title: string;
  rows: Array<{ situation: string; use: string; example: string }>;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
      <div className="bg-amber-50 dark:bg-amber-950/40 px-6 py-4">
        <h3 className="text-xl font-black text-amber-950 dark:text-amber-100">{title}</h3>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-slate-900">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              {["Situation", "Use", "Example"].map((heading) => (
                <th
                  key={heading}
                  className="px-4 py-3 text-left font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row) => (
              <tr key={`${title}-${row.situation}`}>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.situation}</td>
                <td className="px-4 py-4 font-bold text-slate-950 dark:text-slate-50">{row.use}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ReferenceTable({
  explanation,
  title
}: {
  explanation: GrammarTopicPrepositionsFullExplanation;
  title: string;
}) {
  const table = explanation.referenceTables.find((entry) => entry.title === title);

  if (!table) {
    return null;
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
      <div className="bg-slate-950 px-6 py-4">
        <h3 className="text-xl font-black text-white">{title}</h3>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-slate-900">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              {["Preposition", "Use", "Pattern", "Example", "Note"].map((heading) => (
                <th
                  key={heading}
                  className="px-4 py-3 text-left font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {table.rows.map((row) => (
              <tr key={`${table.title}-${row.preposition}-${row.example}`}>
                <td className="px-4 py-4 font-bold text-slate-950 dark:text-slate-50">{row.preposition}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.use}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.pattern}</td>
                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">{row.example}</td>
                <td className="px-4 py-4 text-slate-600 dark:text-slate-400">{row.note ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-4">
      <h3 className="font-bold text-slate-900 dark:text-slate-100">{title}</h3>
      <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function RelatedTopicLinksSection({
  links
}: {
  links: GrammarTopicQuestionBuilderFullExplanation["relatedTopicLinks"];
}) {
  return (
    <div className="rounded-3xl bg-slate-50 dark:bg-slate-800 p-6">
      <h3 className="text-xl font-black text-slate-950 dark:text-slate-50">Related topics</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition hover:border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/60 dark:bg-blue-950/40 hover:text-blue-700 dark:hover:text-blue-200 dark:text-blue-300"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

function ContentSection({
  title,
  items,
  variant = "default"
}: {
  title: string;
  items: string[];
  variant?: "default" | "highlight" | "amber";
}) {
  const styles = getContentSectionStyles(variant);

  return (
    <div className={`rounded-3xl p-6 ${styles.container}`}>
      <h3 className={`text-xl font-black ${styles.title}`}>{title}</h3>
      <ul className={`mt-4 space-y-2 ${styles.body}`}>
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function getContentSectionStyles(variant: "default" | "highlight" | "amber") {
  switch (variant) {
    case "highlight":
      return {
        container: "bg-slate-950",
        title: "text-white",
        body: "text-slate-200"
      };
    case "amber":
      return {
        container: "bg-amber-50 dark:bg-amber-950/40",
        title: "text-amber-950 dark:text-amber-100",
        body: "text-amber-900 dark:text-amber-100"
      };
    default:
      return {
        container: "bg-slate-50 dark:bg-slate-800",
        title: "text-slate-950 dark:text-slate-50",
        body: "text-slate-600 dark:text-slate-300"
      };
  }
}
