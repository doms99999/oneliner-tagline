// One Line, One Week: The make.fun Tagline — a tagline for make.fun.
// The program writes the tagline to /output/entry.txt (at most 100 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Write the best entry. Get paid for it. That's the whole game.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
