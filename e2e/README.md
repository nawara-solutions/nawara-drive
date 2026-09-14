# End-to-end tests (Playwright)

End-to-end tests for whichever app(s) get scaffolded in this repo (starting with the admin
dashboard). Lives at the repo root rather than inside a single app so it can eventually drive
flows that cross apps (e.g. an admin action that a mobile-app instructor should then see).

> Not to be confused with `docs/tdd/` (Technical Design Document) — see
> [`docs/README.md`](../docs/README.md) if that's what you're looking for.

## Layout

```
e2e/
├── playwright.config.ts   # project config — browsers, baseURL, reporter
└── tests/
    └── *.spec.ts          # one file per flow/feature
```

## Status

No app exists in this repo yet, so this is config-only scaffolding:

- `playwright.config.ts` has a placeholder `baseURL` (override with `PLAYWRIGHT_BASE_URL`)
  and a commented-out `webServer` block.
- `tests/example.spec.ts` is a skipped placeholder so the suite runs green until real specs
  exist.

Once the first app is scaffolded:

1. Set `baseURL` in `playwright.config.ts` to its dev server URL.
2. Uncomment and fill in `webServer` so `npm run test:e2e` starts the app automatically.
3. Delete `tests/example.spec.ts` and add real specs.

## Running

```bash
npx playwright install        # first time only — installs browser binaries
npm run test:e2e              # headless run
npm run test:e2e -- --ui      # interactive UI mode
```

## Conventions

- One spec file per user-facing flow, named after the flow (e.g. `book-lesson.spec.ts`), not
  after a page/component.
- Prefer role/label-based locators (`getByRole`, `getByLabel`) over CSS selectors — they
  survive markup changes and double as an accessibility check.
- A feature's Test plan section in its [TDD](../docs/tdd) should name which e2e specs cover it.
