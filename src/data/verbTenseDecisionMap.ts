import type { VerbTenseDecisionMapEntry } from "../shared/types/content";

export const verbTenseDecisionMap: VerbTenseDecisionMapEntry[] = [
  {
    id: "present-simple-decision",
    title: "Use Present Simple for routine, habit, or general truth",
    primaryTenseSlug: "present-simple",
    summary: "Choose it when the action is normal, repeated, scheduled, or generally true.",
    decisionQuestion: "Am I describing routine reality instead of something happening right now?",
    useWhen: [
      "The action is a habit, routine, or schedule.",
      "The sentence states a fact or general truth."
    ],
    timelineCue: "Stable reality around now, not one live moment.",
    keywords: ["routine", "habit", "fact", "general truth", "schedule"],
    categories: ["present"],
    contrasts: [
      {
        label: "Not Present Continuous",
        useInsteadOf: "present-simple",
        reason: "Use Present Simple when the action is normal behavior, not temporary current activity."
      }
    ]
  },
  {
    id: "present-continuous-decision",
    title: "Use Present Continuous for action happening now",
    primaryTenseSlug: "present-continuous",
    summary: "Choose it when the action is in progress now or the situation is temporary.",
    decisionQuestion: "Is the action happening now or around the current period?",
    useWhen: [
      "The action is happening at this moment or around now.",
      "The situation is temporary instead of normal or permanent."
    ],
    timelineCue: "Action in progress around now.",
    keywords: ["action now", "temporary", "in progress", "current period"],
    categories: ["present"],
    contrasts: [
      {
        label: "Not Present Simple",
        useInsteadOf: "present-continuous",
        reason: "Use Present Continuous when the meaning is temporary or in progress."
      }
    ]
  },
  {
    id: "present-perfect-decision",
    title: "Use Present Perfect for a past result connected to now",
    primaryTenseSlug: "present-perfect",
    summary: "Choose it when the past action matters now and the finished time is not the point.",
    decisionQuestion: "Does the past action still matter in the present?",
    useWhen: [
      "You care about result, experience, or present relevance.",
      "You are not naming a finished past time like yesterday."
    ],
    timelineCue: "Past action with a bridge to now.",
    keywords: ["result", "experience", "present relevance", "already", "yet"],
    categories: ["present", "perfect"],
    contrasts: [
      {
        label: "Not Past Simple",
        useInsteadOf: "present-perfect",
        reason: "Use Present Perfect when the time is not a finished past moment."
      }
    ]
  },
  {
    id: "present-perfect-continuous-decision",
    title: "Use Present Perfect Continuous for duration until now",
    primaryTenseSlug: "present-perfect-continuous",
    summary: "Choose it when you want to show how long an activity has been happening up to now.",
    decisionQuestion: "Am I answering how long until now?",
    useWhen: [
      "The action started in the past and continues until now.",
      "Duration or ongoing effort matters more than final result."
    ],
    timelineCue: "Duration line from the past to now.",
    keywords: ["duration", "until now", "for", "since", "ongoing effort"],
    categories: ["present", "perfect"],
    contrasts: [
      {
        label: "Not Present Perfect",
        useInsteadOf: "present-perfect-continuous",
        reason: "Use Present Perfect Continuous when duration matters more than completion."
      }
    ]
  },
  {
    id: "past-simple-decision",
    title: "Use Past Simple for a finished action in the past",
    primaryTenseSlug: "past-simple",
    summary: "Choose it for completed past events, story steps, or actions linked to a finished past time.",
    decisionQuestion: "Is the action complete and clearly in the past?",
    useWhen: [
      "The action started and finished in the past.",
      "You mention a finished past time such as yesterday or last week."
    ],
    timelineCue: "Closed event before now.",
    keywords: ["finished past", "yesterday", "story", "completed event"],
    categories: ["past"],
    contrasts: [
      {
        label: "Not Present Perfect",
        useInsteadOf: "past-simple",
        reason: "Use Past Simple when the action belongs to a finished past time."
      }
    ]
  },
  {
    id: "past-continuous-decision",
    title: "Use Past Continuous for background action in progress in the past",
    primaryTenseSlug: "past-continuous",
    summary: "Choose it when you want an action in progress around a past moment.",
    decisionQuestion: "Was the action already happening at that past moment?",
    useWhen: [
      "You want background action or a scene in progress.",
      "You are combining it with a shorter Past Simple action."
    ],
    timelineCue: "In progress around a past point.",
    keywords: ["background past", "in progress", "while", "when"],
    categories: ["past"],
    contrasts: [
      {
        label: "Not Past Simple",
        useInsteadOf: "past-continuous",
        reason: "Use Past Continuous for the background scene, not the finished event."
      }
    ]
  },
  {
    id: "past-perfect-decision",
    title: "Use Past Perfect for the earlier of two past moments",
    primaryTenseSlug: "past-perfect",
    summary: "Choose it when one past action happened before another past action or time.",
    decisionQuestion: "Do I need to show which past action happened first?",
    useWhen: [
      "You compare one earlier past action with a later past action.",
      "The sequence matters more than the simple fact that both are past."
    ],
    timelineCue: "Past before the past.",
    keywords: ["earlier past", "before another past action", "by the time"],
    categories: ["past", "perfect"],
    contrasts: [
      {
        label: "Not Past Simple",
        useInsteadOf: "past-perfect",
        reason: "Use Past Perfect when the order between two past events must be clear."
      }
    ]
  },
  {
    id: "past-perfect-continuous-decision",
    title: "Use Past Perfect Continuous for duration before a past point",
    primaryTenseSlug: "past-perfect-continuous",
    summary: "Choose it when the important idea is how long something had been happening before another past moment.",
    decisionQuestion: "Am I showing duration before a later past event?",
    useWhen: [
      "You want a duration line before a past moment.",
      "Ongoing activity before a past result matters more than completion."
    ],
    timelineCue: "Duration before a past point.",
    keywords: ["duration before past", "had been", "before", "ongoing past effort"],
    categories: ["past", "perfect"],
    contrasts: [
      {
        label: "Not Past Perfect",
        useInsteadOf: "past-perfect-continuous",
        reason: "Use Past Perfect Continuous when the focus is duration, not just earlier completion."
      }
    ]
  },
  {
    id: "future-simple-decision",
    title: "Use Future Simple for an instant decision, promise, or prediction",
    primaryTenseSlug: "future-simple",
    summary: "Choose it when the future idea is decided in the moment or expressed as a promise, offer, or prediction.",
    decisionQuestion: "Am I deciding now or making a neutral future prediction?",
    useWhen: [
      "The decision happens at the moment of speaking.",
      "The sentence is a promise, offer, or spontaneous prediction."
    ],
    timelineCue: "Future seen from the current moment.",
    keywords: ["instant decision", "promise", "offer", "prediction", "will"],
    categories: ["future"],
    contrasts: [
      {
        label: "Not Future Going To",
        useInsteadOf: "future-simple",
        reason: "Use Future Simple when the plan did not already exist before speaking."
      }
    ]
  },
  {
    id: "future-going-to-decision",
    title: "Use Future Going To for an existing plan or visible evidence",
    primaryTenseSlug: "future-going-to",
    summary: "Choose it when the future comes from a present plan, intention, or visible evidence.",
    decisionQuestion: "Did the plan already exist before I said it, or can I see evidence now?",
    useWhen: [
      "You already have the plan or intention in mind.",
      "The prediction comes from something visible in the present."
    ],
    timelineCue: "Present plan or evidence leading into the future.",
    keywords: ["plan", "intention", "evidence", "going to", "prediction from evidence"],
    categories: ["future"],
    contrasts: [
      {
        label: "Not Future Simple",
        useInsteadOf: "future-going-to",
        reason: "Use Future Going To when the future idea is already present before the moment of speaking."
      }
    ]
  },
  {
    id: "future-continuous-decision",
    title: "Use Future Continuous for action in progress at a future moment",
    primaryTenseSlug: "future-continuous",
    summary: "Choose it when you want to picture an activity already happening at a chosen future time.",
    decisionQuestion: "Do I need the future scene in progress instead of a simple event?",
    useWhen: [
      "The action will be happening around a future point.",
      "You want future background instead of simple future completion."
    ],
    timelineCue: "In progress at a future point.",
    keywords: ["future in progress", "background future", "this time tomorrow"],
    categories: ["future"],
    contrasts: [
      {
        label: "Not Future Simple",
        useInsteadOf: "future-continuous",
        reason: "Use Future Continuous when the important idea is the scene in progress."
      }
    ]
  },
  {
    id: "future-perfect-decision",
    title: "Use Future Perfect for completion before a future point",
    primaryTenseSlug: "future-perfect",
    summary: "Choose it when something will already be finished by a future deadline or moment.",
    decisionQuestion: "Do I need to show completion before a future point?",
    useWhen: [
      "You are measuring completion by a future deadline.",
      "The sentence emphasizes what will already be done by then."
    ],
    timelineCue: "Finished before a future point.",
    keywords: ["future completion", "deadline", "by", "finished by then"],
    categories: ["future", "perfect"],
    contrasts: [
      {
        label: "Not Future Simple",
        useInsteadOf: "future-perfect",
        reason: "Use Future Perfect when completion before a deadline is the real meaning."
      }
    ]
  },
  {
    id: "future-perfect-continuous-decision",
    title: "Use Future Perfect Continuous for duration up to a future point",
    primaryTenseSlug: "future-perfect-continuous",
    summary: "Choose it when you want to show how long an activity will have been happening by a future moment.",
    decisionQuestion: "Am I answering how long by that future time?",
    useWhen: [
      "The key idea is future duration, not only future completion.",
      "You want ongoing effort measured by a future milestone."
    ],
    timelineCue: "Duration that keeps running up to a future point.",
    keywords: ["future duration", "how long by then", "for", "by next year"],
    categories: ["future", "perfect"],
    contrasts: [
      {
        label: "Not Future Perfect",
        useInsteadOf: "future-perfect-continuous",
        reason: "Use Future Perfect Continuous when duration matters more than end result."
      }
    ]
  }
];
