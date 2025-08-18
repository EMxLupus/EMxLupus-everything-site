// src/components/site/LiveChart.tsx
const PAIR =
  "0xc79ed9fde05a9156cf3ac2b780241063e8a39480a046cc30a97d7904d6a696c5";

export function LiveChart() {
  const src = `https://dexscreener.com/base/${PAIR}?embed=1&theme=dark`;

  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-2">
      <div className="aspect-[16/7] overflow-hidden rounded-xl">
        <iframe
          src={src}
          loading="lazy"
          title="Dexscreener chart"
          className="h-full w-full"
          allow="clipboard-write"
        />
      </div>
      <p className="mt-2 px-1 text-[11px] text-white/50">
        Uniswap v4 · LP permalocked (lockbox)
      </p>
    </div>
  );
}

export default LiveChart;
