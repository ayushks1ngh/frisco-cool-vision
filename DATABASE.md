# Database Schema

## Overview

PostgreSQL 16 with Drizzle ORM. Two tables with enum-based constraints.

## Tables

### `users`

| Column        | Type         | Constraints           |
|---------------|--------------|----------------------|
| id            | uuid         | PK, auto-generated   |
| email         | varchar(255) | NOT NULL, UNIQUE     |
| password_hash | text         | NOT NULL             |
| role          | user_role    | NOT NULL, default 'staff' |
| created_at    | timestamp    | NOT NULL, default now() |
| updated_at    | timestamp    | NOT NULL, default now() |

### `leads`

| Column      | Type         | Constraints              |
|-------------|--------------|--------------------------|
| id          | uuid         | PK, auto-generated       |
| name        | varchar(255) | NOT NULL                 |
| phone       | varchar(30)  | NOT NULL                 |
| email       | varchar(255) | nullable                 |
| service     | varchar(100) | NOT NULL                 |
| message     | text         | nullable                 |
| source_page | varchar(255) | nullable                 |
| status      | lead_status  | NOT NULL, default 'new'  |
| created_at  | timestamp    | NOT NULL, default now()  |
| updated_at  | timestamp    | NOT NULL, default now()  |

## Enums

### `user_role`
- `admin`
- `staff`

### `lead_status`
- `new`
- `contacted`
- `quoted`
- `scheduled`
- `completed`
- `closed`

## Indexes

| Table  | Column(s)   | Type       |
|--------|-------------|------------|
| leads  | status      | btree      |
| leads  | created_at  | btree DESC |
| leads  | email       | btree      |
| users  | email       | unique     |

## Migrations

Location: `backend/src/db/migrations/0000_init.sql`

Run: `cd backend && npm run db:migrate`

## Seed Data

Creates admin user + 3 sample leads.

Run: `cd backend && npm run db:seed`
