import { ReactNode, useEffect } from "react";
import { theme } from "./theme";

type ThemeProviderProps = { children: ReactNode };

export function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    const root = document.documentElement;

    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

    Object.entries(theme.typography).forEach(([key, val]) => {
      if (typeof val === "object") {
        Object.entries(val).forEach(([prop, v]) => {
          root.style.setProperty(`--${key}-${prop}`, v as string);
        });
      } else {
        root.style.setProperty(`--${key}`, val as string);
      }
    });
  }, []);

  return <>{children}</>;
}
