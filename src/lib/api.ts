const BASE = import.meta.env.VITE_API_URL || "";

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw { status: res.status, ...body };
  }
  return res.json();
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  service: string;
  message: string | null;
  sourcePage: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  role: string;
}

export const api = {
  health: () => request<{ status: string }>("/api/health"),
  login: (email: string, password: string) =>
    request<{ user: User }>("/api/auth/login", { method: "POST", body: JSON.stringify({ email, password }) }),
  logout: () => request<{ success: boolean }>("/api/auth/logout", { method: "POST" }),
  me: () => request<{ user: User }>("/api/auth/me"),
  createLead: (data: { name: string; phone: string; email?: string; service: string; message?: string; sourcePage?: string }) =>
    request<Lead>("/api/leads", { method: "POST", body: JSON.stringify(data) }),
  getLeads: (params?: { status?: string; search?: string }) => {
    const q = new URLSearchParams();
    if (params?.status) q.set("status", params.status);
    if (params?.search) q.set("search", params.search);
    const qs = q.toString();
    return request<Lead[]>(`/api/leads${qs ? `?${qs}` : ""}`);
  },
  getLead: (id: string) => request<Lead>(`/api/leads/${id}`),
  updateLead: (id: string, data: Partial<Lead>) =>
    request<Lead>(`/api/leads/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  deleteLead: (id: string) =>
    request<{ success: boolean }>(`/api/leads/${id}`, { method: "DELETE" }),
};
