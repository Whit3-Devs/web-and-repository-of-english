import type { CefrLevel } from "../types/content";

export const cefrLevelOrder: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1"];

export const cefrLevelLabels: Record<CefrLevel, string> = {
  A1: "A1 · Beginner",
  A2: "A2 · Elementary",
  B1: "B1 · Intermediate",
  B2: "B2 · Upper-Intermediate",
  C1: "C1 · Advanced"
};

type CefrBadgeVariant = "success" | "info" | "primary" | "warning" | "danger";

const cefrLevelBadgeVariant: Record<CefrLevel, CefrBadgeVariant> = {
  A1: "success",
  A2: "info",
  B1: "primary",
  B2: "warning",
  C1: "danger"
};

export function getCefrLevelBadgeVariant(level: CefrLevel): CefrBadgeVariant {
  return cefrLevelBadgeVariant[level];
}

const cefrLevelChipClasses: Record<CefrLevel, string> = {
  A1: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
  A2: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300",
  B1: "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
  B2: "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  C1: "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300"
};

export function getCefrLevelChipClasses(level: CefrLevel): string {
  return cefrLevelChipClasses[level];
}
