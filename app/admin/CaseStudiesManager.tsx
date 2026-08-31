import EntityManager from "@/components/admin/EntityManager";

export default function CaseStudiesManager() {
  return (
    <EntityManager
      title="Case Studies"
      endpoint="/api/admin/case-studies"
      titleField="clientName"
      subtitleField="slug"
      fields={[
        { key: "slug", label: "Slug" },
        { key: "clientName", label: "Client Name" },
        { key: "summary", label: "Summary", type: "textarea", span: 2 },
        { key: "content", label: "Content", type: "textarea", span: 2 },
        { key: "isPublished", label: "Published", type: "checkbox" },
        { key: "isFeatured", label: "Featured", type: "checkbox" },
      ]}
    />
  );
}
