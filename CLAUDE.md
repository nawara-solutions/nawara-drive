# CLAUDE.md

This file gives Claude (via Claude Code) context on the Nawara Drive project. Read this
first before making changes.

## What this project is

**Nawara Drive** is a digital platform for driving schools, built by **Nawara Solution**.
It replaces paper logbooks, phone-call bookings, and scattered scheduling with one
connected system for driving school administration, instructors, and students.

Two clients:
- **Admin Dashboard (Web/Desktop)** — used by Nawara Solution staff and driving schools
  (scoped view) to manage schools, instructors, students, payments, and content.
- **Mobile App (iOS/Android)** — used by **Instructors** (manage students, schedule,
  record lessons/exam results) and **Students** (study traffic rules, book lessons, track
  exam progress).

## The Learning Path

The core business rule of the app — a strict 3-stage progression:

1. **Theory (Traffic Rules) Exam** — studied in-app, taken on the government's own
   system. Minimum passing score: **24/30**.
2. **Driving Exam** — once theory is passed, lessons with an instructor, then the exam.
3. **Parking Exam** — once driving is passed. **Maximum 3 attempts**; failing all 3 sends
   the student back to the Driving Exam stage, not back to lessons from scratch.

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the full use-case breakdown, class diagram,
and exam-progression flowchart.

## Monetization

Two-sided payment model:
- **B2B — School License**: driving schools pay a subscription/license fee.
- **B2C — Student Subscription**: individual students pay to access courses, book
  lessons, and track progress.

## Related repo — Nawara Core

`/home/anwar/Desktop/nawara-solutions/nawara-core` is a separate, early-stage repo that
hosts generic, org-wide shared services for Nawara Solution — auth, notification,
payment, and AI. Per its own architecture rule, those services are **consumed only over
HTTP/gRPC**, never imported as code. If a task in this repo touches login, JWT/session
handling, push/SMS/email dispatch, billing/gateways, or LLM-backed Q&A, check
`nawara-core`'s `CLAUDE.md`/`README.md` for the intended API surface before building
something equivalent locally.

Note: this repo's own `README.md` still has a "proposed" repository structure listing
`auth-service`/`notification-service`/`payment-service`/`ai-service` as living *inside*
nawara-drive — that's stale, left over from before the decision to split those into
`nawara-core`. Defer to `nawara-core` for those concerns, not the README's proposed tree.

`nawara-core` is unrelated to this project's own domain-specific services
(user/booking/exam/content) — those stay here.

## Unrelated sibling project

`/home/anwar/Desktop/nawara-solutions/daycare` is a separate, unrelated Nawara Solution
product (daycare management). Don't explore or reference it when working in this repo.

## Status

🚧 Early-stage / architecture & design phase.
