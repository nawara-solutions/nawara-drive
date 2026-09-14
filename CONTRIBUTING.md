# Contributing

Conventions for commits, branches, and pull requests in this repo. `commitlint` + `husky`
enforce the commit message format locally — see [Enforcement](#enforcement).

## Commit messages

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <summary>

[optional body]

[optional footer(s)]
```

- **type** — one of:
  - `feat` — a new feature
  - `fix` — a bug fix
  - `docs` — documentation only
  - `style` — formatting, no code change
  - `refactor` — code change that neither fixes a bug nor adds a feature
  - `perf` — performance improvement
  - `test` — adding or correcting tests
  - `build` — build system or dependencies
  - `ci` — CI configuration
  - `chore` — everything else (tooling, maintenance)
  - `revert` — reverts a previous commit
- **scope** (optional) — the affected area, e.g. `auth`, `scheduling`, `api`
- **summary** — short, imperative, lowercase, no trailing period

Examples:

```
feat(scheduling): add recurring lesson bookings
fix(auth): handle expired refresh tokens
docs: update setup instructions in README
chore: add commit/branch/PR conventions and enforcement
```

Commit messages that don't follow this format are **rejected** by a `commit-msg` git hook
(`.husky/commit-msg`, powered by `commitlint.config.cjs`).

## Branches

Branch off `main`, name using the same `type` vocabulary as commits:

```
<type>/<short-kebab-description>
```

Examples: `feat/user-auth`, `fix/upload-timeout`, `docs/api-reference`.

Keep branches short-lived and scoped to one PR. Delete the branch after merge.

## Pull requests

- PR title mirrors the Conventional Commit format, e.g. `feat: add resumable uploads` — this
  becomes the commit message on `main` when squash-merged.
- Fill in the PR template (`.github/PULL_REQUEST_TEMPLATE.md`): Summary, Changes, Test plan.
- Merge strategy: **squash merge** into `main`, so `main` history stays one commit per PR.

### Worked example (using the GitHub MCP tools)

```bash
git checkout -b feat/upload-progress
# ... make changes ...
git add .
git commit -m "feat(upload): show progress bar during large file uploads"
git push -u origin feat/upload-progress
```

Then open the PR, e.g. via `mcp__github__create_pull_request`, with:
- `title`: `feat: show progress bar during large file uploads`
- `body`: filled-in PR template (Summary / Changes / Test plan)
- `base`: `main`, `head`: `feat/upload-progress`

## Enforcement

This repo's root `package.json` holds dev tooling only (`husky`, `@commitlint/cli`,
`@commitlint/config-conventional`). Run `npm install` once after cloning so the
`commit-msg` hook is active — it's wired via the `prepare` script (husky v9).

## Encrypted files

This repo is public, but a few files hold internal-only content and are encrypted at rest with
[`git-crypt`](https://github.com/AGWA-git/git-crypt) — currently just `ARCHITECTURE.md`. Anyone
browsing on GitHub without the key sees unreadable binary. Locally, once you've unlocked the repo,
those files read and edit like any other file — git handles the encryption transparently on
every commit/checkout.

To work with encrypted files on a new clone:

1. Install `git-crypt` (`sudo apt install git-crypt` on Debian/Kali).
2. Get the symmetric key out-of-band from whoever holds it (**not** via this repo — it's kept
   outside git entirely, e.g. a password manager).
3. `git-crypt unlock /path/to/the.key`

To encrypt an additional file going forward, add a line to `.gitattributes`:

```
<path> filter=git-crypt diff=git-crypt
```

then re-add/commit the file normally.

### Automatic verification before push

A `pre-push` hook (`.husky/pre-push`) runs `git-crypt status` before every push and **aborts the
push** if any file marked for encryption in `.gitattributes` was actually committed as plaintext
— this is the classic git-crypt gotcha (adding the attribute *after* a file was already committed
unencrypted; the attribute alone doesn't retroactively encrypt history). If that happens, the hook
tells you to run:

```
git-crypt status -f   # re-encrypts the offending file(s) and stages the fix
```

then commit and push again. If `git-crypt` isn't installed on the machine doing the push, the hook
only warns (it can't verify) rather than blocking — install `git-crypt` to get the actual check.
