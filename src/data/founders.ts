// src/data/founders.ts

// -----------------------------
// Typen
// -----------------------------
export type ReachTier = "very_high" | "high" | "medium";

export type FounderLink = {
  warpcast?: string;
  x?: string;
  website?: string;
};

export type Founder = {
  displayName: string;
  handle: string;        // @handle, ENS oder gekürzte Adresse
  summary: string;       // 120–160 Zeichen angestrebt
  tags: string[];        // freie Tags; werden via mappedQuickTags auf Quick-Filter gemappt
  reachTier: ReachTier;
  links: FounderLink;
  avatarUrl?: string;
};

// ---- Quick Filters (10 Kategorien) ----
export type QuickTag =
  | "dev/engineer"
  | "designer/artist"
  | "product/founder"
  | "community/raider"
  | "research/analyst"
  | "content/writer"
  | "trader/liquidity"
  | "tool/agent"
  | "base core"
  | "og/advisor";

const TAG_TO_QUICK: Record<string, QuickTag[]> = {
  // dev
  dev: ["dev/engineer"], engineer: ["dev/engineer"], "mini-apps": ["dev/engineer"], frames: ["dev/engineer"],

  // designer/artist
  designer: ["designer/artist"], artist: ["designer/artist"], art: ["designer/artist"], collectibles: ["designer/artist"], creator: ["designer/artist"],

  // product/founder
  product: ["product/founder"], founder: ["product/founder"], builder: ["product/founder"],

  // community/raider
  community: ["community/raider"], meme: ["community/raider"], collector: ["community/raider"], enthusiast: ["community/raider"], based: ["community/raider"],

  // research/analyst + content/writer
  research: ["research/analyst"], analyst: ["research/analyst"],
  writer: ["content/writer"], curator: ["content/writer"], "content/writer": ["content/writer"],

  // trader/liquidity
  "trader/liquidity": ["trader/liquidity"],

  // tool/agent
  tools: ["tool/agent"], agent: ["tool/agent"], wallet: ["tool/agent"], ai: ["tool/agent"], AI: ["tool/agent"], "tool/agent": ["tool/agent"],

  // base core / og
  base: ["base core"], ecosystem: ["base core"], leadership: ["base core", "og/advisor"], "base core": ["base core"], "og/advisor": ["og/advisor"],
};

export function mappedQuickTags(tags: string[] = []): QuickTag[] {
  const out: QuickTag[] = [];
  for (const raw of tags) {
    const key = typeof raw === "string" ? raw : "";
    const lower = key.toLowerCase();
    const hits = TAG_TO_QUICK[key] ?? TAG_TO_QUICK[lower] ?? [];
    for (const h of hits) if (!out.includes(h)) out.push(h);
  }
  return out;
}


// -----------------------------
// Datensätze
// -----------------------------
export const founders: Founder[] = [
  // Seed (Briefing)
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

  // -----------------------------
  // Batch 1 (deine ersten Shots)
  // -----------------------------
  {
    displayName: "thebaron",
    handle: "@thebaron",
    summary:
      "Base/Farcaster creator; early participant in onchain culture and meme-driven experiments.",
    tags: ["community", "meme"],
    reachTier: "medium",
    links: { warpcast: "https://warpcast.com/thebaron" },
  },
  {
    displayName: "0xanaconda",
    handle: "@0xanaconda",
    summary:
      "Onchain participant in Base channels; active in drops and community threads.",
    tags: ["community"],
    reachTier: "medium",
    links: { warpcast: "https://warpcast.com/0xanaconda" },
  },
  {
    displayName: "a-cat",
    handle: "@a-cat",
    summary:
      "Cat-themed Farcaster presence; meme-forward community voice around Base.",
    tags: ["community", "meme"],
    reachTier: "medium",
    links: { warpcast: "https://warpcast.com/a-cat" },
  },
  {
    displayName: "0x03e5…72a098",
    handle: "0x03e5…72a098",
    summary:
      "Fee recipient / wallet on Base related to the experiment.",
    tags: ["community"],
    reachTier: "medium",
    links: {},
  },
  {
    displayName: "1kk22.base.eth",
    handle: "1kk22.base.eth",
    summary: "ENS on Base; active participant of Base ecosystem.",
    tags: ["community"],
    reachTier: "medium",
    links: {},
  },
  {
    displayName: "abiepr.base.eth",
    handle: "@abiepr.base.eth",
    summary: "ENS on Base; visible across Base/Farcaster threads.",
    tags: ["community"],
    reachTier: "medium",
    links: { warpcast: "https://warpcast.com/abiepr.base.eth" },
  },
  {
    displayName: "Zachary Dash",
    handle: "@zacharydash",
    summary:
      "Writer/educator in crypto; active in Base/Farcaster discourse and builder narratives.",
    tags: ["content/writer", "community"],
    reachTier: "medium",
    links: {
      warpcast: "https://warpcast.com/zacharydash",
      x: "https://x.com/zacharydash",
    },
  },
  {
    displayName: "genebean.base.eth",
    handle: "@genebean.base.eth",
    summary: "ENS on Base; community participant and supporter.",
    tags: ["community"],
    reachTier: "medium",
    links: { warpcast: "https://warpcast.com/genebean.base.eth" },
  },
  {
    displayName: "ConeDesk",
    handle: "@conedesk",
    summary: "Community/meme presence in Base circles.",
    tags: ["community", "meme"],
    reachTier: "medium",
    links: {},
  },

  // -----------------------------
  // Batch 2
  // -----------------------------
  { displayName: "freaksh00w", handle: "@freaksh00w", summary: "Base community presence; active in Farcaster memes and onchain culture.", tags: ["community","meme"], reachTier: "medium", links: { warpcast: "https://warpcast.com/freaksh00w" } },
  { displayName: "0x22cb…d85a5a", handle: "0x22cb…d85a5a", summary: "Wallet / fee recipient across Base-related flows.", tags: ["community"], reachTier: "medium", links: {} },
  // spenser & mleejr sind bereits oben
  { displayName: "birding.base.eth", handle: "birding.base.eth", summary: "ENS on Base; participant in Base channels.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "lopezz.base.eth", handle: "lopezz.base.eth", summary: "ENS on Base; community participant.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "basenjiofficial", handle: "@basenjiofficial", summary: "Community account tied to Base-native social presence.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/basenjiofficial" } },
  { displayName: "based-d", handle: "@based-d", summary: "Based culture account; meme/community activity.", tags: ["community","meme"], reachTier: "medium", links: { warpcast: "https://warpcast.com/based-d" } },
  { displayName: "0x376d…9ef492", handle: "0x376d…9ef492", summary: "Wallet / fee recipient on Base.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "trustyournuts.base.eth", handle: "trustyournuts.base.eth", summary: "ENS on Base; active participant.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "shills", handle: "@shills", summary: "Farcaster presence around Base; community contributions.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/shills" } },
  { displayName: "bitnerd316", handle: "@bitnerd316", summary: "Base/Farcaster participant with tech-centric posting.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/bitnerd316" } },
  { displayName: "topitribe.base.eth", handle: "topitribe.base.eth", summary: "ENS on Base; onchain participant.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "mrsuit", handle: "@mrsuit", summary: "Base community member; active in Farcaster channels.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/mrsuit" } },
  { displayName: "oluwafemi.base.eth", handle: "@oluwafemi.base.eth", summary: "ENS on Base; active across Base spaces.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/oluwafemi.base.eth" } },
  { displayName: "webb3fitty", handle: "@webb3fitty", summary: "Community account; Base memes and social activity.", tags: ["community","meme"], reachTier: "medium", links: { warpcast: "https://warpcast.com/webb3fitty" } },
  { displayName: "rachelonbase.base.eth", handle: "rachelonbase.base.eth", summary: "ENS on Base; participant in Base ecosystem.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "fanzo", handle: "@fanzo", summary: "Content/writer & community personality in Web3/Base spaces.", tags: ["content/writer","community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/fanzo" } },
  { displayName: "deshun.base.eth", handle: "deshun.base.eth", summary: "ENS on Base; community participant.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "papacho.base.eth", handle: "papacho.base.eth", summary: "ENS on Base; active in Base culture.", tags: ["community"], reachTier: "medium", links: {} },

  // -----------------------------
  // Batch 3
  // -----------------------------
  { displayName: "noblet.base.eth", handle: "noblet.base.eth", summary: "ENS on Base; community participant and contributor.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "techyshotta.eth", handle: "@techyshotta.eth", summary: "ENS/Farcaster presence; active in Base threads.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/techyshotta.eth" } },
  { displayName: "0x58b1…06d833", handle: "0x58b1…06d833", summary: "Wallet / fee recipient tied to experiment.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "saintsmiff", handle: "@saintsmiff", summary: "Base community/meme poster; Farcaster presence.", tags: ["community","meme"], reachTier: "medium", links: { warpcast: "https://warpcast.com/saintsmiff" } },
  // Ramiflix bereits vorhanden
  { displayName: "aquariuseth.base.eth", handle: "aquariuseth.base.eth", summary: "ENS on Base; active in Base channels.", tags: ["community"], reachTier: "medium", links: {} },
  // Bo Diddley bereits vorhanden (Bodidlee_)
  { displayName: "emmanuelenebeli.base.eth", handle: "emmanuelenebeli.base.eth", summary: "ENS on Base; community participant.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "noctiluxfifty", handle: "@noctiluxfifty", summary: "Base/Farcaster community member.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/noctiluxfifty" } },
  { displayName: "EMxLupus", handle: "@emxlupus", summary: "Community/account linked to EVERYTHING website project.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/emxlupus" } },
  { displayName: "wtfirkin.base.eth", handle: "wtfirkin.base.eth", summary: "ENS on Base; community participant.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "0x65e6…9b76e5", handle: "0x65e6…9b76e5", summary: "Wallet / fee recipient tied to experiment.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "l2moongirl.base.eth", handle: "l2moongirl.base.eth", summary: "ENS on Base; community participant.", tags: ["community"], reachTier: "medium", links: {} },
  // Lex ⚡ bereits vorhanden
  { displayName: "chuckstock.base.eth", handle: "chuckstock.base.eth", summary: "ENS on Base; onchain participant.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "istudycharts.base.eth", handle: "istudycharts.base.eth", summary: "ENS on Base; trading/analysis vibe.", tags: ["community","trader/liquidity"], reachTier: "medium", links: {} },
  { displayName: "stackithigh.base.eth", handle: "stackithigh.base.eth", summary: "ENS on Base; community member.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "boredcb.base.eth", handle: "boredcb.base.eth", summary: "ENS on Base; community presence.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "0x7289…d10ac9", handle: "0x7289…d10ac9", summary: "Wallet / fee recipient on Base.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "theticker.base.eth", handle: "theticker.base.eth", summary: "ENS on Base; community activity.", tags: ["community"], reachTier: "medium", links: {} },

  // -----------------------------
  // Batch 4
  // -----------------------------
  { displayName: "nezsek.base.eth", handle: "nezsek.base.eth", summary: "ENS on Base; active participant.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "zaft.base.eth", handle: "zaft.base.eth", summary: "ENS on Base; participant in Base channels.", tags: ["community"], reachTier: "medium", links: {} },
  // Bankr bereits vorhanden
  { displayName: "0x7f97…69c55f", handle: "0x7f97…69c55f", summary: "Wallet / fee recipient tied to experiment.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "dylsteck.base.eth", handle: "dylsteck.base.eth", summary: "ENS on Base; community participant.", tags: ["community"], reachTier: "medium", links: {} },
  // Carver de Medici bereits vorhanden
  { displayName: "baseboi", handle: "@baseboi", summary: "Base meme/culture presence; community account.", tags: ["community","meme"], reachTier: "medium", links: { warpcast: "https://warpcast.com/baseboi" } },
  { displayName: "statuette", handle: "@statuette", summary: "Farcaster presence; community contributor.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/statuette" } },
  { displayName: "joecoolproduce", handle: "@joecoolproduce", summary: "Community/meme account in Base culture.", tags: ["community","meme"], reachTier: "medium", links: { warpcast: "https://warpcast.com/joecoolproduce" } },
  { displayName: "thanos100", handle: "@thanos100", summary: "Farcaster/Base community presence.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/thanos100" } },
  { displayName: "aussieboomer", handle: "@aussieboomer", summary: "Base community member; Farcaster activity.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/aussieboomer" } },
  { displayName: "dr3a", handle: "@dr3a", summary: "Farcaster presence; community participant.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/dr3a" } },
  { displayName: "slavanova", handle: "@slavanova", summary: "Base community participant; memes/culture.", tags: ["community","meme"], reachTier: "medium", links: { warpcast: "https://warpcast.com/slavanova" } },
  { displayName: "gorgepappa", handle: "@gorgepappa", summary: "Community presence in Base spaces.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/gorgepappa" } },
  { displayName: "iambill.base.eth", handle: "iambill.base.eth", summary: "ENS on Base; active participant.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "thebdizzle.base.eth", handle: "thebdizzle.base.eth", summary: "ENS on Base; community activity.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "propertease", handle: "@propertease", summary: "Farcaster participant; Base community.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/propertease" } },
  { displayName: "mamo.base.eth", handle: "mamo.base.eth", summary: "ENS on Base; community participant.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "financefreeman.base.eth", handle: "financefreeman.base.eth", summary: "ENS on Base; Base culture participant.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "0x9ffb…10ab2b", handle: "0x9ffb…10ab2b", summary: "Wallet / fee recipient tied to experiment.", tags: ["community"], reachTier: "medium", links: {} },

  // -----------------------------
  // Batch 5
  // -----------------------------
  // kenjohnscreates bereits (Seed 10)
  { displayName: "freaknjoe", handle: "@freaknjoe", summary: "Farcaster presence in Base culture; memes/community.", tags: ["community","meme"], reachTier: "medium", links: { warpcast: "https://warpcast.com/freaknjoe" } },
  { displayName: "0xaa9a…4f43a0", handle: "0xaa9a…4f43a0", summary: "Wallet / fee recipient tied to experiment.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "basedamy", handle: "@basedamy", summary: "Based culture account; community/meme activity.", tags: ["community","meme"], reachTier: "medium", links: { warpcast: "https://warpcast.com/basedamy" } },
  { displayName: "buzzk.base.eth", handle: "@buzzk.base.eth", summary: "ENS/Farcaster presence; community account.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/buzzk.base.eth" } },
  { displayName: "jaybullzeye", handle: "@jaybullzeye", summary: "Community voice; Base memes and posts.", tags: ["community","meme"], reachTier: "medium", links: { warpcast: "https://warpcast.com/jaybullzeye" } },
  { displayName: "domingotaylor", handle: "@domingotaylor", summary: "Farcaster participant; Base community.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/domingotaylor" } },
  { displayName: "basedneo", handle: "@basedneo", summary: "Based culture; community/meme activity.", tags: ["community","meme"], reachTier: "medium", links: { warpcast: "https://warpcast.com/basedneo" } },
  { displayName: "wopr", handle: "@wopr", summary: "Farcaster participant; tech/meme mix around Base.", tags: ["community","meme"], reachTier: "medium", links: { warpcast: "https://warpcast.com/wopr" } },
  { displayName: "0xbbac…203256", handle: "0xbbac…203256", summary: "Wallet / fee recipient on Base.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "elrockhubbard.base.eth", handle: "elrockhubbard.base.eth", summary: "ENS on Base; community participant.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "zillarelli", handle: "@zillarelli", summary: "Farcaster/Base community presence.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/zillarelli" } },
  { displayName: "patternintegrity.base.eth", handle: "patternintegrity.base.eth", summary: "ENS on Base; community activity.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "recon", handle: "@recon", summary: "Farcaster presence; Base community participant.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/recon" } },
  { displayName: "0xc0ad…43e378", handle: "0xc0ad…43e378", summary: "Wallet / fee recipient on Base.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "waldofrlz.base.eth", handle: "waldofrlz.base.eth", summary: "ENS on Base; onchain participant.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "kengmi.base.eth", handle: "kengmi.base.eth", summary: "ENS on Base; community participant.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "forged", handle: "@forged", summary: "Farcaster/Base presence; community activity.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/forged" } },
  { displayName: "s0tric.eth", handle: "@s0tric.eth", summary: "ENS/Farcaster; tech-minded community member.", tags: ["community"], reachTier: "medium", links: { warpcast: "https://warpcast.com/s0tric.eth" } },
  { displayName: "spiralxpanic.base.eth", handle: "spiralxpanic.base.eth", summary: "ENS on Base; community participant.", tags: ["community"], reachTier: "medium", links: {} },
  { displayName: "systemupdated.base.eth", handle: "systemupdated.base.eth", summary: "ENS on Base; fee recipient / participant.", tags: ["community"], reachTier: "medium", links: {} },

  // -----------------------------
  // Projekte / Protokolle (aus deiner Liste)
  // -----------------------------
  {
    displayName: "Flex Perpetuals",
    handle: "@flex-perpetuals",
    summary:
      "Perp product on Base; protocol + UI for onchain trading. Posting updates and links to app.",
    tags: ["product/founder", "tool/agent", "base core"],
    reachTier: "medium",
    links: {
      warpcast: "https://warpcast.com/flex-perpetuals",
      x: "https://x.com/Flexperpetuals",
      website: "https://app.flex.trade",
    },
  },
];
