"use client";

import { useTheme } from "@/components/theme/ThemeProvider";
import { themeCopy } from "@/lib/theme-copy";
import { skillGroups, qualifications } from "@/lib/portfolio-data";
import { LEVEL_LABELS, sortByLevel, levelDotVar, levelTextVar } from "@/lib/skill-levels";

export function SkillsContent() {
  const { theme } = useTheme();
  const copy = themeCopy[theme];

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      <div
        className="mb-2.5 text-xs font-bold tracking-wider"
        style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
      >
        {copy.eyebrowPrefix}SKILLS
      </div>
      <h1 className="mb-3 text-3xl font-extrabold tracking-tight">スキル一覧</h1>
      <div className="mb-11 flex flex-wrap items-center gap-4">
        <span className="text-[13px]" style={{ color: "var(--text-muted)" }}>
          評価レベル:
        </span>
        {LEVEL_LABELS.map((l) => (
          <span key={l.level} className="inline-flex items-center gap-1.5 text-xs" style={{ color: "var(--text-secondary)" }}>
            <span className="h-[9px] w-[9px] rounded-full" style={{ background: levelDotVar(l.level) }} />
            {l.label}
          </span>
        ))}
      </div>

      <div className="grid gap-8">
        {skillGroups.map((g) => (
          <div key={g.name}>
            <h3
              className="mb-3.5 text-sm font-extrabold"
              style={{ fontFamily: theme === "terminal" ? "var(--font-mono)" : "var(--font-sans)", color: theme === "terminal" ? "var(--accent)" : "var(--text)" }}
            >
              {copy.headingPrefix}
              {g.name}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {sortByLevel(g.items).map((it) => (
                <div
                  key={it.label}
                  className="flex items-center gap-2 rounded-lg border px-3.5 py-2"
                  style={{ background: "var(--card)", borderColor: "var(--border)" }}
                >
                  <span
                    className="flex h-[19px] w-[19px] flex-none items-center justify-center rounded text-[11px] font-bold"
                    style={{
                      fontFamily: "var(--font-mono)",
                      background: levelDotVar(it.level),
                      color: levelTextVar(it.level),
                    }}
                  >
                    {it.level ?? "–"}
                  </span>
                  <span className="text-[13.5px] font-semibold">{it.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3
          className="mb-3.5 text-sm font-extrabold"
          style={{ fontFamily: theme === "terminal" ? "var(--font-mono)" : "var(--font-sans)", color: theme === "terminal" ? "var(--accent)" : "var(--text)" }}
        >
          {copy.headingPrefix}資格
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {qualifications.map((q) => (
            <span
              key={q}
              className="rounded-lg border px-4 py-2 text-[13px] font-semibold"
              style={{ background: "var(--accent-soft)", borderColor: "var(--border)", color: "var(--accent)" }}
            >
              {q}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
