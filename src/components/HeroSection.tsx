import { Link } from "react-router-dom";
import { ArrowRight, Phone, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-hvac.jpg";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "4,800+", label: "Happy Clients" },
  { value: "24/7", label: "Emergency Service" },
  { value: "100%", label: "Satisfaction Rate" },
];

const badges = ["Licensed & Insured", "NATE Certified", "Same-Day Service", "Free Estimates"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="HVAC unit" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 tech-grid opacity-60" />
        {/* Glow orb */}
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(185 100% 50% / 0.12), transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(210 100% 60% / 0.08), transparent 70%)" }}
        />
      </div>

      <div className="container relative z-10 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border text-xs font-medium tracking-wide"
            style={{
              borderColor: "hsl(var(--cyan) / 0.4)",
              background: "hsl(var(--cyan) / 0.08)",
              color: "hsl(var(--cyan))"
            }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Frisco's #1 HVAC Experts · Frisco, Texas
          </div>

          {/* Headline */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-6">
            Precision{" "}
            <span className="gradient-text">Cooling</span>
            <br />
            &amp; Heating
            <br />
            <span className="text-foreground/70">Solutions</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Advanced HVAC technology meets certified expertise. We keep Frisco homes and businesses comfortable year-round — fast, reliable, and backed by a 100% satisfaction guarantee.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Button asChild size="lg" className="h-12 px-7 text-base font-semibold shadow-btn-glow rounded-xl"
              style={{ background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))" }}>
              <Link to="/contact" className="flex items-center gap-2">
                Get Free Quote <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-7 text-base font-semibold rounded-xl border-border hover:border-primary/50 hover:bg-secondary/50">
              <a href="tel:+19723334444" className="flex items-center gap-2">
                <Phone size={18} />
                (972) 333-4444
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-12">
            {badges.map((b) => (
              <div key={b} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <CheckCircle2 size={14} className="text-primary" />
                {b}
              </div>
            ))}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3 p-4 rounded-xl border border-border w-fit"
            style={{ background: "hsl(var(--card) / 0.8)", backdropFilter: "blur(8px)" }}>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">4.9/5</span>
            <span className="text-xs text-muted-foreground">from 580+ reviews</span>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-12 left-0 right-0 container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-border/60"
            style={{ background: "hsl(var(--border))" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center py-5 px-4"
                style={{ background: "hsl(var(--card) / 0.85)", backdropFilter: "blur(12px)" }}>
                <span className="font-heading text-2xl md:text-3xl font-bold gradient-text">{stat.value}</span>
                <span className="text-xs text-muted-foreground mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Animation Placeholder */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-[420px] h-[420px] mr-8">
          <div className="w-full h-full rounded-2xl border border-border/40 flex items-center justify-center animate-float"
            style={{
              background: "hsl(var(--card) / 0.3)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 0 60px hsl(185 100% 50% / 0.12), inset 0 0 60px hsl(185 100% 50% / 0.04)"
            }}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-3 animate-pulse-glow"
                style={{ background: "hsl(var(--primary) / 0.1)" }}>
                <span className="text-2xl">❄️</span>
              </div>
              <p className="text-xs text-muted-foreground font-medium">3D Animation</p>
              <p className="text-[10px] text-muted-foreground/60 mt-1">Space reserved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
