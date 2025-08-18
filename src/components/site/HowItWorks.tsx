// src/components/site/HowItWorks.tsx
export function HowItWorks() {
  const items = [
    {
      title: "1% fee hook",
      body:
        "Every swap streams 1% to +100 founder wallets, on-chain and automatic.",
    },
    {
      title: "Rug-proof liquidity",
      body: "LP is permalocked in a v4 lockbox.",
    },
    {
      title: "From chat to chain",
      body: "Born in a Base App group chat.",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {items.map((it, i) => (
        <div
          key={i}
          className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm"
        >
          <h3 className="font-medium">{it.title}</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">{it.body}</p>
        </div>
      ))}
    </div>
  );
}
