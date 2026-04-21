export type VerbTense = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  mainUse: string;
  timelineIdea: string;
  timeline: string;
  structures: {
    affirmative: string;
    negative: string;
    interrogative: string;
  };
  examples: string[];
  signals: string[];
  contrast: string;
  commonMistakes: string[];
  relatedTopics: string[];
  fullExplanationPath: string;
  hasFullExplanation: boolean;
  category: "present" | "past" | "future" | "perfect";
};

export type IrregularVerbFrequency = "high" | "medium" | "low";

export type IrregularVerb = {
  id: string;
  infinitive: string;
  pastSimple: string;
  pastParticiple: string;
  meaning?: string;
  example: string;
  frequency: IrregularVerbFrequency;
  category: string;
};

export type GrammarTopicSection = "modal-verbs" | "core-grammar";

export type GrammarTopic = {
  id: string;
  slug: string;
  title: string;
  section: GrammarTopicSection;
  summary: string;
  keyIdeas: string[];
  examples: string[];
  commonMistakes: string[];
  relatedTopics: string[];
  fullExplanationPath: string;
  hasFullExplanation: boolean;
};
