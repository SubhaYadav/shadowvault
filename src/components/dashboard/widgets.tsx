import { motion } from "framer-motion";
import {
  Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell, PieChart, Pie, BarChart, Bar
} from "recharts";
import { ArrowUpRight, ArrowDownRight, Eye, EyeOff, ShieldCheck, Bot, Activity } from "lucide-react";
import { allocation, chains, fmtUsd, portfolioSeries, transactions, treasuryTotal } from "@/lib/mock-data";
import { useState } from "react";

export function StatCard({
  label, value, sub, deltaPositive, icon: Icon,
}: {
  label: string; value: string; sub?: string; deltaPositive?: boolean; icon?: React.ComponentType<{className?: string}>;
}) {
  return (
    <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.4}}
      className="rounded-2xl glass p-5 relative overflow-hidden">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl"/>
      <div className="flex items-center justify-between">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground"/>}
      </div>
      <div className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">{value}</div>
      {sub && (
        <div className={`mt-1 text-xs flex items-center gap-1 ${deltaPositive ? 'text-success' : 'text-destructive'}`}>
          {deltaPositive ? <ArrowUpRight className="h-3 w-3"/> : <ArrowDownRight className="h-3 w-3"/>}
          {sub}
        </div>
      )}
    </motion.div>
  );
}

export function PortfolioChart() {
  return (
    <div className="rounded-2xl glass p-5 col-span-1 lg:col-span-2">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Treasury performance</div>
          <div className="text-2xl font-semibold tracking-tight">{fmtUsd(treasuryTotal)}</div>
        </div>
        <div className="flex items-center gap-1 text-xs">
          {["1D","1W","1M","3M","1Y","ALL"].map((t,i) => (
            <button key={t} className={`px-2.5 py-1 rounded-md ${i===2 ? "bg-secondary/70 text-foreground" : "text-muted-foreground hover:text-foreground"}`}>{t}</button>
          ))}
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={portfolioSeries}>
            <defs>
              <linearGradient id="pf" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.72 0.24 295)" stopOpacity="0.55"/>
                <stop offset="100%" stopColor="oklch(0.72 0.24 295)" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <XAxis dataKey="x" hide/>
            <YAxis hide domain={["dataMin","dataMax"]}/>
            <Tooltip
              contentStyle={{ background:"oklch(0.13 0.02 280)", border:"1px solid var(--border)", borderRadius:12, fontSize:12 }}
              labelFormatter={() => ""}
              formatter={(v: number) => [fmtUsd(v), "Value"]}
            />
            <Area type="monotone" dataKey="value" stroke="oklch(0.78 0.21 295)" strokeWidth={2} fill="url(#pf)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function AllocationChart() {
  return (
    <div className="rounded-2xl glass p-5">
      <div className="text-xs uppercase tracking-widest text-muted-foreground">Allocation</div>
      <div className="h-44 mt-2">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={allocation} dataKey="value" innerRadius={48} outerRadius={70} stroke="none">
              {allocation.map((a) => <Cell key={a.name} fill={a.color}/>)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
        {allocation.map(a => (
          <div key={a.name} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm" style={{background:a.color}}/>
            <span className="text-muted-foreground">{a.name}</span>
            <span className="ml-auto font-medium">{a.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChainCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {chains.map(c => (
        <motion.div key={c.id} whileHover={{ y:-2 }} className="rounded-2xl glass p-5 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-3xl" style={{ background: c.color }}/>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg grid place-items-center" style={{background:`${c.color}22`, border:`1px solid ${c.color}55`}}>
                <span className="text-xs font-semibold" style={{color:c.color}}>{c.symbol}</span>
              </div>
              <div className="text-sm font-semibold">{c.name}</div>
            </div>
            <span className={`text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded border ${c.status==='synced' ? 'border-success/40 text-success bg-success/10' : c.status==='syncing' ? 'border-warning/40 text-warning bg-warning/10' : 'border-destructive/40 text-destructive bg-destructive/10'}`}>{c.status}</span>
          </div>
          <div className="mt-4 text-2xl font-semibold tracking-tight">{fmtUsd(c.usd)}</div>
          <div className="text-xs text-muted-foreground">{c.balance.toLocaleString()} {c.symbol}</div>
          <div className="mt-3 flex items-center justify-between text-xs">
            <span className={c.change24h>=0 ? "text-success" : "text-destructive"}>
              {c.change24h>=0 ? "+" : ""}{c.change24h.toFixed(2)}% · 24h
            </span>
            <span className="text-muted-foreground">{c.txs24h.toLocaleString()} tx</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function TxFeed() {
  return (
    <div className="rounded-2xl glass p-5">
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Live transactions</div>
          <div className="text-sm text-muted-foreground">Encrypted streams via Encrypt</div>
        </div>
        <div className="text-xs flex items-center gap-1.5 text-success"><Activity className="h-3.5 w-3.5"/> live</div>
      </div>
      <div className="divide-y divide-border/40">
        {transactions.slice(0,6).map(t => (
          <div key={t.id} className="py-3 flex items-center gap-3">
            <div className={`h-8 w-8 rounded-lg grid place-items-center text-xs font-semibold ${
              t.type==='Inflow' ? "bg-success/15 text-success" :
              t.type==='Outflow' ? "bg-destructive/15 text-destructive" :
              t.type==='Bridge' ? "bg-accent/15 text-accent" : "bg-primary/15 text-primary"
            }`}>{t.type[0]}</div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium truncate">{t.type} · {t.asset}</div>
              <div className="text-xs text-muted-foreground truncate">{t.chain} · {t.hash}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">{t.amount}</div>
              <div className="text-xs text-muted-foreground">{fmtUsd(t.usd)}</div>
            </div>
            <span className={`text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded border ml-2 ${
              t.status==='Confirmed' ? "border-success/40 text-success bg-success/10" :
              t.status==='Pending' ? "border-warning/40 text-warning bg-warning/10" :
              "border-primary/40 text-primary bg-primary/10"
            }`}>{t.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EncryptedAnalytics() {
  const [reveal, setReveal] = useState(false);
  const data = [
    { d: "Mon", v: 18 },{ d: "Tue", v: 22 },{ d: "Wed", v: 16 },{ d: "Thu", v: 28 },
    { d: "Fri", v: 31 },{ d: "Sat", v: 24 },{ d: "Sun", v: 35 },
  ];
  return (
    <div className="rounded-2xl glass p-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Encrypted P&L · 7d</div>
          <div className="text-2xl font-semibold tracking-tight">{reveal ? "+$1.84M" : "••••••"}</div>
        </div>
        <button onClick={() => setReveal(v => !v)}
          className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md glass hover:border-glow transition">
          {reveal ? <EyeOff className="h-3.5 w-3.5"/> : <Eye className="h-3.5 w-3.5"/>}
          {reveal ? "Hide" : "Reveal"}
        </button>
      </div>
      <div className="h-36 mt-3 relative">
        <div className={`absolute inset-0 transition ${reveal ? "blur-0 opacity-100" : "blur-md opacity-70"}`}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <XAxis dataKey="d" stroke="var(--muted-foreground)" tick={{fontSize:11}} axisLine={false} tickLine={false}/>
              <Bar dataKey="v" radius={[6,6,0,0]} fill="oklch(0.78 0.17 200)"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export function SecurityScore() {
  const score = 96;
  return (
    <div className="rounded-2xl glass p-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Security score</div>
          <div className="text-2xl font-semibold tracking-tight">{score}<span className="text-base text-muted-foreground">/100</span></div>
        </div>
        <ShieldCheck className="h-5 w-5 text-success"/>
      </div>
      <div className="mt-4 h-2 rounded-full bg-secondary/60 overflow-hidden">
        <div className="h-full bg-cyber" style={{ width: `${score}%` }}/>
      </div>
      <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
        <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-success"/> MPC quorum 7/9</li>
        <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-success"/> All AI guardrails active</li>
        <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-warning"/> 1 device pending re-attestation</li>
      </ul>
    </div>
  );
}

export function AgentsMini() {
  const list = [
    { n:"Sentinel-α", s:"Active",  r:12 },
    { n:"Vega-β",     s:"Active",  r:28 },
    { n:"Orion-γ",    s:"Standby", r:7 },
  ];
  return (
    <div className="rounded-2xl glass p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">AI Guardrails</div>
        <Bot className="h-4 w-4 text-muted-foreground"/>
      </div>
      <div className="space-y-3">
        {list.map(a => (
          <div key={a.n} className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-violet grid place-items-center"><Bot className="h-4 w-4 text-primary-foreground"/></div>
            <div className="flex-1">
              <div className="text-sm font-medium">{a.n}</div>
              <div className="text-xs text-muted-foreground">Risk · {a.r}</div>
            </div>
            <span className={`text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded border ${a.s==='Active' ? "border-success/40 text-success bg-success/10" : "border-border text-muted-foreground"}`}>{a.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
