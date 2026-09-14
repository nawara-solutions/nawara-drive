# Nawara Drive 🚗

**Nawara Drive** is a digital platform for driving schools, built by **Nawara Solution**. It replaces paper logbooks, phone-call bookings, and scattered scheduling with one connected system for driving school administration, instructors, and students.

The platform has two clients:
- **Admin Dashboard (Web/Desktop)** — used by Nawara Solution / driving school administrators to manage schools, instructors, students, payments, and content.
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
nawara-drive/
├── apps/
│   ├── admin-web/        # Admin dashboard (React/Angular)
│   ├── mobile-app/       # Instructor + Student app (React Native)
├── services/
│   ├── auth-service/
│   ├── user-service/
│   ├── booking-service/
│   ├── exam-service/
│   ├── payment-service/
│   ├── notification-service/
│   ├── content-service/
│   └── ai-service/
├── infra/                # Docker, k8s, CI/CD configs
├── ARCHITECTURE.md
└── README.md
```

## Status

🚧 Early-stage / architecture & design phase.
