export const metadata = { title: "Chart • Everything" };

export default function ChartPage() {
  const src = "https://dexscreener.com/base/0xc79ed9fde05a9156cf3ac2b780241063e8a39480a046cc30a97d7904d6a696c5?embed=1&theme=dark";
  return (
    <main className="min-h-screen bg-black text-white mx-auto max-w-5xl p-4 md:p-8 space-y-6">
      <h1 className="text-2xl md:text-4xl font-semibold">Everything • Chart</h1>
      <div className="w-full h-[70vh]">
        <iframe
          src={src}
          title="Dexscreener Chart"
          className="w-full h-full rounded-2xl border border-white/10"
          frameBorder="0"
          allow="clipboard-write; encrypted-media;"
        ></iframe>
      </div>
    </main>
  );
}
