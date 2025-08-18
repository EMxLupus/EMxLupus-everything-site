import {Metadata} from "next";
import {locales} from "@/i18n/config";
export const metadata: Metadata = {
  title: "Founder Directory • EVERYTHING on Base",
  description: "Searchable directory of founders & community for EVERYTHING on Base."
};
export function generateStaticParams(){
  return locales.map(l=>({locale:l}));
}
export {default} from "./team-client";
