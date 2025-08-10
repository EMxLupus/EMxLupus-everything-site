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
    } catch (_) {}
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top-Navigation (minimal, Hub kommt gleich als Seite) */}
      <nav className="mx-auto max-w-5xl px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="/" className="text-lg font-bold tracking-tight">Everything</a>
        <div className="flex items-center gap-4 text-sm text-white/70">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/hub" className="hover:text-white">Hub</a>
        </div>
      </nav>

      {/* HERO mit Banner-Hintergrund */}
      <section
        className="mx-auto max-w-5xl px-6 md:px-10 mb-8 md:mb-12 rounded-3xl overflow-hidden border border-white/10"
        style={{
          backgroundImage: 'url(/og-banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="backdrop-brightness-[.4] bg-black/40">
          <div className="py-10 md:py-14">
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

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-full border border-white/30 px-4 py-2 no-underline hover:bg-white/10"
                href="https://dexscreener.com/base/0xc79ed9fde05a9156cf3ac2b780241063e8a39480a046cc30a97d7904d6a696c5"
                target="_blank" rel="noopener noreferrer"
              >
                View on Dexscreener ↗
              </a>

              {/* Open Chart entfernt */}

              <a
                className="rounded-full border border-white/30 px-4 py-2 no-underline hover:bg-white/10"
                href="https://x.com/base4everything" target="_blank" rel="noopener noreferrer"
              >
                X / Twitter
              </a>

              <a
                className="rounded-full border border-white/30 px-4 py-2 no-underline hover:bg-white/10"
                href="https://t.me/baseisforeverything" target="_blank" rel="noopener noreferrer"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Flaunch – eingebettet */}
      <section className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="w-full h-[80vh] rounded-2xl border border-white/10 overflow-hidden">
          <iframe
            src="https://flaunch.gg/base/coin/0x3524ad09fdfd45811fa69d330194419e05376015"
            title="Flaunch • Everything"
            className="w-full h-full"
            frameBorder="0"
            referrerPolicy="no-referrer"
            allow="clipboard-write; encrypted-media;"
          ></iframe>
        </div>

        {/* Fallback-Link, falls Einbettung blockiert wird */}
        <p className="text-xs text-white/40 mt-3">
          If the embed doesn’t load, open&nbsp;
          <a className="underline hover:text-white" target="_blank" rel="noopener noreferrer"
             href="https://flaunch.gg/base/coin/0x3524ad09fdfd45811fa69d330194419e05376015">
            Flaunch in a new tab ↗
          </a>
        </p>
      </section>

      <footer className="mx-auto max-w-5xl px-6 md:px-10 mt-14 mb-10 text-xs text-white/40">
        © 2025 Everything — an experiment on Base.
      </footer>
    </main>
  );
}
