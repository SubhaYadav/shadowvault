import { createFileRoute } from "@tanstack/react-router";
import { AgentsMini, AllocationChart, ChainCards, EncryptedAnalytics, PortfolioChart, SecurityScore, StatCard, TxFeed } from "@/components/dashboard/widgets";
import { Bot, Network, ShieldCheck, Wallet } from "lucide-react";
import { fmtUsd, treasuryTotal } from "@/lib/mock-data";

export const Route = createFileRoute("/app/")({
  component: Overview,
});

function Overview() {
  return (
    <>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">Overview</div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Treasury Command Center</h1>
        <p className="text-sm text-muted-foreground">Real-time view of cross-chain capital, AI guardrails and encrypted strategies.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Treasury" value={fmtUsd(treasuryTotal)} sub="+2.4% · 24h" deltaPositive icon={Wallet}/>
        <StatCard label="Active Chains" value="4 / 4" sub="All synced" deltaPositive icon={Network}/>
        <StatCard label="AI Guardrails" value="3 Active · 1 Standby" sub="Risk avg 13" deltaPositive icon={Bot}/>
        <StatCard label="Security Score" value="96 / 100" sub="Hardened" deltaPositive icon={ShieldCheck}/>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <PortfolioChart />
        <AllocationChart />
      </div>

      <ChainCards />

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2"><TxFeed /></div>
        <div className="space-y-4">
          <EncryptedAnalytics />
          <SecurityScore />
          <AgentsMini />
        </div>
      </div>
    </>
  );
}
