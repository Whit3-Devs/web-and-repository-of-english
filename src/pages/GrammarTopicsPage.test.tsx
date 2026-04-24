import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { GrammarTopicDetailPage } from "./GrammarTopicDetailPage";
import { GrammarTopicsPage } from "./GrammarTopicsPage";
import { IrregularVerbDetailPage } from "./IrregularVerbDetailPage";
import { AppLayout } from "../components/AppLayout";

describe("Grammar topic pages", () => {
  it("renders Modal Verbs cards", () => {
    render(
      <MemoryRouter>
        <GrammarTopicsPage section="modal-verbs" />
      </MemoryRouter>
    );

    expect(screen.getByText("Modal Verbs Overview")).toBeTruthy();
    expect(screen.getByText("Ability and Permission")).toBeTruthy();
    expect(screen.getByText("Would and Hypotheticals")).toBeTruthy();
  });

  it("renders Core Grammar cards", () => {
    render(
      <MemoryRouter>
        <GrammarTopicsPage section="core-grammar" />
      </MemoryRouter>
    );

    expect(screen.getByText("Conditionals Overview")).toBeTruthy();
    expect(screen.getByText("Question Builder Cheat Sheet")).toBeTruthy();
    expect(screen.getByText("WH Questions")).toBeTruthy();
    expect(screen.getByText("Common Prepositions")).toBeTruthy();
    expect(screen.getByText("Articles and Determiners")).toBeTruthy();
    expect(screen.getByText("Gerunds and Infinitives")).toBeTruthy();
    expect(screen.getByText("Passive Voice")).toBeTruthy();
    expect(screen.getByText("Reported Speech")).toBeTruthy();
    expect(screen.getByText("Comparatives and Superlatives")).toBeTruthy();
    expect(screen.getByText("Adjectives and Adverbs")).toBeTruthy();
  });

  it("renders placeholder detail routes for irregular verb pages that are not migrated yet", () => {
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

  it("renders full explanation content for Modal Verbs Overview without micro practice", () => {
    render(
      <MemoryRouter initialEntries={["/modal-verbs/modal-verbs-overview"]}>
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

    expect(screen.getByRole("heading", { name: "Modal Verbs Overview" })).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("What this topic helps you express")).toBeTruthy();
    expect(screen.getByText("Decision rules")).toBeTruthy();
    expect(screen.getByText("Core rule")).toBeTruthy();
    expect(screen.getByText("Can / Could / May for ability and permission")).toBeTruthy();
    expect(screen.getByText("May / Might / Could / Must for possibility")).toBeTruthy();
    expect(screen.getByText("Should / Ought to / Must for advice and obligation")).toBeTruthy();
    expect(screen.getByText("Can / Could / Would / May for requests")).toBeTruthy();
    expect(screen.getByText("Would for hypotheticals and polite preference")).toBeTruthy();
    expect(screen.getByText("Tone guide: direct, softer, formal, strong")).toBeTruthy();
    expect(screen.getByText("Can vs Could")).toBeTruthy();
    expect(screen.getByText("May vs Might")).toBeTruthy();
    expect(screen.getByText("Should vs Must")).toBeTruthy();
    expect(screen.getByText("Could vs Would")).toBeTruthy();
    expect(screen.getByText("Personalized examples")).toBeTruthy();
    expect(screen.getByText("Quick memory")).toBeTruthy();
    expect(screen.queryByText("Micro practice")).toBeNull();
  });

  it("renders full explanation content for Advice and Obligation", () => {
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

    expect(screen.getByRole("heading", { name: "Advice and Obligation" })).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("What this topic helps you express")).toBeTruthy();
    expect(screen.getByText("Core rule")).toBeTruthy();
    expect(screen.getByText("Decision rules")).toBeTruthy();
    expect(screen.getByText("Should for advice and recommendation")).toBeTruthy();
    expect(screen.getByText("Ought to for moral or more formal advice")).toBeTruthy();
    expect(screen.getByText("Must for strong obligation or necessity")).toBeTruthy();
    expect(screen.getByText("Must not for prohibition")).toBeTruthy();
    expect(screen.getAllByText("Affirmative").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Negative").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Question").length).toBeGreaterThan(0);
    expect(screen.getAllByText(/shouldn.?t/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/mustn.?t/i).length).toBeGreaterThan(0);
    expect(screen.getByText("Should vs Ought To")).toBeTruthy();
    expect(screen.getByText("Should vs Must")).toBeTruthy();
    expect(screen.getByText("Must vs Must Not")).toBeTruthy();
    expect(screen.getByText("Personalized examples")).toBeTruthy();
    expect(screen.getByText("Common mistakes")).toBeTruthy();
    expect(screen.getByText("Micro practice")).toBeTruthy();
    expect(
      screen.getByText("Complete the sentence: You should ___ more water.")
    ).toBeTruthy();
  });

  it("renders full explanation content for Possibility and Probability", () => {
    render(
      <MemoryRouter initialEntries={["/modal-verbs/possibility-and-probability"]}>
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

    expect(screen.getByRole("heading", { name: "Possibility and Probability" })).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("What this topic helps you express")).toBeTruthy();
    expect(screen.getByText("Core rule")).toBeTruthy();
    expect(screen.getByText("Decision rules")).toBeTruthy();
    expect(screen.getByText("May for possibility")).toBeTruthy();
    expect(screen.getByText("Might for weaker or more uncertain possibility")).toBeTruthy();
    expect(screen.getByText("Could for one possible option")).toBeTruthy();
    expect(screen.getByText("Must for strong logical deduction")).toBeTruthy();
    expect(screen.getAllByText("Affirmative").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Negative").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Question").length).toBeGreaterThan(0);
    expect(screen.getAllByText(/couldn.?t/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/mustn.?t/i).length).toBeGreaterThan(0);
    expect(screen.getByText("May vs Might")).toBeTruthy();
    expect(screen.getByText("Might vs Could")).toBeTruthy();
    expect(screen.getByText("Could vs Must")).toBeTruthy();
    expect(screen.getByText("Personalized examples")).toBeTruthy();
    expect(screen.getByText("Common mistakes")).toBeTruthy();
    expect(screen.getByText("Micro practice")).toBeTruthy();
    expect(
      screen.getByText("Complete the sentence: It might ___ later.")
    ).toBeTruthy();
  });

  it("renders full explanation content for Polite Requests", () => {
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

    expect(screen.getByRole("heading", { name: "Polite Requests" })).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("What this topic helps you express")).toBeTruthy();
    expect(screen.getByText("Core rule")).toBeTruthy();
    expect(screen.getByText("Decision rules")).toBeTruthy();
    expect(screen.getByText("Can for direct everyday requests")).toBeTruthy();
    expect(screen.getByText("Could for softer, more polite requests")).toBeTruthy();
    expect(
      screen.getByText("Would for offers, invitations, and would like requests")
    ).toBeTruthy();
    expect(screen.getByText("May for formal permission requests")).toBeTruthy();
    expect(screen.getAllByText("Affirmative").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Negative").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Question").length).toBeGreaterThan(0);
    expect(screen.getAllByText(/can.?t/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/couldn.?t/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/wouldn.?t/i).length).toBeGreaterThan(0);
    expect(screen.getByText("Can vs Could")).toBeTruthy();
    expect(screen.getByText("Could vs May")).toBeTruthy();
    expect(screen.getByText("Could vs Would")).toBeTruthy();
    expect(screen.getAllByText(/Would you like to \+ base verb/i).length).toBeGreaterThan(0);
    expect(screen.getByText("Personalized examples")).toBeTruthy();
    expect(screen.getByText("Common mistakes")).toBeTruthy();
    expect(screen.getByText("Micro practice")).toBeTruthy();
    expect(
      screen.getByText("Complete the sentence: Would you like to ___ with us after class?")
    ).toBeTruthy();
  });

  it("renders full explanation content for Would and Hypotheticals", () => {
    render(
      <MemoryRouter initialEntries={["/modal-verbs/would-and-hypotheticals"]}>
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

    expect(screen.getByRole("heading", { name: "Would and Hypotheticals" })).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("What this topic helps you express")).toBeTruthy();
    expect(screen.getByText("Core rule")).toBeTruthy();
    expect(screen.getByText("Decision rules")).toBeTruthy();
    expect(screen.getByText("Would for imagined result and softer meaning")).toBeTruthy();
    expect(screen.getByText("Would like for polite wants and invitations")).toBeTruthy();
    expect(screen.getByText("Would rather for preference")).toBeTruthy();
    expect(screen.getByText("Would ... if ... for hypothetical result")).toBeTruthy();
    expect(screen.getAllByText("Affirmative").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Negative").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Question").length).toBeGreaterThan(0);
    expect(screen.getAllByText(/wouldn.?t/i).length).toBeGreaterThan(0);
    expect(screen.getByText("Would Like vs Want")).toBeTruthy();
    expect(screen.getByText("Would Rather vs Would Like")).toBeTruthy();
    expect(screen.getByText("Would for hypothetical result vs direct reality")).toBeTruthy();
    expect(screen.getAllByText(/would like to \+ base verb/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/would rather \+ base verb/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/would \+ base verb \+ if \+ past simple/i).length).toBeGreaterThan(0);
    expect(screen.getByText("Personalized examples")).toBeTruthy();
    expect(screen.getByText("Common mistakes")).toBeTruthy();
    expect(screen.getByText("Micro practice")).toBeTruthy();
    expect(
      screen.getByText("Complete the sentence: I would like to ___ my English more this week.")
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

  it("renders full explanation content for Articles and Determiners", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/articles-and-determiners"]}>
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
      screen.getByRole("heading", { name: "Articles and Determiners" })
    ).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("Article reference table")).toBeTruthy();
    expect(screen.getByText("Article decision rules")).toBeTruthy();
    expect(screen.getByText("Countable vs uncountable nouns")).toBeTruthy();
    expect(screen.getByText("Determiner guide")).toBeTruthy();
    expect(screen.getByText("This / That / These / Those")).toBeTruthy();
    expect(screen.getByText("Some / Any / No")).toBeTruthy();
    expect(screen.getByText("Much / Many / A lot of")).toBeTruthy();
    expect(screen.getByText("Few / A few / Little / A little")).toBeTruthy();
    expect(screen.getByText("Common mistakes")).toBeTruthy();
    expect(screen.getByText("Micro practice")).toBeTruthy();
    expect(screen.getByText("I need an advice.")).toBeTruthy();
    expect(screen.getAllByText("I need advice.").length).toBeGreaterThan(0);
    expect(
      screen.getByText("Complete the question: Do you have ___ questions?")
    ).toBeTruthy();
  });

  it("renders full explanation content for Gerunds and Infinitives", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/gerunds-and-infinitives"]}>
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
      screen.getByRole("heading", { name: "Gerunds and Infinitives" })
    ).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("Core decision rules")).toBeTruthy();
    expect(screen.getByText("Practical patterns")).toBeTruthy();
    expect(screen.getByText("Verb + -ing")).toBeTruthy();
    expect(screen.getByText("Verb + to + base verb")).toBeTruthy();
    expect(screen.getByText("Both forms with similar meaning")).toBeTruthy();
    expect(screen.getByText("Meaning-change patterns")).toBeTruthy();
    expect(screen.getByText("stop + verb-ing")).toBeTruthy();
    expect(screen.getByText("stop + to + base verb")).toBeTruthy();
    expect(screen.getByText("Common mistakes")).toBeTruthy();
    expect(screen.getByText("Micro practice")).toBeTruthy();
    expect(screen.getByText("I enjoy to learn English.")).toBeTruthy();
    expect(screen.getAllByText("I enjoy learning English.").length).toBeGreaterThan(0);
    expect(
      screen.getByText("Complete the sentence: I want ___ my speaking.")
    ).toBeTruthy();
  });

  it("renders full explanation content for Passive Voice", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/passive-voice"]}>
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

    expect(screen.getByRole("heading", { name: "Passive Voice" })).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("Active vs passive")).toBeTruthy();
    expect(screen.getByText("Active vs passive decision rules")).toBeTruthy();
    expect(screen.getByText("Core passive structure")).toBeTruthy();
    expect(screen.getByText("Practical passive patterns")).toBeTruthy();
    expect(screen.getByText("Present Simple Passive")).toBeTruthy();
    expect(screen.getByText("Past Simple Passive")).toBeTruthy();
    expect(screen.getByText("Present Perfect Passive")).toBeTruthy();
    expect(screen.getByText("Future Passive")).toBeTruthy();
    expect(screen.getByText("Modal passive")).toBeTruthy();
    expect(screen.getByText("can be + past participle")).toBeTruthy();
    expect(screen.getByText("must be + past participle")).toBeTruthy();
    expect(screen.getByText("Agent with by")).toBeTruthy();
    expect(screen.getByText("Common mistakes")).toBeTruthy();
    expect(screen.getByText("Micro practice")).toBeTruthy();
    expect(screen.getByText("The bug fixed yesterday.")).toBeTruthy();
    expect(screen.getAllByText("The bug was fixed yesterday.").length).toBeGreaterThan(0);
    expect(
      screen.getByText("Complete the modal passive: This option can ___ here.")
    ).toBeTruthy();
  });

  it("renders full explanation content for Reported Speech", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/reported-speech"]}>
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

    expect(screen.getByRole("heading", { name: "Reported Speech" })).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("Direct vs reported speech")).toBeTruthy();
    expect(screen.getByText("Reporting verbs")).toBeTruthy();
    expect(screen.getByText("Statement patterns")).toBeTruthy();
    expect(screen.getByText("Reported questions")).toBeTruthy();
    expect(screen.getByText("Requests and instructions")).toBeTruthy();
    expect(screen.getByText("Practical tense shift guide")).toBeTruthy();
    expect(screen.getByText("say")).toBeTruthy();
    expect(screen.getByText("tell")).toBeTruthy();
    expect(screen.getByText("ask")).toBeTruthy();
    expect(screen.getByText("Common mistakes")).toBeTruthy();
    expect(screen.getByText("Micro practice")).toBeTruthy();
    expect(screen.getByText("She said me that she was busy.")).toBeTruthy();
    expect(
      screen.getAllByText("She told me that she was busy.").length
    ).toBeGreaterThan(0);
    expect(screen.getByText("Report the question: Where does she work?")).toBeTruthy();
  });

  it("renders full explanation content for Comparatives and Superlatives", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/comparatives-and-superlatives"]}>
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
      screen.getByRole("heading", { name: "Comparatives and Superlatives" })
    ).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("Comparative patterns")).toBeTruthy();
    expect(screen.getByText("Superlative patterns")).toBeTruthy();
    expect(screen.getByText("Irregular forms")).toBeTruthy();
    expect(screen.getByText("Equality and less")).toBeTruthy();
    expect(screen.getByText("Short adjective comparative")).toBeTruthy();
    expect(screen.getByText("Long adjective comparative")).toBeTruthy();
    expect(screen.getByText("Short adjective superlative")).toBeTruthy();
    expect(screen.getByText("Long adjective superlative")).toBeTruthy();
    expect(screen.getByText("better")).toBeTruthy();
    expect(screen.getByText("the best")).toBeTruthy();
    expect(screen.getByText("Common mistakes")).toBeTruthy();
    expect(screen.getByText("Micro practice")).toBeTruthy();
    expect(screen.getByText("This is more faster than that.")).toBeTruthy();
    expect(screen.getAllByText("This is faster than that.").length).toBeGreaterThan(0);
    expect(
      screen.getByText("Complete the sentence: This option is as ___ as the old one.")
    ).toBeTruthy();
  });

  it("renders full explanation content for Adjectives and Adverbs", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/adjectives-and-adverbs"]}>
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

    expect(screen.getByRole("heading", { name: "Adjectives and Adverbs" })).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("What this page helps you decide")).toBeTruthy();
    expect(screen.getByText("Adjective / adverb decision rules")).toBeTruthy();
    expect(screen.getByText("Adjective vs adverb reference")).toBeTruthy();
    expect(screen.getByText("Adjective patterns")).toBeTruthy();
    expect(screen.getByText("Adverb patterns")).toBeTruthy();
    expect(screen.getByText("Linking verbs")).toBeTruthy();
    expect(screen.getByText("Adjective before a noun")).toBeTruthy();
    expect(screen.getByText("Adverb after an action verb")).toBeTruthy();
    expect(screen.getByText("Be, seem, look, feel, sound, taste")).toBeTruthy();
    expect(screen.getByText("Common mistakes")).toBeTruthy();
    expect(screen.getByText("Micro practice")).toBeTruthy();
    expect(screen.getByText("It works good.")).toBeTruthy();
    expect(screen.getAllByText("It works well.").length).toBeGreaterThan(0);
    expect(screen.getByText("Complete the sentence: The app loads ___.")).toBeTruthy();
  });

  it("renders full explanation content for Question Builder Cheat Sheet", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/question-builder-cheat-sheet"]}>
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
      screen.getByRole("heading", { name: "Question Builder Cheat Sheet" })
    ).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("What this cheat sheet helps you build")).toBeTruthy();
    expect(screen.getByText("Universal question formula")).toBeTruthy();
    expect(screen.getByText("Fast build steps")).toBeTruthy();
    expect(screen.getByText("Builder by system")).toBeTruthy();
    expect(screen.getByText("Do / Does / Did")).toBeTruthy();
    expect(screen.getByText("Be")).toBeTruthy();
    expect(screen.getByText("Have")).toBeTruthy();
    expect(screen.getByText("Modals")).toBeTruthy();
    expect(screen.getAllByText("Yes/No pattern").length).toBeGreaterThan(0);
    expect(screen.getAllByText("WH pattern").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Short answers").length).toBeGreaterThan(0);
    expect(screen.getByText("Common mistakes")).toBeTruthy();
    expect(screen.getByText("Quick memory")).toBeTruthy();
    expect(screen.getByRole("link", { name: "WH Questions" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "English Auxiliaries" })).toBeTruthy();
    expect(screen.queryByText("Micro practice")).toBeNull();
  });

  it("renders full explanation content for Conditionals Overview", () => {
    render(
      <MemoryRouter initialEntries={["/core-grammar/conditionals-overview"]}>
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

    expect(screen.getByRole("heading", { name: "Conditionals Overview" })).toBeTruthy();
    expect(screen.getByText("Available now")).toBeTruthy();
    expect(screen.getByText("What this cheat sheet helps you choose")).toBeTruthy();
    expect(screen.getByText("Fast decision rules")).toBeTruthy();
    expect(screen.getByText("Conditionals map")).toBeTruthy();
    expect(screen.getByText("Zero Conditional")).toBeTruthy();
    expect(screen.getByText("First Conditional")).toBeTruthy();
    expect(screen.getByText("Second Conditional")).toBeTruthy();
    expect(screen.getByText("Third Conditional")).toBeTruthy();
    expect(screen.getByText("Mixed Conditional")).toBeTruthy();
    expect(screen.getAllByText("Core pattern").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Quick contrast").length).toBeGreaterThan(0);
    expect(screen.getByText("Common mistakes")).toBeTruthy();
    expect(screen.getByText("Quick memory")).toBeTruthy();
    expect(screen.getByRole("link", { name: "Would and Hypotheticals" })).toBeTruthy();
    expect(screen.queryByText("Micro practice")).toBeNull();
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

    const navigation = screen.getByRole("navigation", { name: "Study sections" });

    expect(within(navigation).getByText("Modal Verbs")).toBeTruthy();
    expect(within(navigation).getByText("Core Grammar")).toBeTruthy();
  });

  it("renders the GitHub calls to action in the footer", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<p>Home content</p>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const githubLink = screen.getByRole("link", {
      name: "⭐ Star this project on GitHub"
    });

    expect(githubLink.getAttribute("href")).toBe(
      "https://github.com/Whit3-Devs/web-and-repository-of-english"
    );
    expect(githubLink.getAttribute("target")).toBe("_blank");
    expect(githubLink.getAttribute("rel")).toBe("noreferrer");

    const moreProjectsLink = screen.getByRole("link", {
      name: "Explore more Whit3-Devs projects"
    });

    expect(moreProjectsLink.getAttribute("href")).toBe(
      "https://github.com/Whit3-Devs/"
    );
    expect(moreProjectsLink.getAttribute("target")).toBe("_blank");
    expect(moreProjectsLink.getAttribute("rel")).toBe("noreferrer");
  });
});

