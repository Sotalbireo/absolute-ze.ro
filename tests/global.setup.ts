import { mkdirSync, rmSync } from "node:fs";
import { chromium, type FullConfig } from "@playwright/test";

export default async function globalSetup(_config: FullConfig) {
  try {
    const browser = await chromium.launch();
    await browser.close();
  } catch (err) {
    throw new Error(
      [
        "Playwright browser binaries are not installed.",
        "Run:",
        "",
        "  npx playwright install",
      ].join("\n"),
      { cause: err },
    );
  }

  rmSync("screenshots", { recursive: true, force: true });
  mkdirSync("screenshots");
}
