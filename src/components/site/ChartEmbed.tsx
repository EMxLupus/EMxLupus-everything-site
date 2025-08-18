export default function ChartEmbed() {
  return (
    <section id="chart" aria-labelledby="chart-title" className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 id="chart-title" className="text-lg font-semibold tracking-tight mb-3">
          Live Chart
        </h2>
        <p className="text-white/70 text-sm mb-4">Uniswap v4 · LP permalocked (lockbox)</p>
        <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
          <iframe
            src="https://dexscreener.com/base/0xc79ed9fde05a9156cf3ac2b780241063e8a39480a046cc30a97d7904d6a696c5?embed=1&theme=dark"
            loading="lazy"
            className="h-full w-full"
            title="Dexscreener chart"
          />
        </div>
      </div>
    </section>
  );
}
