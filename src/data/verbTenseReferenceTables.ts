import type { VerbTenseReferenceGroup } from "../shared/types/content";

export const verbTenseReferenceTables: VerbTenseReferenceGroup[] = [
  {
    family: "present",
    title: "Present Tenses",
    quickMemory: [
      "Present Simple → routine, fact, repeated action.",
      "Present Continuous → action happening now or around now.",
      "Present Perfect → past action connected to now.",
      "Present Perfect Continuous → duration from the past until now."
    ],
    tables: [
      {
        section: "affirmative",
        rows: [
          {
            tenseName: "Present Simple",
            tenseSlug: "present-simple",
            auxiliary: "—",
            contraction: "—",
            mainVerbForm: "base verb / base + s",
            structure: "Subject + verb + object",
            example: "She works in an office."
          },
          {
            tenseName: "Present Continuous",
            tenseSlug: "present-continuous",
            auxiliary: "am / is / are",
            contraction: "I'm / he's / you're",
            mainVerbForm: "verb + ing",
            structure: "Subject + am/is/are + verb-ing + object",
            example: "They are studying English."
          },
          {
            tenseName: "Present Perfect",
            tenseSlug: "present-perfect",
            auxiliary: "have / has",
            contraction: "I've / she's",
            mainVerbForm: "past participle",
            structure: "Subject + have/has + past participle + object",
            example: "I have finished my homework."
          },
          {
            tenseName: "Present Perfect Continuous",
            tenseSlug: "present-perfect-continuous",
            auxiliary: "have / has been",
            contraction: "I've been / he's been",
            mainVerbForm: "verb + ing",
            structure: "Subject + have/has been + verb-ing + object",
            example: "He has been working all day."
          }
        ]
      },
      {
        section: "negative",
        rows: [
          {
            tenseName: "Present Simple",
            tenseSlug: "present-simple",
            auxiliary: "do not / does not",
            contraction: "don't / doesn't",
            mainVerbForm: "base verb",
            structure: "Subject + do/does not + verb + object",
            example: "She does not work here."
          },
          {
            tenseName: "Present Continuous",
            tenseSlug: "present-continuous",
            auxiliary: "am not / is not / are not",
            contraction: "I'm not / isn't / aren't",
            mainVerbForm: "verb + ing",
            structure: "Subject + am/is/are not + verb-ing + object",
            example: "They are not studying now."
          },
          {
            tenseName: "Present Perfect",
            tenseSlug: "present-perfect",
            auxiliary: "have not / has not",
            contraction: "haven't / hasn't",
            mainVerbForm: "past participle",
            structure: "Subject + have/has not + past participle + object",
            example: "I have not finished my homework."
          },
          {
            tenseName: "Present Perfect Continuous",
            tenseSlug: "present-perfect-continuous",
            auxiliary: "have not / has not been",
            contraction: "haven't been / hasn't been",
            mainVerbForm: "verb + ing",
            structure: "Subject + have/has not been + verb-ing + object",
            example: "He has not been working today."
          }
        ]
      },
      {
        section: "question",
        rows: [
          {
            tenseName: "Present Simple",
            tenseSlug: "present-simple",
            auxiliary: "Do / Does",
            contraction: "—",
            mainVerbForm: "base verb",
            structure: "Do/Does + subject + verb + object?",
            example: "Does she work here?"
          },
          {
            tenseName: "Present Continuous",
            tenseSlug: "present-continuous",
            auxiliary: "Am / Is / Are",
            contraction: "—",
            mainVerbForm: "verb + ing",
            structure: "Am/Is/Are + subject + verb-ing + object?",
            example: "Are they studying English?"
          },
          {
            tenseName: "Present Perfect",
            tenseSlug: "present-perfect",
            auxiliary: "Have / Has",
            contraction: "—",
            mainVerbForm: "past participle",
            structure: "Have/Has + subject + past participle + object?",
            example: "Have you finished your homework?"
          },
          {
            tenseName: "Present Perfect Continuous",
            tenseSlug: "present-perfect-continuous",
            auxiliary: "Have / Has",
            contraction: "—",
            mainVerbForm: "been + verb + ing",
            structure: "Have/Has + subject + been + verb-ing + object?",
            example: "Has he been working all day?"
          }
        ]
      }
    ]
  },
  {
    family: "past",
    title: "Past Tenses",
    quickMemory: [
      "Past Simple → finished past action.",
      "Past Continuous → action in progress at a past moment.",
      "Past Perfect → one past action before another past action.",
      "Past Perfect Continuous → duration before a past moment."
    ],
    tables: [
      {
        section: "affirmative",
        rows: [
          {
            tenseName: "Past Simple",
            tenseSlug: "past-simple",
            auxiliary: "—",
            contraction: "—",
            mainVerbForm: "past form",
            structure: "Subject + past verb + object",
            example: "We visited our grandmother."
          },
          {
            tenseName: "Past Continuous",
            tenseSlug: "past-continuous",
            auxiliary: "was / were",
            contraction: "No common affirmative contraction",
            mainVerbForm: "verb + ing",
            structure: "Subject + was/were + verb-ing + object",
            example: "She was reading a book."
          },
          {
            tenseName: "Past Perfect",
            tenseSlug: "past-perfect",
            auxiliary: "had",
            contraction: "I'd / they'd",
            mainVerbForm: "past participle",
            structure: "Subject + had + past participle + object",
            example: "They had left the house."
          },
          {
            tenseName: "Past Perfect Continuous",
            tenseSlug: "past-perfect-continuous",
            auxiliary: "had been",
            contraction: "I'd been / they'd been",
            mainVerbForm: "verb + ing",
            structure: "Subject + had been + verb-ing + object",
            example: "I had been studying for hours."
          }
        ]
      },
      {
        section: "negative",
        rows: [
          {
            tenseName: "Past Simple",
            tenseSlug: "past-simple",
            auxiliary: "did not",
            contraction: "didn't",
            mainVerbForm: "base verb",
            structure: "Subject + did not + verb + object",
            example: "We did not visit her."
          },
          {
            tenseName: "Past Continuous",
            tenseSlug: "past-continuous",
            auxiliary: "was not / were not",
            contraction: "wasn't / weren't",
            mainVerbForm: "verb + ing",
            structure: "Subject + was/were not + verb-ing + object",
            example: "She was not reading."
          },
          {
            tenseName: "Past Perfect",
            tenseSlug: "past-perfect",
            auxiliary: "had not",
            contraction: "hadn't",
            mainVerbForm: "past participle",
            structure: "Subject + had not + past participle + object",
            example: "They had not left yet."
          },
          {
            tenseName: "Past Perfect Continuous",
            tenseSlug: "past-perfect-continuous",
            auxiliary: "had not been",
            contraction: "hadn't been",
            mainVerbForm: "verb + ing",
            structure: "Subject + had not been + verb-ing + object",
            example: "I had not been studying long."
          }
        ]
      },
      {
        section: "question",
        rows: [
          {
            tenseName: "Past Simple",
            tenseSlug: "past-simple",
            auxiliary: "Did",
            contraction: "—",
            mainVerbForm: "base verb",
            structure: "Did + subject + verb + object?",
            example: "Did you visit your friend?"
          },
          {
            tenseName: "Past Continuous",
            tenseSlug: "past-continuous",
            auxiliary: "Was / Were",
            contraction: "—",
            mainVerbForm: "verb + ing",
            structure: "Was/Were + subject + verb-ing + object?",
            example: "Was she reading a book?"
          },
          {
            tenseName: "Past Perfect",
            tenseSlug: "past-perfect",
            auxiliary: "Had",
            contraction: "—",
            mainVerbForm: "past participle",
            structure: "Had + subject + past participle + object?",
            example: "Had they left before noon?"
          },
          {
            tenseName: "Past Perfect Continuous",
            tenseSlug: "past-perfect-continuous",
            auxiliary: "Had",
            contraction: "—",
            mainVerbForm: "been + verb + ing",
            structure: "Had + subject + been + verb-ing + object?",
            example: "Had you been studying long?"
          }
        ]
      }
    ]
  },
  {
    family: "future",
    title: "Future Tenses",
    quickMemory: [
      "Future Simple → instant decision, prediction, promise, offer.",
      "Future Continuous → action in progress at a future moment.",
      "Future Perfect → completed before a future point.",
      "Future Perfect Continuous → duration up to a future point.",
      "Future Going To → plan, intention, or future evidence from now."
    ],
    tables: [
      {
        section: "affirmative",
        rows: [
          {
            tenseName: "Future Simple",
            tenseSlug: "future-simple",
            auxiliary: "will",
            contraction: "'ll",
            mainVerbForm: "base verb",
            structure: "Subject + will + verb + object",
            example: "I will call you tomorrow."
          },
          {
            tenseName: "Future Continuous",
            tenseSlug: "future-continuous",
            auxiliary: "will be",
            contraction: "'ll be",
            mainVerbForm: "verb + ing",
            structure: "Subject + will be + verb-ing + object",
            example: "She will be traveling next week."
          },
          {
            tenseName: "Future Perfect",
            tenseSlug: "future-perfect",
            auxiliary: "will have",
            contraction: "'ll have",
            mainVerbForm: "past participle",
            structure: "Subject + will have + past participle + object",
            example: "They will have finished the project."
          },
          {
            tenseName: "Future Perfect Continuous",
            tenseSlug: "future-perfect-continuous",
            auxiliary: "will have been",
            contraction: "'ll have been",
            mainVerbForm: "verb + ing",
            structure: "Subject + will have been + verb-ing + object",
            example: "He will have been working for ten hours."
          },
          {
            tenseName: "Future Going To",
            tenseSlug: "future-going-to",
            auxiliary: "am / is / are going to",
            contraction: "be contraction + going to",
            mainVerbForm: "base verb",
            structure: "Subject + be going to + verb + object",
            example: "She is going to study tonight."
          }
        ]
      },
      {
        section: "negative",
        rows: [
          {
            tenseName: "Future Simple",
            tenseSlug: "future-simple",
            auxiliary: "will not",
            contraction: "won't",
            mainVerbForm: "base verb",
            structure: "Subject + will not + verb + object",
            example: "I will not call you."
          },
          {
            tenseName: "Future Continuous",
            tenseSlug: "future-continuous",
            auxiliary: "will not be",
            contraction: "won't be",
            mainVerbForm: "verb + ing",
            structure: "Subject + will not be + verb-ing + object",
            example: "She will not be traveling tomorrow."
          },
          {
            tenseName: "Future Perfect",
            tenseSlug: "future-perfect",
            auxiliary: "will not have",
            contraction: "won't have",
            mainVerbForm: "past participle",
            structure: "Subject + will not have + past participle + object",
            example: "They will not have finished on time."
          },
          {
            tenseName: "Future Perfect Continuous",
            tenseSlug: "future-perfect-continuous",
            auxiliary: "will not have been",
            contraction: "won't have been",
            mainVerbForm: "verb + ing",
            structure: "Subject + will not have been + verb-ing + object",
            example: "He will not have been working long."
          },
          {
            tenseName: "Future Going To",
            tenseSlug: "future-going-to",
            auxiliary: "am not / is not / are not going to",
            contraction: "I'm not going to / isn't going to / aren't going to",
            mainVerbForm: "base verb",
            structure: "Subject + be not going to + verb + object",
            example: "She is not going to travel."
          }
        ]
      },
      {
        section: "question",
        rows: [
          {
            tenseName: "Future Simple",
            tenseSlug: "future-simple",
            auxiliary: "Will",
            contraction: "—",
            mainVerbForm: "base verb",
            structure: "Will + subject + verb + object?",
            example: "Will you call me tomorrow?"
          },
          {
            tenseName: "Future Continuous",
            tenseSlug: "future-continuous",
            auxiliary: "Will",
            contraction: "—",
            mainVerbForm: "be + verb + ing",
            structure: "Will + subject + be + verb-ing + object?",
            example: "Will she be traveling next week?"
          },
          {
            tenseName: "Future Perfect",
            tenseSlug: "future-perfect",
            auxiliary: "Will",
            contraction: "—",
            mainVerbForm: "have + past participle",
            structure: "Will + subject + have + past participle + object?",
            example: "Will they have finished the project?"
          },
          {
            tenseName: "Future Perfect Continuous",
            tenseSlug: "future-perfect-continuous",
            auxiliary: "Will",
            contraction: "—",
            mainVerbForm: "have been + verb + ing",
            structure: "Will + subject + have been + verb-ing + object?",
            example: "Will he have been working for hours?"
          },
          {
            tenseName: "Future Going To",
            tenseSlug: "future-going-to",
            auxiliary: "Am / Is / Are",
            contraction: "—",
            mainVerbForm: "going to + base verb",
            structure: "Am/Is/Are + subject + going to + verb + object?",
            example: "Are you going to study tonight?"
          }
        ]
      }
    ]
  }
];
