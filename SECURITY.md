# Security

## Threat Model

| Threat                    | Mitigation                                       |
|---------------------------|--------------------------------------------------|
| XSS                       | Helmet headers, React's default escaping         |
| CSRF                      | SameSite=Lax cookies, CORS origin restriction    |
| SQL Injection             | Drizzle ORM parameterized queries                |
| Brute Force Auth          | bcrypt (cost 12), rate limiting (recommended)    |
| Token Theft               | HTTP-only, Secure cookies (prod), 7-day expiry   |
| Data Exposure             | No secrets in frontend, env-based config         |
| Unauthorized API Access   | JWT verification middleware on protected routes  |

## Authentication Flow

```
1. User sends POST /api/auth/login { email, password }
2. Server validates with Zod
3. Server queries user by email
4. Server compares password with bcrypt
5. Server signs JWT { id, email, role }
6. Server sets HTTP-only cookie "token"
7. Subsequent requests include cookie automatically
8. Auth middleware verifies JWT on protected routes
```

## Secret Handling

- All secrets stored in environment variables (`.env`)
- `.env` is gitignored — never committed
- `.env.example` provides template without real values
- JWT_SECRET must be at least 32 characters in production
- Passwords hashed with bcrypt (cost factor 12)

## Security Headers (Helmet)

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 0` (modern browsers use CSP)
- `Strict-Transport-Security` (when HTTPS configured)

## Security Decisions

1. **HTTP-only cookies over localStorage** — Prevents XSS from reading tokens
2. **SameSite=Lax** — Prevents CSRF while allowing normal navigation
3. **bcrypt cost 12** — ~250ms hash time, resistant to brute-force
4. **UUID primary keys** — Non-enumerable, prevents ID guessing
5. **Input validation on all endpoints** — Zod rejects malformed data before it hits the DB
6. **Separate public/protected routes** — Lead creation is public; listing/updating requires auth

## Recommendations for Production

- Add rate limiting (e.g., `@fastify/rate-limit`)
- Enable HTTPS/TLS termination
- Set `Secure` flag on cookies (automatic when NODE_ENV=production)
- Add audit logging for admin actions
- Implement password reset flow
- Consider adding 2FA for admin accounts
