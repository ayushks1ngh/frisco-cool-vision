import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Target, Heart, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import technicianImg from "@/assets/technician.jpg";

const team = [
  { name: "Marcus Williams", role: "Lead HVAC Technician", cert: "NATE Certified · 12 years" },
  { name: "Sarah Chen", role: "Installation Specialist", cert: "EPA 608 · 8 years" },
  { name: "David Torres", role: "Senior Repair Tech", cert: "NATE Certified · 10 years" },
  { name: "James Parker", role: "Service Manager", cert: "ACCA Member · 15 years" },
];

const values = [
  { icon: Award, title: "Excellence", desc: "We hold every technician to the highest certification standards and ongoing training." },
  { icon: Target, title: "Precision", desc: "We diagnose right and repair right — no guesswork, no unnecessary parts." },
  { icon: Heart, title: "Care", desc: "We treat every home like our own. Clean, respectful, and professional every time." },
  { icon: Users, title: "Community", desc: "Frisco-born and operated. We're proud to be part of this incredible community." },
];

export default function About() {
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
              <span className="text-foreground">About</span>
            </div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 gradient-text">About Us</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
              Frisco's HVAC
              <br />
              <span className="gradient-text">Experts Since 2009</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Built on integrity, powered by expertise. For over 15 years, Frisco Cooling &amp; Heating has been the name DFW families trust for premium climate control.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-5">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Frisco Cooling &amp; Heating was founded in 2009 by a team of passionate HVAC professionals who believed the industry needed more transparency, more expertise, and more genuine care for customers.</p>
                  <p>Starting with just two technicians and a van, we built our reputation one perfectly-serviced home at a time. Today, we're a team of 20+ certified professionals serving thousands of families across North DFW.</p>
                  <p>We invest heavily in the latest diagnostic equipment, continuous certification training, and technology-driven service management — so when we arrive at your door, we arrive prepared.</p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[{ v: "15+", l: "Years" }, { v: "4,800+", l: "Clients" }, { v: "20+", l: "Technicians" }].map((s) => (
                    <div key={s.l} className="text-center p-4 rounded-xl border border-border" style={{ background: "hsl(var(--card))" }}>
                      <p className="font-heading text-2xl font-bold gradient-text">{s.v}</p>
                      <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border"
                style={{ boxShadow: "0 0 40px hsl(185 100% 50% / 0.1)" }}>
                <img src={technicianImg} alt="Our Team" className="w-full h-[460px] object-cover" />
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-10 text-center">Our Core Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {values.map((v) => (
                  <div key={v.title} className="card-glow rounded-2xl p-6 text-center">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                      style={{ background: "hsl(var(--cyan) / 0.1)", border: "1px solid hsl(var(--cyan) / 0.2)" }}>
                      <v.icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20" style={{ background: "hsl(var(--secondary))" }}>
          <div className="container">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-12 text-center">Meet Our Lead Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map((member) => (
                <div key={member.name} className="card-glow rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-heading font-bold text-xl"
                    style={{ background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))" }}>
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="font-heading font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary mt-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-2">{member.cert}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
