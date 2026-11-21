export interface InnerPageContent {
  kicker: string;
  title: string;
  subtitle: string;
  metrics?: { value: string; label: string }[];
  sections?: { kicker: string; heading: string; body: string; tags?: string[] }[];
}

export const SERVICE_PAGE_DATA: InnerPageContent = {
  kicker: "[ services ]",
  title: "Quality Engineered Into Every Line of Code",
  subtitle:
    "Behind every service we offer is a team that cares about the details you'll never see. We build, test, and refine until the work is something we stand behind fully.",
  metrics: [
    { value: "50+", label: "Builds Shipped" },
    { value: "10+", label: "Core Services" },
    { value: "19", label: "Countries Served" },
    { value: "30+", label: "In-House Developers" },
  ],
  sections: [
    {
      kicker: "[ FRONTEND + BACKEND ]",
      heading: "Every Service We Offer Held To One Standard",
      body: "There's no premium tier and no shortcut version here, just one bar every service has to clear before it reaches you. Whichever service you choose, the process, the scrutiny, and the outcome stay the same.",
      tags: ["Agentic AI Solutions", "Custom LLM Solutions", "Multi-Tenant SaaS Architecture", "Rapid MVP Development", "Custom iOS & Android", "Enterprise Web Portals"],
    },
    {
      kicker: "[ INDUSTRIES ]",
      heading: "Software Built for Diverse Industry Needs",
      body: "From high-compliance Fintech and Healthcare platforms to high-velocity SaaS, E-commerce, and Proptech products, our cross-functional squads deliver architectures designed for real-world scale.",
      tags: ["SaaS & Startups", "Fintech", "Healthcare", "E-commerce", "Real Estate", "EdTech"],
    },
  ],
};

export const TECHNOLOGY_PAGE_DATA: InnerPageContent = {
  kicker: "[ stacks ]",
  title: "Modern, Proven Technology Stacks",
  subtitle:
    "We balance modern tools with proven ones, so your product stays fast today and easy to maintain later.",
  sections: [
    {
      kicker: "01 · fit",
      heading: "Frontend Development",
      body: "User interactions are designed to feel fast and effortless on all devices using React, Next.js, TypeScript, Vue, Tailwind CSS, and Framer.",
    },
    {
      kicker: "02 · context",
      heading: "Backend Development",
      body: "Behind every smooth interface sits logic that handles requests, processes data, and keeps everything running exactly as expected with Node.js, Python, FastAPI, Django, NestJS, and GraphQL.",
    },
    {
      kicker: "03 · durability",
      heading: "Database & Cloud",
      body: "Every piece of information your product relies on is stored, organized, and protected using PostgreSQL, Supabase, MongoDB, Redis, AWS, Google Cloud, and Kubernetes.",
    },
    {
      kicker: "04 · intelligence",
      heading: "Applied AI & Mobile",
      body: "Production AI orchestration with OpenAI, Anthropic, Gemini, LangChain, Pinecone, and pgvector paired with native iOS, Android, and Flutter mobile engineering.",
    },
  ],
};

export const BLOG_POSTS = [
  {
    category: "Development",
    date: "Nov 2026",
    title: "MVP vs Prototype for Hardware Development: Full Comparison",
    excerpt: "Learn when to invest in functional hardware prototypes versus customer-ready MVPs and how companion software fits into the validation roadmap.",
  },
  {
    category: "Development",
    date: "Nov 2026",
    title: "How to Develop an MVP: Complete 10-Step Guide",
    excerpt: "A practical engineering blueprint covering scope definition, AI-assisted planning, architecture choices, QA gates, and real-user iteration.",
  },
  {
    category: "Development",
    date: "Nov 2026",
    title: "7 Best MVP Development Companies for Startups (2026 Guide)",
    excerpt: "What separates dedicated product engineering teams from solo freelancers and fragmented outsourcing agencies.",
  },
  {
    category: "Research & Data",
    date: "Oct 2026",
    title: "Icon Monks: World’s Largest Free Icon Library Is Live Now!",
    excerpt: "Inside our open design-engineering collaboration providing production-ready vector assets for product teams worldwide.",
  },
];

export const TEAM_LEADERS = [
  {
    name: "Atiqur Rahaman",
    role: "Founder & CEO",
    bio: "Before DevMonks existed, he saw a gap between how design and development were sold to clients. That instinct shaped how he now leads brand and innovation strategy across the company.",
    quote: "“Design without function is just decoration. I built DevMonks so nothing we ship has to choose between the two.”",
  },
  {
    name: "Abdullah Al Noman",
    role: "Co-Founder & COO",
    bio: "Oversees delivery precision, cross-functional engineering velocity, and transparent client operations across 19+ countries.",
    quote: "“Predictable delivery comes from clear systems, honest communication, and engineers who own the outcome.”",
  },
  {
    name: "Saiful Islam",
    role: "Chief Technical Officer (CTO)",
    bio: "Leads systems architecture, AI-embedded engineering workflows, security audits, and scalable multi-tenant SaaS infrastructure.",
    quote: "“AI accelerates our hands, while senior engineering judgment protects the architecture.”",
  },
];

export const OPENSOURCE_PROJECTS = [
  {
    name: "Flutter PIN & OTP Input",
    tag: "Flutter UI",
    description: "Customizable PIN and OTP input fields for Flutter, with animation options and support for custom interfaces.",
  },
  {
    name: "Styled Tab Indicators",
    tag: "Flutter Navigation",
    description: "Add styled tab indicators to Flutter’s standard TabBar without rebuilding your navigation.",
  },
  {
    name: "Draggable Widget Kit",
    tag: "Flutter Interaction",
    description: "Create Flutter widgets that users can drag around the screen with smooth physics.",
  },
  {
    name: "External Video Launcher",
    tag: "Flutter Media",
    description: "Open video files from a Flutter app in external players such as VLC and MX Player.",
  },
  {
    name: "Multi-Session Terminal Workspace",
    tag: "AI DevTools",
    description: "Keep multiple Claude sessions visible in one local terminal workspace, with input triage, worktree isolation, and diff review.",
  },
  {
    name: "Halftone WebGL Surface",
    tag: "WebGL / Shaders",
    description: "Explore halftone effects that turn static grids and media into tactile, animated surfaces.",
  },
  {
    name: "Food Ordering Interface Study",
    tag: "Web Experiment",
    description: "Explore a food-ordering website example and study the source code behind its interface.",
  },
  {
    name: "Pretext Arcade Effect",
    tag: "Browser Experiment",
    description: "A playful browser experiment combining Pretext with a Street Fighter inspired effect.",
  },
];

export const AI_SERVICE_DETAILS: Record<string, { title: string; summary: string; deliverables: string[] }> = {
  "ai-product-development": {
    title: "AI Product Development",
    summary: "End-to-end design and engineering of AI-native web, SaaS, and mobile products built for production scale.",
    deliverables: ["Agentic orchestration & tool calling", "Streaming UX & evaluation pipelines", "Production observability & guardrails"],
  },
  "ai-code-security-audit": {
    title: "AI Code Security Audit",
    summary: "Comprehensive security, architecture, and dependency hardening for AI-assisted and rapidly shipped codebases.",
    deliverables: ["Vulnerability & auth boundary review", "Prompt injection & data-leakage audit", "Automated CI/CD security gates"],
  },
  "ai-consulting": {
    title: "AI Consulting",
    summary: "Pragmatic technical roadmaps identifying high-ROI AI integrations without unnecessary infrastructure bloat.",
    deliverables: ["Build vs. buy model evaluation", "Latency & unit-economics modeling", "Architecture blueprint & pilot scope"],
  },
  "ai-workflow-setup-training": {
    title: "AI Workflow Setup & Training",
    summary: "Embed human-guided AI workflows into your engineering and operations teams with clear governance.",
    deliverables: ["Team workflow automation playbooks", "Custom internal RAG & tooling", "Hands-on engineering enablement"],
  },
  "vibe-code-to-production": {
    title: "Vibe Code to Production",
    summary: "Transform fragile prototypes into hardened, scalable, multi-tenant production software.",
    deliverables: ["Codebase refactoring & type safety", "Database indexing & auth hardening", "Automated test coverage & deployment"],
  },
  "voice-ai-agents": {
    title: "Voice AI Agents",
    summary: "Low-latency conversational voice agents integrated directly with your CRM, scheduling, and support workflows.",
    deliverables: ["Real-time streaming audio pipelines", "Turn-taking & interruption handling", "CRM & telephony webhooks"],
  },
  "ai-agent-evaluation-monitoring": {
    title: "AI Agent Evaluation & Monitoring",
    summary: "Continuous eval suites, drift detection, and tracing to keep production agents accurate and reliable.",
    deliverables: ["Golden dataset & rubric scoring", "Token, latency & hallucination telemetry", "Regression gating in CI"],
  },
  "ai-cost-optimization": {
    title: "AI Cost Optimization",
    summary: "Cut inference spend without losing output quality through smart model routing, caching, and prompt compression.",
    deliverables: ["Semantic & prompt caching layers", "Tiered model routing architecture", "Token budget dashboards"],
  },
  "ai-application-modernization": {
    title: "AI Application Modernization",
    summary: "Upgrade legacy web and enterprise software with modern React/Next.js frontends and intelligent automation.",
    deliverables: ["Incremental strangler-fig migration", "API modernization & cloud readiness", "Embedded AI copilots"],
  },
  "ai-mvp-development": {
    title: "AI MVP Development",
    summary: "Go from founder thesis to a launch-ready, investor-grade AI product in focused, transparent sprints.",
    deliverables: ["Scoped core user journey", "Production frontend, API & DB", "Post-launch iteration roadmap"],
  },
};
