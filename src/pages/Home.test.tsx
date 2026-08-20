import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { axe } from "jest-axe";
import Home from "./Home";

const renderHome = () =>
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

describe("Home", () => {
  it("composes hero, project showcase, a CTA banner, and the footer", () => {
    renderHome();

    expect(screen.getByRole("heading", { level: 1, name: /joshua sadleir/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /project showcase/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /have a project in mind/i })).toBeInTheDocument();
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
  });

  it("renders exactly one h1 and never skips a heading level, end to end", () => {
    const { container } = renderHome();
    const levels = Array.from(container.querySelectorAll("h1, h2, h3, h4, h5, h6")).map((el) =>
      Number(el.tagName[1])
    );

    expect(levels.filter((l) => l === 1)).toHaveLength(1);
    // A heading may repeat or step back to any earlier level, but must never
    // jump more than one level above the deepest level seen so far.
    for (let i = 1; i < levels.length; i++) {
      expect(levels[i] - Math.max(...levels.slice(0, i))).toBeLessThanOrEqual(1);
    }
  });

  it("has no accessibility violations across the whole page", async () => {
    const { container } = renderHome();
    expect(await axe(container)).toHaveNoViolations();
  });
});
