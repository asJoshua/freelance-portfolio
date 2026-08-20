import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { CtaBanner } from "./CtaBanner";

describe("CtaBanner", () => {
  it("renders a heading and a primary CTA that scrolls to the contact section", async () => {
    document.body.innerHTML = '<div id="contact"></div>';
    const scrollIntoView = jest.fn();
    document.getElementById("contact")!.scrollIntoView = scrollIntoView;

    const user = userEvent.setup();
    render(<CtaBanner />);

    expect(screen.getByRole("heading")).toBeInTheDocument();

    const cta = screen.getByRole("button", { name: /get in touch/i });
    await user.click(cta);

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<CtaBanner />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
