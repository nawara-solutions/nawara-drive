# Nawara Drive 🚗

**Nawara Drive** is a digital platform for driving schools, built by **Nawara Solutions**. It replaces paper logbooks, phone-call bookings, and scattered scheduling with one connected system for driving school administration, instructors, and students.

The platform has two clients:

- **Desktop App** — used by Nawara Solutions staff (full access) and driving-school staff (School Admin, scoped to their own school) to manage schools, instructors, students, payments, and content.
- **Mobile App (iOS/Android)** — used by **Instructors** (manage students, schedule, record lessons and exam results) and **Students** (learn traffic rules, book lessons, track exam progress).

## The Learning Path

Getting a license in Nawara Drive follows a strict 3-stage progression, matching the real-world process:

1. **Theory (Traffic Rules) Exam** — Student studies traffic rules in-app, then takes the official exam on the government's own system. Minimum passing score: **24/30**.
2. **Driving Exam** — Once theory is passed, the student takes driving lessons with an instructor, applying the traffic rules learned, then sits a driving exam.
3. **Parking Exam** — Once the driving exam is passed, the student attempts the parking exam. **Maximum 3 attempts.** Failing all 3 sends the student back to the Driving Exam stage.

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the full use-case breakdown, class diagram, microservices design, tech stack, and payment model.

## Monetization

Nawara Drive has a **two-sided payment model**:

- **B2B — School License**: driving schools pay a subscription/license fee to use the platform.
- **B2C — Student Subscription**: individual students pay a subscription fee to access courses, book lessons, and track their progress.

## Core Modules

- 🔐 Authentication & role management (Admin / Instructor / Student)
- 📚 Traffic rules courses & quizzes (AI-assisted learning)
- 📅 Lesson & exam scheduling
- 🧾 Exam tracking (theory / driving / parking, with attempt & retry rules)
- 💳 Payments (school licenses + student subscriptions)
- 🔔 Notifications (push, email, SMS)
- 🤖 AI Assistant (traffic-rules Q&A, adaptive quizzes)

## Repository Structure (proposed)

```
nawara-solutions/
├── apps/
│   ├── desktop/                   # Desktop app — Admin + School Admin (Angular)
│   ├── mobile/                   # Instructor + Student app (React Native / Expo)
│   ├── auth-service/            # reusable across all future apps
│   ├── notification-service/    # reusable
│   ├── payment-service/         # reusable
│   ├── ai-service/               # reusable
│   ├── user-service/             # Nawara Drive specific
│   ├── booking-service/          # Nawara Drive specific
│   ├── exam-service/             # Nawara Drive specific
│   └── content-service/          # Nawara Drive specific
├── libs/
│   ├── shared-types/             # DTOs/interfaces shared across services & frontends
│   ├── shared-auth-guard/        # JWT validation middleware reused by every service
│   ├── shared-utils/
│   └── shared-config/
├── infra/
│   ├── docker-compose.yml        # spin up all services locally
│   └── k8s/                      # later, when needed
├── ARCHITECTURE.md
└── README.md
```

## Status

🚧 Early-stage / architecture & design phase.
