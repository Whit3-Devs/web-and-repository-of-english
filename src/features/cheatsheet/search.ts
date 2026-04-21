import type {
  GrammarTopic,
  GrammarTopicSection,
  IrregularVerb,
  IrregularVerbFrequency,
  VerbTense
} from "../../shared/types/content";
import { normalizeText } from "../../shared/utils/normalizeText";

type VerbTenseFilters = {
  searchTerm?: string;
  category?: VerbTense["category"];
  hasFullExplanation?: boolean;
};

type IrregularVerbFilters = {
  searchTerm?: string;
  frequency?: IrregularVerbFrequency;
  category?: string;
};

type GrammarTopicFilters = {
  searchTerm?: string;
  section?: GrammarTopicSection;
  hasFullExplanation?: boolean;
};

export function matchesVerbTense(verbTense: VerbTense, searchTerm: string) {
  const normalizedSearchTerm = normalizeText(searchTerm);

  if (!normalizedSearchTerm) {
    return true;
  }

  const searchableContent = [
    verbTense.name,
    verbTense.summary,
    verbTense.mainUse,
    verbTense.timelineIdea,
    verbTense.timeline,
    verbTense.structures.affirmative,
    verbTense.structures.negative,
    verbTense.structures.interrogative,
    ...verbTense.examples,
    ...verbTense.signals,
    verbTense.contrast,
    ...verbTense.commonMistakes,
    ...verbTense.relatedTopics,
    verbTense.category
  ]
    .map(normalizeText)
    .join(" ");

  return searchableContent.includes(normalizedSearchTerm);
}

export function matchesIrregularVerb(irregularVerb: IrregularVerb, searchTerm: string) {
  const normalizedSearchTerm = normalizeText(searchTerm);

  if (!normalizedSearchTerm) {
    return true;
  }

  const searchableContent = [
    irregularVerb.infinitive,
    irregularVerb.pastSimple,
    irregularVerb.pastParticiple,
    irregularVerb.meaning ?? "",
    irregularVerb.example,
    irregularVerb.frequency,
    irregularVerb.category
  ]
    .map(normalizeText)
    .join(" ");

  return searchableContent.includes(normalizedSearchTerm);
}

export function matchesGrammarTopic(topic: GrammarTopic, searchTerm: string) {
  const normalizedSearchTerm = normalizeText(searchTerm);

  if (!normalizedSearchTerm) {
    return true;
  }

  const searchableContent = [
    topic.title,
    topic.section,
    topic.summary,
    ...topic.keyIdeas,
    ...topic.examples,
    ...topic.commonMistakes,
    ...topic.relatedTopics
  ]
    .map(normalizeText)
    .join(" ");

  return searchableContent.includes(normalizedSearchTerm);
}

export function filterVerbTenses(
  verbTenses: VerbTense[],
  { searchTerm = "", category, hasFullExplanation }: VerbTenseFilters
) {
  return verbTenses.filter((verbTense) => {
    const matchesCategory = category ? verbTense.category === category : true;
    const matchesFullExplanation =
      typeof hasFullExplanation === "boolean"
        ? verbTense.hasFullExplanation === hasFullExplanation
        : true;

    return (
      matchesCategory &&
      matchesFullExplanation &&
      matchesVerbTense(verbTense, searchTerm)
    );
  });
}

export function filterIrregularVerbs(
  irregularVerbs: IrregularVerb[],
  { searchTerm = "", frequency, category }: IrregularVerbFilters
) {
  return irregularVerbs.filter((irregularVerb) => {
    const matchesFrequency = frequency ? irregularVerb.frequency === frequency : true;
    const matchesCategory = category ? irregularVerb.category === category : true;

    return (
      matchesFrequency &&
      matchesCategory &&
      matchesIrregularVerb(irregularVerb, searchTerm)
    );
  });
}

export function filterGrammarTopics(
  topics: GrammarTopic[],
  { searchTerm = "", section, hasFullExplanation }: GrammarTopicFilters
) {
  return topics.filter((topic) => {
    const matchesSection = section ? topic.section === section : true;
    const matchesFullExplanation =
      typeof hasFullExplanation === "boolean"
        ? topic.hasFullExplanation === hasFullExplanation
        : true;

    return (
      matchesSection &&
      matchesFullExplanation &&
      matchesGrammarTopic(topic, searchTerm)
    );
  });
}
