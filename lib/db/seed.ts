// Run with: npm run db:seed (requires DATABASE_URL and a schema already pushed via `npm run db:push`)

import { db, client } from "./index";
import { services, engagementModels, trainingTiers, sectors, testimonials } from "./schema";
import * as seedData from "../seedData";

async function seed() {
  console.log("Seeding services...");
  for (const [index, s] of seedData.services.entries()) {
    await db
      .insert(services)
      .values({ ...s, displayOrder: index })
      .onConflictDoNothing({ target: services.slug });
  }

  console.log("Seeding engagement models...");
  for (const [index, m] of seedData.engagementModels.entries()) {
    await db.insert(engagementModels).values({ ...m, displayOrder: index });
  }

  console.log("Seeding training tiers...");
  for (const [index, t] of seedData.trainingTiers.entries()) {
    await db.insert(trainingTiers).values({ ...t, displayOrder: index });
  }

  console.log("Seeding sectors...");
  const sectorRows = [];
  for (const [index, name] of seedData.sectors.entries()) {
    const [row] = await db
      .insert(sectors)
      .values({ slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name, displayOrder: index })
      .onConflictDoNothing({ target: sectors.slug })
      .returning();
    if (row) sectorRows.push(row);
  }

  console.log("Seeding testimonials...");
  for (const [index, t] of seedData.testimonials.entries()) {
    await db.insert(testimonials).values({ ...t, displayOrder: index });
  }

  console.log("Seed complete.");
  await client.end();
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
