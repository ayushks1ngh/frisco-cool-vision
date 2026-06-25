import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db, pool } from "./client.js";
import "dotenv/config";

async function main() {
  console.log("Running migrations...");
  await migrate(db, { migrationsFolder: "./src/db/migrations" });
  console.log("Migrations complete.");
  await pool.end();
}

main().catch((e) => {
  console.error("Migration failed:", e);
  process.exit(1);
});
