import type { FastifyInstance, FastifyRequest } from "fastify";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { db } from "../db/client.js";
import { users } from "../db/schema.js";
import { loginSchema } from "../validators/index.js";

export async function authRoutes(app: FastifyInstance) {
  app.post("/api/auth/login", async (request, reply) => {
    const parsed = loginSchema.safeParse(request.body);
    if (!parsed.success) {
      return reply.status(400).send({ error: "Validation failed", details: parsed.error.flatten().fieldErrors });
    }

    const { email, password } = parsed.data;
    const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (!user) {
      return reply.status(401).send({ error: "Invalid credentials" });
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return reply.status(401).send({ error: "Invalid credentials" });
    }

    const token = app.jwt.sign({ id: user.id, email: user.email, role: user.role });

    reply.setCookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return { user: { id: user.id, email: user.email, role: user.role } };
  });

  app.post("/api/auth/logout", async (_request, reply) => {
    reply.clearCookie("token", { path: "/" });
    return { success: true };
  });

  app.get("/api/auth/me", { preHandler: [app.authenticate] }, async (request) => {
    return { user: (request as any).user };
  });
}
