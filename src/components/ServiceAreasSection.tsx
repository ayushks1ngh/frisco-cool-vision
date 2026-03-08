import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const areas = [
  { name: "Frisco", tag: "Primary" },
  { name: "Plano", tag: null },
  { name: "McKinney", tag: null },
  { name: "Allen", tag: null },
  { name: "Prosper", tag: null },
  { name: "Celina", tag: null },
  { name: "The Colony", tag: null },
  { name: "Little Elm", tag: null },
  { name: "Lewisville", tag: null },
  { name: "Carrollton", tag: null },
  { name: "Flower Mound", tag: null },
  { name: "Southlake", tag: null },
];

export default function ServiceAreasSection() {
  return (
    <section className="py-24 relative" style={{ background: "hsl(var(--secondary))" }}>
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 gradient-text">Service Areas</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Serving DFW's
              <br />
              <span className="gradient-text">North Suburbs</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Based in Frisco, Texas — we serve the entire north Dallas-Fort Worth metropolitan area. Fast response times across all service cities, with priority same-day appointments for our Frisco neighbors.
            </p>
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <MapPin size={16} />
              See All Service Areas
            </Link>
          </div>

          {/* Right — area grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {areas.map((area) => (
              <Link
                key={area.name}
                to="/service-areas"
                className="card-glow rounded-xl px-4 py-3.5 flex items-center gap-2.5 group hover:-translate-y-0.5 transition-transform duration-200"
              >
                <MapPin size={14} className="text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{area.name}</span>
                {area.tag && (
                  <span className="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{ background: "hsl(var(--cyan) / 0.15)", color: "hsl(var(--cyan))" }}>
                    {area.tag}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
