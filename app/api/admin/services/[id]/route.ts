// Auth is enforced by middleware.ts for all /api/admin/* routes.
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const updateSchema = z.object({
  slug: z.string().min(1).optional(),
  stage: z.string().optional(),
  title: z.string().min(1).optional(),
  tagline: z.string().optional(),
  description: z.string().min(1).optional(),
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

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!process.env.DATABASE_URL) return dbUnavailable();
  const { id } = await params;
  const body = await request.json();
  const parsed = updateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ success: false, error: "Invalid service data." }, { status: 400 });
  }

  try {
    const { db } = await import("@/lib/db");
    const { services } = await import("@/lib/db/schema");
    const { eq } = await import("drizzle-orm");
    const [row] = await db
      .update(services)
      .set({ ...parsed.data, updatedAt: new Date() })
      .where(eq(services.id, Number(id)))
      .returning();
    if (!row) return NextResponse.json({ success: false, error: "Service not found." }, { status: 404 });
    return NextResponse.json({ success: true, data: row });
  } catch (err) {
    console.error("[admin/services PUT]", err);
    return NextResponse.json({ success: false, error: "Failed to update service." }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!process.env.DATABASE_URL) return dbUnavailable();
  const { id } = await params;

  try {
    const { db } = await import("@/lib/db");
    const { services } = await import("@/lib/db/schema");
    const { eq } = await import("drizzle-orm");
    await db.delete(services).where(eq(services.id, Number(id)));
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[admin/services DELETE]", err);
    return NextResponse.json({ success: false, error: "Failed to delete service." }, { status: 500 });
  }
}
