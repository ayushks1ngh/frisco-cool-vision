import { useEffect, useState } from "react";
import { api, type Lead } from "@/lib/api";
import { Users, Clock, CheckCircle2, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => { api.getLeads().then(setLeads).catch(() => {}); }, []);

  const stats = [
    { label: "Total Leads", value: leads.length, icon: Users },
    { label: "New", value: leads.filter((l) => l.status === "new").length, icon: Clock },
    { label: "Completed", value: leads.filter((l) => l.status === "completed").length, icon: CheckCircle2 },
    { label: "Conversion", value: leads.length ? `${Math.round((leads.filter((l) => l.status === "completed").length / leads.length) * 100)}%` : "0%", icon: TrendingUp },
  ];

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold text-foreground mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="card-glow rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "hsl(var(--cyan) / 0.1)" }}>
                <s.icon size={16} className="text-primary" />
              </div>
              <span className="text-xs text-muted-foreground">{s.label}</span>
            </div>
            <p className="font-heading text-2xl font-bold text-foreground">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
