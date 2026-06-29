import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  ArrowUpRight, Github, Linkedin, Mail, Code2, Sparkles, Server, Database,
  Cpu, Globe, Send, Download, MapPin, Calendar, Coffee, Star, ExternalLink, Terminal,
  Layers, Palette, Rocket, Search, PenTool, Wrench, CheckCircle2, ArrowRight,
  FileCode, Box, Cloud, GitBranch, Layout, MessageCircle, Clock, Zap, User, AtSign
} from "lucide-react";
import portrait from "@/assets/mal-portrait.jpg";
import FloatingNav from "@/components/FloatingNav";
import VoiceTestimonial from "@/components/VoiceTestimonial";
import { projects } from "@/data/projects";
import { pricing } from "@/data/pricing";

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
  {
    year: "2024 — Now",
    role: "Freelance Fullstack Engineer",
    place: "Remote · Worldwide",
    summary:
      "Partnering with startups and product teams to design and ship full-stack web apps end-to-end — from architecture and APIs to polished UI, observability and launch. Typical engagements: rebuilding legacy products, shipping AI-powered features, and standing up scalable Next.js + Postgres stacks.",
  },
  {
    year: "2022 — 2024",
    role: "Senior Engineer",
    place: "Helix Studio",
    summary:
      "Led the rebuild of the core commerce platform on Next.js, tRPC and Postgres. Mentored 4 engineers, owned the design system, and drove performance work that cut LCP by 62% and lifted checkout conversion by 38%.",
  },
  {
    year: "2020 — 2022",
    role: "Fullstack Developer",
    place: "Nimbus Labs",
    summary:
      "Built data-heavy dashboards and the analytics ingestion pipeline (Node, ClickHouse, Redis) handling millions of events per day. Shipped the first version of the customer-facing API and the billing integration with Stripe.",
  },
  {
    year: "2019",
    role: "B.Sc. Computer Science",
    place: "Started building for the web",
    summary:
      "Graduated and started freelancing on the side — landing pages, small SaaS MVPs and internal tools. The year I fell in love with shipping.",
  },
];

const availability = [
  { label: "Status", value: "Open for new projects", tone: "good" as const, icon: Zap },
  { label: "Next slot", value: "Q3 — Q4 2026", tone: "neutral" as const, icon: Calendar },
  { label: "Hours / week", value: "20 — 40 hrs", tone: "neutral" as const, icon: Clock },
  { label: "Response time", value: "Within 24 hours", tone: "good" as const, icon: Send },
  { label: "Engagements", value: "Project · Retainer · Full-time", tone: "neutral" as const, icon: Layers },
  { label: "Timezone", value: "GMT+1 · flexible overlap", tone: "neutral" as const, icon: Globe },
];

const skillGroups = [
  {
    icon: Layout,
    title: "Frontend",
    items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Remix"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Python / FastAPI", "Go", "tRPC / GraphQL", "REST APIs", "WebSockets"],
  },
  {
    icon: Database,
    title: "Data",
    items: ["PostgreSQL", "Redis", "ClickHouse", "Prisma", "pgvector", "Supabase"],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    items: ["AWS", "Vercel", "Docker", "Terraform", "GitHub Actions", "Cloudflare"],
  },
  {
    icon: Cpu,
    title: "AI / ML",
    items: ["OpenAI", "RAG pipelines", "LangChain", "Embeddings", "Agents", "Fine-tuning"],
  },
  {
    icon: PenTool,
    title: "Design & Craft",
    items: ["Design systems", "Figma", "Motion design", "Accessibility", "Performance", "SEO"],
  },
];

const process = [
  {
    n: "01",
    icon: Search,
    title: "Discover",
    desc: "We start with a deep dive into your goals, users, and constraints. I ask hard questions early so we ship the right thing.",
    bullets: ["Stakeholder interviews", "Technical audit", "Scope & success metrics"],
  },
  {
    n: "02",
    icon: PenTool,
    title: "Design",
    desc: "Wireframes, flows, and a tight design system. Every screen is intentional and aligned to the product strategy.",
    bullets: ["User flows", "UI in Figma", "Design tokens"],
  },
  {
    n: "03",
    icon: Wrench,
    title: "Build",
    desc: "Production code from day one. Type-safe, tested, reviewable. You see weekly progress on a staging URL.",
    bullets: ["Weekly demos", "Tested code", "CI/CD from day 1"],
  },
  {
    n: "04",
    icon: Rocket,
    title: "Ship & Iterate",
    desc: "Launch with confidence. Monitoring, feedback loops, and a documented handover so your team can run with it.",
    bullets: ["Observability", "Documentation", "30-day support"],
  },
];

const testimonials = [
  {
    quote: "Mal ships work that feels expensive. The best engineer we've hired — fast, thoughtful, and the design taste is rare.",
    name: "Sarah Chen",
    role: "CTO @ Helix Studio",
    avatar: "S",
    hasVoice: true,
  },
  {
    quote: "He rebuilt our analytics pipeline in six weeks. Queries that took thirty seconds now return in under a hundred milliseconds. Game changer.",
    name: "Marcus Reid",
    role: "Head of Engineering @ Nimbus",
    avatar: "M",
    hasVoice: true,
  },
  {
    quote: "Rare combination of senior engineering depth and genuine design sensibility. Our app finally feels like a product instead of a prototype.",
    name: "Aisha Khan",
    role: "Founder @ Forge",
    avatar: "A",
    hasVoice: false,
  },
  {
    quote: "Clear communicator, brutally pragmatic, and absurdly fast. He shipped more in a month than the previous team did in a quarter.",
    name: "Daniel Ortiz",
    role: "Product Lead @ Atlas",
    avatar: "D",
    hasVoice: true,
  },
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
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/work/${p.slug}`}
                className="bento-card group p-7 block min-h-[320px] flex flex-col justify-between h-full overflow-hidden relative"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-cover bg-center"
                  style={{ backgroundImage: `url(${p.cover})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/40 pointer-events-none" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs text-gold uppercase tracking-wider mb-2">{p.tag}</p>
                    <h3 className="font-mono text-2xl md:text-3xl font-bold">{p.name}</h3>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-gold group-hover:rotate-45 transition" />
                </div>
                <p className="relative font-body text-muted-foreground leading-relaxed my-6">{p.desc}</p>
                <div className="relative flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.slice(0, 4).map(s => (
                      <span key={s} className="font-mono text-[11px] px-2 py-1 rounded-md border border-border text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="font-mono text-xs text-gold">{p.metric}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-mono hover:bg-gold/10 transition"
          >
            View all projects
            <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-mono text-3xl md:text-5xl font-bold">
            <span className="text-gold">/</span> skills & toolkit
          </h2>
          <p className="font-mono text-xs text-muted-foreground">03 — what I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bento-card p-6 group hover:border-gold/40 transition"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition">
                  <g.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-mono text-lg font-bold">{g.title}</h3>
              </div>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                    <span className="text-gold">›</span> {it}
                  </li>
                ))}
              </ul>
            </motion.div>
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
              <li key={t.year} className="grid grid-cols-12 gap-4 px-4 py-7 hover:bg-gold/5 transition rounded-xl">
                <div className="col-span-12 md:col-span-3 font-mono text-xs text-gold pt-1">{t.year}</div>
                <div className="col-span-12 md:col-span-9 space-y-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="font-mono text-lg md:text-xl font-bold">{t.role}</h3>
                    <p className="font-body text-sm text-muted-foreground">{t.place}</p>
                  </div>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
                    {t.summary}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AVAILABILITY */}
      <section id="availability" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-mono text-3xl md:text-5xl font-bold">
            <span className="text-gold">/</span> availability
          </h2>
          <p className="font-mono text-xs text-muted-foreground">— booking window</p>
        </div>

        <div className="grid md:grid-cols-12 gap-5">
          <div className="bento-card md:col-span-5 p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                accepting projects
              </div>
              <p className="font-mono text-4xl md:text-5xl font-bold leading-[1.05] tracking-tighter">
                <span className="gold-gradient-text">2 slots</span><br />open this quarter.
              </p>
              <p className="font-body text-muted-foreground mt-5 max-w-sm leading-relaxed">
                I take on a small number of engagements at a time so each project gets the depth it deserves. Lock in a slot early — calendars fill up two months out.
              </p>
            </div>
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 mt-8 self-start rounded-full bg-gold text-primary-foreground px-5 py-3 font-mono text-sm font-medium hover:bg-[var(--gold-soft)] transition"
            >
              Reserve a slot <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
            {availability.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bento-card p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <a.icon className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">{a.label}</p>
                  <p className="font-mono text-sm md:text-base font-bold mt-1">
                    {a.tone === "good" && <span className="text-gold">● </span>}
                    {a.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-mono text-3xl md:text-5xl font-bold">
            <span className="text-gold">/</span> how I work
          </h2>
          <p className="font-mono text-xs text-muted-foreground">05 — process</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          {process.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bento-card p-6 relative"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center relative z-10">
                  <step.icon className="w-5 h-5 text-gold" />
                </div>
                <span className="font-mono text-3xl font-bold text-border">{step.n}</span>
              </div>
              <h3 className="font-mono text-lg font-bold mb-2">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{step.desc}</p>
              <ul className="space-y-1.5">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 font-mono text-[11px] text-muted-foreground">
                    <CheckCircle2 className="w-3 h-3 text-gold mt-0.5 shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-4 flex-wrap gap-4">
          <h2 className="font-mono text-3xl md:text-5xl font-bold">
            <span className="text-gold">/</span> pricing
          </h2>
          <p className="font-mono text-xs text-muted-foreground">06 — investment</p>
        </div>
        <p className="font-body text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Transparent, fixed-scope pricing for the most common engagements. Every project starts with a free 30-min call so we can scope it properly — final quote is always in writing before we begin.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pricing.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`bento-card p-6 relative flex flex-col ${
                tier.highlight ? "border-gold/60 bg-gradient-to-br from-gold/[0.06] to-transparent" : ""
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gold text-primary-foreground font-mono text-[10px] uppercase tracking-wider font-bold">
                  {tier.badge}
                </span>
              )}

              <div className="mb-5">
                <p className="font-mono text-[11px] text-gold uppercase tracking-wider mb-2">{tier.tagline}</p>
                <h3 className="font-mono text-xl font-bold leading-tight">{tier.name}</h3>
              </div>

              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                {tier.desc}
              </p>

              <div className="mb-5 pb-5 border-b border-border/60">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-3xl font-bold gold-gradient-text">{tier.price}</span>
                  <span className="font-mono text-xs text-muted-foreground">{tier.suffix}</span>
                </div>
                <p className="font-mono text-[11px] text-muted-foreground mt-2">
                  <Clock className="w-3 h-3 inline text-gold mr-1" /> {tier.timeline}
                </p>
              </div>

              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
                Best for
              </p>
              <p className="font-body text-xs text-foreground/80 mb-5">{tier.bestFor}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-mono text-[11px] text-muted-foreground">
                    <CheckCircle2 className="w-3 h-3 text-gold mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
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

        <p className="font-mono text-xs text-muted-foreground text-center mt-8">
          Need something custom or larger? <a href="#contact" className="text-gold hover:underline">Get in touch</a> for a tailored quote.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 max-w-7xl mx-auto px-6">

        <div className="flex items-baseline justify-between mb-10 flex-wrap gap-4">
          <div>
            <h2 className="font-mono text-3xl md:text-5xl font-bold">
              <span className="text-gold">/</span> kind words
            </h2>
            <p className="font-mono text-xs text-muted-foreground mt-2">tap play on the voice cards to hear them</p>
          </div>
          <p className="font-mono text-xs text-muted-foreground">06 — testimonials</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <VoiceTestimonial {...t} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-mono text-3xl md:text-5xl font-bold">
            <span className="text-gold">/</span> let's build something
          </h2>
          <p className="font-mono text-xs text-muted-foreground">07 — contact</p>
        </div>

        <div className="grid md:grid-cols-12 gap-5">
          {/* Intro + WhatsApp + socials */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <div className="bento-card p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
              <p className="font-mono text-xs text-gold mb-4">say hi</p>
              <h3 className="font-mono text-3xl md:text-4xl font-bold leading-[1.05] tracking-tighter">
                Have a project<br />in mind<span className="text-gold">?</span>
              </h3>
              <p className="font-body text-muted-foreground mt-5 leading-relaxed">
                Drop a message via the form, ping me on WhatsApp, or send an email. I reply within 24 hours.
              </p>
            </div>

            <a
              href="https://wa.me/15551234567?text=Hi%20Mal%2C%20I%27d%20love%20to%20talk%20about%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="bento-card p-6 flex items-center justify-between group bg-gradient-to-br from-gold/10 to-transparent border-gold/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-mono font-bold">WhatsApp</p>
                  <p className="font-mono text-xs text-muted-foreground">fastest reply · +1 (555) 123-4567</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-gold group-hover:rotate-45 transition" />
            </a>

            <div className="grid grid-cols-3 gap-3">
              <a href="mailto:hello@mal.dev" className="bento-card p-4 flex flex-col items-center justify-center gap-2 group">
                <Mail className="w-5 h-5 text-gold" />
                <span className="font-mono text-[11px] text-muted-foreground group-hover:text-foreground transition">Email</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="bento-card p-4 flex flex-col items-center justify-center gap-2 group">
                <Github className="w-5 h-5 text-gold" />
                <span className="font-mono text-[11px] text-muted-foreground group-hover:text-foreground transition">GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bento-card p-4 flex flex-col items-center justify-center gap-2 group">
                <Linkedin className="w-5 h-5 text-gold" />
                <span className="font-mono text-[11px] text-muted-foreground group-hover:text-foreground transition">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7 bento-card p-8 md:p-10">
            <ContactForm />
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

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });
  const [sending, setSending] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (name.length < 2 || name.length > 100) return "Please enter your name (2–100 chars).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) return "Please enter a valid email.";
    if (message.length < 10 || message.length > 1000) return "Message should be 10–1000 characters.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) { toast.error(err); return; }
    setSending(true);
    const subject = encodeURIComponent(`New project inquiry — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBudget: ${form.budget || "—"}\n\n${form.message}`
    );
    window.location.href = `mailto:hello@mal.dev?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Message ready to send — your mail app just opened.");
      setForm({ name: "", email: "", budget: "", message: "" });
      setSending(false);
    }, 400);
  };

  const sendWhatsApp = () => {
    const err = validate();
    if (err) { toast.error(err); return; }
    const text = encodeURIComponent(
      `Hi Mal — I'm ${form.name} (${form.email}).\nBudget: ${form.budget || "—"}\n\n${form.message}`
    );
    window.open(`https://wa.me/15551234567?text=${text}`, "_blank", "noopener");
  };

  const field =
    "w-full bg-background/60 border border-border rounded-lg px-4 py-3 font-mono text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div>
        <p className="font-mono text-xs text-gold mb-2">▸ start the conversation</p>
        <h3 className="font-mono text-2xl md:text-3xl font-bold tracking-tight">
          Tell me about your project
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider flex items-center gap-1.5 mb-2">
            <User className="w-3 h-3 text-gold" /> Name
          </span>
          <input type="text" value={form.name} onChange={update("name")} maxLength={100} required placeholder="Ada Lovelace" className={field} />
        </label>
        <label className="block">
          <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider flex items-center gap-1.5 mb-2">
            <AtSign className="w-3 h-3 text-gold" /> Email
          </span>
          <input type="email" value={form.email} onChange={update("email")} maxLength={255} required placeholder="you@company.com" className={field} />
        </label>
      </div>

      <label className="block">
        <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider mb-2 block">Budget (optional)</span>
        <select value={form.budget} onChange={update("budget")} className={field}>
          <option value="">Select a range…</option>
          <option value="< $5k">Less than $5k</option>
          <option value="$5k — $15k">$5k — $15k</option>
          <option value="$15k — $40k">$15k — $40k</option>
          <option value="$40k+">$40k+</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </label>

      <label className="block">
        <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider mb-2 block">Project details</span>
        <textarea value={form.message} onChange={update("message")} rows={5} maxLength={1000} required
          placeholder="What are you building, and what does success look like?"
          className={`${field} resize-none`} />
        <span className="block mt-1 text-right font-mono text-[10px] text-muted-foreground">{form.message.length}/1000</span>
      </label>

      <div className="flex flex-wrap gap-3">
        <button type="submit" disabled={sending}
          className="inline-flex items-center gap-2 rounded-full bg-gold text-primary-foreground px-6 py-3 font-mono text-sm font-medium hover:bg-[var(--gold-soft)] transition disabled:opacity-60">
          {sending ? "Sending…" : "Send message"} <Send className="w-4 h-4" />
        </button>
        <button type="button" onClick={sendWhatsApp}
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 font-mono text-sm hover:bg-gold/10 transition">
          <MessageCircle className="w-4 h-4 text-gold" /> Send via WhatsApp
        </button>
      </div>
    </form>
  );
}
