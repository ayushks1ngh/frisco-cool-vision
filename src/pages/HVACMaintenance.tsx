import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { CheckCircle2, Shield, DollarSign, Leaf, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const tuneUpItems = [
  "Inspect and clean condenser & evaporator coils",
  "Check refrigerant levels and pressure",
  "Lubricate all moving parts",
  "Inspect and clean blower components",
  "Test thermostat calibration",
  "Check all electrical connections",
  "Inspect ductwork for leaks",
  "Replace or inspect air filters",
  "Test safety switches and controls",
  "Measure airflow and static pressure",
];

const plans = [
  {
    name: "Basic Tune-Up",
    price: "$89",
    period: "per visit",
    features: ["Full system inspection", "Coil cleaning", "Filter replacement", "Safety check", "Written report"],
    highlight: false,
  },
  {
    name: "Annual Plan",
    price: "$149",
    period: "per year",
    features: ["2 tune-ups (spring + fall)", "Priority scheduling", "10% off repairs", "Emergency priority line", "Written reports"],
    highlight: true,
  },
  {
    name: "Comfort Club",
    price: "$249",
    period: "per year",
    features: ["2 tune-ups included", "Unlimited service calls", "15% off repairs & parts", "No overtime charges", "Priority 24/7 emergency"],
    highlight: false,
  },
];

export default function HVACMaintenance() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28">
        <section className="py-20 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute inset-0 tech-grid opacity-40" />
          <div className="container relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground">HVAC Maintenance</span>
            </div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 gradient-text">Maintenance</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
              HVAC Maintenance
              <br />
              <span className="gradient-text">Plans & Tune-Ups</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Regular maintenance is the #1 way to prevent breakdowns, lower energy bills, and extend the life of your HVAC system by years.
            </p>
          </div>
        </section>

        {/* Tune-Up checklist */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-3">What's Included in a Tune-Up</h2>
                <p className="text-muted-foreground mb-6">Our comprehensive 21-point inspection covers every critical component.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {tuneUpItems.map((item) => (
                    <div key={item} className="flex items-start gap-2 p-3 rounded-lg border border-border"
                      style={{ background: "hsl(var(--card))" }}>
                      <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-xs text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: DollarSign, stat: "20%", label: "Average energy savings with regular maintenance" },
                  { icon: Shield, stat: "40%", label: "Reduction in unexpected HVAC breakdowns" },
                  { icon: Leaf, stat: "5+ yrs", label: "Extended system lifespan with annual tune-ups" },
                  { icon: Calendar, stat: "2x / yr", label: "Recommended maintenance frequency for TX climate" },
                ].map((item) => (
                  <div key={item.label} className="card-glow rounded-2xl p-5 flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "hsl(var(--cyan) / 0.1)", border: "1px solid hsl(var(--cyan) / 0.2)" }}>
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-heading text-2xl font-bold gradient-text">{item.stat}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing plans */}
        <section className="py-20" style={{ background: "hsl(var(--secondary))" }}>
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Maintenance Plans</h2>
              <p className="text-muted-foreground">Choose the plan that fits your needs and budget.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {plans.map((plan) => (
                <div key={plan.name}
                  className={`rounded-2xl p-6 flex flex-col relative ${plan.highlight ? "border-primary/50" : "card-glow"}`}
                  style={plan.highlight ? {
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--cyan) / 0.5)",
                    boxShadow: "0 0 30px hsl(185 100% 50% / 0.12)"
                  } : {}}>
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                      style={{ background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))" }}>
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-5">
                    <span className="font-heading text-3xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-xs text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className="w-full py-2.5 rounded-xl text-sm font-semibold text-center transition-all"
                    style={plan.highlight
                      ? { background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))" }
                      : { border: "1px solid hsl(var(--border))", color: "hsl(var(--foreground))" }}>
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}
