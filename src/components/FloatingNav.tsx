import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#work", label: "work" },
  { href: "#skills", label: "skills" },
  { href: "/pricing", label: "pricing" },
  { href: "#process", label: "process" },
  { href: "#about", label: "about" },
  { href: "#contact", label: "contact" },
];

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { pathname, hash } = useLocation();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (!onHome) return;
      const sections = links.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) {
          setActive(id);
          return;
        }
      }
      setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  const hrefFor = (h: string) => {
    if (h.startsWith("/")) return h;
    return onHome ? h : `/${h}`;
  };

  return (
    <>
      {/* Top brand bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="fixed top-5 left-5 z-50"
      >
        <Link
          to="/"
          className="flex items-center gap-2 font-mono font-bold text-sm rounded-full bg-background/70 backdrop-blur-xl border border-border/60 px-4 py-2 shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-gold pulse-gold" />
          <span>mal<span className="text-gold">.</span>dev</span>
        </Link>
      </motion.div>

      {/* Floating pill nav — desktop */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div
          className={`relative flex items-center gap-1 rounded-full border border-border/60 px-2 py-2 transition-all duration-300 ${
            scrolled
              ? "bg-background/80 backdrop-blur-xl shadow-2xl shadow-gold/5"
              : "bg-background/50 backdrop-blur-md"
          }`}
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/10 via-transparent to-gold/10 pointer-events-none" />
          {links.map((l) => {
            const isActive = onHome && active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={hrefFor(l.href)}
                className={`relative px-4 py-1.5 text-sm font-mono rounded-full transition ${
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-gold"
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </a>
            );
          })}
        </div>
      </motion.nav>

      {/* Hire CTA — top right */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-5 right-5 z-50 hidden md:flex items-center gap-2"
      >
        <ThemeToggle />
        <a
          href={hrefFor("#contact")}
          className="group inline-flex items-center gap-2 rounded-full bg-gold text-primary-foreground px-4 py-2 text-sm font-mono font-medium hover:bg-[var(--gold-soft)] transition shadow-lg shadow-gold/20"
        >
          Hire me <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition" />
        </a>
      </motion.div>

      {/* Mobile theme toggle */}
      <div className="md:hidden fixed top-5 right-[4.25rem] z-50">
        <ThemeToggle />
      </div>

      {/* Mobile floating toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        className="md:hidden fixed top-5 right-5 z-50 w-11 h-11 rounded-full bg-background/80 backdrop-blur-xl border border-border/60 flex items-center justify-center shadow-lg"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed top-20 right-5 z-50 w-56 rounded-2xl bg-background/90 backdrop-blur-xl border border-border/60 p-3 shadow-2xl"
          >
            <div className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={hrefFor(l.href)}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 font-mono text-sm rounded-lg text-muted-foreground hover:bg-gold/10 hover:text-gold transition"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={hrefFor("#contact")}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold text-primary-foreground px-4 py-2 text-sm font-mono"
              >
                Hire me <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
