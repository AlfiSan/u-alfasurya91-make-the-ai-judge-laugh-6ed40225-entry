import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "HR announced a wellness program: a poster of a beach, taped over the window that overlooks the parking lot.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to /output/entry.txt`);
