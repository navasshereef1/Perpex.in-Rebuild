// One-off: sync copy from lib/seedData.ts into the already-seeded live DB rows
// (services and engagement models). Run with: npx tsx scripts/update-service-content.ts
import { db, client } from "../lib/db";
import { services, engagementModels } from "../lib/db/schema";
import { eq } from "drizzle-orm";
import { services as seedServices, engagementModels as seedModels } from "../lib/seedData";

async function run() {
  for (const s of seedServices) {
    await db
      .update(services)
      .set({
        tagline: s.tagline,
        description: s.description,
        whatWeAnalyze: s.whatWeAnalyze,
        processSteps: (s as { processSteps?: unknown }).processSteps as never ?? null,
        deliverables: s.deliverables,
        updatedAt: new Date(),
      })
      .where(eq(services.slug, s.slug));
    console.log(`Updated service ${s.slug}`);
  }
  for (const m of seedModels) {
    await db
      .update(engagementModels)
      .set({ servicesIncluded: m.servicesIncluded, bestFor: m.bestFor, updatedAt: new Date() })
      .where(eq(engagementModels.name, m.name));
    console.log(`Updated model ${m.name}`);
  }
  await client.end();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
