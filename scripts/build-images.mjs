import fs from "node:fs";
import path from "node:path";

const root   = process.cwd();
const srcDir = path.join(root, "public", "img", "src");
const outDir = path.join(root, "public", "img", "optimized");
await fs.promises.mkdir(outDir, { recursive: true });

// Welche Quellen → welche optimierten Zieldateien
const items = [
  { in: "wordmark-1500x500.jpg", out: "hero-wordmark.webp", width: 1500 },
  { in: "pattern-bg.jpg",        out: "pattern-bg.webp",    width: 1500, quality: 60 },
  { in: "fees-hero.jpg",         out: "community-hero.webp",width: 1200 },
  { in: "hero-v1.jpg",           out: "hero-v1.webp",       width: 1200 },
  { in: "meme-mega.jpg",         out: "meme-mega.webp",     width: 1024 },
  { in: "meme-block.jpg",        out: "meme-block.webp",    width: 512 },
  { in: "avatar-400.jpg",        out: "avatar-400.webp",    width: 400 },
];

let sharp;
try {
  ({ default: sharp } = await import("sharp"));
} catch (e) {
  console.warn("⚠️  sharp nicht verfügbar – es wird nur kopiert.", e.message);
}

for (const it of items) {
  const inPath  = path.join(srcDir, it.in);
  const outPath = path.join(outDir, it.out);
  if (!fs.existsSync(inPath)) {
    console.warn("⚠️  Quelle fehlt:", it.in);
    continue;
  }
  if (sharp) {
    await sharp(inPath)
      .resize({ width: it.width, withoutEnlargement: true })
      .webp({ quality: it.quality ?? 80 })
      .toFile(outPath);
    console.log("✓", it.in, "→", path.basename(outPath));
  } else {
    // Fallback: ohne sharp einfach Original kopieren (Endung behalten)
    const copyTo = outPath.replace(/\.webp$/i, path.extname(inPath));
    await fs.promises.copyFile(inPath, copyTo);
    console.log("• kopiert", it.in, "→", path.basename(copyTo));
  }
}

// Favicons / PWA-Icons aus dem Avatar bauen
const avatarSrc = path.join(srcDir, "avatar-400.jpg");
if (fs.existsSync(avatarSrc)) {
  const out192 = path.join(outDir, "icon-192.png");
  const out512 = path.join(outDir, "icon-512.png");
  const favIco = path.join(outDir, "favicon.ico");
  if (sharp) {
    await sharp(avatarSrc).resize(192, 192).png().toFile(out192);
    await sharp(avatarSrc).resize(512, 512).png().toFile(out512);
  } else {
    await fs.promises.copyFile(avatarSrc, out192);
    await fs.promises.copyFile(avatarSrc, out512);
  }
  try {
    const { default: pngToIco } = await import("png-to-ico");
    const buf = await pngToIco([out192]);
    await fs.promises.writeFile(favIco, buf);
  } catch (e) {
    console.warn("⚠️  png-to-ico nicht verfügbar – favicon.ico übersprungen.", e.message);
  }
  console.log("✓ Icons erzeugt in public/img/optimized");
}
