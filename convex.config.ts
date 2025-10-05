import { defineConfig } from "convex/dev";

export default defineConfig({
  // This is the default value, but it's good to be explicit
  project: process.env.CONVEX_PROJECT_ID!,
});
