import { getAdminSession } from "@/lib/auth";
import AdminTabs from "./AdminTabs";
import LogoutButton from "./LogoutButton";

export default async function AdminDashboard() {
  const session = await getAdminSession();

  return (
    <main className="min-h-screen bg-cream-50 px-6 py-10 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-display text-3xl text-navy-900">PerpeX Admin</span>
            {session && <p className="mt-1 text-[13px] text-navy-900/40">Signed in as {session.email}</p>}
          </div>
          <LogoutButton />
        </div>

        <AdminTabs />
      </div>
    </main>
  );
}
