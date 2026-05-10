import { createFileRoute } from "@tanstack/react-router";
import { vaults, fmtUsd } from "@/lib/mock-data";
import { Vault, Lock, Plus } from "lucide-react";

export const Route = createFileRoute("/app/vaults")({ component: VaultsPage });

function VaultsPage() {
  return (
    <>
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Strategies</div>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">Encrypted Vaults</h1>
          <p className="text-sm text-muted-foreground">Confidential strategies with auditable on-chain commitments.</p>
        </div>
        <button className="h-10 px-4 rounded-lg bg-violet text-primary-foreground text-sm font-medium glow inline-flex items-center gap-2"><Plus className="h-4 w-4"/> Deploy Vault</button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {vaults.map(v => (
          <div key={v.id} className="rounded-2xl glass p-5 relative overflow-hidden">
            <div className="absolute -right-12 -top-16 h-44 w-44 rounded-full bg-primary/20 blur-3xl"/>
            <div className="flex items-center justify-between">
              <div className="h-9 w-9 rounded-xl bg-violet grid place-items-center glow"><Vault className="h-4 w-4 text-primary-foreground"/></div>
              <span className="text-[10px] uppercase tracking-widest border border-border/60 rounded px-1.5 py-0.5 text-muted-foreground inline-flex items-center gap-1"><Lock className="h-3 w-3"/>{v.privacy}</span>
            </div>
            <div className="mt-4 text-base font-semibold">{v.name}</div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <Mini l="APY" v={`${v.apy}%`} positive/>
              <Mini l="Risk" v={v.risk}/>
              <Mini l="TVL" v={fmtUsd(v.tvl)}/>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className={`px-1.5 py-0.5 rounded border ${v.status==='Open' ? "border-success/40 text-success bg-success/10" : "border-border text-muted-foreground"}`}>{v.status}</span>
              <button className="text-primary hover:underline">Inspect →</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
function Mini({l,v,positive}:{l:string;v:string;positive?:boolean}) {
  return <div>
    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
    <div className={`text-sm font-semibold ${positive?'text-success':''}`}>{v}</div>
  </div>
}
