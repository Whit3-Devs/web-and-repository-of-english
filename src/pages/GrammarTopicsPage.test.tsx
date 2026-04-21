import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { GrammarTopicDetailPage } from "./GrammarTopicDetailPage";
import { GrammarTopicsPage } from "./GrammarTopicsPage";
import { HomePage } from "./HomePage";
import { AppLayout } from "../components/AppLayout";

describe("Grammar topic pages", () => {
  it("renders Modal Verbs cards", () => {
    render(
      <MemoryRouter>
        <GrammarTopicsPage section="modal-verbs" />
      </MemoryRouter>
    );

    expect(screen.getByText("Ability and Permission")).toBeTruthy();
    expect(screen.getByText("Would and Hypotheticals")).toBeTruthy();
  });

  it("renders Core Grammar cards", () => {
    render(
      <MemoryRouter>
        <GrammarTopicsPage section="core-grammar" />
      </MemoryRouter>
    );

    expect(screen.getByText("WH Questions")).toBeTruthy();
    expect(screen.getByText("Common Prepositions")).toBeTruthy();
  });

  it("renders placeholder detail routes", () => {
    render(
      <MemoryRouter initialEntries={["/modal-verbs/polite-requests"]}>
        <Routes>
          <Route
            path="/modal-verbs/:slug"
            element={
              <GrammarTopicDetailPage
                section="modal-verbs"
                backPath="/modal-verbs"
                backLabel="Modal Verbs"
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Polite Requests")).toBeTruthy();
    expect(screen.getByText("Full explanation coming soon")).toBeTruthy();
  });

  it("shows new sections on the home page", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByText("Modal Verbs")).toBeTruthy();
    expect(screen.getByText("Core Grammar")).toBeTruthy();
  });

  it("shows new sections in navigation", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<p>Home content</p>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Modal Verbs")).toBeTruthy();
    expect(screen.getByText("Core Grammar")).toBeTruthy();
  });
});
