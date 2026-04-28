import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FullExplanationLink } from "../components/FullExplanationLink";
import { verbTenseDecisionMap } from "../data/verbTenseDecisionMap";
import { SearchInput } from "../components/SearchInput";
import { ActionLink, Badge, Card, EmptyState, FilterSelect, PageHeader, TabOption } from "../components/ui";
import { verbTenseReferenceTables } from "../data/verbTenseReferenceTables";
import { verbTenses } from "../data/verbTenses";
import { filterVerbTenses, matchesVerbTense } from "../features/cheatsheet/search";
import { useCheatsheetStore } from "../store/useCheatsheetStore";
import type {
  VerbTense,
  VerbTenseDecisionMapEntry,
  VerbTenseReferenceFamily,
  VerbTenseReferenceGroup,
  VerbTenseReferenceRow,
  VerbTenseReferenceSection
} from "../shared/types/content";

type ViewMode = "simplified" | "decision-map" | "full";

const categories: Array<VerbTense["category"] | "all"> = [
  "all",
  "present",
  "past",
  "future",
  "perfect"
];

const tabs: Array<{ id: ViewMode; label: string; description: string }> = [
  {
    id: "simplified",
    label: "Simplified",
    description: "Fast reference tables to compare tense structures."
  },
  {
    id: "decision-map",
    label: "Decision Map",
    description: "Choose the right tense by communicative intention."
  },
  {
    id: "full",
    label: "Full",
    description: "Detailed cards with usage, examples, signals, and mistakes."
  }
];

const sectionLabels: Record<VerbTenseReferenceSection, string> = {
  affirmative: "Affirmative",
  negative: "Negative",
  question: "Question"
};

export function VerbTensesPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("simplified");
  const searchTerm = useCheatsheetStore((state) => state.searchTerm);
  const activeFilters = useCheatsheetStore((state) => state.activeFilters);
  const setSearchTerm = useCheatsheetStore((state) => state.setSearchTerm);
  const setFilter = useCheatsheetStore((state) => state.setFilter);

  const selectedCategory = activeFilters.verbTenseCategory as
    | VerbTense["category"]
    | undefined;

  const filteredVerbTenses = filterVerbTenses(verbTenses, {
    searchTerm,
    category: selectedCategory
  });

  const filteredReferenceGroups = useMemo(
    () =>
      filterReferenceGroups(verbTenseReferenceTables, {
        searchTerm,
        category: selectedCategory
      }),
    [searchTerm, selectedCategory]
  );
  const filteredDecisionEntries = useMemo(
    () =>
      filterDecisionEntries(verbTenseDecisionMap, {
        searchTerm,
        category: selectedCategory
      }),
    [searchTerm, selectedCategory]
  );

  const hasResults =
    viewMode === "full"
      ? filteredVerbTenses.length > 0
      : viewMode === "decision-map"
        ? filteredDecisionEntries.length > 0
        : filteredReferenceGroups.length > 0;

  return (
    <section className="space-y-6">
      <PageHeader
        eyebrow="Grammar"
        title="Verb Tenses"
        description="Switch between a quick comparison mode and a detailed study mode. Use Simplified when you want a fast reference, and Full when you want more explanation and context."
      />

      <Card padding="sm">
        <div
          role="tablist"
          aria-label="Verb tense view mode"
          className="grid gap-3 md:grid-cols-2"
        >
          {tabs.map((tab) => {
            const isActive = viewMode === tab.id;

            return (
              <TabOption
                key={tab.id}
                active={isActive}
                label={tab.label}
                description={tab.description}
                id={`${tab.id}-tab`}
                panelId={`${tab.id}-panel`}
                onClick={() => setViewMode(tab.id)}
              />
            );
          })}
        </div>
      </Card>

      <Card className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
        <SearchInput value={searchTerm} onChange={setSearchTerm} />

        <FilterSelect
          label="Category"
          value={selectedCategory ?? "all"}
          onChange={(value) =>
            setFilter(
              "verbTenseCategory",
              value === "all" ? undefined : value
            )
          }
          options={categories.map((category) => ({
            value: category,
            label: category
          }))}
        />
      </Card>

      <div
        role="tabpanel"
        id={`${viewMode}-panel`}
        aria-labelledby={`${viewMode}-tab`}
      >
        {viewMode === "simplified" ? (
          <SimplifiedVerbTensesView groups={filteredReferenceGroups} />
        ) : viewMode === "decision-map" ? (
          <DecisionMapView entries={filteredDecisionEntries} />
        ) : (
          <FullVerbTensesView verbTenses={filteredVerbTenses} />
        )}
      </div>

      {!hasResults ? (
        <EmptyState
          title="No verb tenses found"
          description="No verb tenses found with those filters."
        />
      ) : null}
    </section>
  );
}

function DecisionMapView({ entries }: { entries: VerbTenseDecisionMapEntry[] }) {
  return (
    <div className="grid gap-4">
      {entries.map((entry) => {
        const tense = findVerbTenseByDecisionSlug(entry.primaryTenseSlug);

        if (!tense) {
          return null;
        }

        return (
          <article key={entry.id}>
            <Card interactive>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-50">{entry.title}</h3>
                  <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-400">{entry.summary}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {entry.categories.map((category) => (
                    <Badge
                      key={`${entry.id}-${category}`}
                      variant="neutral"
                      className="capitalize"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <DecisionInfoBlock title="Decision question" value={entry.decisionQuestion} />
                <DecisionInfoBlock title="Primary tense" value={tense.name} highlight />
                <DecisionInfoBlock title="Timeline cue" value={entry.timelineCue} />
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <ContentList title="Use when" items={entry.useWhen} />
                <ContentList title="Keywords" items={entry.keywords} />
              </div>

              <div className="mt-5 rounded-3xl bg-blue-50 dark:bg-blue-950/40 p-5">
                <h4 className="text-lg font-bold text-blue-950 dark:text-blue-100">Quick contrast</h4>
                <div className="mt-3 grid gap-4 md:grid-cols-2">
                  {entry.contrasts.map((contrast) => (
                    <div key={`${entry.id}-${contrast.label}`} className="rounded-2xl bg-white dark:bg-slate-900 p-4">
                      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {contrast.label}
                      </p>
                      <p className="mt-2 font-semibold text-slate-950 dark:text-slate-50">
                        Use <span className="text-blue-700 dark:text-blue-300">{contrast.useInsteadOf}</span>
                      </p>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{contrast.reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-50 dark:bg-slate-800 p-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Detail route
                  </p>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">
                    Open the full tense page for structure, examples, signals, and mistakes.
                  </p>
                </div>
                <ActionLink
                  to={tense.fullExplanationPath}
                  variant="primary"
                >
                  Open {tense.name} →
                </ActionLink>
              </div>
            </Card>
          </article>
        );
      })}
    </div>
  );
}

function FullVerbTensesView({ verbTenses }: { verbTenses: VerbTense[] }) {
  return (
    <div className="grid gap-4">
      {verbTenses.map((verbTense) => (
        <article key={verbTense.id}>
          <Card interactive>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-50">{verbTense.name}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{verbTense.summary}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="neutral" className="capitalize">
                  {verbTense.category}
                </Badge>
                <FullExplanationLink
                  to={verbTense.fullExplanationPath}
                  available={verbTense.hasFullExplanation}
                />
              </div>
            </div>

            <dl className="mt-5 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 p-4">
                <dt className="font-bold text-emerald-900 dark:text-emerald-100">Affirmative</dt>
                <dd className="mt-1 text-emerald-800 dark:text-emerald-200">{verbTense.structures.affirmative}</dd>
              </div>
              <div className="rounded-2xl bg-rose-50 dark:bg-rose-950/40 p-4">
                <dt className="font-bold text-rose-900 dark:text-rose-100">Negative</dt>
                <dd className="mt-1 text-rose-800 dark:text-rose-200">{verbTense.structures.negative}</dd>
              </div>
              <div className="rounded-2xl bg-blue-50 dark:bg-blue-950/40 p-4">
                <dt className="font-bold text-blue-900 dark:text-blue-100">Interrogative</dt>
                <dd className="mt-1 text-blue-800 dark:text-blue-200">
                  {verbTense.structures.interrogative}
                </dd>
              </div>
            </dl>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <ContentList title="Examples" items={verbTense.examples} />
              <ContentList title="Signals" items={verbTense.signals} />
              <ContentList title="Common mistakes" items={verbTense.commonMistakes} />
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <InfoSection title="Timeline idea" value={verbTense.timelineIdea} />
              <InfoSection title="Contrast" value={verbTense.contrast} />
            </div>
          </Card>
        </article>
      ))}
    </div>
  );
}

function SimplifiedVerbTensesView({
  groups
}: {
  groups: VerbTenseReferenceGroup[];
}) {
  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <section key={group.family}>
          <Card>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-50">{group.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Comparative reference for affirmative, negative, and question
                  forms.
                </p>
              </div>
              <Badge variant="neutral" className="capitalize">
                {group.family}
              </Badge>
            </div>

            <div className="mt-5 space-y-5">
              {group.tables.map((table) => (
                <div key={table.section}>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {sectionLabels[table.section]}
                  </h4>
                  <div className="mt-3 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
                    <table className="min-w-full border-collapse text-sm">
                      <thead className="bg-slate-50 dark:bg-slate-800 text-left text-slate-700 dark:text-slate-300">
                        <tr>
                          <TableHead>Tense</TableHead>
                          <TableHead>Auxiliary</TableHead>
                          <TableHead>Contraction</TableHead>
                          <TableHead>Main verb form</TableHead>
                          <TableHead>Structure</TableHead>
                          <TableHead>Example</TableHead>
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row) => (
                          <tr
                            key={`${table.section}-${row.tenseSlug}`}
                            className="border-t border-slate-200 transition-colors duration-200 ease-out hover:bg-slate-50 motion-reduce:transition-none dark:border-slate-700 dark:hover:bg-slate-800/70"
                          >
                            <TableCell>
                              <Link
                                to={`/verb-tenses/${row.tenseSlug}`}
                                className="font-semibold text-blue-700 underline-offset-4 transition duration-200 ease-out hover:text-blue-900 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none dark:text-blue-300 dark:hover:text-blue-100 dark:focus-visible:ring-blue-950"
                              >
                                {row.tenseName}
                              </Link>
                            </TableCell>
                            <TableCell>{row.auxiliary}</TableCell>
                            <TableCell>{row.contraction}</TableCell>
                            <TableCell>{row.mainVerbForm}</TableCell>
                            <TableCell>{row.structure}</TableCell>
                            <TableCell>{row.example}</TableCell>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-slate-50 dark:bg-slate-800 p-4">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">Quick memory</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                {group.quickMemory.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </Card>
        </section>
      ))}
    </div>
  );
}

function filterReferenceGroups(
  groups: VerbTenseReferenceGroup[],
  filters: { searchTerm?: string; category?: VerbTense["category"] }
) {
  return groups
    .filter((group) => matchesReferenceFamilyCategory(group.family, filters.category))
    .map((group) => ({
      ...group,
      tables: group.tables
        .map((table) => ({
          ...table,
          rows: table.rows.filter((row) => matchesReferenceRow(row, filters.searchTerm))
        }))
        .filter((table) => table.rows.length > 0)
    }))
    .filter((group) => group.tables.length > 0);
}

function matchesReferenceFamilyCategory(
  family: VerbTenseReferenceFamily,
  category?: VerbTense["category"]
) {
  if (!category) {
    return true;
  }

  if (category === "perfect") {
    return false;
  }

  return family === category;
}

function matchesReferenceRow(row: VerbTenseReferenceRow, searchTerm = "") {
  const referenceAsVerbTense = verbTenses.find(
    (verbTense) => verbTense.slug === row.tenseSlug
  );

  const matchesDetailedContent = referenceAsVerbTense
    ? matchesVerbTense(referenceAsVerbTense, searchTerm)
    : false;

  if (matchesDetailedContent) {
    return true;
  }

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  if (!normalizedSearchTerm) {
    return true;
  }

  const searchableContent = [
    row.tenseName,
    row.auxiliary,
    row.contraction,
    row.mainVerbForm,
    row.structure,
    row.example
  ]
    .join(" ")
    .toLowerCase();

  return searchableContent.includes(normalizedSearchTerm);
}

function filterDecisionEntries(
  entries: VerbTenseDecisionMapEntry[],
  filters: { searchTerm?: string; category?: VerbTense["category"] }
) {
  return entries.filter((entry) => {
    const matchesCategory = filters.category
      ? entry.categories.includes(filters.category)
      : true;

    if (!matchesCategory) {
      return false;
    }

    const normalizedSearchTerm = filters.searchTerm?.trim().toLowerCase() ?? "";

    if (!normalizedSearchTerm) {
      return true;
    }

    const tense = findVerbTenseByDecisionSlug(entry.primaryTenseSlug);
    const searchableContent = [
      entry.title,
      entry.summary,
      entry.decisionQuestion,
      entry.timelineCue,
      ...entry.useWhen,
      ...entry.keywords,
      ...entry.categories,
      ...entry.contrasts.flatMap((contrast) => [
        contrast.label,
        contrast.useInsteadOf,
        contrast.reason
      ]),
      tense?.name ?? "",
      tense?.mainUse ?? "",
      ...(tense?.signals ?? [])
    ]
      .join(" ")
      .toLowerCase();

    return searchableContent.includes(normalizedSearchTerm);
  });
}

function findVerbTenseByDecisionSlug(slug: string) {
  return verbTenses.find((verbTense) => verbTense.slug === slug);
}

function TableHead({ children }: { children: string }) {
  return <th className="px-4 py-3 font-bold">{children}</th>;
}

function TableCell({ children }: { children: ReactNode }) {
  return <td className="px-4 py-3 align-top text-slate-700 dark:text-slate-300">{children}</td>;
}

function DecisionInfoBlock({
  title,
  value,
  highlight = false
}: {
  title: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className={`rounded-2xl p-4 ${highlight ? "bg-amber-50 dark:bg-amber-950/40" : "bg-slate-50 dark:bg-slate-800"}`}>
      <h4 className={`font-bold ${highlight ? "text-amber-950 dark:text-amber-100" : "text-slate-900 dark:text-slate-100"}`}>
        {title}
      </h4>
      <p className={`mt-2 text-sm ${highlight ? "text-amber-900 dark:text-amber-100" : "text-slate-600 dark:text-slate-400"}`}>
        {value}
      </p>
    </div>
  );
}

function InfoSection({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <h4 className="font-bold text-slate-900 dark:text-slate-100">{title}</h4>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{value}</p>
    </div>
  );
}

function ContentList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-bold text-slate-900 dark:text-slate-100">{title}</h4>
      <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-400">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
