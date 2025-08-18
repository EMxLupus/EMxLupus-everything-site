// src/components/ui/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { useTheme, type Theme } from "@/lib/theme";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const next: Record<Theme, Theme> = { dark: "light", light: "system", system: "dark" };
  const label: Record<Theme, string> = {
    dark: "🌙",
    light: "🔆",
    system: "🖥",
  };

  return (
    <button
      type="button"
      aria-label={`Toggle theme (current ${theme})`}
      onClick={() => setTheme(next[theme])}
      className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
      title={`Theme: ${theme} → ${next[theme]}`}
    >
      {label[theme]}
    </button>
  );
}
