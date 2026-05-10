import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features, Security, ChainsBand, AIGuardrails, Vaults, Architecture, Roadmap, Footer } from "@/components/landing/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ShadowVault — Private Cross-Chain Treasury Infrastructure" },
      { name: "description", content: "Institutional cross-chain treasury on Solana with Ika dWallets and Encrypt confidential analytics." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ChainsBand />
        <Security />
        <AIGuardrails />
        <Vaults />
        <Architecture />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}
