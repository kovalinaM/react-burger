import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
