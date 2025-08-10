export const metadata = { title: "Hub • Everything" };

export default function Hub() {
  const items = [
    { href: "/", title: "Home", desc: "Start & embeds" },
    { href: "/chart", title: "Chart (legacy)", desc: "Dexscreener embed" },
    { href: "https://x.com/base4everything", title: "X / Twitter", desc: "@base4everything" },
    { href: "https://t.me/baseisforeverything", title: "Telegram", desc: "Community chat" },
    { href: "https://flaunch.gg/base/coin/0x3524ad09fdfd45811fa69d330194419e05376015", title: "Flaunch", desc: "Coin details" },
  ];
  return (
    <main className="min-h-screen bg-black text-white mx-auto max-w-5xl p-6 md:p-10">
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">Hub</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <a key={it.title}
             className="rounded-2xl border border-white/10 p-4 hover:bg-white/5"
             href={it.href} target={it.href.startsWith('http') ? '_blank' : '_self'}
             rel="noopener noreferrer">
            <div className="text-lg font-semibold">{it.title}</div>
            <div className="text-sm text-white/60">{it.desc}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
