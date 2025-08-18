// src/components/site/Tokenomics.tsx
import { LINKS, CONTRACT, PAIR } from "@/lib/links";
import { CopyButton } from "@/components/site/CopyButton";

export function Tokenomics() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <Card title="Total supply">
        <b>100,000,000,000 $EVERYTHING</b>
      </Card>

      <Card title="Launch date">2 August</Card>

      <Card title="Launch method">
        <a
          href={LINKS.flaunch}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-transparent hover:decoration-white/50"
        >
          Fair launch via Flaunch
        </a>
      </Card>

      <Card title="Notes">
        No taxes, burns, or vesting are included.
      </Card>

      <Card title="Contract">
        <div className="flex flex-wrap items-center gap-2">
          <code className="text-xs opacity-90 break-all">{CONTRACT.addr}</code>
          <CopyButton text={CONTRACT.addr} />
          <a
            href={CONTRACT.basescan}
            target="_blank"
            rel="noreferrer"
            className="text-xs underline decoration-transparent hover:decoration-white/50"
          >
            View on BaseScan
          </a>
        </div>
      </Card>

      <Card title="Pair">
        <div className="flex flex-wrap items-center gap-2">
          <code className="text-xs opacity-90 break-all">{PAIR.addr}</code>
          <a
            href={LINKS.dexscreener}
            target="_blank"
            rel="noreferrer"
            className="text-xs underline decoration-transparent hover:decoration-white/50"
          >
            Open on Dexscreener
          </a>
        </div>
      </Card>
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm">
      <div className="text-sm text-[var(--muted)]">{title}</div>
      <div className="mt-1 text-sm">{children}</div>
    </div>
  );
}
