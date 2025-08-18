import type {Founder} from "./founders";

// Rohdaten, die du befüllst:
export type Recipient = {
  address: string;           // 0x... (Pflicht)
  handle?: string;           // optional: "@name" oder "name"
  links?: { warpcast?: string; x?: string; website?: string };
};

// HIER EINFÜGEN: deine 101 Einträge.
// Beispiel unten zeigt 3 Stück als Vorlage – rest copy-pasten.
export const recipients: Recipient[] = [
  // { address: "0xAAAA...1111", handle: "@alice" },
  // { address: "0xBBBB...2222" },
  // { address: "0xCCCC...3333", handle: "bob", links: { x:"https://x.com/bob" } },
];

// Konvertierung zu Founder-Records (automatisch)
export function recipientsToFounders(list: Recipient[]): Founder[] {
  return list.map((r, idx): Founder => {
    const short = r.address ? `${r.address.slice(0,6)}…${r.address.slice(-4)}` : `Wallet ${idx+1}`;
    const displayName = r.handle
      ? r.handle.replace(/^@/,"")
      : short;
    const handle = r.handle ?? r.address;

    return {
      displayName,
      handle,
      summary: "Fee recipient of the EVERYTHING launch.",
      tags: ["community","recipient"],
      reachTier: "medium",
      links: r.links ?? {},
    };
  });
}
