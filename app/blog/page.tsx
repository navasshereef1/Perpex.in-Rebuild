import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Insights",
  description: "Thinking on operational transformation, from the PerpeX Insights team.",
};

export const dynamic = "force-dynamic";

async function getPosts() {
  if (!process.env.DATABASE_URL) return [];
  try {
    const { db } = await import("@/lib/db");
    const { blogs } = await import("@/lib/db/schema");
    const { eq, desc } = await import("drizzle-orm");
    return await db
      .select()
      .from(blogs)
      .where(eq(blogs.isPublished, true))
      .orderBy(desc(blogs.publishedAt));
  } catch (err) {
    console.error("[blog] failed to load posts:", err);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes on running a business that runs itself."
        description="Thinking on gap analysis, documentation, training, and daily execution — published as engagements teach us something worth sharing."
      />

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-[1440px]">
          {posts.length === 0 ? (
            <div className="rounded-[28px] bg-cream-100 p-10 text-center md:p-14">
              <p className="text-[15px] text-navy-900/50">
                No posts published yet — check back soon, or manage content once the admin CMS
                is connected.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {posts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-[28px] border border-navy-900/[0.06] bg-white p-8 transition-shadow hover:shadow-[0_20px_50px_rgba(0,27,74,0.08)]"
                >
                  <h2 className="font-display text-2xl text-navy-900">{post.title}</h2>
                  {post.excerpt && (
                    <p className="mt-3 text-[15px] leading-relaxed text-navy-900/55">
                      {post.excerpt}
                    </p>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
