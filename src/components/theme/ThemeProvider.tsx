"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { ThemeId } from "@/lib/theme-copy";

const STORAGE_KEY = "portfolio-theme";

export type ThemePreference = ThemeId | "system";

interface ThemeContextValue {
  /** Resolved theme actually applied to the page (system is resolved to pale/terminal). */
  theme: ThemeId;
  /** Raw user choice, including "system". */
  preference: ThemePreference;
  setPreference: (preference: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>("pale");
  const [prefersDark, setPrefersDark] = useState(false);

  useEffect(() => {
    // Reads client-only values (localStorage, matchMedia) after mount, so the
    // initial render matches SSR output and only updates once hydration is safe.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "pale" || stored === "terminal" || stored === "system") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPreferenceState(stored);
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setPrefersDark(media.matches);
    const handleChange = (event: MediaQueryListEvent) => setPrefersDark(event.matches);
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const theme: ThemeId = preference === "system" ? (prefersDark ? "terminal" : "pale") : preference;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const setPreference = useCallback((next: ThemePreference) => {
    setPreferenceState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, preference, setPreference }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
