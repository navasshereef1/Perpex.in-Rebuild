import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import { blogs as fallbackBlogs } from "@/lib/seedData";

export const metadata: Metadata = {
  title: "Insights",
  description: "Writing on operational transformation from the PerpeX Insights team.",
};

export const dynamic = "force-dynamic";

async function getPosts() {
  if (!process.env.DATABASE_URL) return fallbackBlogs;
  try {
    const { db } = await import("@/lib/db");
    const { blogs } = await import("@/lib/db/schema");
    const { eq, desc } = await import("drizzle-orm");
    const rows = await db
      .select()
      .from(blogs)
      .where(eq(blogs.isPublished, true))
      .orderBy(desc(blogs.publishedAt));
    return rows.length > 0 ? rows : fallbackBlogs;
  } catch (err) {
    console.error("[blog] failed to load posts:", err);
    return fallbackBlogs;
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHero
        title="Notes on running a business that runs itself."
        description="Thinking on gap analysis, documentation, training, and daily execution, published when an engagement teaches us something worth sharing."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          {posts.length === 0 ? (
            <p className="max-w-[50ch] text-lg text-navy-600">No posts published yet. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
              {posts.map((post) => {
                const tags = (post.tags ?? "")
                  .split(",")
                  .map((t) => t.trim())
                  .filter(Boolean)
                  .slice(0, 3);
                return (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="block border-t border-line pt-7">
                    <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-navy-900">{post.title}</h2>
                    {post.excerpt && <p className="mt-3 text-[15px] leading-relaxed text-navy-600">{post.excerpt}</p>}
                    {tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-mist px-3 py-1 text-[13px] text-navy-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
