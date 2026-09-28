import { describe, expect, it } from "vitest";
import { formatVerbForm, splitVerbFormVariants } from "./verbFormVariants";

describe("verbFormVariants", () => {
  it("splits slash-separated variants and trims them", () => {
    expect(splitVerbFormVariants("got/gotten")).toEqual(["got", "gotten"]);
    expect(splitVerbFormVariants(" burned / burnt ")).toEqual(["burned", "burnt"]);
    expect(splitVerbFormVariants("gone")).toEqual(["gone"]);
  });

  it("formats variants with spaced slashes for display", () => {
    expect(formatVerbForm("got/gotten")).toBe("got / gotten");
    expect(formatVerbForm("gone")).toBe("gone");
  });
});
