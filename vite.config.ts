// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//
// - TanStack devtools, tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//   nitro, VITE_* env injection, @ path alias,
//   React/TanStack dedupe, error logger plugins, and sandbox detection.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts.
    server: { entry: "server" },
  },

  nitro: {
    preset: "node-server",
  },
});