import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Clock, Minus, MessageCircle } from "lucide-react";
import FloatingNav from "@/components/FloatingNav";
import { pricing, allFeatures, featureMatrix } from "@/data/pricing";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingNav />

      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 noise opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-gold mb-8 transition"
          >
            <ArrowLeft className="w-3 h-3" /> back to home
          </Link>
          <p className="font-mono text-xs text-gold mb-4">/ plans</p>
          <h1 className="font-mono text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] font-bold tracking-tighter">
            Transparent<span className="text-gold">.</span>
            <br />
            <span className="gold-gradient-text">Pricing</span>
          </h1>
          <p className="mt-8 max-w-2xl font-body text-lg text-muted-foreground leading-relaxed">
            Fixed-scope pricing for the most common engagements. Every project starts with a free 30-min call so we can scope it properly — final quote is always in writing before we begin.
          </p>
        </div>
      </section>

      {/* TIERS */}
      <section className="pb-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pricing.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`bento-card p-6 relative flex flex-col ${
                tier.highlight
                  ? "border-gold/60 bg-gradient-to-br from-gold/[0.06] to-transparent"
                  : ""
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gold text-primary-foreground font-mono text-[10px] uppercase tracking-wider font-bold">
                  {tier.badge}
                </span>
              )}

              <div className="mb-5">
                <p className="font-mono text-[11px] text-gold uppercase tracking-wider mb-2">
                  {tier.tagline}
                </p>
                <h3 className="font-mono text-xl font-bold leading-tight">
                  {tier.name}
                </h3>
              </div>

              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                {tier.desc}
              </p>

              <div className="mb-5 pb-5 border-b border-border/60">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-3xl font-bold gold-gradient-text">
                    {tier.price}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {tier.suffix}
                  </span>
                </div>
                <p className="font-mono text-[11px] text-muted-foreground mt-2">
                  <Clock className="w-3 h-3 inline text-gold mr-1" />{" "}
                  {tier.timeline}
                </p>
              </div>

              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
                Best for
              </p>
              <p className="font-body text-xs text-foreground/80 mb-5">
                {tier.bestFor}
              </p>

              <ul className="space-y-2.5 mb-6 flex-1">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 font-mono text-[11px] text-muted-foreground"
                  >
                    <Check className="w-3 h-3 text-gold mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>

              <a
                href="/#contact"
                className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 font-mono text-xs font-medium transition ${
                  tier.highlight
                    ? "bg-gold text-primary-foreground hover:bg-[var(--gold-soft)]"
                    : "border border-gold/40 text-foreground hover:bg-gold/10"
                }`}
              >
                Start a project <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="pb-32 max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-mono text-2xl md:text-4xl font-bold">
            <span className="text-gold">/</span> compare plans
          </h2>
          <p className="font-mono text-xs text-muted-foreground">feature matrix</p>
        </div>

        <div className="bento-card overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-border/60">
                <th className="text-left font-mono text-xs text-muted-foreground uppercase tracking-wider px-6 py-4 w-1/3">
                  Feature
                </th>
                {pricing.map((tier) => (
                  <th
                    key={tier.name}
                    className={`text-left font-mono text-xs uppercase tracking-wider px-4 py-4 ${
                      tier.highlight ? "text-gold" : "text-muted-foreground"
                    }`}
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature, idx) => (
                <tr
                  key={feature}
                  className={
                    idx % 2 === 0 ? "bg-card/40" : "bg-transparent"
                  }
                >
                  <td className="px-6 py-3 font-body text-sm text-foreground/90">
                    {feature}
                  </td>
                  {pricing.map((tier) => {
                    const val = featureMatrix[tier.name][idx];
                    return (
                      <td key={tier.name} className="px-4 py-3">
                        {val ? (
                          <Check className="w-4 h-4 text-gold" />
                        ) : (
                          <Minus className="w-4 h-4 text-border" />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ / NOTES */}
      <section className="pb-32 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              title: "How does payment work?",
              body: "50% upfront to reserve the slot, 50% on delivery. For retainers, billing is monthly in advance. Invoices are payable via bank transfer or Wise.",
            },
            {
              title: "What if the scope changes?",
              body: "Mid-project changes are handled with a simple change-order process. You'll get a revised timeline and cost before any extra work begins — no surprises.",
            },
            {
              title: "Do you offer refunds?",
              body: "If we haven't started design or development, the deposit is fully refundable. After work begins, we prorate based on completed milestones.",
            },
            {
              title: "Can I pause a retainer?",
              body: "Yes — retainers can be paused with 7 days notice and resumed within 3 months. Great for teams with variable sprint cadence.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bento-card p-6 md:p-8"
            >
              <p className="font-mono text-xs text-gold uppercase tracking-wider mb-3">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-mono text-lg font-bold mb-3">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 max-w-7xl mx-auto px-6">
        <div className="bento-card p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative">
            <p className="font-mono text-xs text-gold mb-3">not sure which plan fits?</p>
            <h3 className="font-mono text-3xl md:text-4xl font-bold mb-4">
              Book a free 30-min discovery call.
            </h3>
            <p className="font-body text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              We'll map your goals to the right scope — no pitch, no pressure. Just honest advice on what will actually move the needle.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold text-primary-foreground px-6 py-3 font-mono font-medium hover:bg-[var(--gold-soft)] transition"
              >
                Start a project <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/15551234567?text=Hi%20Mal%2C%20I%27d%20love%20to%20schedule%20a%20discovery%20call."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-mono text-sm hover:bg-gold/10 hover:border-gold/40 transition"
              >
                <MessageCircle className="w-4 h-4 text-gold" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} mal.dev — crafted with care
          </p>
          <Link to="/#contact" className="font-mono text-xs text-gold hover:underline">
            hello@mal.dev →
          </Link>
        </div>
      </footer>
    </div>
  );
}
