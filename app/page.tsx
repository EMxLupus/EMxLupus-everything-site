// app/page.tsx
import Hero from "@/components/site/Hero";
import { QuickActions } from "@/components/site/QuickActions";
import { Section } from "@/components/site/Section";
import { LiveChart } from "@/components/site/LiveChart";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Tokenomics } from "@/components/site/Tokenomics";
import Faq from "@/components/site/Faq";

export const revalidate = 60;

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section id="home" aria-label="Hero" className="scroll-mt-24">
        <h2 className="sr-only">Hero</h2>
        <Hero />
      </section>

      {/* QUICK ACTIONS (einmalig, mit leichtem Pattern-Background) */}
      <Section
        id="community"
        aria-label="Quick actions"
        bgImage="/img/optimized/pattern-bg.jpg"
        className="border-t border-white/10 scroll-mt-24"
      >
        <QuickActions />
      </Section>

      {/* CHART */}
      <section id="chart" aria-label="Live chart" className="py-8 sm:py-12 scroll-mt-24">
        <h2 className="sr-only">Live chart</h2>
        <div className="mx-auto max-w-6xl px-4">
          <LiveChart />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" aria-label="How it works" className="py-10 sm:py-14 scroll-mt-24">
        <h2 className="sr-only">How it works</h2>
        <div className="mx-auto max-w-6xl px-4">
          <HowItWorks />
        </div>
      </section>

      {/* TOKENOMICS */}
      <section id="tokenomics" aria-label="Tokenomics" className="py-10 sm:py-14 scroll-mt-24">
        <h2 className="sr-only">Tokenomics</h2>
        <div className="mx-auto max-w-6xl px-4">
          <Tokenomics />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-label="FAQ" className="py-10 sm:py-14 scroll-mt-24">
        <h2 className="sr-only">FAQ</h2>
        <div className="mx-auto max-w-3xl px-4">
          <Faq />
        </div>
      </section>
    </main>
  );
}
