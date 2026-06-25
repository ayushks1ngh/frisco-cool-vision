import { useEffect, useState } from "react";
import { api, type Lead } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Trash2, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const statuses = ["all", "new", "contacted", "quoted", "scheduled", "completed", "closed"];
const statusColors: Record<string, string> = {
  new: "bg-blue-500/20 text-blue-400",
  contacted: "bg-yellow-500/20 text-yellow-400",
  quoted: "bg-purple-500/20 text-purple-400",
  scheduled: "bg-orange-500/20 text-orange-400",
  completed: "bg-green-500/20 text-green-400",
  closed: "bg-gray-500/20 text-gray-400",
};

export default function LeadsList() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");

  const fetchLeads = () => {
    api.getLeads({ status: status === "all" ? undefined : status, search: search || undefined }).then(setLeads).catch(() => {});
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { fetchLeads(); }, [status]);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this lead?")) return;
    await api.deleteLead(id);
    fetchLeads();
  };

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold text-foreground mb-6">Leads</h1>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search name, email, phone..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.key === "Enter" && fetchLeads()} className="pl-9 bg-secondary/50 border-border h-9" />
        </div>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-40 bg-secondary/50 border-border h-9">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {statuses.map((s) => <SelectItem key={s} value={s}>{s === "all" ? "All Statuses" : s.charAt(0).toUpperCase() + s.slice(1)}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div className="card-glow rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-muted-foreground">
              <th className="p-3">Name</th>
              <th className="p-3">Service</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                <td className="p-3">
                  <Link to={`/admin/leads/${lead.id}`} className="text-foreground hover:text-primary font-medium">{lead.name}</Link>
                  <p className="text-xs text-muted-foreground">{lead.phone}</p>
                </td>
                <td className="p-3 text-muted-foreground">{lead.service}</td>
                <td className="p-3"><span className={cn("text-xs px-2 py-0.5 rounded-full", statusColors[lead.status])}>{lead.status}</span></td>
                <td className="p-3 text-xs text-muted-foreground">{new Date(lead.createdAt).toLocaleDateString()}</td>
                <td className="p-3"><Button variant="ghost" size="sm" onClick={() => handleDelete(lead.id)}><Trash2 size={14} className="text-muted-foreground hover:text-red-400" /></Button></td>
              </tr>
            ))}
            {leads.length === 0 && <tr><td colSpan={5} className="p-8 text-center text-muted-foreground">No leads found.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
