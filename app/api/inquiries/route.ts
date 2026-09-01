import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().min(1),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  serviceInterest: z.string().optional(),
  message: z.string().optional(),
  source: z.string().optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = inquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Please check the form fields and try again." },
      { status: 400 }
    );
  }

  if (!process.env.DATABASE_URL) {
    console.warn("[inquiries] DATABASE_URL not configured — inquiry not persisted:", parsed.data);
    return NextResponse.json(
      { success: false, error: "The inquiry system isn't fully set up yet — please email info@perpex.in directly." },
      { status: 503 }
    );
  }

  try {
    const { db } = await import("@/lib/db");
    const { inquiries } = await import("@/lib/db/schema");
    await db.insert(inquiries).values(parsed.data);

    const { sendInquiryNotification } = await import("@/lib/email");
    await sendInquiryNotification(parsed.data);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[inquiries] insert failed:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong submitting your inquiry. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
