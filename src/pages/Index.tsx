import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import QuoteForm from "@/components/QuoteForm";
import technicianImg from "@/assets/technician.jpg";
import { CheckCircle2, Award, Clock, DollarSign } from "lucide-react";

const whyUs = [
  { icon: Award, title: "NATE Certified", desc: "All technicians hold NATE certification — the industry gold standard." },
  { icon: Clock, title: "Same-Day Service", desc: "Fast response with same-day appointments across the DFW north suburbs." },
  { icon: DollarSign, title: "Upfront Pricing", desc: "Transparent quotes with no hidden fees or surprise charges." },
  { icon: CheckCircle2, title: "100% Guarantee", desc: "Not satisfied? We'll make it right. Every time, no exceptions." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesGrid />

        {/* About Teaser */}
        <section className="py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-border"
                  style={{ boxShadow: "0 0 60px hsl(185 100% 50% / 0.12)" }}>
                  <img src={technicianImg} alt="HVAC Technician" className="w-full h-[480px] object-cover" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 p-5 rounded-2xl border border-border"
                  style={{ background: "hsl(var(--card))", boxShadow: "0 4px 30px hsl(0 0% 0% / 0.3)" }}>
                  <p className="font-heading text-3xl font-bold gradient-text">15+</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Years of Excellence</p>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-sm font-semibold tracking-widest uppercase mb-3 gradient-text">About Us</p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                  Frisco's Most
                  <br />
                  <span className="gradient-text">Trusted HVAC Team</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded in Frisco, Texas, we've spent over 15 years building a reputation for excellence in HVAC service. Our team of NATE-certified technicians brings advanced diagnostic technology and old-fashioned honesty to every job.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're dealing with a midnight breakdown or planning a new system, we deliver the same high standard of care — fast response, fair pricing, and results that last.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {whyUs.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: "hsl(var(--cyan) / 0.1)", border: "1px solid hsl(var(--cyan) / 0.2)" }}>
                        <item.icon size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />
        <Testimonials />
        <ServiceAreasSection />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
