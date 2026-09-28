import { beforeEach, describe, expect, it } from "vitest";
import { recentlyVisitedStorageKey, useRecentlyVisitedStore } from "./useRecentlyVisitedStore";

describe("useRecentlyVisitedStore rehydration", () => {
  beforeEach(() => {
    window.localStorage.clear();
    useRecentlyVisitedStore.setState({ entries: [] });
  });

  it("drops a corrupted stored value instead of exposing it", async () => {
    window.localStorage.setItem(
      recentlyVisitedStorageKey,
      JSON.stringify({ state: { entries: "oops" }, version: 0 })
    );

    await useRecentlyVisitedStore.persist.rehydrate();

    expect(useRecentlyVisitedStore.getState().entries).toEqual([]);
  });

  it("keeps only well-formed stored entries", async () => {
    const valid = { path: "/irregular-verbs/go", title: "go", kind: "irregular-verb" };
    window.localStorage.setItem(
      recentlyVisitedStorageKey,
      JSON.stringify({
        state: { entries: [valid, null, { path: 1, title: "x", kind: "verb-tense" }, { ...valid, kind: "nope" }] },
        version: 0
      })
    );

    await useRecentlyVisitedStore.persist.rehydrate();

    expect(useRecentlyVisitedStore.getState().entries).toEqual([valid]);
  });
});
