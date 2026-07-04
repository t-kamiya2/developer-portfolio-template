"use client";

import Link from "next/link";
import { useTheme } from "@/components/theme/ThemeProvider";
import { themeCopy } from "@/lib/theme-copy";
import { profile } from "@/lib/portfolio-data";

const ctaButtonStyle = (bg: string, color: string, mono: boolean): React.CSSProperties => ({
  background: bg,
  color,
  fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
});

export function Hero() {
  const { theme } = useTheme();
  const copy = themeCopy[theme];
  const isTerminal = theme === "terminal";

  const eyebrow = (
    <div
      className="mb-4 text-xs font-bold tracking-wider"
      style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
    >
      {copy.eyebrowPrefix}FULL-STACK ENGINEER
    </div>
  );

  const headline = (
    <h1
      className="mb-5 font-extrabold tracking-tight"
      style={{ fontSize: isTerminal ? 48 : 46, lineHeight: 1.27 }}
    >
      要件定義から運用まで、
      <br />
      一貫して任せられる
      <br />
      エンジニアです。
    </h1>
  );

  const tagline = (
    <p
      className="mb-8 max-w-[46ch] text-base leading-loose"
      style={{ color: "var(--text-secondary)" }}
    >
      {profile.tagline}
    </p>
  );

  const ctas = (
    <div className="mb-14 flex flex-wrap gap-3">
      <Link
        href="/career"
        className="rounded-lg px-6 py-3.5 text-sm font-bold no-underline"
        style={ctaButtonStyle("var(--accent)", "var(--cta-text)", isTerminal)}
      >
        経歴を見る →
      </Link>
      <Link
        href="/skills"
        className="rounded-lg border px-6 py-3.5 text-sm font-bold no-underline"
        style={{
          borderColor: "var(--border)",
          background: isTerminal ? "transparent" : "var(--card)",
          color: "var(--text)",
          fontFamily: isTerminal ? "var(--font-mono)" : "var(--font-sans)",
        }}
      >
        スキル一覧
      </Link>
    </div>
  );

  if (isTerminal) {
    return (
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-20 sm:px-8 sm:pt-24">
        {eyebrow}
        {headline}
        {tagline}
        {ctas}
        <div
          className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border"
          style={{ background: "var(--border)", borderColor: "var(--border)" }}
        >
          <div className="p-6" style={{ background: "var(--card)" }}>
            <div className="font-bold" style={{ fontFamily: "var(--font-mono)", fontSize: 30, color: "var(--accent)" }}>
              {profile.years}
            </div>
            <div className="mt-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
              開発経験
            </div>
          </div>
          <div className="p-6" style={{ background: "var(--card)" }}>
            <div className="font-bold" style={{ fontFamily: "var(--font-mono)", fontSize: 30, color: "var(--accent-orange)" }}>
              {copy.projectStat2}
            </div>
            <div className="mt-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
              主要プロジェクト
            </div>
          </div>
          <div className="p-6" style={{ background: "var(--card)" }}>
            <div className="font-bold" style={{ fontFamily: "var(--font-mono)", fontSize: 20, color: "var(--accent-purple)" }}>
              Full-stack
            </div>
            <div className="mt-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
              要件定義〜保守運用
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-20 sm:px-8 sm:pt-24 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
      <div>
        {eyebrow}
        {headline}
        {tagline}
        {ctas}
      </div>
      <div className="grid gap-3.5">
        <div className="rounded-2xl border p-6" style={{ background: "var(--accent-soft)", borderColor: "var(--border)" }}>
          <div className="text-[34px] font-extrabold tracking-tight" style={{ color: "var(--accent)" }}>
            {profile.years}
          </div>
          <div className="mt-1 text-[13px]" style={{ color: "var(--text-muted)" }}>
            開発経験
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3.5">
          <div className="rounded-2xl border p-5" style={{ background: "var(--accent-orange-soft)", borderColor: "var(--border)" }}>
            <div className="text-2xl font-extrabold" style={{ color: "var(--accent-orange)" }}>
              {copy.projectStat2}
            </div>
            <div className="mt-0.5 text-xs" style={{ color: "var(--text-muted)" }}>
              主要プロジェクト
            </div>
          </div>
          <div className="rounded-2xl border p-5" style={{ background: "var(--accent-purple-soft)", borderColor: "var(--border)" }}>
            <div className="text-2xl font-extrabold" style={{ color: "var(--accent-purple)" }}>
              Full-stack
            </div>
            <div className="mt-0.5 text-xs" style={{ color: "var(--text-muted)" }}>
              要件定義〜保守運用
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
