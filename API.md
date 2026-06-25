# API Reference

Base URL: `http://localhost:3000` (dev) or via nginx proxy at `/api`

## Public Endpoints

### `GET /api/health`

Health check.

**Response:** `200`
```json
{ "status": "ok", "timestamp": "2026-06-20T12:00:00.000Z" }
```

---

### `POST /api/leads`

Create a new lead (form submission).

**Body:**
```json
{
  "name": "John Smith",        // required, max 255
  "phone": "(972) 555-0101",   // required, max 30
  "email": "john@example.com", // optional, valid email
  "service": "AC Repair",      // required, max 100
  "message": "Unit not cooling", // optional, max 2000
  "sourcePage": "/"            // optional
}
```

**Response:** `201`
```json
{ "id": "uuid", "name": "...", "status": "new", ... }
```

**Error:** `400`
```json
{ "error": "Validation failed", "details": { "name": ["Name is required"] } }
```

---

## Authentication

### `POST /api/auth/login`

**Body:**
```json
{ "email": "your-admin@email.com", "password": "your-password" }
```

**Response:** `200` — Sets `token` HTTP-only cookie
```json
{ "user": { "id": "uuid", "email": "...", "role": "admin" } }
```

**Error:** `401` — Invalid credentials

---

### `POST /api/auth/logout`

Clears auth cookie.

**Response:** `200`
```json
{ "success": true }
```

---

### `GET /api/auth/me`

🔒 **Requires auth cookie**

**Response:** `200`
```json
{ "user": { "id": "uuid", "email": "...", "role": "admin" } }
```

---

## Protected Endpoints (Require Auth)

### `GET /api/leads`

List all leads, ordered by newest first.

**Query params:**
- `status` — filter by status (`new`, `contacted`, `quoted`, `scheduled`, `completed`, `closed`)
- `search` — search name, email, or phone (case-insensitive)

**Response:** `200` — Array of lead objects

---

### `GET /api/leads/:id`

Get a single lead by ID.

**Response:** `200` — Lead object
**Error:** `404` — `{ "error": "Lead not found" }`

---

### `PATCH /api/leads/:id`

Update lead fields.

**Body:** (all optional)
```json
{ "status": "contacted", "name": "..." }
```

**Response:** `200` — Updated lead object

---

### `DELETE /api/leads/:id`

Delete a lead.

**Response:** `200`
```json
{ "success": true }
```
