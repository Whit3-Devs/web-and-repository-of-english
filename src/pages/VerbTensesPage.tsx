import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FullExplanationLink } from "../components/FullExplanationLink";
import { SearchInput } from "../components/SearchInput";
import { verbTenseReferenceTables } from "../data/verbTenseReferenceTables";
import { verbTenses } from "../data/verbTenses";
import { filterVerbTenses, matchesVerbTense } from "../features/cheatsheet/search";
import { useCheatsheetStore } from "../store/useCheatsheetStore";
import type {
  VerbTense,
  VerbTenseReferenceFamily,
  VerbTenseReferenceGroup,
  VerbTenseReferenceRow,
  VerbTenseReferenceSection
} from "../shared/types/content";

type ViewMode = "simplified" | "full";

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

  const hasResults =
    viewMode === "full"
      ? filteredVerbTenses.length > 0
      : filteredReferenceGroups.length > 0;

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Grammar
        </p>
        <h2 className="mt-2 text-3xl font-black text-slate-950">Verb Tenses</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Switch between a quick comparison mode and a detailed study mode. Use
          Simplified when you want a fast reference, and Full when you want more
          explanation and context.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
        <div
          role="tablist"
          aria-label="Verb tense view mode"
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
                    ? "border-blue-500 bg-blue-50 text-blue-950 shadow-sm"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
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
      </div>

      <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[1fr_auto] md:items-end">
        <SearchInput value={searchTerm} onChange={setSearchTerm} />

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">
            Category
          </span>
          <select
            value={selectedCategory ?? "all"}
            onChange={(event) =>
              setFilter(
                "verbTenseCategory",
                event.target.value === "all" ? undefined : event.target.value
              )
            }
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 md:w-48"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div
        role="tabpanel"
        id={`${viewMode}-panel`}
        aria-labelledby={`${viewMode}-tab`}
      >
        {viewMode === "simplified" ? (
          <SimplifiedVerbTensesView groups={filteredReferenceGroups} />
        ) : (
          <FullVerbTensesView verbTenses={filteredVerbTenses} />
        )}
      </div>

      {!hasResults ? (
        <p className="rounded-3xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
          No verb tenses found with those filters.
        </p>
      ) : null}
    </section>
  );
}

function FullVerbTensesView({ verbTenses }: { verbTenses: VerbTense[] }) {
  return (
    <div className="grid gap-4">
      {verbTenses.map((verbTense) => (
        <article
          key={verbTense.id}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-2xl font-bold text-slate-950">{verbTense.name}</h3>
              <p className="mt-2 text-slate-600">{verbTense.summary}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold capitalize text-slate-700">
                {verbTense.category}
              </span>
              <FullExplanationLink
                to={verbTense.fullExplanationPath}
                available={verbTense.hasFullExplanation}
              />
            </div>
          </div>

          <dl className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-emerald-50 p-4">
              <dt className="font-bold text-emerald-900">Affirmative</dt>
              <dd className="mt-1 text-emerald-800">{verbTense.structures.affirmative}</dd>
            </div>
            <div className="rounded-2xl bg-rose-50 p-4">
              <dt className="font-bold text-rose-900">Negative</dt>
              <dd className="mt-1 text-rose-800">{verbTense.structures.negative}</dd>
            </div>
            <div className="rounded-2xl bg-blue-50 p-4">
              <dt className="font-bold text-blue-900">Interrogative</dt>
              <dd className="mt-1 text-blue-800">
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
        <section
          key={group.family}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-2xl font-bold text-slate-950">{group.title}</h3>
              <p className="mt-2 text-slate-600">
                Comparative reference for affirmative, negative, and question
                forms.
              </p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold capitalize text-slate-700">
              {group.family}
            </span>
          </div>

          <div className="mt-5 space-y-5">
            {group.tables.map((table) => (
              <div key={table.section}>
                <h4 className="text-lg font-bold text-slate-900">
                  {sectionLabels[table.section]}
                </h4>
                <div className="mt-3 overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="min-w-full border-collapse text-sm">
                    <thead className="bg-slate-50 text-left text-slate-700">
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
                        <tr key={`${table.section}-${row.tenseSlug}`} className="border-t border-slate-200">
                          <TableCell>
                            <Link
                              to={`/verb-tenses/${row.tenseSlug}`}
                              className="font-semibold text-blue-700 underline-offset-4 hover:underline"
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

          <div className="mt-5 rounded-2xl bg-slate-50 p-4">
            <h4 className="font-bold text-slate-900">Quick memory</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              {group.quickMemory.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
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

function TableHead({ children }: { children: string }) {
  return <th className="px-4 py-3 font-bold">{children}</th>;
}

function TableCell({ children }: { children: ReactNode }) {
  return <td className="px-4 py-3 align-top text-slate-700">{children}</td>;
}

function InfoSection({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <h4 className="font-bold text-slate-900">{title}</h4>
      <p className="mt-2 text-sm text-slate-600">{value}</p>
    </div>
  );
}

function ContentList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-bold text-slate-900">{title}</h4>
      <ul className="mt-2 space-y-2 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
