// app/team/page.tsx  (Server Component)
import type { Metadata } from "next";
import TeamClient from "@/components/team/TeamClient";

export const metadata: Metadata = {
  title: "Team — EVERYTHING",
  description: "Founder directory for EVERYTHING on Base.",
};

export default function Page() {
  // Server Component rendert eine Client Component – genau richtig.
  return <TeamClient />;
}
