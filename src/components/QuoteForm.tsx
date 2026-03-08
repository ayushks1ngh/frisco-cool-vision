import { useState } from "react";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const services = [
  "AC Repair",
  "AC Installation",
  "Heating Repair",
  "HVAC Maintenance",
  "Emergency Service",
  "System Inspection",
  "Other",
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, hsl(185 100% 50% / 0.04), transparent)" }}
      />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 gradient-text">Free Quote</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Request Your
              <br />
              <span className="gradient-text">Free Estimate</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Fill out the form and a certified HVAC specialist will contact you within 1 hour. No obligation, no hidden fees — just honest service.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                "Free on-site diagnosis",
                "Upfront transparent pricing",
                "Same-day service available",
                "100% satisfaction guarantee",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="p-5 rounded-2xl border border-border flex items-center gap-4"
              style={{ background: "hsl(var(--card))" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "var(--gradient-primary)" }}>
                <Phone size={20} className="text-[hsl(var(--primary-foreground))]" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Prefer to call?</p>
                <a href="tel:+19723334444" className="text-lg font-bold text-foreground font-heading hover:text-primary transition-colors">
                  (972) 333-4444
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="card-glow rounded-2xl p-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "hsl(var(--cyan) / 0.15)" }}>
                  <CheckCircle2 size={32} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Request Sent!</h3>
                <p className="text-sm text-muted-foreground">We'll contact you within 1 hour to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs text-muted-foreground mb-1.5 block">Full Name *</Label>
                    <Input
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-secondary/50 border-border focus:border-primary/50 h-10"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground mb-1.5 block">Phone *</Label>
                    <Input
                      required
                      type="tel"
                      placeholder="(972) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="bg-secondary/50 border-border focus:border-primary/50 h-10"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground mb-1.5 block">Email</Label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-secondary/50 border-border focus:border-primary/50 h-10"
                  />
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground mb-1.5 block">Service Needed *</Label>
                  <Select required onValueChange={(v) => setForm({ ...form, service: v })}>
                    <SelectTrigger className="bg-secondary/50 border-border h-10">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground mb-1.5 block">Message</Label>
                  <Textarea
                    placeholder="Describe your issue or question..."
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-secondary/50 border-border focus:border-primary/50 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-11 font-semibold text-sm rounded-xl shadow-btn-glow"
                  style={{ background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))" }}
                >
                  Send Request <ArrowRight size={16} className="ml-2" />
                </Button>
                <p className="text-[11px] text-center text-muted-foreground">
                  We'll respond within 1 hour. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
