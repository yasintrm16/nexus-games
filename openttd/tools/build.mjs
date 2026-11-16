// SPDX-License-Identifier: GPL-2.0-only
// npm run build — copies what a host page embeds into dist/.
// Does not recompile openttd.js / openttd.wasm / openttd.data.
import { cpSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");
const shipped = [
  "ais6-bridge.js",
  "app.manifest.json",
  "index.html",
  "openttd.data",
  "openttd.js",
  "openttd.wasm",
  "shell.js",
  // What the binaries are and how they were built travels with them.
  "SOURCE.txt",
  "build",
];

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
for (const path of shipped) cpSync(join(root, path), join(dist, path), { recursive: true });
console.log(`built dist/ (${shipped.join(", ")})`);
