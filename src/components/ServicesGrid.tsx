import { Link } from "react-router-dom";
import { Wrench, Zap, Flame, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "AC Repair",
    desc: "Fast, same-day AC repairs by certified technicians. We diagnose and fix all brands and models.",
    path: "/ac-repair",
    gradient: "linear-gradient(135deg, hsl(185,100%,50%,0.15), hsl(185,100%,50%,0.05))",
    iconColor: "hsl(var(--cyan))",
  },
  {
    icon: Zap,
    title: "AC Installation",
    desc: "Energy-efficient AC installation with precision sizing and professional setup for maximum performance.",
    path: "/ac-installation",
    gradient: "linear-gradient(135deg, hsl(210,100%,60%,0.15), hsl(210,100%,60%,0.05))",
    iconColor: "hsl(var(--electric))",
  },
  {
    icon: Flame,
    title: "Heating Repair",
    desc: "Stay warm this winter. We repair furnaces, heat pumps, and all heating systems quickly.",
    path: "/heating-repair",
    gradient: "linear-gradient(135deg, hsl(20,100%,60%,0.15), hsl(20,100%,60%,0.05))",
    iconColor: "hsl(20,100%,65%)",
  },
  {
    icon: Shield,
    title: "HVAC Maintenance",
    desc: "Preventive tune-ups that extend system life, reduce energy bills, and prevent costly breakdowns.",
    path: "/hvac-maintenance",
    gradient: "linear-gradient(135deg, hsl(150,80%,50%,0.15), hsl(150,80%,50%,0.05))",
    iconColor: "hsl(150,80%,55%)",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 relative">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 gradient-text">Our Services</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete HVAC Solutions
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            From emergency repairs to full system installations, our certified team handles every HVAC need with precision and care.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <Link key={service.path} to={service.path} className="group card-glow rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300">
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
                style={{ background: service.gradient, border: `1px solid ${service.iconColor}30` }}
              >
                <service.icon size={22} style={{ color: service.iconColor }} />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold" style={{ color: service.iconColor }}>
                Learn More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
