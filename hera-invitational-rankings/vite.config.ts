import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    target: 'es2022',
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        clips: resolve(__dirname, "clips.html"),
        statistics: resolve(__dirname, "statistics.html")
      },
    },
  },
});