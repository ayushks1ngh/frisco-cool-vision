import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Services",
    path: "#",
    children: [
      { label: "AC Repair", path: "/ac-repair" },
      { label: "AC Installation", path: "/ac-installation" },
      { label: "Heating Repair", path: "/heating-repair" },
      { label: "HVAC Maintenance", path: "/hvac-maintenance" },
    ],
  },
  { label: "Service Areas", path: "/service-areas" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[hsl(220,45%,5%,0.95)] backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      )}
    >
      {/* Top bar */}
      <div className="border-b border-border/40 py-1.5 hidden md:block" style={{ background: "hsl(220,45%,4%)" }}>
        <div className="container flex items-center justify-between text-xs text-muted-foreground">
          <span>Serving Frisco, TX & Surrounding Areas</span>
          <div className="flex items-center gap-4">
            <a href="tel:+19723334444" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone size={11} />
              (972) 333-4444
            </a>
            <span>Mon–Sun: 7am – 10pm · 24/7 Emergency</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
            <Snowflake size={18} className="text-[hsl(var(--primary-foreground))]" />
          </div>
          <div className="leading-tight">
            <span className="font-heading font-bold text-base tracking-tight text-foreground block">
              Frisco <span className="gradient-text">Cooling</span>
            </span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest leading-none">& Heating</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="nav-link px-3 py-2 rounded-md flex items-center gap-1 hover:bg-secondary/50 transition-colors">
                  {item.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 rounded-xl border border-border shadow-xl overflow-hidden z-50"
                    style={{ background: "hsl(var(--card))" }}>
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "nav-link px-3 py-2 rounded-md hover:bg-secondary/50 transition-colors",
                  location.pathname === item.path && "active"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+19723334444" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <Phone size={14} />
            (972) 333-4444
          </a>
          <Button asChild variant="default" size="sm" className="shadow-btn-glow font-semibold"
            style={{ background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))" }}>
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border" style={{ background: "hsl(var(--card))" }}>
          <div className="container py-4 flex flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest">{item.label}</p>
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="flex items-center gap-2 px-6 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                    location.pathname === item.path
                      ? "text-primary bg-secondary/60"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2">
              <a href="tel:+19723334444" className="flex items-center gap-2 px-3 py-2 text-sm text-primary font-medium">
                <Phone size={16} />
                (972) 333-4444
              </a>
              <Button asChild className="w-full font-semibold" style={{ background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))" }}>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
