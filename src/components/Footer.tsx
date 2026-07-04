import { contact } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <div className="border-t" style={{ borderColor: "var(--border)", background: "var(--surface-alt)" }}>
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-5 px-6 py-9 sm:px-8">
        <div className="max-w-prose text-[13px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {contact.note}
        </div>
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="text-[13px] font-bold no-underline"
          style={{ color: "var(--text)" }}
        >
          GitHub ↗
        </a>
      </div>
    </div>
  );
}
