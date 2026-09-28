import { describe, expect, it } from "vitest";
import { highlightVerbForm } from "./highlightVerbForm";

describe("highlightVerbForm", () => {
  it("marks the matching whole word as highlighted", () => {
    const segments = highlightVerbForm("She broke her arm skiing last winter.", "broke");

    expect(segments).toEqual([
      { text: "She ", matched: false },
      { text: "broke", matched: true },
      { text: " her arm skiing last winter.", matched: false }
    ]);
  });

  it("matches case-insensitively", () => {
    const segments = highlightVerbForm("Broke is the correct form here.", "broke");

    expect(segments[0]).toEqual({ text: "Broke", matched: true });
  });

  it("does not match partial words", () => {
    const segments = highlightVerbForm("The broken vase is on the table.", "broke");

    expect(segments.every((segment) => !segment.matched)).toBe(true);
  });

  it("supports slash-separated variants and highlights whichever appears", () => {
    const wereSegments = highlightVerbForm("They were tired after the trip.", "was/were");
    expect(wereSegments.some((segment) => segment.matched && segment.text === "were")).toBe(true);

    const wasSegments = highlightVerbForm("She was late again.", "was/were");
    expect(wasSegments.some((segment) => segment.matched && segment.text === "was")).toBe(true);
  });

  it("highlights the participle variant that appears (got/gotten)", () => {
    const segments = highlightVerbForm("Things have got much better.", "got/gotten");
    expect(segments.filter((segment) => segment.matched)).toEqual([{ text: "got", matched: true }]);
  });

  it("returns the whole sentence unmatched when the form is empty", () => {
    const segments = highlightVerbForm("Just a sentence.", "");
    expect(segments).toEqual([{ text: "Just a sentence.", matched: false }]);
  });
});
