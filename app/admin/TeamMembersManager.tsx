import EntityManager from "@/components/admin/EntityManager";

export default function TeamMembersManager() {
  return (
    <EntityManager
      title="Team Members"
      endpoint="/api/admin/team-members"
      titleField="name"
      subtitleField="role"
      fields={[
        { key: "name", label: "Name" },
        { key: "role", label: "Role" },
        { key: "bio", label: "Bio", type: "textarea", span: 2 },
        { key: "photo", label: "Photo URL", span: 2 },
      ]}
    />
  );
}
