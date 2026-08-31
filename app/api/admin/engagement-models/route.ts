import { createListCreateHandlers } from "@/lib/adminCrud";
export const { GET, POST } = createListCreateHandlers("engagementModels", "displayOrder");
