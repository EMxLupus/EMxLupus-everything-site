// src/components/site/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LINKS, CONTRACT } from "@/lib/links";
import { CopyButton } from "@/components/site/CopyButton";
import { Container } from "@/components/site/Container";

export default function Hero() {
  // fade out the hero as you scroll the first ~360px
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const threshold = 360; // px to fully fade
      const next = Math.max(0, Math.min(1, 1 - y / threshold));
      setOpacity(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="relative isolate overflow-hidden" style={{ opacity }}>
      {/* Background image (your collage banner) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/img/optimized/hero.jpg"
          alt="Base is for EVERYTHING - community collage"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/55 to-[var(--bg)]" />
      </div>

      {/* etwas mehr top-padding, damit der Header nichts abdeckt */}
      <Container className="pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            BASE IS FOR <span className="text-[var(--brand)]">$EVERYTHING</span>
          </h1>

          <p className="mt-4 text-[var(--muted)]">
            +100 wallets, one story. A Base-chain experiment with permalocked LP and a 1% hook
            streaming to founders on every swap.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={LINKS.flaunch}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-[var(--brand)] text-white px-4 py-2 text-sm shadow-sm hover:opacity-90 transition"
            >
              Buy on Flaunch
            </a>
            <a
              href="/#chart"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
            >
              Open chart
            </a>
          </div>

          {/* Contract chip */}
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1">
              Contract: <code className="opacity-90">{CONTRACT.addr}</code>
            </span>
            <CopyButton text={CONTRACT.addr} />
          </div>
        </div>
      </Container>
    </section>
  );
}
