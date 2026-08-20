import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("marks the contact section with a stable #contact id for CTA scroll targets", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector("#contact")).toBeInTheDocument();
  });

  it("describes real services instead of a bare word list", () => {
    render(<Footer />);
    expect(screen.getByText(/booking/i)).toBeInTheDocument();
    expect(screen.getByText(/hospitality and service businesses/i)).toBeInTheDocument();
    expect(screen.queryByText("UI/UX DESIGN")).not.toBeInTheDocument();
  });

  it("still lists real projects", () => {
    render(<Footer />);
    expect(screen.getByText("PERSONAL PORTFOLIO")).toBeInTheDocument();
    expect(screen.getByText("CHIL DATA VISUALISATION")).toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Footer />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
