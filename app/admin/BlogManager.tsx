import EntityManager from "@/components/admin/EntityManager";

export default function BlogManager() {
  return (
    <EntityManager
      title="Blog"
      endpoint="/api/admin/blog"
      titleField="title"
      subtitleField="slug"
      fields={[
        { key: "title", label: "Title", span: 2 },
        { key: "slug", label: "Slug" },
        { key: "authorName", label: "Author Name" },
        { key: "authorImage", label: "Author Photo", type: "image" },
        { key: "featuredImage", label: "Featured Image", type: "image" },
        { key: "excerpt", label: "Excerpt", type: "textarea", span: 2 },
        { key: "content", label: "Content", type: "textarea", span: 2 },
        { key: "isPublished", label: "Published", type: "checkbox" },
        { key: "isFeatured", label: "Featured", type: "checkbox" },
      ]}
    />
  );
}
