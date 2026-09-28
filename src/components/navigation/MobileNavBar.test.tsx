import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { MobileNavBar } from "./MobileNavBar";

describe("MobileNavBar", () => {
  it("opens the drawer from the hamburger button and closes it on click", () => {
    render(
      <MemoryRouter>
        <MobileNavBar pageTitle="Home" />
      </MemoryRouter>
    );

    const hamburger = screen.getByRole("button", { name: "Open navigation" });
    expect(hamburger.getAttribute("aria-expanded")).toBe("false");
    expect(screen.queryByRole("dialog", { name: "Site navigation" })).toBeNull();

    fireEvent.click(hamburger);

    expect(hamburger.getAttribute("aria-expanded")).toBe("true");
    const dialog = screen.getByRole("dialog", { name: "Site navigation" });
    expect(dialog).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "Close navigation" }));

    expect(screen.queryByRole("dialog", { name: "Site navigation" })).toBeNull();
    expect(hamburger.getAttribute("aria-expanded")).toBe("false");
  });

  it("closes the drawer when Escape is pressed", () => {
    render(
      <MemoryRouter>
        <MobileNavBar pageTitle="Home" />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: "Open navigation" }));
    expect(screen.getByRole("dialog", { name: "Site navigation" })).toBeTruthy();

    fireEvent.keyDown(window, { key: "Escape" });

    expect(screen.queryByRole("dialog", { name: "Site navigation" })).toBeNull();
  });

  it("clears the filter on Escape without closing the drawer", () => {
    render(
      <MemoryRouter>
        <MobileNavBar pageTitle="Home" />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: "Open navigation" }));
    const filterInput = screen.getByLabelText("Filter topics");
    fireEvent.change(filterInput, { target: { value: "perf" } });

    fireEvent.keyDown(filterInput, { key: "Escape" });

    expect((filterInput as HTMLInputElement).value).toBe("");
    expect(screen.getByRole("dialog", { name: "Site navigation" })).toBeTruthy();

    fireEvent.keyDown(filterInput, { key: "Escape" });

    expect(screen.queryByRole("dialog", { name: "Site navigation" })).toBeNull();
  });

  it("closes the drawer when the scrim is clicked", () => {
    const { container } = render(
      <MemoryRouter>
        <MobileNavBar pageTitle="Home" />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: "Open navigation" }));
    expect(screen.getByRole("dialog", { name: "Site navigation" })).toBeTruthy();

    const scrim = container.querySelector('[aria-hidden="true"].fixed, [aria-hidden="true"].absolute');
    expect(scrim).toBeTruthy();
    fireEvent.click(scrim!);

    expect(screen.queryByRole("dialog", { name: "Site navigation" })).toBeNull();
  });

  it("shows the current page title in the bar", () => {
    render(
      <MemoryRouter>
        <MobileNavBar pageTitle="Present Perfect" />
      </MemoryRouter>
    );

    expect(screen.getByText("Present Perfect")).toBeTruthy();
  });
});
