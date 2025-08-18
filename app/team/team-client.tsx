"use client";

import { useEffect, useMemo, useState } from "react";
import { FounderCard } from "@/components/team/FounderCard";
import { founders, mappedQuickTags, type QuickTag } from "@/data/founders";
import { QUICK_FILTERS } from "@/data/filters";
import {
  applyFilters,
  sortResults,
  type ActiveFilters,
  type SortMode,
} from "@/components/team/filters";
import { useTheme } from "@/lib/theme";
import {
  filter_add,
  filter_remove,
  search_change,
  sort_change,
} from "@/lib/analytics";
import { recipients, recipientsToFounders } from "@/data/recipients";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function TeamClient() {
  // Theme wird mitgeführt, damit ThemeToggle sauber mountet
  const [/*theme*/] = useTheme();

  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [filters, setFilters] = useState<ActiveFilters>({ quick: [] });
  const [sortMode, setSortMode] = useState<SortMode>("relevance");

  // Debounce Suche (200 ms)
  useEffect(() => {
    const id = setTimeout(() => setDebounced(query), 200);
    return () => clearTimeout(id);
  }, [query]);
  useEffect(() => {
    search_change(debounced);
  }, [debounced]);

  // Designfarben (CSS Custom Properties)
  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--bg", "#0B0F1A");
    r.setProperty("--fg", "#E6EAF2");
    r.setProperty("--muted", "#9AA3B2");
    r.setProperty("--brand", "#0052FF");
    r.setProperty("--accent", "#22FF88");
  }, []);

  // Merge Founders + Recipients (und Duplikate nach handle entfernen)
  const DATA = useMemo(() => {
    const list = [...founders, ...recipientsToFounders(recipients)];
    const seen = new Map<string, (typeof list)[number]>();
    for (const f of list) {
      if (!seen.has(f.handle)) seen.set(f.handle, f);
    }
    return Array.from(seen.values());
  }, []);

  const rows = useMemo(() => {
    const r = applyFilters(DATA, debounced, filters, mappedQuickTags);
    return sortResults(r, sortMode);
  }, [DATA, debounced, filters, sortMode]);

  function toggleQuick(tag: QuickTag) {
    setFilters((prev) => {
      const exists = prev.quick.includes(tag);
      const next = exists
        ? prev.quick.filter((x) => x !== tag)
        : [...prev.quick, tag];
      (exists ? filter_remove : filter_add)(tag);
      return { ...prev, quick: next };
    });
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] transition-colors duration-200">
      {/* ---------- Header (Top-Bar + Filterzeile) ---------- */}
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
        {/* Top-Bar */}
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-3">
          <h1 className="text-lg font-semibold tracking-tight">
            Founder Directory
          </h1>

          {/* Suche */}
          <div className="relative ml-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search founders…"
              aria-label="Search founders"
              className="w-48 sm:w-64 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm outline-none focus:border-[var(--brand)] focus:ring-1 focus:ring-[var(--brand)]"
            />
            <span
              className="absolute -bottom-5 left-2 text-[11px] text-[var(--muted)]"
              aria-live="polite"
            >
              {rows.length} results
            </span>
          </div>

          {/* Sortierung */}
          <select
            value={sortMode}
            onChange={(e) => {
              const m = e.target.value as SortMode;
              setSortMode(m);
              sort_change(m);
            }}
            aria-label="Sort results"
            className="ml-auto rounded-full bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-[var(--brand)] focus:ring-1 focus:ring-[var(--brand)]"
          >
            <option value="relevance">Relevance</option>
            <option value="az">A–Z</option>
          </select>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Quick-Chips Zeile */}
        <div className="mx-auto max-w-5xl px-4 pb-3 flex items-center justify-between">
          <div
            className="flex gap-2 overflow-x-auto no-scrollbar snap-x"
            role="toolbar"
            aria-label="Quick filters"
          >
            {QUICK_FILTERS.map(({ code, label }) => {
              const active = filters.quick.includes(code);
              return (
                <button
                  key={code}
                  onClick={() => toggleQuick(code)}
                  className={`snap-start shrink-0 rounded-full border px-3 py-1.5 text-sm transition shadow-sm ${
                    active
                      ? "bg-[--brand]/90 border-[var(--brand)] text-white"
                      : "bg-white/5 border-white/10 hover:bg-white/10 text-white/80 hover:text-white"
                  }`}
                  aria-pressed={active}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {filters.quick.length > 0 && (
            <button
              onClick={() => setFilters({ quick: [] })}
              className="shrink-0 rounded-full border border-white/10 px-3 py-1.5 text-sm hover:bg-white/10"
              aria-label="Clear active filters"
            >
              Clear
            </button>
          )}
        </div>
      </header>

      {/* ---------- Grid ---------- */}
      <main className="mx-auto max-w-5xl px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {rows.length === 0 ? (
          <div className="col-span-full text-center text-[var(--muted)]">
            No results. Try another search or clear filters.
          </div>
        ) : (
          rows.map((f) => <FounderCard key={f.handle} record={f} />)
        )}
      </main>
    </div>
  );
}
