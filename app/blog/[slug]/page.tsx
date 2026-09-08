import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import RichContentBlocks from "@/components/ui/RichContentBlocks";
import { blogs as fallbackBlogs } from "@/lib/seedData";
import { parseRichContent } from "@/lib/richContent";

export const dynamic = "force-dynamic";

async function getPost(slug: string) {
  const fallbackPost = fallbackBlogs.find((b) => b.slug === slug) ?? null;
  if (!process.env.DATABASE_URL) return fallbackPost;
  try {
    const { db } = await import("@/lib/db");
    const { blogs } = await import("@/lib/db/schema");
    const { eq } = await import("drizzle-orm");
    const [post] = await db.select().from(blogs).where(eq(blogs.slug, slug)).limit(1);
    return post ?? fallbackPost;
  } catch (err) {
    console.error("[blog] failed to load post:", err);
    return fallbackPost;
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

  const tags = (post.tags ?? "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const blocks = parseRichContent(post.content);

  return (
    <>
      <PageHero title={post.title} description={post.excerpt ?? undefined} />
      <section className="pb-24 md:pb-32">
        <Container>
          {(post.authorName || tags.length > 0) && (
            <div className="mb-8 flex flex-wrap items-center gap-3">
              {post.authorName && <p className="text-[15px] text-navy-500">By {post.authorName}</p>}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-mist px-3 py-1 text-[13px] text-navy-600 ring-1 ring-navy-900/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
          <div className="max-w-[68ch]">
            <RichContentBlocks blocks={blocks} />
          </div>
        </Container>
      </section>
    </>
  );
}
