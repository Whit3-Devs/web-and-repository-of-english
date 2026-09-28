import { describe, expect, it } from "vitest";
import { visibleGrammarTopicSections } from "../../data/grammarTopics";
import { irregularVerbs } from "../../data/irregularVerbs";
import { verbTenses } from "../../data/verbTenses";
import {
  buildNavigationModel,
  filterNavigation,
  findActiveGroupId,
  groupItemCount
} from "./navigationModel";

describe("buildNavigationModel", () => {
  it("orders groups as Verb Tenses, then each visible grammar section", () => {
    const model = buildNavigationModel();

    expect(model.groups.map((group) => group.id)).toEqual([
      "verb-tenses",
      ...visibleGrammarTopicSections
    ]);
  });

  it("counts items per group correctly", () => {
    const model = buildNavigationModel();
    const verbTensesGroup = model.groups.find((group) => group.id === "verb-tenses");

    expect(verbTensesGroup).toBeDefined();
    expect(groupItemCount(verbTensesGroup!)).toBe(verbTenses.length);

    for (const section of visibleGrammarTopicSections) {
      const group = model.groups.find((candidate) => candidate.id === section);
      expect(group).toBeDefined();
      expect(group!.items.length).toBeGreaterThan(0);
    }
  });

  it("groups verb tenses under Present, Past, and Future headings", () => {
    const model = buildNavigationModel();
    const verbTensesGroup = model.groups.find((group) => group.id === "verb-tenses")!;

    expect(verbTensesGroup.subgroups.map((subgroup) => subgroup.label)).toEqual([
      "Present",
      "Past",
      "Future"
    ]);

    const futureSubgroup = verbTensesGroup.subgroups.find(
      (subgroup) => subgroup.label === "Future"
    )!;
    expect(futureSubgroup.items.map((item) => item.label)).toContain("Future Going To");

    const presentSubgroup = verbTensesGroup.subgroups.find(
      (subgroup) => subgroup.label === "Present"
    )!;
    expect(presentSubgroup.items.map((item) => item.label)).toContain("Present Perfect Continuous");
  });

  it("derives irregular verb letters that actually exist in the data, each pointing at that letter's first verb", () => {
    const model = buildNavigationModel();

    expect(model.irregularVerbs.total).toBe(irregularVerbs.length);
    expect(model.irregularVerbs.letters.length).toBeGreaterThan(0);

    const letters = model.irregularVerbs.letters.map((entry) => entry.letter);
    expect(letters).toEqual([...letters].sort());

    const bEntry = model.irregularVerbs.letters.find((entry) => entry.letter === "B");
    const firstBVerb = irregularVerbs.find((verb) => verb.infinitive.toLowerCase().startsWith("b"));
    expect(bEntry?.to).toBe(firstBVerb?.fullExplanationPath);
  });
});

describe("filterNavigation", () => {
  it("returns every group unfiltered when the query is empty", () => {
    const model = buildNavigationModel();
    const result = filterNavigation(model.groups, "");

    expect(result.isFiltering).toBe(false);
    expect(result.groups.length).toBe(model.groups.length);
  });

  it("is accent-insensitive", () => {
    const model = buildNavigationModel();
    const result = filterNavigation(model.groups, "prónouns");

    const match = result.groups
      .flatMap((group) => group.items)
      .find((item) => item.label.startsWith("Pronouns"));

    expect(match).toBeDefined();
  });

  it("filters verb tenses down to only the matching family when searching 'perf'", () => {
    const model = buildNavigationModel();
    const result = filterNavigation(model.groups, "future perf");

    const verbTensesMatch = result.groups.find((group) => group.id === "verb-tenses");
    expect(verbTensesMatch).toBeDefined();
    expect(verbTensesMatch!.subgroups).toEqual([]);
    expect(verbTensesMatch!.items.map((item) => item.label).sort()).toEqual(
      ["Future Perfect", "Future Perfect Continuous"].sort()
    );
  });

  it("hides groups with no matches and reports zero total matches", () => {
    const model = buildNavigationModel();
    const result = filterNavigation(model.groups, "zzzzzz-not-a-real-topic");

    expect(result.groups).toEqual([]);
    expect(result.totalMatchCount).toBe(0);
  });
});

describe("findActiveGroupId", () => {
  it("resolves the verb tenses group for verb tense routes", () => {
    const model = buildNavigationModel();
    expect(findActiveGroupId(model, "/verb-tenses/present-simple")).toBe("verb-tenses");
  });

  it("resolves a grammar topic section group for its routes", () => {
    const model = buildNavigationModel();
    expect(findActiveGroupId(model, "/modal-verbs/polite-requests")).toBe("modal-verbs");
  });

  it("resolves irregular verbs for its routes", () => {
    const model = buildNavigationModel();
    expect(findActiveGroupId(model, "/irregular-verbs/go")).toBe("irregular-verbs");
  });

  it("resolves nothing for the home route", () => {
    const model = buildNavigationModel();
    expect(findActiveGroupId(model, "/")).toBeUndefined();
  });
});
