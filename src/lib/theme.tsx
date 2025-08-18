'use client';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type Theme = 'system' | 'light' | 'dark';
type ThemeCtxValue = [Theme, (t: Theme) => void];

const ThemeCtx = createContext<ThemeCtxValue | undefined>(undefined);

function applyTheme(theme: Theme) {
  const prefersDark =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const resolved = theme === 'system' ? (prefersDark ? 'dark' : 'light') : theme;

  // Tailwind dark-mode class
  document.documentElement.classList.toggle('dark', resolved === 'dark');

  // Brand-Tokens setzen (AA-Kontrast in beiden Modi)
  const vars =
    resolved === 'dark'
      ? {
          '--bg': '#0B0F1A',
          '--fg': '#E6EAF2',
          '--muted': '#9AA3B2',
          '--brand': '#0052FF',
          '--accent': '#22FF88',
        }
      : {
          '--bg': '#FFFFFF',
          '--fg': '#0B0F1A',
          '--muted': '#4B5563',
          '--brand': '#0052FF',
          '--accent': '#22FF88',
        };

  const root = document.documentElement.style;
  Object.entries(vars).forEach(([k, v]) => root.setProperty(k, v));
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'system';
    return (localStorage.getItem('theme') as Theme) || 'system';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    applyTheme(theme);

    // Bei Systemwechsel live aktualisieren, wenn "system" aktiv ist
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      if (theme === 'system') applyTheme('system');
    };
    mql.addEventListener?.('change', onChange);
    return () => mql.removeEventListener?.('change', onChange);
  }, [theme]);

  const value = useMemo<ThemeCtxValue>(() => [theme, setTheme], [theme]);
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export function useTheme(): ThemeCtxValue {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error('useTheme must be used within <ThemeProvider>');
  return ctx;
}
