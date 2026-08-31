// DB-backed reads for public pages, each falling back to the static
// brochure-sourced fixtures in lib/seedData.ts if the database is
// unavailable or empty — the site should never hard-fail because of this.
import * as fallback from "../seedData";

async function safeQuery<T>(fn: () => Promise<T[]>, fallbackData: T[]): Promise<T[]> {
  if (!process.env.DATABASE_URL) return fallbackData;
  try {
    const rows = await fn();
    return rows.length > 0 ? rows : fallbackData;
  } catch (err) {
    console.error("[db query] falling back to static data:", err);
    return fallbackData;
  }
}

export async function getServices() {
  return safeQuery(async () => {
    const { db } = await import("./index");
    const { services } = await import("./schema");
    const { asc, eq } = await import("drizzle-orm");
    return db.select().from(services).where(eq(services.isActive, true)).orderBy(asc(services.displayOrder));
  }, fallback.services as any);
}

export async function getServiceBySlug(slug: string) {
  const all = await getServices();
  return all.find((s: any) => s.slug === slug) ?? null;
}

export async function getEngagementModels() {
  return safeQuery(async () => {
    const { db } = await import("./index");
    const { engagementModels } = await import("./schema");
    const { asc, eq } = await import("drizzle-orm");
    return db
      .select()
      .from(engagementModels)
      .where(eq(engagementModels.isActive, true))
      .orderBy(asc(engagementModels.displayOrder));
  }, fallback.engagementModels as any);
}

export async function getTrainingTiers() {
  return safeQuery(async () => {
    const { db } = await import("./index");
    const { trainingTiers } = await import("./schema");
    const { asc, eq } = await import("drizzle-orm");
    return db
      .select()
      .from(trainingTiers)
      .where(eq(trainingTiers.isActive, true))
      .orderBy(asc(trainingTiers.displayOrder));
  }, fallback.trainingTiers as any);
}

export async function getSectors() {
  return safeQuery(async () => {
    const { db } = await import("./index");
    const { sectors } = await import("./schema");
    const { asc, eq } = await import("drizzle-orm");
    const rows = await db
      .select()
      .from(sectors)
      .where(eq(sectors.isActive, true))
      .orderBy(asc(sectors.displayOrder));
    return rows.map((r) => r.name);
  }, fallback.sectors);
}

export async function getCaseStudies() {
  return safeQuery(async () => {
    const { db } = await import("./index");
    const { caseStudies } = await import("./schema");
    const { desc, eq } = await import("drizzle-orm");
    return db
      .select()
      .from(caseStudies)
      .where(eq(caseStudies.isPublished, true))
      .orderBy(desc(caseStudies.publishedAt));
  }, []);
}

export async function getCaseStudyBySlug(slug: string) {
  const all = await getCaseStudies();
  return all.find((c: any) => c.slug === slug) ?? null;
}

export async function getTestimonials() {
  return safeQuery(async () => {
    const { db } = await import("./index");
    const { testimonials } = await import("./schema");
    const { asc, eq } = await import("drizzle-orm");
    return db
      .select()
      .from(testimonials)
      .where(eq(testimonials.isActive, true))
      .orderBy(asc(testimonials.displayOrder));
  }, fallback.testimonials as any);
}
