import { GrammarTopicCard } from "../components/GrammarTopicCard";
import { SearchInput } from "../components/SearchInput";
import { Card, EmptyState, PageHeader } from "../components/ui";
import { grammarTopicSectionDetails, grammarTopics } from "../data/grammarTopics";
import { filterGrammarTopics } from "../features/cheatsheet/search";
import type { GrammarTopicSection } from "../shared/types/content";
import { useCheatsheetStore } from "../store/useCheatsheetStore";

type GrammarTopicsPageProps = {
  section: GrammarTopicSection;
};

export function GrammarTopicsPage({ section }: GrammarTopicsPageProps) {
  const searchTerm = useCheatsheetStore((state) => state.searchTerm);
  const setSearchTerm = useCheatsheetStore((state) => state.setSearchTerm);
  const copy = grammarTopicSectionDetails[section];

  const filteredTopics = filterGrammarTopics(grammarTopics, {
    searchTerm,
    section
  });

  return (
    <section className="space-y-6">
      <PageHeader
        eyebrow={copy.label}
        title={copy.label}
        description={copy.description}
      />

      <Card padding="sm">
        <SearchInput
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search by topic, example, or key idea"
        />
      </Card>

      <div className="grid gap-4">
        {filteredTopics.map((topic) => (
          <GrammarTopicCard key={topic.id} topic={topic} />
        ))}
      </div>

      {filteredTopics.length === 0 ? (
        <EmptyState
          title="No grammar topics found"
          description="No grammar topics found with those filters."
        />
      ) : null}
    </section>
  );
}
