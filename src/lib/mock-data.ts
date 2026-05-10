export type Chain = {
  id: string;
  name: string;
  symbol: string;
  balance: number;
  usd: number;
  change24h: number;
  status: "synced" | "syncing" | "degraded";
  txs24h: number;
  color: string;
};

export const chains: Chain[] = [
  { id: "btc", name: "Bitcoin", symbol: "BTC", balance: 184.21, usd: 12_485_300, change24h: 2.4, status: "synced", txs24h: 312, color: "#F7931A" },
  { id: "eth", name: "Ethereum", symbol: "ETH", balance: 4_812.55, usd: 18_220_410, change24h: 1.1, status: "synced", txs24h: 1284, color: "#8a92ff" },
  { id: "sol", name: "Solana", symbol: "SOL", balance: 162_904.0, usd: 26_741_900, change24h: 4.8, status: "synced", txs24h: 4821, color: "#9945FF" },
  { id: "base", name: "Base", symbol: "ETH", balance: 1_204.32, usd: 4_510_200, change24h: -0.4, status: "syncing", txs24h: 642, color: "#2151F5" },
];

export const portfolioSeries = Array.from({ length: 60 }).map((_, i) => {
  const t = i / 59;
  const base = 48 + Math.sin(t * 6) * 4 + t * 18 + Math.sin(t * 30) * 1.5;
  return { x: i, value: +(base * 1_000_000).toFixed(0) };
});

export const allocation = [
  { name: "BTC", value: 21, color: "#F7931A" },
  { name: "ETH", value: 30, color: "#8a92ff" },
  { name: "SOL", value: 41, color: "#9945FF" },
  { name: "Base", value: 8, color: "#2151F5" },
];

export type Tx = {
  id: string;
  chain: string;
  type: "Inflow" | "Outflow" | "Swap" | "Bridge" | "Vault";
  asset: string;
  amount: string;
  usd: number;
  status: "Confirmed" | "Pending" | "Encrypted";
  time: string;
  hash: string;
};

export const transactions: Tx[] = [
  { id: "1", chain: "Solana",  type: "Inflow",  asset: "USDC", amount: "+1,250,000", usd: 1_250_000, status: "Confirmed", time: "2m ago",  hash: "5h…u8q" },
  { id: "2", chain: "Ethereum",type: "Bridge",  asset: "ETH",  amount: "320.4",      usd: 1_212_300, status: "Encrypted", time: "11m ago", hash: "0x…a1c" },
  { id: "3", chain: "Bitcoin", type: "Vault",   asset: "BTC",  amount: "12.0",       usd: 815_400,   status: "Confirmed", time: "27m ago", hash: "bc1…m4d" },
  { id: "4", chain: "Base",    type: "Swap",    asset: "ETH→USDC", amount: "184.0",  usd: 690_120,   status: "Pending",   time: "44m ago", hash: "0x…d72" },
  { id: "5", chain: "Solana",  type: "Outflow", asset: "SOL",  amount: "-4,200",     usd: 691_320,   status: "Confirmed", time: "1h ago",  hash: "9p…lz1" },
  { id: "6", chain: "Ethereum",type: "Vault",   asset: "WBTC", amount: "3.2",        usd: 217_440,   status: "Encrypted", time: "2h ago",  hash: "0x…fa3" },
  { id: "7", chain: "Solana",  type: "Inflow",  asset: "USDT", amount: "+820,000",   usd: 820_000,   status: "Confirmed", time: "3h ago",  hash: "Az…r02" },
];

export const agents = [
  { id: "guard-01", name: "Sentinel-α", role: "Risk Guardrail", status: "Active",  risk: 12, limit: "$2.5M / day", protocols: ["Jupiter", "Aave", "Marinade"] },
  { id: "guard-02", name: "Vega-β",     role: "Yield Optimizer", status: "Active",  risk: 28, limit: "$1.0M / day", protocols: ["Kamino", "MarginFi"] },
  { id: "guard-03", name: "Orion-γ",    role: "Bridge Monitor",  status: "Standby", risk: 7,  limit: "$5.0M / day", protocols: ["Wormhole", "deBridge"] },
  { id: "guard-04", name: "Atlas-δ",    role: "Compliance",      status: "Active",  risk: 4,  limit: "$10M / day",  protocols: ["All"] },
];

export const vaults = [
  { id: "v1", name: "Arbitrage Vault",   apy: 18.4, risk: "Medium", tvl: 8_420_000,  status: "Open",   privacy: "High"   },
  { id: "v2", name: "Yield Vault",       apy: 9.2,  risk: "Low",    tvl: 24_120_000, status: "Open",   privacy: "Medium" },
  { id: "v3", name: "AI Trading Vault",  apy: 31.6, risk: "High",   tvl: 6_180_000,  status: "Open",   privacy: "Maximum"},
  { id: "v4", name: "Institutional Vault",apy: 6.8, risk: "Min",    tvl: 41_540_000, status: "Closed", privacy: "Maximum"},
];

export const teamMembers = [
  { id: "u1", name: "Alex Whitman",    role: "Admin",   email: "alex@shadowvault.io",   last: "Online" },
  { id: "u2", name: "Mira Velasquez",  role: "Trader",  email: "mira@shadowvault.io",   last: "5m ago" },
  { id: "u3", name: "Jonas Park",      role: "Auditor", email: "jonas@shadowvault.io",  last: "1h ago" },
  { id: "u4", name: "Sera Okafor",     role: "Viewer",  email: "sera@shadowvault.io",   last: "Yesterday" },
];

export function fmtUsd(n: number) {
  if (n >= 1_000_000_000) return `$${(n/1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `$${(n/1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n/1_000).toFixed(1)}K`;
  return `$${n.toFixed(2)}`;
}

export const treasuryTotal = chains.reduce((s, c) => s + c.usd, 0);
