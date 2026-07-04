"use client";

import { useState } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { themeCopy } from "@/lib/theme-copy";
import { projects } from "@/lib/portfolio-data";
import { ALL_STEPS } from "@/lib/skill-levels";

export function CareerList() {
  const { theme } = useTheme();
  const copy = themeCopy[theme];
  const isTerminal = theme === "terminal";
  const [openIdxs, setOpenIdxs] = useState<Set<number>>(() => new Set([0]));

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      <div
        className="mb-2.5 text-xs font-bold tracking-wider"
        style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
      >
        {copy.eyebrowPrefix}CAREER
      </div>
      <h1 className="mb-3 text-3xl font-extrabold tracking-tight">職歴・プロジェクト経歴</h1>
      <p className="mb-3 text-sm" style={{ color: "var(--text-muted)" }}>
        直近から順に、担当プロジェクトを6件掲載しています。カードをクリックすると詳細が開きます。
      </p>
      <div className="mb-10 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => setOpenIdxs(new Set(projects.map((_, i) => i)))}
          className="cursor-pointer rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors"
          style={{
            borderColor: "var(--accent)",
            background: "var(--accent-soft)",
            color: "var(--accent)",
            fontFamily: isTerminal ? "var(--font-mono)" : "var(--font-sans)",
          }}
        >
          {copy.expandCollapseAll.expand}
        </button>
        <button
          type="button"
          onClick={() => setOpenIdxs(new Set())}
          className="cursor-pointer rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors"
          style={{
            borderColor: "var(--accent)",
            background: "var(--accent-soft)",
            color: "var(--accent)",
            fontFamily: isTerminal ? "var(--font-mono)" : "var(--font-sans)",
          }}
        >
          {copy.expandCollapseAll.collapse}
        </button>
      </div>

      <div className="grid gap-4">
        {projects.map((p, idx) => {
          const isOpen = openIdxs.has(idx);
          return (
            <div
              key={p.title}
              className="overflow-hidden rounded-2xl border"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <button
                type="button"
                onClick={() =>
                  setOpenIdxs((cur) => {
                    const next = new Set(cur);
                    if (next.has(idx)) {
                      next.delete(idx);
                    } else {
                      next.add(idx);
                    }
                    return next;
                  })
                }
                className="w-full cursor-pointer px-6 py-5 text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-xs font-semibold" style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}>
                    {p.period}
                  </div>
                  <div
                    className="text-xs font-bold"
                    style={{
                      fontFamily: isTerminal ? "var(--font-mono)" : "var(--font-sans)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {isOpen ? copy.toggleLabel.close : copy.toggleLabel.open}
                  </div>
                </div>
                <div className="my-2.5 text-lg font-extrabold leading-snug tracking-tight">{p.title}</div>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="rounded-md px-2.5 py-1 text-xs font-bold"
                    style={{ background: "var(--accent-purple-soft)", color: "var(--accent-purple)" }}
                  >
                    {p.role}
                  </span>
                  <span
                    className="rounded-md px-2.5 py-1 text-xs font-bold"
                    style={{ background: "var(--accent-orange-soft)", color: "var(--accent-orange)" }}
                  >
                    {p.scale}
                  </span>
                </div>
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {ALL_STEPS.map((label) => {
                    const active = p.process.includes(label);
                    return (
                      <span
                        key={label}
                        className="rounded-full px-2.5 py-1 text-[11px] font-bold"
                        style={{
                          background: active ? "var(--step-active-bg)" : "var(--step-inactive-bg)",
                          color: active ? "var(--step-active-text)" : "var(--step-inactive-text)",
                        }}
                      >
                        {label}
                      </span>
                    );
                  })}
                </div>
              </button>

              {isOpen && (
                <div className="border-t px-6 pb-6" style={{ borderColor: "var(--border)" }}>
                  <div className="my-[18px] flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border px-2.5 py-1 text-[11.5px] font-semibold"
                        style={{
                          fontFamily: "var(--font-mono)",
                          background: "var(--surface-2)",
                          borderColor: "var(--border)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mb-[18px] grid gap-2.5">
                    {p.body.map((b) => (
                      <div key={b} className="flex gap-2.5 text-sm leading-loose" style={{ color: "var(--text-secondary)" }}>
                        <span className="flex-none font-bold" style={{ color: "var(--accent)" }}>
                          {copy.bullet}
                        </span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg p-4" style={{ background: "var(--surface-2)" }}>
                    <div
                      className="mb-1.5 text-xs font-bold"
                      style={{
                        fontFamily: isTerminal ? "var(--font-mono)" : "var(--font-sans)",
                        color: isTerminal ? "var(--accent)" : "var(--text-muted)",
                      }}
                    >
                      {copy.eyebrowPrefix}まとめ
                    </div>
                    <div className="text-[13.5px] leading-loose" style={{ color: "var(--text-secondary)" }}>
                      {p.summary}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
