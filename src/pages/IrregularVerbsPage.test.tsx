import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import { useCheatsheetStore } from "../store/useCheatsheetStore";
import { IrregularVerbsPage } from "./IrregularVerbsPage";

describe("Irregular Verbs page", () => {
  beforeEach(() => {
    useCheatsheetStore.setState({
      searchTerm: "",
      activeFilters: {}
    });
  });

  it("renders Table as the default tab", () => {
    render(
      <MemoryRouter>
        <IrregularVerbsPage />
      </MemoryRouter>
    );

    expect(screen.getByRole("tab", { name: /table/i }).getAttribute("aria-selected")).toBe(
      "true"
    );
    expect(screen.getByRole("tab", { name: /by pattern/i })).toBeTruthy();
    expect(screen.getByText("Infinitive")).toBeTruthy();
    expect(screen.getByRole("link", { name: "go" })).toBeTruthy();
  });

  it("switches to By Pattern and shows representative pattern families", () => {
    render(
      <MemoryRouter>
        <IrregularVerbsPage />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("tab", { name: /by pattern/i }));

    expect(screen.getByText("AAA — All forms the same")).toBeTruthy();
    expect(screen.getByText("ABB — Past = participle")).toBeTruthy();
    expect(screen.getByText("ABA — Infinitive = participle")).toBeTruthy();
    expect(screen.getByText("ABC — All forms different")).toBeTruthy();
    expect(screen.getByRole("link", { name: "cut" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "build" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "come" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "begin" })).toBeTruthy();
  });

  it("shares search and frequency filters with the pattern tab", () => {
    render(
      <MemoryRouter>
        <IrregularVerbsPage />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("tab", { name: /by pattern/i }));
    fireEvent.change(screen.getByLabelText("Search"), {
      target: { value: "AAA" }
    });

    expect(screen.getByText("AAA — All forms the same")).toBeTruthy();
    expect(screen.queryByText("ABB — Past = participle")).toBeNull();

    fireEvent.change(screen.getByLabelText("Search"), {
      target: { value: "go" }
    });

    expect(screen.getByRole("link", { name: "go" })).toBeTruthy();
    expect(screen.queryByRole("link", { name: "build" })).toBeNull();

    fireEvent.change(screen.getByLabelText("Frequency"), {
      target: { value: "high" }
    });

    expect(screen.getByRole("link", { name: "go" })).toBeTruthy();
  });

  it("shows the shared empty state when pattern filters remove all results", () => {
    render(
      <MemoryRouter>
        <IrregularVerbsPage />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("tab", { name: /by pattern/i }));
    fireEvent.change(screen.getByLabelText("Search"), {
      target: { value: "zzzz impossible query" }
    });

    expect(screen.getByText("No irregular verbs found with those filters.")).toBeTruthy();
  });
});
