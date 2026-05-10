import { createFileRoute } from "@tanstack/react-router";
import { teamMembers } from "@/lib/mock-data";
import { UserPlus, KeyRound } from "lucide-react";

export const Route = createFileRoute("/app/team")({ component: TeamPage });

const roleColor: Record<string,string> = {
  Admin:   "border-primary/40 text-primary bg-primary/10",
  Trader:  "border-accent/40 text-accent bg-accent/10",
  Auditor: "border-warning/40 text-warning bg-warning/10",
  Viewer:  "border-border text-muted-foreground",
};

function TeamPage() {
  return (
    <>
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Access control</div>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">Team Treasury</h1>
          <p className="text-sm text-muted-foreground">Role-based access, multi-sign approvals and recovery workflows.</p>
        </div>
        <button className="h-10 px-4 rounded-lg bg-violet text-primary-foreground text-sm font-medium glow inline-flex items-center gap-2"><UserPlus className="h-4 w-4"/> Invite Member</button>
      </div>

      <div className="rounded-2xl glass p-5">
        <div className="text-sm font-semibold mb-3">Members</div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase tracking-widest text-muted-foreground">
              <tr className="text-left"><th className="py-2">Member</th><th>Role</th><th>Last seen</th><th></th></tr>
            </thead>
            <tbody>
              {teamMembers.map(m => (
                <tr key={m.id} className="border-t border-border/40">
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-cyber grid place-items-center text-xs font-semibold text-primary-foreground">{m.name.split(' ').map(s=>s[0]).join('')}</div>
                      <div>
                        <div className="font-medium">{m.name}</div>
                        <div className="text-xs text-muted-foreground">{m.email}</div>
                      </div>
                    </div>
                  </td>
                  <td><span className={`text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded border ${roleColor[m.role]}`}>{m.role}</span></td>
                  <td className="text-muted-foreground">{m.last}</td>
                  <td className="text-right"><button className="text-xs px-3 py-1.5 rounded-md bg-secondary/60 hover:bg-secondary">Manage</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl glass p-5">
          <div className="text-sm font-semibold">Pending approvals</div>
          <div className="mt-3 space-y-3">
            {[
              { t: "Bridge 2,400 SOL → ETH", w:"2 of 3 signers" },
              { t: "Open Arbitrage Vault · $1.2M", w:"1 of 3 signers" },
              { t: "Rotate device · Mira V.", w:"3 of 3 signers" },
            ].map(p => (
              <div key={p.t} className="flex items-center justify-between p-3 rounded-lg bg-secondary/40 border border-border/40">
                <div>
                  <div className="text-sm font-medium">{p.t}</div>
                  <div className="text-xs text-muted-foreground">{p.w}</div>
                </div>
                <div className="flex gap-2">
                  <button className="text-xs px-3 py-1.5 rounded-md bg-success/20 text-success hover:bg-success/30">Approve</button>
                  <button className="text-xs px-3 py-1.5 rounded-md bg-destructive/20 text-destructive hover:bg-destructive/30">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl glass p-5">
          <div className="text-sm font-semibold flex items-center gap-2"><KeyRound className="h-4 w-4"/> Recovery</div>
          <p className="text-sm text-muted-foreground mt-2">3-of-5 social recovery quorum. Trusted guardians: Anchorage, Fireblocks Custody, BitGo, Internal HSM, Co-Founder Hardware.</p>
          <div className="mt-3 flex gap-2">
            <button className="h-9 px-3 rounded-lg bg-secondary/60 hover:bg-secondary text-sm">View Guardians</button>
            <button className="h-9 px-3 rounded-lg bg-violet text-primary-foreground text-sm font-medium glow">Initiate Recovery</button>
          </div>
        </div>
      </div>
    </>
  );
}
