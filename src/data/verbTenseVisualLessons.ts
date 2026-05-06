import type { VerbTenseVisualLesson } from "../shared/types/content";

export const verbTenseVisualLessons: VerbTenseVisualLesson[] = [
  {
    id: "past-simple-vs-present-perfect",
    title: "Past Simple vs Present Perfect",
    description:
      "See why Past Simple belongs to a finished past time, while Present Perfect connects a past experience or result to now.",
    href: "/hyperframes/verb-tenses/past-simple-vs-present-perfect.html",
    relatedTenseSlugs: ["past-simple", "present-perfect"]
  }
];

export function findVerbTenseVisualLessonBySlug(slug: string) {
  return verbTenseVisualLessons.find((lesson) =>
    lesson.relatedTenseSlugs.includes(slug)
  );
}
