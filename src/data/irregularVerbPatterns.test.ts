import { describe, expect, it } from "vitest";
import { findIrregularVerbBySlug } from "./irregularVerbs";
import { getIrregularVerbPatternFamily } from "./irregularVerbPatterns";

function familyOf(slug: string) {
  const verb = findIrregularVerbBySlug(slug);
  if (!verb) throw new Error(`Unknown verb ${slug}`);
  return getIrregularVerbPatternFamily(verb);
}

describe("getIrregularVerbPatternFamily", () => {
  it("classifies single-form verbs as before", () => {
    expect(familyOf("cut")).toBe("aaa");
    expect(familyOf("build")).toBe("abb");
    expect(familyOf("come")).toBe("aba");
    expect(familyOf("begin")).toBe("abc");
  });

  it("uses the first (most common) variant when forms list alternatives", () => {
    expect(familyOf("get")).toBe("abb"); // got / got/gotten
    expect(familyOf("burn")).toBe("abb"); // burned/burnt / burned/burnt
    expect(familyOf("dive")).toBe("abb"); // dived/dove / dived
    expect(familyOf("fit")).toBe("aaa"); // fit/fitted / fit/fitted
  });

  it("keeps split pasts and infinitive = past only verbs in the mixed family", () => {
    expect(familyOf("be")).toBe("mixed");
    expect(familyOf("beat")).toBe("mixed");
  });
});
