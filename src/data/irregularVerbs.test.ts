import { describe, expect, it } from "vitest";
import { irregularVerbs } from "./irregularVerbs";

const PLACEHOLDER_PATTERN = /practice the forms of/i;
const MAX_WORDS_PER_EXAMPLE = 12;

function formVariants(form: string) {
  return form
    .split(/[/,]/)
    .map((variant) => variant.trim())
    .filter(Boolean);
}

function sentenceHasWholeWord(sentence: string, form: string) {
  return formVariants(form).some((variant) => {
    const escaped = variant.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`\\b${escaped}\\b`, "i").test(sentence);
  });
}

describe("irregularVerbs data integrity", () => {
  it("covers all 174 verbs", () => {
    expect(irregularVerbs.length).toBe(174);
  });

  it("gives every verb a non-empty meaning", () => {
    for (const verb of irregularVerbs) {
      expect(verb.meaning.trim().length, `${verb.id} has an empty meaning`).toBeGreaterThan(0);
    }
  });

  it("does not contain leftover placeholder text", () => {
    for (const verb of irregularVerbs) {
      expect(PLACEHOLDER_PATTERN.test(verb.meaning), `${verb.id} meaning is a placeholder`).toBe(false);
      expect(PLACEHOLDER_PATTERN.test(verb.examples.base), `${verb.id} base example is a placeholder`).toBe(
        false
      );
      expect(PLACEHOLDER_PATTERN.test(verb.examples.past), `${verb.id} past example is a placeholder`).toBe(
        false
      );
      expect(
        PLACEHOLDER_PATTERN.test(verb.examples.participle),
        `${verb.id} participle example is a placeholder`
      ).toBe(false);
    }
  });

  it("uses each verb's exact listed form as a whole word in its matching example", () => {
    for (const verb of irregularVerbs) {
      expect(
        sentenceHasWholeWord(verb.examples.base, verb.infinitive),
        `${verb.id}: base example "${verb.examples.base}" is missing infinitive "${verb.infinitive}"`
      ).toBe(true);
      expect(
        sentenceHasWholeWord(verb.examples.past, verb.pastSimple),
        `${verb.id}: past example "${verb.examples.past}" is missing past simple "${verb.pastSimple}"`
      ).toBe(true);
      expect(
        sentenceHasWholeWord(verb.examples.participle, verb.pastParticiple),
        `${verb.id}: participle example "${verb.examples.participle}" is missing past participle "${verb.pastParticiple}"`
      ).toBe(true);
    }
  });

  it("keeps every example sentence at or under 12 words", () => {
    for (const verb of irregularVerbs) {
      for (const [label, sentence] of Object.entries(verb.examples)) {
        const wordCount = sentence.trim().split(/\s+/).length;
        expect(wordCount, `${verb.id}.${label} has ${wordCount} words: "${sentence}"`).toBeLessThanOrEqual(
          MAX_WORDS_PER_EXAMPLE
        );
      }
    }
  });

  it("never repeats the exact same sentence across two different verbs", () => {
    const seen = new Map<string, string>();

    for (const verb of irregularVerbs) {
      for (const [label, sentence] of Object.entries(verb.examples)) {
        const key = sentence.trim().toLowerCase();
        const owner = seen.get(key);
        expect(owner, `"${sentence}" is duplicated between ${owner} and ${verb.id}.${label}`).toBeUndefined();
        seen.set(key, `${verb.id}.${label}`);
      }
    }
  });

  it("has unique ids and slugs", () => {
    const ids = new Set(irregularVerbs.map((verb) => verb.id));
    const slugs = new Set(irregularVerbs.map((verb) => verb.slug));

    expect(ids.size).toBe(irregularVerbs.length);
    expect(slugs.size).toBe(irregularVerbs.length);
  });
});
