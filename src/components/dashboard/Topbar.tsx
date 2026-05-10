import { Bell, Search, Wallet } from "lucide-react";

export function Topbar() {
  return (
    <header className="h-16 px-4 md:px-8 flex items-center gap-3 border-b border-border/50 sticky top-0 bg-background/70 backdrop-blur z-30">
      <div className="hidden md:flex items-center gap-2 flex-1 max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
          <input
            placeholder="Search assets, chains, transactions…"
            className="w-full h-10 pl-9 pr-3 rounded-lg bg-secondary/40 border border-border/60 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/60"
          />
        </div>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <div className="hidden sm:flex items-center gap-2 px-3 h-10 rounded-lg glass text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse"/>
          <span className="text-muted-foreground">Solana · 64,182 slot</span>
        </div>
        <button className="relative h-10 w-10 rounded-lg glass grid place-items-center hover:border-glow transition">
          <Bell className="h-4 w-4"/>
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary glow"/>
        </button>
        <button className="hidden sm:flex items-center gap-2 px-3 h-10 rounded-lg bg-violet text-primary-foreground text-sm font-medium glow">
          <Wallet className="h-4 w-4"/> 7xKv…s9Q4
        </button>
        <div className="h-10 w-10 rounded-full bg-cyber grid place-items-center text-xs font-semibold text-primary-foreground">AW</div>
      </div>
    </header>
  );
}
