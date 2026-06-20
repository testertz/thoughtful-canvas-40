import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Calendar, CheckCircle2, ExternalLink, Github, User, Briefcase, Clock } from "lucide-react";
import FloatingNav from "@/components/FloatingNav";
import { getProject, projects } from "@/data/projects";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;

  if (!project) return <Navigate to="/" replace />;

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingNav />

      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 noise opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-gold transition mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> back to work
          </Link>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs text-gold uppercase tracking-[0.2em] mb-4"
          >
            {project.tag} · {project.year}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-mono text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] font-bold tracking-tighter"
          >
            {project.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 font-body text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed"
          >
            {project.summary}
          </motion.p>

          {/* Meta grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 border border-border/50 rounded-2xl overflow-hidden">
            <Meta icon={User} label="Role" value={project.role} />
            <Meta icon={Briefcase} label="Client" value={project.client} />
            <Meta icon={Calendar} label="Year" value={project.year} />
            <Meta icon={Clock} label="Duration" value={project.duration} />
          </div>

          {/* CTAs */}
          {(project.link || project.repo) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold text-primary-foreground px-5 py-2.5 text-sm font-mono hover:bg-[var(--gold-soft)] transition"
                >
                  <ExternalLink className="w-4 h-4" /> Live site
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-mono hover:bg-gold/10 hover:border-gold/40 transition"
                >
                  <Github className="w-4 h-4" /> Repository
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* COVER */}
      <section className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bento-card overflow-hidden aspect-[16/9]"
        >
          <img
            src={project.cover}
            alt={`${project.name} cover`}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>
      </section>

      {/* METRICS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-baseline justify-between mb-8 flex-wrap gap-4">
          <h2 className="font-mono text-2xl md:text-4xl font-bold">
            <span className="text-gold">/</span> the numbers
          </h2>
          <p className="font-mono text-xs text-muted-foreground">measured impact</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bento-card p-6"
            >
              <p className="font-mono text-3xl md:text-4xl font-bold gold-gradient-text">{m.value}</p>
              <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider mt-2">
                {m.label}
              </p>
              {m.sub && (
                <p className="font-mono text-[11px] text-gold/70 mt-1">{m.sub}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROBLEM / APPROACH / OUTCOMES */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-12 gap-5">
          <div className="bento-card p-8 md:col-span-5">
            <p className="font-mono text-xs text-gold uppercase tracking-wider mb-3">the problem</p>
            <p className="font-body text-lg leading-relaxed">{project.problem}</p>
          </div>
          <div className="bento-card p-8 md:col-span-7">
            <p className="font-mono text-xs text-gold uppercase tracking-wider mb-3">approach</p>
            <ul className="space-y-3">
              {project.approach.map((step, i) => (
                <li key={i} className="flex gap-3 font-body leading-relaxed">
                  <span className="font-mono text-gold text-sm mt-1">0{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bento-card p-8 md:col-span-12">
            <p className="font-mono text-xs text-gold uppercase tracking-wider mb-4">outcomes</p>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-3">
              {project.outcomes.map((o, i) => (
                <div key={i} className="flex gap-3 font-body leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>{o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-baseline justify-between mb-8 flex-wrap gap-4">
          <h2 className="font-mono text-2xl md:text-4xl font-bold">
            <span className="text-gold">/</span> tech stack
          </h2>
          <p className="font-mono text-xs text-muted-foreground">tools that shipped it</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-sm px-4 py-2 rounded-full border border-border bg-card/40 hover:border-gold/40 hover:text-gold transition"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-baseline justify-between mb-8 flex-wrap gap-4">
          <h2 className="font-mono text-2xl md:text-4xl font-bold">
            <span className="text-gold">/</span> gallery
          </h2>
          <p className="font-mono text-xs text-muted-foreground">{project.gallery.length} shots</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {project.gallery.map((g, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className={`bento-card overflow-hidden ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <div className={`overflow-hidden ${i === 0 ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
                <img
                  src={g.src}
                  alt={g.caption || `${project.name} screenshot ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              {g.caption && (
                <figcaption className="px-5 py-3 font-mono text-xs text-muted-foreground border-t border-border/40">
                  {g.caption}
                </figcaption>
              )}
            </motion.figure>
          ))}
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <Link
          to={`/work/${next.slug}`}
          className="bento-card p-10 md:p-14 block group relative overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative flex items-center justify-between gap-6 flex-wrap">
            <div>
              <p className="font-mono text-xs text-gold uppercase tracking-wider mb-3">next project</p>
              <h3 className="font-mono text-3xl md:text-5xl font-bold group-hover:text-gold transition">
                {next.name}
              </h3>
              <p className="font-body text-muted-foreground mt-3 max-w-xl">{next.desc}</p>
            </div>
            <ArrowUpRight className="w-10 h-10 text-gold group-hover:rotate-45 transition" />
          </div>
        </Link>
      </section>

      <footer className="border-t border-border/40 py-10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} mal.dev
          </p>
          <Link to="/#contact" className="font-mono text-xs text-gold hover:underline">
            hello@mal.dev →
          </Link>
        </div>
      </footer>
    </div>
  );
}

function Meta({ icon: Icon, label, value }: { icon: typeof User; label: string; value: string }) {
  return (
    <div className="bg-background p-5">
      <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
        <Icon className="w-3.5 h-3.5 text-gold" /> {label}
      </div>
      <p className="font-mono text-sm md:text-base font-bold mt-2">{value}</p>
    </div>
  );
}
