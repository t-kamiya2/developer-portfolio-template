"use client";

import { useTheme } from "@/components/theme/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isTerminal = theme === "terminal";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="ml-1 flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold transition-colors"
      style={{
        borderColor: "var(--border)",
        background: "var(--surface-2)",
        color: "var(--text)",
        fontFamily: isTerminal ? "var(--font-mono)" : "var(--font-sans)",
      }}
    >
      <span aria-hidden>{isTerminal ? "🌙" : "☀️"}</span>
      {isTerminal ? "terminal" : "pale"}
    </button>
  );
}
