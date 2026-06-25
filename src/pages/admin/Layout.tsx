import { useEffect, useState } from "react";
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { api, type User } from "@/lib/api";
import { Snowflake, LayoutDashboard, Users, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Leads", path: "/admin/leads", icon: Users },
];

export default function AdminLayout() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    api.me().then((r) => { setUser(r.user); setLoading(false); }).catch(() => { navigate("/admin/login"); });
  }, [navigate]);

  const handleLogout = async () => {
    await api.logout();
    navigate("/admin/login");
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full" /></div>;

  return (
    <div className="min-h-screen flex" style={{ background: "hsl(220,45%,4%)" }}>
      {/* Sidebar */}
      <aside className="w-60 border-r border-border flex flex-col p-4 shrink-0">
        <div className="flex items-center gap-2 mb-8 px-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
            <Snowflake size={14} className="text-[hsl(var(--primary-foreground))]" />
          </div>
          <span className="font-heading font-bold text-sm text-foreground">Frisco Admin</span>
        </div>
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}
              className={cn("flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors",
                location.pathname === item.path ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}>
              <item.icon size={16} />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-border pt-3 mt-3">
          <p className="text-xs text-muted-foreground px-3 mb-2">{user?.email}</p>
          <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground" onClick={handleLogout}>
            <LogOut size={14} className="mr-2" /> Logout
          </Button>
        </div>
      </aside>
      {/* Content */}
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
