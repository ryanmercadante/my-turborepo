import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:3000",
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.ts",
    video: true,
    screenshotOnRunFailure: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    // Increase timeout for CI environments
    defaultCommandTimeout: 10000,
    // Retry failed tests in CI
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
