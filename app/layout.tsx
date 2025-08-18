// app/layout.tsx
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";
import { Header } from "@/components/site/Header";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });

export const metadata: Metadata = {
  title: "EVERYTHING on Base",
  description: "+100 Wallets, One Story. A Base-chain experiment.",
  icons: { icon: "/favicon.ico" },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0F1A" },
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${grotesk.variable} antialiased min-h-screen bg-[var(--bg)] text-[var(--fg)] transition-colors duration-200`}>
        {/* No-flash: setzt Theme-Variablen vor dem Render */}
        <Script id="theme-preload" strategy="beforeInteractive">{`
(function(){
  try {
    var stored = localStorage.getItem('theme') || 'system';
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var resolved = stored === 'system' ? (prefersDark ? 'dark' : 'light') : stored;
    document.documentElement.classList.toggle('dark', resolved === 'dark');
    var vars = resolved === 'dark'
      ? {'--bg':'#0B0F1A','--fg':'#E6EAF2','--muted':'#9AA3B2','--brand':'#0052FF','--accent':'#22FF88'}
      : {'--bg':'#FFFFFF','--fg':'#0B0F1A','--muted':'#4B5563','--brand':'#0052FF','--accent':'#22FF88'};
    for (var k in vars) { document.documentElement.style.setProperty(k, vars[k]); }
  } catch (e) {}
})();`}</Script>

        {/* Accessibility: Skip-Link */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 rounded-lg bg-[var(--brand)] px-3 py-1.5 text-white shadow"
        >
          Skip to content
        </a>

        <ThemeProvider>
          <Header />
          <main id="content" className="min-h-[calc(100vh-4rem)]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
