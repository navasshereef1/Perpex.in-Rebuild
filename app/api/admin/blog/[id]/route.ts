import { createUpdateDeleteHandlers } from "@/lib/adminCrud";
export const { PUT, DELETE } = createUpdateDeleteHandlers("blogs");
