import bcrypt from "bcrypt";
import { db, pool } from "./client.js";
import { users, leads } from "./schema.js";
import "dotenv/config";

async function seed() {
  console.log("Seeding database...");

  const email = process.env.ADMIN_EMAIL || "admin@friscocooling.com";
  const password = process.env.ADMIN_PASSWORD || "ChangeMe123!";
  const passwordHash = await bcrypt.hash(password, 12);

  await db.insert(users).values({ email, passwordHash, role: "admin" }).onConflictDoNothing();

  await db.insert(leads).values([
    { name: "John Smith", phone: "(972) 555-0101", email: "john@example.com", service: "AC Repair", message: "Unit not cooling", sourcePage: "/", status: "new" },
    { name: "Jane Doe", phone: "(972) 555-0102", service: "AC Installation", sourcePage: "/ac-installation", status: "contacted" },
    { name: "Bob Wilson", phone: "(972) 555-0103", email: "bob@example.com", service: "Heating Repair", message: "Furnace making noise", sourcePage: "/contact", status: "quoted" },
  ]);

  console.log("Seed complete.");
  await pool.end();
}

seed().catch((e) => {
  console.error("Seed failed:", e);
  process.exit(1);
});
