import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { GrammarTopicDetailPage } from "./GrammarTopicDetailPage";
import { GrammarTopicsPage } from "./GrammarTopicsPage";
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

  it("renders full explanation content for Ability and Permission", () => {
    render(
      <MemoryRouter initialEntries={["/modal-verbs/ability-and-permission"]}>
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

    expect(
      screen.getByRole("heading", { name: "Ability and Permission" })
    ).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("What this topic helps you express")).toBeTruthy();
    expect(screen.getByText("Core rule")).toBeTruthy();
    expect(screen.getByText("Decision rules")).toBeTruthy();
    expect(screen.getByText("Can for present ability")).toBeTruthy();
    expect(screen.getByText("Can for informal permission")).toBeTruthy();
    expect(screen.getByText("Could for past ability")).toBeTruthy();
    expect(screen.getByText("Could for softer permission or polite request")).toBeTruthy();
    expect(screen.getByText("May for formal permission")).toBeTruthy();
    expect(screen.getAllByText("Affirmative").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Negative").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Question").length).toBeGreaterThan(0);
    expect(screen.getAllByText(/can.?t/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/couldn.?t/i).length).toBeGreaterThan(0);
    expect(screen.getByText("Can vs Could")).toBeTruthy();
    expect(screen.getByText("Can vs May")).toBeTruthy();
    expect(screen.getByText("Could vs May")).toBeTruthy();
    expect(screen.getByText("Personalized examples")).toBeTruthy();
    expect(screen.getByText("Common mistakes")).toBeTruthy();
    expect(screen.getByText("Micro practice")).toBeTruthy();
    expect(
      screen.getByText("Complete the sentence: She can ___ English very well.")
    ).toBeTruthy();
  });

  it("renders full explanation content for Common Prepositions", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/common-prepositions"]}>
        <Routes>
          <Route
            path="/core-grammar/:slug"
            element={
              <GrammarTopicDetailPage
                section="core-grammar"
                backPath="/core-grammar"
                backLabel="Core Grammar"
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "Common Prepositions" })).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("What prepositions do")).toBeTruthy();
    expect(screen.getByText("Basic structure")).toBeTruthy();
    expect(screen.getByText("General reference table")).toBeTruthy();
    expect(screen.getByText("Place")).toBeTruthy();
    expect(screen.getByText("Time")).toBeTruthy();
    expect(screen.getByText("Movement / Direction")).toBeTruthy();
    expect(screen.getByText("Important differences")).toBeTruthy();
    expect(screen.getByText("In vs On vs At")).toBeTruthy();
    expect(screen.getByText("To vs In vs Into")).toBeTruthy();
    expect(screen.getByText("For vs Since")).toBeTruthy();
    expect(screen.getByText("By vs With")).toBeTruthy();
    expect(screen.getByText("Quick contrast: time prepositions")).toBeTruthy();
    expect(screen.getByText("Fixed expressions and collocations")).toBeTruthy();
    expect(screen.getByText("Adjective + preposition")).toBeTruthy();
    expect(screen.getByText("Verb + preposition")).toBeTruthy();
    expect(screen.getByText("Preposition + verb-ing")).toBeTruthy();
    expect(screen.getByText("Common mistakes")).toBeTruthy();
    expect(screen.getByText("Micro practice")).toBeTruthy();
    expect(screen.getByText("The lesson starts ___ 8:30.")).toBeTruthy();
    expect(screen.queryByText("Traducción")).toBeNull();
  });

  it("renders full explanation content for WH Questions", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/wh-questions"]}>
        <Routes>
          <Route
            path="/core-grammar/:slug"
            element={
              <GrammarTopicDetailPage
                section="core-grammar"
                backPath="/core-grammar"
                backLabel="Core Grammar"
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "WH Questions" })).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("What WH questions do")).toBeTruthy();
    expect(screen.getByText("Core rule")).toBeTruthy();
    expect(screen.getByText("WH words reference table")).toBeTruthy();
    expect(screen.getByText("With an auxiliary already present")).toBeTruthy();
    expect(screen.getByText("With do / does / did")).toBeTruthy();
    expect(screen.getByText("With to be")).toBeTruthy();
    expect(screen.getByText("Special cases")).toBeTruthy();
    expect(screen.getByText("Who as subject")).toBeTruthy();
    expect(screen.getByText("Short compare with other question types")).toBeTruthy();
    expect(screen.getByText("Yes/No questions vs WH questions")).toBeTruthy();
    expect(screen.getByText("Indirect questions")).toBeTruthy();
    expect(screen.getByText("Subject questions")).toBeTruthy();
    expect(screen.getByText("Side-by-side examples")).toBeTruthy();
    expect(screen.getByText("Common mistakes")).toBeTruthy();
    expect(screen.getByText("Micro practice")).toBeTruthy();
    expect(
      screen.getByText(
        "Turn this into a WH question: You live in Córdoba. Ask about place."
      )
    ).toBeTruthy();
  });

  it("renders full explanation content for Embedded WH Clauses", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/embedded-wh-clauses"]}>
        <Routes>
          <Route
            path="/core-grammar/:slug"
            element={
              <GrammarTopicDetailPage
                section="core-grammar"
                backPath="/core-grammar"
                backLabel="Core Grammar"
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "Embedded WH Clauses" })).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("What embedded WH clauses do")).toBeTruthy();
    expect(screen.getByText("Core rule")).toBeTruthy();
    expect(screen.getByText("Direct question vs embedded WH clause")).toBeTruthy();
    expect(screen.getByText("Common intro patterns")).toBeTruthy();
    expect(screen.getByText("Short usage block")).toBeTruthy();
    expect(screen.getByText("WH words in embedded use")).toBeTruthy();
    expect(screen.getByText("Common mistakes")).toBeTruthy();
    expect(screen.getByText("Transformations")).toBeTruthy();
    expect(screen.getByText("Micro practice")).toBeTruthy();
    expect(
      screen.getByText("Turn this into an embedded clause: Where does she work?")
    ).toBeTruthy();
  });

  it("renders full explanation content for English Auxiliaries", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/english-auxiliaries"]}>
        <Routes>
          <Route
            path="/core-grammar/:slug"
            element={
              <GrammarTopicDetailPage
                section="core-grammar"
                backPath="/core-grammar"
                backLabel="Core Grammar"
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "English Auxiliaries" })).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("General reference table")).toBeTruthy();
    expect(screen.getByText("Do / Does")).toBeTruthy();
    expect(screen.getByText("Did")).toBeTruthy();
    expect(screen.getByText("Am / Is / Are")).toBeTruthy();
    expect(screen.getByText("Was / Were")).toBeTruthy();
    expect(screen.getByText("Have / Has")).toBeTruthy();
    expect(screen.getByText("Had")).toBeTruthy();
    expect(screen.getByText("Will")).toBeTruthy();
    expect(screen.getByText("Pattern rules")).toBeTruthy();
    expect(screen.getByText("Negative contractions")).toBeTruthy();
    expect(screen.getByText("Common short forms")).toBeTruthy();
    expect(screen.getByText("Quick comparisons")).toBeTruthy();
    expect(screen.getByText("Short modal link")).toBeTruthy();
    expect(screen.getByText("Common mistakes")).toBeTruthy();
    expect(screen.getByText("Micro practice")).toBeTruthy();
    expect(screen.getByText("Complete the question: ___ she work here?")).toBeTruthy();
  });

  it("renders full explanation content for Pronouns, Possessives, Object Forms, and Reflexives", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/pronouns-possessives-and-object-forms"]}>
        <Routes>
          <Route
            path="/core-grammar/:slug"
            element={
              <GrammarTopicDetailPage
                section="core-grammar"
                backPath="/core-grammar"
                backLabel="Core Grammar"
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: "Pronouns, Possessives, Object Forms, and Reflexives"
      })
    ).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("Main reference table")).toBeTruthy();
    expect(screen.getByText("Subject pronoun")).toBeTruthy();
    expect(screen.getByText("Object pronoun")).toBeTruthy();
    expect(screen.getByText("Possessive adjective")).toBeTruthy();
    expect(screen.getByText("Possessive pronoun")).toBeTruthy();
    expect(screen.getByText("Reflexive")).toBeTruthy();
    expect(screen.getByText("Subject pronouns")).toBeTruthy();
    expect(screen.getByText("Object pronouns")).toBeTruthy();
    expect(screen.getByText("Possessive adjectives")).toBeTruthy();
    expect(screen.getByText("Possessive pronouns")).toBeTruthy();
    expect(screen.getByText("Reflexives")).toBeTruthy();
    expect(screen.getByText("Focus words")).toBeTruthy();
    expect(screen.getAllByText("him").length).toBeGreaterThan(0);
    expect(screen.getAllByText("his").length).toBeGreaterThan(0);
    expect(screen.getAllByText("her").length).toBeGreaterThan(0);
    expect(screen.getAllByText("hers").length).toBeGreaterThan(0);
    expect(screen.getByText("Contrast blocks")).toBeTruthy();
    expect(screen.getByText("He / Him / His")).toBeTruthy();
    expect(screen.getByText("She / Her / Hers")).toBeTruthy();
    expect(screen.getByText("Common mistakes")).toBeTruthy();
    expect(screen.getByText("Micro practice")).toBeTruthy();
    expect(screen.getByText("Choose the correct form: I called ___. (he / him)")).toBeTruthy();
  });

  it("renders full explanation content for Key Structure Differences", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/key-structure-differences"]}>
        <Routes>
          <Route
            path="/core-grammar/:slug"
            element={
              <GrammarTopicDetailPage
                section="core-grammar"
                backPath="/core-grammar"
                backLabel="Core Grammar"
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: "Key Structure Differences" })
    ).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("What this page helps you decide")).toBeTruthy();
    expect(screen.getByText("Decision rules")).toBeTruthy();
    expect(screen.getByText("Present Simple vs Present Continuous")).toBeTruthy();
    expect(screen.getByText("Past Simple vs Past Continuous")).toBeTruthy();
    expect(screen.getByText("Past Simple vs Present Perfect")).toBeTruthy();
    expect(screen.getByText("Will vs Going To")).toBeTruthy();
    expect(screen.getByText("Present Simple vs Going To")).toBeTruthy();
    expect(screen.getByText("Can vs Could")).toBeTruthy();
    expect(screen.getByText("Must vs Have To")).toBeTruthy();
    expect(screen.getByText("For vs Since")).toBeTruthy();
    expect(screen.getByText("In vs On vs At (time)")).toBeTruthy();
    expect(screen.getByText("Some vs Any")).toBeTruthy();
    expect(screen.getByText("Quick contrast: for vs since")).toBeTruthy();
    expect(screen.getByText("Quick contrast: in / on / at")).toBeTruthy();
    expect(screen.getByText("Quick contrast: some / any")).toBeTruthy();
    expect(screen.getByText("Common mistakes")).toBeTruthy();
    expect(screen.getByText("Micro practice")).toBeTruthy();
    expect(
      screen.getByText("Choose the best form: I usually work from home, but today I ___.")
    ).toBeTruthy();
  });

  it("keeps placeholder detail routes for non-migrated modal topics", () => {
    render(
      <MemoryRouter initialEntries={["/modal-verbs/advice-and-obligation"]}>
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

    expect(screen.getByText("Advice and Obligation")).toBeTruthy();
    expect(screen.getByText("Full explanation coming soon")).toBeTruthy();
  });

  it("renders topic not found for an invalid grammar slug", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/not-real"]}>
        <Routes>
          <Route
            path="/core-grammar/:slug"
            element={
              <GrammarTopicDetailPage
                section="core-grammar"
                backPath="/core-grammar"
                backLabel="Core Grammar"
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "Topic not found" })).toBeTruthy();
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

