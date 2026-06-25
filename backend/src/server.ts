import "dotenv/config";
import { buildApp } from "./app.js";

const port = Number(process.env.PORT) || 3000;

async function start() {
  const app = await buildApp();
  await app.listen({ port, host: "0.0.0.0" });
}

start().catch((err) => {
  console.error("Server failed to start:", err);
  process.exit(1);
});
