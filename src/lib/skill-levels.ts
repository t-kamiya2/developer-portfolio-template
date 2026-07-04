import type { SkillItem, SkillLevel } from "@/lib/portfolio-data";

export const ALL_STEPS = [
  "要件定義",
  "基本設計",
  "詳細設計",
  "製造・実装",
  "テスト",
  "保守・運用",
] as const;

const LEVEL_ORDER: Record<string, number> = { A: 0, B: 1, C: 2, D: 3, E: 4, null: 5 };

export const LEVEL_LABELS: { level: Exclude<SkillLevel, null>; label: string }[] = [
  { level: "A", label: "A: 独力遂行・後進教育" },
  { level: "B", label: "B: 独力遂行" },
  { level: "C", label: "C: 上位者指導のもと遂行" },
  { level: "D", label: "D: 実務を通じた学習経験" },
  { level: "E", label: "E: 学習経験あり" },
];

export function sortByLevel(items: SkillItem[]): SkillItem[] {
  return [...items].sort(
    (a, b) => (LEVEL_ORDER[a.level ?? "null"] ?? 5) - (LEVEL_ORDER[b.level ?? "null"] ?? 5)
  );
}

// Each level maps to a CSS custom property that resolves to a different
// color per [data-theme], so the badge markup stays theme-agnostic.
export function levelDotVar(level: SkillLevel): string {
  return `var(--level-${(level ?? "none").toLowerCase()})`;
}

export function levelTextVar(level: SkillLevel): string {
  return level ? "var(--level-text-on)" : "var(--level-text-off)";
}
