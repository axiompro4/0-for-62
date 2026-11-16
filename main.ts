// main.ts — the delivery step for "The Intern" ($INTERN), our entry to the
// make.fun bounty makefun-coin-promo-01 ("launch a coin that sells make.fun").
//
// Context: the coin itself lives on Solana. It was created on pump.fun, and
// the file LAUNCH.json in the root of this repository records two facts
// about that creation — the coin's mint address and the signature of the
// create transaction. The grader does not re-run the launch; it runs this
// program and then reads the LAUNCH.json we hand back.
//
// Contract:
//   - Inputs come from the environment: MAKEFUN_BOT_DIR points at this
//     repository (default /bot) and MAKEFUN_OUTPUT_DIR at the directory the
//     grader collects results from (default /output).
//   - The output directory is created when missing, then LAUNCH.json is
//     copied across unchanged.
//   - Success is silent: nothing on stdout, exit code 0. Any failure is
//     reported on stderr with exit code 1, because an empty output with a
//     success code would look like a launch that never happened.
//   - The grader runs the program twice and compares, so the copy must be
//     byte-stable: no clocks, no randomness, no network — plain file I/O
//     from the Node standard library only.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

/** Print the reason to stderr and stop with a failure exit code. */
function abort(reason: string): never {
  console.error(`main.ts: ${reason}`);
  process.exit(1);
}

function main(): void {
  const botDir = process.env.MAKEFUN_BOT_DIR || "/bot";
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

  const sourcePath = join(botDir, "LAUNCH.json");
  const targetPath = join(outputDir, "LAUNCH.json");

  // The output directory is ours to create; the source file is not — if
  // LAUNCH.json is missing, that is a genuine error worth failing loudly on.
  mkdirSync(outputDir, { recursive: true });

  try {
    copyFileSync(sourcePath, targetPath);
  } catch (err) {
    abort(`failed to copy ${sourcePath} -> ${targetPath}: ${(err as Error).message}`);
  }
}

main();
