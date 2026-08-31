import { createListCreateHandlers } from "@/lib/adminCrud";
export const { GET, POST } = createListCreateHandlers("trainingTiers", "displayOrder");
