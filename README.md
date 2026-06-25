# Frisco Cooling & Heating

HVAC company website with lead capture and admin dashboard.

## Tech Stack

- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Fastify 5, Drizzle ORM, PostgreSQL 16, Zod, JWT
- **Deploy**: Vercel (frontend), Docker Compose (full stack)

## Local Development

```bash
# Start database
docker compose up postgres -d

# Backend (terminal 1)
cd backend
cp .env.example .env
npm install
npm run db:migrate
npm run db:seed
npm run dev

# Frontend (terminal 2)
npm install
npm run dev
```

Visit http://localhost:8080

## Environment Variables

### Backend (`backend/.env`)

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_SECRET` | Secret for signing tokens (min 32 chars) |
| `ADMIN_EMAIL` | Initial admin user email |
| `ADMIN_PASSWORD` | Initial admin user password |
| `PORT` | Server port (default: 3000) |
| `CORS_ORIGIN` | Allowed frontend origin |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start frontend dev server |
| `npm run build` | Production build |
| `npm run test` | Run tests |
| `npm run lint` | Lint code |

## Project Structure

```
├── src/                  # Frontend source
│   ├── components/       # Shared components
│   │   └── ui/           # shadcn/ui primitives
│   ├── hooks/            # Custom hooks
│   ├── lib/              # API client, utilities
│   ├── pages/            # Route pages
│   │   └── admin/        # Admin dashboard
│   └── test/             # Tests
├── backend/              # API server
│   ├── src/
│   │   ├── db/           # Schema, migrations, seed
│   │   ├── middleware/   # Auth middleware
│   │   ├── routes/       # API routes
│   │   └── validators/   # Zod schemas
│   └── tests/            # API tests
├── docker-compose.yml    # Full stack orchestration
├── Dockerfile            # Frontend container (nginx)
└── nginx.conf            # Reverse proxy config
```

## Deployment

### Vercel (Frontend Only)

The frontend deploys automatically on push. Set `VITE_API_URL` environment variable in Vercel to point to your backend.

### Docker (Full Stack)

```bash
docker compose up --build
```

Frontend on :80, Backend on :3000, Postgres on :5432 (localhost only).

## License

MIT
