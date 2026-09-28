import { describe, expect, it } from "vitest";
import { grammarTopics } from "./grammarTopics";
import { verbTenses } from "./verbTenses";
import { cefrLevelOrder } from "../shared/utils/cefrLevel";

describe("CEFR level coverage", () => {
  it("gives every verb tense a valid CEFR level", () => {
    for (const tense of verbTenses) {
      expect(cefrLevelOrder, `${tense.id} has an invalid level`).toContain(tense.level);
    }
  });

  it("gives every grammar topic a valid CEFR level", () => {
    for (const topic of grammarTopics) {
      expect(cefrLevelOrder, `${topic.id} has an invalid level`).toContain(topic.level);
    }
  });
});
