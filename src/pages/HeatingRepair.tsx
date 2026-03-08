import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { CheckCircle2, Flame, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const issues = [
  "Furnace not turning on",
  "Weak or no heat output",
  "Frequent cycling on and off",
  "Pilot light or ignitor failure",
  "Carbon monoxide detector alerts",
  "Gas leaks or unusual smells",
  "Heat pump issues",
  "Cracked heat exchangers",
];

export default function HeatingRepair() {
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
              <span className="text-foreground">Heating Repair</span>
            </div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 gradient-text">Heating Repair</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
              Heating Repair &
              <br />
              <span className="gradient-text">Restoration</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When the cold hits North Texas, don't wait. Our certified technicians repair all heating systems quickly and safely — furnaces, heat pumps, and more.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Heating Issues We Fix</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {issues.map((issue) => (
                    <div key={issue} className="flex items-start gap-2.5 p-3.5 rounded-xl border border-border"
                      style={{ background: "hsl(var(--card))" }}>
                      <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div className="card-glow rounded-2xl p-6 border-l-2" style={{ borderLeftColor: "hsl(var(--cyan))" }}>
                  <Flame size={28} className="text-primary mb-4" />
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">Safety First</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Gas furnace repairs require precision. Our certified technicians follow strict safety protocols, check for carbon monoxide risks, and ensure your system is operating safely before leaving.
                  </p>
                </div>
                <div className="card-glow rounded-2xl p-6 border-l-2" style={{ borderLeftColor: "hsl(var(--cyan))" }}>
                  <Clock size={28} className="text-primary mb-4" />
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">Emergency Heating Service</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Heating failures don't wait for business hours. We offer 24/7 emergency heating repair across all service areas — day or night, weekends included.
                  </p>
                </div>
                <div className="card-glow rounded-2xl p-6 border-l-2" style={{ borderLeftColor: "hsl(var(--cyan))" }}>
                  <Shield size={28} className="text-primary mb-4" />
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">Repairs Guaranteed</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every repair comes with a 1-year parts and labor warranty. If your repaired system fails again, we come back at no charge.
                  </p>
                </div>
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
