# Architecture

## System Overview

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Frontend   │────▶│   Backend    │────▶│  PostgreSQL  │
│  React/Vite  │     │   Fastify    │     │              │
│  nginx (prod)│     │  Drizzle ORM │     │              │
└──────────────┘     └──────────────┘     └──────────────┘
     :80                  :3000                :5432
```

## Frontend Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Build        | Vite 5                              |
| Language     | TypeScript 5.8                      |
| UI Framework | React 18                            |
| Styling      | Tailwind CSS 3.4 + tailwindcss-animate |
| Components   | shadcn/ui (Radix primitives + CVA)  |
| Routing      | react-router-dom 6 (lazy-loaded)    |
| State        | @tanstack/react-query               |
| Forms        | Controlled components + API client  |
| Icons        | lucide-react                        |
| Testing      | Vitest + @testing-library/react     |

## Backend Stack

| Layer        | Technology                |
|--------------|---------------------------|
| Framework    | Fastify 5                 |
| Language     | TypeScript 5.8            |
| ORM          | Drizzle ORM               |
| Database     | PostgreSQL 16             |
| Validation   | Zod                       |
| Auth         | JWT (HTTP-only cookies)   |
| Security     | Helmet, CORS, bcrypt      |
| Logging      | Pino                      |
| Testing      | Vitest                    |

## Directory Structure

```
/
├── src/                     # Frontend source
│   ├── components/          # Shared components
│   │   └── ui/              # shadcn/ui primitives
│   ├── hooks/               # Custom hooks
│   ├── lib/                 # Utilities + API client
│   ├── pages/               # Route pages
│   │   └── admin/           # Admin dashboard pages
│   └── test/                # Test setup + tests
├── backend/                 # Backend source
│   ├── src/
│   │   ├── db/              # Schema, client, migrations
│   │   ├── middleware/      # Auth middleware
│   │   ├── routes/          # API route handlers
│   │   ├── validators/      # Zod schemas
│   │   └── types/           # Shared types
│   └── tests/               # API tests
├── docker-compose.yml       # Full stack orchestration
├── Dockerfile               # Frontend container (nginx)
└── nginx.conf               # Reverse proxy config
```

## Request Flow

```
Browser → Vite Dev Server (:8080) → proxy /api → Fastify (:3000) → PostgreSQL
Browser → Nginx (:80) → static files OR proxy /api → Fastify (:3000) → PostgreSQL
```

## Routing

### Public Pages
| Path                | Component         |
|---------------------|-------------------|
| `/`                 | Index             |
| `/ac-repair`        | ACRepair          |
| `/ac-installation`  | ACInstallation    |
| `/heating-repair`   | HeatingRepair     |
| `/hvac-maintenance` | HVACMaintenance   |
| `/service-areas`    | ServiceAreasPage  |
| `/about`            | About             |
| `/contact`          | Contact           |

### Admin Pages (JWT Protected)
| Path                | Component         |
|---------------------|-------------------|
| `/admin/login`      | Login             |
| `/admin`            | Dashboard         |
| `/admin/leads`      | LeadsList         |
| `/admin/leads/:id`  | LeadDetail        |
