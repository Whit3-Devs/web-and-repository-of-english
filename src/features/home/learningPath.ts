import { grammarTopicSectionDetails, grammarTopics } from "../../data/grammarTopics";
import { verbTenses } from "../../data/verbTenses";
import type { CefrLevel } from "../../shared/types/content";
import { cefrLevelOrder } from "../../shared/utils/cefrLevel";

export type LearningPathItem = {
  id: string;
  label: string;
  to: string;
  level: CefrLevel;
  sectionLabel: string;
};

export type LearningPathLevelGroup = {
  level: CefrLevel;
  items: LearningPathItem[];
};

function buildAllLearningPathItems(): LearningPathItem[] {
  const tenseItems: LearningPathItem[] = verbTenses.map((tense) => ({
    id: `verb-tense-${tense.id}`,
    label: tense.name,
    to: tense.fullExplanationPath,
    level: tense.level,
    sectionLabel: "Verb Tenses"
  }));

  const topicItems: LearningPathItem[] = grammarTopics.map((topic) => ({
    id: `grammar-topic-${topic.id}`,
    label: topic.title,
    to: topic.fullExplanationPath,
    level: topic.level,
    sectionLabel: grammarTopicSectionDetails[topic.section].label
  }));

  return [...tenseItems, ...topicItems];
}

// Verb tenses form the skeleton of the language, so within each level they are
// listed before grammar topics. Both lists keep their existing pedagogical
// order from the data files.
export function buildLearningPath(): LearningPathLevelGroup[] {
  const allItems = buildAllLearningPathItems();

  return cefrLevelOrder
    .map((level) => ({
      level,
      items: allItems.filter((item) => item.level === level)
    }))
    .filter((group) => group.items.length > 0);
}

export function getFirstLearningPathItem(): LearningPathItem | undefined {
  return buildLearningPath()[0]?.items[0];
}
