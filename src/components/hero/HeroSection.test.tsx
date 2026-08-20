import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { HeroSection } from "./HeroSection";

describe("HeroSection", () => {
  it("leads with the hospitality/ops positioning, not a generic full-stack tagline", () => {
    render(<HeroSection />);
    expect(screen.getByRole("heading", { name: /hospitality/i })).toBeInTheDocument();
    expect(screen.queryByText(/^Full-Stack Developer$/)).not.toBeInTheDocument();
  });

  it("mentions being bilingual only briefly, not as the lead message", () => {
    render(<HeroSection />);
    expect(screen.getByText(/english and spanish/i)).toBeInTheDocument();
  });

  it("has a primary CTA that scrolls to the contact section", async () => {
    document.body.innerHTML = '<div id="contact"></div>';
    const scrollIntoView = jest.fn();
    document.getElementById("contact")!.scrollIntoView = scrollIntoView;

    const user = userEvent.setup();
    render(<HeroSection />);

    await user.click(screen.getByRole("button", { name: /get in touch/i }));
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("still exposes GitHub, LinkedIn, and CV links", () => {
    render(<HeroSection />);
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/asJoshua"
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/joshuasadleir/"
    );
    expect(screen.getByRole("link", { name: "CV" })).toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<HeroSection />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
