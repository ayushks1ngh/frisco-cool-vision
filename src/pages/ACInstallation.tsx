import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { CheckCircle2, Zap, BarChart3, Leaf, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const brands = ["Carrier", "Lennox", "Trane", "Goodman", "Rheem", "Amana", "Bryant", "Heil"];

const steps = [
  { num: "01", title: "Home Assessment", desc: "We calculate the precise cooling load for your home using industry-standard Manual J calculations." },
  { num: "02", title: "System Selection", desc: "We recommend the best unit for your budget, home size, and efficiency goals — with full explanation." },
  { num: "03", title: "Professional Install", desc: "Our certified crew installs your new system to manufacturer specs with zero shortcuts." },
  { num: "04", title: "Testing & Handoff", desc: "We test all functions, set your thermostat, and walk you through your new system before we leave." },
];

export default function ACInstallation() {
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
              <span className="text-foreground">AC Installation</span>
            </div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 gradient-text">AC Installation</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
              New AC Systems
              <br />
              <span className="gradient-text">Installed Right</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Energy-efficient AC installation by NATE-certified technicians. We size your system correctly for maximum comfort and lowest energy bills.
            </p>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-20">
          <div className="container">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-12 text-center">Our Installation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              {steps.map((step) => (
                <div key={step.num} className="card-glow rounded-2xl p-6 text-center">
                  <span className="font-heading text-4xl font-bold gradient-text block mb-4">{step.num}</span>
                  <h3 className="font-heading font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Brands */}
            <div className="text-center">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">Brands We Install</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {brands.map((brand) => (
                  <div key={brand} className="px-5 py-2.5 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
                    style={{ background: "hsl(var(--card))" }}>
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12" style={{ background: "hsl(var(--secondary))" }}>
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { icon: Leaf, title: "Up to 30% Energy Savings", desc: "Modern high-SEER systems dramatically cut your monthly energy bills." },
                { icon: BarChart3, title: "Precise Sizing", desc: "Correct sizing prevents humidity issues, energy waste, and premature failure." },
                { icon: Zap, title: "Rebates Available", desc: "We help you access utility rebates and manufacturer incentives to reduce upfront cost." },
              ].map((item) => (
                <div key={item.title} className="card-glow rounded-2xl p-6">
                  <item.icon size={28} className="text-primary mb-4" />
                  <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
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
