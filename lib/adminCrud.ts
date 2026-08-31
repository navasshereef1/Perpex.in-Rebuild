// Shared CRUD handler factory for /api/admin/* routes. Auth is enforced by
// middleware.ts for the whole /api/admin/* prefix — these handlers assume
// the request already passed that check.
import { NextRequest, NextResponse } from "next/server";

function dbUnavailable() {
  return NextResponse.json(
    { success: false, error: "Database is not configured yet (DATABASE_URL missing)." },
    { status: 503 }
  );
}

export function createListCreateHandlers(tableName: string, orderByKey?: string) {
  async function GET() {
    if (!process.env.DATABASE_URL) return dbUnavailable();
    try {
      const { db } = await import("./db");
      const schema = await import("./db/schema");
      const table = (schema as any)[tableName];
      const drizzleOrm = await import("drizzle-orm");
      let query = db.select().from(table);
      if (orderByKey && table[orderByKey]) {
        query = query.orderBy(drizzleOrm.asc(table[orderByKey])) as any;
      }
      const rows = await query;
      return NextResponse.json({ success: true, data: rows });
    } catch (err) {
      console.error(`[admin/${tableName} GET]`, err);
      return NextResponse.json({ success: false, error: "Failed to load." }, { status: 500 });
    }
  }

  async function POST(request: NextRequest) {
    if (!process.env.DATABASE_URL) return dbUnavailable();
    const body = await request.json();
    try {
      const { db } = await import("./db");
      const schema = await import("./db/schema");
      const table = (schema as any)[tableName];
      const [row] = await db.insert(table).values(body).returning();
      return NextResponse.json({ success: true, data: row });
    } catch (err) {
      console.error(`[admin/${tableName} POST]`, err);
      return NextResponse.json({ success: false, error: "Failed to create." }, { status: 500 });
    }
  }

  return { GET, POST };
}

export function createUpdateDeleteHandlers(tableName: string) {
  async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    if (!process.env.DATABASE_URL) return dbUnavailable();
    const { id } = await params;
    const body = await request.json();
    try {
      const { db } = await import("./db");
      const schema = await import("./db/schema");
      const table = (schema as any)[tableName];
      const { eq } = await import("drizzle-orm");
      const updates: Record<string, unknown> = { ...body };
      if (table.updatedAt) updates.updatedAt = new Date();
      const [row] = await db.update(table).set(updates).where(eq(table.id, Number(id))).returning();
      if (!row) return NextResponse.json({ success: false, error: "Not found." }, { status: 404 });
      return NextResponse.json({ success: true, data: row });
    } catch (err) {
      console.error(`[admin/${tableName} PUT]`, err);
      return NextResponse.json({ success: false, error: "Failed to update." }, { status: 500 });
    }
  }

  async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    if (!process.env.DATABASE_URL) return dbUnavailable();
    const { id } = await params;
    try {
      const { db } = await import("./db");
      const schema = await import("./db/schema");
      const table = (schema as any)[tableName];
      const { eq } = await import("drizzle-orm");
      await db.delete(table).where(eq(table.id, Number(id)));
      return NextResponse.json({ success: true });
    } catch (err) {
      console.error(`[admin/${tableName} DELETE]`, err);
      return NextResponse.json({ success: false, error: "Failed to delete." }, { status: 500 });
    }
  }

  return { PUT, DELETE };
}
