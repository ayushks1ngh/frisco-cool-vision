import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import jwt from "@fastify/jwt";
import cookie from "@fastify/cookie";
import { authRoutes } from "./routes/auth.js";
import { leadRoutes } from "./routes/leads.js";
import { healthRoutes } from "./routes/health.js";
import authMiddleware from "./middleware/auth.js";

export async function buildApp() {
  const app = Fastify({
    logger: {
      transport: process.env.NODE_ENV !== "production"
        ? { target: "pino-pretty", options: { colorize: true } }
        : undefined,
    },
  });

  // Plugins
  await app.register(helmet, { contentSecurityPolicy: false });
  await app.register(cors, {
    origin: process.env.CORS_ORIGIN || "http://localhost:8080",
    credentials: true,
  });
  await app.register(jwt, { secret: process.env.JWT_SECRET || "dev-secret-change-me" });
  await app.register(cookie);

  // Auth decorator
  await app.register(authMiddleware);

  // Routes
  await app.register(healthRoutes);
  await app.register(authRoutes);
  await app.register(leadRoutes);

  // Global error handler
  app.setErrorHandler((error: Error & { statusCode?: number }, _request, reply) => {
    app.log.error(error);
    reply.status(error.statusCode || 500).send({
      error: error.message || "Internal Server Error",
    });
  });

  return app;
}
