export type ReachTier = "very_high" | "high" | "medium";

export type FounderLinks = {
  warpcast?: string;
  x?: string;
  website?: string;
};

export type Founder = {
  displayName: string;
  handle: string; // exakt wie vorgegeben, inkl. @ wenn vorhanden
  summary: string;
  tags: string[];
  reachTier: ReachTier;
  links: FounderLinks;
  avatarUrl?: string;
};

// Quick-Filter (Chips) – AND-Logik
export const QUICK_FILTERS = [
  "dev/engineer",
  "product/founder",
  "designer/artist",
  "research/analyst",
  "community/raider",
  "content/writer",
  "trader/liquidity",
  "tool/agent",
  "base core",
  "og/advisor",
] as const;
export type QuickTag = (typeof QUICK_FILTERS)[number];

// Mapping von Datensatz-Tags auf Quick-Filter
export const mappedQuickTags: Record<string, QuickTag> = {
  builder: "product/founder",
  product: "product/founder",
  founder: "product/founder",

  art: "designer/artist",
  collectibles: "designer/artist",
  creator: "designer/artist",

  research: "research/analyst",

  community: "community/raider",
  based: "community/raider",
  recipient: "community/raider",

  writer: "content/writer",
  curator: "content/writer",

  trader: "trader/liquidity",
  liquidity: "trader/liquidity",

  agent: "tool/agent",
  tools: "tool/agent",
  wallet: "tool/agent",

  base: "base core",
  ecosystem: "base core",
  leadership: "base core",

  og: "og/advisor",
  advisor: "og/advisor",

  AI: "tool/agent",
  meme: "community/raider",
  enthusiast: "community/raider",
  investor: "community/raider",
  "mini-apps": "tool/agent",
  frames: "tool/agent",
  tokenization: "product/founder",
};

// Datensatz (13 Einträge, exakt wie vorgegeben)
export const founders = [
  {
    displayName: "Jesse Pollak",
    handle: "@jesse.base.eth",
    summary:
      "Leads Base; public face of the Base ecosystem (Onchain Summer, ecosystem updates).",
    tags: ["base", "ecosystem", "leadership", "builder"],
    reachTier: "very_high",
    links: {
      warpcast: "https://warpcast.com/jessepollak",
      x: "https://twitter.com/jessepollak",
    },
  },
  {
    displayName: "Bankr",
    handle: "@bankr",
    summary:
      "AI-powered crypto agent/wallet flows on Farcaster (swaps, trading, DMs, leaderboard).",
    tags: ["agent", "tools", "based", "wallet"],
    reachTier: "high",
    links: {
      warpcast: "https://warpcast.com/bankr",
      x: "https://x.com/bankrbot",
      website: "https://bankr.bot",
    },
  },
  {
    displayName: "mleejr",
    handle: "@mleejr",
    summary:
      "Writer/Maker in the Farcaster ecosystem; active with mini-apps/frames (e.g., Grok Wallet).",
    tags: ["writer", "mini-apps", "frames", "curator"],
    reachTier: "high",
    links: { warpcast: "https://warpcast.com/mleejr" },
  },
  {
    displayName: "spenser",
    handle: "@spenser",
    summary:
      "Product/builder. Profile: Building Rova; previously Managing Director @CoinList; Research @Messari.",
    tags: ["product", "builder", "research"],
    reachTier: "medium",
    links: { warpcast: "https://warpcast.com/spenser" },
  },
  {
    displayName: "The Based Institute",
    handle: "@basedinstitute",
    summary:
      "Community/project account; based culture, drops, Base-centric vibes.",
    tags: ["community", "based"],
    reachTier: "medium",
    links: { warpcast: "https://warpcast.com/basedinstitute" },
  },
  {
    displayName: "based",
    handle: "@basedevo",
    summary:
      "Based-ecosystem builder; posts about $BASED, community events, NFC/merch experiments.",
    tags: ["based", "community", "builder"],
    reachTier: "medium",
    links: { warpcast: "https://warpcast.com/basedevo" },
  },
  {
    displayName: "Carver de Medici",
    handle: "@carverdemedici",
    summary:
      "Founder of Carvers Canvas; art/collectibles; Ape Society member.",
    tags: ["art", "collectibles", "creator"],
    reachTier: "medium",
    links: { warpcast: "https://warpcast.com/carverdemedici" },
  },
  {
    displayName: "nftkid",
    handle: "@nftkid",
    summary:
      "Collector/creator in Base meme/NFT communities; active in community bounties.",
    tags: ["collector", "meme", "community"],
    reachTier: "medium",
    links: { warpcast: "https://warpcast.com/nftkid" },
  },
  {
    displayName: "Lex ⚡",
    handle: "@lex-cal",
    summary:
      "Crypto enthusiast/investor since ’17; Ape Society holder; active in DEGEN contexts.",
    tags: ["enthusiast", "investor", "community"],
    reachTier: "medium",
    links: { warpcast: "https://warpcast.com/lex-cal" },
  },
  {
    displayName: "Kenny Johns",
    handle: "kenjohnscreates",
    summary:
      "Founder @ Ample Protocol (tokenized IP). Public founder/builder presence.",
    tags: ["founder", "AI", "tokenization"],
    reachTier: "medium",
    links: { x: "https://twitter.com/kenjohnscreates" },
  },
  {
    displayName: "BaseBoi",
    handle: "BaseBoi__",
    summary:
      "Meme artist/promoter in Base culture; $BOI project presence.",
    tags: ["meme", "base", "community"],
    reachTier: "medium",
    links: { x: "https://x.com/BaseBoi__", website: "http://baseboi.fun" },
  },
  {
    displayName: "Ramiflix",
    handle: "RamiFlix",
    summary:
      "Base maxi; active around AI-bot/agent narratives and Base meme coins.",
    tags: ["AI", "base", "community"],
    reachTier: "medium",
    links: { x: "https://x.com/RamiFlix" },
  },
  {
    displayName: "Bo Diddley (Creator)",
    handle: "Bodidlee_",
    summary:
      "Creator/podcaster with activity in crypto/Base discourse.",
    tags: ["creator", "podcast", "community"],
    reachTier: "medium",
    links: { x: "https://twitter.com/Bodidlee_" },
  },
];
