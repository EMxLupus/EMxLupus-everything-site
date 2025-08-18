// src/components/ui/CopyButton.tsx
"use client";

import { useState } from "react";

type CopyButtonProps = {
  text: string;              // der zu kopierende Text
  className?: string;        // optionale Tailwind-Klassen
  label?: string;            // Standard-Beschriftung
};

export function CopyButton({
  text,
  className = "",
  label = "Copy",
}: CopyButtonProps) {
  const [ok, setOk] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(text);
      setOk(true);
      window.setTimeout(() => setOk(false), 1200);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Copy ${text}`}
      className={`rounded-lg border border-white/10 px-2 py-1 text-xs hover:bg-white/10 ${className}`}
    >
      {ok ? "Copied" : label}
    </button>
  );
}

export default CopyButton;
