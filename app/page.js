'use client';
import { useState } from 'react';

export default function Home() {
  const contract = '0x3524AD09FdFD45811FA69d330194419e05376015';
  const [copied, setCopied] = useState(false);

  async function copyContract() {
    try {
      await navigator.clipboard.writeText(contract);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  // Falls du kein hero-banner.jpg abgelegt hast, nutzen wir og-banner.jpg
  const heroSrc = "/hero-banner.jpg"; // ersatzweise /og-banner.jpg

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Minimaler Header */}
      <nav className="mx-auto max-w-5xl px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="/" className="text-lg font-bold tracking-tight">Everything</a>
        <div className="flex items-center gap-4 text-sm text-white/70">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/hub" className="hover:text-white">Hub</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="mx-auto max-w-5xl px-0 md:px-0 mb-8 md:mb-12 rounded-3xl overflow-hidden border border-white/10"
        style={{
  backgroundImage: 'url(/hero-banner.jpg), url(/og-banner.jpg)',
  backgroundSize: 'cover, cover',
  backgroundPosition: 'center, center'
}}

      >
        <div className="backdrop-brightness-[.45] bg-black/45">
          <div className="px-6 md:px-10 py-10 md:py-14">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">Everything</h1>
            <p className="text-white/80 mt-2">on Base Chain</p>

            <p className="mt-6 text-white/90">+100 Wallets, One Story</p>

            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-white/80">
              <span>Contract:</span>
              <span className="font-mono break-all">{contract}</span>
              <button
                onClick={copyContract}
                className="ml-1 rounded-full border border-white/30 px-3 py-1 hover:bg-white/10"
                title="Copy to clipboard"
              >
                {copied ? 'Copied ✓' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GROẞE, FARBIGE BUTTONS – Reihenfolge: X, Telegram, Dexscreener, Flaunch */}
      <section className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href="https://x.com/base4everything" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-4 text-base font-semibold
                       bg-neutral-900 hover:bg-neutral-800 transition border border-white/15"
            aria-label="X / Twitter"
          >
            X / Twitter ↗
          </a>

          <a
            href="https://t.me/baseisforeverything" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-4 text-base font-semibold
                       bg-sky-600 hover:bg-sky-500 transition border border-white/15"
            aria-label="Telegram"
          >
            Telegram ↗
          </a>

          <a
            href="https://dexscreener.com/base/0xc79ed9fde05a9156cf3ac2b780241063e8a39480a046cc30a97d7904d6a696c5"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-4 text-base font-semibold
                       bg-emerald-600 hover:bg-emerald-500 transition border border-white/15"
            aria-label="Dexscreener"
          >
            Dexscreener ↗
          </a>

          <a
            href="https://flaunch.gg/base/coin/0x3524ad09fdfd45811fa69d330194419e05376015"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-4 text-base font-semibold
                       bg-blue-600 hover:bg-blue-500 transition border border-white/15"
            aria-label="Flaunch"
          >
            Flaunch ↗
          </a>
        </div>
      </section>

      {/* LIVE CHART */}
      <section className="mx-auto max-w-5xl px-6 md:px-10 mt-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">Live Chart</h2>
        <div className="w-full h-[85vh] rounded-2xl border border-white/10 overflow-hidden">
          <iframe
            src="https://dexscreener.com/base/0xc79ed9fde05a9156cf3ac2b780241063e8a39480a046cc30a97d7904d6a696c5?embed=1&theme=dark"
            title="Dexscreener Chart"
            className="w-full h-full"
            frameBorder="0"
            allow="clipboard-write; encrypted-media;"
          ></iframe>
        </div>
      </section>

      {/* BESCHREIBUNG */}
      <section className="mx-auto max-w-5xl px-6 md:px-10 mt-10">
        <h3 className="text-lg font-semibold mb-2">+100 Wallets, One Story</h3>
        <p className="text-white/80 leading-relaxed">
          An experiment on the Base chain: the first coin born in a Base App group chat.
          Everything else, we write together.
        </p>
      </section>

      <footer className="mx-auto max-w-5xl px-6 md:px-10 mt-14 mb-10 text-xs text-white/40">
        © 2025 Everything — an experiment on Base.
      </footer>
    </main>
  );
}
