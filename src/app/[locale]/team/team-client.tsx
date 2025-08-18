"use client";

import {useEffect,useMemo,useState} from "react";
import {useTranslations} from "next-intl";
import {useTheme} from "@/lib/theme";
import {founders, mappedQuickTags, QUICK_FILTERS, type QuickTag} from "@/data/founders";
import {FounderCard} from "@/components/team/FounderCard";
import {ActiveFilters,applyFilters,sortResults, type SortMode} from "@/components/team/filters";
import {search_change,sort_change,filter_add,filter_remove} from "@/lib/analytics";

export default function TeamClient(){
  const t = useTranslations("team");
  const [theme,setTheme] = useTheme();

  const [query,setQuery] = useState("");
  const [debounced,setDebounced] = useState("");
  const [filters,setFilters] = useState<ActiveFilters>({quick:[]});
  const [sortMode,setSortMode] = useState<SortMode>("relevance");

  useEffect(()=>{ const id=setTimeout(()=>setDebounced(query),200); return ()=>clearTimeout(id); },[query]);
  useEffect(()=>{ search_change(debounced); },[debounced]);

  useEffect(()=>{
    const r=document.documentElement.style;
    r.setProperty("--bg","#0B0F1A"); r.setProperty("--fg","#E6EAF2");
    r.setProperty("--muted","#9AA3B2"); r.setProperty("--brand","#0052FF"); r.setProperty("--accent","#22FF88");
  },[]);

  const rows = useMemo(()=>{
    const r=applyFilters(founders,debounced,filters,mappedQuickTags);
    return sortResults(r,sortMode);
  },[debounced,filters,sortMode]);

  const themeLabel = theme==="system" ? t("theme.system") : theme==="dark" ? t("theme.dark") : t("theme.light");

  function toggleQuick(tag:QuickTag){
    setFilters(prev=>{
      const exists=prev.quick.includes(tag);
      const next = exists ? prev.quick.filter(x=>x!==tag) : [...prev.quick,tag];
      (exists?filter_remove:filter_add)(tag);
      return {...prev,quick:next};
    });
  }
  function clearQuick(){ setFilters({quick:[]}); }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] transition-colors duration-200">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-3">
          <h1 className="text-lg font-semibold tracking-tight">{t("title")}</h1>

          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <input
                value={query} onChange={e=>setQuery(e.target.value)}
                placeholder={t("searchPlaceholder")}
                className="w-48 sm:w-64 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-[var(--brand)] focus:ring-1 focus:ring-[var(--brand)]"
              />
              <span className="absolute -bottom-5 left-0 text-[11px] text-[var(--muted)]">
                {t("results",{count: rows.length})}
              </span>
            </div>

            <label className="sr-only" htmlFor="sort">Sort</label>
            <select id="sort" value={sortMode}
              onChange={(e)=>{ const m=e.target.value as SortMode; setSortMode(m); sort_change(m); }}
              className="rounded-xl bg-white/5 border border-white/10 px-2 py-2 text-sm outline-none focus:border-[var(--brand)] focus:ring-1 focus:ring-[var(--brand)]">
              <option value="relevance">{t("sort.relevance")}</option>
              <option value="az">{t("sort.az")}</option>
            </select>

            <button className="rounded-xl px-3 py-2 text-sm bg-white/5 border border-white/10 hover:bg-white/10"
              aria-label={themeLabel}
              onClick={()=>setTheme(theme==="dark"?"light":theme==="light"?"system":"dark")}
              title={themeLabel}>
              {theme==="dark"?t("theme.dark"):theme==="light"?t("theme.light"):t("theme.system")}
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 pb-3 flex flex-wrap gap-2">
          {QUICK_FILTERS.map(code=>{
            const active=filters.quick.includes(code);
            return (
              <button key={code} onClick={()=>toggleQuick(code)}
                className={`rounded-full border px-3 py-1.5 text-sm transition ${
                  active ? "bg-[var(--brand)]/90 border-[var(--brand)] text-white" :
                           "bg-white/5 border-white/10 hover:bg-white/10"}`}
                aria-pressed={active}>
                {t(`filters.quick.${code}`)}
              </button>
            );
          })}
          {filters.quick.length>0 && (
            <button onClick={clearQuick}
              className="rounded-full border border-white/10 px-3 py-1.5 text-sm hover:bg-white/10">
              {t("filters.clear")}
            </button>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {rows.length===0 ? (
          <div className="col-span-full text-center text-[var(--muted)]">{t("empty")}</div>
        ) : (
          rows.map(({f})=> <FounderCard key={f.handle} record={f}/>)
        )}
      </main>
    </div>
  );
}
