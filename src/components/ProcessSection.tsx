import { Phone, ClipboardList, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Contact Us",
    desc: "Call, text, or fill out our online form. We respond within minutes — 24/7 including emergencies.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Diagnosis & Quote",
    desc: "A certified technician arrives on time, performs a thorough diagnostic, and provides a transparent upfront quote.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Expert Repair",
    desc: "Our NATE-certified tech completes the work using top-tier parts and advanced equipment — done right the first time.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Quality Check",
    desc: "We test all systems, confirm your comfort, and back every job with our 100% satisfaction guarantee.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "hsl(var(--secondary))" }}>
      {/* Decorative grid */}
      <div className="absolute inset-0 tech-grid opacity-40" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(185 100% 50% / 0.06), transparent)" }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 gradient-text">How It Works</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple. Fast. Reliable.
          </h2>
          <p className="text-muted-foreground">
            Our streamlined process ensures you get expert HVAC service with zero hassle from start to finish.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line on desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--cyan) / 0.3), hsl(var(--cyan) / 0.3), transparent)" }} />

          {steps.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col items-center text-center group">
              {/* Step circle */}
              <div className="relative mb-6">
                <div
                  className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center border transition-all duration-300 group-hover:border-primary/50"
                  style={{
                    background: "hsl(var(--card))",
                    borderColor: "hsl(var(--border))",
                    boxShadow: "0 4px 20px hsl(185 100% 50% / 0.05)"
                  }}
                >
                  <step.icon size={28} className="text-primary mb-1" />
                  <span className="text-xs font-bold text-muted-foreground font-heading">{step.number}</span>
                </div>
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: "0 0 30px hsl(185 100% 50% / 0.2)" }} />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
