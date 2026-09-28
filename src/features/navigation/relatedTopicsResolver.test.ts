import { describe, expect, it } from "vitest";
import { resolveRelatedTopic } from "./relatedTopicsResolver";

describe("resolveRelatedTopic", () => {
  it("resolves an exact match to a grammar topic title", () => {
    const result = resolveRelatedTopic("Ability and Permission");

    expect(result).toEqual({
      label: "Ability and Permission",
      path: "/modal-verbs/ability-and-permission"
    });
  });

  it("resolves an exact match to a verb tense name", () => {
    const result = resolveRelatedTopic("Present Perfect");

    expect(result).toEqual({
      label: "Present Perfect",
      path: "/verb-tenses/present-perfect"
    });
  });

  it("falls back to a case-insensitive match", () => {
    const result = resolveRelatedTopic("modal verbs overview");

    expect(result).toEqual({
      label: "modal verbs overview",
      path: "/modal-verbs/modal-verbs-overview"
    });
  });

  it("returns a null path when nothing matches, without throwing", () => {
    const result = resolveRelatedTopic("Verb Tenses");

    expect(result).toEqual({
      label: "Verb Tenses",
      path: null
    });
  });
});
