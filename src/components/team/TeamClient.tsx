// src/components/team/TeamClient.tsx
"use client";
import { useEffect, useMemo, useState } from "react";
import { FounderCard } from "@/components/team/FounderCard";
import { founders, mappedQuickTags, type QuickTag } from "@/data/founders";
import { QUICK_FILTERS } from "@/data/filters";
import { applyFilters, sortResults, type ActiveFilters, type SortMode } from "@/components/team/filters";
import { recipients, recipientsToFounders } from "@/data/recipients"; // falls vorhanden

export default function TeamClient() {
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [filters, setFilters] = useState<ActiveFilters>({ quick: [], reach: new Set(), has: {}, baseOnly: false });
  const [sortMode, setSortMode] = useState<SortMode>("relevance");

  useEffect(() => { const id = setTimeout(() => setDebounced(query), 200); return () => clearTimeout(id); }, [query]);

  const DATA = useMemo(() => {
    try { return [...founders, ...recipientsToFounders(recipients)]; } catch { return founders; }
  }, []);

  const rows = useMemo(() => sortResults(
    applyFilters(DATA, debounced, filters, mappedQuickTags),
    sortMode,
    debounced
  ), [DATA, debounced, filters, sortMode]);

  function toggleQuick(tag: QuickTag) {
    setFilters(prev => {
      const exists = prev.quick.includes(tag);
      const next = exists ? prev.quick.filter(x => x !== tag) : [...prev.quick, tag];
      return { ...prev, quick: next };
    });
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <h1 className="font-display text-xl sm:text-2xl mb-3">Founder Directory</h1>

        {/* Controls */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <div className="relative">
            <input
              value={query} onChange={(e)=>setQuery(e.target.value)}
              placeholder="Search founders…"
              className="w-64 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm outline-none focus:border-[var(--brand)] focus:ring-1 focus:ring-[var(--brand)]"
            />
            <span className="absolute -bottom-5 left-2 text-[11px] text-white/60">
              {rows.length} results
            </span>
          </div>

          <select value={sortMode} onChange={(e)=>setSortMode(e.target.value as SortMode)}
            className="rounded-full bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-[var(--brand)] focus:ring-1 focus:ring-[var(--brand)]">
            <option value="relevance">Relevance</option>
            <option value="az">A–Z</option>
          </select>
        </div>

        {/* Quick chips */}
        <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar">
          {QUICK_FILTERS.map(({ code, label }) => {
            const active = filters.quick.includes(code as QuickTag);
            return (
              <button key={code} onClick={()=>toggleQuick(code as QuickTag)}
                aria-pressed={active}
                className={`snap-start shrink-0 rounded-full border px-3 py-1.5 text-sm transition shadow-sm ${
                  active ? "bg-[--brand]/90 border-[var(--brand)] text-white"
                         : "bg-white/5 border-white/10 hover:bg-white/10 text-white/80 hover:text-white"
                }`}>
                {label}
              </button>
            );
          })}
          {filters.quick.length>0 && (
            <button onClick={()=>setFilters(f=>({ ...f, quick: [] }))}
              className="rounded-full border border-white/10 px-3 py-1.5 text-sm hover:bg-white/10">
              Clear
            </button>
          )}
        </div>

        {/* Secondary filters */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <fieldset className="card p-3">
            <legend className="text-xs text-white/60">Reach</legend>
            {(["very_high","high","medium"] as const).map(r => {
              const checked = filters.reach?.has(r);
              return (
                <label key={r} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={!!checked}
                    onChange={(e)=>{
                      setFilters(prev=>{
                        const next = new Set(prev.reach ?? new Set());
                        if (e.target.checked) next.add(r); else next.delete(r);
                        return { ...prev, reach: next };
                      });
                    }} />
                  <span>{r}</span>
                </label>
              );
            })}
          </fieldset>

          <fieldset className="card p-3">
            <legend className="text-xs text-white/60">Has</legend>
            {(["warpcast","x","website"] as const).map(k => (
              <label key={k} className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={!!(filters.has as any)?.[k]}
                  onChange={(e)=>{
                    setFilters(prev=> ({ ...prev, has: { ...(prev.has||{}), [k]: e.target.checked } }));
                  }} />
                <span>{k}</span>
              </label>
            ))}
          </fieldset>

          <fieldset className="card p-3">
            <legend className="text-xs text-white/60">Focus</legend>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={!!filters.baseOnly}
                onChange={(e)=> setFilters(prev => ({ ...prev, baseOnly: e.target.checked }))} />
              <span>Base-only</span>
            </label>
            <p className="text-xs text-white/50 mt-1">Current dataset is Base-only by design.</p>
          </fieldset>
        </div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {rows.length === 0 ? (
            <div className="col-span-full text-center text-white/60">No results. Try another search or clear filters.</div>
          ) : rows.map(f => <FounderCard key={f.handle} record={f} />)}
        </div>
      </div>
    </div>
  );
}
