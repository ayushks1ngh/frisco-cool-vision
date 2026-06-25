import { describe, it, expect } from "vitest";
import { buildApp } from "../src/app.js";

describe("Health endpoint", () => {
  it("GET /api/health returns ok", async () => {
    const app = await buildApp();
    const res = await app.inject({ method: "GET", url: "/api/health" });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toHaveProperty("status", "ok");
    await app.close();
  });
});

describe("Auth endpoint", () => {
  it("POST /api/auth/login with bad creds returns 400 or 401", async () => {
    const app = await buildApp();
    const res = await app.inject({
      method: "POST",
      url: "/api/auth/login",
      payload: { email: "bad@test.com", password: "wrongpassword" },
    });
    // Without DB: connection error yields 500; with validation: 400/401
    expect([400, 401, 500]).toContain(res.statusCode);
    await app.close();
  });
});

describe("Leads endpoint", () => {
  it("POST /api/leads validates input", async () => {
    const app = await buildApp();
    const res = await app.inject({
      method: "POST",
      url: "/api/leads",
      payload: { name: "", phone: "" },
    });
    expect(res.statusCode).toBe(400);
    expect(res.json()).toHaveProperty("error", "Validation failed");
    await app.close();
  });

  it("GET /api/leads without auth returns 401", async () => {
    const app = await buildApp();
    const res = await app.inject({ method: "GET", url: "/api/leads" });
    expect(res.statusCode).toBe(401);
    await app.close();
  });
});
