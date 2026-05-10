import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Activity } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      {/* floating particles */}
      <Particles />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border/60 glass px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
          Live on Solana · Powered by Ika & Encrypt
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-7 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-gradient"
        >
          Private Cross-Chain<br/>Treasury Infrastructure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          Manage assets across chains with institutional security, encrypted finance,
          and AI guardrails — powered by Solana, Ika, and Encrypt.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Link to="/app" className="group inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-violet text-primary-foreground font-medium glow hover:translate-y-[-1px] transition">
            Launch App <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
          <a href="#demo" className="inline-flex items-center gap-2 h-12 px-6 rounded-xl glass-strong text-foreground hover:border-glow transition">
            <PlayCircle className="h-4 w-4" /> View Demo
          </a>
        </motion.div>

        {/* Hero terminal mock */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute -inset-1 rounded-3xl bg-cyber blur-2xl opacity-40" />
          <div className="relative rounded-3xl glass-strong p-3 ring-neon">
            <TerminalMock />
          </div>
        </motion.div>

        {/* Logos / chain ticker */}
        <div className="mt-16">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Connected liquidity across</p>
          <div className="mt-5 mask-fade-b overflow-hidden">
            <div className="flex w-max gap-12 ticker">
              {["Bitcoin","Ethereum","Solana","Base","Arbitrum","Wormhole","Jupiter","Kamino","MarginFi","Aave","Lido","Marinade"]
                .concat(["Bitcoin","Ethereum","Solana","Base","Arbitrum","Wormhole","Jupiter","Kamino","MarginFi","Aave","Lido","Marinade"])
                .map((n, i) => (
                <div key={i} className="text-base text-muted-foreground/80 font-medium tracking-tight">{n}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Particles() {
  const dots = Array.from({ length: 30 });
  return (
    <div className="absolute inset-0 pointer-events-none">
      {dots.map((_, i) => {
        const left = (i * 137) % 100;
        const top = (i * 53) % 100;
        const dur = 8 + ((i * 7) % 10);
        return (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/70"
            style={{ left: `${left}%`, top: `${top}%`, boxShadow: "0 0 12px var(--primary)" }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: dur, repeat: Infinity, delay: (i % 5) * 0.6 }}
          />
        );
      })}
    </div>
  );
}

function TerminalMock() {
  return (
    <div className="rounded-2xl bg-[oklch(0.10_0.02_280)] overflow-hidden border border-border/50">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/60">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        </div>
        <div className="text-xs text-muted-foreground font-mono">shadowvault://treasury/overview</div>
        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-success">
          <Activity className="h-3 w-3" /> live
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-3 p-4">
        {[
          { k: "Total AUM", v: "$61.95M", sub: "+2.4% 24h" },
          { k: "Encrypted Vaults", v: "14", sub: "9 strategies live" },
          { k: "AI Guardrails", v: "4 / 4", sub: "All systems nominal" },
        ].map((c) => (
          <div key={c.k} className="rounded-xl glass p-4 text-left">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.k}</div>
            <div className="mt-2 text-2xl font-semibold">{c.v}</div>
            <div className="mt-1 text-xs text-success">{c.sub}</div>
          </div>
        ))}
        <div className="md:col-span-3 rounded-xl glass p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-muted-foreground">Cross-chain activity</div>
            <div className="text-xs font-mono text-muted-foreground">last 24h</div>
          </div>
          <MiniSpark />
        </div>
      </div>
    </div>
  );
}

function MiniSpark() {
  // pure SVG sparkline so we don't need recharts in hero
  const points = Array.from({length: 60}).map((_,i) => {
    const t = i/59;
    const v = 50 + Math.sin(t*8)*8 + t*30 + Math.sin(t*30)*2;
    return [i*(800/59), 100 - v*0.6] as const;
  });
  const d = points.map((p,i) => `${i?'L':'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  return (
    <svg viewBox="0 0 800 100" className="w-full h-24">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={`${d} L800,100 L0,100 Z`} fill="url(#g)"/>
      <path d={d} fill="none" stroke="var(--primary)" strokeWidth="2"/>
    </svg>
  );
}
