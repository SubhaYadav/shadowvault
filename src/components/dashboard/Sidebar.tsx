import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard, Wallet, Network, Bot, Vault, Users, Receipt, ShieldCheck, Settings, Shield
} from "lucide-react";

const items = [
  { to: "/app",              label: "Overview",     icon: LayoutDashboard, exact: true },
  { to: "/app/treasury",     label: "Treasury",     icon: Wallet },
  { to: "/app/chains",       label: "Chains",       icon: Network },
  { to: "/app/agents",       label: "AI Agents",    icon: Bot },
  { to: "/app/vaults",       label: "Vaults",       icon: Vault },
  { to: "/app/team",         label: "Team Access",  icon: Users },
  { to: "/app/transactions", label: "Transactions", icon: Receipt },
  { to: "/app/security",     label: "Security",     icon: ShieldCheck },
  { to: "/app/settings",     label: "Settings",     icon: Settings },
] as const;

export function Sidebar() {
  const path = useRouterState({ select: r => r.location.pathname });
  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border/50 bg-sidebar/70 backdrop-blur">
      <div className="px-5 h-16 flex items-center gap-2 border-b border-border/50">
        <div className="h-8 w-8 rounded-lg bg-violet grid place-items-center glow"><Shield className="h-4 w-4 text-primary-foreground"/></div>
        <div className="leading-tight">
          <div className="text-sm font-semibold">ShadowVault</div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Mainnet · v1</div>
        </div>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1 scrollbar-thin overflow-y-auto">
        {items.map(it => {
          const active = it.exact ? path === it.to : path === it.to || path.startsWith(it.to + "/");
          return (
            <Link
              key={it.to}
              to={it.to}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                active
                  ? "bg-secondary/70 text-foreground ring-1 ring-border"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
              }`}
            >
              <it.icon className="h-4 w-4" />
              <span>{it.label}</span>
              {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary glow" />}
            </Link>
          );
        })}
      </nav>
      <div className="px-4 py-4 border-t border-border/50">
        <div className="rounded-xl glass p-3">
          <div className="flex items-center gap-2 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse"/>
            <span className="text-muted-foreground">All chains synced</span>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">Quorum: 7 of 9 signers online</div>
        </div>
      </div>
    </aside>
  );
}
