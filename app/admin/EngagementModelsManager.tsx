import EntityManager from "@/components/admin/EntityManager";

export default function EngagementModelsManager() {
  return (
    <EntityManager
      title="Engagement Models"
      endpoint="/api/admin/engagement-models"
      titleField="name"
      subtitleField="bestFor"
      fields={[
        { key: "name", label: "Name", span: 2 },
        { key: "servicesIncluded", label: "Services Included", type: "textarea", span: 2 },
        { key: "bestFor", label: "Best For", span: 2 },
      ]}
    />
  );
}
