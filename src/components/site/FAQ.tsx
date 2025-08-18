// src/components/site/Faq.tsx
export type QA = { q: string; a: React.ReactNode };

const QA_ITEMS: QA[] = [
  {
    q: "How do I buy $EVERYTHING?",
    a: (
      <ol className="list-decimal pl-5 space-y-1">
        <li>Open your Base-compatible wallet.</li>
        <li>Go to the Flaunch page (link above) for launch details and the swap tool.</li>
        <li>Optionally open the Dexscreener chart (link above).</li>
        <li>Swap ETH for $EVERYTHING.</li>
        <li>Confirm the transaction and view the token in your wallet.</li>
      </ol>
    ),
  },
  {
    q: "What is Flaunch and how can I use it?",
    a: (
      <p>
        Flaunch is the platform used to deploy $EVERYTHING on Base. It provides a simple interface
        to buy and launch tokens, with integrated charts, swap tools, and launch details.
      </p>
    ),
  },
  {
    q: "Is the liquidity locked?",
    a: <p>Yes. Liquidity is permalocked in a v4 lockbox.</p>,
  },
  {
    q: "What is the 1% fee hook?",
    a: (
      <p>
        On every swap, a <strong>1% fee</strong> is routed by a hook to predefined wallets
        (creator/community recipients) on-chain and automatically. The split and recipients are
        configured at launch.
      </p>
    ),
  },
  {
    q: "Where can I follow updates?",
    a: <p>Follow on X/Twitter and Telegram. The Base App group chat is in beta.</p>,
  },
];

export default function Faq() {
  return (
    <div className="space-y-2">
      {QA_ITEMS.map((item, i) => (
        <details
          key={i}
          className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-3 open:bg-white/7 transition"
        >
          <summary className="cursor-pointer list-none text-lg font-medium leading-7">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden>▸</span>
              {item.q}
            </span>
          </summary>
          <div className="mt-2 text-sm text-[var(--muted)] space-y-2">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
