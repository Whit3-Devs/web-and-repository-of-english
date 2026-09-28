import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import { App } from "../App";
import { useRecentlyVisitedStore } from "../store/useRecentlyVisitedStore";
import { HomePage } from "./HomePage";
import { IrregularVerbDetailPage } from "./IrregularVerbDetailPage";

describe("Home page topic directory", () => {
  beforeEach(() => {
    useRecentlyVisitedStore.setState({ entries: [] });
  });

  it("renders a hero with a single h1 and links to the first A1 topic and irregular verbs", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getAllByRole("heading", { level: 1 }).length).toBe(1);
    expect(screen.getByRole("link", { name: /start with the basics/i }).getAttribute("href")).toBe(
      "/verb-tenses/present-simple"
    );
    expect(screen.getByRole("link", { name: "Browse irregular verbs" }).getAttribute("href")).toBe(
      "/irregular-verbs"
    );
  });

  it("renders the learning path grouped by CEFR level with section metadata", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const learningPath = screen.getByRole("heading", { name: "Learning path" }).closest("section");
    expect(learningPath).toBeTruthy();

    const a1Link = within(learningPath as HTMLElement).getByRole("link", {
      name: /present simple/i
    });
    expect(a1Link.getAttribute("href")).toBe("/verb-tenses/present-simple");

    const c1Badge = within(learningPath as HTMLElement).getByText("C1");
    expect(c1Badge).toBeTruthy();
  });

  it("renders section overview cards without full topic lists", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const sectionsPanel = screen.getByRole("heading", { name: "Sections" }).closest("section");
    expect(sectionsPanel).toBeTruthy();
    const sections = within(sectionsPanel as HTMLElement);

    expect(sections.getByRole("heading", { name: "Verb Tenses" })).toBeTruthy();
    expect(sections.getByRole("heading", { name: "Modal Verbs" })).toBeTruthy();
    expect(sections.getByRole("heading", { name: "Sentence Building" })).toBeTruthy();
    expect(sections.getByRole("heading", { name: "Grammar Foundations" })).toBeTruthy();
    expect(sections.getByRole("heading", { name: "Advanced Structures" })).toBeTruthy();
    expect(sections.getByRole("heading", { name: "Communication Patterns" })).toBeTruthy();
    expect(sections.getByRole("heading", { name: "Irregular Verbs" })).toBeTruthy();

    expect(sections.getAllByRole("link", { name: "View all →" }).length).toBeGreaterThan(0);
    // Section overview cards no longer list every individual topic.
    expect(sections.queryByRole("link", { name: "Modal Verbs Overview" })).toBeNull();
  });

  it("hides the continue studying section when there is no visit history", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.queryByText("Continue studying")).toBeNull();
  });

  it("shows the continue studying section from recorded visits", () => {
    useRecentlyVisitedStore.setState({
      entries: [
        { path: "/verb-tenses/present-perfect", title: "Present Perfect", kind: "verb-tense" }
      ]
    });

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const continueStudying = screen
      .getByRole("heading", { name: "Continue studying" })
      .closest("section");
    expect(continueStudying).toBeTruthy();

    const scoped = within(continueStudying as HTMLElement);
    const link = scoped.getByRole("link", { name: /present perfect/i });
    expect(link.getAttribute("href")).toBe("/verb-tenses/present-perfect");
    expect(scoped.getByText("Verb tense")).toBeTruthy();
  });

  it("records a visited verb tense detail page from AppLayout's route effect", async () => {
    render(
      <MemoryRouter initialEntries={["/verb-tenses/present-perfect"]}>
        <App />
      </MemoryRouter>
    );

    expect(await screen.findByRole("heading", { name: "Present Perfect" })).toBeTruthy();
    expect(useRecentlyVisitedStore.getState().entries[0]).toEqual({
      path: "/verb-tenses/present-perfect",
      title: "Present Perfect",
      kind: "verb-tense"
    });
  });

  it("does not record Home or an invalid detail slug as a visit", async () => {
    render(
      <MemoryRouter initialEntries={["/verb-tenses/not-real"]}>
        <App />
      </MemoryRouter>
    );

    await screen.findByRole("heading", { name: "Topic not found" });
    expect(useRecentlyVisitedStore.getState().entries).toEqual([]);
  });

  it("supports direct irregular verb detail routing", () => {
    render(
      <MemoryRouter initialEntries={["/irregular-verbs/go"]}>
        <Routes>
          <Route path="/irregular-verbs/:slug" element={<IrregularVerbDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "go" })).toBeTruthy();
    expect(screen.getByText("ir")).toBeTruthy();
    expect(screen.getByRole("link", { name: "grind →" })).toBeTruthy();
  });

  it("updates the browser tab title based on the current route", () => {
    render(
      <MemoryRouter initialEntries={["/sentence-building/embedded-wh-clauses"]}>
        <App />
      </MemoryRouter>
    );

    expect(document.title).toBe("Embedded WH Clauses | English Cheatsheet");
  });

  it("uses the grammar foundations topic title in the browser tab", () => {
    render(
      <MemoryRouter initialEntries={["/grammar-foundations/pronouns-possessives-and-object-forms"]}>
        <App />
      </MemoryRouter>
    );

    expect(document.title).toBe(
      "Pronouns, Possessives, Object Forms, and Reflexives | English Cheatsheet"
    );
  });

  it("uses key structure differences in the browser tab", () => {
    render(
      <MemoryRouter initialEntries={["/sentence-building/key-structure-differences"]}>
        <App />
      </MemoryRouter>
    );

    expect(document.title).toBe("Key Structure Differences | English Cheatsheet");
  });

  it("uses question builder cheat sheet in the browser tab", () => {
    render(
      <MemoryRouter initialEntries={["/sentence-building/question-builder-cheat-sheet"]}>
        <App />
      </MemoryRouter>
    );

    expect(document.title).toBe("Question Builder Cheat Sheet | English Cheatsheet");
  });

  it("uses conditionals overview in the browser tab", () => {
    render(
      <MemoryRouter initialEntries={["/advanced-structures/conditionals-overview"]}>
        <App />
      </MemoryRouter>
    );

    expect(document.title).toBe("Conditionals Overview | English Cheatsheet");
  });

  it("redirects the old core grammar list route to sentence building", async () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar"]}>
        <App />
      </MemoryRouter>
    );

    expect(await screen.findByRole("heading", { name: "Sentence Building" })).toBeTruthy();
  });

  it("redirects old core grammar topic routes to their new section", async () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/question-builder-cheat-sheet"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      await screen.findByRole("heading", { name: "Question Builder Cheat Sheet" })
    ).toBeTruthy();
  });

  it("uses ability and permission in the browser tab", () => {
    render(
      <MemoryRouter initialEntries={["/modal-verbs/ability-and-permission"]}>
        <App />
      </MemoryRouter>
    );

    expect(document.title).toBe("Ability and Permission | English Cheatsheet");
  });

  it("uses modal verbs overview in the browser tab", () => {
    render(
      <MemoryRouter initialEntries={["/modal-verbs/modal-verbs-overview"]}>
        <App />
      </MemoryRouter>
    );

    expect(document.title).toBe("Modal Verbs Overview | English Cheatsheet");
  });

  it("uses advice and obligation in the browser tab", () => {
    render(
      <MemoryRouter initialEntries={["/modal-verbs/advice-and-obligation"]}>
        <App />
      </MemoryRouter>
    );

    expect(document.title).toBe("Advice and Obligation | English Cheatsheet");
  });

  it("uses possibility and probability in the browser tab", () => {
    render(
      <MemoryRouter initialEntries={["/modal-verbs/possibility-and-probability"]}>
        <App />
      </MemoryRouter>
    );

    expect(document.title).toBe("Possibility and Probability | English Cheatsheet");
  });

  it("uses polite requests in the browser tab", () => {
    render(
      <MemoryRouter initialEntries={["/modal-verbs/polite-requests"]}>
        <App />
      </MemoryRouter>
    );

    expect(document.title).toBe("Polite Requests | English Cheatsheet");
  });

  it("uses would and hypotheticals in the browser tab", () => {
    render(
      <MemoryRouter initialEntries={["/modal-verbs/would-and-hypotheticals"]}>
        <App />
      </MemoryRouter>
    );

    expect(document.title).toBe("Would and Hypotheticals | English Cheatsheet");
  });

  it("uses section titles for list routes", () => {
    render(
      <MemoryRouter initialEntries={["/verb-tenses"]}>
        <App />
      </MemoryRouter>
    );

    expect(document.title).toBe("Verb Tenses | English Cheatsheet");
  });
});
