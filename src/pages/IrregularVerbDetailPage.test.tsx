import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { IrregularVerbDetailPage } from "./IrregularVerbDetailPage";

function renderDetailPage(slug: string) {
  render(
    <MemoryRouter initialEntries={[`/irregular-verbs/${slug}`]}>
      <Routes>
        <Route path="/irregular-verbs/:slug" element={<IrregularVerbDetailPage />} />
      </Routes>
    </MemoryRouter>
  );
}

describe("Irregular Verb detail page", () => {
  it("renders the forms strip, meaning, and all three examples", () => {
    renderDetailPage("go");

    expect(screen.getByRole("heading", { name: "go" })).toBeTruthy();
    expect(screen.getByText("ir")).toBeTruthy();

    expect(screen.getByText("Base")).toBeTruthy();
    expect(screen.getByText("Base form")).toBeTruthy();
    expect(screen.getAllByText("Past simple").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Past participle").length).toBeGreaterThan(0);
    expect(screen.getAllByText("go").length).toBeGreaterThan(0);
    expect(screen.getAllByText("went").length).toBeGreaterThan(0);
    expect(screen.getAllByText("gone").length).toBeGreaterThan(0);

    expect(screen.getByText(/Let's/)).toBeTruthy();
    expect(screen.getByText(/They/)).toBeTruthy();
    expect(screen.getByText(/She has/)).toBeTruthy();
  });

  it("links to the previous and next verb alphabetically", () => {
    renderDetailPage("go");

    expect(screen.getByRole("link", { name: "← give" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "grind →" })).toBeTruthy();
  });

  it("shows the pattern group with links to sibling verbs", () => {
    renderDetailPage("go");

    expect(screen.getByText(/ABC/)).toBeTruthy();
    expect(screen.getByText("Other verbs with this pattern")).toBeTruthy();
    expect(screen.getByRole("link", { name: "begin" })).toBeTruthy();
  });

  it("shows slash variants spaced out and highlights the variant used", () => {
    renderDetailPage("get");

    expect(screen.getByText("got / gotten")).toBeTruthy();
    expect(screen.getAllByText("got").length).toBeGreaterThan(0);
  });

  it("falls back to a not-found state for an unknown slug", () => {
    renderDetailPage("does-not-exist");

    expect(screen.getByText("Topic not found")).toBeTruthy();
  });
});
