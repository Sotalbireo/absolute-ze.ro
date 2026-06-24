import { test } from "@playwright/test";
import { records } from "../app/data/records";

for (let i = 0; i < records.length; i++) {
  const record = records[i];
  test(`pattern ${String(i).padStart(2, "0")} [${record.type}] ${[...record.value].join("").replace(/\n/g, "").slice(0, 10)}`, async ({
    page,
  }, { project }) => {
    await page.addInitScript(
      (idx) => {
        Math.random = () => idx;
      },
      (i + 0.5) / records.length,
    );

    await page.goto("/", { waitUntil: "networkidle" });
    await page.screenshot({
      path: `screenshots/${project.name}/${String(i).padStart(2, "0")}-${record.type}.png`,
      fullPage: true,
    });
  });
}
