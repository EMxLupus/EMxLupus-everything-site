// src/components/team/filters.ts
import type { Founder } from "@/data/founders";
import { mappedQuickTags } from "@/data/founders";

export type SortMode = "relevance" | "az";
export type ActiveFilters = {
  quick: string[];
  reach?: Set<"very_high" | "high" | "medium">;
  has?: { warpcast?: boolean; x?: boolean; website?: boolean };
  baseOnly?: boolean; // vorerst false für alle Datensätze
};

const norm = (s: string) => (s || "").toLowerCase();
const hasAnyLink = (f: Founder) => !!(f.links?.warpcast || f.links?.x || f.links?.website);
const isPlainWalletLike = (f: Founder) => f.handle.startsWith("0x") || f.handle.includes("…");

function roleWeights(f: Founder) {
  const t = new Set(f.tags || []);
  let w = 0;
  if (t.has("base") || t.has("ecosystem") || t.has("leadership")) w += 200;
  if (t.has("product") || t.has("founder") || t.has("builder")) w += 160;
  if (t.has("tools") || t.has("agent") || t.has("AI") || t.has("wallet")) w += 140;
  if (t.has("designer") || t.has("artist") || t.has("art") || t.has("collectibles") || t.has("creator")) w += 120;
  if (t.has("research") || t.has("analyst") || t.has("writer") || t.has("curator")) w += 100;
  if (t.has("community") || t.has("meme") || t.has("collector") || t.has("enthusiast")) w += 60;
  return w;
}
const reachWeight = (f: Founder) => f.reachTier === "very_high" ? 900 : f.reachTier === "high" ? 600 : 300;
const linkWeight = (f: Founder) => (f.links?.warpcast ? 120 : 0) + (f.links?.x ? 100 : 0) + (f.links?.website ? 60 : 0);
const penalty = (f: Founder) => (isPlainWalletLike(f) ? 180 : 0) + (!hasAnyLink(f) ? 40 : 0);

const textScore = (f: Founder, q: string) => {
  if (!q) return 0;
  const ql = norm(q);
  let s = 0;
  if (norm(f.displayName).includes(ql)) s += 140;
  if (norm(f.handle).includes(ql)) s += 120;
  if (norm((f.tags || []).join(" ")).includes(ql)) s += 60;
  if (norm(f.summary).includes(ql)) s += 45;
  return s;
};

const relevanceScore = (f: Founder, q: string) =>
  reachWeight(f) + roleWeights(f) + linkWeight(f) + textScore(f, q) - penalty(f);

export function applyFilters(
  data: Founder[],
  query: string,
  filters: ActiveFilters,
  mapQuick: (tags: string[]) => string[]
): Founder[] {
  const q = norm(query);
  return data.filter((f) => {
    // Quick (AND)
    if (filters.quick?.length) {
      const have = new Set(mapQuick(f.tags || []));
      if (!filters.quick.every((c) => have.has(c))) return false;
    }
    // Reach
    if (filters.reach && filters.reach.size && !filters.reach.has(f.reachTier)) return false;
    // Has
    if (filters.has) {
      const L = f.links || {};
      if (filters.has.warpcast && !L.warpcast) return false;
      if (filters.has.x && !L.x) return false;
      if (filters.has.website && !L.website) return false;
    }
    // Base-only (derzeit off)
    if (filters.baseOnly) {
      // Kein spezieller Marker in Daten – aktuell immer true zulassen
    }
    // Search
    if (q) {
      const hay = `${f.displayName} ${f.handle} ${f.summary} ${(f.tags||[]).join(" ")}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export function sortResults(rows: Founder[], mode: SortMode, query = ""): Founder[] {
  if (mode === "az") return [...rows].sort((a, b) => a.displayName.localeCompare(b.displayName));
  return [...rows].sort((a, b) => {
    const sb = relevanceScore(b, query);
    const sa = relevanceScore(a, query);
    if (sb !== sa) return sb - sa;
    if (hasAnyLink(b) !== hasAnyLink(a)) return hasAnyLink(b) ? 1 : -1;
    return a.displayName.localeCompare(b.displayName);
  });
}
