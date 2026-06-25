import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import fp from "fastify-plugin";

declare module "fastify" {
  interface FastifyInstance {
    authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}

export default fp(async (app: FastifyInstance) => {
  app.decorate("authenticate", async (request: FastifyRequest, reply: FastifyReply) => {
    const token = request.cookies.token;
    if (!token) {
      return reply.status(401).send({ error: "Unauthorized" });
    }
    try {
      const payload = app.jwt.verify(token);
      (request as any).user = payload;
    } catch {
      return reply.status(401).send({ error: "Invalid token" });
    }
  });
});
