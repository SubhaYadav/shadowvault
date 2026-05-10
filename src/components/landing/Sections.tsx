import { motion } from "framer-motion";
import {
  Lock, Network, Bot, EyeOff, Vault, Users, ShieldCheck, Server,
  Cpu, Zap, KeyRound, Boxes, ArrowUpRight, CircleDot
} from "lucide-react";

function SectionTitle({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center mb-14">
      <div className="text-xs uppercase tracking-[0.25em] text-primary/80">{kicker}</div>
      <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-gradient">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function Features() {
  const items = [
    { icon: Network, title: "Cross-Chain Custody", desc: "Programmable dWallets via Ika orchestrate Bitcoin, Ethereum, Solana and Base from a single Solana control layer." },
    { icon: EyeOff, title: "Confidential Finance", desc: "Encrypt-powered private balances, hidden P&L, and analytics that never leak strategy on-chain." },
    { icon: Bot, title: "AI Guardrail Engine", desc: "Spending limits, allow-listed protocols, risk scores, and emergency freeze enforced by autonomous agents." },
    { icon: Vault, title: "Strategy Vaults", desc: "Arbitrage, yield, AI trading and institutional vaults with privacy levels and auditable performance." },
    { icon: Users, title: "Team Treasury", desc: "Role-based access, multi-sign approvals, audit trails, and recovery — built for funds and DAOs." },
    { icon: ShieldCheck, title: "Compliance-Ready", desc: "SOC2-grade key custody, attested execution and exportable reports with zero strategy disclosure." },
  ];
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle kicker="Platform" title="Everything an institutional treasury needs" subtitle="A unified control plane for cross-chain capital — engineered for funds, DAOs, and protocols that move size." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl glass p-6 hover:border-glow transition"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition" style={{ boxShadow: "0 0 60px oklch(0.72 0.24 295 / 0.18) inset" }} />
              <div className="h-10 w-10 rounded-xl bg-violet grid place-items-center glow">
                <it.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="mt-5 text-lg font-semibold tracking-tight">{it.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Security() {
  const stats = [
    { k: "Encrypted Vaults", v: "14" },
    { k: "MPC Signers", v: "21" },
    { k: "Chains", v: "4" },
    { k: "Avg. Settlement", v: "1.4s" },
  ];
  return (
    <section id="security" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle kicker="Security" title="Institutional cryptography, end to end" subtitle="MPC custody, threshold signatures and confidential compute. Your strategy stays private, your keys stay distributed." />
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 rounded-2xl glass p-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary/80">
              <KeyRound className="h-3.5 w-3.5" /> dWallet Architecture
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">Threshold-signed cross-chain custody</h3>
            <p className="mt-3 text-muted-foreground">Every transaction is co-signed by a distributed quorum of MPC nodes via Ika. No single party — including ShadowVault — can move funds.</p>
            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map(s => (
                <div key={s.k} className="rounded-xl bg-secondary/40 border border-border/40 p-4">
                  <div className="text-2xl font-semibold">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.k}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 rounded-2xl glass p-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent">
              <Lock className="h-3.5 w-3.5" /> Encrypt
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">Confidential analytics</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {["Hidden balance commitments","Private P&L aggregation","Selective auditor disclosure","Zero on-chain leakage"].map(t => (
                <li key={t} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent glow-cyan" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ChainsBand() {
  const chains = [
    { n: "Bitcoin",   c: "#F7931A" },
    { n: "Ethereum",  c: "#8a92ff" },
    { n: "Solana",    c: "#9945FF" },
    { n: "Base",      c: "#2151F5" },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle kicker="Cross-chain infrastructure" title="One control layer. Every major chain." subtitle="Solana orchestrates programmable custody on Bitcoin, Ethereum and Base via Ika dWallets." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {chains.map((ch, i) => (
            <motion.div key={ch.n}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.06}}
              className="relative overflow-hidden rounded-2xl glass p-6">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-30 blur-3xl" style={{ background: ch.c }} />
              <div className="flex items-center justify-between">
                <div className="h-9 w-9 rounded-xl grid place-items-center" style={{ background: `${ch.c}22`, border: `1px solid ${ch.c}55` }}>
                  <CircleDot className="h-4 w-4" style={{ color: ch.c }} />
                </div>
                <div className="text-xs flex items-center gap-1 text-success"><span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse"/> Synced</div>
              </div>
              <div className="mt-4 text-lg font-semibold">{ch.n}</div>
              <div className="text-xs text-muted-foreground">Programmable dWallet</div>
              <div className="mt-5 text-2xl font-semibold tracking-tight">99.99%</div>
              <div className="text-xs text-muted-foreground">Uptime · last 30d</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AIGuardrails() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary/80">AI guardrails</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-gradient">Autonomous risk engines that never sleep</h2>
          <p className="mt-4 text-muted-foreground">Deploy AI agents that enforce spending limits, monitor bridges, score every transaction, and freeze movement at the first sign of anomaly.</p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              { i: Bot, t: "Per-agent spending caps and protocol allowlists" },
              { i: Zap, t: "Sub-second risk scoring on every signed action" },
              { i: ShieldCheck, t: "Two-of-N human approval on high-risk routes" },
              { i: Cpu, t: "Replayable, attested execution traces" },
            ].map(({i:Icon,t}) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-1 h-7 w-7 rounded-lg bg-secondary/60 grid place-items-center"><Icon className="h-3.5 w-3.5 text-primary"/></span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-cyber blur-3xl opacity-30"/>
          <div className="relative rounded-2xl glass-strong p-5">
            {[
              { n: "Sentinel-α", r: "Risk Guardrail",  s: 12, c: "Active"  },
              { n: "Vega-β",     r: "Yield Optimizer", s: 28, c: "Active"  },
              { n: "Orion-γ",    r: "Bridge Monitor",  s: 7,  c: "Standby" },
              { n: "Atlas-δ",    r: "Compliance",      s: 4,  c: "Active"  },
            ].map((a) => (
              <div key={a.n} className="flex items-center justify-between py-3 border-b border-border/40 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-violet grid place-items-center"><Bot className="h-4 w-4 text-primary-foreground"/></div>
                  <div>
                    <div className="text-sm font-medium">{a.n}</div>
                    <div className="text-xs text-muted-foreground">{a.r}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Risk</div>
                    <div className="text-sm font-medium">{a.s}</div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-md border ${a.c==='Active' ? 'border-success/40 text-success bg-success/10' : 'border-border text-muted-foreground'}`}>{a.c}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Vaults() {
  const items = [
    { n: "Arbitrage Vault", apy: "18.4%", risk: "Medium", tvl: "$8.42M", priv: "High" },
    { n: "Yield Vault", apy: "9.2%", risk: "Low", tvl: "$24.12M", priv: "Medium" },
    { n: "AI Trading Vault", apy: "31.6%", risk: "High", tvl: "$6.18M", priv: "Maximum" },
    { n: "Institutional Vault", apy: "6.8%", risk: "Min", tvl: "$41.54M", priv: "Maximum" },
  ];
  return (
    <section id="vaults" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle kicker="Encrypted strategy vaults" title="Confidential alpha. Auditable performance." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((v, i) => (
            <motion.div key={v.n}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay: i*0.05}}
              className="rounded-2xl glass p-6 relative overflow-hidden">
              <div className="absolute -right-12 -top-16 h-44 w-44 rounded-full bg-primary/20 blur-3xl"/>
              <div className="flex items-center justify-between">
                <div className="h-9 w-9 rounded-xl bg-violet grid place-items-center"><Vault className="h-4 w-4 text-primary-foreground"/></div>
                <span className="text-[10px] uppercase tracking-widest border border-border/60 rounded px-1.5 py-0.5 text-muted-foreground">{v.priv}</span>
              </div>
              <div className="mt-5 text-base font-semibold">{v.n}</div>
              <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                <div><div className="text-xs text-muted-foreground">APY</div><div className="text-sm font-semibold text-success">{v.apy}</div></div>
                <div><div className="text-xs text-muted-foreground">Risk</div><div className="text-sm font-semibold">{v.risk}</div></div>
                <div><div className="text-xs text-muted-foreground">TVL</div><div className="text-sm font-semibold">{v.tvl}</div></div>
              </div>
              <button className="mt-5 w-full h-9 rounded-lg bg-secondary/60 hover:bg-secondary transition text-sm flex items-center justify-center gap-1">Inspect <ArrowUpRight className="h-3.5 w-3.5"/></button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Architecture() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle kicker="Enterprise architecture" title="Engineered for the next billion dollars" />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { i: Server, t: "Solana control plane", d: "Sub-second finality and parallel execution as the orchestration layer." },
            { i: Boxes, t: "Ika dWallets", d: "Threshold-signed custody for BTC, ETH and Base — natively programmable." },
            { i: Lock,  t: "Encrypt confidential layer", d: "Encrypted balances, private analytics, selective disclosure." },
          ].map(({i:Icon,t,d}) => (
            <div key={t} className="rounded-2xl glass p-7">
              <div className="h-10 w-10 rounded-xl bg-cyber grid place-items-center glow-cyan"><Icon className="h-5 w-5 text-primary-foreground"/></div>
              <div className="mt-5 text-lg font-semibold">{t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Roadmap() {
  const items = [
    { q: "Q2 · 2025", t: "Mainnet beta", d: "Solana control layer, Ika dWallets for BTC and ETH, encrypted vault MVP." },
    { q: "Q3 · 2025", t: "AI guardrails", d: "Programmable agents, multi-sign workflows, attested execution traces." },
    { q: "Q4 · 2025", t: "Institutional suite", d: "Auditor portals, SOC2 attestation, advanced strategy marketplace." },
    { q: "Q1 · 2026", t: "Open infrastructure", d: "Public APIs, SDKs and self-hosted enterprise deployment." },
  ];
  return (
    <section id="roadmap" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle kicker="Roadmap" title="Built in the open, shipped on chain" />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/60" />
          <div className="space-y-10">
            {items.map((it, i) => (
              <div key={it.q} className={`relative md:grid md:grid-cols-2 md:gap-10 ${i%2 ? 'md:[&>div:first-child]:order-2':''}`}>
                <div className="md:text-right md:pr-10 pl-12 md:pl-0">
                  <div className="text-xs uppercase tracking-widest text-primary/80">{it.q}</div>
                  <div className="text-xl font-semibold mt-1">{it.t}</div>
                  <p className="text-sm text-muted-foreground mt-2 max-w-md md:ml-auto">{it.d}</p>
                </div>
                <div className="hidden md:block"/>
                <div className="absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 h-3 w-3 rounded-full bg-violet glow ring-4 ring-background"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-10">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-violet grid place-items-center glow"><ShieldCheck className="h-4 w-4 text-primary-foreground"/></div>
            <span className="font-semibold">ShadowVault</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">Private cross-chain treasury infrastructure for institutions, funds and protocols.</p>
        </div>
        {[
          { h: "Product", l: ["Overview","Vaults","AI Agents","Security"] },
          { h: "Company", l: ["About","Careers","Press","Contact"] },
          { h: "Resources", l: ["Docs","Audits","Status","Changelog"] },
        ].map(col => (
          <div key={col.h}>
            <div className="text-sm font-semibold mb-3">{col.h}</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {col.l.map(x => <li key={x}><a href="#" className="hover:text-foreground transition">{x}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} ShadowVault Labs. All rights reserved.</div>
          <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse"/> Mainnet operational</div>
        </div>
      </div>
    </footer>
  );
}
