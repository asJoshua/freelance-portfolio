import { render, screen } from "@testing-library/react";
import AppRoutes from "./AppRouter";

const renderAtPath = (path: string) => {
  window.history.pushState({}, "", path);
  return render(<AppRoutes />);
};

describe("AppRoutes", () => {
  it("renders Home at /", () => {
    renderAtPath("/");
    expect(screen.getByRole("heading", { level: 1, name: /joshua sadleir/i })).toBeInTheDocument();
  });

  it("renders the case study page at /projects/:id", () => {
    renderAtPath("/projects/chil-data-app");
    expect(screen.getByRole("heading", { level: 1, name: /chil data app/i })).toBeInTheDocument();
  });

  it("redirects an unknown path back to home", () => {
    renderAtPath("/this-route-does-not-exist");
    expect(screen.getByRole("heading", { level: 1, name: /joshua sadleir/i })).toBeInTheDocument();
  });
});
