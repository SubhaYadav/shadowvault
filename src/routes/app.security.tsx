import { createFileRoute } from "@tanstack/react-router";
import { SecurityScore, EncryptedAnalytics } from "@/components/dashboard/widgets";
import { ShieldCheck, KeyRound, Cpu, Lock } from "lucide-react";

export const Route = createFileRoute("/app/security")({ component: SecurityPage });

function SecurityPage() {
  return (
    <>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">Posture</div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Security</h1>
        <p className="text-sm text-muted-foreground">Cryptographic controls, attestations and audit posture.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <SecurityScore/>
        <EncryptedAnalytics/>
        <div className="rounded-2xl glass p-5">
          <div className="flex items-center gap-2 text-sm font-semibold"><Lock className="h-4 w-4"/> Confidential layer</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-success"/> Encrypt commitments verified</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-success"/> Auditor disclosure key healthy</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-success"/> No leakage detected · 30d</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {[
          { i: KeyRound, t: "MPC Custody", d: "7-of-9 threshold across geographically distributed signers. Last quorum check 22s ago." },
          { i: Cpu,      t: "Attested Execution", d: "All AI agent actions run inside attested enclaves with replayable traces." },
          { i: ShieldCheck, t: "Compliance", d: "SOC2 Type II in progress. Selective disclosure available for whitelisted auditors." },
          { i: Lock, t: "Bridge Hardening", d: "Bridges allow-listed via Atlas-δ guardrail. Anomaly detection on every relay." },
        ].map(({i:Icon,t,d}) => (
          <div key={t} className="rounded-2xl glass p-5">
            <div className="flex items-center gap-2"><Icon className="h-4 w-4 text-primary"/> <div className="text-sm font-semibold">{t}</div></div>
            <p className="text-sm text-muted-foreground mt-2">{d}</p>
          </div>
        ))}
      </div>
    </>
  );
}
