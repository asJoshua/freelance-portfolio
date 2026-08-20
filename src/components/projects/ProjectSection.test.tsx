import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { MemoryRouter } from "react-router-dom";
import { ProjectSection, shouldShowCarousel } from "./ProjectSection";

describe("shouldShowCarousel", () => {
  it("prefers the grid below the carousel threshold", () => {
    expect(shouldShowCarousel(2, false)).toBe(false);
  });

  it("uses the carousel once enough projects exist", () => {
    expect(shouldShowCarousel(4, false)).toBe(true);
  });

  it("falls back to the grid when the user prefers reduced motion, even with enough projects", () => {
    expect(shouldShowCarousel(4, true)).toBe(false);
  });

  it("stays on the grid below the threshold regardless of motion preference", () => {
    expect(shouldShowCarousel(3, true)).toBe(false);
  });
});

describe("ProjectSection", () => {
  it("renders the real project data as an accessible grid (below the carousel threshold)", async () => {
    const { container } = render(
      <MemoryRouter>
        <ProjectSection />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /project showcase/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /freelance portfolio/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /chil data app/i })).toBeInTheDocument();

    expect(await axe(container)).toHaveNoViolations();
  });
});
