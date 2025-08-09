export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white mx-auto max-w-3xl p-6 md:p-10">
      <header className="mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Everything</h1>
        <p className="text-white/70 mt-2">on Base Chain</p>
      </header>

      <section className="space-y-4">
        <p className="text-white/80">+100 Wallets, One Story</p>
        <p className="text-xs text-white/60">
          Contract: <span className="font-mono">0x3524AD09FdFD45811FA69d330194419e05376015</span>
        </p>

        <div className="flex flex-wrap gap-3">
          <a className="rounded-full border border-white/20 px-4 py-2 no-underline hover:bg-white/10"
             href="https://dexscreener.com/base/0xc79ed9fde05a9156cf3ac2b780241063e8a39480a046cc30a97d7904d6a696c5"
             target="_blank" rel="noopener noreferrer">View on Dexscreener ↗</a>

          <a href="/chart"
             className="rounded-full border border-white/20 px-4 py-2 no-underline hover:bg-white/10">Open Chart</a>

          <a className="rounded-full border border-white/20 px-4 py-2 no-underline hover:bg-white/10"
             href="https://x.com/base4everything" target="_blank" rel="noopener noreferrer">X / Twitter</a>

          <a className="rounded-full border border-white/20 px-4 py-2 no-underline hover:bg-white/10"
             href="https://t.me/baseisforeverything" target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
      </section>

      <footer className="mt-16 text-xs text-white/40">
        <p>© 2025 Everything — an experiment on Base.</p>
      </footer>
    </main>
  );
}
