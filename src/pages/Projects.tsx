import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import FloatingNav from "@/components/FloatingNav";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingNav />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-gold mb-8 transition">
            <ArrowLeft className="w-3 h-3" /> back to home
          </Link>
          <p className="font-mono text-xs text-gold mb-4">/ archive</p>
          <h1 className="font-mono text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] font-bold tracking-tighter">
            All<span className="text-gold">.</span><br />
            <span className="gold-gradient-text">Projects</span>
          </h1>
          <p className="mt-8 max-w-xl font-body text-lg text-muted-foreground">
            A complete archive of shipped work — case studies, side projects, and selected client engagements from the past 5 years.
          </p>
        </div>
      </section>

      <section className="pb-32 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                to={`/work/${p.slug}`}
                className="bento-card group block overflow-hidden h-full"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={p.cover}
                    alt={p.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-3 left-3 font-mono text-[10px] px-2 py-1 rounded-md bg-background/80 backdrop-blur border border-border">
                    {p.year}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="font-mono text-xs text-gold uppercase tracking-wider">{p.tag}</p>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-gold group-hover:rotate-45 transition" />
                  </div>
                  <h2 className="font-mono text-2xl font-bold mb-2">{p.name}</h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 3).map((s) => (
                        <span key={s} className="font-mono text-[10px] px-2 py-0.5 rounded border border-border text-muted-foreground">
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="font-mono text-xs text-gold">{p.metric}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bento-card p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative">
            <p className="font-mono text-xs text-gold mb-3">like what you see?</p>
            <h3 className="font-mono text-3xl md:text-4xl font-bold mb-4">Let's build the next one together.</h3>
            <Link to="/#contact" className="inline-flex items-center gap-2 rounded-full bg-gold text-primary-foreground px-6 py-3 font-mono font-medium hover:bg-[var(--gold-soft)] transition">
              Start a project <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
