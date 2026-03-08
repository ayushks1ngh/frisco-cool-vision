import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Frisco, TX",
    rating: 5,
    text: "Frisco Cooling & Heating replaced our entire HVAC system in one day. The technician was professional, knowledgeable, and left the house spotless. Couldn't be happier!",
    service: "AC Installation",
  },
  {
    name: "James K.",
    location: "Plano, TX",
    rating: 5,
    text: "Our AC went out at 11pm on a 105° day. They arrived within 2 hours and had it running in 45 minutes. Truly exceptional 24/7 service. Will call no one else.",
    service: "Emergency AC Repair",
  },
  {
    name: "Linda T.",
    location: "McKinney, TX",
    rating: 5,
    text: "I've been using their annual maintenance plan for 3 years. My energy bills have dropped 20% and I haven't had a single breakdown. Worth every penny.",
    service: "HVAC Maintenance",
  },
  {
    name: "Robert C.",
    location: "Allen, TX",
    rating: 5,
    text: "Fair pricing, on-time arrival, and fixed right the first time. The technician explained everything clearly before doing any work. That kind of transparency is rare.",
    service: "Heating Repair",
  },
  {
    name: "Maria G.",
    location: "Prosper, TX",
    rating: 5,
    text: "Got 3 quotes — Frisco Cooling was the most competitive. More importantly, they installed an energy-efficient system that's already saving us money every month.",
    service: "AC Installation",
  },
  {
    name: "David R.",
    location: "The Colony, TX",
    rating: 5,
    text: "Same-day service and very professional team. They diagnosed the issue quickly, had the part in their truck, and fixed it on the spot. Highly recommend!",
    service: "AC Repair",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 gradient-text">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Thousands
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-sm text-foreground font-semibold">4.9 / 5</span>
            <span className="text-sm text-muted-foreground">from 580+ Google Reviews</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <div key={idx} className="card-glow rounded-2xl p-6 flex flex-col">
              {/* Quote icon */}
              <Quote size={20} className="text-primary/40 mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">"{t.text}"</p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full border"
                  style={{
                    borderColor: "hsl(var(--cyan) / 0.3)",
                    background: "hsl(var(--cyan) / 0.08)",
                    color: "hsl(var(--cyan))"
                  }}>
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
