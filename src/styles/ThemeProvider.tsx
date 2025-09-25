import { ReactNode, useEffect } from "react";
import { theme } from "./theme";

type ThemeProviderProps = { children: ReactNode };

export function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    const root = document.documentElement;

    // ✅ Apply colors
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

    // ✅ Apply typography
    Object.entries(theme.typography).forEach(([key, val]) => {
      if (typeof val === "object") {
        // h1, h2, h3, etc.
        Object.entries(val).forEach(([prop, v]) => {
          root.style.setProperty(`--${key}-${prop}`, String(v));
        });
      } else {
        // fontFamily
        root.style.setProperty(`--${key}`, String(val));
      }
    });
  }, []);

  return <>{children}</>;
}
