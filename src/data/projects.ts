export type Project = {
  slug: string;
  name: string;
  tag: string;
  year: string;
  role: string;
  client: string;
  duration: string;
  desc: string;
  summary: string;
  problem: string;
  approach: string[];
  outcomes: string[];
  stack: string[];
  metrics: { label: string; value: string; sub?: string }[];
  gallery: { src: string; caption?: string }[];
  cover: string;
  metric: string;
  link?: string;
  repo?: string;
};

// Unsplash images (free to use)
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const projects: Project[] = [
  {
    slug: "nimbus-analytics",
    name: "Nimbus Analytics",
    tag: "SaaS · Realtime",
    year: "2025",
    role: "Lead Fullstack Engineer",
    client: "Nimbus Labs",
    duration: "6 months",
    desc: "Real-time product analytics dashboard processing 12M events/day with sub-100ms queries.",
    summary:
      "A realtime product analytics platform for B2B SaaS teams. Tracks user events, funnels, retention and revenue across millions of sessions with sub-second dashboards.",
    problem:
      "The existing pipeline took 30–60 seconds to surface fresh data and crumbled past 2M daily events. Customers were leaving for faster alternatives.",
    approach: [
      "Migrated event ingestion to a ClickHouse cluster with Kafka buffering",
      "Built a typed query layer in tRPC with Redis-backed result caching",
      "Designed a streaming dashboard with virtualized charts and optimistic state",
      "Rolled out feature flags + canary releases via Vercel edge middleware",
    ],
    outcomes: [
      "Cut median query time from 4.2s to 84ms (50× faster)",
      "Scaled ingestion from 2M to 12M events/day on the same infra budget",
      "Lifted dashboard DAU by 41% in the first quarter post-launch",
      "Reduced infra cost per event by 62% via columnar storage + tiered retention",
    ],
    stack: ["Next.js", "tRPC", "ClickHouse", "Kafka", "Redis", "PostgreSQL", "AWS", "Terraform"],
    metrics: [
      { label: "Events / day", value: "12M", sub: "from 2M" },
      { label: "Median query", value: "84ms", sub: "from 4.2s" },
      { label: "DAU lift", value: "+41%", sub: "Q1 post-launch" },
      { label: "Cost / event", value: "-62%", sub: "year over year" },
    ],
    gallery: [
      { src: u("photo-1551288049-bebda4e38f71"), caption: "Realtime overview dashboard" },
      { src: u("photo-1460925895917-afdab827c52f"), caption: "Funnel & retention explorer" },
      { src: u("photo-1551434678-e076c223a692"), caption: "Streaming events pipeline" },
      { src: u("photo-1542744173-8e7e53415bb0"), caption: "Custom report builder" },
    ],
    cover: u("photo-1551288049-bebda4e38f71"),
    metric: "12M events/day",
    link: "https://example.com",
    repo: "https://github.com",
  },
  {
    slug: "helix-commerce",
    name: "Helix Commerce",
    tag: "E-commerce",
    year: "2024",
    role: "Fullstack Engineer",
    client: "Helix Studio",
    duration: "4 months",
    desc: "Headless storefront for a fashion brand. +38% conversion, 98 Lighthouse score.",
    summary:
      "A buttery-fast headless storefront for a premium fashion label. Rebuilt the entire purchase journey from PDP to checkout with a focus on speed and craft.",
    problem:
      "The legacy Shopify theme scored 36 on mobile Lighthouse and lost 70% of mobile visitors before checkout.",
    approach: [
      "Rebuilt on Remix with edge rendering and image CDN",
      "Designed a single-step checkout with Shop Pay + Apple Pay",
      "Implemented a custom design system with motion-driven product views",
      "A/B tested PDP variations using Statsig",
    ],
    outcomes: [
      "Lighthouse mobile score: 36 → 98",
      "Conversion rate up 38% (validated across two seasons)",
      "Mobile bounce rate down from 71% to 29%",
      "Time-to-interactive under 1.1s on 4G",
    ],
    stack: ["Remix", "Shopify Hydrogen", "Stripe", "Tailwind", "Cloudflare", "Statsig"],
    metrics: [
      { label: "Conversion", value: "+38%", sub: "two seasons" },
      { label: "Lighthouse", value: "98", sub: "mobile" },
      { label: "TTI", value: "1.1s", sub: "4G" },
      { label: "AOV", value: "+19%", sub: "bundled PDP" },
    ],
    gallery: [
      { src: u("photo-1483985988355-763728e1935b"), caption: "Editorial home page" },
      { src: u("photo-1490481651871-ab68de25d43d"), caption: "Product detail with motion" },
      { src: u("photo-1469334031218-e382a71b716b"), caption: "Lookbook collections" },
      { src: u("photo-1441986300917-64674bd600d8"), caption: "Single-step checkout" },
    ],
    cover: u("photo-1483985988355-763728e1935b"),
    metric: "+38% CVR",
    link: "https://example.com",
  },
  {
    slug: "forge-ai",
    name: "Forge AI",
    tag: "AI · Tooling",
    year: "2025",
    role: "Founder & Engineer",
    client: "Independent",
    duration: "Ongoing",
    desc: "AI-powered code review bot integrated with GitHub. Catches bugs before humans do.",
    summary:
      "A GitHub-native code review agent that reads diffs, surfaces real bugs, and suggests refactors with context from your whole repository.",
    problem:
      "Senior engineers were drowning in trivial PR feedback while real bugs slipped through. Existing tools produced noise, not signal.",
    approach: [
      "Built a repo-aware RAG pipeline using tree-sitter + pgvector",
      "Designed an evaluation harness with 4,000 labeled PRs",
      "Tuned a multi-step agent that proposes diffs, not just comments",
      "Shipped a GitHub App with org-level installation and SOC2-ready logs",
    ],
    outcomes: [
      "10,000+ pull requests reviewed across 120 repos",
      "True-positive rate of 84% on critical bug benchmark (industry avg: ~52%)",
      "Reduced reviewer time per PR by an average of 27 minutes",
      "Adopted by 40+ engineering teams in private beta",
    ],
    stack: ["Python", "FastAPI", "OpenAI", "pgvector", "Postgres", "Redis", "GitHub Apps"],
    metrics: [
      { label: "PRs reviewed", value: "10k+", sub: "120 repos" },
      { label: "True-positive", value: "84%", sub: "vs 52% avg" },
      { label: "Time saved", value: "27 min", sub: "per PR" },
      { label: "Teams", value: "40+", sub: "private beta" },
    ],
    gallery: [
      { src: u("photo-1555066931-4365d14bab8c"), caption: "Inline review suggestions" },
      { src: u("photo-1518770660439-4636190af475"), caption: "Repo-aware context graph" },
      { src: u("photo-1517694712202-14dd9538aa97"), caption: "Evaluation harness UI" },
      { src: u("photo-1551288049-bebda4e38f71"), caption: "Org-level analytics" },
    ],
    cover: u("photo-1555066931-4365d14bab8c"),
    metric: "10k+ PRs reviewed",
    repo: "https://github.com",
  },
  {
    slug: "atlas-maps",
    name: "Atlas Maps",
    tag: "Mobile · Geo",
    year: "2024",
    role: "Mobile & Backend",
    client: "Atlas Travel Co.",
    duration: "8 months",
    desc: "Offline-first travel mapping app with custom vector tiles and route planning.",
    summary:
      "An offline-first mobile app for hikers and overland travelers. Custom vector tiles, route planning, and waypoint sync — all working with zero signal.",
    problem:
      "Existing map apps fall apart offline. Travelers needed reliable navigation in remote areas with smooth UX rivaling Google Maps.",
    approach: [
      "Built a custom vector tile pipeline from OSM data",
      "Implemented MBTiles bundling for offline regions",
      "Designed CRDT-based sync so trips merge cleanly across devices",
      "Optimized rendering with Mapbox GL Native + Skia overlays",
    ],
    outcomes: [
      "4.8★ App Store rating across 12,000+ reviews",
      "Tiles render at 60fps offline on 3-year-old devices",
      "Average session: 18 minutes (genre benchmark: 6 minutes)",
      "Featured by Apple in 'Apps We Love' — Travel, 2024",
    ],
    stack: ["React Native", "Mapbox GL", "SQLite", "Rust", "Node.js", "PostGIS"],
    metrics: [
      { label: "Rating", value: "4.8★", sub: "12k reviews" },
      { label: "Session", value: "18 min", sub: "3× genre avg" },
      { label: "Offline", value: "60fps", sub: "low-end devices" },
      { label: "Featured", value: "Apple", sub: "Apps We Love" },
    ],
    gallery: [
      { src: u("photo-1524661135-423995f22d0b"), caption: "Trail map with vector tiles" },
      { src: u("photo-1469854523086-cc02fe5d8800"), caption: "Route planner" },
      { src: u("photo-1502920917128-1aa500764cbd"), caption: "Offline region downloads" },
      { src: u("photo-1500530855697-b586d89ba3ee"), caption: "Trip journal & sync" },
    ],
    cover: u("photo-1524661135-423995f22d0b"),
    metric: "4.8★ App Store",
    link: "https://example.com",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
