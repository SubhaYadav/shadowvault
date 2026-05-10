import { Link } from "@tanstack/react-router";
import { Shield } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl glass px-4 py-3">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 rounded-lg bg-violet grid place-items-center glow">
              <Shield className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold tracking-tight">ShadowVault</span>
            <span className="ml-2 hidden sm:inline-flex text-[10px] uppercase tracking-widest text-muted-foreground border border-border/60 rounded px-1.5 py-0.5">v1 · Mainnet</span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#security" className="hover:text-foreground transition">Security</a>
            <a href="#vaults" className="hover:text-foreground transition">Vaults</a>
            <a href="#roadmap" className="hover:text-foreground transition">Roadmap</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#demo" className="hidden sm:inline-flex h-9 items-center px-3 rounded-lg text-sm text-muted-foreground hover:text-foreground transition">View Demo</a>
            <Link to="/app" className="inline-flex h-9 items-center px-4 rounded-lg bg-violet text-primary-foreground text-sm font-medium glow hover:opacity-95 transition">Launch App</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
