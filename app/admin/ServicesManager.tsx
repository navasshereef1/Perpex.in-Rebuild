import EntityManager from "@/components/admin/EntityManager";

export default function ServicesManager() {
  return (
    <EntityManager
      title="Services"
      endpoint="/api/admin/services"
      titleField="title"
      subtitleField="stage"
      fields={[
        { key: "slug", label: "Slug" },
        { key: "stage", label: "Stage (Diagnose/Design/Enable/Control)" },
        { key: "title", label: "Title", span: 2 },
        { key: "tagline", label: "Tagline", span: 2 },
        { key: "description", label: "Description", type: "textarea", span: 2 },
      ]}
    />
  );
}
