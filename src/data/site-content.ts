export interface NinetyDayStage {
  month: string;
  stage: string;
  items: string[];
}

export const NINETY_DAY_PLAN: NinetyDayStage[] = [
  {
    month: "Month 1",
    stage: "Foundation",
    items: [
      "Agree the growth or productivity metric that defines success",
      "Stand up the governed path and model routing",
      "Connect first data sources and security safeguards",
    ],
  },
  {
    month: "Month 2",
    stage: "Build and validate",
    items: [
      "Ship the working application to pilot users",
      "Measure outcomes against the agreed metrics",
      "Iterate on real feedback",
    ],
  },
  {
    month: "Month 3",
    stage: "Scale and embed",
    items: [
      "Expand to more teams and use cases",
      "Switch on cost, quality and governance monitoring",
      "Hand over a roadmap for enterprise scale",
    ],
  },
];

export const PROOF_TILES = [
  {
    figure: "8",
    label: "solutions built with clients and running in real operations",
  },
  {
    figure: "3",
    label: "pillars: GrowthWorx, FlowWorx and TrustWorx",
  },
  {
    figure: "6",
    label: "industries served: healthcare, IT services, export trade, retail, education, dental",
  },
  {
    figure: "90 days",
    label: "from kickoff to production, in every pillar",
  },
  {
    figure: "1",
    label: "governed foundation under everything we build",
  },
];

export const INDUSTRIES = [
  "Healthcare",
  "IT services",
  "Export trade",
  "Retail",
  "Education",
  "Dental",
];

export const STAND_ON_PRINCIPLES = [
  {
    title: "Governed from day one.",
    body: "Guardrails, lineage and audit live in the execution path, not bolted on after launch.",
  },
  {
    title: "Agnostic by design.",
    body: "Any model, any cloud, any framework. No customer has to bet on one vendor.",
  },
  {
    title: "Outcomes over demos.",
    body: "Every build is tied to a growth or productivity number agreed before we start.",
  },
  {
    title: "Build once, reuse well.",
    body: "What we learn in one engagement makes the next faster and safer.",
  },
  {
    title: "Built with partners.",
    body: "We scale through systems integrators and telecom partners.",
  },
];

export const GOVERNED_PATH_STEPS = [
  {
    step: "01",
    name: "Identity and trust",
    detail: "SSO, role-based access and per-source authorisation.",
  },
  {
    step: "02",
    name: "Pre-check",
    detail: "Input validation, prompt-injection defence and PII policy.",
  },
  {
    step: "03",
    name: "Planner",
    detail: "Scope task boundaries and required human approval gates.",
  },
  {
    step: "04",
    name: "Grounded knowledge",
    detail: "Retrieve only authorised, cited enterprise context.",
  },
  {
    step: "05",
    name: "Model router",
    detail: "Route to the lowest-cost model meeting quality and residency rules.",
  },
  {
    step: "06",
    name: "Tool boundary",
    detail: "Enforce least-access permissions on systems of action.",
  },
  {
    step: "07",
    name: "Verifier",
    detail: "Check output against policy, grounding and regression guards.",
  },
  {
    step: "08",
    name: "Audit and evidence",
    detail: "Write tamper-evident lineage and cost attribution on every run.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const HOME_FAQS: FaqItem[] = [
  {
    question: "What makes SourceWorx a 360° AI company instead of a point tool vendor?",
    answer:
      "Most vendors sell one slice: a growth application, an automation project or a standalone governance dashboard. SourceWorx brings all three together under one roof — GrowthWorx for revenue applications, FlowWorx for delivery platforms like RoomOS AI and ZTD, and TrustWorx with Singularity governing every model and agent on one execution path.",
  },
  {
    question: "How does the 90-day path to production work?",
    answer:
      "Every engagement runs to the same three-month structure. Month 1 establishes the agreed business metric, stands up the governed path and connects initial data sources. Month 2 ships a working application to pilot users and measures real outcomes. Month 3 expands to broader teams, switches on cost and quality monitoring, and hands over an enterprise scale roadmap.",
  },
  {
    question: "How is Singularity different from AI governance dashboards?",
    answer:
      "Dashboards observe AI after a request has already completed. Singularity sits directly in the execution path — every request passes through identity, pre-check, model routing, tool boundaries, verification and audit before reaching a model or system of action. Policy changes take effect on the very next request, and compliance evidence for the EU AI Act or NIST AI RMF is generated automatically.",
  },
  {
    question: "Are we locked into specific models, clouds or agent frameworks?",
    answer:
      "No. SourceWorx platforms are agnostic by design. You can run across any model provider, cloud region or agent framework, with data-residency rules enforced in-path and model routing that chooses the most cost-effective model meeting your quality and risk bar.",
  },
  {
    question: "Can we configure existing industry applications or build a custom vertical?",
    answer:
      "Yes. Many GrowthWorx engagements begin from working software hardened in live operations — configurable to your workflows and available under your own brand. If your use case is new, our Build with us programme delivers a production vertical on the same governed foundation within 90 days.",
  },
  {
    question: "How do systems integrators and telecom partners work with SourceWorx?",
    answer:
      "Systems integrators license ZTD inside their delivery methodology to accelerate greenfield deployments and neutral migrations across platforms, deliver Singularity on client estates, and resell GrowthWorx applications. Telecom and cloud providers offer governed AI to enterprise and mid-market customers integrated with their existing metered billing.",
  },
];

export interface ArticlePost {
  slug: string;
  type: string;
  title: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  byline: string;
  publishedLabel: string;
  paragraphs: string[];
  bulletPoints?: { heading: string; detail: string }[];
  ctaLabel: string;
  ctaHref: string;
}

export const LAUNCH_ARTICLES: ArticlePost[] = [
  {
    slug: "one-ai-problem",
    type: "Insight",
    title: "Growth, productivity and governance are one AI problem",
    summary: "Why the 360° view of AI beats buying one slice at a time.",
    metaTitle: "Growth, Productivity and Governance: One AI Problem",
    metaDescription:
      "Why enterprises get more from AI when revenue, efficiency and control are planned together, and what that looks like in a 90-day plan.",
    primaryKeyword: "enterprise AI strategy",
    byline: "SourceWorx team",
    publishedLabel: "11 November 2026",
    paragraphs: [
      "Most enterprise AI programmes start in one place. Sales wants an agent that follows up on leads. Operations wants to automate a slow process. Risk wants to know what is already running. Each team buys separately, and a year later the business has three vendors, three data paths and no single view of what AI is worth.",
      "The three goals depend on each other. A growth application that nobody can audit gets switched off at the first incident. A productivity gain that quietly doubles model spend gets questioned at budget time. Governance with nothing valuable to govern is a cost line, not a strategy.",
      "Planning them together changes the first 90 days. You agree the growth or productivity number first, build the application that moves it, and run it on a governed path from the first release. By month three you can show the board the outcome, the cost and the evidence in the same meeting. That is what we mean by the 360° AI company: one partner accountable for all three.",
    ],
    ctaLabel: "Request a briefing to map your goal to a pillar",
    ctaHref: "/contact",
  },
  {
    slug: "neutral-migration",
    type: "Whitepaper brief",
    title: "The neutral migration",
    summary:
      "How SIs should approach platform moves when every vendor has a tool.",
    metaTitle: "The Neutral Migration: Platform Moves for SIs",
    metaDescription:
      "Every platform vendor now has a migration tool. Here is how systems integrators keep an honest assessment and one delivery method.",
    primaryKeyword: "platform migration strategy",
    byline: "SourceWorx team",
    publishedLabel: "11 November 2026",
    paragraphs: [
      "Platform vendors have discovered migration. Each now offers a tool to move customers onto its own platform, and each tool is built to make the switch look easy. For systems integrators, that creates two problems: a customer who deserves an honest view of what to move, and a delivery team that needs one method across every platform it implements.",
      "A neutral approach starts with four questions.",
    ],
    bulletPoints: [
      {
        heading: "What should move at all?",
        detail:
          "Map every object, field and customisation, and flag what to simplify or retire before you price the work.",
      },
      {
        heading: "Can discovery be done once?",
        detail:
          "Carry source context through specification, build and test so no phase starts from scratch.",
      },
      {
        heading: "Where do experts sign off?",
        detail:
          "AI can draft requirements, configuration and tests; certified consultants should approve each stage.",
      },
      {
        heading: "Can you sell it at a fixed price?",
        detail:
          "Repeatable, AI-accelerated stages are what make fixed-scope programmes profitable.",
      },
    ],
    ctaLabel: "See ZTD on a two-week proof of concept",
    ctaHref: "/solutions/ztd",
  },
  {
    slug: "governance-in-the-path",
    type: "Whitepaper brief",
    title: "Why governance must live in the execution path",
    summary: "Dashboards observe. A governed path enforces.",
    metaTitle: "Why AI Governance Must Live in the Execution Path",
    metaDescription:
      "Dashboards observe AI after the fact. A governed path enforces policy as each request runs. Here is why the difference matters for the EU AI Act.",
    primaryKeyword: "AI governance",
    byline: "SourceWorx team",
    publishedLabel: "11 November 2026",
    paragraphs: [
      "Many AI governance tools sit beside the systems they govern. They collect logs, draw dashboards and raise alerts after something has happened. That helps with reporting, but it cannot stop a request that breaks policy, route work to a cheaper model, or prove what a specific agent did with specific data.",
      "Governance in the execution path works differently. Every request passes through identity, policy checks, model routing, tool boundaries and verification before it reaches a model or a system of action. Because nothing can skip the path, the audit trail is complete by design, and evidence for the EU AI Act or NIST AI RMF becomes a by-product of normal running rather than a quarterly project.",
      "The practical test is simple: if a policy changes today, does it apply to the next request, or the next report? Singularity is built for the first answer.",
    ],
    ctaLabel: "Book a Singularity briefing",
    ctaHref: "/solutions/singularity",
  },
];

export const RESOURCE_CARDS = [
  {
    type: "Solution brief",
    title: "GrowthWorx industry applications",
    line: "Six applications, what each one moves, in four pages.",
    status: "Request a copy",
    href: "/contact?interest=GrowthWorx+%C2%B7+industry+applications",
    available: true,
  },
  {
    type: "Solution brief",
    title: "Singularity",
    line: "The operating platform for enterprise AI, in two pages.",
    status: "Request a copy",
    href: "/contact?interest=TrustWorx+%C2%B7+Singularity",
    available: true,
  },
  {
    type: "Solution brief",
    title: "ZTD for systems integrators",
    line: "How a partner licence works, with a sample programme.",
    status: "Request a copy",
    href: "/contact?interest=FlowWorx+%C2%B7+ZTD+for+my+SI+practice",
    available: true,
  },
  {
    type: "Whitepaper",
    title: "Why governance must live in the execution path",
    line: "Dashboards observe. A governed path enforces.",
    status: "Read draft",
    href: "/resources/governance-in-the-path",
    available: true,
  },
  {
    type: "Whitepaper",
    title: "The neutral migration",
    line: "How SIs should approach platform moves when every vendor has a tool.",
    status: "Read draft",
    href: "/resources/neutral-migration",
    available: true,
  },
  {
    type: "Guide",
    title: "The 90-day plan to production AI",
    line: "Month by month, with what your team commits.",
    status: "Coming soon",
    href: null,
    available: false,
  },
  {
    type: "Checklist",
    title: "EU AI Act readiness for AI inventories",
    line: "What to map, classify and evidence first.",
    status: "Coming soon",
    href: null,
    available: false,
  },
  {
    type: "Partners",
    title: "Partner programme",
    line: "For systems integrators, telecom and cloud providers.",
    status: "Learn more",
    href: "/platform#partners",
    available: true,
  },
  {
    type: "Docs",
    title: "Product documentation",
    line: "Setup, integration and administration guides.",
    status: "On request",
    href: "/contact",
    available: true,
  },
];

export const LEADERSHIP_TEAM = [
  {
    name: "Rohil",
    initials: "R",
    role: "Co-founder and CEO",
    bio: "Leads company strategy, enterprise partnerships and outcome-led delivery across all three SourceWorx pillars.",
  },
  {
    name: "Arnav",
    initials: "A",
    role: "Co-founder, Technology",
    bio: "Leads platform architecture and engineering across GrowthWorx applications and the governed AI foundation.",
  },
  {
    name: "Amit",
    initials: "A",
    role: "Co-founder, Technology",
    bio: "Leads systems architecture, FlowWorx productivity platforms and Singularity execution-path engineering.",
  },
  {
    name: "Natasha Indras",
    initials: "NI",
    role: "Founder",
    bio: "Guides long-term vision, industry domain incubation and enterprise partner relationships across markets.",
  },
  {
    name: "Abhinav",
    initials: "A",
    role: "Chief Financial Officer",
    bio: "Leads financial strategy, commercial governance, partner licensing structures and operational scale.",
  },
];

