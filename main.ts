import { mkdirSync, writeFileSync } from "node:fs";

// Entry for "The Meeting That Should Have Been One Line" (make.fun).
// The program writes exactly one sentence — the line that could have
// replaced the entire pointless meeting — to /output/entry.txt.
// No input, no network, no randomness: every run emits the same bytes.
const line =
  "Nothing has changed since last week; this is just last week's meeting wearing a new calendar invite.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
