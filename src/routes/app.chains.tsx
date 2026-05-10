import { createFileRoute } from "@tanstack/react-router";
import { ChainCards } from "@/components/dashboard/widgets";
import { chains, fmtUsd } from "@/lib/mock-data";

export const Route = createFileRoute("/app/chains")({ component: ChainsPage });

function ChainsPage() {
  return (
    <>
      <Header/>
      <ChainCards/>
      <div className="grid lg:grid-cols-2 gap-4">
        {chains.map(c => (
          <div key={c.id} className="rounded-2xl glass p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-lg grid place-items-center" style={{background:`${c.color}22`, border:`1px solid ${c.color}55`}}>
                  <span className="text-xs font-semibold" style={{color:c.color}}>{c.symbol}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">{c.name}</div>
                  <div className="text-xs text-muted-foreground">dWallet · Ika programmable custody</div>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded border border-success/40 text-success bg-success/10">Programmable</span>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <Stat l="Balance" v={fmtUsd(c.usd)}/>
              <Stat l="24h tx" v={c.txs24h.toLocaleString()}/>
              <Stat l="Status" v={c.status}/>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 h-9 rounded-lg bg-secondary/60 hover:bg-secondary text-sm">Bridge</button>
              <button className="flex-1 h-9 rounded-lg bg-secondary/60 hover:bg-secondary text-sm">Swap</button>
              <button className="flex-1 h-9 rounded-lg bg-violet text-primary-foreground text-sm font-medium glow">Manage</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
function Stat({l,v}:{l:string;v:string|number}) {
  return <div className="rounded-lg bg-secondary/40 border border-border/40 p-3">
    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
    <div className="text-sm font-semibold mt-0.5">{v}</div>
  </div>
}
function Header() {
  return <div>
    <div className="text-xs uppercase tracking-widest text-muted-foreground">Cross-chain</div>
    <h1 className="mt-1 text-3xl font-semibold tracking-tight">Chain Control Center</h1>
    <p className="text-sm text-muted-foreground">Programmable dWallets across BTC, ETH, SOL and Base — orchestrated from Solana via Ika.</p>
  </div>
}
