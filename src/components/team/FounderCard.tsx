// src/components/team/FounderCard.tsx
"use client";
import { useId, useState } from "react";
import type { Founder } from "@/data/founders";
import { founder_open, social_click } from "@/lib/analytics";

export function FounderCard({ record }: { record: Founder }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  const tierColor =
    record.reachTier === "very_high"
      ? "bg-emerald-400/80"
      : record.reachTier === "high"
      ? "bg-blue-400/80"
      : "bg-slate-400/70";

  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] transition shadow-sm will-change-transform hover:-translate-y-0.5 hover:bg-white/[0.05] hover:shadow-[0_12px_32px_rgba(0,0,0,.25)]">
      <button
        className="w-full flex items-center gap-3 p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] rounded-2xl"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => {
          setOpen((v) => !v);
          founder_open(record.handle);
        }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-semibold">
          {record.displayName.slice(0, 2).toUpperCase()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-medium truncate">{record.displayName}</div>
          <div className="text-sm text-[var(--muted)] truncate">{record.handle}</div>
        </div>
        <span className={`h-2 w-2 rounded-full ${tierColor}`} aria-hidden />
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {open && (
        <div id={id} role="region" className="px-4 pb-4">
          <p className="text-sm text-[var(--fg)]/80">{record.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {record.links.warpcast && (
              <a
                className="px-3 py-1.5 text-sm rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:shadow-[0_0_16px_rgba(255,255,255,.15)]"
                href={record.links.warpcast}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Warpcast profile"
                onClick={() => social_click(record.handle, "warpcast")}
              >
                Warpcast ↗
              </a>
            )}
            {record.links.x && (
              <a
                className="px-3 py-1.5 text-sm rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:shadow-[0_0_16px_rgba(255,255,255,.15)]"
                href={record.links.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X profile"
                onClick={() => social_click(record.handle, "x")}
              >
                X / Twitter ↗
              </a>
            )}
            {record.links.website && (
              <a
                className="px-3 py-1.5 text-sm rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:shadow-[0_0_16px_rgba(255,255,255,.15)]"
                href={record.links.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                onClick={() => social_click(record.handle, "website")}
              >
                Website ↗
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
