import type { GrammarTopicFullExplanation, GrammarTopicSection } from "../shared/types/content";

export const grammarTopicFullExplanations: GrammarTopicFullExplanation[] = [
  {
    contentType: "modal-topic",
    slug: "modal-verbs-overview",
    title: "Modal Verbs Overview",
    section: "modal-verbs",
    overview:
      "Use this cheat sheet to choose the right modal fast: start from your intention, then adjust for tone, certainty, and strength.",
    whatItDoes: [
      "Help you decide which modal fits ability, permission, possibility, advice, obligation, requests, or hypotheticals.",
      "Show how tone changes from direct to softer to formal.",
      "Give you one compact bridge page before you jump into a deeper modal topic."
    ],
    coreRule: [
      "Modal choice depends on communicative intention first, then on tone and strength.",
      "After a modal, use the base form of the main verb.",
      "Use stronger modals when the meaning is more certain, more obligatory, or less soft.",
      "Use softer modals when you want more distance, more politeness, or more uncertainty."
    ],
    decisionRules: [
      "If you mean present ability or everyday permission, start with can.",
      "If you want a softer request, a weaker possibility, or past ability, move toward could.",
      "If you want formal permission, use may; if you want a weaker possibility, use might.",
      "If you want advice, use should; if you want stronger pressure, move toward must.",
      "If you want polite wants, invitations, or hypothetical meaning, use would."
    ],
    modalCards: [
      {
        title: "Can / Could / May for ability and permission",
        modal: "can / could / may",
        mainUse: "Ability and permission",
        whenToUse:
          "Use can for present ability and everyday permission, could for past ability or softer permission, and may for formal permission.",
        tone: "Can = direct; could = softer; may = formal.",
        structures: {
          affirmative: "Subject + modal + base verb",
          negative: "Subject + modal + not + base verb",
          question: "Modal + subject + base verb?"
        },
        contractions: ["can't", "couldn't"],
        examples: [
          "I can solve this now.",
          "Could I leave a little earlier?",
          "May I ask a question?"
        ]
      },
      {
        title: "May / Might / Could / Must for possibility",
        modal: "may / might / could / must",
        mainUse: "Possibility and deduction",
        whenToUse:
          "Use may for neutral possibility, might for weaker possibility, could for one possible option, and must for strong logical deduction.",
        tone: "May = neutral; might = weaker; could = one option; must = strong conclusion.",
        structures: {
          affirmative: "Subject + modal + base verb",
          negative: "Subject + modal + not + base verb",
          question: "Modal + subject + base verb?"
        },
        contractions: ["couldn't", "mustn't"],
        examples: [
          "It may rain later.",
          "They might be late.",
          "This could be the problem.",
          "She must be tired."
        ]
      },
      {
        title: "Should / Ought to / Must for advice and obligation",
        modal: "should / ought to / must",
        mainUse: "Advice, moral duty, strong obligation",
        whenToUse:
          "Use should for advice, ought to for slightly more moral or formal advice, and must for strong obligation or prohibition.",
        tone: "Should = normal advice; ought to = more principled; must = strongest.",
        structures: {
          affirmative: "Subject + should / ought to / must + base verb",
          negative: "Subject + shouldn't / ought not to / must not + base verb",
          question: "Should / Ought / Must + subject + base verb?"
        },
        contractions: ["shouldn't", "mustn't"],
        examples: [
          "You should rest.",
          "We ought to be honest.",
          "You must wear your badge."
        ]
      },
      {
        title: "Can / Could / Would / May for requests",
        modal: "can / could / would / may",
        mainUse: "Requests and invitations",
        whenToUse:
          "Use can for direct everyday requests, could for softer requests, would for polite wants and invitations, and may for very formal permission-style requests.",
        tone: "Can = direct; could = polite; would = very natural polite request; may = formal.",
        structures: {
          affirmative: "Subject + modal + base verb",
          negative: "Subject + modal + not + base verb",
          question: "Modal + subject + base verb?"
        },
        contractions: ["can't", "couldn't", "wouldn't"],
        examples: [
          "Can you help me?",
          "Could you review this note?",
          "Would you join us for practice?",
          "May I come in?"
        ]
      },
      {
        title: "Would for hypotheticals and polite preference",
        modal: "would",
        mainUse: "Hypotheticals, polite wants, preference",
        whenToUse:
          "Use would when the meaning moves away from direct reality toward hypothetical result, polite preference, or softer desire.",
        tone: "Soft, polite, and less direct than plain present forms.",
        structures: {
          affirmative: "Subject + would + base verb",
          negative: "Subject + would not + base verb",
          question: "Would + subject + base verb?"
        },
        contractions: ["wouldn't"],
        examples: [
          "I would travel more if I had time.",
          "I would like to practice more.",
          "I would rather stay home tonight."
        ],
        notes: [
          "Would often marks distance from direct reality.",
          "Would like and would rather are very common high-value patterns."
        ]
      },
      {
        title: "Tone guide: direct, softer, formal, strong",
        modal: "tone guide",
        mainUse: "Fast tone map",
        whenToUse:
          "Use this card when you already know the situation but need the right level of politeness, certainty, or pressure.",
        tone: "Direct = can; softer = could; formal = may; strong = must.",
        structures: {
          affirmative: "Choose the modal that matches the tone you want",
          negative: "Keep the same tone logic in negative forms",
          question: "Use the same tone logic when asking"
        },
        examples: [
          "Can I ask? → direct everyday request",
          "Could I ask? → softer request",
          "May I ask? → formal request",
          "You must leave now. → strong obligation"
        ]
      }
    ],
    comparisonBlocks: [
      {
        title: "Can vs Could",
        explanation:
          "Can is more direct and present-focused. Could often sounds softer, more distant, or connected to past ability.",
        examples: [
          "Can you help me? → direct everyday request",
          "Could you help me? → softer and more polite"
        ],
        takeaway: "Move from can to could when you want less direct pressure."
      },
      {
        title: "May vs Might",
        explanation:
          "May expresses possibility with a neutral tone. Might usually feels weaker, less sure, or more tentative.",
        examples: [
          "It may rain later. → possible",
          "It might rain later. → possible, but weaker"
        ],
        takeaway: "Choose might when you want more uncertainty."
      },
      {
        title: "Should vs Must",
        explanation:
          "Should recommends. Must pushes much harder and can sound like necessity, rule, or strong obligation.",
        examples: [
          "You should review your notes. → advice",
          "You must submit the form today. → strong obligation"
        ],
        takeaway: "Advice and obligation are not the same pressure level."
      },
      {
        title: "Could vs Would",
        explanation:
          "Could often softens requests or shows one possible option. Would often marks polite preference, invitation, or hypothetical result.",
        examples: [
          "Could you help me? → softer request",
          "Would you like to join us? → polite invitation"
        ],
        takeaway: "Could softens action; would softens intention or moves toward hypothetical meaning."
      }
    ],
    personalizedExamples: [
      "Can you check this commit message before I push?",
      "Could you review my English note after lunch?",
      "It might take longer if we change the structure now.",
      "You should keep the explanation short and searchable.",
      "I would rather open the overview first and the deep page later."
    ],
    explainedMistakes: [
      {
        wrong: "She can speaks English.",
        correct: "She can speak English.",
        reason: "After a modal, use the base verb, not the third-person form."
      },
      {
        wrong: "It might rains later.",
        correct: "It might rain later.",
        reason: "After might, the main verb stays in base form."
      },
      {
        wrong: "He musts go now.",
        correct: "He must go now.",
        reason: "Modal verbs do not take -s in the third person."
      }
    ],
    quickMemory: [
      "Can = direct ability or permission.",
      "Could = softer request, past ability, or weaker option.",
      "May = formal permission or neutral possibility.",
      "Might = weaker possibility.",
      "Should = advice; must = strong obligation or strong deduction.",
      "Would = polite preference, invitation, or hypothetical result."
    ],
    practiceItems: [],
    relatedTopics: [
      "Ability and Permission",
      "Advice and Obligation",
      "Possibility and Probability",
      "Polite Requests",
      "Would and Hypotheticals"
    ]
  },
  {
    contentType: "modal-topic",
    slug: "ability-and-permission",
    title: "Ability and Permission",
    section: "modal-verbs",
    overview:
      "Use can, could, and may to talk about ability, ask for permission, and choose the right level of formality when you ask or allow something.",
    whatItDoes: [
      "Express what someone is able to do in the present or in the past.",
      "Ask for or give permission with different tones, from everyday to formal.",
      "Help you choose between direct, softer, and more formal modal choices."
    ],
    coreRule: [
      "Subject + modal + base verb + complement",
      "Negative: Subject + modal + not + base verb + complement",
      "Question: Modal + subject + base verb + complement?",
      "After a modal, the main verb stays in the base form: no to and no -s."
    ],
    decisionRules: [
      "If you mean present ability or everyday permission, choose can.",
      "If you mean past ability or a softer permission request, choose could.",
      "If you want more formal permission, choose may.",
      "If you are asking politely, could often sounds softer than can.",
      "After any modal in this topic, keep the next verb in base form."
    ],
    modalCards: [
      {
        title: "Can for present ability",
        modal: "can",
        mainUse: "Present ability",
        whenToUse: "Use it when someone is able to do something now or in general.",
        tone: "Neutral and everyday.",
        structures: {
          affirmative: "Subject + can + base verb",
          negative: "Subject + cannot / can't + base verb",
          question: "Can + subject + base verb?"
        },
        contractions: ["can't"],
        examples: [
          "I can speak English.",
          "She can't drive yet.",
          "Can he solve this problem?"
        ]
      },
      {
        title: "Can for informal permission",
        modal: "can",
        mainUse: "Informal permission",
        whenToUse: "Use it in everyday situations when asking or giving permission directly.",
        tone: "Informal and direct.",
        structures: {
          affirmative: "Subject + can + base verb",
          negative: "Subject + cannot / can't + base verb",
          question: "Can + subject + base verb?"
        },
        contractions: ["can't"],
        examples: [
          "You can sit here.",
          "We can't enter this room.",
          "Can I use your charger?"
        ],
        notes: ["Can is common in natural everyday speech when the context is informal."]
      },
      {
        title: "Could for past ability",
        modal: "could",
        mainUse: "Past ability",
        whenToUse: "Use it for general ability in the past.",
        tone: "Neutral, often descriptive.",
        structures: {
          affirmative: "Subject + could + base verb",
          negative: "Subject + could not / couldn't + base verb",
          question: "Could + subject + base verb?"
        },
        contractions: ["couldn't"],
        examples: [
          "I could swim when I was five.",
          "He couldn't read at that age.",
          "Could she play the piano when she was a child?"
        ],
        notes: [
          "Could usually describes general past ability, not one single successful action."
        ]
      },
      {
        title: "Could for softer permission or polite request",
        modal: "could",
        mainUse: "Softer permission / polite request",
        whenToUse: "Use it when you want to sound less direct than can.",
        tone: "Softer and more polite than can.",
        structures: {
          affirmative: "Subject + could + base verb",
          negative: "Subject + could not / couldn't + base verb",
          question: "Could + subject + base verb?"
        },
        contractions: ["couldn't"],
        examples: [
          "Could I leave early today?",
          "Could you help me for a minute?",
          "We couldn't stay long."
        ],
        notes: ["In questions, could often sounds more polite than can."]
      },
      {
        title: "May for formal permission",
        modal: "may",
        mainUse: "Formal permission",
        whenToUse: "Use it in formal contexts, careful requests, or institutional language.",
        tone: "Formal and respectful.",
        structures: {
          affirmative: "Subject + may + base verb",
          negative: "Subject + may not + base verb",
          question: "May + subject + base verb?"
        },
        examples: [
          "You may enter now.",
          "Students may not use phones during the exam.",
          "May I ask a question?"
        ],
        notes: [
          "May sounds more formal than can.",
          "May not is common; a short contracted form is not the normal teaching priority here."
        ]
      }
    ],
    comparisonBlocks: [
      {
        title: "Can vs Could",
        explanation:
          "Can usually talks about present ability or direct permission. Could often talks about past ability or a softer, more polite request.",
        examples: [
          "I can solve it now. / I could solve it when I had more time.",
          "Can I open the window? / Could I open the window?"
        ],
        takeaway: "Choose could when you want distance, past reference, or softer tone."
      },
      {
        title: "Can vs May",
        explanation:
          "Both can appear around permission, but can sounds everyday and may sounds more formal.",
        examples: [
          "Can I come in? → natural and informal",
          "May I come in? → formal and careful"
        ],
        takeaway: "Choose may when the situation needs more formality."
      },
      {
        title: "Could vs May",
        explanation:
          "Could often softens a request, while may usually highlights formal permission rather than softness.",
        examples: [
          "Could I borrow your pen? → polite and natural",
          "May I leave now? → formal permission"
        ],
        takeaway: "Could is often the better choice for polite everyday interaction; may is stronger in formal settings."
      }
    ],
    personalizedExamples: [
      "I can explain this bug now, but I can't deploy it today.",
      "Could you review my English note after lunch?",
      "May I join the meeting for the last ten minutes?",
      "When I started coding, I couldn't read error messages well.",
      "Now I can write small scripts without help."
    ],
    explainedMistakes: [
      {
        wrong: "She can speaks English.",
        correct: "She can speak English.",
        reason: "After a modal, use the base form of the verb, not the third-person form."
      },
      {
        wrong: "Can I to ask something?",
        correct: "Can I ask something?",
        reason: "After a modal, do not use to before the main verb."
      },
      {
        wrong: "May I to enter?",
        correct: "May I enter?",
        reason: "May is followed directly by the base verb."
      },
      {
        wrong: "He couldn't to swim when he was six.",
        correct: "He couldn't swim when he was six.",
        reason: "Negative modals still take the base verb without to."
      }
    ],
    quickMemory: [
      "Can = present ability or informal permission.",
      "Could = past ability or softer permission/request.",
      "May = formal permission.",
      "After can, could, and may, use the base verb.",
      "No to and no -s after the modal."
    ],
    practiceItems: [
      {
        prompt: "Complete the sentence: She can ___ English very well.",
        answer: "speak",
        focus: "base verb after a modal"
      },
      {
        prompt: "Turn this into a question: I can leave early.",
        answer: "Can I leave early?",
        focus: "question structure with can"
      },
      {
        prompt: "Make it negative: He could swim at five.",
        answer: "He couldn't swim at five.",
        focus: "negative structure with could"
      },
      {
        prompt: "Choose the better formal request: Can I enter? / May I enter?",
        answer: "May I enter?",
        focus: "formal permission"
      },
      {
        prompt: "Correct the sentence: She can studies at night.",
        answer: "She can study at night.",
        focus: "base verb after can"
      }
    ],
    relatedTopics: [
      "Polite Requests",
      "Possibility and Probability",
      "English Auxiliaries",
      "WH Questions"
    ]
  },
  {
    contentType: "modal-topic",
    slug: "advice-and-obligation",
    title: "Advice and Obligation",
    section: "modal-verbs",
    overview:
      "Use should, ought to, and must to give advice, express moral recommendation, show strong obligation, and mark clear prohibition when something is not allowed.",
    whatItDoes: [
      "Help you recommend what someone should do.",
      "Show stronger pressure when something feels necessary or non-negotiable.",
      "Differentiate between advice, moral duty, and prohibition."
    ],
    coreRule: [
      "Subject + should + base verb + complement",
      "Subject + ought to + base verb + complement",
      "Subject + must + base verb + complement",
      "Should and must take the base verb directly; ought to includes to before the base verb."
    ],
    decisionRules: [
      "If you want to give advice or a recommendation, choose should.",
      "If the advice has a moral or slightly more formal tone, choose ought to.",
      "If the situation feels strong, necessary, or obligatory, choose must.",
      "If something is forbidden, choose must not or mustn't.",
      "Do not confuse must not with lack of obligation; it means prohibition."
    ],
    modalCards: [
      {
        title: "Should for advice and recommendation",
        modal: "should",
        mainUse: "Advice, recommendation",
        whenToUse: "Use it when you want to say what is a good idea, wise action, or recommended choice.",
        tone: "Neutral, helpful, and common.",
        structures: {
          affirmative: "Subject + should + base verb",
          negative: "Subject + should not / shouldn't + base verb",
          question: "Should + subject + base verb?"
        },
        contractions: ["shouldn't"],
        examples: [
          "You should rest.",
          "You shouldn't skip practice.",
          "Should we review the notes first?"
        ]
      },
      {
        title: "Ought to for moral or more formal advice",
        modal: "ought to",
        mainUse: "Moral duty, more formal advice",
        whenToUse: "Use it when the advice feels more ethical, responsible, or slightly more formal than should.",
        tone: "A bit more formal and moral in tone.",
        structures: {
          affirmative: "Subject + ought to + base verb",
          negative: "Subject + ought not to + base verb",
          question: "Ought + subject + to + base verb?"
        },
        examples: [
          "You ought to apologize.",
          "We ought not to ignore this problem.",
          "Ought we to call them now?"
        ],
        notes: [
          "Ought to includes to in the structure.",
          "Questions with ought to are less common in everyday speech than questions with should."
        ]
      },
      {
        title: "Must for strong obligation or necessity",
        modal: "must",
        mainUse: "Strong obligation, necessity",
        whenToUse: "Use it when the speaker wants to show strong pressure, necessity, or an important rule.",
        tone: "Strong, direct, and forceful.",
        structures: {
          affirmative: "Subject + must + base verb",
          negative: "Subject + must not / mustn't + base verb",
          question: "Must + subject + base verb?"
        },
        contractions: ["mustn't"],
        examples: [
          "You must wear a seatbelt.",
          "We must finish this today.",
          "Must I bring my passport?"
        ]
      },
      {
        title: "Must not for prohibition",
        modal: "must not",
        mainUse: "Prohibition",
        whenToUse: "Use it when something is not allowed at all.",
        tone: "Strict and prohibitive.",
        structures: {
          affirmative: "Subject + must + base verb",
          negative: "Subject + must not / mustn't + base verb",
          question: "Must + subject + base verb?"
        },
        contractions: ["mustn't"],
        examples: [
          "You must not smoke here.",
          "You mustn't share your password.",
          "Must we stay behind this line?"
        ],
        notes: [
          "Must not means prohibition.",
          "It does not mean that something is unnecessary."
        ]
      }
    ],
    comparisonBlocks: [
      {
        title: "Should vs Ought To",
        explanation:
          "Both can give advice, but ought to often sounds a bit more formal or moral, while should is more common and neutral.",
        examples: [
          "You should rest. → normal recommendation",
          "You ought to tell the truth. → advice with moral weight"
        ],
        takeaway: "Choose should for everyday advice and ought to when the advice feels more principled or formal."
      },
      {
        title: "Should vs Must",
        explanation:
          "Should recommends. Must pushes much harder and can sound like an obligation, rule, or necessity.",
        examples: [
          "You should study more. → recommendation",
          "You must submit the form today. → strong obligation"
        ],
        takeaway: "Choose must only when the pressure or necessity is clearly stronger than normal advice."
      },
      {
        title: "Must vs Must Not",
        explanation:
          "Must tells you something is necessary. Must not tells you something is forbidden.",
        examples: [
          "You must wear a badge. → required",
          "You must not enter this area. → prohibited"
        ],
        takeaway: "Must not means no permission, not no obligation."
      }
    ],
    personalizedExamples: [
      "You should review the pull request before pushing again.",
      "We ought to document this decision so the next session stays clear.",
      "You must back up the database before making that change.",
      "You must not share production credentials in chat.",
      "I should practice speaking every day if I want to sound more natural."
    ],
    explainedMistakes: [
      {
        wrong: "You should to study.",
        correct: "You should study.",
        reason: "After should, use the base verb without to."
      },
      {
        wrong: "He musts go now.",
        correct: "He must go now.",
        reason: "Modal verbs do not add -s in the third person."
      },
      {
        wrong: "You ought study more.",
        correct: "You ought to study more.",
        reason: "Ought must be followed by to."
      },
      {
        wrong: "You must not come if you don't want to.",
        correct: "You don't have to come if you don't want to.",
        reason: "Must not means prohibition, not lack of obligation."
      }
    ],
    quickMemory: [
      "Should = advice.",
      "Ought to = more formal or moral advice.",
      "Must = strong obligation.",
      "Must not = prohibition.",
      "Should and must take the base verb directly; ought to includes to."
    ],
    practiceItems: [
      {
        prompt: "Complete the sentence: You should ___ more water.",
        answer: "drink",
        focus: "base verb after should"
      },
      {
        prompt: "Make it negative: You must share this password.",
        answer: "You must not share this password.",
        focus: "prohibition with must not"
      },
      {
        prompt: "Choose the better option for moral advice: should / ought to",
        answer: "ought to",
        focus: "moral or more formal advice"
      },
      {
        prompt: "Correct the sentence: We ought finish this first.",
        answer: "We ought to finish this first.",
        focus: "ought to structure"
      },
      {
        prompt: "Choose the stronger form: You should be careful. / You must be careful.",
        answer: "You must be careful.",
        focus: "advice vs strong obligation"
      }
    ],
    relatedTopics: [
      "Ability and Permission",
      "Polite Requests",
      "English Auxiliaries",
      "Key Structure Differences"
    ]
  },
  {
    contentType: "modal-topic",
    slug: "possibility-and-probability",
    title: "Possibility and Probability",
    section: "modal-verbs",
    overview:
      "Use may, might, could, and must to talk about possibility, uncertainty, one possible option, or a strong logical conclusion based on evidence.",
    whatItDoes: [
      "Help you talk about different levels of certainty.",
      "Show the difference between a weak possibility, one possible option, and a strong deduction.",
      "Let you choose the modal that matches how sure you really are."
    ],
    coreRule: [
      "Subject + modal + base verb + complement",
      "Negative: Subject + modal + not + base verb + complement",
      "Question: Modal + subject + base verb + complement?",
      "After a modal, the main verb stays in the base form: no to and no -s."
    ],
    decisionRules: [
      "If something is possible, choose may.",
      "If the possibility feels weaker or more uncertain, choose might.",
      "If you want to present one possible option among others, choose could.",
      "If the evidence makes you feel strongly sure, choose must for deduction.",
      "In this topic, must expresses logical conclusion, not obligation."
    ],
    modalCards: [
      {
        title: "May for possibility",
        modal: "may",
        mainUse: "Possibility",
        whenToUse: "Use it when something is possible and you want a neutral probability tone.",
        tone: "Neutral and careful.",
        structures: {
          affirmative: "Subject + may + base verb",
          negative: "Subject + may not + base verb",
          question: "May + subject + base verb?"
        },
        examples: [
          "It may rain later.",
          "She may join the meeting.",
          "May this approach work?"
        ],
        notes: [
          "In this topic, the focus is probability, not permission.",
          "May often sounds slightly more neutral than might."
        ]
      },
      {
        title: "Might for weaker or more uncertain possibility",
        modal: "might",
        mainUse: "Weaker possibility",
        whenToUse: "Use it when you want to sound less certain than with may.",
        tone: "More tentative and less sure.",
        structures: {
          affirmative: "Subject + might + base verb",
          negative: "Subject + might not + base verb",
          question: "Might + subject + base verb?"
        },
        examples: [
          "It might rain later.",
          "They might not understand the requirement.",
          "Might we need more time?"
        ],
        notes: ["Might usually feels weaker or less certain than may."]
      },
      {
        title: "Could for one possible option",
        modal: "could",
        mainUse: "Possible option",
        whenToUse: "Use it when you want to name one possible explanation, result, or action among several options.",
        tone: "Open and exploratory.",
        structures: {
          affirmative: "Subject + could + base verb",
          negative: "Subject + could not / couldn't + base verb",
          question: "Could + subject + base verb?"
        },
        contractions: ["couldn't"],
        examples: [
          "This could be the problem.",
          "We could try another solution.",
          "Could the issue come from the cache?"
        ],
        notes: [
          "Here, could means possible option, not past ability or polite permission."
        ]
      },
      {
        title: "Must for strong logical deduction",
        modal: "must",
        mainUse: "Strong deduction from evidence",
        whenToUse: "Use it when the evidence makes you feel that something is very probably true.",
        tone: "Strong and confident.",
        structures: {
          affirmative: "Subject + must + base verb",
          negative: "Subject + must not / mustn't + base verb",
          question: "Must + subject + base verb?"
        },
        contractions: ["mustn't"],
        examples: [
          "You must be tired.",
          "The server must be down.",
          "Must this be the reason?"
        ],
        notes: [
          "In this topic, must means strong logical conclusion.",
          "It does not mean obligation here.",
          "Must not appears here for structural completeness, not as the main deduction opposite."
        ]
      }
    ],
    comparisonBlocks: [
      {
        title: "May vs Might",
        explanation:
          "Both express possibility, but might usually sounds weaker or more uncertain than may.",
        examples: [
          "It may work. → possible",
          "It might work. → possible, but less certain"
        ],
        takeaway: "Choose might when you want more distance or less confidence."
      },
      {
        title: "Might vs Could",
        explanation:
          "Might focuses on uncertainty level, while could often presents one possible option or explanation among several.",
        examples: [
          "They might be late. → uncertain",
          "The delay could come from traffic. → one possible cause"
        ],
        takeaway: "Choose could when you want to name an option, not only a weak probability."
      },
      {
        title: "Could vs Must",
        explanation:
          "Could keeps the idea open as one possible option. Must shows a strong conclusion based on evidence.",
        examples: [
          "This could be the issue. → one possible explanation",
          "This must be the issue. → strong conclusion from evidence"
        ],
        takeaway: "In this topic, must means deduction, not obligation."
      }
    ],
    personalizedExamples: [
      "This bug might come from stale cache data.",
      "The deploy may fail if the environment variables are missing.",
      "We could try a smaller refactor first.",
      "The API must be down because every request is timing out.",
      "She might join the English practice call later."
    ],
    explainedMistakes: [
      {
        wrong: "It might rains.",
        correct: "It might rain.",
        reason: "After a modal, use the base verb, not the third-person form."
      },
      {
        wrong: "This could to work.",
        correct: "This could work.",
        reason: "After could, do not use to."
      },
      {
        wrong: "You must are tired.",
        correct: "You must be tired.",
        reason: "After must, use the base verb. The correct base form here is be."
      },
      {
        wrong: "We may trying again later.",
        correct: "We may try again later.",
        reason: "After may, use the base form, not verb-ing."
      }
    ],
    quickMemory: [
      "May = possible.",
      "Might = weaker or more uncertain possibility.",
      "Could = one possible option.",
      "Must = strong deduction from evidence.",
      "After all these modals, use the base verb.",
      "Must here does not mean obligation."
    ],
    practiceItems: [
      {
        prompt: "Complete the sentence: It might ___ later.",
        answer: "rain",
        focus: "base verb after might"
      },
      {
        prompt: "Choose the stronger conclusion: This could be the answer. / This must be the answer.",
        answer: "This must be the answer.",
        focus: "possible option vs strong deduction"
      },
      {
        prompt: "Correct the sentence: This could to work.",
        answer: "This could work.",
        focus: "no to after a modal"
      },
      {
        prompt: "Choose the weaker possibility: may / might",
        answer: "might",
        focus: "certainty level"
      },
      {
        prompt: "Complete the sentence: The issue ___ come from the cache.",
        answer: "could",
        focus: "one possible option"
      }
    ],
    relatedTopics: [
      "Ability and Permission",
      "Advice and Obligation",
      "English Auxiliaries",
      "Key Structure Differences"
    ]
  },
  {
    contentType: "modal-topic",
    slug: "polite-requests",
    title: "Polite Requests",
    section: "modal-verbs",
    overview:
      "Use can, could, would, and may to ask for something with the right level of directness, politeness, or formality, and to understand when a request becomes an offer or invitation.",
    whatItDoes: [
      "Help you ask for help, action, or permission with the tone you really want.",
      "Show the difference between direct everyday requests, softer requests, and formal permission questions.",
      "Explain when would introduces an offer, invitation, or would like pattern instead of a simple request."
    ],
    coreRule: [
      "Question pattern: Modal + subject + base verb + complement?",
      "Affirmative pattern: Subject + modal + base verb + complement",
      "Negative pattern: Subject + modal + not + base verb + complement",
      "After can, could, may, and would, the next verb stays in the base form.",
      "Important exception: Would you like to + base verb...? includes to after like, not directly after would."
    ],
    decisionRules: [
      "If you want a direct everyday request, choose can.",
      "If you want a softer and more polite request, choose could.",
      "If you want to offer, invite, or use would like, choose would.",
      "If you want a very formal permission request, choose may.",
      "Do not add to after can, could, may, or would unless the structure is would like to + verb."
    ],
    modalCards: [
      {
        title: "Can for direct everyday requests",
        modal: "can",
        mainUse: "Direct everyday request",
        whenToUse: "Use it when the situation is normal, informal, and you do not need extra distance or formality.",
        tone: "Direct, natural, and everyday.",
        structures: {
          affirmative: "Subject + can + base verb",
          negative: "Subject + cannot / can't + base verb",
          question: "Can + subject + base verb?"
        },
        contractions: ["can't"],
        examples: [
          "Can you help me with this exercise?",
          "Can I use your laptop for a minute?",
          "We can't stay long today."
        ],
        notes: ["In this topic, the main focus of can is direct everyday requesting."]
      },
      {
        title: "Could for softer, more polite requests",
        modal: "could",
        mainUse: "Softer request",
        whenToUse: "Use it when you want to ask without sounding too direct.",
        tone: "Softer, more polite, and slightly more distant than can.",
        structures: {
          affirmative: "Subject + could + base verb",
          negative: "Subject + could not / couldn't + base verb",
          question: "Could + subject + base verb?"
        },
        contractions: ["couldn't"],
        examples: [
          "Could you review this note tonight?",
          "Could I ask you something after class?",
          "I couldn't stay after the meeting."
        ],
        notes: ["Could often sounds more polite than can in everyday requests."]
      },
      {
        title: "Would for offers, invitations, and would like requests",
        modal: "would",
        mainUse: "Polite offer / invitation / preference-based request",
        whenToUse: "Use it when you invite, offer something, or build a polite request with would like.",
        tone: "Polite, careful, and often more socially framed than could.",
        structures: {
          affirmative: "Subject + would + base verb",
          negative: "Subject + would not / wouldn't + base verb",
          question: "Would + subject + base verb?"
        },
        contractions: ["wouldn't"],
        examples: [
          "Would you pass the salt, please?",
          "Would you like to practice English together?",
          "I wouldn't interrupt them right now."
        ],
        notes: [
          "Would often introduces offers, invitations, or polite preference-based requests.",
          "Would like + noun and would like to + base verb are special high-frequency patterns."
        ]
      },
      {
        title: "May for formal permission requests",
        modal: "may",
        mainUse: "Formal permission request",
        whenToUse: "Use it in formal, careful, or institutional situations when asking permission.",
        tone: "Formal and respectful.",
        structures: {
          affirmative: "Subject + may + base verb",
          negative: "Subject + may not + base verb",
          question: "May + subject + base verb?"
        },
        examples: [
          "May I ask a question?",
          "May I leave a little early today?",
          "Students may not enter this room."
        ],
        notes: ["May sounds more formal than can or could in permission requests."]
      }
    ],
    comparisonBlocks: [
      {
        title: "Can vs Could",
        explanation:
          "Both can ask for something, but can sounds more direct and everyday, while could sounds softer and more polite.",
        examples: [
          "Can you open the window? → direct and normal",
          "Could you open the window? → softer and more polite"
        ],
        takeaway: "Choose could when politeness matters more than speed or directness."
      },
      {
        title: "Could vs May",
        explanation:
          "Could is common for polite everyday requests. May usually focuses on formal permission rather than natural everyday softness.",
        examples: [
          "Could I borrow your notes? → polite and natural",
          "May I enter the office? → formal permission"
        ],
        takeaway: "Choose could for polite daily interaction and may for more formal permission contexts."
      },
      {
        title: "Could vs Would",
        explanation:
          "Could often asks someone to do something. Would often frames an offer, invitation, or polite request through preference language like would like.",
        examples: [
          "Could you help me with this file? → asking for action",
          "Would you like to join us? → invitation",
          "Would you pass the salt? → polite social request"
        ],
        takeaway: "Choose would when the request is tied to invitation, offer, or would like style framing."
      }
    ],
    personalizedExamples: [
      "Can you check this bug report before the stand-up?",
      "Could you explain that grammar point one more time?",
      "Would you like to practice speaking after work?",
      "May I ask a question before we move to the next topic?",
      "Would you pass me the notebook where I wrote those examples?"
    ],
    explainedMistakes: [
      {
        wrong: "Could you to help me?",
        correct: "Could you help me?",
        reason: "After could, use the base verb directly. Do not add to."
      },
      {
        wrong: "Would you like practice?",
        correct: "Would you like to practice?",
        reason: "With a verb after would like, use would like to + base verb."
      },
      {
        wrong: "May I to ask a question?",
        correct: "May I ask a question?",
        reason: "After may, use the base verb without to."
      },
      {
        wrong: "Can you helps me for a minute?",
        correct: "Can you help me for a minute?",
        reason: "After a modal, the main verb stays in the base form, not the third-person form."
      }
    ],
    quickMemory: [
      "Can = direct everyday request.",
      "Could = softer and more polite request.",
      "Would = polite offer, invitation, or would like pattern.",
      "May = formal permission request.",
      "After the modal, use the base verb. Only would like to adds to before a verb."
    ],
    practiceItems: [
      {
        prompt: "Choose the softer request: Can you review this? / Could you review this?",
        answer: "Could you review this?",
        focus: "directness vs politeness"
      },
      {
        prompt: "Complete the sentence: Would you like to ___ with us after class?",
        answer: "practice",
        focus: "would like to + base verb"
      },
      {
        prompt: "Correct the sentence: May I to leave now?",
        answer: "May I leave now?",
        focus: "base verb after may"
      },
      {
        prompt: "Choose the more formal permission request: Could I come in? / May I come in?",
        answer: "May I come in?",
        focus: "formal permission"
      },
      {
        prompt: "Complete the request: Can you ___ me with this exercise?",
        answer: "help",
        focus: "base verb after can"
      }
    ],
    relatedTopics: [
      "Ability and Permission",
      "Would and Hypotheticals",
      "Advice and Obligation",
      "English Auxiliaries"
    ]
  },
  {
    contentType: "modal-topic",
    slug: "would-and-hypotheticals",
    title: "Would and Hypotheticals",
    section: "modal-verbs",
    overview:
      "Use would to move meaning away from direct reality and into softer wants, invitations, preferences, or imagined results in hypothetical situations.",
    whatItDoes: [
      "Help you express polite wants and invitations without sounding too direct.",
      "Show how would rather expresses preference between options.",
      "Introduce the core pattern for hypothetical results with if + past simple."
    ],
    coreRule: [
      "Subject + would + base verb + complement",
      "Subject + would like + noun / to + base verb",
      "Subject + would rather + base verb",
      "Subject + would + base verb + if + subject + past simple",
      "After would, use the base verb. Would like to adds to before the verb, but would rather does not."
    ],
    decisionRules: [
      "If you want a polite want or invitation, choose would like.",
      "If you want to show preference between options, choose would rather.",
      "If you want an imagined result in an unreal or hypothetical situation, choose would + base verb with if + past simple.",
      "If you want to sound less direct than want, choose would like.",
      "Do not add to after would or would rather unless the structure is would like to + verb."
    ],
    modalCards: [
      {
        title: "Would for imagined result and softer meaning",
        modal: "would",
        mainUse: "Imagined result / softer space",
        whenToUse: "Use it when you move away from direct reality and describe what someone would do in an imagined situation or softer frame.",
        tone: "Less direct, more imagined, and often more distant from reality.",
        structures: {
          affirmative: "Subject + would + base verb",
          negative: "Subject + would not / wouldn't + base verb",
          question: "Would + subject + base verb?"
        },
        contractions: ["wouldn't"],
        examples: [
          "I would travel more.",
          "She wouldn't ignore that problem.",
          "Would they understand the reason?"
        ],
        notes: [
          "Would often moves meaning away from direct reality into imagined or softer space."
        ]
      },
      {
        title: "Would like for polite wants and invitations",
        modal: "would like",
        mainUse: "Polite want / invitation",
        whenToUse: "Use it when you want something politely or invite someone in a softer way than want.",
        tone: "Polite, softer, and socially careful.",
        structures: {
          affirmative: "Subject + would like + noun / to + base verb",
          negative: "Subject + would not like + noun / to + base verb",
          question: "Would + subject + like + noun / to + base verb?"
        },
        contractions: ["wouldn't"],
        examples: [
          "I would like to practice English.",
          "She wouldn't like that schedule.",
          "Would you like to review this note?"
        ],
        notes: [
          "Would like sounds softer than want.",
          "Use would like to + base verb when the next idea is an action."
        ]
      },
      {
        title: "Would rather for preference",
        modal: "would rather",
        mainUse: "Preference",
        whenToUse: "Use it when you want to say which option you prefer.",
        tone: "Personal, comparative, and preference-focused.",
        structures: {
          affirmative: "Subject + would rather + base verb",
          negative: "Subject + would rather not + base verb",
          question: "Would + subject + rather + base verb?"
        },
        contractions: ["wouldn't"],
        examples: [
          "I would rather practice speaking today.",
          "She would rather not wait until tomorrow.",
          "Would you rather start with grammar or speaking?"
        ],
        notes: ["Do not use to after would rather."]
      },
      {
        title: "Would ... if ... for hypothetical result",
        modal: "would ... if ...",
        mainUse: "Hypothetical result",
        whenToUse: "Use it when you describe the result of an unreal or imagined situation.",
        tone: "Imagined, conditional, and not directly real now.",
        structures: {
          affirmative: "Subject + would + base verb + if + subject + past simple",
          negative: "Subject + would not / wouldn't + base verb + if + subject + past simple",
          question: "Would + subject + base verb + if + subject + past simple?"
        },
        contractions: ["wouldn't"],
        examples: [
          "I would practice more if I had more time.",
          "We wouldn't make that mistake if we checked the details.",
          "Would you move abroad if you had the chance?"
        ],
        notes: [
          "This page introduces the core hypothetical result pattern only.",
          "It does not expand into a full conditionals lesson."
        ]
      }
    ],
    comparisonBlocks: [
      {
        title: "Would Like vs Want",
        explanation:
          "Both express desire, but want is more direct while would like sounds softer and more polite.",
        examples: [
          "I want to practice now. → direct",
          "I would like to practice now. → softer and more polite"
        ],
        takeaway: "Choose would like when you want the same basic meaning with more social softness."
      },
      {
        title: "Would Rather vs Would Like",
        explanation:
          "Would like expresses a polite want or invitation. Would rather expresses preference between options.",
        examples: [
          "I would like to join the class. → polite want",
          "I would rather join the later class. → preference"
        ],
        takeaway: "Choose would rather when the key meaning is preference, not just a polite desire."
      },
      {
        title: "Would for hypothetical result vs direct reality",
        explanation:
          "Would shows an imagined result, while direct reality uses forms that describe what really happens now or in fact.",
        examples: [
          "I practice every day. → direct reality",
          "I would practice more if I had more time. → imagined result"
        ],
        takeaway: "Choose would when the result belongs to an unreal or imagined situation."
      }
    ],
    personalizedExamples: [
      "I would like to review my English notes before the meeting.",
      "I would rather fix the root cause than patch the symptom.",
      "We would ship faster if the requirements were clearer.",
      "Would you like to practice speaking after lunch?",
      "I wouldn't change that config if I didn't understand the side effects."
    ],
    explainedMistakes: [
      {
        wrong: "I would to travel more.",
        correct: "I would travel more.",
        reason: "After would, use the base verb without to."
      },
      {
        wrong: "I would like practice every day.",
        correct: "I would like to practice every day.",
        reason: "Use would like to + base verb when the next idea is an action."
      },
      {
        wrong: "She would rather to study first.",
        correct: "She would rather study first.",
        reason: "Would rather is followed directly by the base verb, not by to + verb."
      },
      {
        wrong: "I would practice more if I will have time.",
        correct: "I would practice more if I had time.",
        reason: "In the core hypothetical pattern taught here, use if + past simple, not will."
      }
    ],
    quickMemory: [
      "Would often moves meaning away from direct reality.",
      "Would like = polite want or invitation.",
      "Would rather = preference.",
      "Would + base verb + if + past simple = hypothetical result.",
      "No to after would or would rather; use would like to + verb."
    ],
    practiceItems: [
      {
        prompt: "Complete the sentence: I would like to ___ my English more this week.",
        answer: "practice",
        focus: "would like to + base verb"
      },
      {
        prompt: "Choose the preference form: I would like / I would rather study speaking first.",
        answer: "I would rather study speaking first.",
        focus: "preference with would rather"
      },
      {
        prompt: "Correct the sentence: She would rather to wait.",
        answer: "She would rather wait.",
        focus: "no to after would rather"
      },
      {
        prompt: "Complete the hypothetical sentence: I would travel more if I ___ more money.",
        answer: "had",
        focus: "if + past simple"
      },
      {
        prompt: "Choose the softer sentence: I want to ask a question. / I would like to ask a question.",
        answer: "I would like to ask a question.",
        focus: "direct desire vs polite softer desire"
      }
    ],
    relatedTopics: [
      "Polite Requests",
      "Advice and Obligation",
      "Possibility and Probability",
      "Key Structure Differences"
    ]
  },
  {
    contentType: "prepositions",
    slug: "common-prepositions",
    title: "Common Prepositions",
    section: "core-grammar",
    overview:
      "Use prepositions to connect nouns, pronouns, or verb-ing forms to ideas such as place, time, movement, cause, topic, means, or company.",
    whatItDoes: [
      "Show location, direction, time, and relationship.",
      "Connect a noun or pronoun to another part of the sentence.",
      "Create fixed patterns that often need to be learned with examples, not only with translation."
    ],
    basicStructure: [
      "Preposition + noun: in the room, on the desk, after lunch.",
      "Preposition + pronoun: with me, for her, from them.",
      "Preposition + verb-ing: after eating, before leaving, without saying goodbye."
    ],
    referenceTables: [
      {
        group: "general",
        title: "General reference table",
        rows: [
          {
            preposition: "in",
            use: "Inside a space, longer time periods, general areas",
            pattern: "in + place/time period",
            example: "She is in the kitchen. I was born in 1998.",
            note: "Use it for countries, cities, months, years, and parts of the day."
          },
          {
            preposition: "on",
            use: "Surfaces, days, dates",
            pattern: "on + surface/day/date",
            example: "The keys are on the table. The meeting is on Monday."
          },
          {
            preposition: "at",
            use: "Exact point, exact time, precise place",
            pattern: "at + point/time",
            example: "Meet me at the station at 8:00."
          },
          {
            preposition: "to",
            use: "Direction, destination, receiver",
            pattern: "to + place/person",
            example: "We walked to the office. Give it to her."
          },
          {
            preposition: "for",
            use: "Purpose, benefit, duration",
            pattern: "for + person/time/use",
            example: "This note is for you. We waited for an hour."
          },
          {
            preposition: "with",
            use: "Company, instrument",
            pattern: "with + person/object",
            example: "I went with my friend. She wrote with a pencil."
          },
          {
            preposition: "by",
            use: "Means, author, passive agent",
            pattern: "by + means/agent",
            example: "I travel by bus. The novel was written by Borges."
          },
          {
            preposition: "about",
            use: "Topic",
            pattern: "about + topic",
            example: "We talked about the problem."
          }
        ]
      },
      {
        group: "place",
        title: "Place",
        rows: [
          {
            preposition: "in",
            use: "Inside an enclosed or limited space",
            pattern: "in + room/building/city/country",
            example: "The phone is in the bag."
          },
          {
            preposition: "on",
            use: "On a surface",
            pattern: "on + surface",
            example: "The laptop is on the desk."
          },
          {
            preposition: "at",
            use: "At a specific point or address",
            pattern: "at + point/place",
            example: "She is at the door."
          },
          {
            preposition: "under",
            use: "Lower position",
            pattern: "under + noun",
            example: "The shoes are under the bed."
          },
          {
            preposition: "between",
            use: "Middle position with two references",
            pattern: "between + A + and + B",
            example: "The bank is between the school and the pharmacy."
          },
          {
            preposition: "next to",
            use: "Very close at the side",
            pattern: "next to + noun",
            example: "The chair is next to the window."
          }
        ]
      },
      {
        group: "time",
        title: "Time",
        rows: [
          {
            preposition: "in",
            use: "Months, years, seasons, parts of the day",
            pattern: "in + month/year/season/part of day",
            example: "I was born in 2000. We study in the morning."
          },
          {
            preposition: "on",
            use: "Days and dates",
            pattern: "on + day/date",
            example: "The class is on Tuesday. Her birthday is on May 9."
          },
          {
            preposition: "at",
            use: "Exact times",
            pattern: "at + clock time",
            example: "The meeting starts at 9:00."
          },
          {
            preposition: "before",
            use: "Earlier than a time or event",
            pattern: "before + noun/verb-ing",
            example: "Review the note before class."
          },
          {
            preposition: "after",
            use: "Later than a time or event",
            pattern: "after + noun/verb-ing",
            example: "We practiced after dinner."
          },
          {
            preposition: "for",
            use: "Duration",
            pattern: "for + length of time",
            example: "She studied for three hours."
          },
          {
            preposition: "since",
            use: "Starting point until now",
            pattern: "since + point in time",
            example: "He has lived here since 2021.",
            note: "Usually appears with Present Perfect or Present Perfect Continuous."
          }
        ]
      },
      {
        group: "movement",
        title: "Movement / Direction",
        rows: [
          {
            preposition: "to",
            use: "Destination",
            pattern: "go/walk/run + to + place",
            example: "They went to the park."
          },
          {
            preposition: "into",
            use: "Movement from outside to inside",
            pattern: "move + into + place",
            example: "She walked into the room."
          },
          {
            preposition: "out of",
            use: "Movement from inside to outside",
            pattern: "move + out of + place",
            example: "He came out of the house."
          },
          {
            preposition: "through",
            use: "Movement through the inside of something",
            pattern: "move + through + space",
            example: "We walked through the tunnel."
          },
          {
            preposition: "across",
            use: "Movement from one side to the other",
            pattern: "move + across + surface/area",
            example: "She ran across the street."
          },
          {
            preposition: "along",
            use: "Movement following a line",
            pattern: "move + along + line/path",
            example: "We walked along the beach."
          }
        ]
      },
      {
        group: "means",
        title: "Company / Means / Instrument",
        rows: [
          {
            preposition: "with",
            use: "Company",
            pattern: "with + person",
            example: "I went with my brother."
          },
          {
            preposition: "with",
            use: "Instrument or tool",
            pattern: "with + object",
            example: "She cut the paper with scissors."
          },
          {
            preposition: "by",
            use: "Means of transport",
            pattern: "by + transport",
            example: "They traveled by train."
          },
          {
            preposition: "by",
            use: "Agent in passive voice",
            pattern: "be + past participle + by + agent",
            example: "The article was written by the editor."
          }
        ]
      },
      {
        group: "cause-purpose-topic",
        title: "Cause / Purpose / Topic",
        rows: [
          {
            preposition: "for",
            use: "Benefit or purpose",
            pattern: "for + person/purpose",
            example: "This guide is for beginners."
          },
          {
            preposition: "about",
            use: "Topic",
            pattern: "about + topic",
            example: "We talked about modal verbs."
          },
          {
            preposition: "of",
            use: "Possession, relation, part of something",
            pattern: "of + noun",
            example: "The roof of the house is new."
          },
          {
            preposition: "because of",
            use: "Cause or reason",
            pattern: "because of + noun phrase",
            example: "The game was canceled because of the rain."
          }
        ]
      }
    ],
    comparisonBlocks: [
      {
        title: "In vs On vs At",
        explanation:
          "Use in for bigger spaces and longer time periods, on for surfaces and days, and at for exact points in place or time.",
        examples: [
          "in Argentina / in the kitchen / in July",
          "on the table / on Monday / on March 25",
          "at home / at the door / at 7:00"
        ]
      },
      {
        title: "To vs In vs Into",
        explanation:
          "Use to for destination, in for position inside, and into for movement from outside to inside.",
        examples: [
          "I go to the room. → destination",
          "I am in the room. → position",
          "I walk into the room. → movement inside"
        ]
      },
      {
        title: "For vs Since",
        explanation:
          "Use for to express duration and since to express the starting point of that duration.",
        examples: [
          "for two hours / for a week / for many years",
          "since Monday / since 2020 / since last night",
          "I have studied for three hours. / I have lived here since 2021."
        ]
      },
      {
        title: "By vs With",
        explanation:
          "Use by for transport, authorship, and passive agents. Use with for company or the instrument you use to do something.",
        examples: [
          "by bus / by train / a novel by Cortázar",
          "with my friend / with a pen / with a knife"
        ]
      }
    ],
    contrastTables: [
      {
        title: "Quick contrast: time prepositions",
        rows: [
          {
            situation: "Exact time",
            use: "at",
            example: "at 7:00"
          },
          {
            situation: "Day or date",
            use: "on",
            example: "on Monday / on May 9"
          },
          {
            situation: "Month, year, season, part of day",
            use: "in",
            example: "in March / in 2026 / in the morning"
          }
        ]
      },
      {
        title: "Quick contrast: movement and duration",
        rows: [
          {
            situation: "Destination",
            use: "to",
            example: "go to school"
          },
          {
            situation: "Movement inside",
            use: "into",
            example: "walk into the room"
          },
          {
            situation: "Duration",
            use: "for",
            example: "for two hours"
          },
          {
            situation: "Starting point",
            use: "since",
            example: "since Monday"
          }
        ]
      }
    ],
    fixedExpressions: [
      {
        title: "Adjective + preposition",
        items: [
          "interested in",
          "good at",
          "afraid of",
          "famous for",
          "different from",
          "ready for"
        ]
      },
      {
        title: "Verb + preposition",
        items: [
          "depend on",
          "listen to",
          "talk about",
          "talk to",
          "arrive at / arrive in",
          "look for"
        ]
      }
    ],
    ruleNotes: [
      {
        title: "Preposition + verb-ing",
        structure: "preposition + verb-ing",
        examples: [
          "before going",
          "after eating",
          "without saying goodbye",
          "Thank you for helping me."
        ],
        takeaway:
          "After a preposition, a verb normally changes to the -ing form instead of staying in the base form."
      }
    ],
    commonMistakes: [
      {
        wrong: "The class starts in 8:00.",
        correct: "The class starts at 8:00.",
        reason: "Use at for exact clock times."
      },
      {
        wrong: "My birthday is at July.",
        correct: "My birthday is in July.",
        reason: "Use in for months, years, seasons, and longer time periods."
      },
      {
        wrong: "I arrived on 2024.",
        correct: "I arrived in 2024.",
        reason: "Use in with years, not on."
      },
      {
        wrong: "Thank you for help me.",
        correct: "Thank you for helping me.",
        reason: "After a preposition, the verb usually needs the -ing form."
      },
      {
        wrong: "She went in the room.",
        correct: "She went into the room.",
        reason: "Use into when there is movement from outside to inside."
      },
      {
        wrong: "I have lived here for Monday.",
        correct: "I have lived here since Monday.",
        reason: "Use since for a starting point and for for duration."
      }
    ],
    practiceItems: [
      {
        prompt: "The lesson starts ___ 8:30.",
        answer: "at",
        focus: "exact time"
      },
      {
        prompt: "We have studied English ___ three months.",
        answer: "for",
        focus: "duration"
      },
      {
        prompt: "She walked ___ the office and sat down.",
        answer: "into",
        focus: "movement inside"
      },
      {
        prompt: "I usually go to work ___ bus.",
        answer: "by",
        focus: "means of transport"
      },
      {
        prompt: "Correct the sentence: Thank you for help me.",
        answer: "Thank you for helping me.",
        focus: "preposition + verb-ing"
      },
      {
        prompt: "Correct the sentence: I have lived here for Monday.",
        answer: "I have lived here since Monday.",
        focus: "starting point"
      }
    ],
    examples: [
      "The keys are in the drawer.",
      "The notebook is on the table.",
      "The lesson starts at 9:00.",
      "They went to the park after lunch.",
      "We talked about the new page.",
      "She traveled by bus with her friend."
    ],
    quickMemory: [
      "Use in for years, months, cities, countries, and larger spaces.",
      "Use on for surfaces, days, and dates.",
      "Use at for exact times and exact points.",
      "Use to for destination and into for movement inside.",
      "Use for duration and since for the starting point.",
      "Use by for transport or passive agent, and with for company or tools.",
      "After a preposition, a verb usually becomes verb-ing."
    ],
    relatedTopics: ["Key Structure Differences", "WH Questions", "English Auxiliaries"]
  },
  {
    contentType: "conditionals-overview",
    slug: "conditionals-overview",
    title: "Conditionals Overview",
    section: "core-grammar",
    overview:
      "Use this overview to compare English conditionals quickly: start from the kind of situation you mean, then choose the if-clause and result pattern that matches reality, time, and consequence.",
    whatItDoes: [
      "Help you choose between factual, real future, unreal present/future, unreal past, and mixed-result conditionals.",
      "Show the core pattern of each conditional without turning the page into a long theory lesson.",
      "Give you quick contrasts so you stop mixing first, second, third, and mixed forms."
    ],
    decisionRules: [
      "If the result is always true or generally true, start with the zero conditional.",
      "If the future result is still real and possible, start with the first conditional.",
      "If the situation is imagined, unlikely, or unreal now, move to the second conditional.",
      "If you are imagining a different past, use the third conditional.",
      "If the unreal past changes a present result, use a mixed conditional."
    ],
    conditionalCards: [
      {
        title: "Zero Conditional",
        conditionalType: "zero conditional",
        mainUse: "Facts, rules, and general results",
        pattern: "If + present simple, present simple",
        meaning:
          "This conditional describes something that is generally true whenever the condition happens.",
        examples: [
          "If you heat water, it boils.",
          "If I don't sleep well, I feel tired."
        ],
        contrast:
          "Do not use it for one possible future result. If the result is a real future possibility, move to the first conditional."
      },
      {
        title: "First Conditional",
        conditionalType: "first conditional",
        mainUse: "Real future possibility and likely result",
        pattern: "If + present simple, will + base verb",
        meaning:
          "This conditional talks about a future situation that is still possible and a result that can really happen.",
        examples: [
          "If it rains, we will stay home.",
          "If you study tonight, you will feel more prepared tomorrow."
        ],
        contrast:
          "Do not put will in the if-clause. If the situation is unreal or imagined now, move to the second conditional."
      },
      {
        title: "Second Conditional",
        conditionalType: "second conditional",
        mainUse: "Unreal present/future, imagination, advice with distance",
        pattern: "If + past simple, would + base verb",
        meaning:
          "This conditional talks about an imagined present or future situation that is not real or not likely now.",
        examples: [
          "If I had more time, I would study more.",
          "If she were here, she would know what to do."
        ],
        contrast:
          "Do not use it for a real future possibility. If the condition was unreal in the past, move to the third conditional."
      },
      {
        title: "Third Conditional",
        conditionalType: "third conditional",
        mainUse: "Unreal past and past regret",
        pattern: "If + past perfect, would have + past participle",
        meaning:
          "This conditional imagines a different past and a different past result that did not happen.",
        examples: [
          "If I had studied, I would have passed.",
          "If they had left earlier, they would have caught the bus."
        ],
        contrast:
          "Do not use it for unreal present meaning. If the unreal past affects the present result, move to a mixed conditional."
      },
      {
        title: "Mixed Conditional",
        conditionalType: "mixed conditional",
        mainUse: "Unreal past cause with present result",
        pattern: "If + past perfect, would + base verb",
        meaning:
          "This conditional connects an unreal past situation to a present consequence that is true now.",
        examples: [
          "If I had gone to bed earlier, I would feel better now.",
          "If she had accepted the offer, she would work in Madrid now."
        ],
        contrast:
          "Keep it only when the cause belongs to the past but the result belongs to the present. If both parts belong to the past, use the third conditional."
      }
    ],
    commonMistakes: [
      {
        wrong: "If it will rain, we will stay home.",
        correct: "If it rains, we will stay home.",
        reason: "In the first conditional, the if-clause normally uses Present Simple, not will."
      },
      {
        wrong: "If I would have known, I would have called.",
        correct: "If I had known, I would have called.",
        reason: "In the third conditional, the if-clause uses past perfect, not would have."
      },
      {
        wrong: "If I would be rich, I would travel more.",
        correct: "If I were rich, I would travel more.",
        reason: "In the second conditional, the if-clause uses Past Simple; were is the standard high-value form here."
      },
      {
        wrong: "If you heat water, it will boil.",
        correct: "If you heat water, it boils.",
        reason: "When the result is a general fact, zero conditional is the clearer choice."
      }
    ],
    quickMemory: [
      "Zero = fact → present + present.",
      "First = real future → present + will.",
      "Second = unreal now → past + would.",
      "Third = unreal past → past perfect + would have + past participle.",
      "Mixed = unreal past cause + present result."
    ],
    relatedTopicLinks: [
      { title: "Would and Hypotheticals", path: "/modal-verbs/would-and-hypotheticals" },
      { title: "Key Structure Differences", path: "/core-grammar/key-structure-differences" },
      { title: "Present Simple", path: "/verb-tenses/present-simple" }
    ]
  },
  {
    contentType: "question-builder",
    slug: "question-builder-cheat-sheet",
    title: "Question Builder Cheat Sheet",
    section: "core-grammar",
    overview:
      "Use this builder when you want the correct English question fast: choose the helper first, keep the right word order, and avoid the most common mistakes.",
    whatItDoes: [
      "Help you build yes/no and WH questions without guessing the auxiliary.",
      "Show the core order for do/does/did, be, have, and modal questions.",
      "Give you quick short-answer patterns so you can respond naturally."
    ],
    universalFormula: [
      "Yes/No question = auxiliary + subject + main verb/complement?",
      "WH question = question word + auxiliary + subject + main verb/complement?",
      "If be is the main verb, move be before the subject.",
      "If you use do / does / did, the main verb goes back to base form."
    ],
    decisionSteps: [
      "Step 1: Decide if you want a yes/no question or a WH question.",
      "Step 2: Choose the helper system: do/does/did, be, have, or a modal.",
      "Step 3: Put the auxiliary before the subject.",
      "Step 4: Keep the main verb in the form required by that helper.",
      "Step 5: For short answers, repeat the auxiliary, not the whole question."
    ],
    builderCards: [
      {
        title: "Do / Does / Did",
        yesNoPattern: "Do/Does/Did + subject + base verb + complement?",
        whPattern: "WH word + do/does/did + subject + base verb + complement?",
        use: "Use this system for Present Simple and Past Simple when there is no other auxiliary.",
        examples: [
          "Do you work here?",
          "Does she like coffee?",
          "Why did they leave early?"
        ],
        shortAnswers: ["Yes, I do. / No, I don't.", "Yes, she does. / No, she doesn't."],
        notes: [
          "After does and did, use the base verb: work, go, like.",
          "Do not keep -s or past form on the main verb."
        ]
      },
      {
        title: "Be",
        yesNoPattern: "Am/Is/Are/Was/Were + subject + complement?",
        whPattern: "WH word + am/is/are/was/were + subject + complement?",
        use: "Use be when be is the main verb or when the tense already uses be.",
        examples: [
          "Are you ready?",
          "Where is she?",
          "Why were they waiting?"
        ],
        shortAnswers: ["Yes, I am. / No, I'm not.", "Yes, they were. / No, they weren't."],
        notes: [
          "Do not add do/does/did with be in normal question building.",
          "Move be before the subject."
        ]
      },
      {
        title: "Have",
        yesNoPattern: "Have/Has/Had + subject + past participle + complement?",
        whPattern: "WH word + have/has/had + subject + past participle + complement?",
        use: "Use have when the tense is perfect.",
        examples: [
          "Have you finished?",
          "Has he called yet?",
          "What had they prepared before the meeting?"
        ],
        shortAnswers: ["Yes, I have. / No, I haven't.", "Yes, he has. / No, he hasn't."],
        notes: [
          "After have/has/had, use the past participle.",
          "Do not replace have with do in perfect questions."
        ]
      },
      {
        title: "Modals",
        yesNoPattern: "Can/Could/Should/Would/May/Might/Must + subject + base verb?",
        whPattern: "WH word + modal + subject + base verb?",
        use: "Use the modal itself as the helper for ability, permission, advice, requests, possibility, and hypotheticals.",
        examples: [
          "Can you help me?",
          "Why should we wait?",
          "What would you choose?"
        ],
        shortAnswers: ["Yes, I can. / No, I can't.", "Yes, we should. / No, we shouldn't."],
        notes: [
          "After a modal, use the base verb.",
          "Do not add to after the modal in normal question building."
        ]
      }
    ],
    shortAnswerRules: [
      "Repeat the auxiliary in the answer: Do you work here? → Yes, I do.",
      "With be, answer with be: Is she ready? → Yes, she is.",
      "With have, answer with have: Have they finished? → No, they haven't.",
      "With modals, answer with the same modal: Can you stay? → No, I can't."
    ],
    commonMistakes: [
      {
        wrong: "What you need?",
        correct: "What do you need?",
        reason: "In Present Simple WH questions, add do when there is no other auxiliary."
      },
      {
        wrong: "Does he works here?",
        correct: "Does he work here?",
        reason: "After does, the main verb returns to the base form."
      },
      {
        wrong: "Where she is?",
        correct: "Where is she?",
        reason: "With be, move the be verb before the subject."
      },
      {
        wrong: "Can you to help me?",
        correct: "Can you help me?",
        reason: "After a modal, use the base verb without to."
      },
      {
        wrong: "Has she finish the task?",
        correct: "Has she finished the task?",
        reason: "After have/has, use the past participle."
      }
    ],
    quickMemory: [
      "Choose the helper first, not the WH word first.",
      "Do/does/did + base verb.",
      "Be moves before the subject by itself.",
      "Have + past participle.",
      "Modal + base verb.",
      "Short answers repeat the auxiliary."
    ],
    relatedTopicLinks: [
      { title: "WH Questions", path: "/core-grammar/wh-questions" },
      { title: "Embedded WH Clauses", path: "/core-grammar/embedded-wh-clauses" },
      { title: "English Auxiliaries", path: "/core-grammar/english-auxiliaries" },
      { title: "Polite Requests", path: "/modal-verbs/polite-requests" }
    ]
  },
  {
    contentType: "wh-questions",
    slug: "wh-questions",
    title: "WH Questions",
    section: "core-grammar",
    overview:
      "Use WH questions to ask for specific information instead of only getting a yes or no answer.",
    whatItDoes: [
      "Ask about a specific person, place, time, reason, thing, choice, possession, or process.",
      "Keep the normal question logic, but add a WH word at the beginning.",
      "Help the speaker guide the answer toward the exact information they need."
    ],
    coreRule: "WH word + auxiliary + subject + main verb + complement?",
    whWordTable: [
      {
        whWord: "what",
        mainUse: "thing, idea, action, general information",
        questionItAnswers: "What information do I want?",
        example: "What do you need?"
      },
      {
        whWord: "where",
        mainUse: "place, direction, location",
        questionItAnswers: "Where does it happen?",
        example: "Where do you live?"
      },
      {
        whWord: "when",
        mainUse: "time, moment, date, period",
        questionItAnswers: "When does it happen?",
        example: "When does the class start?"
      },
      {
        whWord: "who",
        mainUse: "person",
        questionItAnswers: "Who is involved?",
        example: "Who called you?",
        note: "When who is the subject, you usually do not need do/does/did."
      },
      {
        whWord: "why",
        mainUse: "reason, cause, motivation",
        questionItAnswers: "Why does it happen?",
        example: "Why are you tired?"
      },
      {
        whWord: "which",
        mainUse: "choice between limited options",
        questionItAnswers: "Which option do I mean?",
        example: "Which color do you prefer?"
      },
      {
        whWord: "whose",
        mainUse: "possession",
        questionItAnswers: "Who owns it?",
        example: "Whose notebook is this?"
      },
      {
        whWord: "how",
        mainUse: "manner, state, process, degree",
        questionItAnswers: "How does it happen or feel?",
        example: "How do you study English?",
        note: "How also combines with other words: how long, how often, how much, how many."
      }
    ],
    structureTables: [
      {
        title: "With an auxiliary already present",
        pattern: "WH word + auxiliary + subject + main verb/complement?",
        use: "Use this when the tense or modal already gives you an auxiliary.",
        examples: [
          "What are you doing?",
          "Why has he arrived early?",
          "Where will they stay?"
        ]
      },
      {
        title: "With do / does / did",
        pattern: "WH word + do/does/did + subject + base verb + complement?",
        use: "Use this with Present Simple and Past Simple when there is no other auxiliary.",
        examples: [
          "Where do you work?",
          "What does she want?",
          "Why did they leave?"
        ]
      },
      {
        title: "With to be",
        pattern: "WH word + be + subject + complement?",
        use: "Use this when the main verb is a form of be.",
        examples: [
          "Where are you?",
          "Why is she upset?",
          "When was the meeting?"
        ]
      }
    ],
    questionTypeComparisons: [
      {
        title: "Yes/No questions vs WH questions",
        explanation:
          "Yes/No questions check if something is true. WH questions ask for a specific piece of information.",
        examples: [
          "Do you work here? → yes/no",
          "Where do you work? → specific information"
        ]
      },
      {
        title: "Indirect questions",
        explanation:
          "Indirect questions sound softer and use statement order after the introductory phrase.",
        examples: [
          "Direct: Where does she live?",
          "Indirect: Can you tell me where she lives?"
        ]
      },
      {
        title: "Subject questions",
        explanation:
          "When the WH word is the subject, you usually do not use do/does/did because the WH word already fills the subject position.",
        examples: [
          "Who called you?",
          "What happened?",
          "Which student won?"
        ]
      }
    ],
    specialCases: [
      {
        title: "Who as subject",
        explanation:
          "If who is asking about the subject of the sentence, keep the verb directly after who.",
        examples: [
          "Who called you?",
          "Who broke the window?",
          "Who wants coffee?"
        ]
      },
      {
        title: "How expressions",
        explanation:
          "How can combine with other words to ask about age, amount, duration, frequency, distance, or degree.",
        examples: [
          "How old are you?",
          "How often do you practice?",
          "How long did you wait?",
          "How much is this?"
        ]
      },
      {
        title: "Subject questions vs normal WH questions",
        explanation:
          "Normal WH questions usually need an auxiliary before the subject. Subject questions do not, because the WH word itself is the subject.",
        examples: [
          "Who did you meet? → who = object",
          "Who called you? → who = subject"
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: "Where you live?",
        correct: "Where do you live?",
        reason: "Present Simple WH questions usually need do or does when there is no other auxiliary."
      },
      {
        wrong: "Why she is sad?",
        correct: "Why is she sad?",
        reason: "With the verb be, the correct order is WH word + be + subject."
      },
      {
        wrong: "Where do you are?",
        correct: "Where are you?",
        reason: "Do is not used when be is already the main verb."
      },
      {
        wrong: "Can you tell me where does she live?",
        correct: "Can you tell me where she lives?",
        reason: "Indirect questions use statement order after the introductory phrase."
      },
      {
        wrong: "Who did call you?",
        correct: "Who called you?",
        reason: "When who is the subject, you usually do not add do or did."
      }
    ],
    sideBySideExamples: [
      {
        tense: "Present Simple",
        yesNo: "Do you work here?",
        wh: "Where do you work?"
      },
      {
        tense: "Present Continuous",
        yesNo: "Are they studying?",
        wh: "What are they studying?"
      },
      {
        tense: "Past Simple",
        yesNo: "Did she call you?",
        wh: "Why did she call you?"
      },
      {
        tense: "Present Perfect",
        yesNo: "Have you finished?",
        wh: "What have you finished?"
      },
      {
        tense: "To be",
        yesNo: "Is he at home?",
        wh: "Why is he at home?"
      }
    ],
    quickMemory: [
      "Start with the WH word, then keep the normal question logic.",
      "Use do/does/did in Present Simple and Past Simple when there is no other auxiliary.",
      "With be, use WH word + be + subject.",
      "If the WH word is the subject, you usually do not use do/does/did.",
      "Indirect questions use statement order, not question order."
    ],
    practiceItems: [
      {
        prompt: "Turn this into a WH question: You live in Córdoba. Ask about place.",
        answer: "Where do you live?",
        focus: "place question in Present Simple"
      },
      {
        prompt: "Turn this into a WH question: She is tired. Ask about reason.",
        answer: "Why is she tired?",
        focus: "to be question"
      },
      {
        prompt: "Turn this into a WH question: They arrived at 7. Ask about time.",
        answer: "When did they arrive?",
        focus: "Past Simple with did"
      },
      {
        prompt: "Correct the sentence: Where you study English?",
        answer: "Where do you study English?",
        focus: "missing auxiliary"
      },
      {
        prompt: "Correct the sentence: Can you tell me where does he work?",
        answer: "Can you tell me where he works?",
        focus: "indirect question word order"
      }
    ],
    relatedTopics: ["Embedded WH Clauses", "English Auxiliaries", "Key Structure Differences"]
  },
  {
    contentType: "embedded-wh-clauses",
    slug: "embedded-wh-clauses",
    title: "Embedded WH Clauses",
    section: "core-grammar",
    overview:
      "Use embedded WH clauses when a WH structure appears inside a bigger sentence instead of acting as a direct independent question.",
    whatItDoes: [
      "Put a WH idea inside another sentence such as I know..., Can you tell me..., or I wonder....",
      "Keep the meaning of the WH word, but change the word order from question order to statement order.",
      "Help you sound more natural when asking softer questions or reporting information."
    ],
    coreRule: "Embedded WH clauses use statement order: WH word + subject + verb.",
    directVsEmbeddedTable: [
      {
        direct: "Where is he?",
        embedded: "Do you know where he is?"
      },
      {
        direct: "Why did she leave?",
        embedded: "I understand why she left."
      },
      {
        direct: "What does he want?",
        embedded: "Tell me what he wants."
      },
      {
        direct: "How does this work?",
        embedded: "Can you explain how this works?"
      },
      {
        direct: "When will they arrive?",
        embedded: "I don't know when they will arrive."
      }
    ],
    usageBlocks: [
      {
        title: "After common verbs",
        explanation:
          "Embedded WH clauses often follow verbs such as know, ask, tell, explain, remember, wonder, understand, and decide.",
        examples: [
          "I know what you mean.",
          "She asked where the station was.",
          "I wonder how they did it.",
          "We need to decide which option is better."
        ]
      },
      {
        title: "After introductory expressions",
        explanation:
          "They also appear after expressions that introduce a softer or more indirect request for information.",
        examples: [
          "I'm not sure where he works.",
          "Do you know why she left?",
          "Can you tell me how this app works?",
          "Could you explain what happened?"
        ]
      },
      {
        title: "Inside longer ideas",
        explanation:
          "An embedded WH clause can simply be one part of a larger statement, not only a soft question.",
        examples: [
          "The problem is that nobody knows when the meeting starts.",
          "I like how she explains grammar.",
          "We discussed what we should do next."
        ]
      }
    ],
    commonIntroPatterns: [
      {
        pattern: "I know + embedded WH clause",
        use: "State that you have the information.",
        examples: [
          "I know where she lives.",
          "I know what you need."
        ]
      },
      {
        pattern: "Do you know + embedded WH clause",
        use: "Ask for information in a natural, softer way.",
        examples: [
          "Do you know where he is?",
          "Do you know what time it is?"
        ]
      },
      {
        pattern: "Can you tell me + embedded WH clause",
        use: "Ask someone to provide information politely.",
        examples: [
          "Can you tell me where she works?",
          "Can you tell me why this matters?"
        ]
      },
      {
        pattern: "I wonder + embedded WH clause",
        use: "Show uncertainty or curiosity.",
        examples: [
          "I wonder why she is upset.",
          "I wonder how they solved it."
        ]
      },
      {
        pattern: "Could you explain + embedded WH clause",
        use: "Ask for clarification in a more formal or careful way.",
        examples: [
          "Could you explain what happened?",
          "Could you explain why the route changed?"
        ]
      }
    ],
    whWordUsage: [
      {
        whWord: "what",
        use: "thing, information, or idea inside a larger sentence",
        example: "I know what you need."
      },
      {
        whWord: "where",
        use: "place or location",
        example: "She asked where I lived."
      },
      {
        whWord: "when",
        use: "time or moment",
        example: "I remember when we met."
      },
      {
        whWord: "why",
        use: "reason or cause",
        example: "He explained why he was late."
      },
      {
        whWord: "how",
        use: "manner or process",
        example: "Show me how this works."
      },
      {
        whWord: "who",
        use: "person",
        example: "Do you know who called?"
      },
      {
        whWord: "which",
        use: "choice between options",
        example: "We must decide which route is better."
      },
      {
        whWord: "whose",
        use: "possession",
        example: "He asked whose laptop that was."
      }
    ],
    commonMistakes: [
      {
        wrong: "Can you tell me where does she live?",
        correct: "Can you tell me where she lives?",
        reason: "Embedded WH clauses use statement order, so the auxiliary does not move before the subject."
      },
      {
        wrong: "Do you know where is my phone?",
        correct: "Do you know where my phone is?",
        reason: "With be, embedded clauses still use subject + be, not inversion."
      },
      {
        wrong: "I know what does he want.",
        correct: "I know what he wants.",
        reason: "Do not keep direct-question structure inside the embedded clause."
      },
      {
        wrong: "I wonder why is she upset.",
        correct: "I wonder why she is upset.",
        reason: "After I wonder, the embedded clause keeps normal statement order."
      }
    ],
    transformations: [
      {
        direct: "Where does she work?",
        embedded: "Do you know where she works?"
      },
      {
        direct: "Why is he angry?",
        embedded: "I don't know why he is angry."
      },
      {
        direct: "What did they buy?",
        embedded: "Tell me what they bought."
      },
      {
        direct: "How can I fix this?",
        embedded: "Can you explain how I can fix this?"
      },
      {
        direct: "When will the class start?",
        embedded: "Do you know when the class will start?"
      }
    ],
    quickMemory: [
      "Direct questions use question order, but embedded WH clauses use statement order.",
      "Think: WH word + subject + verb, not WH word + auxiliary + subject.",
      "This pattern often appears after know, ask, wonder, tell me, and explain.",
      "Do not invert be inside the embedded clause.",
      "If the WH idea is inside a larger sentence, check the word order first."
    ],
    practiceItems: [
      {
        prompt: "Turn this into an embedded clause: Where does she work?",
        answer: "Do you know where she works?",
        focus: "direct question to embedded clause"
      },
      {
        prompt: "Turn this into an embedded clause: Why is he upset?",
        answer: "I wonder why he is upset.",
        focus: "be verb in statement order"
      },
      {
        prompt: "Correct the sentence: Can you tell me where does he live?",
        answer: "Can you tell me where he lives?",
        focus: "remove question order"
      },
      {
        prompt: "Correct the sentence: Do you know what time is it?",
        answer: "Do you know what time it is?",
        focus: "embedded clause with be"
      }
    ],
    relatedTopics: ["WH Questions", "English Auxiliaries", "Key Structure Differences"]
  },
  {
    contentType: "english-auxiliaries",
    slug: "english-auxiliaries",
    title: "English Auxiliaries",
    section: "core-grammar",
    overview:
      "Use auxiliaries to build questions, negatives, continuous forms, perfect forms, and future forms without changing the core meaning of the main verb.",
    whatItDoes: [
      "Help form questions and negatives in simple tenses.",
      "Build continuous, perfect, and future structures.",
      "Control the verb form that comes after them, so structure matters as much as meaning."
    ],
    auxiliaryReferenceTable: [
      {
        auxiliary: "do",
        mainUse: "questions and negatives",
        usedIn: "Present Simple",
        example: "Do you work here?"
      },
      {
        auxiliary: "does",
        mainUse: "questions and negatives with he/she/it",
        usedIn: "Present Simple",
        example: "Does she live here?"
      },
      {
        auxiliary: "did",
        mainUse: "questions and negatives",
        usedIn: "Past Simple",
        example: "Did they call you?"
      },
      {
        auxiliary: "am / is / are",
        mainUse: "present be forms",
        usedIn: "Present Continuous / going to",
        example: "She is going to travel."
      },
      {
        auxiliary: "was / were",
        mainUse: "past be forms",
        usedIn: "Past Continuous",
        example: "They were talking."
      },
      {
        auxiliary: "have / has",
        mainUse: "perfect forms",
        usedIn: "Present Perfect",
        example: "I have finished."
      },
      {
        auxiliary: "had",
        mainUse: "perfect forms in the past",
        usedIn: "Past Perfect",
        example: "They had left."
      },
      {
        auxiliary: "will",
        mainUse: "future",
        usedIn: "Future with will",
        example: "We will call you."
      }
    ],
    auxiliaryGroups: [
      {
        title: "Do / Does",
        use: "Use them to build Present Simple questions and negatives.",
        structures: [
          "Negative: Subject + do/does not + base verb",
          "Question: Do/Does + subject + base verb?"
        ],
        examples: [
          "Do you work here?",
          "She does not work here.",
          "Does he like coffee?"
        ]
      },
      {
        title: "Did",
        use: "Use it to build Past Simple questions and negatives.",
        structures: [
          "Negative: Subject + did not + base verb",
          "Question: Did + subject + base verb?"
        ],
        examples: [
          "Did they call you?",
          "I did not see her yesterday.",
          "Did she finish the task?"
        ]
      },
      {
        title: "Am / Is / Are",
        use: "Use them for Present Continuous and going to future forms.",
        structures: [
          "Continuous: Subject + am/is/are + verb-ing",
          "Going to: Subject + am/is/are going to + base verb"
        ],
        examples: [
          "I am studying now.",
          "She is not working.",
          "They are going to travel."
        ]
      },
      {
        title: "Was / Were",
        use: "Use them for Past Continuous.",
        structures: [
          "Affirmative: Subject + was/were + verb-ing",
          "Question: Was/Were + subject + verb-ing?"
        ],
        examples: [
          "She was reading.",
          "They were not sleeping.",
          "Were you waiting?"
        ]
      },
      {
        title: "Have / Has",
        use: "Use them for Present Perfect.",
        structures: [
          "Affirmative: Subject + have/has + past participle",
          "Question: Have/Has + subject + past participle?"
        ],
        examples: [
          "I have finished my work.",
          "He has not arrived yet.",
          "Have you seen it?"
        ]
      },
      {
        title: "Had",
        use: "Use it for Past Perfect.",
        structures: [
          "Affirmative: Subject + had + past participle",
          "Question: Had + subject + past participle?"
        ],
        examples: [
          "They had left.",
          "She had not called.",
          "Had they finished before noon?"
        ]
      },
      {
        title: "Will",
        use: "Use it for future statements, offers, promises, and predictions.",
        structures: [
          "Affirmative: Subject + will + base verb",
          "Question: Will + subject + base verb?"
        ],
        examples: [
          "I will help you.",
          "She will not call.",
          "Will they come?"
        ]
      }
    ],
    patternRules: [
      {
        title: "After do / does / did / will",
        rule: "Use the base form of the main verb after these auxiliaries.",
        examples: [
          "Do you work here?",
          "Did she go?",
          "I will call you."
        ]
      },
      {
        title: "After be in continuous forms",
        rule: "Use verb-ing after am / is / are / was / were when building continuous tenses.",
        examples: [
          "She is working.",
          "They were studying."
        ]
      },
      {
        title: "After have / has / had",
        rule: "Use the past participle after perfect auxiliaries.",
        examples: [
          "I have seen it.",
          "They had left before noon."
        ]
      }
    ],
    contractionTables: [
      {
        title: "Negative contractions",
        rows: [
          { longForm: "do not", shortForm: "don't" },
          { longForm: "does not", shortForm: "doesn't" },
          { longForm: "did not", shortForm: "didn't" },
          { longForm: "is not", shortForm: "isn't" },
          { longForm: "are not", shortForm: "aren't" },
          { longForm: "was not", shortForm: "wasn't" },
          { longForm: "were not", shortForm: "weren't" },
          { longForm: "have not", shortForm: "haven't" },
          { longForm: "has not", shortForm: "hasn't" },
          { longForm: "had not", shortForm: "hadn't" },
          { longForm: "will not", shortForm: "won't" }
        ]
      },
      {
        title: "Common short forms",
        rows: [
          { longForm: "I am", shortForm: "I'm" },
          { longForm: "you are", shortForm: "you're" },
          { longForm: "he is", shortForm: "he's" },
          { longForm: "we are", shortForm: "we're" },
          { longForm: "I have", shortForm: "I've" },
          { longForm: "they have", shortForm: "they've" },
          { longForm: "I will", shortForm: "I'll" },
          { longForm: "they will", shortForm: "they'll" }
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: "She don't like it.",
        correct: "She doesn't like it.",
        reason: "Use does not with he, she, and it in Present Simple."
      },
      {
        wrong: "Does she works here?",
        correct: "Does she work here?",
        reason: "After does, the main verb returns to the base form."
      },
      {
        wrong: "Did you went?",
        correct: "Did you go?",
        reason: "After did, use the base form, not the past form."
      },
      {
        wrong: "She are working.",
        correct: "She is working.",
        reason: "Use is with he, she, and it in the present."
      },
      {
        wrong: "I have saw that movie.",
        correct: "I have seen that movie.",
        reason: "Perfect forms need the past participle, not the simple past."
      },
      {
        wrong: "I will to call you.",
        correct: "I will call you.",
        reason: "Will is followed by the base form without to."
      }
    ],
    quickComparisons: [
      {
        title: "Do / Does vs Am / Is / Are",
        explanation:
          "Use do/does for Present Simple questions and negatives, but use am/is/are when the main verb is be or when you build a continuous or going to form.",
        examples: [
          "Do you work here?",
          "Are you tired?",
          "She is going to travel."
        ]
      },
      {
        title: "Did vs past verb in affirmatives",
        explanation:
          "Use did only in questions and negatives. In affirmative Past Simple sentences, the main verb itself shows the past.",
        examples: [
          "They visited us.",
          "Did they visit us?",
          "They did not visit us."
        ]
      },
      {
        title: "Have / Has vs Had",
        explanation:
          "Have and has build Present Perfect, while had builds Past Perfect.",
        examples: [
          "She has arrived.",
          "They had left before we arrived."
        ]
      },
      {
        title: "Will vs be going to",
        explanation:
          "Will often marks a decision, offer, or prediction. Be going to often shows a plan or present evidence.",
        examples: [
          "I'll help you.",
          "She is going to study tonight."
        ]
      }
    ],
    modalLinkBlock: {
      title: "Short modal link",
      explanation:
        "Modal auxiliaries also come before a base verb, but they are covered in the Modal Verbs section because their meaning is the main focus there.",
      examples: [
        "You can study now.",
        "We should practice every day.",
        "He might be late."
      ]
    },
    quickMemory: [
      "After do, does, did, and will, use the base verb.",
      "After be in continuous forms, use verb-ing.",
      "After have, has, and had, use the past participle.",
      "Use auxiliaries to build questions and negatives, not only to name tenses.",
      "Check the subject first when choosing does, is, was, or has."
    ],
    practiceItems: [
      {
        prompt: "Complete the question: ___ she work here?",
        answer: "Does",
        focus: "Present Simple question"
      },
      {
        prompt: "Correct the sentence: Did she went home?",
        answer: "Did she go home?",
        focus: "base verb after did"
      },
      {
        prompt: "Complete the sentence: They ___ studying now.",
        answer: "are",
        focus: "present be form"
      },
      {
        prompt: "Correct the sentence: I have saw that before.",
        answer: "I have seen that before.",
        focus: "past participle after have"
      },
      {
        prompt: "Complete the sentence: I ___ call you later.",
        answer: "will",
        focus: "future with will"
      }
    ],
    relatedTopics: ["Verb Tenses", "Modal Verbs", "WH Questions", "Embedded WH Clauses"]
  },
  {
    contentType: "pronouns-possessives",
    slug: "pronouns-possessives-and-object-forms",
    title: "Pronouns, Possessives, Object Forms, and Reflexives",
    section: "core-grammar",
    overview:
      "Use different pronoun and possessive forms according to the function the word has in the sentence: subject, object, possession, or reflexive reference.",
    whatItDoes: [
      "Show who does the action, who receives it, and who owns something.",
      "Help you avoid repeating nouns again and again.",
      "Let you choose the right word form based on grammar function, not only meaning."
    ],
    mainReferenceTable: [
      {
        subjectPronoun: "I",
        objectPronoun: "me",
        possessiveAdjective: "my",
        possessivePronoun: "mine",
        reflexive: "myself",
        example: "I see my book. That book is mine."
      },
      {
        subjectPronoun: "you",
        objectPronoun: "you",
        possessiveAdjective: "your",
        possessivePronoun: "yours",
        reflexive: "yourself / yourselves",
        example: "You have your phone. That phone is yours."
      },
      {
        subjectPronoun: "he",
        objectPronoun: "him",
        possessiveAdjective: "his",
        possessivePronoun: "his",
        reflexive: "himself",
        example: "I called him. His car is new. That car is his."
      },
      {
        subjectPronoun: "she",
        objectPronoun: "her",
        possessiveAdjective: "her",
        possessivePronoun: "hers",
        reflexive: "herself",
        example: "I saw her. Her bag is blue. That bag is hers."
      },
      {
        subjectPronoun: "it",
        objectPronoun: "it",
        possessiveAdjective: "its",
        possessivePronoun: "—",
        reflexive: "itself",
        example: "It is big. Its color is black."
      },
      {
        subjectPronoun: "we",
        objectPronoun: "us",
        possessiveAdjective: "our",
        possessivePronoun: "ours",
        reflexive: "ourselves",
        example: "We love our house. That house is ours."
      },
      {
        subjectPronoun: "they",
        objectPronoun: "them",
        possessiveAdjective: "their",
        possessivePronoun: "theirs",
        reflexive: "themselves",
        example: "I know them. Their teacher is nice. The idea is theirs."
      }
    ],
    functionBlocks: [
      {
        title: "Subject pronouns",
        use: "Use them before the verb to show who does the action.",
        examples: ["He works here.", "They study every day.", "We are ready."]
      },
      {
        title: "Object pronouns",
        use: "Use them after a verb or preposition to show who receives the action.",
        examples: ["I called him.", "She invited us.", "They talked to her."]
      },
      {
        title: "Possessive adjectives",
        use: "Use them before a noun to show possession.",
        examples: ["My book is here.", "Her bag is blue.", "Their teacher is kind."]
      },
      {
        title: "Possessive pronouns",
        use: "Use them to replace a noun that is already understood.",
        examples: ["That book is mine.", "This seat is hers.", "The house is ours."]
      },
      {
        title: "Reflexives",
        use: "Use them when the subject and the object refer to the same person or thing.",
        examples: ["He hurt himself.", "She taught herself.", "We introduced ourselves."]
      }
    ],
    focusWords: [
      {
        word: "him",
        type: "object pronoun",
        meaningHint: "him = the object form of he",
        examples: ["I helped him.", "She called him yesterday."]
      },
      {
        word: "his",
        type: "possessive adjective / possessive pronoun",
        meaningHint: "his can come before a noun or replace the noun",
        examples: ["His jacket is black.", "That jacket is his."]
      },
      {
        word: "her",
        type: "object pronoun / possessive adjective",
        meaningHint: "her can be the object or come before a noun",
        examples: ["I called her.", "Her name is Anna."]
      },
      {
        word: "hers",
        type: "possessive pronoun",
        meaningHint: "hers replaces the noun completely",
        examples: ["That bag is hers.", "The red car is hers."]
      }
    ],
    quickRules: [
      "Before the verb, use a subject pronoun.",
      "After a verb or preposition, use an object pronoun.",
      "Before a noun, use a possessive adjective.",
      "To replace a noun completely, use a possessive pronoun.",
      "If the subject and object are the same, use a reflexive pronoun."
    ],
    commonMistakes: [
      {
        wrong: "I called he.",
        correct: "I called him.",
        reason: "After a verb, you need the object pronoun, not the subject pronoun."
      },
      {
        wrong: "This is hers laptop.",
        correct: "This is her laptop.",
        reason: "Before a noun, use a possessive adjective like her, not a possessive pronoun like hers."
      },
      {
        wrong: "The bag is her.",
        correct: "The bag is hers.",
        reason: "When the noun is replaced completely, use a possessive pronoun."
      },
      {
        wrong: "He hurt him.",
        correct: "He hurt himself.",
        reason: "If the subject and the object are the same person, use a reflexive pronoun."
      }
    ],
    contrastBlocks: [
      {
        title: "He / Him / His",
        explanation:
          "He is the subject, him is the object, and his shows possession before a noun or as a possessive pronoun.",
        examples: [
          "He is my friend.",
          "I called him.",
          "His phone is expensive. / That phone is his."
        ]
      },
      {
        title: "She / Her / Hers",
        explanation:
          "She is the subject, her can be the object or a possessive adjective, and hers is the possessive pronoun.",
        examples: [
          "She is my teacher.",
          "I saw her.",
          "Her car is red. / That car is hers."
        ]
      },
      {
        title: "My / Mine",
        explanation:
          "My comes before a noun. Mine replaces the noun.",
        examples: [
          "My book is here.",
          "That book is mine."
        ]
      },
      {
        title: "Their / Theirs",
        explanation:
          "Their comes before a noun. Theirs replaces the noun.",
        examples: [
          "Their house is big.",
          "The house is theirs."
        ]
      }
    ],
    quickMemory: [
      "Subject pronouns do the action.",
      "Object pronouns receive the action.",
      "Possessive adjectives come before nouns.",
      "Possessive pronouns replace nouns.",
      "Reflexives point back to the same subject."
    ],
    practiceItems: [
      {
        prompt: "Choose the correct form: I called ___. (he / him)",
        answer: "him",
        focus: "object pronoun"
      },
      {
        prompt: "Complete the sentence: ___ bag is blue. (her / hers)",
        answer: "Her",
        focus: "possessive adjective before a noun"
      },
      {
        prompt: "Complete the sentence: The blue bag is ___. (her / hers)",
        answer: "hers",
        focus: "possessive pronoun"
      },
      {
        prompt: "Correct the sentence: This is hers laptop.",
        answer: "This is her laptop.",
        focus: "possessive adjective vs possessive pronoun"
      },
      {
        prompt: "Complete the sentence: He taught ___ to code. (him / himself)",
        answer: "himself",
        focus: "reflexive pronoun"
      }
    ],
    relatedTopics: ["Common Prepositions", "English Auxiliaries", "Key Structure Differences"]
  },
  {
    contentType: "structure-differences",
    slug: "key-structure-differences",
    title: "Key Structure Differences",
    section: "core-grammar",
    overview:
      "Compare similar English structures so you can choose the right one based on meaning, time reference, and sentence purpose instead of guessing.",
    whatItDoes: [
      "Show the practical meaning difference between structures that learners often confuse.",
      "Help you decide faster by linking each choice to a real communication goal.",
      "Turn quick contrast notes into a study page you can scan and reuse."
    ],
    decisionRules: [
      "If you mean routine or fact, choose Present Simple; if you mean now or temporary, choose Present Continuous.",
      "If the past event has a finished time like yesterday or last week, choose Past Simple; if the past connects to now, choose Present Perfect.",
      "If the future idea is a plan already in your mind, choose going to; if it is a decision now, offer, or spontaneous prediction, choose will.",
      "If you need duration, choose for; if you need the starting point, choose since.",
      "If you ask about countable plural nouns, choose many; if you ask about uncountable quantity, choose much."
    ],
    comparisonCards: [
      {
        title: "Present Simple vs Present Continuous",
        structureA: "Present Simple",
        structureB: "Present Continuous",
        mainDifference:
          "Present Simple shows routine, habit, or fact. Present Continuous shows an action happening now or a temporary situation.",
        whenToUseA: "Use it for routines, habits, schedules, and general truths.",
        whenToUseB: "Use it for actions in progress now or situations that are temporary.",
        exampleA: "I work from home.",
        exampleB: "I am working from home today.",
        signals: ["always, usually, often, every day", "now, right now, at the moment, today"],
        quickMemory: ["routine vs now"]
      },
      {
        title: "Past Simple vs Past Continuous",
        structureA: "Past Simple",
        structureB: "Past Continuous",
        mainDifference:
          "Past Simple shows a finished action. Past Continuous shows an action in progress at a moment in the past.",
        whenToUseA: "Use it for completed past events or the main event in a story.",
        whenToUseB: "Use it for background action, interrupted action, or a scene in progress.",
        exampleA: "I studied last night.",
        exampleB: "I was studying at 8 p.m.",
        signals: ["last night, yesterday, in 2024", "at 8 p.m., while, when + interruption"],
        quickMemory: ["finished action vs background action"]
      },
      {
        title: "Past Simple vs Present Perfect",
        structureA: "Past Simple",
        structureB: "Present Perfect",
        mainDifference:
          "Past Simple stays in a finished past time. Present Perfect connects the past result or experience to now.",
        whenToUseA: "Use it when the time is finished or specific.",
        whenToUseB: "Use it for life experience, recent result, or an unfinished time period connected to now.",
        exampleA: "I saw that movie yesterday.",
        exampleB: "I have seen that movie before.",
        signals: ["yesterday, last week, in 2024, two days ago", "ever, never, already, yet, before"],
        quickMemory: ["finished time vs present connection"]
      },
      {
        title: "Will vs Going To",
        structureA: "will",
        structureB: "be going to",
        mainDifference:
          "Will often shows a decision now, offer, promise, or spontaneous prediction. Going to usually shows a prior plan or evidence-based prediction.",
        whenToUseA: "Use it for instant decisions, offers, promises, and predictions that appear in the moment.",
        whenToUseB: "Use it for existing plans, intentions, or evidence you can see now.",
        exampleA: "I'll answer the phone.",
        exampleB: "I'm going to study tonight.",
        signals: ["I'll, I think, don't worry", "already planned, look at those clouds"],
        quickMemory: ["decision now vs plan already"]
      },
      {
        title: "Present Simple vs Going To",
        structureA: "Present Simple",
        structureB: "be going to",
        mainDifference:
          "Present Simple describes routine or fact. Going to moves the meaning to a future plan or intention.",
        whenToUseA: "Use it for habits and repeated actions.",
        whenToUseB: "Use it when you already intend to do something later.",
        exampleA: "I study English every day.",
        exampleB: "I am going to study English tonight.",
        quickMemory: ["habit vs future plan"]
      },
      {
        title: "Can vs Could",
        structureA: "can",
        structureB: "could",
        mainDifference:
          "Can expresses present ability, possibility, or everyday permission. Could often marks past ability, softer possibility, or a more polite request.",
        whenToUseA: "Use it for present ability, informal permission, and direct possibility.",
        whenToUseB: "Use it for past ability, softer requests, and weaker possibility.",
        exampleA: "I can swim.",
        exampleB: "Could you help me?",
        quickMemory: ["present / direct vs past / softer"]
      },
      {
        title: "Must vs Have To",
        structureA: "must",
        structureB: "have to",
        mainDifference:
          "Both express obligation, but must usually sounds more personal or speaker-driven, while have to often sounds external or practical.",
        whenToUseA: "Use it for strong personal obligation, rule emphasis, or the speaker's strong feeling.",
        whenToUseB: "Use it for schedule pressure, external rules, or practical necessity.",
        exampleA: "I must call my mom.",
        exampleB: "I have to go to work tomorrow.",
        quickMemory: ["speaker pressure vs external necessity"]
      },
      {
        title: "For vs Since",
        structureA: "for",
        structureB: "since",
        mainDifference:
          "For answers how long. Since answers from when.",
        whenToUseA: "Use it with a duration.",
        whenToUseB: "Use it with a starting point in time.",
        exampleA: "I have lived here for two years.",
        exampleB: "I have lived here since 2024.",
        quickMemory: ["duration vs start point"]
      },
      {
        title: "In vs On vs At (time)",
        structureA: "in / on / at",
        structureB: "time references",
        mainDifference:
          "In is for longer periods, on is for days and dates, and at is for exact points in time.",
        whenToUseA: "Use in with months, years, seasons, and parts of the day; use on with days and dates; use at with exact clock times.",
        whenToUseB: "Choose the preposition by how specific the time reference is.",
        exampleA: "I was born in 1998.",
        exampleB: "We met on Monday at 8 p.m.",
        quickMemory: ["big period / day / exact point"]
      },
      {
        title: "Some vs Any",
        structureA: "some",
        structureB: "any",
        mainDifference:
          "Some is common in affirmative statements and offers. Any is common in negatives and most questions.",
        whenToUseA: "Use it in positive statements and often in offers or requests when you expect yes.",
        whenToUseB: "Use it in negatives and general questions.",
        exampleA: "I have some questions.",
        exampleB: "Do you have any questions?",
        quickMemory: ["affirmative / offer vs negative / general question"]
      }
    ],
    comparisonTables: [
      {
        title: "Quick contrast: for vs since",
        rows: [
          {
            situation: "Duration",
            use: "for",
            example: "for two hours"
          },
          {
            situation: "Starting point",
            use: "since",
            example: "since Monday"
          }
        ]
      },
      {
        title: "Quick contrast: in / on / at",
        rows: [
          {
            situation: "Month, year, season, part of day",
            use: "in",
            example: "in July / in 2026 / in the morning"
          },
          {
            situation: "Day or date",
            use: "on",
            example: "on Monday / on May 3"
          },
          {
            situation: "Exact time",
            use: "at",
            example: "at 7 p.m. / at noon"
          }
        ]
      },
      {
        title: "Quick contrast: some / any",
        rows: [
          {
            situation: "Affirmative statement",
            use: "some",
            example: "I have some ideas."
          },
          {
            situation: "Offer or expected yes",
            use: "some",
            example: "Would you like some coffee?"
          },
          {
            situation: "Negative statement",
            use: "any",
            example: "I don't have any money."
          },
          {
            situation: "General question",
            use: "any",
            example: "Do you have any questions?"
          }
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: "I work from home today right now.",
        correct: "I am working from home today.",
        reason: "Use Present Continuous for an action happening now or for a temporary current arrangement."
      },
      {
        wrong: "I have seen it yesterday.",
        correct: "I saw it yesterday.",
        reason: "Yesterday is a finished past time, so Past Simple is the correct choice."
      },
      {
        wrong: "I will to call you later.",
        correct: "I will call you later.",
        reason: "After will, use the base verb without to."
      },
      {
        wrong: "I am here since Monday.",
        correct: "I have been here since Monday.",
        reason: "Since usually works with Present Perfect or Present Perfect Continuous to connect the starting point to now."
      },
      {
        wrong: "Do you have some questions?",
        correct: "Do you have any questions?",
        reason: "In a general question, any is the normal determiner."
      }
    ],
    quickMemory: [
      "Present Simple vs Present Continuous = routine vs now.",
      "Past Simple vs Past Continuous = finished event vs background action.",
      "Past Simple vs Present Perfect = finished time vs present connection.",
      "Will vs Going To = decision now vs prior plan.",
      "For vs Since = duration vs starting point.",
      "In / On / At = bigger period vs day/date vs exact time.",
      "Some vs Any = affirmative / offer vs negative / general question."
    ],
    practiceItems: [
      {
        prompt: "Choose the best form: I usually work from home, but today I ___.",
        answer: "am working from the office",
        focus: "routine vs temporary current action"
      },
      {
        prompt: "Choose the correct sentence: I have seen it yesterday / I saw it yesterday.",
        answer: "I saw it yesterday.",
        focus: "finished past time"
      },
      {
        prompt: "Complete the sentence: We have lived here ___ 2022.",
        answer: "since",
        focus: "starting point"
      },
      {
        prompt: "Choose the better future form: The phone is ringing. I ___ it.",
        answer: "will answer",
        focus: "decision at the moment"
      },
      {
        prompt: "Complete the question: Do you have ___ questions?",
        answer: "any",
        focus: "general question with determiner choice"
      }
    ],
    relatedTopics: [
      "Verb Tenses",
      "Common Prepositions",
      "English Auxiliaries",
      "WH Questions"
    ]
  },
  {
    contentType: "articles-determiners",
    slug: "articles-and-determiners",
    title: "Articles and Determiners",
    section: "core-grammar",
    overview:
      "Use this page to choose the right word before a noun: a, an, the, zero article, or a determiner such as some, any, much, many, few, little, this, or those.",
    whatItDoes: [
      "Help you decide if a noun needs a, an, the, or no article.",
      "Separate singular countable nouns from plural and uncountable nouns.",
      "Choose practical determiners for quantity, distance, and sentence type.",
      "Fix common Spanish-speaker mistakes caused by translating articles too directly."
    ],
    articleDecisionRules: [
      "If the noun is singular and countable, it usually needs a determiner: a, an, the, this, my, one, or another noun marker.",
      "Use a before a consonant sound and an before a vowel sound when the thing is one item and not specific yet.",
      "Use the when the listener knows exactly which person, thing, place, or idea you mean.",
      "Use zero article when you talk about plural nouns in general or uncountable nouns in general.",
      "Do not use a or an with uncountable nouns like advice, information, homework, money, or furniture."
    ],
    articleReferenceTable: [
      {
        determiner: "a",
        use: "One nonspecific singular countable noun before a consonant sound.",
        pattern: "a + singular countable noun",
        example: "I need a notebook."
      },
      {
        determiner: "an",
        use: "One nonspecific singular countable noun before a vowel sound.",
        pattern: "an + singular countable noun",
        example: "She has an idea."
      },
      {
        determiner: "the",
        use: "A specific noun that is already known, unique, or clear from context.",
        pattern: "the + noun",
        example: "The notebook on my desk is blue."
      },
      {
        determiner: "zero article",
        use: "General plural nouns or general uncountable nouns.",
        pattern: "plural noun / uncountable noun",
        example: "Developers need practice. / Life is hard sometimes."
      }
    ],
    countableUncountableGuidance: [
      "Countable nouns can be singular or plural: a question, two questions, many questions.",
      "Uncountable nouns do not use a or an directly: advice, information, homework, money, furniture.",
      "Use a piece of, a bit of, or some when you need to quantify an uncountable noun.",
      "Use many with plural countable nouns and much with uncountable nouns.",
      "Use a lot of with both plural countable nouns and uncountable nouns in everyday English."
    ],
    determinerCards: [
      {
        title: "This / That / These / Those",
        mainUse: "Point to nouns by distance and number.",
        rule:
          "Use this and that with singular nouns. Use these and those with plural nouns.",
        examples: [
          "This problem is important.",
          "That file is outdated.",
          "These examples are useful.",
          "Those tests are failing."
        ],
        commonTrap: "Do not say this examples. Use these examples."
      },
      {
        title: "Some / Any / No",
        mainUse: "Talk about indefinite quantity in statements, questions, and negatives.",
        rule:
          "Use some in affirmative statements and offers. Use any in negatives and general questions. Use no to make the noun phrase negative.",
        examples: [
          "I have some ideas.",
          "Do you have any questions?",
          "I don't have any questions.",
          "There is no problem."
        ],
        commonTrap: "Do not say I don't have some questions. Use any after don't."
      },
      {
        title: "Much / Many / A lot of",
        mainUse: "Choose quantity words according to countability.",
        rule:
          "Use many with plural countable nouns, much with uncountable nouns, and a lot of with both.",
        examples: [
          "There are many people here.",
          "I don't have much time.",
          "We have a lot of examples.",
          "She has a lot of experience."
        ],
        commonTrap: "Do not say much people. People is plural countable, so use many people."
      },
      {
        title: "Few / A few / Little / A little",
        mainUse: "Show small quantity with positive or negative feeling.",
        rule:
          "Use few and a few with plural countable nouns. Use little and a little with uncountable nouns.",
        examples: [
          "I have a few questions.",
          "Few people understood the rule.",
          "We have a little time.",
          "There is little information available."
        ],
        commonTrap:
          "A few and a little sound more positive than few and little, because they mean some is available."
      }
    ],
    commonMistakes: [
      {
        wrong: "I need an advice.",
        correct: "I need advice.",
        reason:
          "Advice is uncountable in English, so it does not take a or an directly."
      },
      {
        wrong: "The life is hard.",
        correct: "Life is hard.",
        reason:
          "Use zero article when you talk about an abstract idea in general."
      },
      {
        wrong: "She has car.",
        correct: "She has a car.",
        reason:
          "Car is a singular countable noun, so it needs a determiner."
      },
      {
        wrong: "I don't have some questions.",
        correct: "I don't have any questions.",
        reason:
          "Use any in most negative sentences."
      },
      {
        wrong: "There are much people.",
        correct: "There are many people.",
        reason:
          "People is plural and countable, so many is the correct quantity word."
      }
    ],
    quickMemory: [
      "Singular countable noun? Do not leave it alone: use a, an, the, this, my, one, or another determiner.",
      "A / an = one nonspecific item.",
      "The = specific, known, unique, or clear from context.",
      "Zero article = general plural nouns and general uncountable nouns.",
      "Some / any depends on sentence type: some for affirmative and offers, any for negatives and general questions.",
      "Many = plural countable; much = uncountable; a lot of = both."
    ],
    practiceItems: [
      {
        prompt: "Choose the correct sentence: I need an advice / I need advice.",
        answer: "I need advice.",
        focus: "uncountable noun without a/an"
      },
      {
        prompt: "Complete the sentence: She has ___ idea.",
        answer: "an",
        focus: "a/an before vowel sound"
      },
      {
        prompt: "Complete the question: Do you have ___ questions?",
        answer: "any",
        focus: "any in general questions"
      },
      {
        prompt: "Correct the sentence: There are much people in the room.",
        answer: "There are many people in the room.",
        focus: "many with plural countable nouns"
      },
      {
        prompt: "Choose the general statement: The life is hard / Life is hard.",
        answer: "Life is hard.",
        focus: "zero article for general abstract nouns"
      }
    ],
    relatedTopics: [
      "Key Structure Differences",
      "Common Prepositions",
      "Pronouns, Possessives, Object Forms, and Reflexives",
      "Question Builder Cheat Sheet"
    ]
  },
  {
    contentType: "gerunds-infinitives",
    slug: "gerunds-and-infinitives",
    title: "Gerunds and Infinitives",
    section: "core-grammar",
    overview:
      "Use this page to decide when the next verb should be verb + -ing or to + base verb, and when the choice changes the meaning of the sentence.",
    whatItDoes: [
      "Help you choose between gerund and infinitive patterns after common verbs.",
      "Show practical groups instead of forcing you to memorize a giant list.",
      "Explain verbs that accept both forms with similar meaning.",
      "Warn you about verbs where the form changes the meaning."
    ],
    decisionRules: [
      "If the first verb is enjoy, avoid, finish, suggest, keep, or mind, use verb + -ing.",
      "If the first verb is want, need, decide, plan, hope, or learn, use to + base verb.",
      "With like, love, hate, prefer, start, and begin, both forms are often possible with similar meaning.",
      "With stop, remember, try, and forget, changing the form can change the meaning.",
      "Do not translate directly from Spanish; learn the pattern that the first English verb controls."
    ],
    patternCards: [
      {
        title: "Verb + -ing",
        pattern: "subject + verb + verb-ing",
        use: "Use this after verbs that treat the second action like an activity or experience.",
        commonVerbs: ["enjoy", "avoid", "finish", "suggest", "keep", "mind"],
        examples: [
          "I enjoy learning English.",
          "She avoided answering the question.",
          "We finished reviewing the lesson.",
          "He suggested practicing every day."
        ],
        commonTrap: "Do not say enjoy to learn or suggest to review."
      },
      {
        title: "Verb + to + base verb",
        pattern: "subject + verb + to + base verb",
        use: "Use this after verbs that point toward a goal, plan, decision, need, or intention.",
        commonVerbs: ["want", "need", "decide", "plan", "hope", "learn"],
        examples: [
          "I want to improve my speaking.",
          "We need to review this rule.",
          "She decided to study tonight.",
          "They hope to travel next year."
        ],
        commonTrap: "Do not say want improving or need reviewing when the meaning is intention or necessity."
      },
      {
        title: "Both forms with similar meaning",
        pattern: "verb + -ing / verb + to + base verb",
        use: "Some preference and start verbs accept both forms without a big practical difference.",
        commonVerbs: ["like", "love", "hate", "prefer", "start", "begin"],
        examples: [
          "I like reading.",
          "I like to read before bed.",
          "She started working at nine.",
          "She started to work at nine."
        ],
        commonTrap: "Similar does not mean always identical, but both forms are usually safe for a first practical pass."
      }
    ],
    meaningChangeCards: [
      {
        title: "Stop",
        firstPattern: "stop + verb-ing",
        firstMeaning: "Quit or end the activity.",
        firstExample: "I stopped smoking.",
        secondPattern: "stop + to + base verb",
        secondMeaning: "Pause one activity in order to do another.",
        secondExample: "I stopped to drink coffee."
      },
      {
        title: "Remember",
        firstPattern: "remember + verb-ing",
        firstMeaning: "Have a memory of a past action.",
        firstExample: "I remember meeting her.",
        secondPattern: "remember + to + base verb",
        secondMeaning: "Not forget to do a future or necessary action.",
        secondExample: "Remember to send the email."
      },
      {
        title: "Try",
        firstPattern: "try + verb-ing",
        firstMeaning: "Experiment with a method to see if it works.",
        firstExample: "Try restarting the app.",
        secondPattern: "try + to + base verb",
        secondMeaning: "Make an effort to do something difficult.",
        secondExample: "I tried to fix the bug."
      },
      {
        title: "Forget",
        firstPattern: "forget + verb-ing",
        firstMeaning: "Not remember a past action.",
        firstExample: "I will never forget visiting that city.",
        secondPattern: "forget + to + base verb",
        secondMeaning: "Fail to do a necessary action.",
        secondExample: "I forgot to save the file."
      }
    ],
    commonMistakes: [
      {
        wrong: "I enjoy to learn English.",
        correct: "I enjoy learning English.",
        reason: "Enjoy is followed by verb + -ing."
      },
      {
        wrong: "I want improving my English.",
        correct: "I want to improve my English.",
        reason: "Want is followed by to + base verb."
      },
      {
        wrong: "She suggested to review the lesson.",
        correct: "She suggested reviewing the lesson.",
        reason: "Suggest is followed by verb + -ing when another verb follows directly."
      },
      {
        wrong: "I stopped to smoke. / I stopped smoking.",
        correct: "These forms are both possible, but they mean different things.",
        reason:
          "Stopped smoking means quit smoking. Stopped to smoke means paused another activity in order to smoke."
      }
    ],
    quickMemory: [
      "Enjoy / avoid / finish / suggest / keep / mind + verb-ing.",
      "Want / need / decide / plan / hope / learn + to + base verb.",
      "Like / love / hate / prefer / start / begin can usually take both forms.",
      "Stop, remember, try, and forget are dangerous because the form can change the meaning.",
      "The first verb controls the second verb pattern."
    ],
    practiceItems: [
      {
        prompt: "Correct the sentence: I enjoy to learn English.",
        answer: "I enjoy learning English.",
        focus: "enjoy + verb-ing"
      },
      {
        prompt: "Complete the sentence: I want ___ my speaking.",
        answer: "to improve",
        focus: "want + to + base verb"
      },
      {
        prompt: "Choose the correct form: She suggested review / reviewing the lesson.",
        answer: "reviewing",
        focus: "suggest + verb-ing"
      },
      {
        prompt: "Explain the difference: I stopped working / I stopped to work.",
        answer:
          "I stopped working = I ended the work. I stopped to work = I paused another activity in order to work.",
        focus: "meaning change with stop"
      },
      {
        prompt: "Complete the sentence: Remember ___ the email before lunch.",
        answer: "to send",
        focus: "remember + to + base verb for a necessary action"
      }
    ],
    relatedTopics: [
      "Key Structure Differences",
      "Common Prepositions",
      "Verb Tenses",
      "Question Builder Cheat Sheet"
    ]
  },
  {
    contentType: "passive-voice",
    slug: "passive-voice",
    title: "Passive Voice",
    section: "core-grammar",
    overview:
      "Use passive voice when the action, result, process, or affected thing matters more than the person who did it.",
    whatItDoes: [
      "Help you describe technical processes, bugs, updates, and results clearly.",
      "Move attention from the actor to the thing affected by the action.",
      "Sound natural in documentation when the actor is unknown, obvious, or not important.",
      "Build passive forms with be, past participles, and modal verbs."
    ],
    decisionRules: [
      "Use active voice when the actor is important: The developer fixed the bug.",
      "Use passive voice when the result is more important: The bug was fixed.",
      "Use passive voice when the actor is unknown or obvious: The file was deleted.",
      "Use by only when the actor adds useful information.",
      "Avoid passive voice when it hides responsibility that the reader needs."
    ],
    coreStructure: [
      "Subject + be + past participle",
      "The subject receives the action; it does not perform the action.",
      "Change be to match the tense: is, are, was, were, has been, have been, will be.",
      "Keep the main verb as a past participle: updated, fixed, generated, reviewed, changed."
    ],
    activeVsPassive: [
      {
        active: "The developer fixed the bug.",
        passive: "The bug was fixed by the developer.",
        whyPassiveWorks:
          "Use passive if the important information is the bug status, not the developer."
      },
      {
        active: "The system generates the report automatically.",
        passive: "The report is generated automatically.",
        whyPassiveWorks:
          "Use passive in process descriptions where the output matters more than the system as actor."
      },
      {
        active: "Someone updated the file.",
        passive: "The file was updated.",
        whyPassiveWorks:
          "Use passive when the actor is unknown or not useful for the sentence."
      }
    ],
    passivePatterns: [
      {
        title: "Present Simple Passive",
        structure: "am / is / are + past participle",
        use: "Use it for regular processes, documentation, and current general behavior.",
        examples: [
          "The report is generated automatically.",
          "These files are stored locally.",
          "The form is validated before submission."
        ]
      },
      {
        title: "Past Simple Passive",
        structure: "was / were + past participle",
        use: "Use it for completed actions where the result or affected thing matters.",
        examples: [
          "The file was updated.",
          "The bug was fixed yesterday.",
          "The tests were reviewed after the change."
        ]
      },
      {
        title: "Present Perfect Passive",
        structure: "has / have been + past participle",
        use: "Use it for completed changes connected to the present state.",
        examples: [
          "The issue has been resolved.",
          "The dependencies have been installed.",
          "The documentation has been updated."
        ]
      },
      {
        title: "Future Passive",
        structure: "will be + past participle",
        use: "Use it for future actions where the future result matters more than the actor.",
        examples: [
          "The release will be deployed tomorrow.",
          "The page will be reviewed later.",
          "The configuration will be changed next week."
        ]
      }
    ],
    modalPassivePatterns: [
      {
        title: "Can be",
        structure: "can be + past participle",
        use: "Use it to say something is possible or allowed.",
        examples: [
          "This option can be used here.",
          "The value can be changed later."
        ]
      },
      {
        title: "Must be",
        structure: "must be + past participle",
        use: "Use it for strong necessity or strict requirements.",
        examples: [
          "The bug must be fixed before release.",
          "All fields must be completed."
        ]
      },
      {
        title: "Should be",
        structure: "should be + past participle",
        use: "Use it for recommendations, reviews, and expected process steps.",
        examples: [
          "The pull request should be reviewed.",
          "The explanation should be simplified."
        ]
      },
      {
        title: "Cannot be",
        structure: "cannot be + past participle",
        use: "Use it when something is impossible or not allowed.",
        examples: [
          "This setting cannot be changed.",
          "The file cannot be deleted while the app is running."
        ]
      }
    ],
    byAgentRules: [
      "Use by when the actor matters: The bug was fixed by the frontend team.",
      "Skip by when the actor is unknown: The file was deleted.",
      "Skip by when the actor is obvious: The form is validated before submission.",
      "Skip by someone unless the sentence truly needs it; it usually adds noise.",
      "In technical writing, passive is useful when the process or result is the main point."
    ],
    commonMistakes: [
      {
        wrong: "The bug fixed yesterday.",
        correct: "The bug was fixed yesterday.",
        reason: "Passive voice needs a form of be before the past participle."
      },
      {
        wrong: "The file was update.",
        correct: "The file was updated.",
        reason: "After be, use the past participle, not the base verb."
      },
      {
        wrong: "The report is generate automatically.",
        correct: "The report is generated automatically.",
        reason: "Present passive uses is or are plus the past participle."
      },
      {
        wrong: "This can used here.",
        correct: "This can be used here.",
        reason: "Modal passive needs modal + be + past participle."
      }
    ],
    quickMemory: [
      "Passive voice = be + past participle.",
      "Active focuses on who does the action.",
      "Passive focuses on what receives the action or what result happened.",
      "Modal passive = modal + be + past participle.",
      "Use by only when the actor matters.",
      "In technical English, passive is common for processes, results, bugs, and documentation."
    ],
    practiceItems: [
      {
        prompt: "Correct the sentence: The bug fixed yesterday.",
        answer: "The bug was fixed yesterday.",
        focus: "past simple passive"
      },
      {
        prompt: "Complete the sentence: The report ___ automatically.",
        answer: "is generated",
        focus: "present simple passive"
      },
      {
        prompt: "Make it passive: The developer updated the file.",
        answer: "The file was updated by the developer.",
        focus: "active to passive transformation"
      },
      {
        prompt: "Complete the modal passive: This option can ___ here.",
        answer: "be used",
        focus: "modal + be + past participle"
      },
      {
        prompt: "Choose the cleaner technical sentence: The system validates the form / The form is validated before submission.",
        answer: "The form is validated before submission.",
        focus: "process-focused passive"
      }
    ],
    relatedTopics: [
      "English Auxiliaries",
      "Verb Tenses",
      "Modal Verbs",
      "Key Structure Differences"
    ]
  },
  {
    contentType: "reported-speech",
    slug: "reported-speech",
    title: "Reported Speech",
    section: "core-grammar",
    overview:
      "Use reported speech to explain what someone said, asked, requested, or instructed without repeating their exact words.",
    whatItDoes: [
      "Help you summarize meeting comments, feedback, user requests, and team decisions.",
      "Report statements with said, told, explained, mentioned, or promised.",
      "Report WH and yes/no questions with statement word order.",
      "Report requests and instructions with to + base verb or not to + base verb."
    ],
    decisionRules: [
      "Use said that when you report a statement without naming the listener.",
      "Use told + person + that when you mention who received the message.",
      "Use asked + WH word + statement order for reported WH questions.",
      "Use asked + if/whether + statement order for reported yes/no questions.",
      "Use asked/told + person + to + base verb for requests and instructions.",
      "Shift tense back when the report is separated from the original moment, but keep the tense if the information is still true or immediate."
    ],
    directVsReported: [
      {
        direct: "She said, \"I am busy.\"",
        reported: "She said that she was busy.",
        note: "The quote becomes a that-clause, and am changes to was."
      },
      {
        direct: "He asked, \"Where does she work?\"",
        reported: "He asked where she worked.",
        note: "The reported question uses statement word order, not question order."
      },
      {
        direct: "They asked, \"Do you need help?\"",
        reported: "They asked if I needed help.",
        note: "Yes/no questions use if or whether."
      },
      {
        direct: "She said, \"Please review the file.\"",
        reported: "She asked me to review the file.",
        note: "Requests use asked + person + to + base verb."
      }
    ],
    reportingVerbCards: [
      {
        verb: "say",
        pattern: "say / said + that + clause",
        use: "Use say when the listener is not the focus.",
        examples: [
          "She said that she was busy.",
          "They said that the release was ready."
        ],
        commonTrap: "Do not say She said me. Use She told me."
      },
      {
        verb: "tell",
        pattern: "tell / told + person + that + clause",
        use: "Use tell when you mention who received the message.",
        examples: [
          "She told me that she was busy.",
          "He told the team that the bug was fixed."
        ],
        commonTrap: "Tell usually needs a person after it."
      },
      {
        verb: "ask",
        pattern: "ask / asked + question word or if/whether + statement order",
        use: "Use ask to report questions.",
        examples: [
          "He asked where she worked.",
          "They asked if I needed help."
        ]
      },
      {
        verb: "explain / mention / promise",
        pattern: "verb + that + clause",
        use: "Use these verbs to report purpose, extra information, or commitment.",
        examples: [
          "She explained that the file was outdated.",
          "He mentioned that the tests were failing.",
          "They promised that the issue would be fixed."
        ]
      },
      {
        verb: "suggest",
        pattern: "suggested + verb-ing / suggested that + clause",
        use: "Use suggest to report recommendations or proposed actions.",
        examples: [
          "She suggested reviewing the lesson.",
          "He suggested that we update the documentation."
        ],
        commonTrap: "Do not say suggested to review when the second verb follows directly."
      }
    ],
    statementPatterns: [
      {
        direct: "Direct: \"I am busy.\"",
        reported: "Reported: She said that she was busy.",
        note: "Use subject + said/told/explained + that + clause."
      },
      {
        direct: "Direct: \"The bug is fixed.\"",
        reported: "Reported: He told me that the bug was fixed.",
        note: "Use told + person when the listener matters."
      },
      {
        direct: "Direct: \"We will review it.\"",
        reported: "Reported: They said that they would review it.",
        note: "Will often shifts to would in reported speech."
      }
    ],
    questionPatterns: [
      {
        direct: "Direct: \"Where does she work?\"",
        reported: "Reported: He asked where she worked.",
        note: "Reported WH questions use statement word order."
      },
      {
        direct: "Direct: \"Do you need help?\"",
        reported: "Reported: He asked if I needed help.",
        note: "Reported yes/no questions use if or whether."
      },
      {
        direct: "Direct: \"Can you reproduce the bug?\"",
        reported: "Reported: She asked whether I could reproduce the bug.",
        note: "Can often shifts to could."
      }
    ],
    requestInstructionPatterns: [
      {
        direct: "Direct: \"Please review the file.\"",
        reported: "Reported: She asked me to review the file.",
        note: "Polite requests often become asked + person + to + base verb."
      },
      {
        direct: "Direct: \"Don't change this setting.\"",
        reported: "Reported: He told me not to change that setting.",
        note: "Negative instructions use not to + base verb."
      },
      {
        direct: "Direct: \"Send the report before lunch.\"",
        reported: "Reported: They told me to send the report before lunch.",
        note: "Direct instructions often become told + person + to + base verb."
      }
    ],
    tenseShiftGuide: [
      {
        directForm: "am / is / are",
        reportedForm: "was / were",
        example: "\"I am busy\" → She said that she was busy."
      },
      {
        directForm: "do / does questions",
        reportedForm: "statement order with past simple",
        example: "\"Where does she work?\" → He asked where she worked."
      },
      {
        directForm: "will",
        reportedForm: "would",
        example: "\"We will review it\" → They said that they would review it."
      },
      {
        directForm: "can",
        reportedForm: "could",
        example: "\"Can you help?\" → She asked if I could help."
      },
      {
        directForm: "still true / immediate report",
        reportedForm: "tense can stay the same",
        example: "\"The app is offline\" → He said that the app is offline."
      }
    ],
    commonMistakes: [
      {
        wrong: "She said me that she was busy.",
        correct: "She told me that she was busy.",
        reason: "Use told + person, not said + person."
      },
      {
        wrong: "He asked where did she work.",
        correct: "He asked where she worked.",
        reason: "Reported questions use statement word order."
      },
      {
        wrong: "They asked me review the file.",
        correct: "They asked me to review the file.",
        reason: "Requests use asked + person + to + base verb."
      },
      {
        wrong: "He told me don't change it.",
        correct: "He told me not to change it.",
        reason: "Negative reported instructions use not to + base verb."
      }
    ],
    quickMemory: [
      "Say = report the message; tell = report the message to a person.",
      "Reported statements often use said/told/explained + that + clause.",
      "Reported questions use statement word order.",
      "Yes/no reported questions use if or whether.",
      "Requests and instructions use to + base verb; negative instructions use not to + base verb.",
      "Backshift tense when the report is separated from the original moment, but do not force it when the information is still true."
    ],
    practiceItems: [
      {
        prompt: "Correct the sentence: She said me that she was busy.",
        answer: "She told me that she was busy.",
        focus: "say vs tell"
      },
      {
        prompt: "Report the question: Where does she work?",
        answer: "He asked where she worked.",
        focus: "reported WH question with statement word order"
      },
      {
        prompt: "Report the yes/no question: Do you need help?",
        answer: "He asked if I needed help.",
        focus: "asked if/whether"
      },
      {
        prompt: "Report the request: Please review the file.",
        answer: "She asked me to review the file.",
        focus: "asked + person + to + base verb"
      },
      {
        prompt: "Correct the sentence: He told me don't change it.",
        answer: "He told me not to change it.",
        focus: "negative reported instruction"
      }
    ],
    relatedTopics: [
      "WH Questions",
      "Embedded WH Clauses",
      "English Auxiliaries",
      "Gerunds and Infinitives"
    ]
  },
  {
    contentType: "comparatives-superlatives",
    slug: "comparatives-and-superlatives",
    title: "Comparatives and Superlatives",
    section: "core-grammar",
    overview:
      "Use comparatives to compare two things and superlatives to identify the highest or lowest degree in a group.",
    whatItDoes: [
      "Help you choose between -er, more, the -est, and the most.",
      "Show when to use than and when to use the.",
      "Give you the irregular forms that matter most in everyday English.",
      "Prevent double-comparison mistakes like more faster and the most fastest."
    ],
    decisionRules: [
      "If you compare two things, use a comparative form with than.",
      "If you choose one item from a group as the highest degree, use a superlative form with the.",
      "Use -er and -est with many short adjectives: fast, faster, the fastest.",
      "Use more and the most with longer adjectives: useful, more useful, the most useful.",
      "Do not combine more with -er or the most with -est.",
      "Memorize the irregular forms: good, better, the best; bad, worse, the worst."
    ],
    comparativePatterns: [
      {
        title: "Short adjective comparative",
        pattern: "adjective + -er + than",
        use: "Use it with many one-syllable adjectives and some short two-syllable adjectives.",
        examples: [
          "This option is faster than the old one.",
          "The new modal is smaller than the previous one.",
          "This explanation is easier than the last one."
        ],
        commonTrap: "Do not say more faster or more easier."
      },
      {
        title: "Long adjective comparative",
        pattern: "more + adjective + than",
        use: "Use it with longer adjectives and many technical or abstract adjectives.",
        examples: [
          "This approach is more useful than the old one.",
          "The paid plan is more expensive than the free plan.",
          "This version is more reliable than the beta."
        ],
        commonTrap: "Do not add -er after more: more reliable, not more reliabler."
      }
    ],
    superlativePatterns: [
      {
        title: "Short adjective superlative",
        pattern: "the + adjective + -est",
        use: "Use it when one item has the highest degree in a group.",
        examples: [
          "This is the fastest solution.",
          "That is the smallest component.",
          "This is the easiest rule to remember."
        ],
        commonTrap: "Do not say the most fastest."
      },
      {
        title: "Long adjective superlative",
        pattern: "the most + adjective",
        use: "Use it with longer adjectives and many abstract or technical adjectives.",
        examples: [
          "This is the most useful example.",
          "That was the most expensive option.",
          "This is the most reliable version."
        ],
        commonTrap: "Do not add -est after the most: the most reliable, not the most reliablest."
      }
    ],
    irregularForms: [
      {
        adjective: "good",
        comparative: "better",
        superlative: "the best",
        example: "This option is better than the old one, but that one is the best."
      },
      {
        adjective: "bad",
        comparative: "worse",
        superlative: "the worst",
        example: "This bug is worse than the previous one, but the crash was the worst."
      },
      {
        adjective: "far",
        comparative: "farther / further",
        superlative: "the farthest / the furthest",
        example: "The second solution goes further than the first one."
      }
    ],
    equalityLessPatterns: [
      {
        title: "Equality",
        pattern: "as + adjective + as",
        use: "Use it when two things have the same degree.",
        examples: [
          "This option is as useful as the old one.",
          "The new page is as clear as the previous page."
        ],
        commonTrap: "Do not say as more useful as."
      },
      {
        title: "Negative equality",
        pattern: "not as + adjective + as",
        use: "Use it when one thing has a lower degree without using less.",
        examples: [
          "This solution is not as fast as the other one.",
          "The first explanation is not as clear as the second one."
        ],
        commonTrap: "Keep the adjective in the base form after as."
      },
      {
        title: "Lower degree",
        pattern: "less + adjective + than",
        use: "Use it to compare downward.",
        examples: [
          "This option is less expensive than the premium plan.",
          "The old version is less reliable than the new one."
        ],
        commonTrap: "Less works like more: use the base adjective."
      },
      {
        title: "Lowest degree",
        pattern: "the least + adjective",
        use: "Use it for the lowest degree in a group.",
        examples: [
          "This is the least expensive option.",
          "That was the least useful example."
        ],
        commonTrap: "Use the before least in normal superlative noun phrases."
      }
    ],
    commonMistakes: [
      {
        wrong: "This is more faster than that.",
        correct: "This is faster than that.",
        reason: "Do not combine more with an -er comparative."
      },
      {
        wrong: "This is more easy than before.",
        correct: "This is easier than before.",
        reason: "Easy is a short adjective ending in y, so use easier."
      },
      {
        wrong: "This is the most fastest option.",
        correct: "This is the fastest option.",
        reason: "Do not combine the most with an -est superlative."
      },
      {
        wrong: "This is better that the old version.",
        correct: "This is better than the old version.",
        reason: "Comparatives use than, not that."
      },
      {
        wrong: "This is the better option of all.",
        correct: "This is the best option of all.",
        reason: "Use a superlative when choosing one item from a group of three or more."
      }
    ],
    quickMemory: [
      "Two things = comparative + than.",
      "One item at the top of a group = the + superlative.",
      "Short adjectives often use -er / -est.",
      "Long adjectives use more / the most.",
      "Never double the comparison: not more faster, not the most fastest.",
      "Good, better, the best. Bad, worse, the worst."
    ],
    practiceItems: [
      {
        prompt: "Correct the sentence: This is more faster than that.",
        answer: "This is faster than that.",
        focus: "avoid double comparatives"
      },
      {
        prompt: "Complete the sentence: This explanation is ___ useful than the last one.",
        answer: "more",
        focus: "long adjective comparative"
      },
      {
        prompt: "Choose the correct form: the most useful / the usefulest.",
        answer: "the most useful",
        focus: "long adjective superlative"
      },
      {
        prompt: "Complete the sentence: This option is as ___ as the old one.",
        answer: "useful",
        focus: "as + adjective + as"
      },
      {
        prompt: "Correct the sentence: This is the better option of all.",
        answer: "This is the best option of all.",
        focus: "superlative for a group"
      }
    ],
    relatedTopics: [
      "Articles and Determiners",
      "Key Structure Differences",
      "Common Prepositions",
      "Reported Speech"
    ]
  },
  {
    contentType: "adjectives-adverbs",
    slug: "adjectives-and-adverbs",
    title: "Adjectives and Adverbs",
    section: "core-grammar",
    overview:
      "Use adjectives to describe nouns and adverbs to describe actions, adjectives, or other adverbs.",
    whatItDoes: [
      "Help you decide between adjective forms like quick and adverb forms like quickly.",
      "Show when good is correct and when you need well.",
      "Explain why linking verbs take adjectives: The app feels smooth.",
      "Prevent Spanish-speaker mistakes like works good and speaks fluent."
    ],
    decisionRules: [
      "If the word describes a noun, use an adjective: a quick solution.",
      "If the word describes how an action happens, use an adverb: loads quickly.",
      "After linking verbs like be, seem, look, feel, sound, and taste, use an adjective.",
      "Use well as the adverb form of good when you describe performance or action.",
      "Adverbs can also modify adjectives: really useful, very clear, extremely important.",
      "Do not use an -ly adverb before a noun: quick solution, not quickly solution."
    ],
    referenceTable: [
      {
        form: "Adjective",
        job: "Describes a noun or pronoun",
        pattern: "adjective + noun / be + adjective",
        example: "This is a quick solution."
      },
      {
        form: "Adverb",
        job: "Describes a verb, adjective, or another adverb",
        pattern: "verb + adverb / adverb + adjective",
        example: "The app loads quickly."
      },
      {
        form: "Linking verb + adjective",
        job: "Describes the subject, not the action",
        pattern: "subject + linking verb + adjective",
        example: "That sounds good."
      },
      {
        form: "Good vs well",
        job: "Good describes nouns; well describes actions or performance",
        pattern: "be good / work well",
        example: "The feature is good, and it works well."
      }
    ],
    adjectivePatterns: [
      {
        title: "Adjective before a noun",
        pattern: "adjective + noun",
        use: "Use an adjective when the word directly describes the thing.",
        examples: [
          "This is a quick solution.",
          "She wrote a clear explanation.",
          "We need a stable version."
        ],
        commonTrap: "Do not use an -ly adverb before a noun: a quick solution, not a quickly solution."
      },
      {
        title: "Adjective after be",
        pattern: "subject + be + adjective",
        use: "Use an adjective after be to describe the subject.",
        examples: [
          "The app is fast.",
          "The rule is simple.",
          "The documentation is useful."
        ],
        commonTrap: "Do not say The app is quickly when you mean its quality is fast."
      }
    ],
    adverbPatterns: [
      {
        title: "Adverb after an action verb",
        pattern: "verb + adverb",
        use: "Use an adverb to describe how an action happens.",
        examples: [
          "The app loads quickly.",
          "She explained it clearly.",
          "The test ran successfully."
        ],
        commonTrap: "Do not use the adjective when you describe the action: loads quickly, not loads quick."
      },
      {
        title: "Adverb before an adjective",
        pattern: "adverb + adjective",
        use: "Use adverbs like really, very, extremely, and too to intensify adjectives.",
        examples: [
          "This example is really useful.",
          "The explanation is very clear.",
          "The setup is too complex."
        ],
        commonTrap: "The adverb modifies the adjective; it does not replace the adjective."
      }
    ],
    linkingVerbCards: [
      {
        title: "Be, seem, look, feel, sound, taste",
        pattern: "subject + linking verb + adjective",
        use: "Use an adjective because the word describes the subject, not an action.",
        examples: [
          "The app is fast.",
          "That sounds good.",
          "The interface feels smooth."
        ],
        commonTrap: "Do not say feels smoothly when you describe the interface."
      },
      {
        title: "Action verb vs linking verb",
        pattern: "action verb + adverb / linking verb + adjective",
        use: "Choose based on whether the verb shows an action or links the subject to a description.",
        examples: [
          "The app runs smoothly.",
          "The app feels smooth.",
          "She speaks clearly."
        ],
        commonTrap: "Run is an action, so use smoothly. Feel is a linking verb, so use smooth."
      }
    ],
    commonMistakes: [
      {
        wrong: "It works good.",
        correct: "It works well.",
        reason: "Works is an action verb, so use the adverb well."
      },
      {
        wrong: "She speaks fluent.",
        correct: "She speaks fluently.",
        reason: "Speaks is an action verb, so use an adverb."
      },
      {
        wrong: "This is a quickly solution.",
        correct: "This is a quick solution.",
        reason: "Solution is a noun, so use the adjective quick."
      },
      {
        wrong: "The app feels smoothly.",
        correct: "The app feels smooth.",
        reason: "Feels is a linking verb here, so use an adjective."
      }
    ],
    quickMemory: [
      "Noun? Use an adjective: quick solution.",
      "Action? Use an adverb: loads quickly.",
      "Be, seem, look, feel, sound, taste usually connect to adjectives.",
      "Good describes a thing; well describes how something works or how someone performs.",
      "Really, very, extremely, and too can intensify adjectives."
    ],
    practiceItems: [
      {
        prompt: "Correct the sentence: It works good.",
        answer: "It works well.",
        focus: "good vs well"
      },
      {
        prompt: "Choose the correct form: This is a quick / quickly solution.",
        answer: "quick",
        focus: "adjective before a noun"
      },
      {
        prompt: "Complete the sentence: The app loads ___.",
        answer: "quickly",
        focus: "adverb after an action verb"
      },
      {
        prompt: "Correct the sentence: The interface feels smoothly.",
        answer: "The interface feels smooth.",
        focus: "linking verb + adjective"
      }
    ],
    relatedTopics: [
      "Comparatives and Superlatives",
      "Key Structure Differences",
      "English Auxiliaries",
      "Common Prepositions"
    ]
  },
  {
    contentType: "connectors-discourse-markers",
    slug: "connectors-and-discourse-markers",
    title: "Connectors and Discourse Markers",
    section: "core-grammar",
    overview:
      "Use connectors and discourse markers to organize ideas, show relationships, and make technical communication easier to follow.",
    whatItDoes: [
      "Help you connect ideas in tickets, pull requests, bug reports, and explanations.",
      "Show whether you need addition, contrast, cause, result, examples, sequence, or summary.",
      "Make punctuation decisions with however, therefore, although, because, and as a result.",
      "Prevent over-connected sentences that copy Spanish structure too directly."
    ],
    decisionRules: [
      "If you add another point, use also, in addition, besides, or moreover.",
      "If you show contrast, use but, however, although, even though, or whereas.",
      "If you explain the reason, use because or since.",
      "If you explain the result, use so, therefore, or as a result.",
      "If you give examples, use for example, for instance, or such as.",
      "If you organize steps, use first, then, after that, and finally.",
      "Use only one main connector for one relationship: although or but, because or so."
    ],
    referenceTable: [
      {
        group: "Addition",
        connectors: "also, besides, in addition, moreover",
        use: "Add another related idea.",
        example: "The fix is small. In addition, it reduces duplication."
      },
      {
        group: "Contrast",
        connectors: "but, however, although, even though, whereas",
        use: "Show a difference, limitation, or unexpected result.",
        example: "The UI is ready. However, the API is still slow."
      },
      {
        group: "Cause / result",
        connectors: "because, since, so, therefore, as a result",
        use: "Explain why something happened or what happened next.",
        example: "The cache was updated; therefore, the page loads faster."
      },
      {
        group: "Examples",
        connectors: "for example, for instance, such as",
        use: "Introduce concrete cases.",
        example: "Use clear labels, such as Save, Cancel, and Retry."
      },
      {
        group: "Sequencing",
        connectors: "first, then, after that, finally",
        use: "Order steps in a process.",
        example: "First, reproduce the bug. Then, check the logs."
      },
      {
        group: "Summary / conclusion",
        connectors: "overall, in short, to sum up",
        use: "Close or summarize a message.",
        example: "Overall, the implementation is simpler and safer."
      }
    ],
    connectorGroups: [
      {
        title: "Addition",
        connectors: ["also", "besides", "in addition", "moreover"],
        use: "Use these when the second idea supports or extends the first idea.",
        examples: [
          "The component is reusable. It also improves consistency.",
          "In addition, the change removes duplicated logic.",
          "Moreover, the new version is easier to test."
        ],
        punctuationNote: "Also can sit before the main verb; in addition, besides, and moreover often start a new sentence with a comma."
      },
      {
        title: "Contrast",
        connectors: ["but", "however", "although", "even though", "whereas"],
        use: "Use these when two ideas are different, opposed, or unexpected together.",
        examples: [
          "The UI is responsive, but the API is still slow.",
          "The UI is responsive. However, the API is still slow.",
          "Although the build failed, the root cause is clear."
        ],
        punctuationNote: "Do not combine although with but. However usually starts a new sentence or follows a semicolon."
      },
      {
        title: "Cause and result",
        connectors: ["because", "since", "so", "therefore", "as a result"],
        use: "Use these to explain the reason for a problem or the result of a change.",
        examples: [
          "The test failed because the mock returned invalid data.",
          "The mock returned invalid data, so the test failed.",
          "We updated the cache; as a result, the page loads faster."
        ],
        punctuationNote: "Do not combine because with so. Therefore and as a result often need a semicolon or a new sentence."
      },
      {
        title: "Examples",
        connectors: ["for example", "for instance", "such as"],
        use: "Use these when an abstract idea needs concrete evidence.",
        examples: [
          "Some actions need confirmation, for example, deleting a project.",
          "For instance, the user may lose unsaved changes.",
          "Use clear labels such as Save, Cancel, and Retry."
        ],
        punctuationNote: "For example and for instance often take commas. Such as usually appears before the examples inside the sentence."
      },
      {
        title: "Sequencing",
        connectors: ["first", "then", "after that", "finally"],
        use: "Use these to describe steps in a process, bug reproduction, or implementation plan.",
        examples: [
          "First, reproduce the bug.",
          "Then, inspect the network request.",
          "Finally, add a regression test."
        ],
        punctuationNote: "When these markers start a sentence, use a comma after them in most technical writing."
      },
      {
        title: "Summary and conclusion",
        connectors: ["overall", "in short", "to sum up"],
        use: "Use these to close a message, summarize a decision, or give a final recommendation.",
        examples: [
          "Overall, the implementation is safer.",
          "In short, the bug comes from stale cache data.",
          "To sum up, we should merge the smaller refactor first."
        ],
        punctuationNote: "These markers usually start the final sentence and take a comma."
      }
    ],
    punctuationNotes: [
      {
        title: "However and therefore",
        rule: "Use a comma after however or therefore when they introduce a sentence. Use a semicolon before them when joining two independent clauses.",
        examples: [
          "The API is stable. However, the UI still needs work.",
          "We fixed the bug; therefore, the tests passed."
        ]
      },
      {
        title: "Although and because",
        rule: "Although and because create dependent clauses. Do not add but or so for the same relationship.",
        examples: [
          "Although it was late, we continued.",
          "Because the test failed, we fixed the mock."
        ]
      },
      {
        title: "So vs therefore",
        rule: "So is common and direct. Therefore is more formal and often better for documentation or decision notes.",
        examples: [
          "The endpoint changed, so the test failed.",
          "The endpoint changed; therefore, the test failed."
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: "Although it was late, but we continued.",
        correct: "Although it was late, we continued.",
        reason: "Although already marks contrast, so but is unnecessary."
      },
      {
        wrong: "Because the test failed, so we fixed it.",
        correct: "Because the test failed, we fixed it.",
        reason: "Because already introduces the reason, so do not add so for the same relationship."
      },
      {
        wrong: "However the app crashed.",
        correct: "However, the app crashed.",
        reason: "However needs a comma when it introduces a sentence."
      },
      {
        wrong: "I like React, besides I use Angular.",
        correct: "I like React. Besides, I use Angular.",
        reason: "Besides works better as a sentence connector with a comma."
      },
      {
        wrong: "We fixed the bug therefore the tests passed.",
        correct: "We fixed the bug; therefore, the tests passed.",
        reason: "Therefore connects two independent clauses, so use a semicolon or a new sentence."
      }
    ],
    quickMemory: [
      "Addition = also, in addition, moreover.",
      "Contrast = but, however, although.",
      "Reason = because or since.",
      "Result = so, therefore, as a result.",
      "Examples = for example, for instance, such as.",
      "Do not double the connector: although + but, because + so."
    ],
    practiceItems: [
      {
        prompt: "Correct the sentence: Although it was late, but we continued.",
        answer: "Although it was late, we continued.",
        focus: "avoid double contrast connectors"
      },
      {
        prompt: "Complete the sentence: The bug was fixed; ___, the tests passed.",
        answer: "therefore",
        focus: "result connector"
      },
      {
        prompt: "Choose the best connector: The UI is ready. ___, the API is still slow.",
        answer: "However",
        focus: "contrast connector"
      },
      {
        prompt: "Correct the sentence: Because the test failed, so we fixed it.",
        answer: "Because the test failed, we fixed it.",
        focus: "avoid because + so"
      },
      {
        prompt: "Complete the sentence: We updated the cache; ___, the page loads faster.",
        answer: "as a result",
        focus: "cause/result connector"
      }
    ],
    relatedTopics: [
      "Reported Speech",
      "Passive Voice",
      "Adjectives and Adverbs",
      "Key Structure Differences"
    ]
  }
];

export function findGrammarTopicFullExplanationBySlug(
  section: GrammarTopicSection,
  slug: string
) {
  return grammarTopicFullExplanations.find(
    (entry) => entry.section === section && entry.slug === slug
  );
}
