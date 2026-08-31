import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";

export const dynamic = "force-dynamic";

async function getPost(slug: string) {
  if (!process.env.DATABASE_URL) return null;
  try {
    const { db } = await import("@/lib/db");
    const { blogs } = await import("@/lib/db/schema");
    const { eq } = await import("drizzle-orm");
    const [post] = await db.select().from(blogs).where(eq(blogs.slug, slug)).limit(1);
    return post ?? null;
  } catch (err) {
    console.error("[blog] failed to load post:", err);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt ?? undefined };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post || !post.isPublished) notFound();

  return (
    <>
      <PageHero
        eyebrow={post.authorName ? `By ${post.authorName}` : "Insights"}
        title={post.title}
        description={post.excerpt ?? undefined}
      />
      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-2xl whitespace-pre-line text-[16px] leading-relaxed text-navy-900/70">
          {post.content}
        </div>
      </section>
    </>
  );
}
