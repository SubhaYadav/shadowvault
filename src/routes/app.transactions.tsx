import { createFileRoute } from "@tanstack/react-router";
import { transactions, fmtUsd } from "@/lib/mock-data";

export const Route = createFileRoute("/app/transactions")({ component: TxPage });

function TxPage() {
  return (
    <>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">Activity</div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Transactions</h1>
        <p className="text-sm text-muted-foreground">Confidential transaction stream across all chains.</p>
      </div>
      <div className="rounded-2xl glass p-5">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase tracking-widest text-muted-foreground">
              <tr className="text-left"><th className="py-2">Type</th><th>Chain</th><th>Asset</th><th>Amount</th><th>Value</th><th>Status</th><th>Time</th><th>Hash</th></tr>
            </thead>
            <tbody>
              {transactions.map(t => (
                <tr key={t.id} className="border-t border-border/40 hover:bg-secondary/20 transition">
                  <td className="py-3"><span className={`text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded border ${
                    t.type==='Inflow' ? "border-success/40 text-success bg-success/10" :
                    t.type==='Outflow' ? "border-destructive/40 text-destructive bg-destructive/10" :
                    t.type==='Bridge' ? "border-accent/40 text-accent bg-accent/10" : "border-primary/40 text-primary bg-primary/10"
                  }`}>{t.type}</span></td>
                  <td>{t.chain}</td>
                  <td>{t.asset}</td>
                  <td className="font-medium">{t.amount}</td>
                  <td>{fmtUsd(t.usd)}</td>
                  <td><span className={`text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded border ${
                    t.status==='Confirmed' ? "border-success/40 text-success bg-success/10" :
                    t.status==='Pending' ? "border-warning/40 text-warning bg-warning/10" :
                    "border-primary/40 text-primary bg-primary/10"
                  }`}>{t.status}</span></td>
                  <td className="text-muted-foreground">{t.time}</td>
                  <td className="font-mono text-xs text-muted-foreground">{t.hash}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
