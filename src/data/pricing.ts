export interface PricingTier {
  name: string;
  tagline: string;
  price: string;
  suffix: string;
  timeline: string;
  desc: string;
  bestFor: string;
  features: string[];
  highlight: boolean;
  badge?: string;
}

export const pricing: PricingTier[] = [
  {
    name: "Landing & Marketing Site",
    tagline: "Brochure · Launch · Portfolio",
    price: "$1,500",
    suffix: "starting",
    timeline: "1 — 2 weeks",
    desc: "A polished, fast-loading single-page or small multi-page site to launch your product, agency, or personal brand. Pixel-perfect, animated, and SEO-ready.",
    bestFor: "Founders, freelancers, agencies, product launches",
    features: [
      "Up to 5 custom-designed pages",
      "Responsive across all devices",
      "Lighthouse 95+ performance",
      "SEO + meta + Open Graph",
      "Contact form & analytics",
      "Deployed on Vercel / Netlify",
    ],
    highlight: false,
  },
  {
    name: "Full Web Application",
    tagline: "SaaS · Dashboard · Marketplace",
    price: "$6,000",
    suffix: "starting",
    timeline: "4 — 8 weeks",
    desc: "End-to-end product builds with authentication, database, dashboards, payments, and admin panels. Production-ready code your team can extend.",
    bestFor: "Startups, MVPs, internal tools, SaaS platforms",
    features: [
      "Custom UI + design system",
      "Auth, roles, and permissions",
      "Database + REST/GraphQL API",
      "Payments (Stripe / Paddle)",
      "Admin dashboard",
      "CI/CD, tests, monitoring",
      "Handover docs + 30 days support",
    ],
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "AI-Powered Product",
    tagline: "LLM · RAG · Agents · Automation",
    price: "$9,500",
    suffix: "starting",
    timeline: "6 — 10 weeks",
    desc: "AI-first apps that ship, not demos. Chatbots, copilots, document Q&A, semantic search, agents that act on your data and APIs.",
    bestFor: "AI startups, B2B tooling, knowledge platforms",
    features: [
      "RAG pipeline + vector store",
      "Custom prompts & evals",
      "Streaming chat UI",
      "Multi-step agents & tools",
      "Usage limits & billing",
      "Observability + logs",
      "Model-provider agnostic",
    ],
    highlight: false,
  },
  {
    name: "Retainer & Ongoing",
    tagline: "Monthly · Part-time CTO",
    price: "$3,800",
    suffix: "/ month",
    timeline: "Rolling monthly",
    desc: "Dedicated weekly hours for evolving products — new features, refactors, architecture decisions, hiring, and code reviews.",
    bestFor: "Funded startups, growing teams, post-launch products",
    features: [
      "20 hrs/week dedicated time",
      "Weekly syncs + roadmap",
      "Architecture & code reviews",
      "Pair with your team",
      "Slack / WhatsApp access",
      "Pause anytime",
    ],
    highlight: false,
  },
];

export const allFeatures = [
  "Custom design & UI system",
  "Responsive across all devices",
  "Lighthouse 95+ performance",
  "SEO, meta tags & Open Graph",
  "Contact form & analytics",
  "Auth, roles & permissions",
  "Database + API layer",
  "Payments (Stripe / Paddle)",
  "Admin dashboard",
  "CI/CD, tests & monitoring",
  "RAG pipeline + vector store",
  "Streaming chat UI",
  "Multi-step AI agents",
  "Observability + logs",
  "Weekly syncs & roadmap",
  "Slack / WhatsApp access",
  "Handover docs",
  "30-day post-launch support",
];

export const featureMatrix: Record<string, (string | boolean)[]> = {
  "Landing & Marketing Site": [
    true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, true, false,
  ],
  "Full Web Application": [
    true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, true, true,
  ],
  "AI-Powered Product": [
    true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, true, true,
  ],
  "Retainer & Ongoing": [
    true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,
  ],
};
