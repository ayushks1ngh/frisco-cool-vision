import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["(972) 333-4444", "24/7 Emergency Line"],
    action: { label: "Call Now", href: "tel:+19723334444" },
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@friscocooling.com", "We reply within 1 hour"],
    action: { label: "Send Email", href: "mailto:info@friscocooling.com" },
  },
  {
    icon: MapPin,
    title: "Location",
    lines: ["Frisco, Texas 75034", "Serving North DFW"],
    action: null,
  },
  {
    icon: Clock,
    title: "Hours",
    lines: ["Mon – Sun: 7am – 10pm", "24/7 Emergency Service"],
    action: null,
  },
];

export default function Contact() {
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
              <span className="text-foreground">Contact</span>
            </div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 gradient-text">Contact Us</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
              Let's Talk
              <br />
              <span className="gradient-text">HVAC Comfort</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to schedule service, get a quote, or ask a question? We're here 7 days a week with 24/7 emergency response.
            </p>
          </div>
        </section>

        {/* Contact cards */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              {contactInfo.map((item) => (
                <div key={item.title} className="card-glow rounded-2xl p-6 flex flex-col">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "hsl(var(--cyan) / 0.1)", border: "1px solid hsl(var(--cyan) / 0.2)" }}>
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  {item.lines.map((line, i) => (
                    <p key={i} className={`text-sm ${i === 0 ? "text-foreground font-medium" : "text-muted-foreground"}`}>{line}</p>
                  ))}
                  {item.action && (
                    <a href={item.action.href}
                      className="mt-4 text-xs font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                      {item.action.label} →
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Emergency CTA */}
            <div className="rounded-2xl p-8 md:p-12 text-center mb-4 relative overflow-hidden"
              style={{ background: "var(--gradient-card)", border: "1px solid hsl(var(--border))" }}>
              <div className="absolute inset-0 tech-grid opacity-20" />
              <div className="relative z-10">
                <MessageCircle size={36} className="text-primary mx-auto mb-4" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                  24/7 Emergency Service
                </h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  HVAC emergency? Don't wait until morning. We have technicians available around the clock for urgent situations.
                </p>
                <a href="tel:+19723334444"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm animate-pulse-glow"
                  style={{ background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))" }}>
                  <Phone size={16} />
                  Call Emergency Line: (972) 333-4444
                </a>
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
