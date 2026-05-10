import { createFileRoute } from "@tanstack/react-router";
import { agents } from "@/lib/mock-data";
import { Bot, Plus, Snowflake } from "lucide-react";

export const Route = createFileRoute("/app/agents")({ component: AgentsPage });

function AgentsPage() {
  return (
    <>
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">AI Engine</div>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">Guardrail Agents</h1>
          <p className="text-sm text-muted-foreground">Autonomous risk and compliance enforcement.</p>
        </div>
        <div className="flex gap-2">
          <button className="h-10 px-4 rounded-lg glass text-sm hover:border-glow inline-flex items-center gap-2"><Snowflake className="h-4 w-4"/> Emergency Freeze</button>
          <button className="h-10 px-4 rounded-lg bg-violet text-primary-foreground text-sm font-medium glow inline-flex items-center gap-2"><Plus className="h-4 w-4"/> Add Agent</button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {agents.map(a => (
          <div key={a.id} className="rounded-2xl glass p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-violet grid place-items-center glow"><Bot className="h-5 w-5 text-primary-foreground"/></div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="text-base font-semibold">{a.name}</div>
                  <span className={`text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded border ${a.status==='Active'?"border-success/40 text-success bg-success/10":"border-border text-muted-foreground"}`}>{a.status}</span>
                </div>
                <div className="text-xs text-muted-foreground">{a.role}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Risk</div>
                <div className="text-sm font-semibold">{a.risk}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="rounded-lg bg-secondary/40 border border-border/40 p-3">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Spending limit</div>
                <div className="text-sm font-semibold mt-0.5">{a.limit}</div>
              </div>
              <div className="rounded-lg bg-secondary/40 border border-border/40 p-3">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Approval</div>
                <div className="text-sm font-semibold mt-0.5">2-of-3 humans</div>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {a.protocols.map(p => <span key={p} className="text-xs px-2 py-1 rounded-md bg-secondary/60 border border-border/40">{p}</span>)}
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 h-9 rounded-lg bg-secondary/60 hover:bg-secondary text-sm">Configure</button>
              <button className="flex-1 h-9 rounded-lg bg-secondary/60 hover:bg-secondary text-sm">Logs</button>
              <button className="h-9 px-3 rounded-lg bg-destructive/20 text-destructive text-sm hover:bg-destructive/30">Pause</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
