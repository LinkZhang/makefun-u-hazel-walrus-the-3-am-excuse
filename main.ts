// The 3 AM Excuse — make.fun bounty u-hazel-walrus-38-4764-the-3-am-excuse-c1017878
// Writes one line (under 200 characters): a hardware wallet refusing to
// sign a transaction at 3 AM, in the wallet's own voice.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "It's 3 AM and even my seed phrase is asleep. The last time you did crypto this late you bought a coin named after a dog in a hat — I am not signing that again.";

// Gate self-check (mirrors the sealed scorer): UTF-8 text, 1–200 chars,
// not only whitespace, exactly one line.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} chars, must be 1–200`);
}
if (!entry.trim()) throw new Error("entry is blank");
if (entry.includes("\n")) throw new Error("entry must be a single line");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${entry.length} chars)`);
