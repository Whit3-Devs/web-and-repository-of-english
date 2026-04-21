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
    infinitive: "go",
      pastSimple: "went",
      pastParticiple: "gone",
    meaning: "move from one place to another",
    example: "I went home.",
    frequency: "high",
    category: "movement"
  }
];

const grammarTopics: GrammarTopic[] = [
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
    expect(matchesGrammarTopic(grammarTopics[0], "polite")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[0], "softer")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[0], "could you help")).toBe(true);
  });

  it("filters grammar topics by section and full explanation availability", () => {
    expect(filterGrammarTopics(grammarTopics, { section: "modal-verbs" })).toHaveLength(1);
    expect(filterGrammarTopics(grammarTopics, { section: "core-grammar" })).toHaveLength(0);
    expect(filterGrammarTopics(grammarTopics, { hasFullExplanation: false })).toHaveLength(1);
    expect(filterGrammarTopics(grammarTopics, { hasFullExplanation: true })).toHaveLength(0);
  });
});
