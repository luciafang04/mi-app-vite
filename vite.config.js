import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/mi-app-vite/',
  server: {
    allowedHosts: ["subatomic-tangela-liquidly.ngrok-free.dev"],
  },
});
