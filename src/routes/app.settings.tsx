import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/settings")({ component: SettingsPage });

function SettingsPage() {
  return (
    <>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">Workspace</div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">Organization, notifications and integrations.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {[
          { t: "Organization", rows: [["Name","ShadowVault Labs"],["Workspace ID","org_8f2k3p"],["Region","us-east · eu-west"]]},
          { t: "Notifications", rows: [["Slack","#treasury-alerts"],["Email","ops@shadowvault.io"],["Pager","On-call rotation"]]},
          { t: "Integrations", rows: [["Custody","Ika dWallets"],["Privacy","Encrypt"],["Auditor","Trail of Bits"]]},
          { t: "API Keys", rows: [["Read","sv_live_••••a93f"],["Trade","sv_live_••••72b1"],["Admin","Hidden"]]},
        ].map(card => (
          <div key={card.t} className="rounded-2xl glass p-5">
            <div className="text-sm font-semibold mb-3">{card.t}</div>
            <div className="divide-y divide-border/40">
              {card.rows.map(([k,v]) => (
                <div key={k} className="flex items-center justify-between py-2.5 text-sm">
                  <div className="text-muted-foreground">{k}</div>
                  <div className="font-medium font-mono text-xs">{v}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
