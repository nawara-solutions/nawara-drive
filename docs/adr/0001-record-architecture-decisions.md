# 0001. Record architecture decisions with ADRs

- **Status:** Accepted
- **Date:** 2026-09-14
- **Deciders:** Nawara Solution

## Context

Nawara Drive is in its early architecture phase. Decisions are already being made (e.g.
keeping `auth`/`notification`/`payment`/`ai` out of this repo in favor of `nawara-core`,
choosing the tech stack in `ARCHITECTURE.md`) but the _reasoning_ behind them lives only in
chat history or people's memory. As the team and the number of services grow, future
contributors (and future us) need a durable record of why the system looks the way it does,
not just what it currently looks like.

## Options considered

1. **No formal record** — rely on PR descriptions and tribal knowledge. Cheap, but reasoning
   gets lost and decisions get silently re-litigated.
2. **A wiki/external doc tool** — decouples decisions from code, but drifts out of sync and
   isn't reviewed alongside the change that depends on it.
3. **Architecture Decision Records (ADRs) in-repo** — one short markdown file per decision,
   reviewed in the same PR as the change, versioned with the code.

## Decision

We adopt lightweight ADRs stored in `docs/adr/`, one file per decision, numbered
sequentially, following the template in `docs/adr/template.md`. See `docs/adr/README.md`
for the full workflow.

## Consequences

- Every significant, hard-to-reverse decision going forward gets an ADR, reviewed in the PR
  that introduces it.
- Decisions are immutable once accepted; changes of mind become new ADRs that supersede the
  old one, preserving history instead of rewriting it.
- Low overhead: a short markdown file, no new tooling required.
