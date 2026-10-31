// Fixture tests for scripts/scan.mjs. Run: node tests/run.mjs
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const scan = join(here, "..", "scripts", "scan.mjs");
const run = (file) => {
  try {
    return JSON.parse(execFileSync("node", [scan, join(here, "fixtures", file), "--json"]).toString());
  } catch (e) {
    return JSON.parse(e.stdout.toString());
  }
};
const patterns = (r) => new Set(r.hits.map((h) => h.pattern));
const serious = (r) => r.hits.filter((h) => h.severity !== "L");

const cases = [
  ["slop-dashboard.jsx", (r) => [9, 21, 3, 110, 107, 118, 22, 24, 25, 105, 131, 133, 132, 124, 127, 130, 41, 39, 112, 111, 36, 125, 26].every((p) => patterns(r).has(p)), "finds the vibecoded dashboard tells"],
  ["slop-post.md", (r) => [69, 51, 60, 72, 77, 78, 71, 56, 87, 86, 17, 73].every((p) => patterns(r).has(p)), "finds the writing tells"],
  ["clean-dashboard.jsx", (r) => serious(r).length === 0, "no M or H hits on the clean dashboard"],
  ["clean-post.md", (r) => serious(r).length === 0, "no M or H hits on the clean post"],
];

let failed = 0;
for (const [file, test, name] of cases) {
  const r = run(file);
  const ok = test(r);
  if (!ok) failed++;
  console.log(`${ok ? "pass" : "FAIL"}  ${name}  (${r.hits.length} hits, patterns ${[...patterns(r)].sort((a, b) => a - b).join(" ")})`);
}
process.exit(failed ? 1 : 0);
