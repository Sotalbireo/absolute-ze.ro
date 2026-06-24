import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  globalSetup: "./tests/global.setup.ts",
  testDir: "./tests",
  outputDir: "./test-results",
  projects: [
    {
      name: "pc",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "sp",
      use: {
        ...devices["iPhone 17"],
      },
    }
  ],
  use: {
    baseURL: "http://localhost:3000",
  },
  webServer: {
    command: "yarn dev",
    url: "http://localhost:3000",
    reuseExistingServer: true,
  },
});
