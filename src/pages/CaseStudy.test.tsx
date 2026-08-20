import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { axe } from "jest-axe";
import CaseStudy from "./CaseStudy";
import { projects } from "../data/projects";

const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/projects/:id" element={<CaseStudy />} />
      </Routes>
    </MemoryRouter>
  );

describe("CaseStudy", () => {
  it("renders the matching project's full case study", () => {
    const project = projects.find((p) => p.id === "chil-data-app")!;
    renderAt("/projects/chil-data-app");

    expect(screen.getByRole("heading", { level: 1, name: project.title })).toBeInTheDocument();
    expect(screen.getByText(project.caseStudy.problem)).toBeInTheDocument();
    expect(screen.getByText(project.caseStudy.approach)).toBeInTheDocument();
    expect(screen.getByText(project.caseStudy.outcome)).toBeInTheDocument();
    project.caseStudy.techStack.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it("shows the live-demo link and hosting note when present", () => {
    const project = projects.find((p) => p.id === "chil-data-app")!;
    renderAt("/projects/chil-data-app");

    const liveLink = screen.getByRole("link", { name: /view live demo/i });
    expect(liveLink).toHaveAttribute("href", project.liveUrl);
    expect(screen.getByText(project.liveUrlNote!)).toBeInTheDocument();
  });

  it("shows a not-found message and a way back home for an unknown id", () => {
    renderAt("/projects/does-not-exist");

    expect(screen.getByRole("heading", { level: 1, name: /project not found/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /back/i })).toHaveAttribute("href", "/");
  });

  it("has no accessibility violations for a found project", async () => {
    const { container } = renderAt("/projects/freelance-portfolio");
    expect(await axe(container)).toHaveNoViolations();
  });

  it("has no accessibility violations for the not-found state", async () => {
    const { container } = renderAt("/projects/does-not-exist");
    expect(await axe(container)).toHaveNoViolations();
  });
});
