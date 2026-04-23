import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import { useCheatsheetStore } from "../store/useCheatsheetStore";
import { VerbTenseDetailPage } from "./VerbTenseDetailPage";
import { VerbTensesPage } from "./VerbTensesPage";

describe("Verb Tenses pages", () => {
  beforeEach(() => {
    useCheatsheetStore.setState({
      searchTerm: "",
      activeFilters: {}
    });
  });

  it("renders Simplified as the default tab with grouped reference tables", () => {
    render(
      <MemoryRouter>
        <VerbTensesPage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("tab", { name: /simplified/i }).getAttribute("aria-selected")
    ).toBe("true");
    expect(screen.getByText("Present Tenses")).toBeTruthy();
    expect(screen.getByText("Past Tenses")).toBeTruthy();
    expect(screen.getByText("Future Tenses")).toBeTruthy();
    expect(
      screen.getAllByRole("link", { name: "Present Simple" })[0]?.getAttribute("href")
    ).toBe("/verb-tenses/present-simple");
  });

  it("switches to Full and shows available present, past, and future explanations", () => {
    render(
      <MemoryRouter>
        <VerbTensesPage />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("tab", { name: /full/i }));

    expect(
      screen.getByText("Use it for routines, habits, facts, and things that are generally true.")
    ).toBeTruthy();
    expect(screen.getByText("Use it for finished actions in the past.")).toBeTruthy();
    expect(
      screen.getByText("Use it for decisions made in the moment, predictions, offers, and promises.")
    ).toBeTruthy();
    expect(screen.getAllByText("Full explanation").length).toBeGreaterThan(0);
    expect(screen.queryByText("Coming soon")).toBeNull();
    expect(screen.getAllByText("Full explanation")[0]?.textContent).toBe("Full explanation");
  });

  it("shares search and category filters across the two tabs", () => {
    render(
      <MemoryRouter>
        <VerbTensesPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText("Search"), {
      target: { value: "prediction" }
    });
    fireEvent.change(screen.getByLabelText("Category"), {
      target: { value: "future" }
    });

    expect(screen.getByText("Future Tenses")).toBeTruthy();
    expect(screen.queryByText("Present Tenses")).toBeNull();
    expect(screen.getAllByText("Future Simple").length).toBeGreaterThan(0);

    fireEvent.click(screen.getByRole("tab", { name: /full/i }));

    expect(screen.getByText("Future Simple")).toBeTruthy();
    expect(screen.queryByText("Present Simple")).toBeNull();
  });

  it("shows the shared empty state when filters remove all results", () => {
    render(
      <MemoryRouter>
        <VerbTensesPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText("Search"), {
      target: { value: "zzzz impossible query" }
    });

    expect(screen.getByText("No verb tenses found with those filters.")).toBeTruthy();
  });

  it("renders full explanation content for present simple", () => {
    render(
      <MemoryRouter initialEntries={["/verb-tenses/present-simple"]}>
        <Routes>
          <Route path="/verb-tenses/:slug" element={<VerbTenseDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "Present Simple" })).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("Overview / main use")).toBeTruthy();
    expect(screen.getByText("Decision rules")).toBeTruthy();
    expect(screen.getByText("Why this tense")).toBeTruthy();
    expect(screen.getByText("Why not another")).toBeTruthy();
    expect(screen.getByText("Common confusion examples")).toBeTruthy();
    expect(screen.getByText("Quick practice prompts")).toBeTruthy();
    expect(screen.getByText("Compare with...")).toBeTruthy();
  });

  it("renders full explanation content for the other present tenses", () => {
    const entries = [
      "/verb-tenses/present-continuous",
      "/verb-tenses/present-perfect",
      "/verb-tenses/present-perfect-continuous"
    ];

    for (const entry of entries) {
      cleanup();
      render(
        <MemoryRouter initialEntries={[entry]}>
          <Routes>
            <Route path="/verb-tenses/:slug" element={<VerbTenseDetailPage />} />
          </Routes>
        </MemoryRouter>
      );

      expect(screen.getByText("Available now")).toBeTruthy();
      expect(screen.getByText("Decision rules")).toBeTruthy();
      expect(screen.getByText("Common confusion examples")).toBeTruthy();
      expect(screen.getByText("Quick practice prompts")).toBeTruthy();
      expect(screen.getByText("Practice ideas")).toBeTruthy();
      expect(screen.getByText("Related topics")).toBeTruthy();
    }
  });

  it("renders full explanation content for the past tenses", () => {
    const entries = [
      "/verb-tenses/past-simple",
      "/verb-tenses/past-continuous",
      "/verb-tenses/past-perfect",
      "/verb-tenses/past-perfect-continuous"
    ];

    for (const entry of entries) {
      cleanup();
      render(
        <MemoryRouter initialEntries={[entry]}>
          <Routes>
            <Route path="/verb-tenses/:slug" element={<VerbTenseDetailPage />} />
          </Routes>
        </MemoryRouter>
      );

      expect(screen.getByText("Available now")).toBeTruthy();
      expect(screen.getByText("Decision rules")).toBeTruthy();
      expect(screen.getByText("Why this tense")).toBeTruthy();
      expect(screen.getByText("Why not another")).toBeTruthy();
      expect(screen.getByText("Common confusion examples")).toBeTruthy();
      expect(screen.getByText("Quick practice prompts")).toBeTruthy();
      expect(screen.getByText("Practice ideas")).toBeTruthy();
      expect(screen.getByText("Related topics")).toBeTruthy();
    }
  });

  it("renders full explanation content for the future tenses", () => {
    const entries = [
      "/verb-tenses/future-simple",
      "/verb-tenses/future-continuous",
      "/verb-tenses/future-perfect",
      "/verb-tenses/future-perfect-continuous",
      "/verb-tenses/future-going-to"
    ];

    for (const entry of entries) {
      cleanup();
      render(
        <MemoryRouter initialEntries={[entry]}>
          <Routes>
            <Route path="/verb-tenses/:slug" element={<VerbTenseDetailPage />} />
          </Routes>
        </MemoryRouter>
      );

      expect(screen.getByText("Available now")).toBeTruthy();
      expect(screen.getByText("Decision rules")).toBeTruthy();
      expect(screen.getByText("Why this tense")).toBeTruthy();
      expect(screen.getByText("Why not another")).toBeTruthy();
      expect(screen.getByText("Common confusion examples")).toBeTruthy();
      expect(screen.getByText("Quick practice prompts")).toBeTruthy();
      expect(screen.getByText("Practice ideas")).toBeTruthy();
      expect(screen.getByText("Related topics")).toBeTruthy();
    }
  });

  it("no longer shows coming soon for a valid future tense", () => {
    render(
      <MemoryRouter initialEntries={["/verb-tenses/future-simple"]}>
        <Routes>
          <Route path="/verb-tenses/:slug" element={<VerbTenseDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "Future Simple" })).toBeTruthy();
    expect(screen.queryByText("Full explanation coming soon")).toBeNull();
    expect(screen.getByText("Available now")).toBeTruthy();
  });

  it("renders topic not found for an invalid slug", () => {
    render(
      <MemoryRouter initialEntries={["/verb-tenses/not-real"]}>
        <Routes>
          <Route path="/verb-tenses/:slug" element={<VerbTenseDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "Topic not found" })).toBeTruthy();
  });
});
