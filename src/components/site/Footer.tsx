export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-6xl px-4 text-sm text-white/70">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} EVERYTHING on Base</p>
          <div className="flex gap-3">
            <a
              href="https://x.com/base4everything"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              X/Twitter
            </a>
            <a
              href="https://t.co/ZS8xLtEfZR"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
