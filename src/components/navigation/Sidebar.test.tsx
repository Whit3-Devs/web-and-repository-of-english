import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  it("renders every study section as a collapsible group", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    const navigation = screen.getByRole("navigation", { name: "Study sections" });

    expect(within(navigation).getByRole("button", { name: /verb tenses/i })).toBeTruthy();
    expect(within(navigation).getByRole("button", { name: /modal verbs/i })).toBeTruthy();
    expect(within(navigation).getByRole("button", { name: /sentence building/i })).toBeTruthy();
    expect(within(navigation).getByRole("button", { name: /grammar foundations/i })).toBeTruthy();
    expect(within(navigation).getByRole("button", { name: /advanced structures/i })).toBeTruthy();
    expect(within(navigation).getByRole("button", { name: /communication patterns/i })).toBeTruthy();
    expect(within(navigation).getByRole("button", { name: /irregular verbs/i })).toBeTruthy();
  });

  it("expands the group that contains the current route and marks the active link", () => {
    render(
      <MemoryRouter initialEntries={["/verb-tenses/present-perfect"]}>
        <Sidebar />
      </MemoryRouter>
    );

    const verbTensesButton = screen.getByRole("button", { name: /verb tenses/i });
    expect(verbTensesButton.getAttribute("aria-expanded")).toBe("true");

    const activeLink = screen.getByRole("link", { name: "Present Perfect" });
    expect(activeLink.getAttribute("aria-current")).toBe("page");

    const modalVerbsButton = screen.getByRole("button", { name: /modal verbs/i });
    expect(modalVerbsButton.getAttribute("aria-expanded")).toBe("false");
  });

  it("toggles a collapsed group open and closed", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    const modalVerbsButton = screen.getByRole("button", { name: /modal verbs/i });
    expect(modalVerbsButton.getAttribute("aria-expanded")).toBe("false");
    expect(screen.queryByRole("link", { name: "Ability and Permission" })).toBeNull();

    fireEvent.click(modalVerbsButton);

    expect(modalVerbsButton.getAttribute("aria-expanded")).toBe("true");
    expect(screen.getByRole("link", { name: "Ability and Permission" })).toBeTruthy();

    fireEvent.click(modalVerbsButton);

    expect(modalVerbsButton.getAttribute("aria-expanded")).toBe("false");
    expect(screen.queryByRole("link", { name: "Ability and Permission" })).toBeNull();
  });

  it("filters down to matching topics, hides sub-headings, and forces matching groups open", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText("Filter topics"), {
      target: { value: "perf" }
    });

    expect(screen.getByRole("link", { name: "Present Perfect" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Present Perfect Continuous" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Past Perfect" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Future Perfect" })).toBeTruthy();

    expect(screen.queryByText("Present")).toBeNull();
    expect(screen.queryByText("Past")).toBeNull();
    expect(screen.queryByText("Future")).toBeNull();

    expect(screen.queryByRole("link", { name: "Present Simple" })).toBeNull();
    expect(screen.queryByRole("button", { name: /modal verbs/i })).toBeNull();
    expect(screen.queryByRole("link", { name: "Home" })).toBeNull();
    expect(screen.getByText(/topics found/)).toBeTruthy();
  });

  it("shows an empty state and clears the filter through the clear button", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    const filterInput = screen.getByLabelText("Filter topics") as HTMLInputElement;
    fireEvent.change(filterInput, { target: { value: "zzzzzz-not-a-real-topic" } });

    expect(screen.getByText("No topics match")).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "Clear filter" }));

    expect(filterInput.value).toBe("");
    expect(screen.queryByText("No topics match")).toBeNull();
    expect(screen.getByRole("link", { name: "Home" })).toBeTruthy();
  });

  it("opens the Irregular Verbs group to a view-all link and letter chips", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /irregular verbs/i }));

    expect(screen.getByRole("link", { name: /browse all \d+ verbs/i })).toBeTruthy();

    const letterLink = screen.getByRole("link", { name: "B" });
    expect(letterLink.getAttribute("href")).toMatch(/^\/irregular-verbs\//);
  });
});
