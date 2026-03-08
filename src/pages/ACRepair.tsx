import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { CheckCircle2, Zap, Clock, Shield, Wrench, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

const issues = [
  "AC not cooling or blowing warm air",
  "Refrigerant leaks or ice buildup",
  "Loud noises or unusual vibrations",
  "Short cycling or constant running",
  "Frozen evaporator coils",
  "Capacitor or compressor failure",
  "Circuit board and electrical issues",
  "Thermostat malfunctions",
];

const benefits = [
  { icon: Clock, title: "Same-Day Repair", desc: "We dispatch a technician the same day — often within 2 hours of your call." },
  { icon: Zap, title: "All Makes & Models", desc: "Carrier, Lennox, Trane, Goodman, Rheem, Bryant, and every major brand." },
  { icon: Shield, title: "1-Year Warranty", desc: "All parts and labor come backed by our 1-year repair warranty." },
  { icon: ThumbsUp, title: "Upfront Pricing", desc: "You approve the price before we do any work. No surprise bills." },
];

export default function ACRepair() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28">
        {/* Page Hero */}
        <section className="py-20 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute inset-0 tech-grid opacity-40" />
          <div className="container relative z-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <span className="text-foreground">AC Repair</span>
              </div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-3 gradient-text">AC Repair</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
                Expert AC Repair
                <br />
                <span className="gradient-text">Same-Day Service</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When your air conditioner breaks down in the Texas heat, every minute counts. Our certified technicians are ready to restore your comfort fast.
              </p>
            </div>
          </div>
        </section>

        {/* Issues we fix */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  AC Problems We Fix
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {issues.map((issue) => (
                    <div key={issue} className="flex items-start gap-2.5 p-3.5 rounded-xl border border-border hover:border-primary/30 transition-colors"
                      style={{ background: "hsl(var(--card))" }}>
                      <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((b) => (
                  <div key={b.title} className="card-glow rounded-2xl p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "hsl(var(--cyan) / 0.1)", border: "1px solid hsl(var(--cyan) / 0.25)" }}>
                      <b.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">{b.title}</h3>
                      <p className="text-sm text-muted-foreground">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}
