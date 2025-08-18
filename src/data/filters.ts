// src/data/filters.ts
export type QuickFilter = { code: string; label: string };

export const QUICK_FILTERS: QuickFilter[] = [
  { code: "dev/engineer",     label: "🧑‍💻 dev/engineer" },
  { code: "product/founder",  label: "🧭 product/founder" },
  { code: "designer/artist",  label: "🎨 designer/artist" },
  { code: "research/analyst", label: "📊 research/analyst" },
  { code: "community/raider", label: "📣 community/raider" },
  { code: "content/writer",   label: "✍️ content/writer" },
  { code: "trader/liquidity", label: "💧 trader/liquidity" },
  { code: "tool/agent",       label: "🤖 tool/agent" },
  { code: "base core",        label: "🧊 base core" },
  { code: "og/advisor",       label: "⭐ og/advisor" },
];
