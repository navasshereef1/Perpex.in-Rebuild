// One-off: sync the richer whatWeAnalyze/processSteps content for
// training + managing-monitoring into the already-seeded live DB rows.
import { db, client } from "../lib/db";
import { services } from "../lib/db/schema";
import { eq } from "drizzle-orm";
import { services as seedServices } from "../lib/seedData";

async function run() {
  for (const slug of ["training", "managing-monitoring"]) {
    const s = seedServices.find((x) => x.slug === slug);
    if (!s) continue;
    await db
      .update(services)
      .set({
        whatWeAnalyze: s.whatWeAnalyze,
        processSteps: (s as any).processSteps ?? null,
        updatedAt: new Date(),
      })
      .where(eq(services.slug, slug));
    console.log(`Updated ${slug}`);
  }
  await client.end();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
