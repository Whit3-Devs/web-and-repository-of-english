import { Link } from "react-router-dom";
import { SearchInput } from "../components/SearchInput";
import { Badge, Card, EmptyState, PageHeader } from "../components/ui";
import { irregularVerbs } from "../data/irregularVerbs";
import { getIrregularVerbPatternGroups } from "../data/irregularVerbPatterns";
import { filterIrregularVerbs } from "../features/cheatsheet/search";
import type { IrregularVerbFrequency } from "../shared/types/content";
import { useCheatsheetStore } from "../store/useCheatsheetStore";
import { useMemo, useState } from "react";

type ViewMode = "table" | "pattern";

const frequencies: Array<IrregularVerbFrequency | "all"> = [
  "all",
  "high",
  "medium",
  "low"
];

const tabs: Array<{ id: ViewMode; label: string; description: string }> = [
  {
    id: "table",
    label: "Table",
    description: "Flat lookup by form, category, and example."
  },
  {
    id: "pattern",
    label: "By Pattern",
    description: "Memorize irregular verbs by shared form families."
  }
];

export function IrregularVerbsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("table");
  const searchTerm = useCheatsheetStore((state) => state.searchTerm);
  const activeFilters = useCheatsheetStore((state) => state.activeFilters);
  const setSearchTerm = useCheatsheetStore((state) => state.setSearchTerm);
  const setFilter = useCheatsheetStore((state) => state.setFilter);

  const selectedFrequency = activeFilters.irregularVerbFrequency as
    | IrregularVerbFrequency
    | undefined;

  const filteredIrregularVerbs = filterIrregularVerbs(irregularVerbs, {
    searchTerm,
    frequency: selectedFrequency
  });
  const irregularVerbPatternGroups = useMemo(
    () =>
      getIrregularVerbPatternGroups(irregularVerbs, {
        searchTerm,
        frequency: selectedFrequency
      }),
    [searchTerm, selectedFrequency]
  );
  const hasResults =
    viewMode === "table"
      ? filteredIrregularVerbs.length > 0
      : irregularVerbPatternGroups.length > 0;

  return (
    <section className="space-y-6">
      <PageHeader
        eyebrow="Verbs"
        title="Irregular Verbs"
        description="Search by infinitive, past simple, past participle, category, or example. Use Table for lookup and By Pattern for memorization."
      />

      <Card padding="sm">
        <div
          role="tablist"
          aria-label="Irregular verbs view mode"
          className="grid gap-3 md:grid-cols-2"
        >
          {tabs.map((tab) => {
            const isActive = viewMode === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${tab.id}-panel`}
                id={`${tab.id}-tab`}
                onClick={() => setViewMode(tab.id)}
                className={`rounded-2xl border px-4 py-4 text-left transition ${
                  isActive
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-950/40 text-blue-950 dark:text-blue-100 shadow-sm"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-500 dark:border-slate-600"
                }`}
              >
                <span className="block text-sm font-black uppercase tracking-[0.2em]">
                  {tab.label}
                </span>
                <span className="mt-2 block text-sm">{tab.description}</span>
              </button>
            );
          })}
        </div>
      </Card>

      <Card className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
        <SearchInput
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search: go, went, gone, movement..."
        />

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Frequency
          </span>
          <select
            value={selectedFrequency ?? "all"}
            onChange={(event) =>
              setFilter(
                "irregularVerbFrequency",
                event.target.value === "all" ? undefined : event.target.value
              )
            }
            className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-slate-900 dark:text-slate-100 shadow-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-950 md:w-48"
          >
            {frequencies.map((frequency) => (
              <option key={frequency} value={frequency}>
                {frequency}
              </option>
            ))}
          </select>
        </label>
      </Card>

      <div role="tabpanel" id={`${viewMode}-panel`} aria-labelledby={`${viewMode}-tab`}>
        {viewMode === "table" ? (
          <IrregularVerbsTableView filteredIrregularVerbs={filteredIrregularVerbs} />
        ) : (
          <IrregularVerbPatternView groups={irregularVerbPatternGroups} />
        )}
      </div>

      {!hasResults ? (
        <EmptyState
          title="No irregular verbs found"
          description="No irregular verbs found with those filters."
        />
      ) : null}
    </section>
  );
}

function IrregularVerbsTableView({
  filteredIrregularVerbs
}: {
  filteredIrregularVerbs: typeof irregularVerbs;
}) {
  return (
    <Card className="overflow-hidden" padding="sm">
      <div className="grid grid-cols-5 gap-4 bg-slate-100 px-5 py-3 text-sm font-bold uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-400">
        <span>Infinitive</span>
        <span>Past</span>
        <span>Participle</span>
        <span>Category</span>
        <span>Example</span>
      </div>

      {filteredIrregularVerbs.map((verb) => (
        <article
          key={verb.id}
          className="grid grid-cols-1 gap-2 border-t border-slate-100 dark:border-slate-800 px-5 py-4 text-slate-700 dark:text-slate-300 md:grid-cols-5 md:gap-4"
        >
          <Link
            to={verb.fullExplanationPath}
            className="font-bold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:text-blue-700 dark:text-blue-300 dark:decoration-slate-600 dark:hover:text-blue-200"
          >
            {verb.infinitive}
          </Link>
          <span>{verb.pastSimple}</span>
          <span>{verb.pastParticiple}</span>
          <span className="capitalize">{verb.category}</span>
          <span className="text-slate-500 dark:text-slate-400">{verb.example}</span>
        </article>
      ))}
    </Card>
  );
}

function IrregularVerbPatternView({
  groups
}: {
  groups: ReturnType<typeof getIrregularVerbPatternGroups>;
}) {
  return (
    <div className="grid gap-4">
      {groups.map((group) => (
        <section key={group.key}>
          <Card interactive>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-50">
                  {group.code} — {group.title}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{group.explanation}</p>
              </div>
              <div className="rounded-2xl bg-amber-50 dark:bg-amber-950/40 px-4 py-3 text-right">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
                  Memory label
                </p>
                <p className="mt-1 font-bold text-amber-950 dark:text-amber-100">{group.memoryLabel}</p>
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="grid grid-cols-4 gap-4 bg-slate-100 px-5 py-3 text-sm font-bold uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                <span>Infinitive</span>
                <span>Past</span>
                <span>Participle</span>
                <span>Frequency</span>
              </div>

              {group.verbs.map((verb) => (
                <article
                  key={`${group.key}-${verb.id}`}
                  className="grid grid-cols-1 gap-2 border-t border-slate-100 dark:border-slate-800 px-5 py-4 text-slate-700 dark:text-slate-300 md:grid-cols-4 md:gap-4"
                >
                  <Link
                    to={verb.fullExplanationPath}
                    className="font-bold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:text-blue-700 dark:text-blue-300 dark:decoration-slate-600 dark:hover:text-blue-200"
                  >
                    {verb.infinitive}
                  </Link>
                  <span>{verb.pastSimple}</span>
                  <span>{verb.pastParticiple}</span>
                  <Badge variant="neutral" className="capitalize">
                    {verb.frequency}
                  </Badge>
                </article>
              ))}
            </div>
          </Card>
        </section>
      ))}
    </div>
  );
}
