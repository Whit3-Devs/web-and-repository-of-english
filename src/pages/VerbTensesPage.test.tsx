import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { VerbTenseDetailPage } from "./VerbTenseDetailPage";
import { VerbTensesPage } from "./VerbTensesPage";

describe("Verb Tenses pages", () => {
  it("renders imported verb tense content", () => {
    render(
      <MemoryRouter>
        <VerbTensesPage />
      </MemoryRouter>
    );

    expect(screen.getByText("Present Simple")).toBeTruthy();
    expect(screen.getByText("Future Going To")).toBeTruthy();
  });

  it("shows a Full explanation action on verb tense cards", () => {
    render(
      <MemoryRouter>
        <VerbTensesPage />
      </MemoryRouter>
    );

    expect(screen.getAllByText("Full explanation").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Coming soon").length).toBeGreaterThan(0);
  });

  it("renders the placeholder detail route for a verb tense", () => {
    render(
      <MemoryRouter initialEntries={["/verb-tenses/present-simple"]}>
        <Routes>
          <Route path="/verb-tenses/:slug" element={<VerbTenseDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Present Simple")).toBeTruthy();
    expect(screen.getByText("Full explanation coming soon")).toBeTruthy();
  });
});
