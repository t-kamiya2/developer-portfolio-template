"use client";

import { useTheme } from "@/components/theme/ThemeProvider";
import { themeCopy } from "@/lib/theme-copy";
import { profile, stackHighlights } from "@/lib/portfolio-data";

export function About() {
  const { theme } = useTheme();
  const copy = themeCopy[theme];

  return (
    <div className="border-y" style={{ background: "var(--surface-alt)", borderColor: "var(--border)" }}>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 py-16 sm:px-8 md:grid-cols-[0.9fr_1.4fr]">
        <div>
          <div
            className="mb-2.5 text-xs font-bold tracking-wider"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
          >
            {copy.eyebrowPrefix}ABOUT
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight">スキル要約</h2>
        </div>
        <div className="grid gap-4">
          {profile.summary.map((p) => (
            <p key={p} className="text-[15px] leading-loose" style={{ color: "var(--text-secondary)" }}>
              {p}
            </p>
          ))}
          <div className="mt-2 flex flex-wrap gap-2">
            {stackHighlights.map((t) => (
              <span
                key={t}
                className="rounded-md border px-3 py-1.5 text-[12.5px] font-semibold"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "var(--accent-soft)",
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
