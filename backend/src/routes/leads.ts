import type { FastifyInstance } from "fastify";
import { eq, desc, ilike, or } from "drizzle-orm";
import { db } from "../db/client.js";
import { leads } from "../db/schema.js";
import { leadCreateSchema, leadUpdateSchema } from "../validators/index.js";

export async function leadRoutes(app: FastifyInstance) {
  // Public: create a lead
  app.post("/api/leads", async (request, reply) => {
    const parsed = leadCreateSchema.safeParse(request.body);
    if (!parsed.success) {
      return reply.status(400).send({ error: "Validation failed", details: parsed.error.flatten().fieldErrors });
    }

    const data = parsed.data;
    const [lead] = await db.insert(leads).values({
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      service: data.service,
      message: data.message || null,
      sourcePage: data.sourcePage || null,
    }).returning();

    return reply.status(201).send(lead);
  });

  // Protected: list leads
  app.get("/api/leads", { preHandler: [app.authenticate] }, async (request) => {
    const { status, search } = request.query as { status?: string; search?: string };
    const validStatuses = ["new", "contacted", "quoted", "scheduled", "completed", "closed"];

    let query = db.select().from(leads).orderBy(desc(leads.createdAt)).$dynamic();

    if (status && validStatuses.includes(status)) {
      query = query.where(eq(leads.status, status as any));
    }
    if (search) {
      query = query.where(or(ilike(leads.name, `%${search}%`), ilike(leads.email, `%${search}%`), ilike(leads.phone, `%${search}%`)));
    }

    return await query;
  });

  // Protected: get single lead
  app.get("/api/leads/:id", { preHandler: [app.authenticate] }, async (request, reply) => {
    const { id } = request.params as { id: string };
    const [lead] = await db.select().from(leads).where(eq(leads.id, id)).limit(1);
    if (!lead) return reply.status(404).send({ error: "Lead not found" });
    return lead;
  });

  // Protected: update lead
  app.patch("/api/leads/:id", { preHandler: [app.authenticate] }, async (request, reply) => {
    const { id } = request.params as { id: string };
    const parsed = leadUpdateSchema.safeParse(request.body);
    if (!parsed.success) {
      return reply.status(400).send({ error: "Validation failed", details: parsed.error.flatten().fieldErrors });
    }

    const [lead] = await db.update(leads).set({ ...parsed.data, updatedAt: new Date() }).where(eq(leads.id, id)).returning();
    if (!lead) return reply.status(404).send({ error: "Lead not found" });
    return lead;
  });

  // Protected: delete lead
  app.delete("/api/leads/:id", { preHandler: [app.authenticate] }, async (request, reply) => {
    const { id } = request.params as { id: string };
    const [lead] = await db.delete(leads).where(eq(leads.id, id)).returning();
    if (!lead) return reply.status(404).send({ error: "Lead not found" });
    return { success: true };
  });
}
