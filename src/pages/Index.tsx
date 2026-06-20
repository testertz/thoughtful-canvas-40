import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Github, Linkedin, Mail, Code2, Sparkles, Server, Database,
  Cpu, Globe, Send, Download, MapPin, Calendar, Coffee, Star, ExternalLink, Terminal
} from "lucide-react";
import portrait from "@/assets/mal-portrait.jpg";
import FloatingNav from "@/components/FloatingNav";
import { projects } from "@/data/projects";

const stack = [
  "TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL",
  "Tailwind", "AWS", "Docker", "Redis", "GraphQL", "tRPC", "Prisma", "Stripe"
];

const services = [
  { icon: Globe, title: "Web Applications", desc: "Production-grade React & Next.js apps with elegant UX." },
  { icon: Server, title: "Backend & APIs", desc: "Scalable Node, Python and Go services. REST, GraphQL, tRPC." },
  { icon: Database, title: "Data & Infra", desc: "Postgres, Redis, ClickHouse. AWS, Docker, CI/CD pipelines." },
  { icon: Cpu, title: "AI Integration", desc: "LLM features, RAG, agents, embeddings — shipped, not demos." },
];

const timeline = [
  { year: "2024 — Now", role: "Freelance Fullstack Engineer", place: "Remote · Worldwide" },
  { year: "2022 — 2024", role: "Senior Engineer", place: "Helix Studio" },
  { year: "2020 — 2022", role: "Fullstack Developer", place: "Nimbus Labs" },
  { year: "2019", role: "B.Sc. Computer Science", place: "Started building for the web" },
];

export default function Index() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }));
    };
    tick();
    const i = setInterval(tick, 1000 * 30);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingNav />

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 noise opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 text-xs font-mono text-muted-foreground mb-8"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              available for select projects · Q3 2026
            </span>
            <span className="text-border">/</span>
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Remote</span>
            <span className="text-border">/</span>
            <span>{time} local</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-mono text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] font-bold tracking-tighter"
          >
            Mal<span className="text-gold">.</span><br />
            <span className="gold-gradient-text">Fullstack</span><br />
            <span className="text-muted-foreground">Developer</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 grid md:grid-cols-2 gap-8 items-end"
          >
            <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed max-w-xl">
              I design and build <span className="text-foreground">fast, considered web products</span> —
              from pixel-perfect interfaces to the systems that power them. Currently shipping for
              startups and ambitious teams.
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-3 text-sm font-mono hover:bg-gold/10 transition">
                <Code2 className="w-4 h-4 text-gold" /> See the work
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-mono hover:opacity-90 transition">
                <Download className="w-4 h-4" /> Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border/50 py-6 overflow-hidden bg-card/30">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...stack, ...stack].map((s, i) => (
            <span key={i} className="font-mono text-sm text-muted-foreground mx-8 flex items-center gap-8">
              {s}
              <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* BENTO STATS */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-mono text-3xl md:text-5xl font-bold">
            <span className="text-gold">/</span> about
          </h2>
          <p className="font-mono text-xs text-muted-foreground">01 — who I am</p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-5 auto-rows-[minmax(140px,auto)]">
          {/* Portrait */}
          <div className="bento-card col-span-12 md:col-span-5 row-span-2 group">
            <img
              src={portrait}
              alt="Portrait of Mal, fullstack developer"
              width={896} height={1152}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-mono text-xs text-gold mb-1">developer · designer · problem-solver</p>
              <p className="font-mono text-xl font-bold">Mal</p>
            </div>
          </div>

          {/* Bio */}
          <div className="bento-card col-span-12 md:col-span-7 p-7 flex flex-col justify-between">
            <Sparkles className="w-6 h-6 text-gold" />
            <div>
              <p className="font-body text-lg leading-relaxed">
                I've spent the last <span className="text-gold font-medium">5+ years</span> shipping products that
                people actually use — from solo SaaS tools to systems handling millions of requests a day. I care
                about details, performance, and writing code other humans can read.
              </p>
              <p className="font-mono text-xs text-muted-foreground mt-4">
                Trained as an engineer. Obsessed with craft.
              </p>
            </div>
          </div>

          {/* Stats */}
          <Stat value="50+" label="projects shipped" />
          <Stat value="5y" label="building for the web" />
          <Stat value="98" label="avg. lighthouse score" />
          <Stat value="∞" label="cups of coffee" icon={Coffee} />

          {/* Status */}
          <div className="bento-card col-span-12 md:col-span-6 p-6">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-4">
              <Terminal className="w-4 h-4 text-gold" /> ~/now.txt
            </div>
            <p className="font-mono text-sm leading-7">
              <span className="text-gold">›</span> currently freelancing remote<br />
              <span className="text-gold">›</span> building an AI dev tool on the side<br />
              <span className="text-gold">›</span> open to senior fullstack roles<br />
              <span className="text-gold">›</span> learning Rust + WASM
            </p>
          </div>

          {/* Calendar */}
          <div className="bento-card col-span-12 md:col-span-6 p-6 flex flex-col justify-between">
            <Calendar className="w-6 h-6 text-gold" />
            <div>
              <p className="font-mono text-sm text-muted-foreground">next availability</p>
              <p className="font-mono text-2xl font-bold mt-2">Q3 — Q4 2026</p>
              <a href="#contact" className="inline-flex items-center gap-2 mt-4 text-sm font-mono text-gold hover:underline">
                Book a call <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-mono text-3xl md:text-5xl font-bold">
            <span className="text-gold">/</span> selected work
          </h2>
          <p className="font-mono text-xs text-muted-foreground">02 — case studies</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bento-card group p-7 block min-h-[280px] flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-gold uppercase tracking-wider mb-2">{p.tag}</p>
                  <h3 className="font-mono text-2xl md:text-3xl font-bold">{p.name}</h3>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-gold group-hover:rotate-45 transition" />
              </div>
              <p className="font-body text-muted-foreground leading-relaxed my-6">{p.desc}</p>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map(s => (
                    <span key={s} className="font-mono text-[11px] px-2 py-1 rounded-md border border-border text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="font-mono text-xs text-gold">{p.metric}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-mono text-3xl md:text-5xl font-bold">
            <span className="text-gold">/</span> what I do
          </h2>
          <p className="font-mono text-xs text-muted-foreground">03 — services</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bento-card p-6"
            >
              <div className="w-11 h-11 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                <s.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-mono text-lg font-bold mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-mono text-3xl md:text-5xl font-bold">
            <span className="text-gold">/</span> trajectory
          </h2>
          <p className="font-mono text-xs text-muted-foreground">04 — experience</p>
        </div>

        <div className="bento-card p-2 md:p-4">
          <ul className="divide-y divide-border">
            {timeline.map((t) => (
              <li key={t.year} className="grid grid-cols-12 gap-4 px-4 py-6 items-center hover:bg-gold/5 transition rounded-xl">
                <div className="col-span-12 md:col-span-3 font-mono text-xs text-gold">{t.year}</div>
                <div className="col-span-12 md:col-span-6 font-mono text-lg md:text-xl font-bold">{t.role}</div>
                <div className="col-span-12 md:col-span-3 font-body text-sm text-muted-foreground md:text-right">{t.place}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bento-card p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}
            </div>
            <p className="font-mono text-xl md:text-3xl font-bold max-w-3xl mx-auto leading-snug">
              "Mal ships work that feels expensive. The best engineer we've hired —
              fast, thoughtful, and the design taste is rare."
            </p>
            <p className="font-mono text-xs text-muted-foreground mt-6">
              — Sarah Chen, CTO @ Helix Studio
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-5">
          <div className="md:col-span-7 bento-card p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
            <p className="font-mono text-xs text-gold mb-4">05 — let's build something</p>
            <h2 className="font-mono text-4xl md:text-6xl font-bold leading-[1] tracking-tighter">
              Have a project<br />in mind<span className="text-gold">?</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-6 max-w-md">
              Whether it's a product, a feature, or a full team — I'd love to hear it.
              I reply within 24 hours.
            </p>
            <a
              href="mailto:hello@mal.dev"
              className="inline-flex items-center gap-2 mt-8 rounded-full bg-gold text-primary-foreground px-6 py-3 font-mono font-medium hover:bg-[var(--gold-soft)] transition"
            >
              hello@mal.dev <Send className="w-4 h-4" />
            </a>
          </div>

          <div className="md:col-span-5 flex flex-col gap-5">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="bento-card p-6 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <Github className="w-6 h-6 text-gold" />
                <div>
                  <p className="font-mono font-bold">GitHub</p>
                  <p className="font-mono text-xs text-muted-foreground">@mal</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-gold group-hover:rotate-45 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bento-card p-6 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <Linkedin className="w-6 h-6 text-gold" />
                <div>
                  <p className="font-mono font-bold">LinkedIn</p>
                  <p className="font-mono text-xs text-muted-foreground">/in/mal</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-gold group-hover:rotate-45 transition" />
            </a>
            <a href="mailto:hello@mal.dev" className="bento-card p-6 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-gold" />
                <div>
                  <p className="font-mono font-bold">Email</p>
                  <p className="font-mono text-xs text-muted-foreground">hello@mal.dev</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-gold group-hover:rotate-45 transition" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} mal.dev — crafted with care
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-gold">●</span> available for new work
          </p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label, icon: Icon }: { value: string; label: string; icon?: typeof Coffee }) {
  return (
    <div className="bento-card col-span-6 md:col-span-3 lg:col-span-3 p-5 flex flex-col justify-between">
      {Icon ? <Icon className="w-5 h-5 text-gold" /> : <span className="w-5 h-5 text-gold font-mono">★</span>}
      <div>
        <p className="font-mono text-3xl md:text-4xl font-bold gold-gradient-text">{value}</p>
        <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider mt-1">{label}</p>
      </div>
    </div>
  );
}
