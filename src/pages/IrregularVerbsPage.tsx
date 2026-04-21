import { SearchInput } from "../components/SearchInput";
import { irregularVerbs } from "../data/irregularVerbs";
import { filterIrregularVerbs } from "../features/cheatsheet/search";
import type { IrregularVerbFrequency } from "../shared/types/content";
import { useCheatsheetStore } from "../store/useCheatsheetStore";

const frequencies: Array<IrregularVerbFrequency | "all"> = [
  "all",
  "high",
  "medium",
  "low"
];

export function IrregularVerbsPage() {
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

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Verbs
        </p>
        <h2 className="mt-2 text-3xl font-black text-slate-950">
          Irregular Verbs
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Search by infinitive, past simple, past participle, category, or example.
          The goal here is fast reference.
        </p>
      </div>

      <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[1fr_auto] md:items-end">
        <SearchInput
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search: go, went, gone, movement..."
        />

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">
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
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 md:w-48"
          >
            {frequencies.map((frequency) => (
              <option key={frequency} value={frequency}>
                {frequency}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-5 gap-4 bg-slate-100 px-5 py-3 text-sm font-bold uppercase tracking-wide text-slate-600">
          <span>Infinitive</span>
          <span>Past</span>
          <span>Participle</span>
          <span>Category</span>
          <span>Example</span>
        </div>

        {filteredIrregularVerbs.map((verb) => (
          <article
            key={verb.id}
            className="grid grid-cols-1 gap-2 border-t border-slate-100 px-5 py-4 text-slate-700 md:grid-cols-5 md:gap-4"
          >
            <strong className="text-slate-950">{verb.infinitive}</strong>
            <span>{verb.pastSimple}</span>
            <span>{verb.pastParticiple}</span>
            <span className="capitalize">{verb.category}</span>
            <span className="text-slate-500">{verb.example}</span>
          </article>
        ))}
      </div>

      {filteredIrregularVerbs.length === 0 ? (
        <p className="rounded-3xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
          No irregular verbs found with those filters.
        </p>
      ) : null}
    </section>
  );
}
