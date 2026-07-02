import { copyFileSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const outputDir = "dist";
const staticFiles = ["index.html", "styles.css"];

if (existsSync(outputDir)) {
  rmSync(outputDir, { recursive: true, force: true });
}

mkdirSync(outputDir);

for (const file of staticFiles) {
  copyFileSync(file, join(outputDir, file));
}
