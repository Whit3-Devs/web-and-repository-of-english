import type { VerbTenseFullExplanation } from "../shared/types/content";

export const verbTenseFullExplanations: VerbTenseFullExplanation[] = [
  {
    slug: "present-simple",
    title: "Present Simple",
    family: "present",
    overview:
      "Use Present Simple for routines, repeated actions, facts, and things that are generally true.",
    whenToUse: [
      "Talk about routines and habits in daily life.",
      "State facts, definitions, and things that do not usually change.",
      "Describe repeated actions with frequency words such as always, often, or sometimes."
    ],
    decisionRules: [
      "If you mean routine or habit, use Present Simple.",
      "If you mean fact or general truth, use Present Simple.",
      "If the action is normal behavior and not only happening now, use Present Simple."
    ],
    whyThisTense:
      "Present Simple fits when you want to describe stable reality: habits, routines, repeated behavior, and facts. The focus is not a live moment, but what is normal or generally true.",
    whyNotAnother: [
      "Do not use Present Continuous if you are talking about normal routine instead of an action in progress now.",
      "Do not use Present Perfect if the idea is habit or general truth instead of past connected to now."
    ],
    mentalModel:
      "Think of Present Simple as your default tense for stable reality. It is not about one exact moment. It is about what is normal, repeated, or true in general.",
    timelineText:
      "PAST -------- NOW -------- FUTURE\n            routine / fact / habit",
    structures: {
      affirmative: "Subject + base verb / base verb + s",
      negative: "Subject + do/does not + base verb",
      question: "Do/Does + subject + base verb?"
    },
    examples: [
      "She works from home.",
      "They do not study at night.",
      "Does he play tennis on Sundays?",
      "My brother usually drinks coffee before work."
    ],
    personalizedExamples: [
      "I review English notes every morning before work.",
      "She writes code and studies English after dinner.",
      "We usually push updates on Fridays."
    ],
    signals: ["always", "usually", "often", "sometimes", "every day", "on Mondays"],
    commonMistakes: [
      {
        wrong: "She don't work here.",
        correct: "She doesn't work here."
      },
      {
        wrong: "Does he works here?",
        correct: "Does he work here?"
      }
    ],
    explainedMistakes: [
      {
        wrong: "She don't work here.",
        correct: "She doesn't work here.",
        reason:
          "Use does not with he/she/it in Present Simple. After does, the main verb stays in base form."
      },
      {
        wrong: "Does he works here?",
        correct: "Does he work here?",
        reason:
          "After does, the verb must return to the base form, so the extra -s disappears."
      }
    ],
    confusionExamples: [
      {
        title: "Present Simple vs Present Continuous",
        examples: [
          "I work from home. → This is my normal routine.",
          "I am working from home this week. → This is temporary right now."
        ],
        takeaway:
          "Use Present Simple for normal routine. Use Present Continuous for a temporary current situation."
      }
    ],
    comparisons: [
      {
        title: "Present Simple vs Present Continuous",
        explanation:
          "Use Present Simple for routine or normal behavior, and Present Continuous for what is happening now or around now."
      }
    ],
    quickPracticePrompts: [
      "Write 2 sentences about your daily routine.",
      "Write 1 sentence about a fact related to your job or studies."
    ],
    practiceIdeas: [
      "Use it when writing about your daily routine or weekly habits.",
      "Use it to describe facts about yourself, your job, or your city."
    ],
    relatedTopics: ["Present Continuous", "Present Perfect"]
  },
  {
    slug: "present-continuous",
    title: "Present Continuous",
    family: "present",
    overview:
      "Use Present Continuous for actions happening now, around now, or for situations that feel temporary.",
    whenToUse: [
      "Describe an action happening at this moment.",
      "Talk about something in progress around the current period.",
      "Explain temporary situations instead of permanent facts."
    ],
    decisionRules: [
      "If the action is happening now, use Present Continuous.",
      "If the situation is temporary around this period, use Present Continuous.",
      "If you want to show activity in progress, use Present Continuous."
    ],
    whyThisTense:
      "Present Continuous fits when you want the listener to imagine an action in progress or a temporary current situation. It creates a sense of movement around now.",
    whyNotAnother: [
      "Do not use Present Simple if you are describing something temporary or happening right now.",
      "Do not use Present Perfect Continuous if the focus is current activity now rather than duration from the past until now."
    ],
    mentalModel:
      "Think of Present Continuous as a moving camera focused on now. It zooms in on activity in progress instead of general routine.",
    timelineText:
      "PAST ------- [ NOW ] ------- FUTURE\n             action in progress",
    structures: {
      affirmative: "Subject + am/is/are + verb-ing",
      negative: "Subject + am/is/are not + verb-ing",
      question: "Am/Is/Are + subject + verb-ing?"
    },
    examples: [
      "They are studying English right now.",
      "She isn't working this week.",
      "Are you listening to me?",
      "I am staying with my parents for a few days."
    ],
    personalizedExamples: [
      "I am reviewing the grammar notes right now.",
      "We are building a new React page this week.",
      "She is preparing her English practice routine for this month."
    ],
    signals: ["now", "right now", "at the moment", "today", "this week"],
    commonMistakes: [
      {
        wrong: "She studying now.",
        correct: "She is studying now."
      },
      {
        wrong: "I am work now.",
        correct: "I am working now."
      }
    ],
    explainedMistakes: [
      {
        wrong: "She studying now.",
        correct: "She is studying now.",
        reason:
          "Present Continuous needs the verb be before the -ing form."
      },
      {
        wrong: "I am work now.",
        correct: "I am working now.",
        reason:
          "After am/is/are in Present Continuous, the main verb must use the -ing form."
      }
    ],
    confusionExamples: [
      {
        title: "Present Continuous vs Present Simple",
        examples: [
          "She works remotely. → This is her normal routine.",
          "She is working remotely this week. → This is temporary now."
        ],
        takeaway:
          "Use Present Continuous for temporary present situations. Use Present Simple for routine or permanent reality."
      },
      {
        title: "Present Continuous vs Present Perfect Continuous",
        examples: [
          "I am studying now. → Focus on the current action.",
          "I have been studying for two hours. → Focus on duration until now."
        ],
        takeaway:
          "Present Continuous shows activity now. Present Perfect Continuous shows duration from past to now."
      }
    ],
    comparisons: [
      {
        title: "Present Continuous vs Present Simple",
        explanation:
          "Use Present Continuous for activity in progress or a temporary situation, and Present Simple for routine or permanent facts."
      }
    ],
    quickPracticePrompts: [
      "Write 2 sentences about what you are doing today.",
      "Write 1 sentence about a temporary project you are working on."
    ],
    practiceIdeas: [
      "Use it when describing what is happening around you right now.",
      "Use it for temporary phases such as projects, short routines, or living arrangements."
    ],
    relatedTopics: ["Present Simple", "Present Perfect Continuous"]
  },
  {
    slug: "present-perfect",
    title: "Present Perfect",
    family: "present",
    overview:
      "Use Present Perfect for actions, experiences, or results that connect the past with now.",
    whenToUse: [
      "Talk about experiences without saying exactly when they happened.",
      "Describe a finished action that still matters now.",
      "Explain recent changes, progress, or results."
    ],
    decisionRules: [
      "If the past action still matters now, use Present Perfect.",
      "If no finished past time is named, Present Perfect is often a good choice.",
      "If the focus is result or experience, use Present Perfect."
    ],
    whyThisTense:
      "Present Perfect fits when the past is important because of its connection to now. The key idea is present relevance, not past date.",
    whyNotAnother: [
      "Do not use Past Simple if you are not talking about a finished past time like yesterday or last week.",
      "Do not use Present Perfect Continuous if the main focus is result or completed experience rather than duration."
    ],
    mentalModel:
      "Think of Present Perfect as a bridge from the past to now. The important thing is not the exact past time, but the present connection or result.",
    timelineText:
      "PAST --------> NOW\n      connection / result now",
    structures: {
      affirmative: "Subject + have/has + past participle",
      negative: "Subject + have/has not + past participle",
      question: "Have/Has + subject + past participle?"
    },
    examples: [
      "I have finished my homework.",
      "She hasn't seen that movie.",
      "Have they arrived yet?",
      "We have already solved the main problem."
    ],
    personalizedExamples: [
      "I have finished the new English notes for today.",
      "We have already shipped the grammar page update.",
      "She has learned a lot since she started journaling in English."
    ],
    signals: ["already", "yet", "ever", "never", "just", "before"],
    commonMistakes: [
      {
        wrong: "I have seen it yesterday.",
        correct: "I saw it yesterday."
      },
      {
        wrong: "She has went home.",
        correct: "She has gone home."
      }
    ],
    explainedMistakes: [
      {
        wrong: "I have seen it yesterday.",
        correct: "I saw it yesterday.",
        reason:
          "Yesterday is a finished past time, so Past Simple is the correct tense."
      },
      {
        wrong: "She has went home.",
        correct: "She has gone home.",
        reason:
          "Present Perfect uses have/has + past participle. The past participle of go is gone, not went."
      }
    ],
    confusionExamples: [
      {
        title: "Present Perfect vs Past Simple",
        examples: [
          "I have watched that course. → Experience is relevant now.",
          "I watched that course last year. → Finished past time is named."
        ],
        takeaway:
          "Use Present Perfect when the present connection matters. Use Past Simple when the action belongs to a finished past moment."
      },
      {
        title: "Present Perfect vs Present Perfect Continuous",
        examples: [
          "I have written three pages. → Focus on result.",
          "I have been writing for two hours. → Focus on duration."
        ],
        takeaway:
          "Present Perfect highlights completion or result. Present Perfect Continuous highlights duration or ongoing effort."
      }
    ],
    comparisons: [
      {
        title: "Present Perfect vs Past Simple",
        explanation:
          "Use Present Perfect when the past action still matters now and no finished time is named. Use Past Simple when the action belongs to a finished past time such as yesterday or last week."
      },
      {
        title: "Present Perfect vs Present Perfect Continuous",
        explanation:
          "Use Present Perfect for result or completion. Use Present Perfect Continuous for duration or ongoing activity."
      }
    ],
    quickPracticePrompts: [
      "Write 2 sentences about things you have finished this week.",
      "Write 1 sentence about an experience you have had without saying exactly when."
    ],
    practiceIdeas: [
      "Use it when talking about achievements, experience, or progress in your learning.",
      "Use it when reporting recent results without focusing on the exact past moment."
    ],
    relatedTopics: ["Past Simple", "Present Perfect Continuous"]
  },
  {
    slug: "present-perfect-continuous",
    title: "Present Perfect Continuous",
    family: "present",
    overview:
      "Use Present Perfect Continuous for actions that started in the past and continue until now, or recently stopped but still show a visible result.",
    whenToUse: [
      "Focus on duration up to now with for and since.",
      "Describe ongoing activity that started earlier and still continues.",
      "Explain a recent activity that left a visible result in the present."
    ],
    decisionRules: [
      "If you want to answer how long until now, use Present Perfect Continuous.",
      "If the activity started in the past and reaches now, use Present Perfect Continuous.",
      "If duration or ongoing effort matters more than result, use Present Perfect Continuous."
    ],
    whyThisTense:
      "Present Perfect Continuous fits when time duration and ongoing activity are the core message. It shows movement from the past into the present.",
    whyNotAnother: [
      "Do not use Present Continuous if the action started in the past and continues until now.",
      "Do not use Present Perfect if you want to emphasize duration instead of result."
    ],
    mentalModel:
      "Think of Present Perfect Continuous as a time line stretching from the past up to now. The key idea is duration and ongoing effort.",
    timelineText:
      "PAST ========> NOW\n    duration / ongoing activity",
    structures: {
      affirmative: "Subject + have/has been + verb-ing",
      negative: "Subject + have/has not been + verb-ing",
      question: "Have/Has + subject + been + verb-ing?"
    },
    examples: [
      "I have been studying for two hours.",
      "He hasn't been sleeping well lately.",
      "Have you been working on that project?",
      "She has been learning English since January."
    ],
    personalizedExamples: [
      "I have been studying phrasal verbs for the last hour.",
      "We have been improving the React app all week.",
      "She has been journaling in English since the start of the month."
    ],
    signals: ["for", "since", "lately", "all day", "recently"],
    commonMistakes: [
      {
        wrong: "I am living here since 2022.",
        correct: "I have been living here since 2022."
      },
      {
        wrong: "She has been work all day.",
        correct: "She has been working all day."
      }
    ],
    explainedMistakes: [
      {
        wrong: "I am living here since 2022.",
        correct: "I have been living here since 2022.",
        reason:
          "Since 2022 shows a duration from the past until now, so Present Perfect Continuous is a better fit than Present Continuous."
      },
      {
        wrong: "She has been work all day.",
        correct: "She has been working all day.",
        reason:
          "After have/has been, the main verb must use the -ing form."
      }
    ],
    confusionExamples: [
      {
        title: "Present Perfect Continuous vs Present Perfect",
        examples: [
          "I have practiced a lot this week. → Focus on result or experience.",
          "I have been practicing for two hours. → Focus on duration."
        ],
        takeaway:
          "Use Present Perfect Continuous for duration and ongoing effort. Use Present Perfect for result, completion, or experience."
      },
      {
        title: "Present Perfect Continuous vs Present Continuous",
        examples: [
          "I am studying now. → Action around now.",
          "I have been studying since 7 p.m. → Action started earlier and continues until now."
        ],
        takeaway:
          "Present Continuous stays near now. Present Perfect Continuous stretches from the past to now."
      }
    ],
    comparisons: [
      {
        title: "Present Perfect Continuous vs Present Perfect",
        explanation:
          "Use Present Perfect Continuous when duration or ongoing activity is the focus. Use Present Perfect when the result or completed action matters more."
      },
      {
        title: "Present Perfect Continuous vs Present Continuous",
        explanation:
          "Use Present Continuous for activity around now without a past-to-present time span. Use Present Perfect Continuous when the action started in the past and reaches now."
      }
    ],
    quickPracticePrompts: [
      "Write 2 sentences about what you have been doing lately.",
      "Write 1 sentence with for or since about a habit or project that still continues now."
    ],
    practiceIdeas: [
      "Use it when describing how long you have been practicing, studying, or working on something.",
      "Use it when you want to explain current tiredness, progress, or visible results from recent effort."
    ],
    relatedTopics: ["Present Perfect", "Present Continuous"]
  },
  {
    slug: "past-simple",
    title: "Past Simple",
    family: "past",
    overview:
      "Use Past Simple for finished actions and completed events in the past.",
    whenToUse: [
      "Talk about something that started and finished in the past.",
      "Narrate a sequence of completed events in a story.",
      "Mention actions linked to a finished past time such as yesterday, last week, or in 2024."
    ],
    decisionRules: [
      "If the action is finished in the past, use Past Simple.",
      "If you are telling the main sequence of a story, use Past Simple.",
      "If you name a finished past time, Past Simple is usually the right choice."
    ],
    whyThisTense:
      "Past Simple fits when you want to move the story forward with completed past events. It gives the main timeline of what happened and in what order.",
    whyNotAnother: [
      "Do not use Present Perfect if the event belongs to a finished past time or a story timeline.",
      "Do not use Past Continuous if the action is a completed event instead of background in progress."
    ],
    mentalModel:
      "Think of Past Simple as a closed box in the past. The action is done, finished, and separated from now.",
    timelineText:
      "PAST [finished action] ---- NOW ---- FUTURE",
    structures: {
      affirmative: "Subject + past form",
      negative: "Subject + did not + base verb",
      question: "Did + subject + base verb?"
    },
    examples: [
      "We visited our grandmother last weekend.",
      "I didn't call him yesterday.",
      "Did she finish the report?",
      "He watched the game and then went to bed."
    ],
    personalizedExamples: [
      "Yesterday I reviewed my English notes, fixed two bugs, and wrote a short journal entry.",
      "Last week we shipped the new page and then tested the routing flow.",
      "I studied vocabulary for an hour and then practiced speaking."
    ],
    signals: ["yesterday", "last night", "last week", "in 2024", "two days ago"],
    commonMistakes: [
      {
        wrong: "Did you went?",
        correct: "Did you go?"
      },
      {
        wrong: "I have seen her yesterday.",
        correct: "I saw her yesterday."
      }
    ],
    explainedMistakes: [
      {
        wrong: "Did you went?",
        correct: "Did you go?",
        reason:
          "After did, the main verb must return to the base form."
      },
      {
        wrong: "I have seen her yesterday.",
        correct: "I saw her yesterday.",
        reason:
          "Yesterday is a finished past time, so Past Simple is the correct tense."
      }
    ],
    confusionExamples: [
      {
        title: "Past Simple vs Present Perfect",
        examples: [
          "I watched that tutorial yesterday. → Finished past time is named.",
          "I have watched that tutorial before. → Past experience still matters now."
        ],
        takeaway:
          "Use Past Simple for finished past moments. Use Present Perfect when the present connection matters."
      },
      {
        title: "Past Simple vs Past Continuous",
        examples: [
          "I cooked dinner. → Completed past event.",
          "I was cooking dinner when she called. → Background action in progress."
        ],
        takeaway:
          "Use Past Simple for the main completed event and Past Continuous for the background action."
      }
    ],
    comparisons: [
      {
        title: "Past Simple vs Present Perfect",
        explanation:
          "Use Past Simple when the action belongs to a finished past time. Use Present Perfect when the past action still connects to now and no finished past time is named."
      },
      {
        title: "Past Simple vs Past Continuous",
        explanation:
          "Use Past Simple for the completed event and Past Continuous for the background action that was in progress around that moment."
      }
    ],
    quickPracticePrompts: [
      "Write 3 sentences describing what happened yesterday in order.",
      "Write 1 sentence about a finished coding or study task from last week."
    ],
    practiceIdeas: [
      "Use it when journaling about what happened yesterday or last weekend.",
      "Use it to tell a simple story with a clear order of completed events."
    ],
    relatedTopics: ["Past Continuous", "Present Perfect", "Past Perfect"]
  },
  {
    slug: "past-continuous",
    title: "Past Continuous",
    family: "past",
    overview:
      "Use Past Continuous for an action that was in progress at a specific moment in the past.",
    whenToUse: [
      "Describe background activity in a story.",
      "Show what was happening at a particular past moment.",
      "Combine it with Past Simple to contrast an ongoing action with a shorter event."
    ],
    decisionRules: [
      "If you want to show background action in a story, use Past Continuous.",
      "If the action was in progress at a past moment, use Past Continuous.",
      "If another event interrupts the scene, Past Continuous often gives the background."
    ],
    whyThisTense:
      "Past Continuous fits when you want to paint the scene instead of listing finished events. It helps the listener imagine what was already happening at that time.",
    whyNotAnother: [
      "Do not use Past Simple if the focus is the ongoing background instead of the finished event.",
      "Do not use Past Perfect Continuous if the focus is an action in progress at a past moment, not duration before another past point."
    ],
    mentalModel:
      "Think of Past Continuous as a moving scene in the past. The action was already happening around a past moment instead of starting and finishing as one short event.",
    timelineText:
      "PAST ---- [in progress] ---- NOW ---- FUTURE",
    structures: {
      affirmative: "Subject + was/were + verb-ing",
      negative: "Subject + was/were not + verb-ing",
      question: "Was/Were + subject + verb-ing?"
    },
    examples: [
      "She was reading at 8 p.m.",
      "They weren't paying attention.",
      "Were you sleeping when I called?",
      "I was cooking while she was setting the table."
    ],
    personalizedExamples: [
      "I was studying English when my friend sent me a message.",
      "We were testing the app while the designer was updating the content.",
      "She was writing her journal entry when the internet went down."
    ],
    signals: ["at 8 p.m.", "while", "when", "all evening", "at that moment"],
    commonMistakes: [
      {
        wrong: "She was read a book.",
        correct: "She was reading a book."
      },
      {
        wrong: "They were study when I arrived.",
        correct: "They were studying when I arrived."
      }
    ],
    explainedMistakes: [
      {
        wrong: "She was read a book.",
        correct: "She was reading a book.",
        reason:
          "Past Continuous needs was/were + verb-ing, not the base form."
      },
      {
        wrong: "They were study when I arrived.",
        correct: "They were studying when I arrived.",
        reason:
          "After was/were, the main verb must use the -ing form in Past Continuous."
      }
    ],
    confusionExamples: [
      {
        title: "Past Continuous vs Past Simple",
        examples: [
          "I worked all evening. → Focus on the completed action.",
          "I was working when the lights went out. → Focus on the action in progress."
        ],
        takeaway:
          "Use Past Continuous for the action in progress and Past Simple for the shorter completed event."
      },
      {
        title: "Past Continuous in story background",
        examples: [
          "The team was waiting, the rain was falling, and everyone was checking their phones.",
          "Then the manager arrived and started the meeting."
        ],
        takeaway:
          "Past Continuous builds the scene. Past Simple moves the main event forward."
      }
    ],
    comparisons: [
      {
        title: "Past Continuous vs Past Simple",
        explanation:
          "Use Past Continuous for the action in progress and Past Simple for the completed event that interrupts or happens during it."
      }
    ],
    quickPracticePrompts: [
      "Write 2 sentences describing the background of a past situation.",
      "Write 1 sentence with when or while to combine Past Continuous and Past Simple."
    ],
    practiceIdeas: [
      "Use it when describing the background of a past situation or memory.",
      "Use it to explain what was happening when another past event occurred."
    ],
    relatedTopics: ["Past Simple", "Past Perfect Continuous"]
  },
  {
    slug: "past-perfect",
    title: "Past Perfect",
    family: "past",
    overview:
      "Use Past Perfect for an action that happened before another past moment or another past action.",
    whenToUse: [
      "Show which past action happened first.",
      "Explain the earlier step in a sequence of past events.",
      "Make story timing clear when two past moments could be confused."
    ],
    decisionRules: [
      "If you need to show the earlier of two past actions, use Past Perfect.",
      "If story timing could be confusing, Past Perfect helps clarify the first event.",
      "If the listener needs to understand what had already happened before a later past moment, use Past Perfect."
    ],
    whyThisTense:
      "Past Perfect fits when a story needs clear time order. It marks the earlier past action so the listener does not confuse it with the later one.",
    whyNotAnother: [
      "Do not use Past Simple for both actions if the order becomes unclear and you need to show what happened first.",
      "Do not use Past Perfect Continuous if the main idea is earlier completion rather than duration."
    ],
    mentalModel:
      "Think of Past Perfect as the past before the past. It lets you go back one more step from a later past moment.",
    timelineText:
      "PAST [earlier action] -> [later past moment] ---- NOW",
    structures: {
      affirmative: "Subject + had + past participle",
      negative: "Subject + had not + past participle",
      question: "Had + subject + past participle?"
    },
    examples: [
      "They had left before I arrived.",
      "She hadn't finished the report when the meeting started.",
      "Had you seen that movie before 2023?",
      "By the time we got there, the store had already closed."
    ],
    personalizedExamples: [
      "I had finished the bug fix before the meeting started.",
      "She had already written her journal entry when I texted her.",
      "We had reviewed the lesson before the speaking session began."
    ],
    signals: ["before", "after", "by the time", "already", "when + past event"],
    commonMistakes: [
      {
        wrong: "When I arrived, they left already.",
        correct: "When I arrived, they had already left."
      },
      {
        wrong: "She had went home.",
        correct: "She had gone home."
      }
    ],
    explainedMistakes: [
      {
        wrong: "When I arrived, they left already.",
        correct: "When I arrived, they had already left.",
        reason:
          "The leaving happened before the arrival, so Past Perfect makes that earlier timing clear."
      },
      {
        wrong: "She had went home.",
        correct: "She had gone home.",
        reason:
          "Past Perfect uses had + past participle. The past participle of go is gone."
      }
    ],
    confusionExamples: [
      {
        title: "Past Perfect vs Past Simple",
        examples: [
          "When I arrived, they had left. → Leaving happened first.",
          "When I arrived, they left. → The order sounds wrong or unclear."
        ],
        takeaway:
          "Use Past Perfect when you must show that one past action happened before another."
      },
      {
        title: "Story order clarity",
        examples: [
          "She had prepared everything before the guests arrived.",
          "By the time the class started, he had already opened the app and reviewed the notes."
        ],
        takeaway:
          "Past Perfect is useful when a story needs one clear earlier step before the main past moment."
      }
    ],
    comparisons: [
      {
        title: "Past Perfect vs Past Simple",
        explanation:
          "Use Past Perfect to mark the earlier past action, and Past Simple for the later past action or reference moment."
      }
    ],
    quickPracticePrompts: [
      "Write 2 sentences with two past events and make the earlier one clear.",
      "Write 1 sentence using by the time or before."
    ],
    practiceIdeas: [
      "Use it when telling stories with two different past moments.",
      "Use it to explain what had happened before a meeting, trip, exam, or problem."
    ],
    relatedTopics: ["Past Simple", "Past Perfect Continuous"]
  },
  {
    slug: "past-perfect-continuous",
    title: "Past Perfect Continuous",
    family: "past",
    overview:
      "Use Past Perfect Continuous for duration before another point in the past.",
    whenToUse: [
      "Show how long an action had been happening before a later past event.",
      "Focus on duration rather than only completion.",
      "Explain background effort or ongoing activity before another past moment."
    ],
    decisionRules: [
      "If you want to answer how long before a later past moment, use Past Perfect Continuous.",
      "If duration or buildup matters more than completion, use Past Perfect Continuous.",
      "If an earlier ongoing effort explains a later past result, use Past Perfect Continuous."
    ],
    whyThisTense:
      "Past Perfect Continuous fits when the story needs buildup. It shows how long an action had been happening before another past moment changed the situation.",
    whyNotAnother: [
      "Do not use Past Perfect if the main idea is duration rather than earlier completion.",
      "Do not use Past Continuous if the action happened before a later past point and you need to show that earlier duration."
    ],
    mentalModel:
      "Think of Past Perfect Continuous as a long line that stretches through the past until a later past point. The focus is how long the activity had been going on.",
    timelineText:
      "PAST =====> [later past moment] ---- NOW\n   duration before past point",
    structures: {
      affirmative: "Subject + had been + verb-ing",
      negative: "Subject + had not been + verb-ing",
      question: "Had + subject + been + verb-ing?"
    },
    examples: [
      "I had been studying for hours before the exam started.",
      "She hadn't been sleeping well before the trip.",
      "Had they been waiting long when the bus arrived?",
      "He was tired because he had been working all day."
    ],
    personalizedExamples: [
      "I had been debugging for two hours before I found the real issue.",
      "She had been studying English all week before the speaking session.",
      "We had been preparing the release for days before the client meeting."
    ],
    signals: ["for", "since", "before", "all day", "by the time"],
    commonMistakes: [
      {
        wrong: "I had been study for two hours.",
        correct: "I had been studying for two hours."
      },
      {
        wrong: "She had working before I came.",
        correct: "She had been working before I came."
      }
    ],
    explainedMistakes: [
      {
        wrong: "I had been study for two hours.",
        correct: "I had been studying for two hours.",
        reason:
          "After had been, the main verb must use the -ing form."
      },
      {
        wrong: "She had working before I came.",
        correct: "She had been working before I came.",
        reason:
          "Past Perfect Continuous uses had been + verb-ing, not had + verb-ing alone."
      }
    ],
    confusionExamples: [
      {
        title: "Past Perfect Continuous vs Past Perfect",
        examples: [
          "She had worked on the report before the meeting. → Focus on completion.",
          "She had been working on the report for hours before the meeting. → Focus on duration."
        ],
        takeaway:
          "Use Past Perfect Continuous when the key idea is duration or ongoing effort before a later past event."
      },
      {
        title: "Past Perfect Continuous vs Past Continuous",
        examples: [
          "I was studying at 8 p.m. → Action in progress at a past moment.",
          "I had been studying for two hours before dinner. → Duration before a later past moment."
        ],
        takeaway:
          "Past Continuous stays at one past moment. Past Perfect Continuous stretches before another past point."
      }
    ],
    comparisons: [
      {
        title: "Past Perfect Continuous vs Past Perfect",
        explanation:
          "Use Past Perfect Continuous when duration or ongoing effort matters. Use Past Perfect when the earlier past action is seen mainly as completed."
      },
      {
        title: "Past Perfect Continuous vs Past Continuous",
        explanation:
          "Use Past Continuous for an action in progress at a past moment. Use Past Perfect Continuous for an activity that had been happening before a later past moment."
      }
    ],
    quickPracticePrompts: [
      "Write 2 sentences about how long something had been happening before another event.",
      "Write 1 sentence that explains a past result using because."
    ],
    practiceIdeas: [
      "Use it when writing about how long something had been happening before another event.",
      "Use it to explain background effort, tiredness, or preparation in past stories."
    ],
    relatedTopics: ["Past Perfect", "Past Continuous"]
  },
  {
    slug: "future-simple",
    title: "Future Simple",
    family: "future",
    overview:
      "Use Future Simple for decisions made in the moment, predictions, offers, and promises.",
    whenToUse: [
      "Make a spontaneous decision at the moment of speaking.",
      "Give predictions, opinions, promises, or offers about the future.",
      "Talk about future events without emphasizing an existing plan."
    ],
    decisionRules: [
      "If you decide right now, use Future Simple.",
      "If you are making a promise, offer, or quick prediction, use Future Simple.",
      "If there is no strong idea of plan or present evidence, Future Simple is often the default choice."
    ],
    whyThisTense:
      "Future Simple fits when the future statement comes directly from the moment of speaking. It is strong for instant decisions, promises, offers, and neutral predictions.",
    whyNotAnother: [
      "Do not use Future Going To if the idea is an instant decision rather than a prior plan or visible evidence.",
      "Do not use Future Continuous if you are not describing an action in progress at a future moment."
    ],
    mentalModel:
      "Think of Future Simple as a future line created from the present moment. It often expresses what you decide, predict, or offer right now.",
    timelineText:
      "PAST ---- NOW ----> FUTURE\n             decision / prediction",
    structures: {
      affirmative: "Subject + will + base verb",
      negative: "Subject + will not + base verb",
      question: "Will + subject + base verb?"
    },
    examples: [
      "I will call you tonight.",
      "She won't forget.",
      "Will they join us later?",
      "I think it will rain tomorrow."
    ],
    personalizedExamples: [
      "I will review the new grammar section tonight.",
      "We will fix that UI issue after lunch.",
      "I think the next version will feel much clearer."
    ],
    signals: ["tomorrow", "tonight", "next week", "I think", "probably", "maybe"],
    commonMistakes: [
      {
        wrong: "I will to call you.",
        correct: "I will call you."
      },
      {
        wrong: "He will goes tomorrow.",
        correct: "He will go tomorrow."
      }
    ],
    explainedMistakes: [
      {
        wrong: "I will to call you.",
        correct: "I will call you.",
        reason:
          "After will, the main verb must stay in the base form with no to."
      },
      {
        wrong: "He will goes tomorrow.",
        correct: "He will go tomorrow.",
        reason:
          "After will, the main verb does not take -s. It stays in the base form."
      }
    ],
    confusionExamples: [
      {
        title: "Future Simple vs Future Going To",
        examples: [
          "I'll answer the email now. → Instant decision.",
          "I'm going to answer the email after lunch. → Existing plan."
        ],
        takeaway:
          "Use Future Simple for instant decisions. Use Future Going To for plans already in your mind."
      },
      {
        title: "Future Simple vs Future Continuous",
        examples: [
          "I will work tomorrow. → Simple future event.",
          "I will be working at 10 a.m. tomorrow. → Action in progress at a future time."
        ],
        takeaway:
          "Use Future Simple for a general future event. Use Future Continuous for an action already happening at a future moment."
      }
    ],
    comparisons: [
      {
        title: "Future Simple vs Future Going To",
        explanation:
          "Use Future Simple for instant decisions, neutral predictions, offers, or promises. Use Future Going To for plans, intentions, or predictions based on present evidence."
      },
      {
        title: "Future Simple vs Future Continuous",
        explanation:
          "Use Future Simple for a basic future event. Use Future Continuous when you want to show an action in progress at a future moment."
      }
    ],
    quickPracticePrompts: [
      "Write 2 instant decisions you might say today.",
      "Write 1 prediction about your English progress next month."
    ],
    practiceIdeas: [
      "Use it when making promises, offers, or quick decisions in speaking practice.",
      "Use it to predict what you think will happen tomorrow or next week."
    ],
    relatedTopics: ["Future Going To", "Future Continuous", "Future Perfect"]
  },
  {
    slug: "future-continuous",
    title: "Future Continuous",
    family: "future",
    overview:
      "Use Future Continuous for an action that will be in progress at a specific moment in the future.",
    whenToUse: [
      "Describe what will be happening at a future time.",
      "Imagine an action in progress around a future moment.",
      "Show the future background of another event or plan."
    ],
    decisionRules: [
      "If you want to picture an action in progress at a future time, use Future Continuous.",
      "If the future scene matters more than a simple event, use Future Continuous.",
      "If you are describing background action around a future moment, use Future Continuous."
    ],
    whyThisTense:
      "Future Continuous fits when you want the listener to imagine a future scene already in motion. It is useful for future background and ongoing activity at a chosen time.",
    whyNotAnother: [
      "Do not use Future Simple if you want to show an action already in progress at a future moment.",
      "Do not use Future Perfect Continuous if the focus is not duration up to a future point."
    ],
    mentalModel:
      "Think of Future Continuous as a moving scene in the future. You are looking at an action that will already be happening at a given future point.",
    timelineText:
      "PAST ---- NOW ---- [future point: in progress] ---->",
    structures: {
      affirmative: "Subject + will be + verb-ing",
      negative: "Subject + will not be + verb-ing",
      question: "Will + subject + be + verb-ing?"
    },
    examples: [
      "This time tomorrow, I will be flying to Córdoba.",
      "She won't be working at 9 p.m.",
      "Will they be waiting for us when we arrive?",
      "At noon, we will be having lunch with the team."
    ],
    personalizedExamples: [
      "At 8 p.m., I will be reviewing the future tense notes.",
      "Tomorrow morning, we will be testing the new search flow.",
      "This time next week, she will be traveling and journaling in English."
    ],
    signals: ["this time tomorrow", "at 8 p.m. tomorrow", "next week at this time", "when you arrive"],
    commonMistakes: [
      {
        wrong: "I will be study at 9.",
        correct: "I will be studying at 9."
      },
      {
        wrong: "Will be you working later?",
        correct: "Will you be working later?"
      }
    ],
    explainedMistakes: [
      {
        wrong: "I will be study at 9.",
        correct: "I will be studying at 9.",
        reason:
          "After will be, the main verb must use the -ing form."
      },
      {
        wrong: "Will be you working later?",
        correct: "Will you be working later?",
        reason:
          "In questions, will comes before the subject and be stays after the subject."
      }
    ],
    confusionExamples: [
      {
        title: "Future Continuous vs Future Simple",
        examples: [
          "I will work tomorrow. → General future statement.",
          "I will be working at 10 tomorrow. → Future action in progress."
        ],
        takeaway:
          "Use Future Continuous when the important idea is what will be happening at a future moment."
      },
      {
        title: "Future Continuous as future background",
        examples: [
          "When you arrive, we will be having dinner.",
          "At that time, the team will be presenting the release."
        ],
        takeaway:
          "Future Continuous is useful for building the background scene of a future event."
      }
    ],
    comparisons: [
      {
        title: "Future Continuous vs Future Simple",
        explanation:
          "Use Future Continuous for an action in progress at a future moment. Use Future Simple for a simple future event, promise, or prediction."
      }
    ],
    quickPracticePrompts: [
      "Write 2 sentences about what you will be doing tomorrow at a specific time.",
      "Write 1 sentence starting with When you arrive..."
    ],
    practiceIdeas: [
      "Use it when imagining what you or other people will be doing at a future hour.",
      "Use it in journaling to describe the background of a future plan or trip."
    ],
    relatedTopics: ["Future Simple", "Future Perfect Continuous"]
  },
  {
    slug: "future-perfect",
    title: "Future Perfect",
    family: "future",
    overview:
      "Use Future Perfect for an action that will be completed before a future point.",
    whenToUse: [
      "Talk about something that will be finished before a deadline or future moment.",
      "Show completion before another future event.",
      "Describe goals, milestones, or progress measured against a future point."
    ],
    decisionRules: [
      "If the action will be finished before a future deadline, use Future Perfect.",
      "If the key idea is completion before another future moment, use Future Perfect.",
      "If you are measuring progress by a future point, Future Perfect is often the right choice."
    ],
    whyThisTense:
      "Future Perfect fits when the future is organized around completion. It lets you say that something will already be done by a certain time.",
    whyNotAnother: [
      "Do not use Future Simple if you need to emphasize completion before a deadline.",
      "Do not use Future Perfect Continuous if the main focus is completion rather than duration."
    ],
    mentalModel:
      "Think of Future Perfect as completion before the future arrives at a specific point. The key idea is that the action will already be finished by then.",
    timelineText:
      "PAST ---- NOW ---- [finished before future point] --->",
    structures: {
      affirmative: "Subject + will have + past participle",
      negative: "Subject + will not have + past participle",
      question: "Will + subject + have + past participle?"
    },
    examples: [
      "They will have finished the project by Friday.",
      "She won't have arrived by 6 p.m.",
      "Will you have completed the course by July?",
      "By next month, we will have launched the new page."
    ],
    personalizedExamples: [
      "By Friday, I will have finished the full grammar review.",
      "We will have shipped the next version before the client call.",
      "By the end of the month, she will have completed the speaking challenge."
    ],
    signals: ["by", "by the time", "before", "by Friday", "by next month"],
    commonMistakes: [
      {
        wrong: "I will have finish it by tomorrow.",
        correct: "I will have finished it by tomorrow."
      },
      {
        wrong: "She will has completed it.",
        correct: "She will have completed it."
      }
    ],
    explainedMistakes: [
      {
        wrong: "I will have finish it by tomorrow.",
        correct: "I will have finished it by tomorrow.",
        reason:
          "After will have, you need the past participle, not the base form."
      },
      {
        wrong: "She will has completed it.",
        correct: "She will have completed it.",
        reason:
          "After will, use have, not has. The auxiliary does not change for person."
      }
    ],
    confusionExamples: [
      {
        title: "Future Perfect vs Future Simple",
        examples: [
          "I will submit the report tomorrow. → Simple future event.",
          "I will have submitted the report by 9 a.m. tomorrow. → Completed before a future point."
        ],
        takeaway:
          "Use Future Perfect when completion before a deadline is the main idea."
      },
      {
        title: "Future Perfect vs Future Perfect Continuous",
        examples: [
          "By June, I will have worked here for five years. → Completion/result focus.",
          "By June, I will have been working here for five years. → Duration focus."
        ],
        takeaway:
          "Future Perfect highlights completion or end state. Future Perfect Continuous highlights duration."
      }
    ],
    comparisons: [
      {
        title: "Future Perfect vs Future Simple",
        explanation:
          "Use Future Perfect when completion before a deadline matters. Use Future Simple when you only need a basic future statement."
      },
      {
        title: "Future Perfect vs Future Perfect Continuous",
        explanation:
          "Use Future Perfect for completion. Use Future Perfect Continuous when duration up to a future point is the focus."
      }
    ],
    quickPracticePrompts: [
      "Write 2 sentences with by to describe future deadlines.",
      "Write 1 sentence about something you will have completed by next month."
    ],
    practiceIdeas: [
      "Use it when planning deadlines, milestones, and completed goals.",
      "Use it to describe what you will have finished by a certain day or hour."
    ],
    relatedTopics: ["Future Simple", "Future Perfect Continuous"]
  },
  {
    slug: "future-perfect-continuous",
    title: "Future Perfect Continuous",
    family: "future",
    overview:
      "Use Future Perfect Continuous for the duration of an activity up to a future point.",
    whenToUse: [
      "Show how long something will have been happening by a future time.",
      "Focus on duration instead of only completion.",
      "Describe continuing effort leading up to a future milestone."
    ],
    decisionRules: [
      "If you want to answer how long by a future point, use Future Perfect Continuous.",
      "If duration up to a deadline matters more than completion, use Future Perfect Continuous.",
      "If you want to describe ongoing effort reaching a future milestone, use Future Perfect Continuous."
    ],
    whyThisTense:
      "Future Perfect Continuous fits when the main idea is duration leading up to a future moment. It helps you measure ongoing effort or activity by a future point.",
    whyNotAnother: [
      "Do not use Future Perfect if the key idea is duration instead of completion.",
      "Do not use Future Continuous if you need to show how long the activity will have lasted by then."
    ],
    mentalModel:
      "Think of Future Perfect Continuous as a duration line that keeps moving until a future point. The important question is: for how long by then?",
    timelineText:
      "PAST ---- NOW ====>>>> [future point]\n          duration up to future point",
    structures: {
      affirmative: "Subject + will have been + verb-ing",
      negative: "Subject + will not have been + verb-ing",
      question: "Will + subject + have been + verb-ing?"
    },
    examples: [
      "By next June, I will have been working here for five years.",
      "She won't have been studying long by the exam date.",
      "Will they have been living there for a decade by then?",
      "By midnight, we will have been traveling for twelve hours."
    ],
    personalizedExamples: [
      "By next month, I will have been studying English for a full year.",
      "By release day, we will have been improving the app for six weeks.",
      "By Friday, she will have been preparing the presentation for days."
    ],
    signals: ["for", "by", "by the time", "by next year", "for five years"],
    commonMistakes: [
      {
        wrong: "I will have been work here for years.",
        correct: "I will have been working here for years."
      },
      {
        wrong: "She will have been lived here for years.",
        correct: "She will have been living here for years."
      }
    ],
    explainedMistakes: [
      {
        wrong: "I will have been work here for years.",
        correct: "I will have been working here for years.",
        reason:
          "After will have been, the main verb must use the -ing form."
      },
      {
        wrong: "She will have been lived here for years.",
        correct: "She will have been living here for years.",
        reason:
          "Future Perfect Continuous requires will have been + verb-ing, not a past participle."
      }
    ],
    confusionExamples: [
      {
        title: "Future Perfect Continuous vs Future Perfect",
        examples: [
          "By July, I will have finished the course. → Completion focus.",
          "By July, I will have been studying for eight months. → Duration focus."
        ],
        takeaway:
          "Use Future Perfect Continuous when the important question is how long by that future point."
      },
      {
        title: "Future Perfect Continuous vs Future Continuous",
        examples: [
          "At 10 p.m., I will be studying. → Action in progress at that time.",
          "By 10 p.m., I will have been studying for three hours. → Duration by that time."
        ],
        takeaway:
          "Future Continuous shows the action at a moment. Future Perfect Continuous shows the duration up to that moment."
      }
    ],
    comparisons: [
      {
        title: "Future Perfect Continuous vs Future Perfect",
        explanation:
          "Use Future Perfect Continuous when duration or ongoing effort matters. Use Future Perfect when the important idea is that the action will be finished."
      },
      {
        title: "Future Perfect Continuous vs Future Continuous",
        explanation:
          "Use Future Continuous for an action in progress at a future moment. Use Future Perfect Continuous for how long that action will have been happening by then."
      }
    ],
    quickPracticePrompts: [
      "Write 2 sentences using by and for to describe future duration.",
      "Write 1 sentence about how long you will have been doing something by next year."
    ],
    practiceIdeas: [
      "Use it when imagining how long you will have been doing something by a future milestone.",
      "Use it to describe future effort, duration, or long-term routines."
    ],
    relatedTopics: ["Future Perfect", "Present Perfect Continuous"]
  },
  {
    slug: "future-going-to",
    title: "Future Going To",
    family: "future",
    overview:
      "Use Future Going To for plans, intentions, and future actions you already have in mind, or for predictions based on present evidence.",
    whenToUse: [
      "Talk about plans or intentions decided before the moment of speaking.",
      "Describe future actions that already feel arranged in your mind.",
      "Make predictions based on visible evidence in the present."
    ],
    decisionRules: [
      "If the plan already exists before you speak, use Future Going To.",
      "If you see present evidence for a prediction, use Future Going To.",
      "If the future idea comes from intention rather than an instant decision, use Future Going To."
    ],
    whyThisTense:
      "Future Going To fits when the future already has a reason in the present: a plan in your mind or visible evidence in front of you.",
    whyNotAnother: [
      "Do not use Future Simple if the plan already existed before the moment of speaking.",
      "Do not use Present Continuous if the point is general intention rather than a strongly fixed arrangement."
    ],
    mentalModel:
      "Think of Future Going To as a future that starts from now because there is already a plan or visible evidence in the present.",
    timelineText:
      "PAST ---- NOW ----> FUTURE\n        plan / intention / evidence now",
    structures: {
      affirmative: "Subject + am/is/are going to + base verb",
      negative: "Subject + am/is/are not going to + base verb",
      question: "Am/Is/Are + subject + going to + base verb?"
    },
    examples: [
      "She is going to study tonight.",
      "They aren't going to travel this week.",
      "Is he going to call you later?",
      "Look at those clouds. It is going to rain."
    ],
    personalizedExamples: [
      "I am going to review the irregular verbs tonight.",
      "We are going to refactor the search logic next week.",
      "Look at the release board. We are going to be busy tomorrow."
    ],
    signals: ["tonight", "tomorrow", "next weekend", "look at those clouds", "I have a plan"],
    commonMistakes: [
      {
        wrong: "I am go to study.",
        correct: "I am going to study."
      },
      {
        wrong: "She going to travel tomorrow.",
        correct: "She is going to travel tomorrow."
      }
    ],
    explainedMistakes: [
      {
        wrong: "I am go to study.",
        correct: "I am going to study.",
        reason:
          "The structure needs be + going to + base verb. The word going cannot disappear."
      },
      {
        wrong: "She going to travel tomorrow.",
        correct: "She is going to travel tomorrow.",
        reason:
          "Future Going To needs the verb be before going to."
      }
    ],
    confusionExamples: [
      {
        title: "Future Going To vs Future Simple",
        examples: [
          "I'm going to study tonight. → Existing plan.",
          "I'll study with you. → Instant decision or offer."
        ],
        takeaway:
          "Use Future Going To for prior plans and Future Simple for instant decisions or promises."
      },
      {
        title: "Future Going To vs Present Continuous",
        examples: [
          "I'm going to work on the app this weekend. → General plan or intention.",
          "I'm meeting the designer at 10 tomorrow. → More fixed arrangement."
        ],
        takeaway:
          "Future Going To often expresses intention. Present Continuous often sounds more scheduled or arranged."
      }
    ],
    comparisons: [
      {
        title: "Future Going To vs Future Simple",
        explanation:
          "Use Future Going To for an existing plan, intention, or evidence-based prediction. Use Future Simple for instant decisions, promises, or neutral predictions."
      },
      {
        title: "Future Going To vs Present Continuous",
        explanation:
          "Use Future Going To for plans and intentions in general. Use Present Continuous when a future arrangement feels especially fixed or scheduled."
      }
    ],
    quickPracticePrompts: [
      "Write 2 sentences about plans you already have for tomorrow or next week.",
      "Write 1 prediction based on something you can see right now."
    ],
    practiceIdeas: [
      "Use it when writing about tomorrow, next week, or future intentions you already have.",
      "Use it when making predictions from what you can see right now."
    ],
    relatedTopics: ["Future Simple", "Present Continuous"]
  }
];

export function findVerbTenseFullExplanationBySlug(slug: string) {
  return verbTenseFullExplanations.find((entry) => entry.slug === slug);
}
