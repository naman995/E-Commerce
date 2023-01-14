import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginFonts } from "vite-plugin-fonts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: [
          {
            name: "Satisfy",
            styles: "wght@400;500;700",
          },
        ],
      },
    }),
  ],
});
