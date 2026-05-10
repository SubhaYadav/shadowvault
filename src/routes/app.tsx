import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Dashboard — ShadowVault" },
      { name: "description", content: "Institutional cross-chain treasury dashboard." },
    ],
  }),
  component: AppLayout,
});

function AppLayout() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1 p-4 md:p-8 space-y-6 animate-float-up">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
