"use client";

import { useTheme } from "@/components/theme/ThemeProvider";
import { themeCopy } from "@/lib/theme-copy";
import { strengths } from "@/lib/portfolio-data";

export function Strengths() {
  const { theme } = useTheme();
  const copy = themeCopy[theme];
  const isTerminal = theme === "terminal";

  return (
    <div className="mx-auto max-w-5xl px-6 pb-16 pt-6 sm:px-8">
      <div
        className="mb-2.5 text-xs font-bold tracking-wider"
        style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
      >
        {copy.eyebrowPrefix}STRENGTHS
      </div>
      <h2 className="mb-7 text-2xl font-extrabold tracking-tight">3つの強み</h2>
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-3">
        {strengths.map((s, i) => (
          <div
            key={s.title}
            className="rounded-xl border p-6"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            {isTerminal ? (
              <div
                className="mb-4 font-bold"
                style={{ fontFamily: "var(--font-mono)", fontSize: 20, color: "var(--accent)" }}
              >
                {copy.strengthIndex(i)}
              </div>
            ) : (
              <div
                className="mb-4 flex h-[34px] w-[34px] items-center justify-center rounded-lg text-[15px] font-extrabold"
                style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
              >
                {copy.strengthIndex(i)}
              </div>
            )}
            <div className="mb-2 text-base font-bold">{s.title}</div>
            <div className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {s.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
