"use client";

import Link from "next/link";
import { useTheme } from "@/components/theme/ThemeProvider";
import { themeCopy } from "@/lib/theme-copy";
import { projects } from "@/lib/portfolio-data";

export function CareerPreview() {
  const { theme } = useTheme();
  const copy = themeCopy[theme];
  const isTerminal = theme === "terminal";

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
      <div className="mb-7 flex items-baseline justify-between">
        <div>
          <div
            className="mb-2.5 text-xs font-bold tracking-wider"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
          >
            {copy.eyebrowPrefix}CAREER
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight">職歴・プロジェクト経歴</h2>
        </div>
        <Link
          href="/career"
          className="text-[13px] font-bold no-underline"
          style={{
            color: "var(--accent)",
            fontFamily: isTerminal ? "var(--font-mono)" : "var(--font-sans)",
          }}
        >
          すべて見る →
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.title}
            href="/career"
            className="rounded-xl border p-5 no-underline"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <div
              className="mb-2 text-[11.5px] font-semibold"
              style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
            >
              {p.period}
            </div>
            <div className="mb-2.5 text-sm font-bold leading-snug" style={{ color: "var(--text)" }}>
              {p.title}
            </div>
            <div className="text-xs" style={{ color: "var(--text-muted)" }}>
              {p.role} ・ {p.scale}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
