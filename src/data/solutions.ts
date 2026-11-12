export type PillarId = "growth" | "productivity" | "governance";

export type SolutionStatus = "Available now" | "Early access" | "Tailored build" | "Platform";

export interface CapabilityArea {
  area: string;
  features: string[];
}

export interface GrowthSolution {
  slug: string;
  name: string;
  sector: string;
  pillar: PillarId;
  status: SolutionStatus;
  shortDescription: string;
  whatItMoves: string;
  seo: {
    title: string;
    description: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
  };
  headline: string;
  intro: string;
  problems: {
    title: string;
    detail: string;
  }[];
  capabilities: CapabilityArea[];
  whoItIsFor: string;
  howToGetIt: string;
  pricingModel: string;
  highlights: string[];
}

export interface PillarSolutionSummary {
  slug: string;
  href: string;
  name: string;
  sector: string;
  status: SolutionStatus;
  shortDescription: string;
  whatItMoves: string;
  pricingModel: string;
  highlights: string[];
  logoType?: "roomos" | "ztd" | "singularity";
}

export interface PillarMeta {
  id: PillarId;
  number: string;
  name: string;
  subtitle: string;
  tagline: string;
  href: string;
  accentHex: string;
  textHex: string;
  tintHex: string;
  summary: string;
  whatItMoves: string[];
}

export const PILLARS: Record<PillarId, PillarMeta> = {
  growth: {
    id: "growth",
    number: "01",
    name: "GrowthWorx",
    subtitle: "AI for Growth",
    tagline: "Revenue acceleration",
    href: "/growth",
    accentHex: "#48B8A8",
    textHex: "#157A68",
    tintHex: "#E6F5F2",
    summary:
      "Industry AI applications built with real clients and ready for yours. Each one opens a new revenue channel, converts more of the demand you already have, or lets you grow without growing headcount.",
    whatItMoves: [
      "New digital revenue channels under your brand",
      "Higher conversion and plan acceptance",
      "Faster billing and cash collection",
      "Growth without matching growth in headcount",
    ],
  },
  productivity: {
    id: "productivity",
    number: "02",
    name: "FlowWorx",
    subtitle: "AI for Productivity",
    tagline: "Efficiency and delivery quality",
    href: "/productivity",
    accentHex: "#5B8DEF",
    textHex: "#2F5FC4",
    tintHex: "#EDF3FE",
    summary:
      "Platforms that take the slow, manual, specialist-heavy parts out of the work your teams already do. Same processes, fewer hand-offs, measurably better quality.",
    whatItMoves: [
      "Every meeting ends with owned, approved actions",
      "Shorter cycle times, from incident to resolution and discovery to go-live",
      "Less dependence on scarce specialists",
      "Consistent, measurable delivery quality",
    ],
  },
  governance: {
    id: "governance",
    number: "03",
    name: "TrustWorx",
    subtitle: "AI Governance",
    tagline: "See it, control it, prove it",
    href: "/governance",
    accentHex: "#8B7BFF",
    textHex: "#5B46C9",
    tintHex: "#F1EFFE",
    summary:
      "Growth and productivity only last if AI stays accountable. Singularity maps every model and agent, enforces policy where each request runs, and turns every run into evidence for boards, auditors and regulators.",
    whatItMoves: [
      "A live inventory of every model, agent and tool",
      "Policy enforced in the execution path",
      "AI cost attributed and contained",
      "Evidence mapped to the EU AI Act and NIST AI RMF",
    ],
  },
};

export const GROWTH_SOLUTIONS: GrowthSolution[] = [
  {
    slug: "care-operations",
    name: "Specialty care operations",
    sector: "Healthcare",
    pillar: "growth",
    status: "Available now",
    shortDescription: "Run home-visit and long-term care end to end.",
    whatItMoves: "Take on more patients and centres without growing the admin team.",
    seo: {
      title: "Specialty Care Operations Software | GrowthWorx",
      description:
        "Home-visit and long-term care in one system: registries, visits, clinical records, billing and outcomes. Grow centres without growing admin.",
      primaryKeyword: "palliative care software",
      secondaryKeywords: [
        "home care management software",
        "long-term care platform",
        "healthcare NGO software",
      ],
    },
    headline: "Run long-term and home-based care from one place.",
    intro:
      "A care operations platform for providers whose patients need ongoing care, not one-off appointments. Registries, home visits, clinical records, billing and outcomes in one system.",
    problems: [
      {
        title: "Built for the wrong visit.",
        detail:
          "Generic clinic software is built around OPD prescriptions, not a patient you visit at home every week.",
      },
      {
        title: "Care lives in registers.",
        detail:
          "Visit plans, medication, family contacts and outcomes sit in registers and spreadsheets.",
      },
      {
        title: "Outcomes nobody can show.",
        detail:
          "Funders and partner hospitals want outcome numbers the team can't easily produce.",
      },
    ],
    capabilities: [
      {
        area: "Patients and families",
        features: [
          "Patient registry",
          "Family and caregiver charts",
          "Service journeys per care discipline",
        ],
      },
      {
        area: "Visits and teams",
        features: [
          "Home-visit calendar with drafts and approvals",
          "Active visit tracking and providers",
          "Call logs and teleconsultation",
        ],
      },
      {
        area: "Clinical and operations",
        features: [
          "OPD and clinical records",
          "Pain management on the WHO analgesic ladder",
          "Inventory, dispensing and GST-ready billing",
        ],
      },
      {
        area: "Outcomes",
        features: [
          "Programme analytics",
          "Geospatial patient distribution",
          "Multi-organisation management",
        ],
      },
    ],
    whoItIsFor:
      "Palliative care centres, specialty and integrative clinics, home-care programmes and healthcare NGOs running several centres.",
    howToGetIt:
      "Subscription per site, with network pricing for multi-centre organisations.",
    pricingModel: "Subscription per site · Network pricing",
    highlights: [
      "Patient registry & caregiver charts",
      "Home-visit calendar & active tracking",
      "WHO analgesic ladder & clinical records",
      "Inventory, dispensing & GST-ready billing",
      "Call logs & teleconsultation",
      "Geospatial distribution & programme analytics",
      "Multi-organisation management",
      "Service journeys per care discipline",
    ],
  },
  {
    slug: "services-finance",
    name: "Services finance",
    sector: "IT and professional services",
    pillar: "growth",
    status: "Available now",
    shortDescription: "Timesheet to invoice to payroll, in one flow.",
    whatItMoves: "Invoices raised straight from timesheets, so cash comes in sooner.",
    seo: {
      title: "Timesheet to Invoice to Payroll Software | GrowthWorx",
      description:
        "Finance operations for IT services firms: resource and project billing, invoices from timesheets, payroll dispatch. Faster billing, faster cash.",
      primaryKeyword: "IT services billing software",
      secondaryKeywords: [
        "timesheet to invoice software",
        "resource billing",
        "consultancy finance software",
      ],
    },
    headline: "From timesheet to invoice to payroll, in one flow.",
    intro:
      "Finance operations for IT services firms that bill some clients by the resource and others by the project. Month-end stops being a reconciliation exercise.",
    problems: [
      {
        title: "Three tools, one number.",
        detail:
          "Timesheets, invoices and payroll live in different tools, so finance rebuilds the same numbers every month.",
      },
      {
        title: "Two billing models.",
        detail:
          "Resource billing and project billing follow different rules and rarely reconcile cleanly.",
      },
      {
        title: "Late timesheets, late cash.",
        detail: "Missing submissions delay invoices and collections.",
      },
    ],
    capabilities: [
      {
        area: "Billing",
        features: [
          "Timesheet sync and automatic invoices",
          "Resource and project billing side by side",
          "Credit notes and reconciliation",
        ],
      },
      {
        area: "Commercials",
        features: ["Purchase orders", "Client management", "Payment tracking"],
      },
      {
        area: "People",
        features: [
          "Payroll dispatch",
          "Employee and consultant records",
          "Skill matrix across the bench",
        ],
      },
      {
        area: "Operations",
        features: [
          "Reminders for missing submissions",
          "Personal to-do lists",
          "Role-based access for finance and sales",
        ],
      },
    ],
    whoItIsFor:
      "IT services firms, systems integrators and consultancies of roughly 50 to 500 people.",
    howToGetIt: "Subscription per firm, priced by billable headcount.",
    pricingModel: "Subscription per firm · By billable headcount",
    highlights: [
      "Timesheet sync & automatic invoices",
      "Resource & project billing side by side",
      "Credit notes & reconciliation",
      "Purchase orders & payment tracking",
      "Payroll dispatch",
      "Employee & consultant records",
      "Skill matrix across the bench",
      "Role-based access for finance & sales",
    ],
  },
  {
    slug: "export-growth-crm",
    name: "Export growth CRM",
    sector: "Export and trade",
    pillar: "growth",
    status: "Available now",
    shortDescription: "Win international buyers for the exporters you serve.",
    whatItMoves:
      "More buyer matches per exporter, and market reports clients pay for.",
    seo: {
      title: "Export CRM and Buyer Matchmaking | GrowthWorx",
      description:
        "A CRM for export consultancies: pipeline, HSN-level scoping, generated market reports and buyer matchmaking. Win more international buyers.",
      primaryKeyword: "export CRM software",
      secondaryKeywords: [
        "buyer matchmaking platform",
        "export consultancy software",
        "market report automation",
      ],
    },
    headline: "Win international buyers for the exporters you serve.",
    intro:
      "A client operating system for firms that help exporters grow abroad. Pipeline, service plans and buyer search in one place, plus the market reports your clients pay for.",
    problems: [
      {
        title: "Generic CRMs miss trade.",
        detail:
          "They don't understand trade requirements, HSN codes or buyer matchmaking.",
      },
      {
        title: "Reports by hand.",
        detail: "Market reports are assembled manually for every client.",
      },
      {
        title: "Invisible scope creep.",
        detail: "Service plans and deliverables live in spreadsheets.",
      },
    ],
    capabilities: [
      {
        area: "Pipeline",
        features: [
          "Lead management with conversion analytics",
          "Activities, tasks and calendar",
        ],
      },
      {
        area: "Client workspaces",
        features: [
          "Contacts and trade requirements",
          "Product scoping by HSN code",
        ],
      },
      {
        area: "Market intelligence and matchmaking",
        features: [
          "Generated market reports",
          "Buyer discovery and matchmaking engine",
          "Trade directory",
        ],
      },
      {
        area: "Service delivery",
        features: [
          "Plan tiers with hours, deliverables and costing",
          "Templates and role-based access",
        ],
      },
    ],
    whoItIsFor:
      "Export consultancies, export promotion councils, state export facilitation bodies and trade service firms.",
    howToGetIt: "Subscription per firm, with optional report packs.",
    pricingModel: "Subscription per firm · Optional report packs",
    highlights: [
      "Lead management & conversion analytics",
      "Product scoping by HSN code",
      "Generated market reports",
      "Buyer discovery & matchmaking engine",
      "Trade directory",
      "Plan tiers with hours & costing",
      "Contacts & trade requirements",
      "Templates & role-based access",
    ],
  },
  {
    slug: "fix-my-fit",
    name: "Fix My Fit",
    sector: "Retail · made-to-measure",
    pillar: "growth",
    status: "Early access",
    shortDescription: "Take tailoring orders online, under your own brand.",
    whatItMoves:
      "A new online revenue channel, and repeat orders from saved measurements.",
    seo: {
      title: "Fix My Fit | Made-to-Measure Commerce Platform",
      description:
        "Take tailoring and alteration orders online under your own brand. Saved measurements, fitting pipeline and multi-store growth.",
      primaryKeyword: "made-to-measure ecommerce platform",
      secondaryKeywords: [
        "online tailoring software",
        "alteration order management",
        "white-label tailoring app",
      ],
    },
    headline: "Take tailoring orders online, under your own brand.",
    intro:
      "Made-to-measure commerce for tailoring and alteration brands, under their own name. Customers order online, measurements are saved for next time, and every garment moves through fittings to delivery.",
    problems: [
      {
        title: "Paper order books.",
        detail: "Orders and measurements live on paper.",
      },
      {
        title: "Where is my garment?.",
        detail: "Customers call to chase status.",
      },
      {
        title: "Hard to add a store.",
        detail: "Growing beyond one store means duplicating everything.",
      },
    ],
    capabilities: [
      {
        area: "Ordering",
        features: [
          "Branded online ordering",
          "Saved measurement profiles per customer",
        ],
      },
      {
        area: "Production",
        features: [
          "Fitting and alteration pipeline",
          "Order status updates to customers",
        ],
      },
      {
        area: "Growth",
        features: ["Multi-store management", "Launch under your own brand"],
      },
    ],
    whoItIsFor:
      "Tailoring studios, boutiques, alteration chains and direct-to-consumer made-to-measure brands.",
    howToGetIt: "Early access programme, then subscription per store.",
    pricingModel: "Early access · Subscription per store",
    highlights: [
      "Branded online ordering",
      "Saved measurement profiles",
      "Fitting & alteration pipeline",
      "Order status updates to customers",
      "Multi-store management",
      "White-label under your own brand",
    ],
  },
  {
    slug: "impact-analytics",
    name: "Programme impact analytics",
    sector: "Education and CSR",
    pillar: "growth",
    status: "Tailored build",
    shortDescription: "Prove what an education programme changes.",
    whatItMoves: "Outcome evidence that helps win the next round of funding.",
    seo: {
      title: "Education Programme Impact Analytics | GrowthWorx",
      description:
        "Baseline to endline assessment analytics by school, grade and skill. Outcome evidence for funders, CSR teams and state education departments.",
      primaryKeyword: "education impact measurement software",
      secondaryKeywords: [
        "CSR impact analytics",
        "learning outcomes dashboard",
        "NGO assessment platform",
      ],
    },
    headline: "Prove what an education programme actually changes.",
    intro:
      "Assessment and outcome analytics that follow learners from baseline to endline, down to the school, grade and skill.",
    problems: [
      {
        title: "Data, not insight.",
        detail: "Survey tools stop at clean data; analysis takes weeks.",
      },
      {
        title: "Funder questions.",
        detail: "Funders want outcomes by district and cohort.",
      },
      {
        title: "Scale and language.",
        detail:
          "Assessments run in several languages across hundreds of schools.",
      },
    ],
    capabilities: [
      {
        area: "Assessment",
        features: [
          "Assessment submission and surveys",
          "Multilingual assessment items",
        ],
      },
      {
        area: "Outcomes",
        features: [
          "Baseline, midline and endline tracking",
          "Mastery by construct and grade",
        ],
      },
      {
        area: "Reporting",
        features: [
          "State, district and school drill-downs",
          "Participation summaries for funders",
        ],
      },
    ],
    whoItIsFor: "Education NGOs, CSR programmes and state education departments.",
    howToGetIt:
      "Licensed per programme and configured to your assessment framework.",
    pricingModel: "Licensed per programme · Configured to framework",
    highlights: [
      "Assessment submission & surveys",
      "Multilingual assessment items",
      "Baseline, midline & endline tracking",
      "Mastery by construct & grade",
      "State, district & school drill-downs",
      "Participation summaries for funders",
    ],
  },
  {
    slug: "patient-report-studio",
    name: "Patient report studio",
    sector: "Dental",
    pillar: "growth",
    status: "Tailored build",
    shortDescription: "Consented, branded reports after every consultation.",
    whatItMoves: "More consultations turn into accepted treatment plans.",
    seo: {
      title: "Dental Patient Report Software | GrowthWorx",
      description:
        "Turn every dental consultation into a consented, branded report with photos and a phased treatment plan. More accepted treatment plans.",
      primaryKeyword: "dental patient report software",
      secondaryKeywords: [
        "dental treatment plan presentation",
        "dental consent software",
        "dental case acceptance",
      ],
    },
    headline: "Send every patient home with a report they understand.",
    intro:
      "Turns a dental consultation into a clear, consented, branded report, with clinical photos, the treatment plan in phases, and a record of what was sent.",
    problems: [
      {
        title: "Forgotten consultations.",
        detail:
          "Patients forget what was discussed, so treatment decisions stall.",
      },
      {
        title: "Scattered records.",
        detail: "Consent and photo records live in different places.",
      },
      {
        title: "No time to write.",
        detail:
          "A proper follow-up for every patient takes time teams don't have.",
      },
    ],
    capabilities: [
      {
        area: "Consent and capture",
        features: [
          "Digital consent collection",
          "Standardised clinical photo series",
        ],
      },
      {
        area: "Intelligence",
        features: [
          "OCR and AI interpretation of notes",
          "Treatment visualisation",
        ],
      },
      {
        area: "Delivery",
        features: [
          "Procedure phasing tables",
          "Branded PDF reports by email",
          "Dispatch logs and two-factor sign-in",
        ],
      },
    ],
    whoItIsFor: "Cosmetic and general dental practices.",
    howToGetIt:
      "Tailored build per practice; available to dental software resellers as a white-label module.",
    pricingModel: "Tailored build · White-label module available",
    highlights: [
      "Digital consent collection",
      "Standardised clinical photo series",
      "OCR & AI interpretation of notes",
      "Treatment visualisation",
      "Procedure phasing tables",
      "Branded PDF reports by email",
      "Dispatch logs & two-factor sign-in",
    ],
  },
];

export const ALL_SOLUTION_SUMMARIES: Record<PillarId, PillarSolutionSummary[]> = {
  growth: GROWTH_SOLUTIONS.map((s) => ({
    slug: s.slug,
    href: `/solutions/${s.slug}`,
    name: s.name,
    sector: s.sector,
    status: s.status,
    shortDescription: s.shortDescription,
    whatItMoves: s.whatItMoves,
    pricingModel: s.pricingModel,
    highlights: s.highlights,
  })),
  productivity: [
    {
      slug: "roomos",
      href: "/solutions/roomos",
      name: "RoomOS AI",
      sector: "Platform · meeting rooms",
      status: "Platform",
      shortDescription:
        "The room that thinks, speaks, decides and acts. Meetings in any language become owned, approved actions in your business systems.",
      whatItMoves:
        "Measured on action quality, time saved and time to resolution in a 90-day pilot.",
      pricingModel: "90-day pilot · Enterprise room deployment",
      logoType: "roomos",
      highlights: [
        "AI Boardroom · executive chief of staff",
        "Universal Language · real-time multilingual",
        "Autonomous War Room · incident command",
        "AI Deal Room · CRM-aware selling",
        "Intelligent Workplace · self-managing rooms",
        "Human confirmation gates before execution",
        "ServiceNow & enterprise system workflows",
        "Governed by Singularity audit trail",
      ],
    },
    {
      slug: "ztd",
      href: "/solutions/ztd",
      name: "ZTD · Zero Touch Deployment",
      sector: "Platform · for systems integrators",
      status: "Platform",
      shortDescription:
        "Deploy and migrate enterprise platforms with AI, inside your SI practice.",
      whatItMoves:
        "Targets ~50% faster delivery and ~30% lower implementation cost.",
      pricingModel: "Annual partner licence · Per-engagement",
      logoType: "ztd",
      highlights: [
        "Discover source data model & customisations",
        "Map objects & flag what to simplify or retire",
        "Specify requirements via AI-run workshops",
        "Plan user stories & sprint allocations",
        "Build configuration, workflows & migrate data",
        "Generated test cases & data reconciliation",
        "Expert sign-off at every stage",
        "Vendor-neutral across CRM & workflow platforms",
      ],
    },
  ],
  governance: [
    {
      slug: "singularity",
      href: "/solutions/singularity",
      name: "Singularity",
      sector: "Platform",
      status: "Platform",
      shortDescription:
        "The operating platform for enterprise AI. Map, sense, direct, prove and evolve every model, agent and tool on one governed path.",
      whatItMoves:
        "Targets 20–40% lower AI operating cost and 50%+ less risk exposure.",
      pricingModel: "Enterprise platform · Partner-delivered",
      logoType: "singularity",
      highlights: [
        "Live AI estate inventory & shadow AI discovery",
        "EU AI Act risk tiering & NIST AI RMF mapping",
        "Real-time telemetry & drift detection",
        "In-path policy & data sovereignty enforcement",
        "Cost attribution & quality-gated model routing",
        "Tool boundary & prompt-injection defence",
        "Tamper-evident lineage & audit packs",
        "Any model, any cloud, any agent framework",
      ],
    },
  ],
};

export function getGrowthSolutionBySlug(slug: string): GrowthSolution | undefined {
  return GROWTH_SOLUTIONS.find((item) => item.slug === slug);
}

