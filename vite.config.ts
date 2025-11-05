import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["Frame 38.png"],
      manifest: {
        name: "Hilda Palacios - BPO Happify",
        short_name: "BPO Happify",
        description: "Servicios de BPO y Contact Center",
        theme_color: "#004AAD",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/Frame 38.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/Frame 38.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  base: "/",
});
