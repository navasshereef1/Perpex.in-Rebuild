"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-full border border-navy-900/15 px-5 py-2.5 text-[13px] text-navy-900/70 hover:text-navy-900"
    >
      Sign out
    </button>
  );
}
