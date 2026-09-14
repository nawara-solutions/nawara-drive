---
description: Pull the latest main, then create a branch named from the current diff
argument-hint: [optional hint for the branch description]
allowed-tools: Bash(git status:*), Bash(git fetch:*), Bash(git diff:*), Bash(git branch:*), Bash(git checkout:*), Bash(git log:*), Read
---

Create a new branch off the latest `main`, named per `CONTRIBUTING.md` (`type/short-kebab-description`),
based on whatever is currently changed. Always update from the remote before branching.

Steps:
1. Run `git status`, `git diff`, and `git diff --staged` to see the current branch and whatever
   uncommitted/staged changes exist — this is what the branch name should be based on.
2. Run `git fetch origin main` to get the latest `main` from the remote. Always branch from the
   freshly-fetched `origin/main` tip (not whatever local `main` happened to point to before the
   fetch), so the new branch is guaranteed current.
3. From the diff (and `$ARGUMENTS` as a wording hint, if given), pick one `type` from the same
   vocabulary as commits — `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`,
   `ci`, `chore` — plus a short kebab-case description, e.g. `feat/upload-progress`,
   `fix/token-expiry`. If there's no diff and no `$ARGUMENTS` to go on, ask the user for a short
   description instead of guessing one.
4. Create and switch to it directly from the fetched remote tip:
   `git checkout -b <type>/<short-desc> origin/main`
   This carries any uncommitted/staged changes onto the new branch, same as a normal `git
   checkout`. If git refuses because those changes would conflict with what's on `origin/main`,
   stop and report that rather than stashing or discarding anything without asking.
5. Once you're safely on the new branch (so local `main` is no longer checked out), sync local
   `main` with the remote too: `git fetch origin main:main`. Skip this if it fails (e.g. local
   `main` has commits not on the remote) — that's a separate problem, don't force it.
6. Report the new branch name and confirm it's based on the latest `origin/main`.
