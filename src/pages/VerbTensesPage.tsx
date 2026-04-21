import { SearchInput } from "../components/SearchInput";
import { FullExplanationLink } from "../components/FullExplanationLink";
import { verbTenses } from "../data/verbTenses";
import { filterVerbTenses } from "../features/cheatsheet/search";
import { useCheatsheetStore } from "../store/useCheatsheetStore";
import type { VerbTense } from "../shared/types/content";

const categories: Array<VerbTense["category"] | "all"> = [
  "all",
  "present",
  "past",
  "future",
  "perfect"
];

export function VerbTensesPage() {
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

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Grammar
        </p>
        <h2 className="mt-2 text-3xl font-black text-slate-950">Verb Tenses</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Check usage, structure, examples, and common mistakes. Do not memorize
          isolated formulas: understand when each tense is used.
        </p>
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

      <div className="grid gap-4">
        {filteredVerbTenses.map((verbTense) => (
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

      {filteredVerbTenses.length === 0 ? (
        <p className="rounded-3xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
          No verb tenses found with those filters.
        </p>
      ) : null}
    </section>
  );
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
