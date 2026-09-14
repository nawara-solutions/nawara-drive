---
description: Push the current branch and open a PR against main, following CONTRIBUTING.md
argument-hint: [optional hint, e.g. a scope or short summary for the title]
allowed-tools: Bash(git status:*), Bash(git branch:*), Bash(git checkout:*), Bash(git push:*), Bash(git log:*), Bash(git diff:*), Read, mcp__github__create_pull_request, mcp__github__list_pull_requests, mcp__github__search_pull_requests, mcp__github__get_me
---

Open a pull request for the current work against `main`, following this repo's conventions in
`CONTRIBUTING.md` (GitHub Flow branch naming, Conventional-Commit-style PR title, PR template,
squash merge).

Steps:
1. Run `git status` and `git branch`. If there are uncommitted changes, stop and tell the user to
   commit first (e.g. with `/commit`) — don't commit on their behalf here.
2. If the current branch is `main`, stop and tell the user to run `/branch` first — don't invent
   a branch and switch for them without asking.
3. Confirm the branch has commits ahead of `main` (`git log main..HEAD --oneline`). If there are
   none, say so instead of opening an empty PR.
4. Push the branch: `git push -u origin <branch>` (only if it isn't already up to date with the
   remote).
5. Check for an existing open PR from this branch first (`mcp__github__list_pull_requests` or
   `mcp__github__search_pull_requests`) — if one exists, report its URL instead of creating a
   duplicate.
6. Otherwise, build the PR via `mcp__github__create_pull_request`:
   - `title`: Conventional-Commit style, e.g. `feat: add resumable uploads` (derive from the
     branch's commits; use `$ARGUMENTS` as a wording hint if given, but keep it accurate to what
     actually changed).
   - `body`: fill in the sections from `.github/PULL_REQUEST_TEMPLATE.md` (Summary, Changes, Test
     plan) based on the actual commits/diff — don't leave template placeholders unfilled.
   - `base`: `main`, `head`: the current branch.
7. Report the PR URL back to the user in one line.

Pushing and opening a PR are visible, hard-to-fully-reverse actions — do them, since running
`/pr` is the user's explicit request to do exactly this, but don't take extra liberties (like
force-pushing, retargeting an existing PR, or merging) beyond what's described above.
