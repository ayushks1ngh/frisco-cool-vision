import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const areas = [
  { city: "Frisco", desc: "Our home base — fastest response, same-day priority service.", primary: true },
  { city: "Plano", desc: "Full-service coverage across all Plano neighborhoods.", primary: false },
  { city: "McKinney", desc: "Serving McKinney and all surrounding communities.", primary: false },
  { city: "Allen", desc: "Complete HVAC services for Allen residents and businesses.", primary: false },
  { city: "Prosper", desc: "Growing community — we're proud to serve Prosper homeowners.", primary: false },
  { city: "Celina", desc: "Expanding north? We're right there with you in Celina.", primary: false },
  { city: "The Colony", desc: "Reliable HVAC service throughout The Colony.", primary: false },
  { city: "Little Elm", desc: "Full coverage for Little Elm and lakeside communities.", primary: false },
  { city: "Lewisville", desc: "Certified HVAC technicians serving all of Lewisville.", primary: false },
  { city: "Carrollton", desc: "Fast response times across Carrollton's neighborhoods.", primary: false },
  { city: "Flower Mound", desc: "Premium HVAC service for Flower Mound homes.", primary: false },
  { city: "Southlake", desc: "High-end HVAC solutions for Southlake properties.", primary: false },
];

export default function ServiceAreasPage() {
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
              <span className="text-foreground">Service Areas</span>
            </div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 gradient-text">Service Areas</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
              Serving All of
              <br />
              <span className="gradient-text">North DFW</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in Frisco, Texas, we service homes and businesses across the entire North Dallas-Fort Worth metroplex with fast response times.
            </p>
          </div>
        </section>

        {/* Area cards */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {areas.map((area) => (
                <div key={area.city}
                  className={`rounded-2xl p-6 flex flex-col gap-3 ${area.primary ? "" : "card-glow"}`}
                  style={area.primary ? {
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--cyan) / 0.45)",
                    boxShadow: "0 0 30px hsl(185 100% 50% / 0.1)"
                  } : {}}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary" />
                      <h3 className="font-heading font-bold text-foreground">{area.city}, TX</h3>
                    </div>
                    {area.primary && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{ background: "hsl(var(--cyan) / 0.15)", color: "hsl(var(--cyan))" }}>
                        Home Base
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{area.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto pt-3 border-t border-border">
                    <Clock size={12} />
                    <span>{area.primary ? "Fastest priority response" : "Same-day service available"}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center p-10 rounded-2xl border border-border"
              style={{ background: "hsl(var(--card))" }}>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Don't See Your City?</h2>
              <p className="text-muted-foreground mb-6">We may still service your area. Give us a call to confirm coverage.</p>
              <a href="tel:+19723334444"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold"
                style={{ background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))" }}>
                <Phone size={16} />
                Call (972) 333-4444
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
