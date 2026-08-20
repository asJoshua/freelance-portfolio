import { scrollToSection } from "./scrollTo";

describe("scrollToSection", () => {
  it("smooth-scrolls to the element matching the selector", () => {
    document.body.innerHTML = '<div id="contact"></div>';
    const el = document.getElementById("contact")!;
    const scrollIntoView = jest.fn();
    el.scrollIntoView = scrollIntoView;

    scrollToSection("#contact");

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("does nothing when the selector matches no element", () => {
    document.body.innerHTML = "";
    expect(() => scrollToSection("#does-not-exist")).not.toThrow();
  });
});
