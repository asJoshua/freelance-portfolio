import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { axe } from "jest-axe";
import { Card } from "./Card";
import { Project } from "../../data/types";

const baseProject: Project = {
  id: "test-project",
  title: "Test Project",
  summary: "A short summary of the test project.",
  image: "test-image.png",
  imageAlt: "Test project preview",
  tags: [{ label: "React.js" }, { label: "TypeScript" }],
  liveUrl: "https://example.com/test-project",
  caseStudy: {
    problem: "A problem.",
    approach: "An approach.",
    outcome: "An outcome.",
    techStack: ["React"],
  },
};

const renderCard = (project: Project) =>
  render(
    <MemoryRouter>
      <Card project={project} />
    </MemoryRouter>
  );

describe("Card", () => {
  it("links its title/image to the internal case study route", () => {
    renderCard(baseProject);

    const caseStudyLink = screen.getByRole("link", { name: /test project/i });
    expect(caseStudyLink).toHaveAttribute("href", "/projects/test-project");
    expect(within(caseStudyLink).getByRole("img", { name: "Test project preview" })).toBeInTheDocument();
  });

  it("renders a separate external 'View live' link that is not nested inside the case study link", () => {
    renderCard(baseProject);

    const viewLiveLink = screen.getByRole("link", { name: /view live/i });
    expect(viewLiveLink).toHaveAttribute("href", baseProject.liveUrl);
    expect(viewLiveLink).toHaveAttribute("target", "_blank");

    const caseStudyLink = screen.getByRole("link", { name: /test project/i });
    // Interactive elements must not nest — the two links are siblings, not parent/child.
    expect(caseStudyLink).not.toContainElement(viewLiveLink);
    expect(viewLiveLink).not.toContainElement(caseStudyLink);
  });

  it("omits the 'View live' link when the project has no liveUrl", () => {
    renderCard({ ...baseProject, liveUrl: undefined });
    expect(screen.queryByRole("link", { name: /view live/i })).not.toBeInTheDocument();
  });

  it("surfaces the liveUrlNote near the View live link when present", () => {
    renderCard({ ...baseProject, liveUrlNote: "Cold starts may take a minute." });
    expect(screen.getByText(/cold starts may take a minute/i)).toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const { container } = renderCard(baseProject);
    expect(await axe(container)).toHaveNoViolations();
  });
});
