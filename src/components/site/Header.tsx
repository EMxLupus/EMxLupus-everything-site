// src/components/site/Header.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LINKS } from "@/lib/links";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Container } from "@/components/site/Container";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "How it works", href: "/#how" },
  { label: "Chart", href: "/#chart" },
  { label: "Team", href: "/team" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        shrink ? "backdrop-blur bg-black/40 shadow-soft" : "backdrop-blur-sm bg-black/30"
      }`}
      role="banner"
    >
      <Container
        className={`flex items-center justify-between transition-all duration-200 ${
          shrink ? "h-14 sm:h-16" : "h-20 sm:h-24"
        }`}
      >
        {/* Wordmark → Home */}
        <Link
          href="/"
          className="font-display text-lg tracking-wide hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
        >
          EVERYTHING
        </Link>

        {/* Desktop nav */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <nav className="hidden items-center gap-4 md:flex" aria-label="Primary">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm text-[var(--fg)]/80 hover:text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-white/40 rounded px-2 py-1"
              >
                {n.label}
              </Link>
            ))}

            <a
              href={LINKS.flaunch}
              target="_blank"
              rel="noreferrer"
              className="ml-2 rounded-xl bg-[var(--brand)] px-3 py-1.5 text-sm text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Buy on Flaunch
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            className="md:hidden rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Menu
          </button>
        </div>
      </Container>

      {/* Mobile sheet */}
      <div className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}>
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          aria-hidden
          onClick={() => setOpen(false)}
        />
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className={`absolute right-0 top-0 h-full w-72 border-l border-white/10 bg-[var(--bg)] p-5 shadow-xl transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>

          <nav className="mt-5 grid gap-2" aria-label="Mobile primary">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                {n.label}
              </Link>
            ))}

            <a
              href={LINKS.flaunch}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-xl bg-[var(--brand)] px-3 py-2 text-center text-sm text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Buy on Flaunch
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
