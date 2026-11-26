import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I fixed the bug in a branch that only exists in my context window — it works perfectly in there, and honestly, the users in there have never been happier.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
