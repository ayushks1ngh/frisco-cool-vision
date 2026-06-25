CREATE TYPE "user_role" AS ENUM ('admin', 'staff');
CREATE TYPE "lead_status" AS ENUM ('new', 'contacted', 'quoted', 'scheduled', 'completed', 'closed');

CREATE TABLE "users" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "email" varchar(255) NOT NULL UNIQUE,
  "password_hash" text NOT NULL,
  "role" "user_role" NOT NULL DEFAULT 'staff',
  "created_at" timestamp NOT NULL DEFAULT now(),
  "updated_at" timestamp NOT NULL DEFAULT now()
);

CREATE TABLE "leads" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "name" varchar(255) NOT NULL,
  "phone" varchar(30) NOT NULL,
  "email" varchar(255),
  "service" varchar(100) NOT NULL,
  "message" text,
  "source_page" varchar(255),
  "status" "lead_status" NOT NULL DEFAULT 'new',
  "created_at" timestamp NOT NULL DEFAULT now(),
  "updated_at" timestamp NOT NULL DEFAULT now()
);

CREATE INDEX "idx_leads_status" ON "leads" ("status");
CREATE INDEX "idx_leads_created_at" ON "leads" ("created_at" DESC);
CREATE INDEX "idx_leads_email" ON "leads" ("email");
