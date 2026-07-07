import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "u62fmbuz",
  dataset: "production",
  apiVersion: "2026-05-15",
  useCdn: false,
});
