import type { GrammarTopic, GrammarTopicSection } from "../shared/types/content";

export const grammarTopics: GrammarTopic[] = [
  {
    id: "ability-and-permission",
    slug: "ability-and-permission",
    title: "Ability and Permission",
    section: "modal-verbs",
    summary:
      "Use can, could, and may to talk about what someone can do or what someone is allowed to do.",
    keyIdeas: [
      "Use can for present ability and everyday permission.",
      "Use could for past ability or softer permission requests.",
      "Use may for formal permission.",
      "After a modal verb, use the base form of the main verb."
    ],
    examples: [
      "I can speak English.",
      "I could swim when I was five.",
      "May I enter?",
      "Could I leave early today?"
    ],
    commonMistakes: [
      "She can speaks English. → She can speak English.",
      "Can I to ask something? → Can I ask something?",
      "May I to enter? → May I enter?"
    ],
    relatedTopics: ["Polite Requests", "Possibility and Probability"],
    fullExplanationPath: "/modal-verbs/ability-and-permission",
    hasFullExplanation: false
  },
  {
    id: "advice-and-obligation",
    slug: "advice-and-obligation",
    title: "Advice and Obligation",
    section: "modal-verbs",
    summary:
      "Use should, ought to, and must to give advice, recommend actions, or express strong obligation.",
    keyIdeas: [
      "Use should for advice or recommendation.",
      "Use ought to for advice or moral duty.",
      "Use must for strong obligation or necessity.",
      "Must not means prohibition, not lack of obligation."
    ],
    examples: [
      "You should practice every day.",
      "We ought to be honest.",
      "You must understand the fundamentals first.",
      "You must not share your password."
    ],
    commonMistakes: [
      "You should to study. → You should study.",
      "He musts go. → He must go.",
      "You ought study. → You ought to study."
    ],
    relatedTopics: ["Ability and Permission", "Possibility and Probability"],
    fullExplanationPath: "/modal-verbs/advice-and-obligation",
    hasFullExplanation: false
  },
  {
    id: "possibility-and-probability",
    slug: "possibility-and-probability",
    title: "Possibility and Probability",
    section: "modal-verbs",
    summary:
      "Use may, might, could, and must to express possibility, uncertainty, or logical deduction.",
    keyIdeas: [
      "Use may when something is possible.",
      "Use might when the possibility feels weaker or more uncertain.",
      "Use could when something is one possible option.",
      "Use must for a strong logical conclusion based on evidence."
    ],
    examples: [
      "It may rain later.",
      "They might not understand the requirement.",
      "This could be the problem.",
      "The server must be down."
    ],
    commonMistakes: [
      "It might rains. → It might rain.",
      "This could to work. → This could work.",
      "You must are tired. → You must be tired."
    ],
    relatedTopics: ["Advice and Obligation", "Ability and Permission"],
    fullExplanationPath: "/modal-verbs/possibility-and-probability",
    hasFullExplanation: false
  },
  {
    id: "polite-requests",
    slug: "polite-requests",
    title: "Polite Requests",
    section: "modal-verbs",
    summary:
      "Use can, could, would, and may to ask for something in a softer or more professional way.",
    keyIdeas: [
      "Use can for direct everyday requests.",
      "Use could to sound softer or more polite.",
      "Use would for polite offers, invitations, and preferences.",
      "Use may for very formal permission requests."
    ],
    examples: [
      "Can you help me?",
      "Could you review this note?",
      "Would you like to practice English?",
      "May I ask a question?"
    ],
    commonMistakes: [
      "Could you to help me? → Could you help me?",
      "Would you like practice? → Would you like to practice?",
      "May I to ask? → May I ask?"
    ],
    relatedTopics: ["Would and Hypotheticals", "Ability and Permission"],
    fullExplanationPath: "/modal-verbs/polite-requests",
    hasFullExplanation: false
  },
  {
    id: "would-and-hypotheticals",
    slug: "would-and-hypotheticals",
    title: "Would and Hypotheticals",
    section: "modal-verbs",
    summary:
      "Use would for preferences, polite wants, invitations, imagined situations, and hypothetical results.",
    keyIdeas: [
      "Would often moves the sentence away from direct reality.",
      "Use would like to for polite wants or invitations.",
      "Use would + base verb for imagined results.",
      "Use would rather + base verb to express preference."
    ],
    examples: [
      "I would like to practice English.",
      "Would you like to review this note?",
      "I would travel more if I had more time.",
      "I would rather practice speaking today."
    ],
    commonMistakes: [
      "I would to travel. → I would travel.",
      "I would like practice. → I would like to practice.",
      "She would rather to study. → She would rather study."
    ],
    relatedTopics: ["Polite Requests", "Advice and Obligation"],
    fullExplanationPath: "/modal-verbs/would-and-hypotheticals",
    hasFullExplanation: false
  },
  {
    id: "wh-questions",
    slug: "wh-questions",
    title: "WH Questions",
    section: "core-grammar",
    summary:
      "Use WH words to ask for specific information about people, things, places, reasons, time, or manner.",
    keyIdeas: [
      "WH questions usually keep the normal question structure after the WH word.",
      "Use what for things or actions.",
      "Use where for places.",
      "Use why for reasons and how for manner or process."
    ],
    examples: [
      "What do you need?",
      "Where does she work?",
      "Why are they waiting?",
      "How did you solve it?"
    ],
    commonMistakes: [
      "What you need? → What do you need?",
      "Where she works? → Where does she work?"
    ],
    relatedTopics: ["Embedded WH Clauses", "English Auxiliaries"],
    fullExplanationPath: "/core-grammar/wh-questions",
    hasFullExplanation: false
  },
  {
    id: "embedded-wh-clauses",
    slug: "embedded-wh-clauses",
    title: "Embedded WH Clauses",
    section: "core-grammar",
    summary:
      "Use embedded WH clauses when a WH idea appears inside another sentence instead of acting as a direct question.",
    keyIdeas: [
      "Embedded WH clauses use statement word order.",
      "They often appear after expressions like I know, I wonder, or Can you tell me.",
      "Do not use question order inside the embedded clause."
    ],
    examples: [
      "I know where she works.",
      "Can you tell me what you need?",
      "I wonder why they changed it."
    ],
    commonMistakes: [
      "I know where does she work. → I know where she works.",
      "Can you tell me what do you need? → Can you tell me what you need?"
    ],
    relatedTopics: ["WH Questions", "English Auxiliaries"],
    fullExplanationPath: "/core-grammar/embedded-wh-clauses",
    hasFullExplanation: false
  },
  {
    id: "english-auxiliaries",
    slug: "english-auxiliaries",
    title: "English Auxiliaries",
    section: "core-grammar",
    summary:
      "Use auxiliary verbs to build negatives, questions, tenses, passive voice, and modal meanings.",
    keyIdeas: [
      "Use do, does, and did for many simple tense questions and negatives.",
      "Use be forms for continuous tenses and passive voice.",
      "Use have forms for perfect tenses.",
      "Use modal auxiliaries before a base verb."
    ],
    examples: [
      "Do you understand?",
      "She is working.",
      "They have finished.",
      "You should practice."
    ],
    commonMistakes: [
      "Does she works? → Does she work?",
      "She is work now. → She is working now.",
      "I have went. → I have gone."
    ],
    relatedTopics: ["Verb Tenses", "Modal Verbs"],
    fullExplanationPath: "/core-grammar/english-auxiliaries",
    hasFullExplanation: false
  },
  {
    id: "common-prepositions",
    slug: "common-prepositions",
    title: "Common Prepositions",
    section: "core-grammar",
    summary:
      "Use prepositions to connect nouns or pronouns with ideas such as place, time, movement, cause, or topic.",
    keyIdeas: [
      "Use in for enclosed spaces, months, years, and longer periods.",
      "Use on for surfaces, days, and dates.",
      "Use at for specific points, exact times, and precise locations.",
      "Prepositions often depend on fixed expressions, so examples matter."
    ],
    examples: [
      "I live in Argentina.",
      "The book is on the table.",
      "The meeting starts at 9.",
      "We talked about the problem."
    ],
    commonMistakes: [
      "I am in Monday. → I am available on Monday.",
      "The meeting is in 9. → The meeting is at 9."
    ],
    relatedTopics: ["Key Structure Differences", "WH Questions"],
    fullExplanationPath: "/core-grammar/common-prepositions",
    hasFullExplanation: false
  },
  {
    id: "pronouns-possessives-and-object-forms",
    slug: "pronouns-possessives-and-object-forms",
    title: "Pronouns, Possessives, and Object Forms",
    section: "core-grammar",
    summary:
      "Use subject pronouns, object pronouns, possessive adjectives, and possessive pronouns to avoid repeating nouns.",
    keyIdeas: [
      "Use subject pronouns before the verb.",
      "Use object pronouns after verbs or prepositions.",
      "Use possessive adjectives before a noun.",
      "Use possessive pronouns without a noun."
    ],
    examples: [
      "She works here.",
      "I called him.",
      "This is her laptop.",
      "That notebook is hers."
    ],
    commonMistakes: [
      "I called he. → I called him.",
      "This is hers laptop. → This is her laptop."
    ],
    relatedTopics: ["Common Prepositions", "English Auxiliaries"],
    fullExplanationPath: "/core-grammar/pronouns-possessives-and-object-forms",
    hasFullExplanation: false
  },
  {
    id: "key-structure-differences",
    slug: "key-structure-differences",
    title: "Key Structure Differences",
    section: "core-grammar",
    summary:
      "Compare similar English structures so you can choose the right one instead of memorizing isolated formulas.",
    keyIdeas: [
      "Present Simple focuses on routines; Present Continuous focuses on actions happening now.",
      "Past Simple marks finished past time; Present Perfect connects past and present.",
      "Will often expresses instant decisions; going to often expresses plans or evidence.",
      "For and since both mark duration, but they answer different questions."
    ],
    examples: [
      "I work every day.",
      "I am working right now.",
      "I saw her yesterday.",
      "I have seen that movie before."
    ],
    commonMistakes: [
      "I am working every day. → I work every day.",
      "I have seen her yesterday. → I saw her yesterday."
    ],
    relatedTopics: ["Verb Tenses", "Modal Verbs", "Common Prepositions"],
    fullExplanationPath: "/core-grammar/key-structure-differences",
    hasFullExplanation: false
  }
];

export function getGrammarTopicsBySection(section: GrammarTopicSection) {
  return grammarTopics.filter((topic) => topic.section === section);
}

export function findGrammarTopic(section: GrammarTopicSection, slug: string) {
  return grammarTopics.find((topic) => topic.section === section && topic.slug === slug);
}
