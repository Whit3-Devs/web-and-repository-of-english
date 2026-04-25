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
    id: "articles-and-determiners",
    slug: "articles-and-determiners",
    title: "Articles and Determiners",
    section: "core-grammar",
    summary:
      "Choose a, an, the, zero article, and determiners for countable and uncountable nouns.",
    keyIdeas: [
      "Use a or an with one singular countable noun.",
      "Use some, any, much, many, few, and little according to countability."
    ],
    examples: ["I need advice.", "Do you have any questions?"],
    commonMistakes: ["There are much people. → There are many people."],
    relatedTopics: ["Key Structure Differences", "Common Prepositions"],
    fullExplanationPath: "/core-grammar/articles-and-determiners",
    hasFullExplanation: true
  },
  {
    id: "gerunds-and-infinitives",
    slug: "gerunds-and-infinitives",
    title: "Gerunds and Infinitives",
    section: "core-grammar",
    summary:
      "Choose verb + -ing or to + base verb after common verbs, including meaning-change patterns.",
    keyIdeas: [
      "Use gerunds after enjoy, avoid, finish, suggest, keep, and mind.",
      "Use infinitives after want, need, decide, plan, hope, and learn.",
      "Stop doing and stop to do have different meanings."
    ],
    examples: [
      "I enjoy learning English.",
      "I want to improve my speaking.",
      "I stopped working to drink coffee."
    ],
    commonMistakes: [
      "I enjoy to learn English. → I enjoy learning English.",
      "I want improving my English. → I want to improve my English."
    ],
    relatedTopics: ["Key Structure Differences", "Common Prepositions"],
    fullExplanationPath: "/core-grammar/gerunds-and-infinitives",
    hasFullExplanation: true
  },
  {
    id: "passive-voice",
    slug: "passive-voice",
    title: "Passive Voice",
    section: "core-grammar",
    summary:
      "Use passive voice when the action, result, or affected thing matters more than the actor.",
    keyIdeas: [
      "Passive voice uses be plus past participle.",
      "Modal passive forms include can be used, must be fixed, and should be reviewed.",
      "Use passive when the bug was fixed and the result matters more than the actor."
    ],
    examples: [
      "The bug was fixed yesterday.",
      "This option can be used here.",
      "The report is generated automatically."
    ],
    commonMistakes: [
      "The file was update. → The file was updated.",
      "This can used here. → This can be used here."
    ],
    relatedTopics: ["English Auxiliaries", "Verb Tenses"],
    fullExplanationPath: "/core-grammar/passive-voice",
    hasFullExplanation: true
  },
  {
    id: "reported-speech",
    slug: "reported-speech",
    title: "Reported Speech",
    section: "core-grammar",
    summary:
      "Report what someone said, asked, requested, or instructed without quoting exact words.",
    keyIdeas: [
      "Use said that and told me that for reported statements.",
      "Use asked if or asked whether for yes/no questions.",
      "Reported questions use statement word order."
    ],
    examples: [
      "She said that she was busy.",
      "He asked if I needed help.",
      "He asked where she worked."
    ],
    commonMistakes: [
      "She said me that she was busy. → She told me that she was busy.",
      "He asked where did she work. → He asked where she worked."
    ],
    relatedTopics: ["WH Questions", "Embedded WH Clauses"],
    fullExplanationPath: "/core-grammar/reported-speech",
    hasFullExplanation: true
  },
  {
    id: "comparatives-and-superlatives",
    slug: "comparatives-and-superlatives",
    title: "Comparatives and Superlatives",
    section: "core-grammar",
    summary:
      "Choose -er, more, the -est, and the most to compare things or identify the highest degree.",
    keyIdeas: [
      "Use comparatives with than.",
      "Use superlatives with the.",
      "Irregular forms include better and the best."
    ],
    examples: [
      "This option is faster than the old one.",
      "This is the most useful example.",
      "This option is as useful as the old one."
    ],
    commonMistakes: [
      "This is more faster than that. → This is faster than that.",
      "This is better that the old version. → This is better than the old version."
    ],
    relatedTopics: ["Articles and Determiners", "Key Structure Differences"],
    fullExplanationPath: "/core-grammar/comparatives-and-superlatives",
    hasFullExplanation: true
  },
  {
    id: "adjectives-and-adverbs",
    slug: "adjectives-and-adverbs",
    title: "Adjectives and Adverbs",
    section: "core-grammar",
    summary:
      "Choose adjectives for nouns and adverbs for actions, descriptions, and how something happens.",
    keyIdeas: [
      "Adjectives describe nouns like a quick solution.",
      "Adverbs describe actions like works well and loads quickly.",
      "Linking verbs use adjectives: That sounds good."
    ],
    examples: [
      "This is a quick solution.",
      "The app loads quickly.",
      "The feature works well."
    ],
    commonMistakes: [
      "It works good. → It works well.",
      "This is a quickly solution. → This is a quick solution."
    ],
    relatedTopics: ["Comparatives and Superlatives", "Key Structure Differences"],
    fullExplanationPath: "/core-grammar/adjectives-and-adverbs",
    hasFullExplanation: true
  },
  {
    id: "connectors-and-discourse-markers",
    slug: "connectors-and-discourse-markers",
    title: "Connectors and Discourse Markers",
    section: "core-grammar",
    summary:
      "Use connectors and discourse markers to structure technical explanations and decisions.",
    keyIdeas: [
      "Use however and although for contrast.",
      "Use therefore and as a result for results.",
      "Use because, since, so, for example, and finally to organize ideas."
    ],
    examples: [
      "The bug was fixed; therefore, the tests passed.",
      "Although the build failed, the root cause is clear.",
      "As a result, the page loads faster."
    ],
    commonMistakes: [
      "Although it was late, but we continued. → Although it was late, we continued.",
      "However the app crashed. → However, the app crashed."
    ],
    relatedTopics: ["Reported Speech", "Passive Voice"],
    fullExplanationPath: "/core-grammar/connectors-and-discourse-markers",
    hasFullExplanation: true
  },
  {
    id: "practical-writing-patterns",
    slug: "practical-writing-patterns",
    title: "Practical Writing Patterns",
    section: "core-grammar",
    summary:
      "Use writing patterns for bug reports, PR comments, status updates, and technical explanations.",
    keyIdeas: [
      "Use The root cause seems to be for bug report explanations.",
      "Use Could you clarify for clarification requests.",
      "Use I suggest using for solution suggestions."
    ],
    examples: [
      "The root cause seems to be stale cache data.",
      "Could you clarify what should happen when the request fails?",
      "I suggest using a smaller helper function here."
    ],
    commonMistakes: [
      "I have a doubt. → I have a question.",
      "I suggest to use this. → I suggest using this."
    ],
    relatedTopics: ["Connectors and Discourse Markers", "Reported Speech"],
    fullExplanationPath: "/core-grammar/practical-writing-patterns",
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
    expect(matchesGrammarTopic(grammarTopics[3], "articles")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[3], "determiners")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[3], "some")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[3], "uncountable")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[4], "gerunds")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[4], "infinitives")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[4], "enjoy learning")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[4], "want to improve")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[4], "stop doing")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[5], "passive")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[5], "bug was fixed")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[5], "be used")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[5], "past participle")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[5], "modal passive")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[6], "reported speech")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[6], "said that")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[6], "told me")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[6], "asked if")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[6], "statement word order")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[7], "comparatives")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[7], "superlatives")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[7], "faster than")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[7], "the most useful")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[7], "better")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[7], "as useful as")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[8], "adjectives")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[8], "adverbs")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[8], "quickly")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[8], "works well")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[8], "linking verbs")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[9], "connectors")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[9], "discourse markers")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[9], "however")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[9], "therefore")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[9], "although")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[9], "as a result")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[10], "writing patterns")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[10], "bug report")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[10], "root cause")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[10], "could you clarify")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[10], "status update")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[10], "I suggest using")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[11], "polite")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[11], "softer")).toBe(true);
    expect(matchesGrammarTopic(grammarTopics[11], "could you help")).toBe(true);
  });

  it("filters grammar topics by section and full explanation availability", () => {
    expect(filterGrammarTopics(grammarTopics, { section: "modal-verbs" })).toHaveLength(2);
    expect(filterGrammarTopics(grammarTopics, { section: "core-grammar" })).toHaveLength(10);
    expect(filterGrammarTopics(grammarTopics, { hasFullExplanation: false })).toHaveLength(1);
    expect(filterGrammarTopics(grammarTopics, { hasFullExplanation: true })).toHaveLength(11);
  });
});
