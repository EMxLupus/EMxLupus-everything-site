// src/components/site/QuickActions.tsx
import { LINKS } from "@/lib/links";

type Item = {
  key: "x" | "tg" | "flaunch" | "dex";
  href: string;
  title: string;
  subtitle?: string;
  className: string;
};

const ITEMS: Item[] = [
  {
    key: "x",
    href: LINKS.x,
    title: "X / Twitter",
    subtitle: "@base4everything",
    className:
      "bg-black text-white border-white/20 hover:shadow-[0_0_24px_rgba(255,255,255,.12)]",
  },
  {
    key: "tg",
    href: LINKS.tg,
    title: "Telegram",
    subtitle: "Join the chat",
    className:
      "bg-[#229ED9]/10 text-white border-[#229ED9]/30 hover:bg-[#229ED9]/15 hover:shadow-[0_0_24px_rgba(34,158,217,.25)]",
  },
  {
    key: "flaunch",
    href: LINKS.flaunch,
    title: "Flaunch",
    subtitle: "Buy / launch details",
    className:
      "bg-[var(--brand)]/15 text-white border-[var(--brand)]/40 hover:bg-[var(--brand)]/25 hover:shadow-[0_0_24px_rgba(0,82,255,.25)]",
  },
  {
    key: "dex",
    href: LINKS.dexscreener,
    title: "Dexscreener",
    subtitle: "Open the chart",
    className:
      "bg-emerald-400/10 text-white border-emerald-400/30 hover:bg-emerald-400/15 hover:shadow-[0_0_24px_rgba(52,211,153,.25)]",
  },
];

function Tile({ href, title, subtitle, className }: Item) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group rounded-2xl border p-4 shadow-sm transition will-change-transform hover:-translate-y-0.5 ${className}`}
      aria-label={subtitle ? `${title} – ${subtitle}` : title}
    >
      <div className="text-base font-medium">{title}</div>
      {subtitle && <div className="mt-1 text-sm text-[var(--muted)]">{subtitle}</div>}
      <div className="mt-3 text-xs text-[var(--muted)] group-hover:text-[var(--fg)]">Open ↗</div>
    </a>
  );
}

export function QuickActions() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {ITEMS.map((it) => (
        <Tile key={it.key} {...it} />
      ))}
    </div>
  );
}
