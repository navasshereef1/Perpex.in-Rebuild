import { getAdminSession } from "@/lib/auth";
import ServicesManager from "./ServicesManager";
import LogoutButton from "./LogoutButton";

const comingSoon = [
  "Engagement Models",
  "Training Tiers",
  "Sectors",
  "Case Studies",
  "Testimonials",
  "Blog",
  "Team Members",
  "Inquiries",
];

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

        <div className="mt-10">
          <ServicesManager />
        </div>

        <div className="mt-6 rounded-[28px] border border-navy-900/[0.06] bg-white p-8">
          <h2 className="font-display text-xl text-navy-900">Coming Soon</h2>
          <p className="mt-2 text-[14px] text-navy-900/50">
            The remaining content types are modeled in the schema but not yet wired to this
            admin panel — Services is the working template.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {comingSoon.map((label) => (
              <span
                key={label}
                className="rounded-full bg-navy-900/[0.06] px-4 py-2 text-[13px] text-navy-900/60"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
