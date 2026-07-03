import { copyFileSync, cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const outputDir = "dist";
const staticFiles = ["index.html", "services.html", "gallery.html", "about.html", "contact.html"];
const staticDirs = ["assets", "css", "js"];

if (existsSync(outputDir)) {
  rmSync(outputDir, { recursive: true, force: true });
}

mkdirSync(outputDir);

for (const file of staticFiles) {
  copyFileSync(file, join(outputDir, file));
}

for (const dir of staticDirs) {
  cpSync(dir, join(outputDir, dir), { recursive: true });
}
