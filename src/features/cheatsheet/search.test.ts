import { describe, expect, it } from "vitest";
import type { GrammarTopic, IrregularVerb, VerbTense } from "../../shared/types/content";
import {
  filterGrammarTopics,
  filterIrregularVerbs,
  filterVerbTenses,
  matchesGrammarTopic,
  matchesIrregularVerb,
  matchesVerbTense
} from "./search";

const verbTenses: VerbTense[] = [
  {
    id: "present-simple",
    slug: "present-simple",
    name: "Present Simple",
    summary: "Routines and facts.",
    mainUse: "Routines and facts.",
    timelineIdea: "Stable repeated action around now.",
    timeline: "PAST -------- NOW -------- FUTURE",
    structures: {
      affirmative: "Subject + verb",
      negative: "Subject + do/does not + verb",
      interrogative: "Do/Does + subject + verb?"
    },
    examples: ["I work every day."],
    signals: ["always", "usually"],
    contrast: "Compare with Present Continuous.",
    commonMistakes: ["She work instead of she works."],
    relatedTopics: ["Present Continuous"],
    fullExplanationPath: "/verb-tenses/present-simple",
    hasFullExplanation: false,
    category: "present"
  }
];

const irregularVerbs: IrregularVerb[] = [
  {
    id: "go",
    slug: "go",
    infinitive: "go",
    pastSimple: "went",
    pastParticiple: "gone",
    meaning: "move from one place to another",
    example: "I went home.",
    frequency: "high",
    category: "movement",
    fullExplanationPath: "/irregular-verbs/go",
    hasFullExplanation: false
  }
];

const grammarTopics: GrammarTopic[] = [
  {
    id: "modal-verbs-overview",
    slug: "modal-verbs-overview",
    title: "Modal Verbs Overview",
    section: "modal-verbs",
    summary: "Choose the right modal by intention, tone, and strength.",
    keyIdeas: ["Use may, might, could, should, must, and would by communicative goal."],
    examples: ["Could you help me?", "It might rain later."],
    commonMistakes: ["He musts go. → He must go."],
    relatedTopics: ["Polite Requests", "Advice and Obligation"],
    fullExplanationPath: "/modal-verbs/modal-verbs-overview",
    hasFullExplanation: true
  },
  {
    id: "conditionals-overview",
    slug: "conditionals-overview",
    title: "Conditionals Overview",
    section: "core-grammar",
    summary: "Choose the right if-clause for facts, real future, unreal present, unreal past, and mixed results.",
    keyIdeas: [
      "Zero conditional talks about facts.",
      "Third and mixed conditionals help with unreal past meanings."
    ],
    examples: [
      "If you heat water, it boils.",
      "If I had studied, I would have passed."
    ],
    commonMistakes: [
      "If it will rain, we will stay home. → If it rains, we will stay home."
    ],
    relatedTopics: ["Would and Hypotheticals", "Key Structure Differences"],
    fullExplanationPath: "/core-grammar/conditionals-overview",
    hasFullExplanation: true
  },
  {
    id: "question-builder-cheat-sheet",
    slug: "question-builder-cheat-sheet",
    title: "Question Builder Cheat Sheet",
    section: "core-grammar",
    summary: "Build English questions with the right auxiliary and word order.",
    keyIdeas: [
      "Use do/does/did when there is no other auxiliary.",
      "Short answers repeat the auxiliary."
    ],
    examples: ["What do you need?", "Does he work here?", "Can you help me?"],
    commonMistakes: [
      "What you need? → What do you need?",
      "Does he works here? → Does he work here?"
    ],
    relatedTopics: ["WH Questions", "English Auxiliaries"],
    fullExplanationPath: "/core-grammar/question-builder-cheat-sheet",
    hasFullExplanation: true
  },
  {
    id: "polite-requests",
    slug: "polite-requests",
    title: "Polite Requests",
    section: "modal-verbs",
    summary: "Ask for something in a softer way.",
    keyIdeas: ["Use could for softer requests."],
    examples: ["Could you help me?"],
    commonMistakes: ["Could you to help me? → Could you help me?"],
    relatedTopics: ["Would and Hypotheticals"],
    fullExplanationPath: "/modal-verbs/polite-requests",
    hasFullExplanation: false
  }
];

describe("cheatsheet search", () => {
  it("matches verb tenses by name, examples and signals", () => {
    expect(matchesVerbTense(verbTenses[0], "present")).toBe(true);
    expect(matchesVerbTense(verbTenses[0], "work every")).toBe(true);
    expect(matchesVerbTense(verbTenses[0], "usually")).toBe(true);
    expect(matchesVerbTense(verbTenses[0], "continuous")).toBe(true);
  });

  it("matches irregular verbs by forms and meaning", () => {
    expect(matchesIrregularVerb(irregularVerbs[0], "went")).toBe(true);
    expect(matchesIrregularVerb(irregularVerbs[0], "gone")).toBe(true);
    expect(matchesIrregularVerb(irregularVerbs[0], "move")).toBe(true);
  });

  it("filters verb tenses by search term and category", () => {
    expect(filterVerbTenses(verbTenses, { searchTerm: "routines" })).toHaveLength(1);
    expect(filterVerbTenses(verbTenses, { category: "past" })).toHaveLength(0);
  });

  it("filters verb tenses by full explanation availability", () => {
    expect(filterVerbTenses(verbTenses, { hasFullExplanation: false })).toHaveLength(1);
    expect(filterVerbTenses(verbTenses, { hasFullExplanation: true })).toHaveLength(0);
  });

  it("filters irregular verbs by search term, frequency and category", () => {
    expect(filterIrregularVerbs(irregularVerbs, { searchTerm: "home" })).toHaveLength(1);
    expect(filterIrregularVerbs(irregularVerbs, { frequency: "low" })).toHaveLength(0);
    expect(filterIrregularVerbs(irregularVerbs, { category: "movement" })).toHaveLength(1);
  });

  it("matches grammar topics by title, summary, examples and key ideas", () => {
    expect(matchesGrammarTopic(grammarTopics[0], "overview")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[0], "strength")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[0], "might rain")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[1], "conditional")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[1], "if i had studied")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[1], "mixed")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[2], "builder")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[2], "does he work")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[2], "auxiliary")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[3], "polite")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[3], "softer")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[3], "could you help")).toBe(true);
  });

  it("filters grammar topics by section and full explanation availability", () => {
    expect(filterGrammarTopics(grammarTopics, { section: "modal-verbs" })).toHaveLength(2);
    expect(filterGrammarTopics(grammarTopics, { section: "core-grammar" })).toHaveLength(2);
    expect(filterGrammarTopics(grammarTopics, { hasFullExplanation: false })).toHaveLength(1);
    expect(filterGrammarTopics(grammarTopics, { hasFullExplanation: true })).toHaveLength(3);
  });
});
