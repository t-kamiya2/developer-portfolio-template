"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useTheme, type ThemePreference } from "@/components/theme/ThemeProvider";

const OPTIONS: { value: ThemePreference; label: string }[] = [
  { value: "pale", label: "ライト" },
  { value: "terminal", label: "ダーク" },
  { value: "system", label: "システム" },
];

function SunIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={18}
      height={18}
      className="absolute transition-transform duration-300 ease-out"
      style={style}
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={18}
      height={18}
      className="absolute transition-transform duration-300 ease-out"
      style={style}
      aria-hidden
    >
      <path d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 1 0 20.354 15.354z" />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, preference, setPreference } = useTheme();
  const isTerminal = theme === "terminal";
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleSelect = useCallback(
    (value: ThemePreference) => {
      setPreference(value);
      setOpen(false);
    },
    [setPreference],
  );

  return (
    <div className="theme-toggle relative ml-1" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        className="theme-toggle-trigger relative flex h-9 w-9 items-center justify-center rounded-md transition-colors"
        style={{ color: "var(--text)" }}
      >
        <span className="sr-only">テーマを切り替え</span>
        <SunIcon
          style={{
            opacity: isTerminal ? 0 : 1,
            transform: isTerminal ? "rotate(-90deg) scale(0.5)" : "rotate(0deg) scale(1)",
          }}
        />
        <MoonIcon
          style={{
            opacity: isTerminal ? 1 : 0,
            transform: isTerminal ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.5)",
          }}
        />
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          aria-label="テーマを選択"
          className="absolute right-0 z-10 mt-2 w-32 overflow-hidden rounded-lg border py-1 shadow-lg"
          style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}
        >
          {OPTIONS.map((option) => {
            const selected = preference === option.value;
            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => handleSelect(option.value)}
                className="theme-toggle-item flex w-full items-center justify-between px-3 py-2 text-left text-xs font-semibold transition-colors"
                style={{
                  color: selected ? "var(--accent)" : "var(--text)",
                  fontFamily: isTerminal ? "var(--font-mono)" : "var(--font-sans)",
                }}
              >
                {option.label}
                {selected && <span aria-hidden>✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
