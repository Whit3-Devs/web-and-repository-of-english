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

function isRecentlyVisitedEntry(value: unknown): value is RecentlyVisitedEntry {
  if (!value || typeof value !== "object") {
    return false;
  }

  const entry = value as Record<string, unknown>;

  return (
    typeof entry.path === "string" &&
    entry.path.startsWith("/") &&
    typeof entry.title === "string" &&
    typeof entry.kind === "string" &&
    Object.prototype.hasOwnProperty.call(recentlyVisitedKindLabels, entry.kind)
  );
}

// Stored data is untrusted (older shapes, manual edits): keep only valid
// entries so a bad value can never crash the Home page on every load.
function sanitizeEntries(value: unknown): RecentlyVisitedEntry[] {
  return Array.isArray(value) ? value.filter(isRecentlyVisitedEntry).slice(0, maxEntries) : [];
}

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
      storage: createJSONStorage(() => safeStorage),
      partialize: (state) => ({ entries: state.entries }),
      merge: (persisted, current) => ({
        ...current,
        entries: sanitizeEntries((persisted as { entries?: unknown } | undefined)?.entries)
      })
    }
  )
);
