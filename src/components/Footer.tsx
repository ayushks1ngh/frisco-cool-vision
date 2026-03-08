import { Link } from "react-router-dom";
import { Snowflake, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const services = [
  { label: "AC Repair", path: "/ac-repair" },
  { label: "AC Installation", path: "/ac-installation" },
  { label: "Heating Repair", path: "/heating-repair" },
  { label: "HVAC Maintenance", path: "/hvac-maintenance" },
];

const areas = ["Frisco", "Plano", "McKinney", "Allen", "Prosper", "Celina", "The Colony", "Little Elm"];

export default function Footer() {
  return (
    <footer className="border-t border-border" style={{ background: "hsl(220,45%,4%)" }}>
      {/* CTA Band */}
      <div className="border-b border-border">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-1">Need HVAC Service Today?</h3>
            <p className="text-muted-foreground text-sm">24/7 emergency service available in Frisco &amp; surrounding areas.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+19723334444"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              style={{ background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))" }}
            >
              <Phone size={16} />
              Call (972) 333-4444
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-border text-foreground hover:border-primary/50 transition-all"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
              <Snowflake size={18} className="text-[hsl(var(--primary-foreground))]" />
            </div>
            <div>
              <span className="font-heading font-bold text-base tracking-tight text-foreground block">
                Frisco <span className="gradient-text">Cooling</span>
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">& Heating</span>
            </div>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            Frisco's most trusted HVAC company. Delivering precision comfort solutions with advanced technology and certified expertise.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-5 text-sm uppercase tracking-widest">Services</h4>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s.path}>
                <Link to={s.path} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary/60" />
                  {s.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/service-areas" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary/60" />
                Service Areas
              </Link>
            </li>
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-5 text-sm uppercase tracking-widest">Service Areas</h4>
          <ul className="space-y-2.5">
            {areas.map((area) => (
              <li key={area}>
                <Link to="/service-areas" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary/60" />
                  {area}, TX
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-5 text-sm uppercase tracking-widest">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone size={14} className="mt-0.5 shrink-0 text-primary" />
              <div>
                <a href="tel:+19723334444" className="text-sm text-foreground hover:text-primary transition-colors font-medium">(972) 333-4444</a>
                <p className="text-xs text-muted-foreground mt-0.5">24/7 Emergency Line</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={14} className="mt-0.5 shrink-0 text-primary" />
              <a href="mailto:info@friscocooling.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@friscocooling.com</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={14} className="mt-0.5 shrink-0 text-primary" />
              <span className="text-sm text-muted-foreground">Frisco, Texas 75034</span>
            </li>
          </ul>
          <div className="mt-6 p-3 rounded-lg border border-border" style={{ background: "hsl(var(--card))" }}>
            <p className="text-xs text-muted-foreground">Mon – Sun: <span className="text-foreground">7:00 AM – 10:00 PM</span></p>
            <p className="text-xs text-primary font-medium mt-1">24/7 Emergency Service Available</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2025 Frisco Cooling &amp; Heating. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
