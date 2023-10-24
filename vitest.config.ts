import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import * as path from "path";
// https://vitejs.dev/config/
console.log(__dirname);
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@web": path.resolve(__dirname, "./src"),
    },
  },
});
