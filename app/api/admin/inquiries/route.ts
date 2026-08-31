import { createListCreateHandlers } from "@/lib/adminCrud";
export const { GET } = createListCreateHandlers("inquiries", "createdAt");
