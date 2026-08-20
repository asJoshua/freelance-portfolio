import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { GlassBtn } from "./GlassBtn";

describe("GlassBtn", () => {
  it("renders a real link when given a link, with the label as its accessible name", () => {
    render(<GlassBtn label="GitHub" link="https://github.com/asJoshua" newTab />);

    const link = screen.getByRole("link", { name: "GitHub" });
    expect(link).toHaveAttribute("href", "https://github.com/asJoshua");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });

  it("omits target/rel when newTab is not set", () => {
    render(<GlassBtn label="Home" link="/" />);

    const link = screen.getByRole("link", { name: "Home" });
    expect(link).not.toHaveAttribute("target");
  });

  it("renders a real, keyboard-activatable button when there is no link", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<GlassBtn label="Get in touch" onClick={onClick} />);

    const button = screen.getByRole("button", { name: "Get in touch" });
    button.focus();
    expect(button).toHaveFocus();

    await user.keyboard("{Enter}");
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("stays sized to its content (inline-flex) so a lone CTA outside a flex row doesn't stretch full-width", () => {
    render(<GlassBtn label="Get in touch" onClick={() => {}} />);
    expect(screen.getByRole("button", { name: "Get in touch" })).toHaveStyle({ display: "inline-flex" });
  });

  it("renders the primary variant with a solid accent background and white text (WCAG AA contrast)", () => {
    render(<GlassBtn label="Get in touch" onClick={() => {}} variant="primary" />);
    const button = screen.getByRole("button", { name: "Get in touch" });

    // --primaryText (#E6E0F2) only contrasts ~4.2:1 against --accent, short of
    // AA's 4.5:1 for normal text — the primary variant needs full white (~5.4:1).
    expect(button).toHaveStyle({ background: "var(--accent)", color: "#FFFFFF" });
  });

  it("defaults to the translucent glass variant", () => {
    render(<GlassBtn label="GitHub" link="https://github.com/asJoshua" />);
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveStyle({
      background: "rgba(255, 255, 255, 0.10)",
    });
  });

  it("has no accessibility violations as a link or a button", async () => {
    const { container: linkContainer } = render(
      <GlassBtn label="LinkedIn" link="https://www.linkedin.com/in/joshuasadleir/" newTab />
    );
    expect(await axe(linkContainer)).toHaveNoViolations();

    const { container: buttonContainer } = render(
      <GlassBtn label="Get in touch" onClick={() => {}} />
    );
    expect(await axe(buttonContainer)).toHaveNoViolations();
  });
});
