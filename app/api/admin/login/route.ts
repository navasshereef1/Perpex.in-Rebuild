import { NextRequest, NextResponse } from "next/server";
import { checkAdminCredentials, createAdminSession } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (!process.env.ADMIN_SESSION_SECRET || !process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { success: false, error: "Admin login isn't configured yet. Set ADMIN_EMAIL, ADMIN_PASSWORD, and ADMIN_SESSION_SECRET." },
      { status: 503 }
    );
  }

  if (!checkAdminCredentials(email, password)) {
    return NextResponse.json({ success: false, error: "Invalid email or password." }, { status: 401 });
  }

  await createAdminSession(email);
  return NextResponse.json({ success: true });
}
