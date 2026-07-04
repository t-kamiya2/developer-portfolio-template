"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/theme/ThemeProvider";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { themeCopy } from "@/lib/theme-copy";
import { contact } from "@/lib/portfolio-data";

const links = [
  { href: "/", key: "home" as const },
  { href: "/career", key: "career" as const },
  { href: "/skills", key: "skills" as const },
];

export function Nav() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const copy = themeCopy[theme];
  const isTerminal = theme === "terminal";

  return (
    <div
      className="sticky top-0 z-50 backdrop-blur-md border-b"
      style={{ background: "var(--nav-bg)", borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4 sm:px-8">
        <Link href="/" className="flex items-baseline gap-2.5">
          <span
            className="font-extrabold tracking-tight"
            style={{
              fontSize: isTerminal ? "15px" : "17px",
              fontFamily: isTerminal ? "var(--font-mono)" : "var(--font-sans)",
              color: "var(--text)",
            }}
          >
            {copy.logo}
          </span>
          <span
            className="rounded px-1.5 py-0.5 font-semibold tracking-wide"
            style={{
              fontSize: "10px",
              fontFamily: "var(--font-mono)",
              color: "var(--accent-orange)",
              background: "var(--accent-orange-soft)",
            }}
          >
            SAMPLE
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {links.map(({ href, key }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors"
                style={{
                  color: active ? "var(--accent)" : "var(--text)",
                  fontFamily: isTerminal ? "var(--font-mono)" : "var(--font-sans)",
                }}
              >
                {copy.navLabels[key]}
              </Link>
            );
          })}
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-lg px-4 py-2 text-sm font-bold no-underline"
            style={{
              background: "var(--accent)",
              color: "var(--cta-text)",
              fontFamily: isTerminal ? "var(--font-mono)" : "var(--font-sans)",
            }}
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
