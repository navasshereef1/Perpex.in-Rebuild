import EntityManager from "@/components/admin/EntityManager";

export default function SectorsManager() {
  return (
    <EntityManager
      title="Sectors"
      endpoint="/api/admin/sectors"
      titleField="name"
      subtitleField="slug"
      fields={[
        { key: "slug", label: "Slug" },
        { key: "name", label: "Name" },
        { key: "description", label: "Description", type: "textarea", span: 2 },
      ]}
    />
  );
}
