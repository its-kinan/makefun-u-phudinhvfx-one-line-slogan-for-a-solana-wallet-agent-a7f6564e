import { mkdirSync, writeFileSync } from "node:fs";

// One-line slogan for a Solana wallet agent.
// Revised down in-session from a 150-char / 28-word first draft: the gate
// is 140 chars and 20 words, so the tail ("while you get on with your
// life") and the filler ("finally", "exactly") go. What survives is the
// fresh image — a wallet that grew a brain — plus the promise in plain
// words: it reads the chain, signs what you meant, and puts your SOL to
// work. No stock crypto lines about keys, moons or bags.
const slogan =
  "Your Solana wallet grew a brain: it reads the chain, signs what you meant, and puts your SOL to work.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", slogan + "\n", "utf8");
