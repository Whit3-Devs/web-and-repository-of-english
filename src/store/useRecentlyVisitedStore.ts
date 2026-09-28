import { create } from "zustand";
import { createJSONStorage, persist, type StateStorage } from "zustand/middleware";

export type RecentlyVisitedKind = "verb-tense" | "grammar-topic" | "irregular-verb";

export type RecentlyVisitedEntry = {
  path: string;
  title: string;
  kind: RecentlyVisitedKind;
};

export const recentlyVisitedKindLabels: Record<RecentlyVisitedKind, string> = {
  "verb-tense": "Verb tense",
  "grammar-topic": "Grammar topic",
  "irregular-verb": "Irregular verb"
};

export const recentlyVisitedStorageKey = "english-cheatsheet-recently-visited";
const maxEntries = 4;

type RecentlyVisitedState = {
  entries: RecentlyVisitedEntry[];
  recordVisit: (entry: RecentlyVisitedEntry) => void;
};

// Wrap storage access so a blocked or full localStorage (private browsing,
// disabled storage, quota errors) never throws and breaks navigation.
const safeStorage: StateStorage = {
  getItem: (name) => {
    if (typeof window === "undefined") {
      return null;
    }

    try {
      return window.localStorage.getItem(name);
    } catch {
      return null;
    }
  },
  setItem: (name, value) => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      window.localStorage.setItem(name, value);
    } catch {
      // Ignore storage failures; recently-visited is a nice-to-have, not critical state.
    }
  },
  removeItem: (name) => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      window.localStorage.removeItem(name);
    } catch {
      // Ignore storage failures.
    }
  }
};

export const useRecentlyVisitedStore = create<RecentlyVisitedState>()(
  persist(
    (set, get) => ({
      entries: [],
      recordVisit: (entry) => {
        const withoutDuplicate = get().entries.filter(
          (existing) => existing.path !== entry.path
        );
        set({ entries: [entry, ...withoutDuplicate].slice(0, maxEntries) });
      }
    }),
    {
      name: recentlyVisitedStorageKey,
      storage: createJSONStorage(() => safeStorage)
    }
  )
);
