---
description: Stage changes and create a Conventional Commit per CONTRIBUTING.md
argument-hint: [optional hint, e.g. a scope or short summary]
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git add:*), Bash(git commit:*), Bash(git log:*), Read
---

Create one commit following this repo's conventions in `CONTRIBUTING.md` (Conventional Commits).

Steps:
1. Run `git status` and `git diff` (and `git diff --staged` if anything is already staged) to see
   what actually changed.
2. Decide which changed/untracked files belong to this commit. If there are clearly unrelated
   changes mixed in (e.g. unrelated files touched by something else), stage only the relevant
   ones and tell the user what you left out, rather than blindly staging everything.
3. Pick a commit `type` (and `scope` if it's obvious) from the diff itself — don't guess a type
   that doesn't match what changed. Valid types: `feat`, `fix`, `docs`, `style`, `refactor`,
   `perf`, `test`, `build`, `ci`, `chore`, `revert` (see `CONTRIBUTING.md` for definitions).
4. If the user passed arguments (`$ARGUMENTS`), use them as a hint for the scope/summary wording,
   but still base the actual type/content on the diff, not just the hint.
5. Write the summary line short, imperative, lowercase, no trailing period. Add a body only if the
   change needs explanation beyond the summary (the "why", not a restatement of the diff).
6. Run `git commit -m "..."`. Do not use `--no-verify` — the commitlint hook is there to catch
   mistakes; if it rejects the message, fix the message and retry rather than bypassing it.
7. Report the resulting commit hash and message back to the user in one line.

If there is nothing staged and nothing to commit, say so instead of creating an empty commit.
