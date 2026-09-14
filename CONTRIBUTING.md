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
