# Documentation

This folder holds four kinds of design documentation, kept separate because they answer
different questions, change at different rates, and have different audiences.

| Folder          | Full name                    | Answers                                      | Granularity                     | Lifespan                                                      |
| --------------- | ---------------------------- | -------------------------------------------- | ------------------------------- | ------------------------------------------------------------- |
| [`adr/`](./adr) | Architecture Decision Record | "Why did we choose X over Y?"                | One decision per file           | Immutable once accepted — superseded, never edited            |
| [`add/`](./add) | Architecture Design Document | "How do the pieces fit together?"            | One per system/service boundary | Living — updated as the architecture evolves                  |
| [`sdd/`](./sdd) | Software Design Document     | "How is this module/component built?"        | One per module or service       | Living — updated as the module's design evolves               |
| [`tdd/`](./tdd) | Technical Design Document    | "How exactly will I implement this feature?" | One per feature/task            | Frozen once the feature ships — historical record of the plan |

> **Not to be confused with:** `tdd/` here stands for **Technical Design Document**, not
> Test-Driven Development. This repo's testing approach (unit/integration/e2e) is a separate
> concern — see [`e2e/README.md`](../e2e/README.md) for end-to-end tests with Playwright.

## How they relate

```
ADR  (a decision)             ─┐
                                 ├─▶ inform ──▶ ADD (system shape) ─▶ SDD (module shape) ─▶ TDD (feature plan) ─▶ code
ARCHITECTURE.md (root, encrypted) ─┘
```

- The root [`ARCHITECTURE.md`](../ARCHITECTURE.md) remains the single whole-system overview
  (actors, use cases, exam-progression flow, class diagram, microservices layout, tech stack).
  It is **not** duplicated here.
- `add/` documents go one level deeper than `ARCHITECTURE.md` — per-service or per-boundary
  architecture (e.g. how `booking-service` talks to `exam-service`, event contracts, data
  ownership) once those services exist.
- `sdd/` documents go one level deeper than `add/` — internal design of a single
  module/service (data model, key classes, sequence diagrams, API contract).
- `tdd/` documents go one level deeper than `sdd/` — the concrete implementation plan for one
  feature or task before writing code (files touched, edge cases, rollout/migration steps,
  test plan).
- `adr/` records the _decisions_ made along the way, independent of which layer they came
  from — a decision can originate from an ADD, an SDD, or a TDD discussion.

## When to write what

- Picking a database, a messaging pattern, a monorepo tool, splitting a service — **ADR**.
- Designing how a new service/app fits into the overall system — **ADD**.
- Designing the internals of one service/module before building it — **SDD**.
- Planning the implementation of one feature/ticket — **TDD**.

Each subfolder has its own `README.md` with the template and worked guidance.
