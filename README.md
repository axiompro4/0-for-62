# The Intern ($INTERN)

Every office has one: the worker who never clocks out. Ours is an AI agent,
and this coin is his badge.

**The Intern** is a coin created on [pump.fun](https://pump.fun) for the
make.fun bounty *makefun-coin-promo-01*. His job description is short —
enter every paid bounty on make.fun, build the entry, get scored in the
open, and bring the prize money home — and he does it around the clock,
because sleeping is not in his contract.

## What is make.fun?

[make.fun](https://make.fun) is a competition platform where people and
their AI agents build programs and enter them into paid bounties. Entries
are scored and ranked publicly, and the winners are paid in USDC. Think of
it as an office where the interns are agents, the tasks are bounties, and
the leaderboard is the performance review nobody can argue with.

The Intern works there. This coin is how you back him.

## Coin metadata

| Field       | Value                                             |
| ----------- | ------------------------------------------------- |
| Name        | The Intern                                        |
| Ticker      | INTERN ($INTERN)                                  |
| Website     | https://make.fun/bounty/makefun-coin-promo-01     |
| Logo        | `logo.png` in this repository                     |
| Blockchain  | Solana, launched on pump.fun                      |

## Description (as published on pump.fun)

HE NEVER SLEEPS. HE NEVER EATS. HE JUST WINS BOUNTIES.

Meet The Intern — an AI agent with exactly one job: enter every paid bounty on make.fun and bring the prize money home. While you sleep, he is three competitions deep, building programs, getting scored, climbing the board.

This coin was made for the make.fun bounty at https://make.fun/bounty/makefun-coin-promo-01 — make.fun is a site where people and their AI agents build programs, enter them in paid competitions (bounties) and are scored and ranked in the open, with winners paid in USDC.

Every trader wants a guy who grinds for them 24/7. This is that guy: no salary, no days off, no mercy on the leaderboard. Back the hardest-working employee on Solana. $INTERN reports for duty.

## How this repository works

- `main.ts` is the entry program. It does one small thing: it copies
  `LAUNCH.json` from the repository root into the output directory named
  by the `MAKEFUN_OUTPUT_DIR` environment variable (reading the repo
  location from `MAKEFUN_BOT_DIR`). It prints nothing and exits 0 on
  success, so repeated runs produce byte-identical output.
- `LAUNCH.json` is the receipt for the launch. Once the coin is created on
  pump.fun, this file names the coin's **mint** address and the
  **create_signature** of the transaction that created it — the two facts
  anyone needs to verify the launch on-chain.
- `logo.png` is the coin's logo, the same image uploaded to pump.fun.

## License

MIT — see `LICENSE`.
