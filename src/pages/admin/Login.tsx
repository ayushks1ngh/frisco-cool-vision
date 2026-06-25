import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/lib/api";
import { Loader2, Snowflake } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await api.login(email, password);
      navigate("/admin");
    } catch {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "hsl(220,45%,4%)" }}>
      <div className="w-full max-w-sm card-glow rounded-2xl p-8">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
            <Snowflake size={18} className="text-[hsl(var(--primary-foreground))]" />
          </div>
          <span className="font-heading font-bold text-lg text-foreground">Admin</span>
        </div>
        {error && <div className="p-3 mb-4 rounded-lg text-sm text-red-400 border border-red-400/30 bg-red-400/10">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="text-xs text-muted-foreground mb-1.5 block">Email</Label>
            <Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="bg-secondary/50 border-border h-10" />
          </div>
          <div>
            <Label className="text-xs text-muted-foreground mb-1.5 block">Password</Label>
            <Input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="bg-secondary/50 border-border h-10" />
          </div>
          <Button type="submit" disabled={loading} className="w-full h-10 font-semibold" style={{ background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))" }}>
            {loading ? <Loader2 size={16} className="animate-spin" /> : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}
