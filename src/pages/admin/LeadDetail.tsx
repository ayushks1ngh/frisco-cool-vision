import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api, type Lead } from "@/lib/api";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";

const statuses = ["new", "contacted", "quoted", "scheduled", "completed", "closed"];

export default function LeadDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [lead, setLead] = useState<Lead | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { if (id) api.getLead(id).then(setLead).catch(() => navigate("/admin/leads")); }, [id, navigate]);

  const updateStatus = async (status: string) => {
    if (!id) return;
    setSaving(true);
    const updated = await api.updateLead(id, { status });
    setLead(updated);
    setSaving(false);
  };

  if (!lead) return <div className="flex items-center justify-center py-20"><Loader2 className="animate-spin text-primary" /></div>;

  return (
    <div>
      <Button variant="ghost" size="sm" className="mb-4 text-muted-foreground" onClick={() => navigate("/admin/leads")}>
        <ArrowLeft size={14} className="mr-1" /> Back
      </Button>
      <div className="card-glow rounded-xl p-6 max-w-2xl">
        <h1 className="font-heading text-xl font-bold text-foreground mb-4">{lead.name}</h1>
        <dl className="grid grid-cols-2 gap-4 text-sm mb-6">
          <div><dt className="text-xs text-muted-foreground">Phone</dt><dd className="text-foreground">{lead.phone}</dd></div>
          <div><dt className="text-xs text-muted-foreground">Email</dt><dd className="text-foreground">{lead.email || "—"}</dd></div>
          <div><dt className="text-xs text-muted-foreground">Service</dt><dd className="text-foreground">{lead.service}</dd></div>
          <div><dt className="text-xs text-muted-foreground">Source</dt><dd className="text-foreground">{lead.sourcePage || "—"}</dd></div>
          <div className="col-span-2"><dt className="text-xs text-muted-foreground">Message</dt><dd className="text-foreground mt-1">{lead.message || "—"}</dd></div>
          <div><dt className="text-xs text-muted-foreground">Created</dt><dd className="text-foreground">{new Date(lead.createdAt).toLocaleString()}</dd></div>
        </dl>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">Status:</span>
          <Select value={lead.status} onValueChange={updateStatus} disabled={saving}>
            <SelectTrigger className="w-40 bg-secondary/50 border-border h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((s) => <SelectItem key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</SelectItem>)}
            </SelectContent>
          </Select>
          {saving && <Loader2 size={14} className="animate-spin text-primary" />}
        </div>
      </div>
    </div>
  );
}
