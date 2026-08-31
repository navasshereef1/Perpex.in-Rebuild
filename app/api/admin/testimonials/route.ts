import { createListCreateHandlers } from "@/lib/adminCrud";
export const { GET, POST } = createListCreateHandlers("testimonials", "displayOrder");
