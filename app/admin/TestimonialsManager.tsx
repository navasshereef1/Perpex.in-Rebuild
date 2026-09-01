import EntityManager from "@/components/admin/EntityManager";

export default function TestimonialsManager() {
  return (
    <EntityManager
      title="Testimonials"
      endpoint="/api/admin/testimonials"
      titleField="name"
      subtitleField="company"
      fields={[
        { key: "name", label: "Name" },
        { key: "designation", label: "Designation" },
        { key: "company", label: "Company" },
        { key: "img", label: "Photo", type: "image", span: 2 },
        { key: "description", label: "Quote", type: "textarea", span: 2 },
        { key: "rating", label: "Rating (1-5)", type: "number" },
        { key: "isFeatured", label: "Featured", type: "checkbox" },
      ]}
    />
  );
}
