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

export type VerbTenseReferenceFamily = "present" | "past" | "future";

export type VerbTenseReferenceSection = "affirmative" | "negative" | "question";

export type VerbTenseReferenceRow = {
  tenseName: string;
  tenseSlug: string;
  auxiliary: string;
  contraction: string;
  mainVerbForm: string;
  structure: string;
  example: string;
};

export type VerbTenseReferenceTable = {
  section: VerbTenseReferenceSection;
  rows: VerbTenseReferenceRow[];
};

export type VerbTenseReferenceGroup = {
  family: VerbTenseReferenceFamily;
  title: string;
  quickMemory: string[];
  tables: VerbTenseReferenceTable[];
};

export type VerbTenseDecisionMapContrast = {
  label: string;
  useInsteadOf: string;
  reason: string;
};

export type VerbTenseDecisionMapEntry = {
  id: string;
  title: string;
  primaryTenseSlug: string;
  summary: string;
  decisionQuestion: string;
  useWhen: string[];
  timelineCue: string;
  keywords: string[];
  categories: Array<VerbTense["category"]>;
  contrasts: VerbTenseDecisionMapContrast[];
};

export type VerbTenseFullExplanationFamily = "present" | "past" | "future";

export type VerbTenseFullExplanationComparison = {
  title: string;
  explanation: string;
};

export type VerbTenseFullExplanationConfusionExample = {
  title: string;
  examples: string[];
  takeaway: string;
};

export type VerbTenseFullExplanationExplainedMistake = {
  wrong: string;
  correct: string;
  reason: string;
};

export type VerbTenseFullExplanation = {
  slug: string;
  title: string;
  family: VerbTenseFullExplanationFamily;
  overview: string;
  whenToUse: string[];
  decisionRules?: string[];
  whyThisTense?: string;
  whyNotAnother?: string[];
  mentalModel: string;
  timelineText: string;
  structures: {
    affirmative: string;
    negative: string;
    question: string;
  };
  examples: string[];
  personalizedExamples?: string[];
  signals: string[];
  commonMistakes: Array<{
    wrong: string;
    correct: string;
  }>;
  explainedMistakes?: VerbTenseFullExplanationExplainedMistake[];
  confusionExamples?: VerbTenseFullExplanationConfusionExample[];
  comparisons: VerbTenseFullExplanationComparison[];
  quickPracticePrompts?: string[];
  practiceIdeas: string[];
  relatedTopics: string[];
};

export type IrregularVerbFrequency = "high" | "medium" | "low";

export type IrregularVerb = {
  id: string;
  slug: string;
  infinitive: string;
  pastSimple: string;
  pastParticiple: string;
  meaning?: string;
  example: string;
  fullExplanationPath: string;
  hasFullExplanation: boolean;
  frequency: IrregularVerbFrequency;
  category: string;
};

export type IrregularVerbPatternFamily = "aaa" | "abb" | "aba" | "abc" | "mixed";

export type IrregularVerbPatternDefinition = {
  key: IrregularVerbPatternFamily;
  code: "AAA" | "ABB" | "ABA" | "ABC" | "MIXED";
  title: string;
  memoryLabel: string;
  explanation: string;
};

export type IrregularVerbPatternGroup = IrregularVerbPatternDefinition & {
  verbs: IrregularVerb[];
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

export type GrammarTopicFullExplanationTableGroup =
  | "general"
  | "place"
  | "time"
  | "movement"
  | "means"
  | "cause-purpose-topic";

export type GrammarTopicFullExplanationTableRow = {
  preposition: string;
  use: string;
  pattern: string;
  example: string;
  note?: string;
};

export type GrammarTopicFullExplanationTable = {
  group: GrammarTopicFullExplanationTableGroup;
  title: string;
  rows: GrammarTopicFullExplanationTableRow[];
};

export type GrammarTopicFullExplanationComparison = {
  title: string;
  explanation: string;
  examples: string[];
};

export type GrammarTopicFullExplanationContrastRow = {
  situation: string;
  use: string;
  example: string;
};

export type GrammarTopicFullExplanationContrastTable = {
  title: string;
  rows: GrammarTopicFullExplanationContrastRow[];
};

export type GrammarTopicFullExplanationRuleNote = {
  title: string;
  structure: string;
  examples: string[];
  takeaway: string;
};

export type GrammarTopicFullExplanationMistake = {
  wrong: string;
  correct: string;
  reason: string;
};

export type GrammarTopicFullExplanationFixedExpressionGroup = {
  title: string;
  items: string[];
};

export type GrammarTopicFullExplanationPracticeItem = {
  prompt: string;
  answer: string;
  focus: string;
};

export type GrammarTopicPrepositionsFullExplanation = {
  contentType: "prepositions";
  slug: string;
  title: string;
  section: GrammarTopicSection;
  overview: string;
  whatItDoes: string[];
  basicStructure: string[];
  referenceTables: GrammarTopicFullExplanationTable[];
  comparisonBlocks: GrammarTopicFullExplanationComparison[];
  contrastTables?: GrammarTopicFullExplanationContrastTable[];
  fixedExpressions?: GrammarTopicFullExplanationFixedExpressionGroup[];
  ruleNotes: GrammarTopicFullExplanationRuleNote[];
  commonMistakes: GrammarTopicFullExplanationMistake[];
  practiceItems?: GrammarTopicFullExplanationPracticeItem[];
  examples: string[];
  quickMemory: string[];
  relatedTopics: string[];
};

export type GrammarTopicWhWordRow = {
  whWord: string;
  mainUse: string;
  questionItAnswers: string;
  example: string;
  note?: string;
};

export type GrammarTopicQuestionStructureTable = {
  title: string;
  pattern: string;
  use: string;
  examples: string[];
};

export type GrammarTopicQuestionComparisonBlock = {
  title: string;
  explanation: string;
  examples: string[];
};

export type GrammarTopicQuestionSpecialCase = {
  title: string;
  explanation: string;
  examples: string[];
};

export type GrammarTopicQuestionSideBySideExample = {
  tense: string;
  yesNo: string;
  wh: string;
};

export type GrammarTopicQuestionBuilderCard = {
  title: string;
  yesNoPattern: string;
  whPattern: string;
  use: string;
  examples: string[];
  shortAnswers?: string[];
  notes?: string[];
};

export type GrammarTopicRelatedTopicLink = {
  title: string;
  path: string;
};

export type GrammarTopicWhQuestionsFullExplanation = {
  contentType: "wh-questions";
  slug: string;
  title: string;
  section: GrammarTopicSection;
  overview: string;
  whatItDoes: string[];
  coreRule: string;
  whWordTable: GrammarTopicWhWordRow[];
  structureTables: GrammarTopicQuestionStructureTable[];
  questionTypeComparisons: GrammarTopicQuestionComparisonBlock[];
  specialCases: GrammarTopicQuestionSpecialCase[];
  commonMistakes: GrammarTopicFullExplanationMistake[];
  sideBySideExamples: GrammarTopicQuestionSideBySideExample[];
  quickMemory: string[];
  practiceItems: GrammarTopicFullExplanationPracticeItem[];
  relatedTopics: string[];
};

export type GrammarTopicQuestionBuilderFullExplanation = {
  contentType: "question-builder";
  slug: string;
  title: string;
  section: GrammarTopicSection;
  overview: string;
  whatItDoes: string[];
  universalFormula: string[];
  decisionSteps: string[];
  builderCards: GrammarTopicQuestionBuilderCard[];
  shortAnswerRules: string[];
  commonMistakes: GrammarTopicFullExplanationMistake[];
  quickMemory: string[];
  relatedTopicLinks: GrammarTopicRelatedTopicLink[];
};

export type GrammarTopicConditionalCard = {
  title: string;
  conditionalType: string;
  mainUse: string;
  pattern: string;
  meaning: string;
  examples: string[];
  contrast: string;
};

export type GrammarTopicConditionalsOverviewFullExplanation = {
  contentType: "conditionals-overview";
  slug: string;
  title: string;
  section: GrammarTopicSection;
  overview: string;
  whatItDoes: string[];
  decisionRules: string[];
  conditionalCards: GrammarTopicConditionalCard[];
  commonMistakes: GrammarTopicFullExplanationMistake[];
  quickMemory: string[];
  relatedTopicLinks: GrammarTopicRelatedTopicLink[];
};

export type GrammarTopicEmbeddedDirectComparison = {
  direct: string;
  embedded: string;
};

export type GrammarTopicEmbeddedUsageBlock = {
  title: string;
  explanation: string;
  examples: string[];
};

export type GrammarTopicEmbeddedIntroPattern = {
  pattern: string;
  use: string;
  examples: string[];
};

export type GrammarTopicEmbeddedWhWordUsage = {
  whWord: string;
  use: string;
  example: string;
};

export type GrammarTopicEmbeddedTransformation = {
  direct: string;
  embedded: string;
};

export type GrammarTopicEmbeddedWhClausesFullExplanation = {
  contentType: "embedded-wh-clauses";
  slug: string;
  title: string;
  section: GrammarTopicSection;
  overview: string;
  whatItDoes: string[];
  coreRule: string;
  directVsEmbeddedTable: GrammarTopicEmbeddedDirectComparison[];
  usageBlocks: GrammarTopicEmbeddedUsageBlock[];
  commonIntroPatterns: GrammarTopicEmbeddedIntroPattern[];
  whWordUsage: GrammarTopicEmbeddedWhWordUsage[];
  commonMistakes: GrammarTopicFullExplanationMistake[];
  transformations: GrammarTopicEmbeddedTransformation[];
  quickMemory: string[];
  practiceItems: GrammarTopicFullExplanationPracticeItem[];
  relatedTopics: string[];
};

export type GrammarTopicAuxiliaryReferenceRow = {
  auxiliary: string;
  mainUse: string;
  usedIn: string;
  example: string;
};

export type GrammarTopicAuxiliaryFamilyBlock = {
  title: string;
  use: string;
  structures: string[];
  examples: string[];
};

export type GrammarTopicAuxiliaryPatternRule = {
  title: string;
  rule: string;
  examples: string[];
};

export type GrammarTopicAuxiliaryContractionTable = {
  title: string;
  rows: Array<{
    longForm: string;
    shortForm: string;
  }>;
};

export type GrammarTopicAuxiliaryQuickComparison = {
  title: string;
  explanation: string;
  examples: string[];
};

export type GrammarTopicAuxiliaryModalLinkBlock = {
  title: string;
  explanation: string;
  examples: string[];
};

export type GrammarTopicEnglishAuxiliariesFullExplanation = {
  contentType: "english-auxiliaries";
  slug: string;
  title: string;
  section: GrammarTopicSection;
  overview: string;
  whatItDoes: string[];
  auxiliaryReferenceTable: GrammarTopicAuxiliaryReferenceRow[];
  auxiliaryGroups: GrammarTopicAuxiliaryFamilyBlock[];
  patternRules: GrammarTopicAuxiliaryPatternRule[];
  contractionTables: GrammarTopicAuxiliaryContractionTable[];
  commonMistakes: GrammarTopicFullExplanationMistake[];
  quickComparisons: GrammarTopicAuxiliaryQuickComparison[];
  modalLinkBlock: GrammarTopicAuxiliaryModalLinkBlock;
  quickMemory: string[];
  practiceItems: GrammarTopicFullExplanationPracticeItem[];
  relatedTopics: string[];
};

export type GrammarTopicPronounReferenceRow = {
  subjectPronoun: string;
  objectPronoun: string;
  possessiveAdjective: string;
  possessivePronoun: string;
  reflexive: string;
  example: string;
};

export type GrammarTopicPronounFunctionBlock = {
  title: string;
  use: string;
  examples: string[];
};

export type GrammarTopicPronounFocusWord = {
  word: string;
  type: string;
  meaningHint: string;
  examples: string[];
};

export type GrammarTopicPronounContrastBlock = {
  title: string;
  explanation: string;
  examples: string[];
};

export type GrammarTopicPronounsPossessivesFullExplanation = {
  contentType: "pronouns-possessives";
  slug: string;
  title: string;
  section: GrammarTopicSection;
  overview: string;
  whatItDoes: string[];
  mainReferenceTable: GrammarTopicPronounReferenceRow[];
  functionBlocks: GrammarTopicPronounFunctionBlock[];
  focusWords: GrammarTopicPronounFocusWord[];
  quickRules: string[];
  commonMistakes: GrammarTopicFullExplanationMistake[];
  contrastBlocks: GrammarTopicPronounContrastBlock[];
  quickMemory: string[];
  practiceItems: GrammarTopicFullExplanationPracticeItem[];
  relatedTopics: string[];
};

export type GrammarTopicStructureDifferenceCard = {
  title: string;
  structureA: string;
  structureB: string;
  mainDifference: string;
  whenToUseA: string;
  whenToUseB: string;
  exampleA: string;
  exampleB: string;
  signals?: string[];
  quickMemory?: string[];
};

export type GrammarTopicStructureDifferenceTable = {
  title: string;
  rows: Array<{
    situation: string;
    use: string;
    example: string;
  }>;
};

export type GrammarTopicStructureDifferencesFullExplanation = {
  contentType: "structure-differences";
  slug: string;
  title: string;
  section: GrammarTopicSection;
  overview: string;
  whatItDoes: string[];
  comparisonCards: GrammarTopicStructureDifferenceCard[];
  comparisonTables: GrammarTopicStructureDifferenceTable[];
  decisionRules: string[];
  commonMistakes: GrammarTopicFullExplanationMistake[];
  quickMemory: string[];
  practiceItems: GrammarTopicFullExplanationPracticeItem[];
  relatedTopics: string[];
};

export type GrammarTopicArticleReferenceRow = {
  determiner: string;
  use: string;
  pattern: string;
  example: string;
};

export type GrammarTopicDeterminerCard = {
  title: string;
  mainUse: string;
  rule: string;
  examples: string[];
  commonTrap: string;
};

export type GrammarTopicArticlesDeterminersFullExplanation = {
  contentType: "articles-determiners";
  slug: string;
  title: string;
  section: GrammarTopicSection;
  overview: string;
  whatItDoes: string[];
  articleDecisionRules: string[];
  articleReferenceTable: GrammarTopicArticleReferenceRow[];
  countableUncountableGuidance: string[];
  determinerCards: GrammarTopicDeterminerCard[];
  commonMistakes: GrammarTopicFullExplanationMistake[];
  quickMemory: string[];
  practiceItems: GrammarTopicFullExplanationPracticeItem[];
  relatedTopics: string[];
};

export type GrammarTopicGerundInfinitivePatternCard = {
  title: string;
  pattern: string;
  use: string;
  commonVerbs: string[];
  examples: string[];
  commonTrap: string;
};

export type GrammarTopicGerundInfinitiveMeaningChangeCard = {
  title: string;
  firstPattern: string;
  firstMeaning: string;
  firstExample: string;
  secondPattern: string;
  secondMeaning: string;
  secondExample: string;
};

export type GrammarTopicGerundsInfinitivesFullExplanation = {
  contentType: "gerunds-infinitives";
  slug: string;
  title: string;
  section: GrammarTopicSection;
  overview: string;
  whatItDoes: string[];
  decisionRules: string[];
  patternCards: GrammarTopicGerundInfinitivePatternCard[];
  meaningChangeCards: GrammarTopicGerundInfinitiveMeaningChangeCard[];
  commonMistakes: GrammarTopicFullExplanationMistake[];
  quickMemory: string[];
  practiceItems: GrammarTopicFullExplanationPracticeItem[];
  relatedTopics: string[];
};

export type GrammarTopicPassivePatternCard = {
  title: string;
  structure: string;
  use: string;
  examples: string[];
};

export type GrammarTopicPassiveActiveComparison = {
  active: string;
  passive: string;
  whyPassiveWorks: string;
};

export type GrammarTopicPassiveVoiceFullExplanation = {
  contentType: "passive-voice";
  slug: string;
  title: string;
  section: GrammarTopicSection;
  overview: string;
  whatItDoes: string[];
  decisionRules: string[];
  coreStructure: string[];
  activeVsPassive: GrammarTopicPassiveActiveComparison[];
  passivePatterns: GrammarTopicPassivePatternCard[];
  modalPassivePatterns: GrammarTopicPassivePatternCard[];
  byAgentRules: string[];
  commonMistakes: GrammarTopicFullExplanationMistake[];
  quickMemory: string[];
  practiceItems: GrammarTopicFullExplanationPracticeItem[];
  relatedTopics: string[];
};

export type GrammarTopicReportedSpeechDirectPair = {
  direct: string;
  reported: string;
  note: string;
};

export type GrammarTopicReportingVerbCard = {
  verb: string;
  pattern: string;
  use: string;
  examples: string[];
  commonTrap?: string;
};

export type GrammarTopicReportedSpeechTenseShiftRow = {
  directForm: string;
  reportedForm: string;
  example: string;
};

export type GrammarTopicReportedSpeechFullExplanation = {
  contentType: "reported-speech";
  slug: string;
  title: string;
  section: GrammarTopicSection;
  overview: string;
  whatItDoes: string[];
  decisionRules: string[];
  directVsReported: GrammarTopicReportedSpeechDirectPair[];
  reportingVerbCards: GrammarTopicReportingVerbCard[];
  statementPatterns: GrammarTopicReportedSpeechDirectPair[];
  questionPatterns: GrammarTopicReportedSpeechDirectPair[];
  requestInstructionPatterns: GrammarTopicReportedSpeechDirectPair[];
  tenseShiftGuide: GrammarTopicReportedSpeechTenseShiftRow[];
  commonMistakes: GrammarTopicFullExplanationMistake[];
  quickMemory: string[];
  practiceItems: GrammarTopicFullExplanationPracticeItem[];
  relatedTopics: string[];
};

export type GrammarTopicComparisonPatternCard = {
  title: string;
  pattern: string;
  use: string;
  examples: string[];
  commonTrap: string;
};

export type GrammarTopicIrregularComparisonRow = {
  adjective: string;
  comparative: string;
  superlative: string;
  example: string;
};

export type GrammarTopicComparativesSuperlativesFullExplanation = {
  contentType: "comparatives-superlatives";
  slug: string;
  title: string;
  section: GrammarTopicSection;
  overview: string;
  whatItDoes: string[];
  decisionRules: string[];
  comparativePatterns: GrammarTopicComparisonPatternCard[];
  superlativePatterns: GrammarTopicComparisonPatternCard[];
  irregularForms: GrammarTopicIrregularComparisonRow[];
  equalityLessPatterns: GrammarTopicComparisonPatternCard[];
  commonMistakes: GrammarTopicFullExplanationMistake[];
  quickMemory: string[];
  practiceItems: GrammarTopicFullExplanationPracticeItem[];
  relatedTopics: string[];
};

export type GrammarTopicModalCard = {
  title: string;
  modal: string;
  mainUse: string;
  whenToUse: string;
  tone: string;
  structures: {
    affirmative: string;
    negative: string;
    question: string;
  };
  contractions?: string[];
  examples: string[];
  notes?: string[];
};

export type GrammarTopicModalComparisonBlock = {
  title: string;
  explanation: string;
  examples: string[];
  takeaway: string;
};

export type GrammarTopicModalTopicFullExplanation = {
  contentType: "modal-topic";
  slug: string;
  title: string;
  section: GrammarTopicSection;
  overview: string;
  whatItDoes: string[];
  coreRule: string[];
  decisionRules: string[];
  modalCards: GrammarTopicModalCard[];
  comparisonBlocks: GrammarTopicModalComparisonBlock[];
  explainedMistakes: GrammarTopicFullExplanationMistake[];
  personalizedExamples: string[];
  quickMemory: string[];
  practiceItems: GrammarTopicFullExplanationPracticeItem[];
  relatedTopics: string[];
};

export type GrammarTopicFullExplanation =
  | GrammarTopicPrepositionsFullExplanation
  | GrammarTopicQuestionBuilderFullExplanation
  | GrammarTopicConditionalsOverviewFullExplanation
  | GrammarTopicWhQuestionsFullExplanation
  | GrammarTopicEmbeddedWhClausesFullExplanation
  | GrammarTopicEnglishAuxiliariesFullExplanation
  | GrammarTopicPronounsPossessivesFullExplanation
  | GrammarTopicStructureDifferencesFullExplanation
  | GrammarTopicArticlesDeterminersFullExplanation
  | GrammarTopicGerundsInfinitivesFullExplanation
  | GrammarTopicPassiveVoiceFullExplanation
  | GrammarTopicReportedSpeechFullExplanation
  | GrammarTopicComparativesSuperlativesFullExplanation
  | GrammarTopicModalTopicFullExplanation;
