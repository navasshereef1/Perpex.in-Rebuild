// Auth is enforced by middleware.ts for all /api/admin/* routes.
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const serviceSchema = z.object({
  slug: z.string().min(1),
  stage: z.string().optional(),
  title: z.string().min(1),
  tagline: z.string().optional(),
  description: z.string().min(1),
  whatWeAnalyze: z.array(z.object({ title: z.string(), description: z.string().optional() })).optional(),
  deliverables: z.array(z.string()).optional(),
  displayOrder: z.number().optional(),
  isActive: z.boolean().optional(),
});

function dbUnavailable() {
  return NextResponse.json(
    { success: false, error: "Database is not configured yet (DATABASE_URL missing)." },
    { status: 503 }
  );
}

export async function GET() {
  if (!process.env.DATABASE_URL) return dbUnavailable();
  try {
    const { db } = await import("@/lib/db");
    const { services } = await import("@/lib/db/schema");
    const { asc } = await import("drizzle-orm");
    const rows = await db.select().from(services).orderBy(asc(services.displayOrder));
    return NextResponse.json({ success: true, data: rows });
  } catch (err) {
    console.error("[admin/services GET]", err);
    return NextResponse.json({ success: false, error: "Failed to load services." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!process.env.DATABASE_URL) return dbUnavailable();
  const body = await request.json();
  const parsed = serviceSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ success: false, error: "Invalid service data." }, { status: 400 });
  }

  try {
    const { db } = await import("@/lib/db");
    const { services } = await import("@/lib/db/schema");
    const [row] = await db.insert(services).values(parsed.data).returning();
    return NextResponse.json({ success: true, data: row });
  } catch (err) {
    console.error("[admin/services POST]", err);
    return NextResponse.json({ success: false, error: "Failed to create service." }, { status: 500 });
  }
}
