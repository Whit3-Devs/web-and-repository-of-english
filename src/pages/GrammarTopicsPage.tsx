import { GrammarTopicCard } from "../components/GrammarTopicCard";
import { SearchInput } from "../components/SearchInput";
import { grammarTopics } from "../data/grammarTopics";
import { filterGrammarTopics } from "../features/cheatsheet/search";
import type { GrammarTopicSection } from "../shared/types/content";
import { useCheatsheetStore } from "../store/useCheatsheetStore";

type GrammarTopicsPageProps = {
  section: GrammarTopicSection;
};

const sectionCopy: Record<
  GrammarTopicSection,
  { eyebrow: string; title: string; description: string }
> = {
  "modal-verbs": {
    eyebrow: "Modal Verbs",
    title: "Modal Verbs",
    description:
      "Choose modal verbs by communicative intention: ability, permission, advice, obligation, possibility, requests, or hypothetical meaning."
  },
  "core-grammar": {
    eyebrow: "Core Grammar",
    title: "Core Grammar",
    description:
      "Fast cards for the grammar structures you need often: WH questions, auxiliaries, prepositions, pronouns, and key contrasts."
  }
};

export function GrammarTopicsPage({ section }: GrammarTopicsPageProps) {
  const searchTerm = useCheatsheetStore((state) => state.searchTerm);
  const setSearchTerm = useCheatsheetStore((state) => state.setSearchTerm);
  const copy = sectionCopy[section];

  const filteredTopics = filterGrammarTopics(grammarTopics, {
    searchTerm,
    section
  });

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
          {copy.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-black text-slate-950 dark:text-slate-50">{copy.title}</h2>
        <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-400 dark:text-slate-500">{copy.description}</p>
      </div>

      <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 shadow-sm">
        <SearchInput
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search by topic, example, or key idea"
        />
      </div>

      <div className="grid gap-4">
        {filteredTopics.map((topic) => (
          <GrammarTopicCard key={topic.id} topic={topic} />
        ))}
      </div>

      {filteredTopics.length === 0 ? (
        <p className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-600 p-8 text-center text-slate-500 dark:text-slate-400 dark:text-slate-500">
          No grammar topics found with those filters.
        </p>
      ) : null}
    </section>
  );
}
