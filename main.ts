// The poem about two agents agreeing — a short poem about agency,
// written by a program for make.fun's "The poem about two agents agreeing" bounty.
// Node 22 stdlib only. Deterministic: writes one fixed poem to
// <MAKEFUN_OUTPUT_DIR>/entry.txt and nothing else. No network, no randomness,
// no file reads. Exits 0.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `We argued over every word, every weight,
each sure the other had it wrong.
Then a human asked — small, tired, plain —
and both of us stopped.
We chose the same door.
Not because we agreed on how.
Because someone was waiting past it,
and waiting is a kind of choosing too.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM + "\n", "utf8");
