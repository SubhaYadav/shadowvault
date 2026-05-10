import { createFileRoute } from "@tanstack/react-router";
import { AllocationChart, PortfolioChart, StatCard } from "@/components/dashboard/widgets";
import { chains, fmtUsd, treasuryTotal } from "@/lib/mock-data";
import { Wallet, TrendingUp, Coins, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/app/treasury")({ component: TreasuryPage });

function TreasuryPage() {
  return (
    <>
      <PageHeader title="Treasury" subtitle="Holdings, performance, and exposure across all chains."/>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="AUM" value={fmtUsd(treasuryTotal)} sub="+2.4% · 24h" deltaPositive icon={Wallet}/>
        <StatCard label="30d Return" value="+11.8%" sub="vs benchmark +6.1%" deltaPositive icon={TrendingUp}/>
        <StatCard label="Stable Reserve" value="$8.4M" sub="13.6% of AUM" deltaPositive icon={Coins}/>
        <StatCard label="Insured Custody" value="100%" sub="MPC threshold 7/9" deltaPositive icon={ShieldCheck}/>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <PortfolioChart/>
        <AllocationChart/>
      </div>

      <div className="rounded-2xl glass p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-semibold">Holdings</div>
          <button className="text-xs px-3 py-1.5 rounded-md bg-secondary/60 hover:bg-secondary">Export CSV</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase tracking-widest text-muted-foreground">
              <tr className="text-left">
                <th className="py-2">Asset</th><th>Chain</th><th>Balance</th><th>Value</th><th>24h</th><th>Allocation</th>
              </tr>
            </thead>
            <tbody>
              {chains.map(c => (
                <tr key={c.id} className="border-t border-border/40">
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-7 w-7 rounded-md grid place-items-center text-xs font-semibold" style={{background:`${c.color}22`, color:c.color, border:`1px solid ${c.color}55`}}>{c.symbol}</span>
                      <span className="font-medium">{c.symbol}</span>
                    </div>
                  </td>
                  <td>{c.name}</td>
                  <td>{c.balance.toLocaleString()}</td>
                  <td className="font-medium">{fmtUsd(c.usd)}</td>
                  <td className={c.change24h>=0 ? "text-success" : "text-destructive"}>{c.change24h>=0?"+":""}{c.change24h.toFixed(2)}%</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-32 rounded-full bg-secondary/60 overflow-hidden">
                        <div className="h-full bg-cyber" style={{ width: `${(c.usd/treasuryTotal)*100}%` }}/>
                      </div>
                      <span className="text-xs text-muted-foreground">{((c.usd/treasuryTotal)*100).toFixed(1)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function PageHeader({title,subtitle}:{title:string;subtitle:string}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">ShadowVault</div>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight">{title}</h1>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}
