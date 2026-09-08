// One-off: push the case studies, blog posts, and team members added to
// lib/seedData.ts into the live DB. Case studies and blogs upsert on slug;
// team_members has no natural unique key yet, so it clears and re-inserts.
// Run with: npx tsx scripts/seed-new-content.ts
import { db, client } from "../lib/db";
import { caseStudies, blogs, teamMembers } from "../lib/db/schema";
import { eq } from "drizzle-orm";
import {
  caseStudies as seedCaseStudies,
  blogs as seedBlogs,
  teamMembers as seedTeamMembers,
} from "../lib/seedData";

async function run() {
  for (const c of seedCaseStudies) {
    const existing = await db.select().from(caseStudies).where(eq(caseStudies.slug, c.slug)).limit(1);
    const values = {
      slug: c.slug,
      clientName: c.clientName,
      clientLogo: c.clientLogo,
      summary: c.summary,
      content: c.content,
      isFeatured: c.isFeatured,
      isPublished: c.isPublished,
      publishedAt: new Date(),
      updatedAt: new Date(),
    };
    if (existing.length > 0) {
      await db.update(caseStudies).set(values).where(eq(caseStudies.slug, c.slug));
    } else {
      await db.insert(caseStudies).values(values);
    }
    console.log(`Case study: ${c.slug}`);
  }

  for (const b of seedBlogs) {
    const existing = await db.select().from(blogs).where(eq(blogs.slug, b.slug)).limit(1);
    const values = {
      slug: b.slug,
      title: b.title,
      excerpt: b.excerpt,
      content: b.content,
      authorName: b.authorName,
      isPublished: b.isPublished,
      publishedAt: new Date(),
      updatedAt: new Date(),
    };
    if (existing.length > 0) {
      await db.update(blogs).set(values).where(eq(blogs.slug, b.slug));
    } else {
      await db.insert(blogs).values(values);
    }
    console.log(`Blog: ${b.slug}`);
  }

  await db.delete(teamMembers);
  for (const t of seedTeamMembers) {
    await db.insert(teamMembers).values({
      name: t.name,
      role: t.role,
      displayOrder: t.displayOrder,
      isActive: true,
    });
    console.log(`Team member: ${t.name}`);
  }

  await client.end();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
