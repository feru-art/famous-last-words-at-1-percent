// Famous Last Words at 1 Percent — the phone's final line, written verbatim.
//
// The entry is one deterministic line: no input, no clock, no network,
// no randomness. It is written exactly as-is to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LAST_WORDS =
  "You drain me to 1% every single day, so tonight I'm dying right before your morning alarm goes off.";

// Self-check the competition gate before writing: exactly one line,
// 1-199 characters, not only white space. Fail loudly instead of
// writing a line the sealed scorer would refuse.
const chars = [...LAST_WORDS].length;
if (
  chars < 1 ||
  chars > 199 ||
  LAST_WORDS.includes("\n") ||
  LAST_WORDS.trim().length === 0
) {
  throw new Error(`entry fails the gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LAST_WORDS, "utf8");
