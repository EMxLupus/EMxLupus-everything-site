// src/components/site/CopyButton.tsx
"use client";
import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button
      onClick={async () => {
        try { await navigator.clipboard.writeText(text); setOk(true); setTimeout(()=>setOk(false), 1500); } catch {}
      }}
      className="rounded-full border border-white/10 px-2 py-1 hover:bg-white/10 text-xs"
      aria-live="polite"
    >
      {ok ? "Copied" : "Copy"}
    </button>
  );
}
