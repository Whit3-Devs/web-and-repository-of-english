import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { App } from "../App";
import { HomePage } from "./HomePage";
import { IrregularVerbDetailPage } from "./IrregularVerbDetailPage";

describe("Home page topic directory", () => {
  it("renders grouped sections with direct topic links", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByText("Verb Tenses")).toBeTruthy();
    expect(screen.getByText("Modal Verbs")).toBeTruthy();
    expect(screen.getByText("Core Grammar")).toBeTruthy();
    expect(screen.getByText("Irregular Verbs")).toBeTruthy();

    expect(screen.getByRole("link", { name: "Present Simple" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Modal Verbs Overview" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Polite Requests" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Conditionals Overview" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Question Builder Cheat Sheet" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "WH Questions" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "awake" })).toBeTruthy();
  });

  it("renders view-all links for grouped sections", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: "View all verb tenses →" })).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "View all modal verb topics →" })
    ).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "View all core grammar topics →" })
    ).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "View all irregular verbs →" })
    ).toBeTruthy();
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
    expect(screen.getByText("Full explanation coming soon")).toBeTruthy();
  });

  it("updates the browser tab title based on the current route", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/embedded-wh-clauses"]}>
        <App />
      </MemoryRouter>
    );

    expect(document.title).toBe("Embedded WH Clauses | English Cheatsheet");
  });

  it("uses the renamed core grammar topic title in the browser tab", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/pronouns-possessives-and-object-forms"]}>
        <App />
      </MemoryRouter>
    );

    expect(document.title).toBe(
      "Pronouns, Possessives, Object Forms, and Reflexives | English Cheatsheet"
    );
  });

  it("uses key structure differences in the browser tab", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/key-structure-differences"]}>
        <App />
      </MemoryRouter>
    );

    expect(document.title).toBe("Key Structure Differences | English Cheatsheet");
  });

  it("uses question builder cheat sheet in the browser tab", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/question-builder-cheat-sheet"]}>
        <App />
      </MemoryRouter>
    );

    expect(document.title).toBe("Question Builder Cheat Sheet | English Cheatsheet");
  });

  it("uses conditionals overview in the browser tab", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/conditionals-overview"]}>
        <App />
      </MemoryRouter>
    );

    expect(document.title).toBe("Conditionals Overview | English Cheatsheet");
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
