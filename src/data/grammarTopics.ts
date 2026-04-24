import type { GrammarTopic, GrammarTopicSection } from "../shared/types/content";

export const grammarTopics: GrammarTopic[] = [
  {
    id: "modal-verbs-overview",
    slug: "modal-verbs-overview",
    title: "Modal Verbs Overview",
    section: "modal-verbs",
    summary:
      "Use this overview to choose the right modal by intention, tone, and strength before you open a deeper topic.",
    keyIdeas: [
      "Use can, could, and may around ability and permission.",
      "Use may, might, could, and must to express different levels of possibility or deduction.",
      "Use should, ought to, and must to move from advice to strong obligation.",
      "Use could, would, and may to soften requests or sound more formal."
    ],
    examples: [
      "Can I open the window?",
      "It might rain later.",
      "You should rest today.",
      "Would you help me with this?"
    ],
    commonMistakes: [
      "She can speaks English. → She can speak English.",
      "It might rains later. → It might rain later.",
      "He musts go now. → He must go now."
    ],
    relatedTopics: [
      "Ability and Permission",
      "Advice and Obligation",
      "Possibility and Probability",
      "Polite Requests",
      "Would and Hypotheticals"
    ],
    fullExplanationPath: "/modal-verbs/modal-verbs-overview",
    hasFullExplanation: true
  },
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
    hasFullExplanation: true
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
    hasFullExplanation: true
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
    hasFullExplanation: true
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
    hasFullExplanation: true
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
    hasFullExplanation: true
  },
  {
    id: "conditionals-overview",
    slug: "conditionals-overview",
    title: "Conditionals Overview",
    section: "core-grammar",
    summary:
      "Compare English conditionals fast so you can choose the right if-clause for facts, real future results, unreal present ideas, past regrets, and mixed meanings.",
    keyIdeas: [
      "Zero conditional talks about facts and general results.",
      "First conditional talks about real future possibility.",
      "Second conditional talks about unreal or imagined present/future situations.",
      "Third and mixed conditionals help you talk about past unreal situations and their consequences."
    ],
    examples: [
      "If you heat water, it boils.",
      "If it rains, we will stay home.",
      "If I had more time, I would study more.",
      "If I had studied, I would have passed."
    ],
    commonMistakes: [
      "If it will rain, we will stay home. → If it rains, we will stay home.",
      "If I would have known, I would have called. → If I had known, I would have called.",
      "If I would be rich, I would travel more. → If I were rich, I would travel more."
    ],
    relatedTopics: [
      "Would and Hypotheticals",
      "Key Structure Differences",
      "Verb Tenses"
    ],
    fullExplanationPath: "/core-grammar/conditionals-overview",
    hasFullExplanation: true
  },
  {
    id: "question-builder-cheat-sheet",
    slug: "question-builder-cheat-sheet",
    title: "Question Builder Cheat Sheet",
    section: "core-grammar",
    summary:
      "Build English questions fast with the right auxiliary, word order, and short answer pattern.",
    keyIdeas: [
      "Start with the question type: yes/no or WH.",
      "Choose the helper system first: do/does/did, be, have, or a modal.",
      "After do, does, and did, use the base form of the main verb.",
      "Short answers repeat the auxiliary, not the whole main verb phrase."
    ],
    examples: [
      "Do you work here?",
      "Where does she live?",
      "Have they finished yet?",
      "Can you help me?"
    ],
    commonMistakes: [
      "What you need? → What do you need?",
      "Does he works here? → Does he work here?",
      "Where she is? → Where is she?",
      "Can you to help me? → Can you help me?"
    ],
    relatedTopics: [
      "WH Questions",
      "Embedded WH Clauses",
      "English Auxiliaries",
      "Polite Requests"
    ],
    fullExplanationPath: "/core-grammar/question-builder-cheat-sheet",
    hasFullExplanation: true
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
    hasFullExplanation: true
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
    hasFullExplanation: true
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
    hasFullExplanation: true
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
    hasFullExplanation: true
  },
  {
    id: "pronouns-possessives-and-object-forms",
    slug: "pronouns-possessives-and-object-forms",
    title: "Pronouns, Possessives, Object Forms, and Reflexives",
    section: "core-grammar",
    summary:
      "Use subject pronouns, object pronouns, possessive forms, and reflexives according to the function each word has in the sentence.",
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
    hasFullExplanation: true
  },
  {
    id: "articles-and-determiners",
    slug: "articles-and-determiners",
    title: "Articles and Determiners",
    section: "core-grammar",
    summary:
      "Use a, an, the, zero article, and common determiners to make nouns specific, general, countable, or uncountable.",
    keyIdeas: [
      "Use a or an with one singular countable noun when the listener does not know the exact item yet.",
      "Use the when the noun is specific, already known, or clear from context.",
      "Use zero article for general plural nouns and general uncountable nouns.",
      "Choose determiners like some, any, much, many, few, and little according to countability and sentence type."
    ],
    examples: [
      "I need a notebook.",
      "The notebook on my desk is blue.",
      "Life is hard sometimes.",
      "Do you have any questions?"
    ],
    commonMistakes: [
      "I need an advice. → I need advice.",
      "The life is hard. → Life is hard.",
      "She has car. → She has a car.",
      "There are much people. → There are many people."
    ],
    relatedTopics: ["Key Structure Differences", "Common Prepositions", "Pronouns, Possessives, Object Forms, and Reflexives"],
    fullExplanationPath: "/core-grammar/articles-and-determiners",
    hasFullExplanation: true
  },
  {
    id: "gerunds-and-infinitives",
    slug: "gerunds-and-infinitives",
    title: "Gerunds and Infinitives",
    section: "core-grammar",
    summary:
      "Use verb + -ing and verb + to + base verb patterns after common verbs, and notice when the form changes the meaning.",
    keyIdeas: [
      "Use verb + -ing after verbs like enjoy, avoid, finish, suggest, keep, and mind.",
      "Use verb + to + base verb after verbs like want, need, decide, plan, hope, and learn.",
      "Some verbs can take both forms with a similar meaning, like like, love, hate, prefer, start, and begin.",
      "Some verbs change meaning depending on the form: stop doing is not the same as stop to do."
    ],
    examples: [
      "I enjoy learning English.",
      "I want to improve my speaking.",
      "I like reading, and I like to read before bed.",
      "I stopped working to drink coffee."
    ],
    commonMistakes: [
      "I enjoy to learn English. → I enjoy learning English.",
      "I want improving my English. → I want to improve my English.",
      "She suggested to review the lesson. → She suggested reviewing the lesson.",
      "I stopped to smoke. / I stopped smoking. → These sentences have different meanings."
    ],
    relatedTopics: [
      "Key Structure Differences",
      "Articles and Determiners",
      "Common Prepositions"
    ],
    fullExplanationPath: "/core-grammar/gerunds-and-infinitives",
    hasFullExplanation: true
  },
  {
    id: "passive-voice",
    slug: "passive-voice",
    title: "Passive Voice",
    section: "core-grammar",
    summary:
      "Use passive voice when the action, result, process, or affected thing matters more than who performed the action.",
    keyIdeas: [
      "Build passive voice with be + past participle.",
      "Use passive when the actor is unknown, obvious, unimportant, or less important than the result.",
      "Use modal passive forms like can be used, must be fixed, and should be reviewed.",
      "Use by only when the actor adds useful information."
    ],
    examples: [
      "The file was updated.",
      "The bug was fixed yesterday.",
      "The report is generated automatically.",
      "This option can be used here."
    ],
    commonMistakes: [
      "The bug fixed yesterday. → The bug was fixed yesterday.",
      "The file was update. → The file was updated.",
      "The report is generate automatically. → The report is generated automatically.",
      "This can used here. → This can be used here."
    ],
    relatedTopics: [
      "English Auxiliaries",
      "Verb Tenses",
      "Gerunds and Infinitives",
      "Key Structure Differences"
    ],
    fullExplanationPath: "/core-grammar/passive-voice",
    hasFullExplanation: true
  },
  {
    id: "reported-speech",
    slug: "reported-speech",
    title: "Reported Speech",
    section: "core-grammar",
    summary:
      "Use reported speech to explain what someone said, asked, requested, or instructed without quoting their exact words.",
    keyIdeas: [
      "Use said, told, explained, mentioned, or promised to report statements.",
      "Use asked plus statement word order to report WH questions.",
      "Use asked if or asked whether to report yes/no questions.",
      "Use asked me to or told me not to for requests and instructions."
    ],
    examples: [
      "She said that she was busy.",
      "He asked where she worked.",
      "They asked if I needed help.",
      "She asked me to review the file."
    ],
    commonMistakes: [
      "She said me that she was busy. → She told me that she was busy.",
      "He asked where did she work. → He asked where she worked.",
      "They asked me review the file. → They asked me to review the file.",
      "He told me don't change it. → He told me not to change it."
    ],
    relatedTopics: [
      "WH Questions",
      "Embedded WH Clauses",
      "English Auxiliaries",
      "Key Structure Differences"
    ],
    fullExplanationPath: "/core-grammar/reported-speech",
    hasFullExplanation: true
  },
  {
    id: "comparatives-and-superlatives",
    slug: "comparatives-and-superlatives",
    title: "Comparatives and Superlatives",
    section: "core-grammar",
    summary:
      "Use -er, more, the -est, and the most to compare two things or identify the highest degree in a group.",
    keyIdeas: [
      "Use adjective + -er + than for many short adjectives.",
      "Use more + adjective + than for longer adjectives.",
      "Use the + adjective + -est or the most + adjective for superlatives.",
      "Learn irregular forms like good, better, the best and bad, worse, the worst."
    ],
    examples: [
      "This option is faster than the old one.",
      "This explanation is more useful than the previous one.",
      "This is the fastest solution.",
      "That was the most reliable version."
    ],
    commonMistakes: [
      "This is more faster than that. → This is faster than that.",
      "This is more easy than before. → This is easier than before.",
      "This is the most fastest option. → This is the fastest option.",
      "This is better that the old version. → This is better than the old version."
    ],
    relatedTopics: [
      "Articles and Determiners",
      "Key Structure Differences",
      "Adjectives and Adverbs"
    ],
    fullExplanationPath: "/core-grammar/comparatives-and-superlatives",
    hasFullExplanation: true
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
    hasFullExplanation: true
  }
];

export function getGrammarTopicsBySection(section: GrammarTopicSection) {
  return grammarTopics.filter((topic) => topic.section === section);
}

export function findGrammarTopic(section: GrammarTopicSection, slug: string) {
  return grammarTopics.find((topic) => topic.section === section && topic.slug === slug);
}
