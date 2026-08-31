import EntityManager from "@/components/admin/EntityManager";

export default function TrainingTiersManager() {
  return (
    <EntityManager
      title="Training Tiers"
      endpoint="/api/admin/training-tiers"
      titleField="name"
      subtitleField="targetAudience"
      fields={[
        { key: "name", label: "Name (Essentials/Professional/Enterprise)", span: 2 },
        { key: "targetAudience", label: "Target Audience", span: 2 },
        { key: "format", label: "Format" },
        { key: "trainingHours", label: "Training Hours" },
        { key: "activitySheets", label: "Activity Sheets" },
        { key: "customization", label: "Customization" },
        { key: "whatsIncluded", label: "What's Included", type: "textarea", span: 2 },
      ]}
    />
  );
}
